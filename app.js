// ==========================================================
// CLINIC APPLICATION ENGINE (app.js)
// Dynamic Length/Height, TDSC Milestones, Tanner MPH,
// IAP BMI-for-Age, Weaning & Toilet Protocols, Modal Controls,
// & Fail-Safe Global Bilingual Engine (English <-> Hindi)
// ==========================================================

// 🌐 1. GLOBAL BILINGUAL DICTIONARY
window.siteTranslations = {
  en: {
    nav_about: "About Doctor",
    nav_services: "Services",
    nav_growth: "Growth, Development & Nutrition",
    nav_adolescent: "Adolescent Care",
    nav_blog: "Parenting Blog",
    nav_location: "Location",
    btn_book: "Book Consultation",
    btn_call: "Call Clinic",

    hero_badge: "Child Specialist & Pediatrician",
    hero_heading: "Compassionate Healthcare For Your Little Ones",
    hero_sub: "Specialized newborn care, WHO/IAP vaccination schedules, and growth & development monitoring in Sector 3 Rohini, Delhi.",
    hero_exp: "25+ Yrs Clinical Practice",

    sec_clinical_care: "Clinical Care",
    sec_services_title: "Pediatric Services",
    svc_vax_title: "Vaccination",
    svc_vax_desc: "WHO & IAP cold-chain vaccines.",
    svc_newborn_title: "Newborn Care",
    svc_newborn_desc: "Growth, feeding & jaundice checks.",
    svc_fever_title: "Fevers & Infections",
    svc_fever_desc: "Seasonal viral, flu & asthma care.",
    svc_teen_title: "Adolescent Health",
    svc_teen_desc: "Puberty & growth spurt counseling.",

    screener_badge: "Pediatric Clinical Tool",
    screener_title: "Growth, Development & Nutrition Assessment",
    screener_subtitle: "Tap to assess IAP Growth Charts, Developmental Milestones (TDSC), IYCF Feeding Guides & Adolescent Puberty.",

    vax_btn_badge: "Pediatric Vaccination Guide",
    vax_btn_title: "Childhood Immunization & Vaccine FAQs",
    vax_btn_subtitle: "Doctor-curated guidance on missed doses, multiple vaccines safety, and post-shot fever care.",

    teen_badge: "Ages 10 - 18 Years",
    teen_heading: "Adolescent Health & Puberty Guidance",
    teen_sub: "Confidential puberty guidance, growth spurt counseling & hormonal wellness.",

    iap_btn_badge: "Vaccine Schedule",
    iap_btn_title: "IAP Childhood Immunization Schedule (0 to 18 Years)",
    iap_btn_subtitle: "Age-by-age vaccine guide recommended by the Indian Academy of Pediatrics.",

    blog_btn_badge: "Health Education Library",
    blog_btn_title: "Parenting & Pediatric Health Insights",
    blog_btn_subtitle: "Explore clinical health guides on fever care, newborn monitoring, dengue, and winter pollution.",

    blog_badge: "Health Education",
    blog_heading: "Featured Pediatric Guides",
    blog_view_all: "View All Guides",
    blog_featured_badge: "Latest Pediatric Guide",
    blog_featured_title: "Air Purifiers for Delhi Pollution: A Pediatric Deep Dive & Buying Guide",
    blog_featured_desc: "Do purifiers truly protect child lungs against winter smog? Learn certified HEPA H13 standards, CADR ratings for Delhi bedrooms, and critical household mistakes that cause purifiers to fail.",
    blog_read_btn: "Read Full Guide",
    blog_explore_btn: "Browse All Articles in Health Library",

    card_newborn_tag: "Newborn Care",
    card_newborn_title: "Essential Newborn Care Tips (0-30 Days)",
    card_newborn_desc: "Pediatric guide on feeding on demand, cord care, jaundice checks & sleep safety.",
    
    card_dengue_tag: "Seasonal Alert",
    card_dengue_title: "Dengue in Children: Symptoms & Home Care",
    card_dengue_desc: "Parent guide on high fever, platelet facts, and emergency red flags.",
    
    card_screen_tag: "Child Development",
    card_screen_title: "How to Reduce Screen Time in Children",
    card_screen_desc: "Practical strategies to manage mobile tantrums and establish healthy habits.",
    
    blog_read_btn_short: "Read Guide",

    loc_title: "Visit Our Clinic",
    loc_card_title: "Clinic Details",
    loc_address_label: "Address:",
    loc_hours_label: "Consultation Hours:",
    loc_hours_text: "Mon - Sat: 10:00 AM - 1:00 PM | 6:00 PM - 8:30 PM<br>Sunday: 11:00 AM - 12:00 PM",
    loc_maps_btn: "Open Directions in Google Maps"
  },
  hi: {
    nav_about: "डॉक्टर परिचय",
    nav_services: "चिकित्सा सेवाएं",
    nav_growth: "विकास, माइलस्टोन व पोषण",
    nav_adolescent: "किशोरावस्था परामर्श",
    nav_blog: "पेरेंटिंग गाइड",
    nav_location: "क्लिनिक पता",
    btn_book: "परामर्श स्लॉट बुक करें",
    btn_call: "कॉल करें",

    hero_badge: "शिशु एवं बाल रोग विशेषज्ञ",
    hero_heading: "आपके बच्चों के लिए समर्पित एवं अनुभवी बाल चिकित्सा",
    hero_sub: "नवजात शिशु देखभाल, WHO/IAP टीकाकरण, एवं शारीरिक व मानसिक विकास मूल्यांकन — सेक्टर 3 रोहिणी, दिल्ली।",
    hero_exp: "25+ वर्षों का नैदानिक अनुभव",

    sec_clinical_care: "बाल स्वास्थ्य सेवाएं",
    sec_services_title: "प्रमुख चिकित्सा सेवाएं",
    svc_vax_title: "टीकाकरण (Vaccination)",
    svc_vax_desc: "WHO एवं IAP प्रमाणित सुरक्षित टीके।",
    svc_newborn_title: "नवजात देखभाल",
    svc_newborn_desc: "वजन, पीलिया व स्तनपान जांच।",
    svc_fever_title: "बुखार व संक्रमण",
    svc_fever_desc: "मौसमी फ्लू, खांसी व दमा उपचार।",
    svc_teen_title: "किशोरावस्था स्वास्थ्य",
    svc_teen_desc: "प्यूबर्टी व लंबाई परामर्श।",

    screener_badge: "बाल विकास जांच टूल",
    screener_title: "शारीरिक विकास, मील के पत्थर एवं पोषण मूल्यांकन",
    screener_subtitle: "IAP ग्रोथ चार्ट, त्रिवेंद्रम विकासात्मक माइलस्टोन (TDSC), और ऊपरी आहार (IYCF) तालिका देखने के लिए क्लिक करें।",

    vax_btn_badge: "बाल टीकाकरण गाइड",
    vax_btn_title: "बच्चों के टीकाकरण से जुड़े जरूरी सवाल व जवाब",
    vax_btn_subtitle: "छूटे हुए टीके, एक साथ 2-3 टीके व बुखार की सही देखभाल पर डॉक्टरी सलाह पढ़ने के लिए क्लिक करें।",

    teen_badge: "उम्र 10 से 18 वर्ष",
    teen_heading: "किशोरावस्था स्वास्थ्य एवं प्यूबर्टी मार्गदर्शन",
    teen_sub: "प्यूबर्टी, शारीरिक बदलाव, लंबाई और हार्मोनल स्वास्थ्य पर गोपनीय डॉक्टरी परामर्श।",

    iap_btn_badge: "टीकाकरण तालिका",
    iap_btn_title: "IAP बाल टीकाकरण तालिका (जन्म से 18 वर्ष)",
    iap_btn_subtitle: "इंडियन एकेडमी ऑफ पीडियाट्रिक्स द्वारा अनुशंसित उम्र अनुसार टीकाकरण गाइड।",

    blog_btn_badge: "स्वास्थ्य मार्गदर्शिका",
    blog_btn_title: "पेरेंटिंग एवं बाल स्वास्थ्य लेख",
    blog_btn_subtitle: "बुखार, नवजात देखभाल, डेंगू और प्रदूषण से बचाव से जुड़े सभी चिकित्सकीय लेख पढ़ने के लिए क्लिक करें।",

    blog_badge: "स्वास्थ्य जागरूकता",
    blog_heading: "पेरेंटिंग एवं बाल स्वास्थ्य मार्गदर्शन",
    blog_view_all: "सभी गाइड देखें",
    blog_featured_badge: "नवीनतम बाल स्वास्थ्य गाइड",
    blog_featured_title: "दिल्ली के प्रदूषण में क्या एयर प्यूरीफायर खरीदना चाहिए? बाल रोग विशेषज्ञ गाइड",
    blog_featured_desc: "क्या प्यूरीफायर सचमुच बच्चों के फेफड़ों को बचाते हैं? True HEPA H13 मानक, कमरे के अनुसार CADR रेटिंग, और वे गलतियां जिनसे प्यूरीफायर काम नहीं करता।",
    blog_read_btn: "पूरी गाइड पढ़ें",
    blog_explore_btn: "सभी स्वास्थ्य लेख व गाइड देखें",

    card_newborn_tag: "नवजात देखभाल",
    card_newborn_title: "नवजात शिशु की देखभाल (0-30 दिन जरूरी नियम)",
    card_newborn_desc: "स्तनपान, नाभि की सफाई, पीलिया की पहचान और सुलाने के सुरक्षित नियमों की डॉक्टरी सलाह।",
    
    card_dengue_tag: "मौसमी अलर्ट",
    card_dengue_title: "बच्चों में डेंगू: लक्षण, प्लेटलेट्स व घरेलू देखभाल",
    card_dengue_desc: "तेज बुखार, प्लेटलेट्स की सच्चाई और खतरे के लक्षणों पर अभिभावकों के लिए गाइड।",
    
    card_screen_tag: "बाल विकास",
    card_screen_title: "बच्चों में मोबाइल और स्क्रीन की लत कैसे छुड़ाएं?",
    card_screen_desc: "खाना खाते समय फोन की आदत और रोने-जिद्द करने से निपटने के आसान डॉक्टरी उपाय।",
    
    blog_read_btn_short: "गाइड पढ़ें",

    loc_title: "क्लिनिक समय व पता",
    loc_card_title: "क्लिनिक विवरण",
    loc_address_label: "पता:",
    loc_hours_label: "परामर्श का समय:",
    loc_hours_text: "सोमवार - शनिवार: सुबह 10:00 - दोपहर 1:00 | शाम 6:00 - 8:30<br>रविवार: सुबह 11:00 - दोपहर 12:00",
    loc_maps_btn: "गूगल मैप्स पर रास्ता देखें"
  }
};

