#!/usr/bin/env node
/*
 * Encrypt / decrypt private patient pages (password protected, client side).
 * Used for tools shown only to diagnosed patients (private-tools/).
 *
 * Commands (pass the password in an environment variable, so it is not kept in shell history):
 *   PASSWORD='...' node tools/private-page.js encrypt <source.html> <private-tools/name.enc.json>
 *   PASSWORD='...' node tools/private-page.js decrypt <private-tools/name.enc.json> <out.html>
 *   OLD='...' NEW='...' node tools/private-page.js rekey <private-tools/*.enc.json>
 *
 * Format: PBKDF2-SHA256 (310,000 rounds) -> AES-256-GCM. The browser decrypts it with
 * Web Crypto in private-tools/index.html. The same format is used on both sides.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ITER = 310000;

function derive(pw, salt, iter) {
  return crypto.pbkdf2Sync(pw, salt, iter, 32, 'sha256');
}

function encrypt(pw, plain) {
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', derive(pw, salt, ITER), iv);
  const body = Buffer.concat([c.update(plain, 'utf8'), c.final()]);
  return {
    v: 1,
    kdf: 'PBKDF2-SHA256',
    iter: ITER,
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    data: Buffer.concat([body, c.getAuthTag()]).toString('base64'),
  };
}

function decrypt(pw, obj) {
  const salt = Buffer.from(obj.salt, 'base64');
  const iv = Buffer.from(obj.iv, 'base64');
  const all = Buffer.from(obj.data, 'base64');
  const tag = all.subarray(all.length - 16);
  const body = all.subarray(0, all.length - 16);
  const d = crypto.createDecipheriv('aes-256-gcm', derive(pw, salt, obj.iter), iv);
  d.setAuthTag(tag);
  return Buffer.concat([d.update(body), d.final()]).toString('utf8');
}

function need(name) {
  const v = process.env[name];
  if (!v) { console.error(`Set ${name}=... in the environment`); process.exit(1); }
  return v;
}

const [cmd, a, b] = process.argv.slice(2);

if (cmd === 'encrypt') {
  const html = fs.readFileSync(a, 'utf8');
  fs.writeFileSync(b, JSON.stringify(encrypt(need('PASSWORD'), html)) + '\n');
  console.log('Encrypted ->', b);
} else if (cmd === 'decrypt') {
  const obj = JSON.parse(fs.readFileSync(a, 'utf8'));
  fs.writeFileSync(b, decrypt(need('PASSWORD'), obj));
  console.log('Decrypted ->', b);
} else if (cmd === 'rekey') {
  // Accepts one or more files: rekey private-tools/*.enc.json
  const files = process.argv.slice(3);
  for (const f of files) {
    const obj = JSON.parse(fs.readFileSync(f, 'utf8'));
    const html = decrypt(need('OLD'), obj);
    fs.writeFileSync(f, JSON.stringify(encrypt(need('NEW'), html)) + '\n');
    console.log('Re-encrypted with new password:', path.basename(f));
  }
} else {
  console.log('Usage: see header of tools/private-page.js');
  process.exit(1);
}
