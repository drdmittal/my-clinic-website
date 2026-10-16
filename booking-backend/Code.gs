/**
 * Dr. Dinesh Mittal Child Clinic — online booking backend (Google Apps Script)
 *
 * Bound to a Google Sheet with three tabs (created by setup()):
 *   Settings  – slot length, patients per slot, timings, admin PIN, WhatsApp keys
 *   Blocked   – periods when booking is closed (leave, busy hours)
 *   Bookings  – every booking (one row each)
 *
 * The website (book.html / doctor-panel.html) talks to this script through its
 * Web App URL. Parents only ever see free/full slot counts, never other names.
 */

// If this script is NOT opened from inside the sheet (Extensions → Apps Script),
// paste the sheet's ID here (the long code in the sheet's web address between /d/ and /edit).
var SHEET_ID = '';

var TAB_SETTINGS = 'Booking Settings';
var TAB_BLOCKED = 'Blocked Times';
var TAB_BOOKINGS = 'Online Bookings';
var NEW_BOOKING_PAGE = 'https://childspecialistrohini.com/book.html';

function SS() {
  // accepts a plain ID or a full sheet link (extra slashes or /edit are ignored)
  var id = String(SHEET_ID || '').trim();
  var m = id.match(/\/d\/([a-zA-Z0-9_-]+)/) || id.match(/([a-zA-Z0-9_-]{25,})/);
  var ss = m ? SpreadsheetApp.openById(m[1]) : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('No sheet found. Open this script from the sheet (Extensions → Apps Script) or fill in SHEET_ID.');
  return ss;
}

var TZ = 'Asia/Kolkata';
var OFFSET = '+05:30';
var DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

var DEFAULT_SETTINGS = [
  ['SLOT_MINUTES', 15, 'Length of each slot in minutes (10, 15, 20, 30)'],
  ['PER_SLOT', 2, 'Default number of patients allowed in one slot'],
  ['DAYS_AHEAD', 7, 'How many days ahead parents can book'],
  ['MIN_NOTICE_MINUTES', 30, 'A slot closes this many minutes before it starts'],
  ['SESSIONS_MON', '10:00-13:00, 18:00-20:30', 'Sessions; add @3 after a session to allow 3 per slot in it, e.g. 18:00-20:30@3'],
  ['SESSIONS_TUE', '10:00-13:00, 18:00-20:30', ''],
  ['SESSIONS_WED', '10:00-13:00, 18:00-20:30', ''],
  ['SESSIONS_THU', '10:00-13:00, 18:00-20:30', ''],
  ['SESSIONS_FRI', '10:00-13:00, 18:00-20:30', ''],
  ['SESSIONS_SAT', '10:00-13:00, 18:00-20:30', ''],
  ['SESSIONS_SUN', '11:00-12:00', 'Leave empty for a closed day'],
  ['MAX_BOOKINGS_PER_PHONE_PER_DAY', 3, 'Stops one number filling many slots'],
  ['ADMIN_PIN', '4321', 'PIN for the doctor panel — CHANGE THIS'],
  ['CLINIC_NAME', 'Dr. Dinesh Mittal Child Clinic', ''],
  ['CLINIC_PHONE', '+91 81305 21456', ''],
  ['CLINIC_ADDRESS', 'H-34/69, Sector 3, Rohini, Delhi 110085', ''],
  ['LEGACY_TAB', 'APPOINTMENTS', 'Old booking tab whose upcoming bookings still occupy slots (leave empty to ignore)'],
  ['LEGACY_DATE_COL', 'E', 'Column with the date in the old tab'],
  ['LEGACY_TIME_COL', 'F', 'Column with the time (e.g. 18:45) in the old tab'],
  ['LEGACY_NAME_COL', 'B', 'Column with the child name in the old tab'],
  ['LEGACY_PHONE_COL', 'D', 'Column with the phone number in the old tab'],
  ['LEGACY_STATUS_COL', 'H', 'Column with the status in the old tab'],
  ['LEGACY_ACTIVE_STATUS', 'Confirmed', 'Status text that means the old booking is still active'],
  ['WA_ENABLED', 'NO', 'YES after WhatsApp Cloud API is set up'],
  ['WA_TOKEN', '', 'Permanent access token from Meta (keep private)'],
  ['WA_PHONE_NUMBER_ID', '', 'Phone number ID from Meta WhatsApp settings'],
  ['WA_API_VERSION', 'v21.0', 'Graph API version'],
  ['WA_LANG', 'en', 'Template language code (en or hi)'],
  ['WA_TEMPLATE_CONFIRM', 'appointment_confirmed', 'Approved template name'],
  ['WA_TEMPLATE_REMINDER', 'appointment_reminder', 'Approved template name'],
  ['WA_TEMPLATE_CANCEL', 'appointment_cancelled', 'Approved template name']
];

