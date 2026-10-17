# Clinic Website & Booking — Handbook

Everything needed to keep working on Dr. Dinesh Mittal's website and online booking in any new chat.
Last updated: 17 Oct 2026 (newborn care page added).

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
| `parent-tools/` | Fever chart, Constipation guide, Golu Potty Hero game, feeding guide PDF, tools index. `fever-care.html` only redirects to the fever chart. |
| `newborn.html` | Newborn corner (hub): danger-signs box, then links to the 4 newborn-care tabs, old newborn article, feeding 0–6 m (`baby-diet-planner.html?age=m0`), vaccines, growth check. Linked from homepage tile and side menu ("Newborn"). |
| `parent-tools/newborn-care.html` | Newborn care (first 28 days, up to 3 months): 4 tabs — Normal or worry? (danger signs first, then 12 normal things each with "see the doctor if"), Bathing (sponge bath till cord falls, then mug bath; no tub), Massage (family only, start day 7 if ≥37 wk and ≥2.5 kg, coconut oil, 6 drawn steps), Please avoid. English/Hindi, prints all tabs with clinic header. Tabs open by link: `#normal`, `#bath`, `#massage`, `#avoid`. |
| 12 article pages + `blog.html` | Health articles (older design) |
| `site-nav.js` | Side tile menu on every page (rail on computer, "Menu" tab on phone). Not on the Golu game or doctor panel. |
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
- **Google Calendar copy:** background job `syncCalendar` every 5 minutes copies upcoming online bookings to the calendar "Clinic Appointments" (event = child · visit type, phone in notes) and removes cancelled ones. Event ID kept in the "Calendar" column. Never runs during a booking. Turn off with `CAL_ENABLED` = NO in Booking Settings.

### Pending, on the doctor's side

1. **Paste the latest Code.gs and appsscript.json into Apps Script** (17 Oct 2026 version: Walk-in, Message, Staff PIN, visit type, 3-day limit, Google Calendar copy). Then run `setup` once and allow the Calendar permission, then New version deploy. Until then Walk-in / Message / Staff PIN show "Could not complete" and visit type is not saved.
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
  - Every parent page/tab ends with its sources and the "For health education only…" disclaimer (medico-legal). Never call any amount of crying "normal" (parents may read inconsolable crying as normal); say a healthy baby settles when fed, burped, changed or held. Never describe pauses in breathing, startles/trembling/jerks, or any yellow colour (jaundice) as normal (removed 17 Oct 2026: confusing and dangerous; any pause, blue colour or fit = hospital; any yellow colour = see the doctor). Say "blocked-nose sounds", not "noisy breathing"; whistling or harsh sounds from chest/throat are danger signs.
  - Temperatures in °F first. Newborn fever / cold cut-offs follow IMNCI: 99.5 °F or more, below 95.9 °F (armpit). Write firm, clear instructions, not "may / can".
  - Newborn care rules: sponge bath until the cord falls off, then mug bath (no bath tub or bath seat, accident risk); massage by mother, father or family only (not a maid or nurse — home care setting), from day 7; coconut oil (sunflower also OK per IAP), no mustard or olive oil; never squeeze a newborn's breasts.
- **Before publishing:** check the JavaScript syntax, test the page on a phone-size screen, and check booking still works (`book.html?demo=1` is a safe preview).
- **Commit author:** "Dr. Dinesh Mittal (via Claude)" <drdmittal@users.noreply.github.com>.

## 5. Ideas not done yet

- EMR to replace Axon Web (future; about 20 patients/day, reception + chamber computers, no ABHA).
- QR card for reception linking to booking and the diet guide.
- BLACKLIST support from the old sheet.
- Bring older article pages to the new design.
- Newborn corner additions (doctor approved the list on 17 Oct 2026): breastfeeding help (latch, positions, enough milk, expressing and storing), safe sleep, visit plan for the first 3 months, feeding and nappy log, common skin problems (nappy rash, heat rash, cradle cap), crying and colic, mother's wellbeing. **Do not add** a newborn screening checklist or kangaroo mother care (doctor's domain; would confuse parents).
