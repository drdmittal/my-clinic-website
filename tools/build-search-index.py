#!/usr/bin/env python3
"""Build search-index.json for the clinic website search page.

Run from the repo root:  python3 tools/build-search-index.py
It reads every public .html page, skips private or noindex pages, and writes
search-index.json (title, url, description, headings and visible text).
The GitHub Action in .github/workflows/search-index.yml runs this on every push.
"""
import json
import os
import re
from html.parser import HTMLParser

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
OUT = os.path.join(ROOT, 'search-index.json')
EXCLUDE = {
    'doctor-panel.html', 'shelf.html', 'search.html',
    'parent-tools/fever-care.html', 'parent-tools/golu-game.html',
}
SKIP_TAGS = {'script', 'style', 'noscript', 'svg', 'head'}


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ''
        self.description = ''
        self.keywords = ''
        self.noindex = False
        self.headings = []
        self.text = []
        self._skip = 0
        self._in_title = False
        self._in_heading = False
        self._heading_buf = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'meta':
            name = (a.get('name') or '').lower()
            if name == 'robots' and 'noindex' in (a.get('content') or '').lower():
                self.noindex = True
            if name == 'description':
                self.description = a.get('content') or ''
            if name == 'keywords':
                self.keywords = a.get('content') or ''
        if tag == 'title':
            self._in_title = True
        if tag in SKIP_TAGS:
            self._skip += 1
        if tag in ('h1', 'h2', 'h3'):
            self._in_heading = True
            self._heading_buf = []

    def handle_endtag(self, tag):
        if tag == 'title':
            self._in_title = False
        if tag in SKIP_TAGS and self._skip:
            self._skip -= 1
        if tag in ('h1', 'h2', 'h3') and self._in_heading:
            h = clean(''.join(self._heading_buf))
            if h:
                self.headings.append(h)
            self._in_heading = False

    def handle_data(self, data):
        if self._in_title:
            self.title += data
            return
        if self._skip:
            return
        if self._in_heading:
            self._heading_buf.append(data)
        self.text.append(data)


def clean(s):
    return re.sub(r'\s+', ' ', s).strip()


def page_entry(path):
    rel = os.path.relpath(path, ROOT).replace(os.sep, '/')
    with open(path, encoding='utf-8', errors='ignore') as f:
        html = f.read()
    p = PageParser()
    p.feed(html)
    if p.noindex:
        return None
    # Pages with a bilingual <h1> have en and hi spans; the joined text keeps both languages.
    # Pages whose text is drawn by JavaScript add a keywords meta tag so they can still be found.
    text = clean(' '.join(p.text) + ' ' + p.keywords)
    if len(text) < 80:
        return None
    return {
        'url': '/' + rel,
        'title': clean(p.title) or rel,
        'description': clean(p.description),
        'headings': p.headings[:40],
        'text': text[:20000],
    }


def main():
    entries = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if not d.startswith('.') and d not in ('node_modules', 'tools')]
        for fn in filenames:
            if not fn.endswith('.html'):
                continue
            full = os.path.join(dirpath, fn)
            rel = os.path.relpath(full, ROOT).replace(os.sep, '/')
            if rel in EXCLUDE or rel.startswith('private-tools/'):
                continue
            e = page_entry(full)
            if e:
                entries.append(e)
    entries.sort(key=lambda e: e['url'])
    with open(OUT, 'w', encoding='utf-8') as f:
        json.dump({'pages': entries}, f, ensure_ascii=False, separators=(',', ':'))
    print('pages indexed:', len(entries), 'size:', os.path.getsize(OUT), 'bytes')


if __name__ == '__main__':
    main()
