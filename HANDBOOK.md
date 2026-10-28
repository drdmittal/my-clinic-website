# Clinic Website & Booking — Handbook

Everything needed to keep working on Dr. Dinesh Mittal's website and online booking in any new chat.
Last updated: 28 Oct 2026 (private patient section added; cough and breathing form moved there).

## 1. Basics

| Item | Value |
|---|---|
| Doctor | Dr. Dinesh Mittal, MBBS, DCH · Delhi Medical Council Reg. No. DMC/R/00668 |
| Clinic | Dr. Dinesh Mittal Child Clinic, H-34/69, Sector 3, Rohini, Delhi 110085 |
| Phone | +91 81305 21456 (also on WhatsApp Business, used by staff) |
| OPD timings | Mon–Sat 10:00 AM–1:00 PM and 6:00–8:30 PM · Sun 11:00 AM–12:00 PM |
| Brand domain (print this) | **www.drdineshmittal.com**: redirects to the site below |
| Site address | www.childspecialistrohini.com (GitHub Pages, keep for links and Google) |
| Code | GitHub repo **drdmittal/my-clinic-website**, branch `main`. Pushing to `main` publishes in 2–3 minutes. |

## 2. Pages

| Page | What it is |
|---|---|
| `index.html` | Homepage: hero with "growth ruler" card, Book / Diet guide / Call buttons, live open-closed status, parent tools, services, guides, timings and map |
| `book.html` | Parent booking: day → time (colour-coded, no counts) → child's name + mobile only. Message box at top (from doctor panel). WhatsApp tick only on a number's first booking. |
| `doctor-panel.html` | "Appointments" app (PIN). Tabs: Appointments (+ Walk-in, Cancel), Message, Block time, Slot settings (incl. Staff PIN). Installable on phone home screen. |
| `baby-diet-planner.html` | Diet & feeding guide (`?age=m0|m6|y1|y2` opens an age): 4 age groups (0–6 m, 6–12 m with 6 / 7–8 / 9–11 m steps, 1–2 y, 2–18 y), Veg / +Egg / Non-veg, English or Hindi, print with clinic header |
| `parent-tools/cough-breathing-form.html` | Child breathing & cough history form for under-5s (28 Oct 2026; revised the same evening: date defaults to today, parent name removed, Q12 typed medicine name, optional Q13 removed, nebuliser wording, inhaler/nebuliser family question Q14, episode counts limited to cough/cold/breathlessness, family allergy-symptom questions). Also: doctor summary (positive/negative history, episodes, treatment, family) printed and sent with the form; parent can tap "Send to clinic WhatsApp" (opens wa.me to +91 81305 21456 with the summary text; parent taps Send) for reception to print when there is no printer. Public by **unlisted link, no password**: not in the Parent tools index or the menu, `noindex`, so search does not show it. Send the link to parents; they open it directly. Shown in the doctor's hub under Public tools. |
| `parent-tools/` | Fever chart, Constipation guide, Golu Potty Hero game, feeding guide PDF, tools index. `fever-care.html` only redirects to the fever chart. |
| `private-tools/` | Password-protected area (28 Oct 2026). Holds the doctor's resource hub (`doctor-hub.enc.json`, see section 6a) and is ready for any future tool that needs a password. Open as `private-tools/?f=<name>`. Not in the menu, search or sitemap; `noindex`. |
| `newborn.html` | Newborn corner (hub): care cards first (Normal or worry, Bathing, Massage, Please avoid), then Feeding 0–6 m (`baby-diet-planner.html?age=m0`), Vaccines, Growth check; the short red "Seek urgent medical attention" box comes after the cards (small link to it at the top); then Book / Call and the Please read note. Also links `newborn-care-guide.html` ("Newborn care tips"), rewritten 17 Oct 2026 in the new design: feeding, burping, cord care, yellow colour = see doctor, safe sleep (separate surface), vaccines at birth, urgent box, Please read note. Linked from homepage tile and side menu ("Newborn"). |
| `parent-tools/newborn-care.html` | Newborn care (first 28 days, up to 3 months): 4 tabs — Normal or worry? (normal cards first so parents are not scared, then one "Seek urgent medical attention" danger list, then 12 normal things each with "see the doctor if"), Bathing (sponge bath till cord falls, then mug bath; no tub), Massage (family only, start day 7 if ≥37 wk and ≥2.5 kg, coconut oil, 6 drawn steps), Please avoid. English/Hindi, prints all tabs with clinic header. Tabs open by link: `#normal`, `#bath`, `#massage`, `#avoid`. |
| 12 article pages + `blog.html` | Health articles (older design) |
| `site-nav.js` | Side tile menu on every page (rail on computer, "Menu" tab on phone). Not on the Golu game or doctor panel. |
| `shelf.html` | **Private** doctor's shelf (28 Oct 2026): searchable list of articles, videos and tools to send to individual parents, with "Copy link" and "Copy message for parent" buttons. Not linked from any page, not in sitemap, `noindex`. Hidden, not locked: anyone with the exact address can open it, so never post it. Add links by editing the `SHELF` list in the file. |
| `icons/`, `doctor-panel.webmanifest` | DM logo icons, home-screen app |

