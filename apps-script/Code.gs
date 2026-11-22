/**
 * Game Portal visit counter.
 * Paste into Extensions > Apps Script in your Google spreadsheet.
 */
const SHEET_NAME = "GameViews";

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(["Game ID", "Game Title", "Genre", "Views", "Last Visit"]);
  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || "{}");
    if (data.action !== "view" || data.id === undefined) return jsonOutput_({success:false});
    const sheet = getSheet_();
    const values = sheet.getDataRange().getValues();
    const id = String(data.id);
    let row = -1;
    for (let i = 1; i < values.length; i++) {
      if (String(values[i][0]) === id) { row = i + 1; break; }
    }
    const now = new Date();
    if (row === -1) {
      sheet.appendRow([id, String(data.title || "Untitled"), String(data.genre || "Other"), 1, now]);
    } else {
      const views = Number(sheet.getRange(row, 4).getValue()) || 0;
      sheet.getRange(row, 2, 1, 4).setValues([[String(data.title || values[row-1][1]), String(data.genre || values[row-1][2]), views + 1, now]]);
    }
    return jsonOutput_({success:true});
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  const values = getSheet_().getDataRange().getValues();
  const stats = {};
  for (let i = 1; i < values.length; i++) {
    stats[String(values[i][0])] = {views:Number(values[i][3]) || 0};
  }
  const payload = {success:true, stats:stats};
  const callback = e && e.parameter && e.parameter.callback;
  if (callback && /^[A-Za-z_$][0-9A-Za-z_$\\.]*$/.test(callback)) {
    return ContentService.createTextOutput(callback + "(" + JSON.stringify(payload) + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return jsonOutput_(payload);
}

function jsonOutput_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
