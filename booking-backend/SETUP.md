# Online booking — setup guide

Website pages:
- `book.html` — parents book here (linked from every "Book" button on the homepage)
- `doctor-panel.html` — doctor-only control page (PIN protected, hidden from Google)
- `booking-config.js` — holds the Google script URL

The booking data lives in Dr. Mittal's existing booking Google Sheet, in new tabs.

## A. Put the new code into the EXISTING booking script (keeps the same link)

Doing it this way keeps the old booking link working: patients who open it are sent to the new booking page.

1. Open **script.google.com** and open the project behind the current booking link
   (or open the booking Google Sheet → **Extensions → Apps Script**).
2. **Before changing anything, save a copy of the old code**: select all in each `.gs` file, copy, and paste into a Google Doc / Notepad.
3. Open `Code.gs`, delete everything, and paste the full contents of `booking-backend/Code.gs`.
   If the project has **other `.gs` files**, delete them (they would clash). Old `.html` files can stay; they are no longer used.
4. **Only if** this script is NOT opened from inside the sheet (it is a separate file at script.google.com):
   put the sheet's ID in `SHEET_ID` at the top of the code (the long code in the sheet's address between `/d/` and `/edit`).
5. Gear icon (**Project Settings**) → tick **Show "appsscript.json" manifest file**. Open `appsscript.json`, replace its contents with `booking-backend/appsscript.json`. Save (Ctrl+S).
6. Choose **setup** in the function dropdown → **Run** → allow the Google permission screen
   (choose your account → Advanced → Go to project → Allow).
   Three new tabs appear in the sheet: **Booking Settings**, **Blocked Times**, **Online Bookings**. Old tabs and old bookings are not touched.
7. In **Booking Settings**, change **ADMIN_PIN** to your own PIN.
8. **Deploy → Manage deployments** → pencil (**Edit**) on the existing deployment → **Version: New version** → check *Execute as: Me*, *Who has access: Anyone* → **Deploy**.
   ⚠️ Use *Manage deployments*, NOT *New deployment* — a new deployment would create a new link.
9. Tell Claude it is done. The website switches to the new booking page.

To update the code later, repeat step 3 and step 8. The link never changes.

## B. Daily use

- **Doctor panel:** childspecialistrohini.com/doctor-panel.html → enter PIN.
  - *Appointments:* see any day's bookings, call parents, cancel.
  - *Walk-in:* on the Appointments tab tap **+ Walk-in patient**, then tap the time. Each tap fills one place in that slot (no name or phone). Remove it from the list if added by mistake.
  - *Message:* text shown in a yellow box at the top of the booking page, with an optional date after which it hides.
  - *Block time:* quick buttons (rest of today, morning, evening, tomorrow) or any period with a message for parents. Optionally cancel bookings already made in that period.
  - *Slot settings:* slot length, patients per slot, days ahead, OPD timings per day. `18:00-20:30@3` allows 3 per slot in that session only.
- **Staff access:** in *Slot settings → Staff PIN*, set a separate PIN for staff. With it they see only *Appointments* (list, walk-ins, cancel) and *Block time*. Remove it any time to lock staff out.
- Everything is also visible and editable directly in the Google Sheet (tabs Booking Settings, Blocked Times, Online Bookings).

## C. WhatsApp confirmations and reminders (after Meta setup)

**What parents see:** the WhatsApp tick appears only on a number's first booking. After the parent ticks it once, the number is saved in the **WhatsApp Consent** tab, and every later booking from that number gets the confirmation and reminder automatically, with no tick. To stop messages to a number, change its **YES** to **NO** in that tab.
The tick stays hidden on the website until WhatsApp is switched on (WA_ENABLED = YES).

1. **business.facebook.com** → create a business portfolio (name: Dr. Dinesh Mittal Child Clinic).
2. **developers.facebook.com** → My Apps → Create app → choose the WhatsApp use case → connect it to the business portfolio.
3. In the app: **WhatsApp → API Setup → Add phone number**. Use the **new SIM bought only for these messages**. Do not install WhatsApp on it. The clinic number 81305 21456 stays on WhatsApp Business for staff. Keep the new SIM recharged so it stays active. Verify it by OTP and set the display name "Dr. Dinesh Mittal Child Clinic".
4. **WhatsApp Manager → Payment settings**: add a card (each message costs well under ₹1).
5. **WhatsApp Manager → Message templates**: create these three, Category **Utility**, Language **English**. Each has three variables: {{1}} child name, {{2}} date, {{3}} time.

   **appointment_confirmed**
   > Appointment confirmed. {{1}} has an appointment with Dr. Dinesh Mittal on {{2}} at {{3}}. Clinic: H-34/69, Sector 3, Rohini, Delhi. Please arrive 10 minutes early and bring the vaccination card. This is an automatic message. To change or cancel, or for any query, WhatsApp or call +91 81305 21456.

   **appointment_reminder**
   > Reminder: {{1}} has an appointment with Dr. Dinesh Mittal tomorrow, {{2}} at {{3}}. Clinic: H-34/69, Sector 3, Rohini, Delhi. This is an automatic message. To change or cancel, or for any query, WhatsApp or call +91 81305 21456.

   **appointment_cancelled**
   > Sorry, Dr. Dinesh Mittal is not available for {{1}}'s appointment on {{2}} at {{3}}. Please book another time at childspecialistrohini.com/book.html. This is an automatic message. For any query, WhatsApp or call +91 81305 21456.

6. **Permanent token:** business.facebook.com → Settings → Users → **System users** → Add (Admin) → Assign assets: the app and the WhatsApp account (full control) → **Generate token** → expiry **Never** → permissions `whatsapp_business_messaging` and `whatsapp_business_management` → copy the token.
7. From **WhatsApp → API Setup**, copy the **Phone number ID** (a number, not the phone number itself).
8. In the sheet's **Booking Settings** tab, fill **WA_TOKEN** and **WA_PHONE_NUMBER_ID**, and set **WA_ENABLED** to **YES**.
9. In Apps Script: paste the latest `Code.gs` (section A, step 3) → run **setup** once (creates the WhatsApp Consent tab) → run **testWhatsApp** (sends a test to the clinic phone) → run **installReminderTrigger** (reminders go out daily around 7 pm for the next day).
10. Deploy a new version (section A, step 8).