var BOOKING_HEADERS = ['Booking ID', 'Created', 'Date', 'Time', 'Child name', 'Child age', 'Parent name', 'Phone', 'Reason', 'WhatsApp OK', 'Status', 'Reminded', 'Note'];
var COL = { id: 0, created: 1, date: 2, time: 3, child: 4, age: 5, parent: 6, phone: 7, reason: 8, wa: 9, status: 10, reminded: 11, note: 12 };

/* ------------------------------------------------------------------ setup */

/** Run once from the editor: creates the three tabs with defaults. */
function setup() {
  var ss = SS();
  ss.setSpreadsheetTimeZone(TZ);
  var st = ss.getSheetByName(TAB_SETTINGS) || ss.insertSheet(TAB_SETTINGS);
  if (st.getLastRow() < 2) {
    st.clear();
    st.getRange(1, 1, 1, 3).setValues([['Setting', 'Value', 'What it means']]).setFontWeight('bold');
    st.getRange(2, 1, DEFAULT_SETTINGS.length, 3).setValues(DEFAULT_SETTINGS);
    st.getRange('B:B').setNumberFormat('@');
    st.setColumnWidth(1, 260); st.setColumnWidth(2, 260); st.setColumnWidth(3, 420);
    st.setFrozenRows(1);
  } else {
    // add any settings that are missing (after an upgrade)
    var have = st.getRange(2, 1, st.getLastRow() - 1, 1).getValues().map(function (r) { return String(r[0]).trim(); });
    DEFAULT_SETTINGS.forEach(function (row) { if (have.indexOf(row[0]) < 0) st.appendRow(row); });
  }
  var bl = ss.getSheetByName(TAB_BLOCKED) || ss.insertSheet(TAB_BLOCKED);
  if (bl.getLastRow() < 1) {
    bl.getRange(1, 1, 1, 4).setValues([['From', 'To', 'Message to parents', 'Added']]).setFontWeight('bold');
    bl.getRange('A:B').setNumberFormat('dd mmm yyyy, hh:mm am/pm');
    bl.setColumnWidth(1, 200); bl.setColumnWidth(2, 200); bl.setColumnWidth(3, 380);
    bl.setFrozenRows(1);
  }
  var bk = ss.getSheetByName(TAB_BOOKINGS) || ss.insertSheet(TAB_BOOKINGS);
  if (bk.getLastRow() < 1) {
    bk.getRange(1, 1, 1, BOOKING_HEADERS.length).setValues([BOOKING_HEADERS]).setFontWeight('bold');
    bk.getRange('C:D').setNumberFormat('@');
    bk.getRange('H:H').setNumberFormat('@');
    bk.setFrozenRows(1);
  }
  return 'Setup done';
}

/** Run once after WhatsApp is ready: sends reminders every evening around 7 pm. */
function installReminderTrigger() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'sendReminders') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('sendReminders').timeBased().everyDays(1).atHour(19).inTimezone(TZ).create();
  return 'Reminder trigger installed (daily ~7 pm)';
}

/* ------------------------------------------------------------------ web */

function doGet(e) {
  var p = (e && e.parameter) || {};
  try {
    if (p.action === 'slots') return out(getSlots(p.from, Number(p.days || 0)));
    if (p.action === 'ping') return out({ ok: true });
    if (!p.action) return redirectPage();
    return out({ ok: false, error: 'unknown_action' });
  } catch (err) {
    return out({ ok: false, error: String(err && err.message || err) });
  }
}

