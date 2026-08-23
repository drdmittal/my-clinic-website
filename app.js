// ==========================================================
// CLINIC APPLICATION ENGINE (app.js) - CRASH-PROOF VERSION
// ==========================================================

// 🌐 1. FAIL-SAFE BILINGUAL DICTIONARY
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

    const desktopBtnText = document.getElementById("langBtnText");
    const mobileBtnText = document.getElementById("mobileLangBtnText");
    const nextPrompt = (lang === "en") ? "हिन्दी" : "English";

    if (desktopBtnText) desktopBtnText.textContent = nextPrompt;
    if (mobileBtnText) mobileBtnText.textContent = nextPrompt;

    const screenerLangSelect = document.getElementById("screenerLang");
    if (screenerLangSelect) {
      screenerLangSelect.value = (lang === "hi") ? "hindi" : "english";
    }

    try { runScreener(); } catch (err) {}
  } catch (globalErr) {
    console.error("Language switch error:", globalErr);
  }
};

window.toggleGlobalLanguage = function() {
  const nextLang = (window.currentGlobalLang === "en") ? "hi" : "en";
  window.setGlobalLanguage(nextLang);
};

let currentDietPreference = "veg";

// ==========================================================
// 2. DEFENSIVE & CRASH-PROOF SCREENER RUNNER
// ==========================================================
function runScreener() {
  try {
    const langEl = document.getElementById("screenerLang");
    const ageEl = document.getElementById("screenerAge");
    const genderEl = document.getElementById("screenerGender");
    const weightEl = document.getElementById("screenerWeight");
    const heightEl = document.getElementById("screenerHeight");
    const fatherEl = document.getElementById("fatherHeight");
    const motherEl = document.getElementById("motherHeight");
    const resultsContainer = document.getElementById("screenerResults");

    if (!ageEl || !genderEl || !resultsContainer) return;
    if (typeof milestoneDatabase === "undefined") return;

    const lang = (langEl && langEl.value === "hindi") ? "hindi" : "english";
    const listLang = (lang === "hindi") ? "hi" : "en";
    const ageKey = ageEl.value;
    const gender = genderEl.value || "boy";
    const wInput = weightEl ? parseFloat(weightEl.value) : NaN;
    const hInput = heightEl ? parseFloat(heightEl.value) : NaN;
    const fHeight = fatherEl ? parseFloat(fatherEl.value) : NaN;
    const mHeight = motherEl ? parseFloat(motherEl.value) : NaN;

    const isInfant = (ageKey === "0m" || ageKey === "3m" || ageKey === "6m" || ageKey === "9m" || ageKey === "12m" || ageKey === "18m");
    const measurementWord = isInfant ? (lang === "english" ? "Length" : "लंबाई") : (lang === "english" ? "Height" : "कद");

    const data = milestoneDatabase[ageKey];
    if (!data) return;

    const ageName = (data.name && data.name[listLang]) ? data.name[listLang] : ageKey;
    const ref = (data.iap && data.iap[gender]) ? data.iap[gender] : null;

    let wStatus = "";
    let hStatus = "";
    let bmiStatus = "";

    // 1. Weight Evaluation
    if (!isNaN(wInput) && ref) {
      if (wInput < ref.minW) {
        wStatus = lang === "english" 
          ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Weight (${wInput} kg): Below 3rd percentile.</strong> Standard healthy range: ${ref.minW} – ${ref.maxW} kg. Consult pediatrician for nutrition review.</div></div>`
          : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>वजन (${wInput} kg): 3वें परसेंटाइल से कम।</strong> मानक सीमा: ${ref.minW} – ${ref.maxW} kg। पोषण समीक्षा हेतु डॉक्टर से परामर्श लें।</div></div>`;
      } else if (wInput > ref.maxW) {
        wStatus = lang === "english"
          ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Weight (${wInput} kg): Above 97th percentile.</strong> Exceeds typical range (${ref.minW} – ${ref.maxW} kg). Consult pediatrician for balanced diet guidance.</div></div>`
          : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>वजन (${wInput} kg): 97वें परसेंटाइल से अधिक।</strong> मानक सीमा (${ref.minW} – ${ref.maxW} kg) से अधिक है। संतुलित आहार हेतु परामर्श लें।</div></div>`;
      } else {
        wStatus = lang === "english"
          ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Weight (${wInput} kg): Normal & Healthy.</strong> Aligned with standard range (${ref.minW} – ${ref.maxW} kg).</div></div>`
          : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>वजन (${wInput} kg): बिल्कुल सामान्य एवं स्वस्थ।</strong> मानक सीमा (${ref.minW} – ${ref.maxW} kg) के अनुसार सही है।</div></div>`;
      }
    }

    // 2. Height Evaluation
    if (!isNaN(hInput) && ref) {
      if (hInput < ref.minH) {
        hStatus = lang === "english"
          ? `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>${measurementWord} (${hInput} cm): Below 3rd percentile.</strong> Below norm (${ref.minH} – ${ref.maxH} cm). Consult pediatrician for clinical checkup.</div></div>`
          : `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>${measurementWord} (${hInput} cm): 3वें परसेंटाइल से कम।</strong> मानक सीमा (${ref.minH} – ${ref.maxH} cm) से कम है। चिकित्सीय परामर्श लें।</div></div>`;
      } else if (hInput > ref.maxH) {
        hStatus = lang === "english"
          ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>${measurementWord} (${hInput} cm): Above Average (>97th percentile).</strong> Robust growth (${ref.minH} – ${ref.maxH} cm).</div></div>`
          : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>${measurementWord} (${hInput} cm): उत्तम शारीरिक विकास (>97वां परसेंटाइल)।</strong></div></div>`;
      } else {
        hStatus = lang === "english"
          ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>${measurementWord} (${hInput} cm): Normal & Healthy.</strong> Tracking well (${ref.minH} – ${ref.maxH} cm).</div></div>`
          : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>${measurementWord} (${hInput} cm): आदर्श विकास क्रम।</strong> मानक अनुसार सही है।</div></div>`;
      }
    }

    // 3. BMI-for-Age
    if (!isNaN(wInput) && !isNaN(hInput) && hInput > 0) {
      const heightInMeters = hInput / 100;
      const calcBmi = (wInput / (heightInMeters * heightInMeters)).toFixed(1);

      if (ref && ref.minBmi) {
        if (calcBmi < ref.minBmi) {
          bmiStatus = lang === "english"
            ? `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Underweight (<3rd Percentile).</strong> Below standard threshold (${ref.minBmi} – ${ref.ovBmi}).</div></div>`
            : `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): कम वजन (<3वां परसेंटाइल)।</strong> मानक सीमा (${ref.minBmi} – ${ref.ovBmi}) से कम है।</div></div>`;
        } else if (calcBmi >= ref.obBmi) {
          bmiStatus = lang === "english"
            ? `<div class="flag-card flag-red"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Above Healthy Range (≥95th Percentile).</strong> Active lifestyle review advised.</div></div>`
            : `<div class="flag-card flag-red"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): सामान्य से अधिक (≥95वां परसेंटाइल)।</strong> संतुलित जीवनशैली अपनाएं।</div></div>`;
        } else if (calcBmi >= ref.ovBmi) {
          bmiStatus = lang === "english"
            ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Above Normal (≥75th Percentile).</strong> Regular outdoor play advised.</div></div>`
            : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): मानक सीमा से अधिक (≥75वां परसेंटाइल)।</strong> नियमित खेलकूद आवश्यक है।</div></div>`;
        } else {
          bmiStatus = lang === "english"
            ? `<div class="flag-card flag-green"><i class="fa-solid fa-heart-pulse"></i> <div><strong>BMI (${calcBmi} kg/m²): Ideal & Healthy Weight.</strong> Tracking normally (${ref.minBmi} – ${ref.ovBmi} kg/m²).</div></div>`
            : `<div class="flag-card flag-green"><i class="fa-solid fa-heart-pulse"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): आदर्श एवं स्वस्थ वजन।</strong> सही सीमा में है।</div></div>`;
        }
      }
    }

    // 4. Mid-Parental Height (Tanner Formula)
    let mphHtml = "";
    if (!isNaN(fHeight) && !isNaN(mHeight)) {
      const targetHeight = (gender === "boy") ? (fHeight + mHeight + 13) / 2 : (fHeight + mHeight - 13) / 2;
      const minTarget = (targetHeight - 6).toFixed(1);
      const maxTarget = (targetHeight + 6).toFixed(1);
      const midTarget = targetHeight.toFixed(1);

      mphHtml = `
        <div style="background: #f0fdfa; border: 1.5px solid #99f6e4; border-radius: 14px; padding: 14px; margin-top: 12px;">
          <div style="font-weight: 700; color: #0f766e; font-size: 0.9rem; margin-bottom: 4px;">
            <i class="fa-solid fa-dna"></i> ${lang === "english" ? "Mid-Parental Genetic Target Height" : "आनुवंशिक संभावित वयस्क लंबाई"}
          </div>
          <div style="font-size: 0.86rem; color: #334155; line-height: 1.5;">
            • ${lang === "english" ? "Projected Adult Height" : "संभावित वयस्क लंबाई"}: <strong>${midTarget} cm</strong><br>
            • ${lang === "english" ? "Target Genetic Range (±6 cm)" : "आनुवंशिक सीमा (±6 cm)"}: <strong>${minTarget} cm – ${maxTarget} cm</strong>
          </div>
        </div>
      `;
    }

    const genderTitle = (gender === "boy") ? (lang === "english" ? "BOY" : "बालक") : (lang === "english" ? "GIRL" : "बालिका");
    const growthHtml = `
      <div class="result-box">
        <h4><i class="fa-solid fa-ruler-combined" style="color: var(--brand-primary);"></i> ${lang === "english" ? "IAP Growth & BMI Assessment" : "IAP ग्रोथ एवं बीएमआई मूल्यांकन"}</h4>
        <span class="iap-ref-badge">IAP Standard (${ageName} - ${genderTitle})</span>
        <p style="font-size:0.84rem; color:#64748b; margin-bottom:10px;">
          ${lang === "english" ? "Standard Healthy Range:" : "सामान्य स्वस्थ सीमा:"} 
          ${lang === "english" ? "Weight:" : "वजन:"} <strong>${ref ? ref.minW : "" }–${ref ? ref.maxW : "" } kg</strong> | 
          ${measurementWord}: <strong>${ref ? ref.minH : "" }–${ref ? ref.maxH : "" } cm</strong>
        </p>
        ${wStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${lang === "english" ? "Enter weight above for percentile evaluation." : "वजन दर्ज करें।"}</p>`}
        ${hStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${lang === "english" ? "Enter height/length above for evaluation." : "लंबाई दर्ज करें।"}</p>`}
        ${bmiStatus}
        ${mphHtml}
      </div>
    `;

    // 5. Milestones Flags (Safe Array Mapping)
    const greenItems = (data.green && Array.isArray(data.green[listLang])) ? data.green[listLang] : [];
    const yellowItems = (data.yellow && Array.isArray(data.yellow[listLang])) ? data.yellow[listLang] : [];
    const redItems = (data.red && Array.isArray(data.red[listLang])) ? data.red[listLang] : [];

    const greenList = greenItems.map(item => `<li>${item}</li>`).join("");
    const yellowList = yellowItems.map(item => `<li>${item}</li>`).join("");
    const redList = redItems.map(item => `<li>${item}</li>`).join("");

    const devHtml = `
      <div class="result-box">
        <h4><i class="fa-solid fa-brain" style="color: #0891b2;"></i> ${lang === "english" ? "Developmental Milestones (TDSC Scale)" : "विकासात्मक मील के पत्थर (TDSC स्केल)"}</h4>
        <div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i><div><strong>🟢 ${lang === "english" ? "Green Flags (Normal):" : "सामान्य मील के पत्थर:"}</strong><ul style="margin-top:4px; padding-left:16px;">${greenList || '<li>Normal age milestones tracking well.</li>'}</ul></div></div>
        <div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i><div><strong>🟡 ${lang === "english" ? "Yellow Flags (Monitor):" : "निगरानी योग्य संकेत:"}</strong><ul style="margin-top:4px; padding-left:16px;">${yellowList || '<li>No immediate delays noted.</li>'}</ul></div></div>
        <div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i><div><strong>🔴 ${lang === "english" ? "Red Flags (Doctor Review):" : "सतर्कता संकेत - डॉक्टर को दिखाएं:"}</strong><ul style="margin-top:4px; padding-left:16px;">${redList || '<li>Consult pediatrician if milestones lag.</li>'}</ul></div></div>
      </div>
    `;

    // 6. Parenting Tips (Safe Object Access)
    const nutritionTip = (data.parentTips && data.parentTips.nutrition && data.parentTips.nutrition[listLang]) ? data.parentTips.nutrition[listLang] : "";
    const safetyTip = (data.parentTips && data.parentTips.safety && data.parentTips.safety[listLang]) ? data.parentTips.safety[listLang] : "";
    const playTip = (data.parentTips && data.parentTips.play && data.parentTips.play[listLang]) ? data.parentTips.play[listLang] : "";
    const careTip = (data.parentTips && data.parentTips.care && data.parentTips.care[listLang]) ? data.parentTips.care[listLang] : "";

    const tipsHtml = `
      <div class="result-box" style="grid-column: 1 / -1; background: #faf5ff; border: 1.5px solid #e9d5ff;">
        <h4 style="color: #6b21a8;"><i class="fa-solid fa-heart-pulse"></i> ${ageName} ${lang === "english" ? "Parenting Guide" : "अभिभावक देखभाल मार्गदर्शन"}</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: 12px;">
          <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
            <strong style="color:#7e22ce; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-apple-whole"></i> ${lang === "english" ? "Nutrition:" : "पोषण:"}</strong>
            <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${nutritionTip}</p>
          </div>
          <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
            <strong style="color:#b91c1c; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-shield-halved"></i> ${lang === "english" ? "Child Safety:" : "सुरक्षा:"}</strong>
            <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${safetyTip}</p>
          </div>
          <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
            <strong style="color:#0369a1; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-puzzle-piece"></i> ${lang === "english" ? "Play & Cognitive:" : "मानसिक विकास:"}</strong>
            <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${playTip}</p>
          </div>
          <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
            <strong style="color:#15803d; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-stethoscope"></i> ${lang === "english" ? "Doctor Tip:" : "चिकित्सकीय सलाह:"}</strong>
            <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${careTip}</p>
          </div>
        </div>
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
  } catch (err) {
    console.error("runScreener execution error:", err);
  }
}

// ==========================================================
// 3. MODALS & EVENTS
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
// 4. HARDWARE-SAFE INITIALIZATION
// ==========================================================
document.addEventListener("DOMContentLoaded", function() {
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

  window.setGlobalLanguage(window.currentGlobalLang);
  runScreener();
});