## 3. Booking system

- **Front end:** `book.html`, `doctor-panel.html`, `booking-config.js` (holds the script URL).
- **Back end:** Google Apps Script `booking-backend/Code.gs` (+ `appsscript.json`), deployed as web app "Execute as me / Anyone".
  - Script URL (never changes): `https://script.google.com/macros/s/AKfycbzZZJon_KvK0ibezOQT0ktfkxIB8-ee_-BnRKra6kvejGrbG1dFjMSD8f9zhR3ZXeWbXA/exec`
  - The old booking link is the same URL; opening it sends parents to `book.html`.
- **Data:** Google Sheet "patient appointment".
  - Old tabs: APPOINTMENTS (old bookings still block slots), extra slots, HOLIDAYS (no longer used), BLACKLIST (not used yet).
  - New tabs: Booking Settings, Blocked Times, Online Bookings, WhatsApp Consent.
- **To update the script:** paste the new Code.gs at script.google.com, Save, run `setup` once, then Deploy → Manage deployments → pencil → New version → Deploy. Never "New deployment" (that makes a new link).
- **Doctor panel features:** walk-in (fills a place, no name), cancel, block any period (incl. future holidays) with a message, slot length, patients per slot, days open for booking (today only up to today + 3 days, maximum; doctor's rule), OPD sessions per day (`18:00-20:30@3` = 3 per slot), message box for parents with auto-hide date, staff PIN (Appointments + Block time only), Consultation / Vaccination count and badge on each appointment.
- **Visit type:** parents tap Consultation or Vaccination (required) before name and mobile. Saved in the "Visit type" column of Online Bookings.
- **Speed (17 Oct 2026):** booking page shows the last slot list saved on the phone instantly (up to 15 min old, past slots hidden) and refreshes it in the background. Script keeps the public slot list in cache for 30 s (cleared at once by any booking, cancel, walk-in, block or settings change; Confirm always checks the sheet fresh). Old APPOINTMENTS tab is read at most every 10 min. Measured: Google Apps Script itself often takes 3–20 s to answer, even for a do-nothing request.
- **Google Calendar copy:** background job `syncCalendar` every 5 minutes copies upcoming online bookings to the calendar "Clinic Appointments" (event = child · visit type, phone in notes) and removes cancelled ones. Event ID kept in the "Calendar" column. Uses its own lock, so a booking never waits for it. Turn off with `CAL_ENABLED` = NO in Booking Settings.

### Pending, on the doctor's side

1. **Paste the newest Code.gs** (17 Oct 2026 evening: speed cache + calendar lock + calendar log message). Paste, Save, then Deploy → Manage deployments → ✏️ → New version → Deploy. No need to run setup again. (Earlier update with visit type and Calendar copy is done and working.)
2. **WhatsApp confirmations** (Cloud API, direct with Meta):
   - Buy a new SIM for automatic messages only. The clinic number stays on WhatsApp Business.
   - Then do the Meta setup in `booking-backend/SETUP.md` section C: business portfolio, app, number, 3 Utility templates, permanent token, Phone number ID.
   - Fill in Booking Settings, then run `testWhatsApp` and `installReminderTrigger`, and redeploy.
   - Messages end with "This is an automatic message … WhatsApp or call +91 81305 21456".

## 4. Rules for all website work

- **NMC (Ethics Board advertising guidelines, 6 Oct 2026):**
  - No doctor photograph anywhere; the DM logo replaced it.
  - No "best / expert / guaranteed" or other superlatives, and no testimonials.
  - Factual information only: name, MBBS DCH, registration number, address, timings, phone.
  - Printouts carry the clinic header and "Health education material… not a substitute for consultation".
- **Print the brand domain** www.drdineshmittal.com on anything parents see or print.
- **Booking must stay fast and minimal:** child's name + mobile only, and no slot counts shown to parents (colour only).
- **Look:**
  - Colours: deep indigo #2a2580, pink #e2457a, turmeric #f5ad1b, teal #0f9b8e, sky #2f8fe0, grape #8b4fd6, green #2f8f3a.
  - Font: Anek Devanagari.
  - Colourful and child-friendly, but readable.
- **Language:** English with simple everyday Hindi (not Hinglish). Tools have a language switch at the top. Parent text is objective, with numbers in ml, not glasses.
- **Clinical content:**
  - Follow IAP guidelines first, then WHO / AAP / ICMR-NIN.
  - The doctor's own rules: count milk feeds as meals; day gap 2–3 h, night gap 6–7 h (from 6 months); milk after 1 year ~400 ml/day including dahi and paneer.
  - Breast milk first; formula only on a doctor's advice.
  - Amounts are only a guide: follow the child's appetite, no force-feeding.
  - No fever "what to do" protocol on the website (the doctor advises in person).
  - Every parent page/tab ends with the "Please read" educational note (seen in most babies; your baby may differ; may be understood differently; if worried, seek medical care; not a substitute for a doctor). Do not list sources on newborn pages (doctor's decision, 17 Oct 2026). Never call any amount of crying "normal" (parents may read inconsolable crying as normal); say a healthy baby settles when fed, burped, changed or held. Danger signs are one list titled "Seek urgent medical attention" (never "same day" or "today"; doctor's rule 17 Oct 2026). Never describe pauses in breathing, startles/trembling/jerks, or any yellow colour (jaundice) as normal (removed 17 Oct 2026: confusing and dangerous; any pause, blue colour or fit = hospital; any yellow colour = see the doctor). Say "blocked-nose sounds", not "noisy breathing"; whistling or harsh sounds from chest/throat are danger signs.
  - Temperatures in °F first. Newborn fever / cold cut-offs follow IMNCI: 99.5 °F or more, below 95.9 °F (armpit). Write firm, clear instructions, not "may / can".
  - Newborn care rules: sponge bath until the cord falls off, then mug bath (no bath tub or bath seat, accident risk); massage by mother, father or family only (not a maid or nurse — home care setting), from day 7; coconut oil (sunflower also OK per IAP), no mustard or olive oil; never squeeze a newborn's breasts.
- **Before publishing:** check the JavaScript syntax, test the page on a phone-size screen, and check booking still works (`book.html?demo=1` is a safe preview).
- **Commit author:** "Dr. Dinesh Mittal (via Claude)" <drdmittal@users.noreply.github.com>.

## 5. Ideas not done yet

- EMR to replace Axon Web (future; about 20 patients/day, reception + chamber computers, no ABHA).
- QR card for reception linking to booking and the diet guide.
- BLACKLIST support from the old sheet.
- Bring older article pages to the new design. Next: review Vaccines and Growth check pages (old design).
- Newborn corner additions (doctor approved the list on 17 Oct 2026): breastfeeding help (latch, positions, enough milk, expressing and storing), safe sleep, visit plan for the first 3 months, feeding and nappy log, common skin problems (nappy rash, heat rash, cradle cap), crying and colic, mother's wellbeing. **Do not add** a newborn screening checklist or kangaroo mother care (doctor's domain; would confuse parents).