function doPost(e) {
  var body = {};
  try { body = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (x) { return out({ ok: false, error: 'bad_json' }); }
  try {
    if (body.action === 'book') return out(book(body));
    if (body.action && body.action.indexOf('admin_') === 0) return out(admin(body));
    return out({ ok: false, error: 'unknown_action' });
  } catch (err) {
    return out({ ok: false, error: String(err && err.message || err) });
  }
}

/** Old booking links open this page, which sends parents to the new booking page. */
function redirectPage() {
  var url = NEW_BOOKING_PAGE;
  var html = '<!doctype html><html><head><base target="_top"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<style>body{margin:0;font-family:system-ui,sans-serif;background:#f6f8fc;color:#152238;display:grid;place-items:center;min-height:100vh;text-align:center;padding:24px}' +
    'a{display:inline-block;margin-top:18px;background:#1f5fbf;color:#fff;text-decoration:none;font-weight:700;font-size:20px;padding:16px 28px;border-radius:999px}</style></head>' +
    '<body><div><h1 style="margin:0 0 6px">Dr. Dinesh Mittal Child Clinic</h1>' +
    '<p>Online booking has moved to our website.<br>ऑनलाइन बुकिंग अब हमारी वेबसाइट पर है।</p>' +
    '<a href="' + url + '">Book appointment / अपॉइंटमेंट बुक करें</a></div>' +
    '<script>try{window.top.location.href=' + JSON.stringify(url) + ';}catch(e){}</script></body></html>';
  return HtmlService.createHtmlOutput(html).setTitle('Book appointment | Dr. Dinesh Mittal').addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/* ------------------------------------------------------------------ data */

function settings() {
  var st = SS().getSheetByName(TAB_SETTINGS);
  var rows = st.getRange(2, 1, Math.max(1, st.getLastRow() - 1), 2).getValues();
  var s = {};
  DEFAULT_SETTINGS.forEach(function (r) { s[r[0]] = r[1]; });
  rows.forEach(function (r) { var k = String(r[0]).trim(); if (k) s[k] = r[1]; });
  s.SLOT_MINUTES = clampNum(s.SLOT_MINUTES, 5, 120, 15);
  s.PER_SLOT = clampNum(s.PER_SLOT, 1, 20, 2);
  s.DAYS_AHEAD = clampNum(s.DAYS_AHEAD, 1, 60, 7);
  s.MIN_NOTICE_MINUTES = clampNum(s.MIN_NOTICE_MINUTES, 0, 1440, 30);
  s.MAX_BOOKINGS_PER_PHONE_PER_DAY = clampNum(s.MAX_BOOKINGS_PER_PHONE_PER_DAY, 1, 20, 3);
  return s;
}

function clampNum(v, lo, hi, def) {
  var n = Number(v);
  if (!isFinite(n)) return def;
  return Math.max(lo, Math.min(hi, Math.round(n)));
}

/** "10:00-13:00, 18:00-20:30@3" -> [{start:600,end:780,cap:null},{start:1080,end:1230,cap:3}] */
function parseSessions(txt) {
  return String(txt || '').split(',').map(function (part) {
    var m = part.trim().match(/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})(?:\s*@\s*(\d+))?$/);
    if (!m) return null;
    return { start: +m[1] * 60 + +m[2], end: +m[3] * 60 + +m[4], cap: m[5] ? +m[5] : null };
  }).filter(function (x) { return x && x.end > x.start; });
}

function pad(n) { return (n < 10 ? '0' : '') + n; }
function hhmm(min) { return pad(Math.floor(min / 60)) + ':' + pad(min % 60); }
function label(min) { var h = Math.floor(min / 60), m = min % 60, ap = h >= 12 ? 'PM' : 'AM', h12 = ((h + 11) % 12) + 1; return h12 + ':' + pad(m) + ' ' + ap; }
function atIST(dateStr, min) { return new Date(dateStr + 'T' + hhmm(min) + ':00' + OFFSET); }
function ymd(d) { return Utilities.formatDate(d, TZ, 'yyyy-MM-dd'); }
function dow(dateStr) { return new Date(dateStr + 'T12:00:00' + OFFSET).getUTCDay(); }
function addDays(dateStr, n) { var d = new Date(dateStr + 'T12:00:00' + OFFSET); d.setUTCDate(d.getUTCDate() + n); return ymd(d); }
function prettyDate(dateStr) { return Utilities.formatDate(new Date(dateStr + 'T12:00:00' + OFFSET), TZ, 'EEE, d MMM yyyy'); }

