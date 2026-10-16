# Online booking — setup guide

Website pages:
- `book.html` — parents book here (linked from every "Book" button on the homepage)
- `doctor-panel.html` — doctor-only control page (PIN protected, hidden from Google)
- `booking-config.js` — holds the Google script URL

The booking data lives in a Google Sheet in Dr. Mittal's own Google account.

## A. Create the booking sheet and script (one time, ~10 minutes, on a computer)

1. Go to sheets.google.com and create a blank sheet named **Clinic Bookings**.
2. In the sheet: **Extensions → Apps Script**.
3. Delete everything in `Code.gs` and paste the full contents of `booking-backend/Code.gs`.
4. Click the gear icon (**Project Settings**) → tick **Show "appsscript.json" manifest file**. Open `appsscript.json` and replace it with `booking-backend/appsscript.json`. Save.
5. In the function dropdown at the top choose **setup** → **Run**. Approve the Google permission screen (choose your account → Advanced → Go to project → Allow).
   The sheet now has three tabs: **Settings**, **Blocked**, **Bookings**.
6. In the **Settings** tab, change **ADMIN_PIN** to your own PIN.
7. **Deploy → New deployment →** type **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
   Click **Deploy** and copy the **Web app URL** (ends in `/exec`).
8. Send that URL to Claude. It goes into `booking-config.js`, and the new booking page goes live.

When `Code.gs` is updated later: **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy**. The URL stays the same.

## B. Daily use

- **Doctor panel:** childspecialistrohini.com/doctor-panel.html → enter PIN.
  - *Appointments:* see any day's bookings, call parents, cancel.
  - *Block time:* quick buttons (rest of today, morning, evening, tomorrow) or any period with a message for parents. Optionally cancel bookings already made in that period.
  - *Slot settings:* slot length, patients per slot, days ahead, OPD timings per day. `18:00-20:30@3` allows 3 per slot in that session only.
- Everything is also visible and editable directly in the Google Sheet.

## C. WhatsApp confirmations and reminders (after Meta setup)

1. Create a Meta Business account and add **WhatsApp** in developers.facebook.com (WhatsApp Cloud API). Use a number that is **not** active on the WhatsApp app.
2. Create these **Utility** message templates (WhatsApp Manager → Message templates). Each has three variables: {{1}} child name, {{2}} date, {{3}} time.

   **appointment_confirmed**
   > Appointment confirmed. {{1}} has an appointment with Dr. Dinesh Mittal on {{2}} at {{3}}. Clinic: H-34/69, Sector 3, Rohini, Delhi. Please arrive 10 minutes early and bring the vaccination card. To change or cancel, call +91 81305 21456.

   **appointment_reminder**
   > Reminder: {{1}} has an appointment with Dr. Dinesh Mittal tomorrow, {{2}} at {{3}}. Clinic: H-34/69, Sector 3, Rohini, Delhi. To change or cancel, call +91 81305 21456.

   **appointment_cancelled**
   > Sorry, Dr. Dinesh Mittal is not available for {{1}}'s appointment on {{2}} at {{3}}. Please book another time at childspecialistrohini.com/book.html or call +91 81305 21456.

3. In the sheet's **Settings** tab fill in **WA_TOKEN** (permanent token), **WA_PHONE_NUMBER_ID**, and set **WA_ENABLED** to **YES**.
4. In Apps Script run **testWhatsApp** once (sends a test to the clinic phone), then run **installReminderTrigger** once (sends reminders daily around 7 pm for the next day's appointments).
5. Deploy a new version (see end of section A).

Messages are sent only to parents who tick "Send me confirmation and a reminder on WhatsApp".