## 6. Password-protected section (`private-tools/`)

- **What it is:** a password-protected section for the doctor's own pages (the resource hub). Parent-facing forms are NOT kept here: the doctor decided on 28 Oct 2026 that forms like the breathing history form are opened by link, without a password.
- **How the password works:** each tool is stored encrypted (PBKDF2 + AES-256-GCM, done in the browser). Without the password the file is unreadable. The password is **never** stored in the repo or in this handbook.
- **Protection level (be honest with the doctor):** the password is a short one set by the doctor (Mittal@78); it can be guessed by a determined person since the encrypted file is public. Use it for the hub only. this is protection from casual viewing and search, plus strong encryption only as strong as the password. The encrypted files are public on GitHub Pages, so anyone could try to guess the password offline. Use a long passphrase (five or more random words, or 16+ random characters). Better still, put the section behind real server-side protection (see the options below).
- **Add a new tool:** write the page as a normal HTML file (no `site-nav.js`, add `<meta name="robots" content="noindex,nofollow,noarchive">`), then run `PASSWORD='...' node tools/private-page.js encrypt <source.html> private-tools/<name>.enc.json`. Then tell the page name to use in the link (`?f=<name>`).
- **Change the password (all files in this folder):** `OLD='current' NEW='new' node tools/private-page.js rekey private-tools/*.enc.json`, then commit and push. This changes every private file at once.
- **Edit a tool:** keep the plain source on your own computer only (never commit it). Decrypt with `PASSWORD=... node tools/private-page.js decrypt <file.enc.json> <out.html>`, edit, and encrypt again with the same password.
- **Search index:** `tools/build-search-index.py` skips `private-tools/`.
### 6a. Doctor's resource hub (`?f=doctor-hub`)