function blocks() {
  var bl = SS().getSheetByName(TAB_BLOCKED);
  if (!bl || bl.getLastRow() < 2) return [];
  return bl.getRange(2, 1, bl.getLastRow() - 1, 3).getValues().map(function (r, i) {
    return { row: i + 2, from: toDate(r[0]), to: toDate(r[1]), msg: String(r[2] || '') };
  }).filter(function (b) { return b.from && b.to && b.to > b.from; });
}

function toDate(v) {
  if (v instanceof Date) return v;
  if (!v) return null;
  var d = new Date(v);
  return isNaN(d) ? null : d;
}

function bookingRows() {
  var bk = SS().getSheetByName(TAB_BOOKINGS);
  if (!bk || bk.getLastRow() < 2) return [];
  return bk.getRange(2, 1, bk.getLastRow() - 1, BOOKING_HEADERS.length).getDisplayValues().map(function (r, i) {
    r.row = i + 2; return r;
  });
}

/** Upcoming bookings made with the old form (so the same slot is not booked twice). */
function legacyRows() {
  var s = settings();
  var tab = String(s.LEGACY_TAB || '').trim();
  if (!tab) return [];
  var sh = SS().getSheetByName(tab);
  if (!sh || sh.getLastRow() < 2) return [];
  function colIdx(letter) { var L = String(letter || '').trim().toUpperCase(); var n = 0; for (var i = 0; i < L.length; i++) n = n * 26 + (L.charCodeAt(i) - 64); return n - 1; }
  var cD = colIdx(s.LEGACY_DATE_COL), cT = colIdx(s.LEGACY_TIME_COL), cN = colIdx(s.LEGACY_NAME_COL), cP = colIdx(s.LEGACY_PHONE_COL), cS = colIdx(s.LEGACY_STATUS_COL);
  var active = String(s.LEGACY_ACTIVE_STATUS || 'Confirmed').trim().toLowerCase();
  var today = ymd(new Date());
  var width = Math.max(cD, cT, cN, cP, cS) + 1;
  var raw = sh.getRange(2, 1, sh.getLastRow() - 1, width).getValues();
  var disp = sh.getRange(2, 1, sh.getLastRow() - 1, width).getDisplayValues();
  var out = [];
  for (var i = 0; i < raw.length; i++) {
    var dv = raw[i][cD], date = '';
    if (dv instanceof Date) date = ymd(dv);
    else { var m = String(disp[i][cD]).match(/(\d{4})-(\d{1,2})-(\d{1,2})/); if (m) date = m[1] + '-' + pad(+m[2]) + '-' + pad(+m[3]); }
    if (!date || date < today) continue;
    if (cS >= 0 && String(disp[i][cS]).trim().toLowerCase() !== active) continue;
    var tv = raw[i][cT], time = '';
    if (tv instanceof Date) time = Utilities.formatDate(tv, TZ, 'HH:mm');
    else { var t = String(disp[i][cT]).match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i); if (t) { var h = +t[1]; if (t[3]) { h = h % 12 + (/pm/i.test(t[3]) ? 12 : 0); } time = pad(h) + ':' + t[2]; } }
    if (!time) continue;
    out.push({ date: date, time: time, child: String(disp[i][cN] || ''), phone: String(disp[i][cP] || '').replace(/\D/g, '').slice(-10), row: i + 2 });
  }
  return out;
}

function isActive(r) { return String(r[COL.status]).indexOf('Booked') === 0; }

/* ------------------------------------------------------------------ slots */