window.currentGlobalLang = localStorage.getItem("preferredClinicLang") || "en";

window.setGlobalLanguage = function(lang) {
  try {
    window.currentGlobalLang = lang;
    try { localStorage.setItem("preferredClinicLang", lang); } catch (e) {}

    // 1. Text elements replacement
    const elements = document.querySelectorAll("[data-i18n]");
    const dict = window.siteTranslations[lang];
    if (dict) {
      elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
          el.innerHTML = dict[key];
        }
      });
    }

    // 2. Button Prompt Text Update
    const desktopBtnText = document.getElementById("langBtnText");
    const mobileBtnText = document.getElementById("mobileLangBtnText");
    const nextPrompt = (lang === "en") ? "हिन्दी" : "English";

    if (desktopBtnText) desktopBtnText.textContent = nextPrompt;
    if (mobileBtnText) mobileBtnText.textContent = nextPrompt;

    // 3. Sync Growth Screener Select Dropdown
    const screenerLangSelect = document.getElementById("screenerLang");
    if (screenerLangSelect) {
      screenerLangSelect.value = (lang === "hi") ? "hindi" : "english";
    }

    // 4. Safely trigger growth screener recalculation
    try {
      if (typeof window.runScreener === "function") {
        window.runScreener();
      }
    } catch (err) {}
  } catch (globalErr) {
    console.error("Language switch error:", globalErr);
  }
};

