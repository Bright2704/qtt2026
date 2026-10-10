/** Separate Apps Script project: do NOT paste into the existing confirmation app. */
const QCI = Object.freeze({
  sender: 'qiskit.th@gmail.com',
  // Test first with this mailbox; set false and redeploy to accept all emails.
  testMode: true,
  spreadsheetId: '1nuWzqRYEjuBOJSH7K6HZWb9tIG5jcNAXn-M2yUvz6rE',
  sheetName: 'QFF_Checkin',
  ttlMs: 10 * 60 * 1000,
  cooldownMs: 60 * 1000,
  requestsPerHour: 3,
  dailySendLimit: 90,
  events: [
    {id:'online-2026-10-10', label:'Online Session — 10 October 2026', date:'2026-10-10'},
    {id:'online-2026-10-17', label:'Online Session — 17 October 2026', date:'2026-10-17'},
    {id:'online-2026-10-24', label:'Online Session — 24 October 2026', date:'2026-10-24'}
  ]
});