function getSlots(from, days) {
  var s = settings();
  var today = ymd(new Date());
  var start = from && /^\d{4}-\d{2}-\d{2}$/.test(from) && from >= today ? from : today;
  var n = Math.min(days || s.DAYS_AHEAD, s.DAYS_AHEAD);
  var lastDay = addDays(today, s.DAYS_AHEAD - 1);
  var counts = {};
  bookingRows().forEach(function (r) { if (isActive(r)) { var k = r[COL.date] + ' ' + r[COL.time]; counts[k] = (counts[k] || 0) + 1; } });
  legacyRows().forEach(function (r) { var k = r.date + ' ' + r.time; counts[k] = (counts[k] || 0) + 1; });
  var bl = blocks();
  var now = new Date();
  var outDays = [];
  for (var i = 0; i < n; i++) {
    var d = addDays(start, i);
    if (d > lastDay) break;
    var sessions = parseSessions(s['SESSIONS_' + DAYS[dow(d)]]);
    var day = { date: d, label: prettyDate(d), sessions: [], blockedMsg: '' };
    sessions.forEach(function (ses) {
      var cap = ses.cap || s.PER_SLOT;
      var list = [];
      for (var m = ses.start; m + s.SLOT_MINUTES <= ses.end; m += s.SLOT_MINUTES) {
        var t = atIST(d, m);
        var tEnd = new Date(t.getTime() + s.SLOT_MINUTES * 60000);
        var blk = null;
        bl.forEach(function (b) { if (t < b.to && tEnd > b.from) blk = b; });
        if (blk && !day.blockedMsg) day.blockedMsg = blk.msg;
        var taken = counts[d + ' ' + hhmm(m)] || 0;
        var past = t.getTime() - now.getTime() < s.MIN_NOTICE_MINUTES * 60000;
        list.push({ time: hhmm(m), label: label(m), left: (blk || past) ? 0 : Math.max(0, cap - taken), cap: cap, state: blk ? 'blocked' : past ? 'past' : (taken >= cap ? 'full' : 'open') });
      }
      day.sessions.push({ name: ses.start < 12 * 60 ? 'morning' : ses.start < 17 * 60 ? 'afternoon' : 'evening', from: label(ses.start), to: label(ses.end), slots: list });
    });
    day.closed = !sessions.length;
    outDays.push(day);
  }
  return { ok: true, slotMinutes: s.SLOT_MINUTES, days: outDays, clinic: { name: s.CLINIC_NAME, phone: s.CLINIC_PHONE, address: s.CLINIC_ADDRESS } };
}

/* ------------------------------------------------------------------ book */

function cleanText(v, max) { return String(v || '').replace(/[\u0000-\u001f<>]/g, ' ').replace(/^[=+\-@]+/, '').trim().slice(0, max); }