window.toggleGlobalLanguage = function() {
  const nextLang = (window.currentGlobalLang === "en") ? "hi" : "en";
  window.setGlobalLanguage(nextLang);
};

let currentDietPreference = "veg"; // 'veg' or 'nonveg'

// ==========================================================
// 2. MAIN SCREENER RUNNER
// ==========================================================
function runScreener() {
  const langEl = document.getElementById("screenerLang");
  const ageEl = document.getElementById("screenerAge");
  const genderEl = document.getElementById("screenerGender");
  const weightEl = document.getElementById("screenerWeight");
  const heightEl = document.getElementById("screenerHeight");
  const fatherEl = document.getElementById("fatherHeight");
  const motherEl = document.getElementById("motherHeight");
  const resultsContainer = document.getElementById("screenerResults");

  if (!ageEl || !genderEl || !resultsContainer) return;
  if (typeof milestoneDatabase === "undefined") {
    console.error("data.js is not loaded or milestoneDatabase is missing.");
    return;
  }

  const lang = langEl ? langEl.value : "english";
  const ageKey = ageEl.value;
  const gender = genderEl.value;
  const wInput = weightEl ? parseFloat(weightEl.value) : NaN;
  const hInput = heightEl ? parseFloat(heightEl.value) : NaN;
  const fHeight = fatherEl ? parseFloat(fatherEl.value) : NaN;
  const mHeight = motherEl ? parseFloat(motherEl.value) : NaN;

  const lblTitle = document.getElementById("lblTitle");
  const lblSubtitle = document.getElementById("lblSubtitle");
  const lblLang = document.getElementById("lblLang");
  const lblAge = document.getElementById("lblAge");
  const lblGender = document.getElementById("lblGender");
  const lblWeight = document.getElementById("lblWeight");
  const lblHeight = document.getElementById("lblHeight");
  const lblFather = document.getElementById("lblFather");
  const lblMother = document.getElementById("lblMother");

  const isInfant = (ageKey === "0m" || ageKey === "3m" || ageKey === "6m" || ageKey === "9m" || ageKey === "12m" || ageKey === "18m");

  if (lang === "english") {
    if (lblTitle) lblTitle.innerText = "Growth, Development & Nutrition Assessment";
    if (lblSubtitle) lblSubtitle.innerText = "Tap to assess IAP Growth Charts, Developmental Milestones (TDSC), IYCF Feeding Guides & Adolescent Puberty.";
    if (lblLang) lblLang.innerText = "Select Language";
    if (lblAge) lblAge.innerText = "Child's Age";
    if (lblGender) lblGender.innerText = "Child's Gender";
    if (lblWeight) lblWeight.innerText = "Current Weight (kg)";
    if (lblHeight) lblHeight.innerText = isInfant ? "Current Length (cm)" : "Current Height (cm)";
    if (lblFather) lblFather.innerText = "Father's Height";
    if (lblMother) lblMother.innerText = "Mother's Height";
  } else {
    if (lblTitle) lblTitle.innerText = "शारीरिक विकास, मील के पत्थर एवं पोषण मूल्यांकन";
    if (lblSubtitle) lblSubtitle.innerText = "IAP ग्रोथ चार्ट, त्रिवेंद्रम विकासात्मक माइलस्टोन (TDSC), और ऊपरी आहार (IYCF) तालिका देखने के लिए क्लिक करें।";
    if (lblLang) lblLang.innerText = "भाषा चुनें (Language)";
    if (lblAge) lblAge.innerText = "बच्चे की उम्र (Age)";
    if (lblGender) lblGender.innerText = "लिंग (Gender)";
    if (lblWeight) lblWeight.innerText = "वर्तमान वजन (kg)";
    if (lblHeight) lblHeight.innerText = isInfant ? "वर्तमान लंबाई (cm)" : "वर्तमान कद (cm)";
    if (lblFather) lblFather.innerText = "पिता की लंबाई";
    if (lblMother) lblMother.innerText = "माता की लंबाई";
  }

  const data = milestoneDatabase[ageKey];
  if (!data) return;

  const ageName = data.name ? (data.name[lang === "english" ? "en" : "hi"] || "") : "";
  const ref = data.iap ? data.iap[gender] : null;

  let growthHtml = "";
  let wStatus = "";
  let hStatus = "";
  let bmiStatus = "";

  // 1. Weight Evaluation
  if (!isNaN(wInput) && ref) {
    if (wInput < ref.minW) {
      wStatus = lang === "english" 
        ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Weight (${wInput} kg): Below 3rd percentile.</strong> Standard IAP healthy range: ${ref.minW} – ${ref.maxW} kg. Consult your pediatrician for dietary and growth review.</div></div>`
        : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>वजन (${wInput} kg): 3वें परसेंटाइल से कम।</strong> मानक IAP सीमा: ${ref.minW} – ${ref.maxW} kg। पोषण व विकास समीक्षा हेतु बाल रोग विशेषज्ञ से परामर्श लें।</div></div>`;
    } else if (wInput > ref.maxW) {
      wStatus = lang === "english"
        ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Weight (${wInput} kg): Above 97th percentile.</strong> Exceeds typical population range (${ref.minW} – ${ref.maxW} kg). Consult your pediatrician for balanced dietary guidance.</div></div>`
        : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>वजन (${wInput} kg): 97वें परसेंटाइल से अधिक।</strong> मानक IAP सीमा (${ref.minW} – ${ref.maxW} kg) से अधिक है। संतुलित आहार हेतु डॉक्टर से परामर्श लें।</div></div>`;
    } else {
      wStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Weight (${wInput} kg): Normal & Healthy.</strong> Aligned with standard IAP population range (${ref.minW} – ${ref.maxW} kg).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>वजन (${wInput} kg): बिल्कुल सामान्य एवं स्वस्थ।</strong> IAP मानक सीमा (${ref.minW} – ${ref.maxW} kg) के अनुसार सही है।</div></div>`;
    }
  }

  // 2. Auxological Height & Mid-Parental Discrepancy Calculation
  let childHeightZ = 0;
  let targetAdultZ = 0;
  let hasHeightDiscrepancy = false;
  let discrepancyType = "none";
  let targetHeight = NaN;

  if (ref) {
    const meanH = (ref.minH + ref.maxH) / 2;
    const sdH = (ref.maxH - ref.minH) / 3.76;
    if (!isNaN(hInput)) {
      childHeightZ = (hInput - meanH) / sdH;
    }
  }

  if (!isNaN(fHeight) && !isNaN(mHeight)) {
    targetHeight = (gender === "boy") ? (fHeight + mHeight + 13) / 2 : (fHeight + mHeight - 13) / 2;
    const adultMean = (gender === "boy") ? 174.5 : 161.5;
    const adultSD = (gender === "boy") ? 6.5 : 6.0;
    targetAdultZ = (targetHeight - adultMean) / adultSD;

    if (!isNaN(hInput) && ref) {
      const zDiff = targetAdultZ - childHeightZ;
      if (zDiff >= 2.0) {
        hasHeightDiscrepancy = true;
        discrepancyType = "lagging-severe";
      } else if (zDiff >= 1.35) {
        hasHeightDiscrepancy = true;
        discrepancyType = "lagging-moderate";
      } else if (zDiff <= -1.5) {
        hasHeightDiscrepancy = true;
        discrepancyType = "exceeding";
      }
    }
  }

  const measurementWord = isInfant ? (lang === "english" ? "Length" : "लंबाई") : (lang === "english" ? "Height" : "कद");

  if (!isNaN(hInput) && ref) {
    if (hInput < ref.minH) {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>${measurementWord} (${hInput} cm): Below 3rd percentile.</strong> Below population norm (${ref.minH} – ${ref.maxH} cm). Please consult your pediatrician for in-person clinical evaluation.</div></div>`
        : `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>${measurementWord} (${hInput} cm): 3वें परसेंटाइल से कम।</strong> मानक IAP सीमा (${ref.minH} – ${ref.maxH} cm) से कम है। चिकित्सीय परामर्श लें।</div></div>`;
    } else if (hasHeightDiscrepancy && discrepancyType === "lagging-severe") {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-red"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>${measurementWord} (${hInput} cm): Trailing Parental Genetic Potential.</strong> Child tracks significantly below their family target channel (>2 SD). Please consult your pediatrician for growth assessment.</div></div>`
        : `<div class="flag-card flag-red"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>${measurementWord} (${hInput} cm): आनुवंशिक क्षमता से कम।</strong> बच्चे का कद माता-पिता की संभावित जेनेटिक क्षमता से कम है (>2 SD)। बाल रोग विशेषज्ञ से परामर्श लें।</div></div>`;
    } else if (hasHeightDiscrepancy && discrepancyType === "lagging-moderate") {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>${measurementWord} (${hInput} cm): Trailing Relative to Parental Target.</strong> Tracks slightly below mid-parental genetic channel. Growth monitoring with your pediatrician advised.</div></div>`
        : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>${measurementWord} (${hInput} cm): जेनेटिक लक्ष्य से धीमी गति।</strong> बच्चे का कद संभावित जेनेटिक क्षमता से थोड़ा धीमा है। डॉक्टर से नियमित निगरानी कराएं।</div></div>`;
    } else if (hInput > ref.maxH) {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>${measurementWord} (${hInput} cm): Above Average (>97th percentile).</strong> Robust growth tracking well (${ref.minH} – ${ref.maxH} cm).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>${measurementWord} (${hInput} cm): औसत से अधिक (>97वां परसेंटाइल)।</strong> उत्तम विकास।</div></div>`;
    } else {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>${measurementWord} (${hInput} cm): Normal & Healthy.</strong> Tracking well within expected population and genetic parameters (${ref.minH} – ${ref.maxH} cm).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>${measurementWord} (${hInput} cm): आदर्श विकास क्रम।</strong> IAP मानक अनुसार सही है।</div></div>`;
    }
  }

  // 3. IAP BMI-for-Age (Ages 2 to 18 Years)
  if (!isNaN(wInput) && !isNaN(hInput)) {
    if (ref && ref.minBmi) {
      const heightInMeters = hInput / 100;
      const calcBmi = (wInput / (heightInMeters * heightInMeters)).toFixed(1);

      if (calcBmi < ref.minBmi) {
        bmiStatus = lang === "english"
          ? `<div class="flag-card flag-red" style="background:#fff1f2; border-color:#fecdd3; color:#9f1239;"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Underweight (<3rd Percentile).</strong> Below healthy IAP range (${ref.minBmi} – ${ref.ovBmi}). Consult your pediatrician for dietary and nutritional review.</div></div>`
          : `<div class="flag-card flag-red" style="background:#fff1f2; border-color:#fecdd3; color:#9f1239;"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): कम वजन (<3वां परसेंटाइल)।</strong> मानक सीमा (${ref.minBmi} – ${ref.ovBmi}) से कम। पोषण समीक्षा हेतु डॉक्टर से परामर्श लें।</div></div>`;
      } else if (calcBmi >= ref.obBmi) {
        bmiStatus = lang === "english"
          ? `<div class="flag-card flag-red" style="background:#fef2f2; border-color:#f87171; color:#991b1b;"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Significantly Above Average (≥95th Percentile).</strong> Exceeds normal thresholds. Consult your pediatrician for structured lifestyle and activity guidance.</div></div>`
          : `<div class="flag-card flag-red" style="background:#fef2f2; border-color:#f87171; color:#991b1b;"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): सामान्य से अधिक (≥95वां परसेंटाइल)।</strong> जीवनशैली व आहार परामर्श हेतु बाल रोग विशेषज्ञ से मिलें।</div></div>`;
      } else if (calcBmi >= ref.ovBmi) {
        bmiStatus = lang === "english"
          ? `<div class="flag-card flag-yellow" style="background:#fffbeb; border-color:#fde047; color:#854d0e;"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Above Normal Range (≥75th Percentile).</strong> Exceeds standard threshold (${ref.ovBmi} kg/m²). Pediatric review for balanced nutrition and active play recommended.</div></div>`
          : `<div class="flag-card flag-yellow" style="background:#fffbeb; border-color:#fde047; color:#854d0e;"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): मानक सीमा से अधिक (≥75वां परसेंटाइल)।</strong> संतुलित आहार व नियमित खेलकूद हेतु डॉक्टर से सलाह लें।</div></div>`;
      } else {
        bmiStatus = lang === "english"
          ? `<div class="flag-card flag-green"><i class="fa-solid fa-heart-pulse"></i> <div><strong>BMI (${calcBmi} kg/m²): Ideal & Healthy Weight.</strong> Tracking in normal IAP percentiles (${ref.minBmi} – ${ref.ovBmi} kg/m²).</div></div>`
          : `<div class="flag-card flag-green"><i class="fa-solid fa-heart-pulse"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): आदर्श एवं स्वस्थ वजन।</strong> IAP मानक अनुसार सही सीमा में है।</div></div>`;
      }
    } else if (isInfant) {
      bmiStatus = `
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:8px 12px; margin-top:6px; font-size:0.78rem; color:#64748b;">
          <i class="fa-solid fa-circle-info" style="color:var(--brand-primary); margin-right:4px;"></i>
          ${lang === "english" ? "Note: In infants under 2 years, growth is evaluated via Weight-for-Length charts. Formal BMI-for-Age tracking begins at 2 years per IAP guidelines." : "सूचना: 2 वर्ष से छोटे शिशुओं में लंबाई के अनुपात में वजन देखा जाता है। औपचारिक बीएमआई 2 वर्ष की आयु से लागू होता है।"}
        </div>
      `;
    }
  }

  // 4. Mid-Parental Height Output Box (Tanner Formula)
  let mphHtml = "";
  if (!isNaN(targetHeight)) {
    const minTarget = (targetHeight - 6).toFixed(1);
    const maxTarget = (targetHeight + 6).toFixed(1);
    const midTarget = targetHeight.toFixed(1);

    let targetAnalysisText = "";
    let boxBorderColor = "#99f6e4";
    let boxBgColor = "#f0fdfa";
    let boxTitleColor = "#0f766e";

    if (!isNaN(hInput) && ref) {
      if (discrepancyType === "lagging-severe") {
        boxBgColor = "#fef2f2";
        boxBorderColor = "#fca5a5";
        boxTitleColor = "#991b1b";
        targetAnalysisText = lang === "english"
          ? `<span style="color: #b91c1c; font-weight:700; display:block; margin-top:6px;">⚠️ Clinical Guidance: Child's linear growth is trailing below parental genetic potential (>2 SD). Please consult your pediatrician for detailed in-person clinical evaluation and growth charting.</span>`
          : `<span style="color: #b91c1c; font-weight:700; display:block; margin-top:6px;">⚠️ चिकित्सीय मार्गदर्शन: बच्चे की वर्तमान लंबाई माता-पिता की आनुवंशिक क्षमता से कम चल रही है (>2 SD)। विस्तृत जांच हेतु बाल रोग विशेषज्ञ से परामर्श लें।</span>`;
      } else if (discrepancyType === "lagging-moderate") {
        boxBgColor = "#fffbeb";
        boxBorderColor = "#fde047";
        boxTitleColor = "#854d0e";
        targetAnalysisText = lang === "english"
          ? `<span style="color: #b45309; font-weight:700; display:block; margin-top:6px;">🟡 Clinical Guidance: Child's linear growth tracks slightly below parental genetic target (~1.5 SD). Regular follow-up with your pediatrician is advised.</span>`
          : `<span style="color: #b45309; font-weight:700; display:block; margin-top:6px;">🟡 चिकित्सीय मार्गदर्शन: बच्चे का विकास क्रम आनुवंशिक लक्ष्य से थोड़ा धीमा है। डॉक्टर से नियमित जांच कराएं।</span>`;
      } else if (discrepancyType === "exceeding") {
        boxBgColor = "#f0fdf4";
        boxBorderColor = "#86efac";
        boxTitleColor = "#166534";
        targetAnalysisText = lang === "english"
          ? `<span style="color: #15803d; font-weight:600; display:block; margin-top:6px;">✔ Child's linear growth is robust and tracking above the mid-parental genetic projection channel.</span>`
          : `<span style="color: #15803d; font-weight:600; display:block; margin-top:6px;">✔ बच्चे का शारीरिक विकास माता-पिता की आनुवंशिक संभावना से अधिक उत्तम गति से बढ़ रहा है।</span>`;
      } else {
        targetAnalysisText = lang === "english"
          ? `<span style="color: #15803d; font-weight:600; display:block; margin-top:6px;">✔ Child's growth trajectory is well-harmonized with parental genetic target height.</span>`
          : `<span style="color: #15803d; font-weight:600; display:block; margin-top:6px;">✔ बच्चे का विकास क्रम माता-पिता के आनुवंशिक कद के पूर्णतः अनुकूल है।</span>`;
      }
    }

    mphHtml = `
      <div style="background: ${boxBgColor}; border: 1.5px solid ${boxBorderColor}; border-radius: 14px; padding: 14px; margin-top: 12px;">
        <div style="font-weight: 700; color: ${boxTitleColor}; font-size: 0.9rem; margin-bottom: 4px;">
          <i class="fa-solid fa-dna"></i> ${lang === "english" ? "Mid-Parental Target Adult Height (Tanner Formula)" : "आनुवंशिक संभावित वयस्क लंबाई (Tanner Formula)"}
        </div>
        <div style="font-size: 0.86rem; color: #334155; line-height: 1.5;">
          • ${lang === "english" ? "Projected Adult Genetic Target" : "संभावित वयस्क लक्ष्य लंबाई"}: <strong>${midTarget} cm</strong><br>
          • ${lang === "english" ? "Target Genetic Range (±6 cm)" : "आनुवंशिक सीमा (±6 cm)"}: <strong>${minTarget} cm – ${maxTarget} cm</strong>
          ${targetAnalysisText}
        </div>
      </div>
    `;
  }

  const genderTitle = (gender === "boy") ? (lang === "english" ? "BOY" : "बालक") : (lang === "english" ? "GIRL" : "बालिका");
  growthHtml = `
    <div class="result-box">
      <h4><i class="fa-solid fa-ruler-combined" style="color: var(--brand-primary);"></i> ${lang === "english" ? "IAP Growth & BMI Assessment" : "IAP ग्रोथ एवं बीएमआई मूल्यांकन"}</h4>
      <span class="iap-ref-badge">IAP Standard (${ageName} - ${genderTitle})</span>
      <p style="font-size:0.84rem; color:#64748b; margin-bottom:10px;">
        ${lang === "english" ? "Population Normal Range:" : "सामान्य स्वस्थ सीमा:"} 
        ${lang === "english" ? "Weight:" : "वजन:"} <strong>${ref ? ref.minW : "" }–${ref ? ref.maxW : "" } kg</strong> | 
        ${measurementWord}: <strong>${ref ? ref.minH : "" }–${ref ? ref.maxH : "" } cm</strong>
      </p>
      ${wStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${lang === "english" ? "Enter weight above for percentile evaluation." : "वजन दर्ज करें।"}</p>`}
      ${hStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${lang === "english" ? "Enter height/length above for evaluation." : "लंबाई दर्ज करें।"}</p>`}
      ${bmiStatus}
      ${mphHtml}
    </div>
  `;

  // 5. Milestones & Tanner
  const listLang = lang === "english" ? "en" : "hi";
  const greenList = (data.green && data.green[listLang]) ? data.green[listLang].map(item => `<li>${item}</li>`).join("") : "";
  const yellowList = (data.yellow && data.yellow[listLang]) ? data.yellow[listLang].map(item => `<li>${item}</li>`).join("") : "";
  const redList = (data.red && data.red[listLang]) ? data.red[listLang].map(item => `<li>${item}</li>`).join("") : "";

  let tannerHtml = "";
  if (data.tanner && data.tanner[gender]) {
    const tInfo = data.tanner[gender];
    tannerHtml = `
      <div style="background: #fdf4ff; border: 1.5px solid #f0abfc; border-radius: 14px; padding: 14px; margin-top: 14px;">
        <div style="font-weight: 700; color: #86198f; font-size: 0.9rem; margin-bottom: 6px;">
          <i class="fa-solid fa-person-arrow-up-from-line"></i> ${lang === "english" ? "Tanner Pubertal Staging" : "टैनर प्यूबर्टल स्टेजिंग"} (${genderTitle})
        </div>
        <div style="font-size: 0.84rem; color: #701a75; line-height: 1.45; margin-bottom: 8px;"><strong>Stage:</strong> ${tInfo.stage}</div>
        <div class="flag-card flag-green" style="margin-bottom: 6px; padding: 8px 10px; font-size: 0.82rem;"><i class="fa-solid fa-circle-check"></i><div><strong>🟢 Timeline:</strong> ${tInfo.green}</div></div>
        <div class="flag-card flag-yellow" style="margin-bottom: 6px; padding: 8px 10px; font-size: 0.82rem;"><i class="fa-solid fa-triangle-exclamation"></i><div><strong>🟡 Monitor:</strong> ${tInfo.yellow}</div></div>
        <div class="flag-card flag-red" style="margin-bottom: 0; padding: 8px 10px; font-size: 0.82rem;"><i class="fa-solid fa-circle-exclamation"></i><div><strong>🔴 Alert:</strong> ${tInfo.red}</div></div>
      </div>
    `;
  }

  const devHtml = `
    <div class="result-box">
      <h4><i class="fa-solid fa-brain" style="color: #0891b2;"></i> ${lang === "english" ? "Developmental Milestones (TDSC Scale)" : "विकासात्मक मील के पत्थर (TDSC स्केल)"}</h4>
      <div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i><div><strong>🟢 ${lang === "english" ? "Green Flags:" : "सामान्य मील के पत्थर:"}</strong><ul style="margin-top:4px; padding-left:16px;">${greenList}</ul></div></div>
      <div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i><div><strong>🟡 ${lang === "english" ? "Yellow Flags:" : "निगरानी योग्य संकेत:"}</strong><ul style="margin-top:4px; padding-left:16px;">${yellowList}</ul></div></div>
      <div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i><div><strong>🔴 ${lang === "english" ? "Red Flags (Pediatrician Review):" : "सतर्कता संकेत - डॉक्टर को दिखाएं:"}</strong><ul style="margin-top:4px; padding-left:16px;">${redList}</ul></div></div>
      ${tannerHtml}
    </div>
  `;

  let specialEducationHtml = "";
  if (ageKey === "6m" || ageKey === "9m" || ageKey === "12m") {
    specialEducationHtml = renderIapWeaningInteractive(lang);
  } else if (ageKey === "18m" || ageKey === "24m") {
    specialEducationHtml = renderToiletTrainingGuide(lang);
  }

  const tips = data.parentTips || { nutrition: {}, safety: {}, play: {}, care: {} };
  const tipsHtml = `
    <div class="result-box" style="grid-column: 1 / -1; background: #faf5ff; border: 1.5px solid #e9d5ff;">
      <h4 style="color: #6b21a8;"><i class="fa-solid fa-heart-pulse"></i> ${ageName} ${lang === "english" ? "Parenting Guide" : "अभिभावक देखभाल मार्गदर्शन"}</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: 12px;">
        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#7e22ce; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-apple-whole"></i> ${lang === "english" ? "Nutrition:" : "पोषण:"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.nutrition[listLang] || ""}</p>
        </div>
        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#b91c1c; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-shield-halved"></i> ${lang === "english" ? "Child Safety:" : "सुरक्षा:"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.safety[listLang] || ""}</p>
        </div>
        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#0369a1; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-puzzle-piece"></i> ${lang === "english" ? "Play & Cognitive:" : "मानसिक विकास:"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.play[listLang] || ""}</p>
        </div>
        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#15803d; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-stethoscope"></i> ${lang === "english" ? "Doctor Tip:" : "चिकित्सकीय सलाह:"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.care[listLang] || ""}</p>
        </div>
      </div>
      ${specialEducationHtml}
      <div style="text-align:center; margin-top:18px;">
        <button onclick="openBookingModal()" class="hero-cta-btn" style="padding: 10px 24px; font-size: 0.9rem; background:#0891b2; box-shadow: 0 4px 14px rgba(8, 145, 178, 0.35);">
          <i class="fa-solid fa-calendar-check"></i> ${lang === "english" ? "Book Consultation with Dr. Dinesh Mittal" : "डॉ. दिनेश मित्तल से परामर्श बुक करें"}
        </button>
      </div>
    </div>
  `;

  resultsContainer.innerHTML = `
    <div class="results-grid">
      ${growthHtml}
      ${devHtml}
      ${tipsHtml}
    </div>
  `;
}

