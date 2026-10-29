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
  sh.getRange(1, 1, 1, 5).setValues([['Received (IST)', 'Form', 'Summary', 'Answers code', 'Drive file']]).setFontWeight('bold');
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
  var summary = String(body.summary || '').slice(0, 4000);
  var code = String(body.code || '').slice(0, 20000);
  if (!form || !code) return { ok: false, error: 'bad_input' };
  var day = Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd');
  var n = Number(props.getProperty('SUB_' + day) || 0);
  if (n >= DAILY_CAP) return { ok: false, error: 'daily_limit' };
  props.setProperty('SUB_' + day, String(n + 1));
  var when = Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm:ss');
  var file = DriveApp.getFolderById(props.getProperty('SUMMARY_FOLDER_ID')).createFile(
    when + ' ' + FORMS[form] + '.txt',
    summary + '\n\nAnswers code (paste into the clinic summary page):\n' + code,
    MimeType.PLAIN_TEXT);
  SpreadsheetApp.openById(props.getProperty('SUMMARY_SHEET_ID')).getSheetByName('Submissions')
    .appendRow([when, FORMS[form], summary, code, file.getUrl()]);
  return { ok: true };
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