function book(b) {
  var s = settings();
  var date = String(b.date || ''), time = String(b.time || '');
  var child = cleanText(b.childName, 60), parent = cleanText(b.parentName, 60), age = cleanText(b.childAge, 20), reason = cleanText(b.reason, 200);
  var phone = String(b.phone || '').replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '').replace(/^0(?=\d{10}$)/, '');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) return { ok: false, error: 'bad_slot' };
  if (!child) return { ok: false, error: 'need_child_name' };
  if (!/^[6-9]\d{9}$/.test(phone)) return { ok: false, error: 'bad_phone' };
  if (b.website) return { ok: true, id: 'X' }; // honeypot field filled by bots

  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var data = getSlots(date, 1);
    var day = data.days[0];
    if (!day || day.date !== date) return { ok: false, error: 'day_unavailable' };
    var slot = null;
    day.sessions.forEach(function (ses) { ses.slots.forEach(function (x) { if (x.time === time) slot = x; }); });
    if (!slot) return { ok: false, error: 'bad_slot' };
    if (slot.state === 'blocked') return { ok: false, error: 'blocked', message: day.blockedMsg };
    if (slot.left < 1) return { ok: false, error: 'slot_full' };
    var samePhone = bookingRows().filter(function (r) { return isActive(r) && r[COL.date] === date && r[COL.phone] === phone; }).length;
    if (samePhone >= s.MAX_BOOKINGS_PER_PHONE_PER_DAY) return { ok: false, error: 'too_many' };

    var id = 'DM' + Utilities.formatDate(new Date(), TZ, 'yyMMdd') + '-' + Math.floor(1000 + Math.random() * 9000);
    var wa = b.whatsapp ? 'YES' : 'NO';
    var sheet = SS().getSheetByName(TAB_BOOKINGS);
    sheet.appendRow([id, Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm'), "'" + date, "'" + time, child, age, parent, "'" + phone, reason, wa, 'Booked', '', '']);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }

  var waSent = false;
  if (wa === 'YES') waSent = sendTemplate(s, s.WA_TEMPLATE_CONFIRM, phone, [child, prettyDate(date), label(toMin(time))]);
  return { ok: true, id: id, date: date, dateLabel: prettyDate(date), time: time, timeLabel: label(toMin(time)), childName: child, whatsappSent: waSent };
}

function toMin(t) { var p = t.split(':'); return +p[0] * 60 + +p[1]; }

/* ------------------------------------------------------------------ admin */

function admin(b) {
  var s = settings();
  if (!b.pin || String(b.pin) !== String(s.ADMIN_PIN)) { Utilities.sleep(1200); return { ok: false, error: 'wrong_pin' }; }
  var ss = SS();

  if (b.action === 'admin_load') {
    var editable = {};
    ['SLOT_MINUTES', 'PER_SLOT', 'DAYS_AHEAD', 'MIN_NOTICE_MINUTES', 'SESSIONS_MON', 'SESSIONS_TUE', 'SESSIONS_WED', 'SESSIONS_THU', 'SESSIONS_FRI', 'SESSIONS_SAT', 'SESSIONS_SUN'].forEach(function (k) { editable[k] = s[k]; });
    var now = new Date();
    var bl = blocks().filter(function (x) { return x.to > now; }).map(function (x) {
      return { row: x.row, from: Utilities.formatDate(x.from, TZ, "EEE d MMM, h:mm a"), to: Utilities.formatDate(x.to, TZ, "EEE d MMM, h:mm a"), msg: x.msg };
    });
    return { ok: true, settings: editable, blocks: bl, whatsapp: String(s.WA_ENABLED).toUpperCase() === 'YES' };
  }

  if (b.action === 'admin_save_settings') {
    var st = ss.getSheetByName(TAB_SETTINGS);
    var rows = st.getRange(2, 1, st.getLastRow() - 1, 1).getValues();
    var allowed = ['SLOT_MINUTES', 'PER_SLOT', 'DAYS_AHEAD', 'MIN_NOTICE_MINUTES', 'SESSIONS_MON', 'SESSIONS_TUE', 'SESSIONS_WED', 'SESSIONS_THU', 'SESSIONS_FRI', 'SESSIONS_SAT', 'SESSIONS_SUN'];
    var vals = b.settings || {};
    allowed.forEach(function (k) {
      var v = k in vals ? String(vals[k]).trim() : '';
      if (k.indexOf('SESSIONS_') === 0 && v && !parseSessions(v).length) throw new Error('Could not read timings for ' + k.slice(9) + '. Use e.g. 10:00-13:00, 18:00-20:30');
    });
    allowed.forEach(function (k) {
      if (!(k in vals)) return;
      var v = String(vals[k]).trim();
      for (var i = 0; i < rows.length; i++) { if (String(rows[i][0]).trim() === k) { st.getRange(i + 2, 2).setValue(v); return; } }
      st.appendRow([k, v, '']);
    });
    return { ok: true };
  }

  if (b.action === 'admin_block') {
    var from = new Date(String(b.from) + OFFSET), to = new Date(String(b.to) + OFFSET);
    if (isNaN(from) || isNaN(to) || to <= from) return { ok: false, error: 'bad_range' };
    var msg = cleanText(b.message, 200) || 'Dr. Mittal is not available at this time.';
    ss.getSheetByName(TAB_BLOCKED).appendRow([from, to, msg, Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm')]);
    var affected = bookingRows().filter(function (r) {
      if (!isActive(r)) return false; var t = atIST(r[COL.date], toMin(r[COL.time])); return t >= from && t < to;
    });
    var cancelled = 0, notified = 0;
    if (b.cancelAffected) {
      var sheet = ss.getSheetByName(TAB_BOOKINGS);
      affected.forEach(function (r) {
        sheet.getRange(r.row, COL.status + 1).setValue('Cancelled (doctor unavailable)');
        cancelled++;
        if (r[COL.wa] === 'YES' && sendTemplate(s, s.WA_TEMPLATE_CANCEL, r[COL.phone], [r[COL.child], prettyDate(r[COL.date]), label(toMin(r[COL.time]))])) notified++;
      });
    }
    return { ok: true, affected: affected.map(function (r) { return { date: r[COL.date], time: label(toMin(r[COL.time])), child: r[COL.child], phone: r[COL.phone] }; }), cancelled: cancelled, notified: notified };
  }

  if (b.action === 'admin_unblock') {
    var row = Number(b.row);
    var bls = ss.getSheetByName(TAB_BLOCKED);
    if (row >= 2 && row <= bls.getLastRow()) bls.deleteRow(row);
    return { ok: true };
  }

  if (b.action === 'admin_day') {
    var d = /^\d{4}-\d{2}-\d{2}$/.test(String(b.date)) ? String(b.date) : ymd(new Date());
    var list = bookingRows().filter(function (r) { return r[COL.date] === d; }).map(function (r) {
      return { row: r.row, id: r[COL.id], time: r[COL.time], timeLabel: label(toMin(r[COL.time])), child: r[COL.child], age: r[COL.age], parent: r[COL.parent], phone: r[COL.phone], reason: r[COL.reason], status: r[COL.status], wa: r[COL.wa] };
    });
    legacyRows().filter(function (r) { return r.date === d; }).forEach(function (r) {
      list.push({ row: 0, id: 'Old form', time: r.time, timeLabel: label(toMin(r.time)), child: r.child, age: '', parent: '', phone: r.phone, reason: '', status: 'Booked (old form)', wa: 'NO', legacy: true });
    });
    list.sort(function (a, c) { return a.time < c.time ? -1 : a.time > c.time ? 1 : 0; });
    return { ok: true, date: d, dateLabel: prettyDate(d), bookings: list };
  }

  if (b.action === 'admin_cancel') {
    var sh = ss.getSheetByName(TAB_BOOKINGS);
    var r = Number(b.row);
    if (r < 2 || r > sh.getLastRow()) return { ok: false, error: 'bad_row' };
    var vals2 = sh.getRange(r, 1, 1, BOOKING_HEADERS.length).getDisplayValues()[0];
    if (vals2[COL.id] !== String(b.id)) return { ok: false, error: 'mismatch' };
    sh.getRange(r, COL.status + 1).setValue('Cancelled');
    var sent = false;
    if (b.notify && vals2[COL.wa] === 'YES') sent = sendTemplate(s, s.WA_TEMPLATE_CANCEL, vals2[COL.phone], [vals2[COL.child], prettyDate(vals2[COL.date]), label(toMin(vals2[COL.time]))]);
    return { ok: true, notified: sent };
  }

  return { ok: false, error: 'unknown_action' };
}

/* ------------------------------------------------------------------ WhatsApp */

/** Sends an approved WhatsApp template. Returns true if Meta accepted it. */
function sendTemplate(s, templateName, phone, params) {
  if (String(s.WA_ENABLED).toUpperCase() !== 'YES' || !s.WA_TOKEN || !s.WA_PHONE_NUMBER_ID || !templateName) return false;
  var url = 'https://graph.facebook.com/' + (s.WA_API_VERSION || 'v21.0') + '/' + s.WA_PHONE_NUMBER_ID + '/messages';
  var payload = {
    messaging_product: 'whatsapp',
    to: '91' + phone,
    type: 'template',
    template: {
      name: templateName,
      language: { code: s.WA_LANG || 'en' },
      components: [{ type: 'body', parameters: params.map(function (p) { return { type: 'text', text: String(p) }; }) }]
    }
  };
  try {
    var res = UrlFetchApp.fetch(url, { method: 'post', contentType: 'application/json', headers: { Authorization: 'Bearer ' + s.WA_TOKEN }, payload: JSON.stringify(payload), muteHttpExceptions: true });
    var ok = res.getResponseCode() >= 200 && res.getResponseCode() < 300;
    if (!ok) console.warn('WhatsApp send failed: ' + res.getResponseCode() + ' ' + res.getContentText());
    return ok;
  } catch (e) {
    console.warn('WhatsApp error: ' + e);
    return false;
  }
}

/** Daily trigger: reminds parents about tomorrow's appointments. */
function sendReminders() {
  var s = settings();
  if (String(s.WA_ENABLED).toUpperCase() !== 'YES') return;
  var tomorrow = addDays(ymd(new Date()), 1);
  var sheet = SS().getSheetByName(TAB_BOOKINGS);
  bookingRows().forEach(function (r) {
    if (!isActive(r) || r[COL.date] !== tomorrow || r[COL.wa] !== 'YES' || r[COL.reminded]) return;
    if (sendTemplate(s, s.WA_TEMPLATE_REMINDER, r[COL.phone], [r[COL.child], prettyDate(r[COL.date]), label(toMin(r[COL.time]))])) {
      sheet.getRange(r.row, COL.reminded + 1).setValue(Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm'));
    }
  });
}

/** Optional: run from the editor to check a template reaches your own phone. */
function testWhatsApp() {
  var s = settings();
  return sendTemplate(s, s.WA_TEMPLATE_CONFIRM, String(s.CLINIC_PHONE).replace(/\D/g, '').slice(-10), ['Test Child', prettyDate(ymd(new Date())), '10:15 AM']);
}