// ==========================================================
// 3. WEANING & TOILET TRAINING HELPERS
// ==========================================================
function renderIapWeaningInteractive(lang) {
  if (typeof weaningEducationDatabase === "undefined") return "";

  const listLang = (lang === "hindi") ? "hi" : "en";
  const stages = weaningEducationDatabase.stages;

  const stageCardsHtml = stages.map((stg, idx) => {
    const recipes = (currentDietPreference === "veg") ? stg.vegRecipes : stg.nonVegRecipes;
    const recipeItemsHtml = recipes.map(r => `
      <div style="background:#ffffff; padding:12px 14px; border-radius:12px; border:1px solid #fed7aa; margin-bottom:10px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; flex-wrap:wrap;">
          <strong style="color:#9a3412; font-size:0.88rem; display:flex; align-items:center; gap:6px;">
            <i class="fa-solid ${currentDietPreference === 'veg' ? 'fa-leaf' : 'fa-egg'}" style="color:${currentDietPreference === 'veg' ? '#16a34a' : '#d97706'};"></i> ${r.name[listLang]}
          </strong>
          <a href="${r.ytUrl}" target="_blank" rel="noopener noreferrer" style="background:#fee2e2; color:#b91c1c; font-size:0.72rem; font-weight:700; padding:3px 8px; border-radius:12px; text-decoration:none; display:inline-flex; align-items:center; gap:4px; border:1px solid #fca5a5;">
            <i class="fa-brands fa-youtube" style="color:#dc2626;"></i> ${lang === 'english' ? 'Watch Recipe' : 'रेसिपी देखें'}
          </a>
        </div>
        <p style="font-size:0.82rem; color:#431407; margin-top:5px; line-height:1.45;">${r.prep[listLang]}</p>
      </div>
    `).join("");

    return `
      <div style="border: 1.5px solid #fed7aa; border-radius: 14px; overflow: hidden; background: #fffaf5; margin-bottom: 12px;">
        <button type="button" onclick="toggleWeaningAccordion('wean-body-${idx}', this)" style="width:100%; background:#fff7ed; border:none; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; text-align:left;">
          <div>
            <strong style="color:#c2410c; font-size:0.92rem;"><i class="fa-solid fa-bowl-food" style="color:#f97316; margin-right:6px;"></i> ${stg.ageRange[listLang]}</strong>
          </div>
          <i class="fa-solid fa-chevron-down" style="color:#ea580c; transition:transform 0.25s;"></i>
        </button>
        <div id="wean-body-${idx}" style="display:${idx === 0 ? 'block' : 'none'}; padding:14px; border-top:1px solid #fed7aa;">
          <div style="font-size:0.84rem; color:#7c2d12; line-height:1.5; margin-bottom:10px;">
            • <strong>${lang === 'english' ? 'Texture / Consistency:' : 'भोजन का गाढ़ापन:'}</strong> ${stg.consistency[listLang]}<br>
            • <strong>${lang === 'english' ? 'Frequency:' : 'कितनी बार दें:'}</strong> ${stg.frequency[listLang]}<br>
            • <strong>${lang === 'english' ? 'Quantity per Meal:' : 'प्रति खुराक मात्रा:'}</strong> ${stg.quantity[listLang]}
          </div>
          <div style="margin-top:10px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
              <span style="font-weight:700; color:#9a3412; font-size:0.84rem;">
                <i class="fa-solid fa-utensils"></i> ${lang === 'english' ? 'Step-by-Step Recipes' : 'आसान व सुपाच्य घरेलू व्यंजन'} (${currentDietPreference === 'veg' ? (lang === 'english' ? 'Vegetarian' : 'शाकाहारी') : (lang === 'english' ? 'Non-Veg / Egg' : 'अंडा/मांसाहारी')}):
              </span>
              <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(stg.ytQuery)}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem; color:#dc2626; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:4px;">
                <i class="fa-brands fa-youtube"></i> ${lang === 'english' ? 'View All Stage Videos' : 'सभी वीडियो देखें'} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.65rem;"></i>
              </a>
            </div>
            ${recipeItemsHtml}
          </div>
        </div>
      </div>
    `;
  }).join("");

  return `
    <div style="background: #fffdf7; border: 2px solid #fdba74; border-radius: 18px; padding: 18px; margin-top: 18px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
        <div>
          <span style="background:#ffedd5; color:#c2410c; font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:12px; display:inline-block; margin-bottom:4px;">
            <i class="fa-solid fa-seedling"></i> IAP IYCF Guidelines (6 to 12 Months)
          </span>
          <h5 style="color: #9a3412; font-family:'Fredoka',cursive; font-size: 1.25rem; margin:0;">
            ${lang === 'english' ? "Stepwise Complementary Feeding & Food Plate Guide" : "6 माह से 1 वर्ष: संपूर्ण ऊपरी आहार एवं फूड-प्लेट मार्गदर्शन"}
          </h5>
        </div>
        <div style="display:flex; align-items:center; gap:6px; background:#ffedd5; padding:4px 8px; border-radius:20px; border:1px solid #fed7aa;">
          <span style="font-size:0.78rem; font-weight:700; color:#9a3412;"><i class="fa-solid fa-filter"></i> ${lang === 'english' ? 'Diet:' : 'आहार:'}</span>
          <button type="button" onclick="setWeaningDiet('veg')" style="border:none; padding:4px 10px; border-radius:14px; font-size:0.76rem; font-weight:700; cursor:pointer; background:${currentDietPreference === 'veg' ? '#16a34a' : 'transparent'}; color:${currentDietPreference === 'veg' ? '#fff' : '#431407'};">
            🟢 ${lang === 'english' ? 'Vegetarian' : 'शाकाहारी'}
          </button>
          <button type="button" onclick="setWeaningDiet('nonveg')" style="border:none; padding:4px 10px; border-radius:14px; font-size:0.76rem; font-weight:700; cursor:pointer; background:${currentDietPreference === 'nonveg' ? '#ea580c' : 'transparent'}; color:${currentDietPreference === 'nonveg' ? '#fff' : '#431407'};">
            🔴 ${lang === 'english' ? 'Non-Veg / Egg' : 'अंडा / नॉन-वेज'}
          </button>
        </div>
      </div>
      <div>${stageCardsHtml}</div>
    </div>
  `;
}

