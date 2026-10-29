/* Patient submissions only. Separate Apps Script project: it never touches the booking/appointment sheet.
   Setup: see SETUP.md in this folder. */
var TZ = 'Asia/Kolkata';
var FORMS = { 'under5': 'Under 5', '6-12': 'Age 6-12', 'chat-u5': 'Chat under 5', 'chat-s612': 'Chat 6-12' };
var DAILY_CAP = 500;

/* Run once from the script editor: creates a private sheet and Drive folder owned by you. */
function setupSubmissionStore() {
  var props = PropertiesService.getScriptProperties();
  var ss = SpreadsheetApp.create('Patient submissions (Dr Dinesh Mittal Clinic)');
  var sh = ss.getSheets()[0];
  sh.setName('Submissions');
  sh.getRange(1, 1, 1, 5).setValues([['Received (IST)', 'Form', 'Child', 'Answers code', 'PDF to print']]).setFontWeight('bold');
  sh.setFrozenRows(1);
  var folder = DriveApp.createFolder('Patient submissions (private)');
  props.setProperty('SUMMARY_SHEET_ID', ss.getId());
  props.setProperty('SUMMARY_FOLDER_ID', folder.getId());
  Logger.log('Sheet: ' + ss.getUrl());
  Logger.log('Folder: ' + folder.getUrl());
}

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (body.action !== 'summary_submit') return out({ ok: false, error: 'unknown_action' });
    return out(saveSubmission(body));
  } catch (err) {
    return out({ ok: false, error: String(err && err.message || err) });
  }
}

function doGet() { return out({ ok: true, service: 'submissions' }); }

function saveSubmission(body) {
  var props = PropertiesService.getScriptProperties();
  var form = FORMS[body.form] ? body.form : null;
  var lines = (body.lines || []).map(function(x){ return String(x); }).slice(0, 300);
  var code = String(body.code || '').slice(0, 20000);
  if (!form || !code || !lines.length) return { ok: false, error: 'bad_input' };
  var day = Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd');
  var n = Number(props.getProperty('SUB_' + day) || 0);
  if (n >= DAILY_CAP) return { ok: false, error: 'daily_limit' };
  props.setProperty('SUB_' + day, String(n + 1));
  var when = Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm:ss');
  var childLine = lines.filter(function(l){ return /^\*?\s*Child:/.test(l); })[0] || 'Child: name not given';
  var child = childLine.replace(/^\*?\s*Child:\s*/, '').replace(/\*/g, '').split('  ')[0].slice(0, 60);
  var html = pdfHtml(when, FORMS[form], lines);
  var pdf = HtmlService.createHtmlOutput(html).getBlob().getAs(MimeType.PDF)
    .setName(when + ' ' + child + ' (' + FORMS[form] + ').pdf');
  var file = DriveApp.getFolderById(props.getProperty('SUMMARY_FOLDER_ID')).createFile(pdf);
  SpreadsheetApp.openById(props.getProperty('SUMMARY_SHEET_ID')).getSheetByName('Submissions')
    .appendRow([when, FORMS[form], child, code, file.getUrl()]);
  return { ok: true };
}

/* Print-ready A4 page: clinic header with the doctor's name and qualifications, then the history. */
function pdfHtml(when, formLabel, lines) {
  var esc = function(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
  var body = lines.map(function(raw){
    var heading = /^\*/.test(raw);
    var t = esc(raw.replace(/\*/g, '').trim());
    if (!t) return '<div class="gap"></div>';
    return heading ? '<h3>' + t + '</h3>' : '<p>' + t + '</p>';
  }).join('');
  return '<!doctype html><html><head><meta charset="utf-8"><style>' +
    '@page{size:A4;margin:14mm}body{font-family:Arial,Helvetica,sans-serif;color:#111;font-size:12px;line-height:1.45;margin:0}' +
    '.head{border-bottom:2px solid #1f3a6b;padding-bottom:8px;margin-bottom:12px}' +
    '.doc{font-size:20px;font-weight:bold;color:#1f3a6b}.qual{font-size:12px;margin-top:2px}' +
    '.clinic{font-size:11px;color:#333;margin-top:3px}' +
    '.meta{font-size:11px;color:#444;margin:8px 0 12px}h3{font-size:13px;margin:12px 0 4px;color:#1f3a6b}' +
    'p{margin:2px 0}.gap{height:6px}.foot{margin-top:18px;border-top:1px solid #999;padding-top:6px;font-size:10px;color:#555}' +
    '</style></head><body>' +
    '<div class="head"><div class="doc">Dr. Dinesh Mittal</div>' +
    '<div class="qual">MBBS, DCH (DMC/R/00668) · Child Specialist &amp; Pediatrician</div>' +
    '<div class="clinic">Dr. Dinesh Mittal Child Clinic · Sector 3, Rohini, New Delhi</div></div>' +
    '<div class="meta"><b>Parent-submitted history: ' + esc(formLabel) + '</b> · Received ' + esc(when) + ' IST</div>' +
    body +
    '<div class="foot">Confidential patient record. Generated from the parent\'s online history; to be reviewed and confirmed by the doctor at examination.</div>' +
    '</body></html>';
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
