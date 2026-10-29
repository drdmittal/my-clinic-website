# Patient submissions backend (separate from booking)

This is its own Apps Script project. It does not read or write the booking or appointment sheet.

1. Go to script.google.com → New project. Name it "Clinic submissions".
2. Paste `Code.gs` from this folder. In Project Settings, tick "Show appsscript.json" and paste `appsscript.json`.
3. Select `setupSubmissionStore` and Run. Approve access. This creates a private sheet
   "Patient submissions (Dr Dinesh Mittal Clinic)" and a Drive folder "Patient submissions (private)".
4. Deploy → New deployment → Web app. Execute as: Me. Who has access: Anyone. Deploy and copy the web app URL.
5. Send that URL to the website builder, who sets it as SUBMIT_URL in the parent forms and chat.
   Until then the forms and chat simply skip saving; WhatsApp works as before.

Keep the sheet and folder private. Share them only with the doctor and reception.