- **Open:** the **Clinic login** item at the bottom of the side menu on every page (also `https://childspecialistrohini.com/private-tools/?f=doctor-hub`), password as usual. The menu item is visible to everyone, by choice of the doctor, so the hub is still protected by the password. One page for the doctor with every public and private tool.
- **Send to a parent:** type the mobile number, choose the tool, check the message, tap "Open WhatsApp and send". WhatsApp opens on the doctor's phone with the message ready, and the doctor taps send. This works now with no Meta setup. The message comes from the clinic's WhatsApp Business number. The number typed on the hub is not stored or sent to any server.
- **Never send the password in the same message as the private link.** Send the password separately.
- **Source:** the hub is written as a plain HTML file kept on the developer's side and never committed in plain form. Its list of tools is a `TOOLS` array at the top of the script. To add a tool, edit that array in the source, then encrypt it again: `PASSWORD='...' node tools/private-page.js encrypt <hub-source.html> private-tools/doctor-hub.enc.json`.
- **Automatic sending (not done):** the booking backend already has WhatsApp code (`sendTemplate` in `booking-backend/Code.gs`), but it is off (`WA_ENABLED` = NO) until the Cloud API is set up (SETUP.md section C). Sending a link without the doctor tapping send needs a new approved utility template with one link variable, and the parent's consent recorded. Only the doctor can approve that.
- **Overlap:** `shelf.html` is an older, unlocked page with similar copy-link features. Plan: fold it into the hub and delete it, or put it behind the same password.

- **Stronger options (not done yet):** Cloudflare Pages with Cloudflare Access (free email one-time-PIN gate in front of the folder), or a Google Drive / Google Form file shared only with patients. Both give real access control, which GitHub Pages cannot.
- **Old public copy:** the form was publicly visible for a short time on 28 Oct 2026. It is removed from the site, but the repo history still holds it. It is a blank form with no patient data, so no action is needed.
