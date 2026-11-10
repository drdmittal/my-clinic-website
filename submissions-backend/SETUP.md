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

## Pull token (for the clinic's own records software)

The clinic's records server on the reception computer reads new submissions through a read-only link. It is protected by a secret token.

1. In the script editor: Project Settings → Script properties → Add script property.
   Name: `PULL_TOKEN`. Value: a long random string (20 or more characters). Do not share it in this repo or in chat.
2. Deploy → Manage deployments → pencil → New version → Deploy. Do not use "New deployment"; the web app URL must stay the same.
3. Put the same token and the web app URL into `config.json` in the clinic software folder on the reception computer.
   Test in a browser: the URL followed by `?action=pull&token=YOUR_TOKEN` should show a list of items. Without the right token it shows `unauthorised`.