function setWeaningDiet(diet) {
  currentDietPreference = diet;
  runScreener();
}

function toggleWeaningAccordion(bodyId, button) {
  const body = document.getElementById(bodyId);
  const icon = button.querySelector('.fa-chevron-down');
  if (!body) return;
  const isOpen = (body.style.display === "block");
  body.style.display = isOpen ? "none" : "block";
  if (icon) icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
}

function renderToiletTrainingGuide(lang) {
  if (typeof toiletTrainingDatabase === "undefined") return "";

  const listLang = (lang === "hindi") ? "hi" : "en";
  const tt = toiletTrainingDatabase;

  const readinessHtml = tt.readinessSigns[listLang].map(sign => `
    <li style="margin-bottom:6px; font-size:0.82rem; color:#065f46; display:flex; align-items:flex-start; gap:6px;">
      <i class="fa-solid fa-circle-check" style="color:#059669; margin-top:2px; flex-shrink:0;"></i>
      <span>${sign}</span>
    </li>
  `).join("");

  const stepsHtml = tt.steps.map(step => `
    <div style="background:#ffffff; border:1px solid #a7f3d0; border-radius:12px; padding:12px 14px; margin-bottom:8px;">
      <strong style="color:#065f46; font-size:0.86rem; display:block; margin-bottom:3px;">
        <i class="fa-solid fa-stairs" style="color:#10b981; margin-right:4px;"></i> Step ${step.num}: ${step.title[listLang]}
      </strong>
      <p style="font-size:0.8rem; color:#064e3b; line-height:1.45; margin:0;">${step.desc[listLang]}</p>
    </div>
  `).join("");

  return `
    <div style="background: #f0fdf4; border: 2px solid #86efac; border-radius: 18px; padding: 18px; margin-top: 18px;">
      <h5 style="color: #065f46; font-family:'Fredoka',cursive; font-size: 1.25rem; margin-bottom:10px;">
        ${tt.title[listLang]}
      </h5>
      <ul style="list-style:none; padding:0; margin:0 0 12px 0;">${readinessHtml}</ul>
      <div>${stepsHtml}</div>
    </div>
  `;
}

// ==========================================================
// 4. MODALS
// ==========================================================
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}
function openDisclaimerModal() {
  const modal = document.getElementById('disclaimerModal');
  if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closeDisclaimerModal() {
  const modal = document.getElementById('disclaimerModal');
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}
function openPrivacyModal() {
  const modal = document.getElementById('privacyModal');
  if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function closePrivacyModal() {
  const modal = document.getElementById('privacyModal');
  if (modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
}
function closeModalOnOverlay(event, modalId) {
  if (event.target && event.target.id === modalId) {
    if (modalId === 'bookingModal') closeBookingModal();
    if (modalId === 'disclaimerModal') closeDisclaimerModal();
    if (modalId === 'privacyModal') closePrivacyModal();
  }
}

// ==========================================================
// 5. HARDWARE-SAFE TOUCH / CLICK BINDINGS
// ==========================================================
document.addEventListener("DOMContentLoaded", function() {
  // Bind direct hardware touch & click events
  const mobileBtn = document.getElementById("mobileLangToggleBtn");
  const desktopBtn = document.getElementById("globalLangToggleBtn");

  if (mobileBtn) {
    mobileBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.toggleGlobalLanguage();
    });
  }

  if (desktopBtn) {
    desktopBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.toggleGlobalLanguage();
    });
  }

  // Initialize initial state
  window.setGlobalLanguage(window.currentGlobalLang);
  runScreener();
});
