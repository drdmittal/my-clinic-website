// ==========================================================
// CLINIC APPLICATION ENGINE (app.js)
// Medicolegally Safe & NMC-Compliant Pediatric Growth Screener,
// IAP Growth Standards, Tanner Formula, Weaning & Adolescent FAQ
// ==========================================================

let currentDietPreference = "veg"; // 'veg' or 'nonveg'

// 1. MAIN SCREENER RUNNER
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
  let discrepancySeverity = "none";
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
        discrepancySeverity = "severe";
      } else if (zDiff >= 1.35) {
        hasHeightDiscrepancy = true;
        discrepancySeverity = "moderate";
      }
    }
  }

  // Synchronized Population Height Output
  if (!isNaN(hInput) && ref) {
    if (hInput < ref.minH) {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>Length/Height (${hInput} cm): Below 3rd percentile.</strong> Below population norm (${ref.minH} – ${ref.maxH} cm). Please consult your pediatrician for in-person clinical evaluation.</div></div>`
        : `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>लंबाई / कद (${hInput} cm): 3वें परसेंटाइल से कम।</strong> मानक IAP सीमा (${ref.minH} – ${ref.maxH} cm) से कम है। चिकित्सीय परामर्श लें।</div></div>`;
    } else if (hasHeightDiscrepancy && discrepancySeverity === "severe") {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-red"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Height (${hInput} cm): Trailing Parental Genetic Potential.</strong> Child's height tracks below their family mid-parental target channel. Please consult your pediatrician for detailed clinical growth evaluation.</div></div>`
        : `<div class="flag-card flag-red"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>लंबाई (${hInput} cm): आनुवंशिक क्षमता से कम।</strong> बच्चे का कद माता-पिता की संभावित जेनेटिक क्षमता से कम है। बाल रोग विशेषज्ञ से परामर्श लें।</div></div>`;
    } else if (hasHeightDiscrepancy && discrepancySeverity === "moderate") {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Height (${hInput} cm): Trailing Relative to Parental Target.</strong> Tracks slightly below mid-parental genetic channel. Growth monitoring with your pediatrician advised.</div></div>`
        : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>लंबाई (${hInput} cm): जेनेटिक लक्ष्य से धीमी गति।</strong> बच्चे का कद संभावित जेनेटिक क्षमता से थोड़ा धीमा है। डॉक्टर से नियमित निगरानी कराएं।</div></div>`;
    } else if (hInput > ref.maxH) {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Length/Height (${hInput} cm): Above Average (>97th percentile).</strong> Robust growth tracking well (${ref.minH} – ${ref.maxH} cm).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>लंबाई / कद (${hInput} cm): औसत से अधिक (>97वां परसेंटाइल)।</strong> उत्तम विकास।</div></div>`;
    } else {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Length/Height (${hInput} cm): Normal & Healthy.</strong> Tracking well within expected population and genetic parameters (${ref.minH} – ${ref.maxH} cm).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>लंबाई / कद (${hInput} cm): आदर्श विकास क्रम।</strong> IAP मानक अनुसार सही है।</div></div>`;
    }
  }

  // 3. IAP BMI-for-Age (2 to 18y)
  if (!isNaN(wInput) && !isNaN(hInput) && ref && ref.minBmi) {
    const heightInMeters = hInput / 100;
    const calcBmi = (wInput / (heightInMeters * heightInMeters)).toFixed(1);

    if (calcBmi < ref.minBmi) {
      bmiStatus = lang === "english"
        ? `<div class="flag-card flag-red" style="background:#fff1f2; border-color:#fecdd3; color:#9f1239;"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Underweight (<3rd Percentile).</strong> Below healthy IAP range (${ref.minBmi} – ${ref.ovBmi}). Consult your pediatrician for dietary and nutritional review.</div></div>`
        : `<div class="flag-card flag-red" style="background:#fff1f2; border-color:#fecdd3; color:#9f1239;"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): कम वजन (<3वां परसेंटाइल)।</strong> मानक सीमा (${ref.minBmi} – ${ref.ovBmi}) से कम। पोषण समीक्षा हेतु डॉक्टर से परामर्श लें।</div></div>`;
    } else if (calcBmi >= ref.obBmi) {
      bmiStatus = lang === "english"
        ? `<div class="flag-card flag-red" style="background:#fef2f2; border-color:#f87171; color:#991b1b;"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Significantly Above Average (≥95th Percentile).</strong> Exceeds normal thresholds. Consult your pediatrician for structured lifestyle and physical activity guidance.</div></div>`
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
  }

  // 4. Synchronized Mid-Parental Height Output Box (Tanner Formula - Medicolegally Safe)
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
      if (discrepancySeverity === "severe") {
        boxBgColor = "#fef2f2";
        boxBorderColor = "#fca5a5";
        boxTitleColor = "#991b1b";
        targetAnalysisText = lang === "english"
          ? `<span style="color: #b91c1c; font-weight:700; display:block; margin-top:6px;">⚠️ Clinical Guidance: Child's current height is trailing below parental genetic potential. Please consult your pediatrician for detailed in-person clinical evaluation and growth charting.</span>`
          : `<span style="color: #b91c1c; font-weight:700; display:block; margin-top:6px;">⚠️ चिकित्सीय मार्गदर्शन: बच्चे की वर्तमान लंबाई माता-पिता की आनुवंशिक क्षमता से कम चल रही है। विस्तृत जांच हेतु बाल रोग विशेषज्ञ से परामर्श लें।</span>`;
      } else if (discrepancySeverity === "moderate") {
        boxBgColor = "#fffbeb";
        boxBorderColor = "#fde047";
        boxTitleColor = "#854d0e";
        targetAnalysisText = lang === "english"
          ? `<span style="color: #b45309; font-weight:700; display:block; margin-top:6px;">🟡 Clinical Guidance: Child's linear growth is tracking slightly below parental genetic target. Regular follow-up with your pediatrician is advised.</span>`
          : `<span style="color: #b45309; font-weight:700; display:block; margin-top:6px;">🟡 चिकित्सीय मार्गदर्शन: बच्चे का विकास क्रम आनुवंशिक लक्ष्य से थोड़ा धीमा है। डॉक्टर से नियमित जांच कराएं।</span>`;
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
        ${lang === "english" ? "Length/Height:" : "लंबाई/कद:"} <strong>${ref ? ref.minH : "" }–${ref ? ref.maxH : "" } cm</strong>
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
      <h4><i class="fa-solid fa-brain" style="color: #0891b2;"></i> ${lang === "english" ? "Developmental Milestones" : "विकासात्मक मील के पत्थर"}</h4>
      <div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i><div><strong>🟢 ${lang === "english" ? "Green Flags:" : "सामान्य मील के पत्थर:"}</strong><ul style="margin-top:4px; padding-left:16px;">${greenList}</ul></div></div>
      <div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i><div><strong>🟡 ${lang === "english" ? "Yellow Flags:" : "निगरानी योग्य संकेत:"}</strong><ul style="margin-top:4px; padding-left:16px;">${yellowList}</ul></div></div>
      <div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i><div><strong>🔴 ${lang === "english" ? "Red Flags (Pediatrician Review):" : "सतर्कता संकेत - डॉक्टर को दिखाएं:"}</strong><ul style="margin-top:4px; padding-left:16px;">${redList}</ul></div></div>
      ${tannerHtml}
    </div>
  `;

  // 6. Educational Modules (Weaning for 6-12m & Toilet Training for 18m-24m)
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
          <i class="fa-solid fa-calendar-check"></i> ${lang === "english" ? "Book Growth Consultation with Dr. Dinesh Mittal" : "डॉ. दिनेश मित्तल से विकास परामर्श बुक करें"}
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

  renderCollapsibleAdolescentSection();
}

// 2. INTERACTIVE IAP WEANING GENERATOR (WITH YOUTUBE BADGES)
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
        
        <!-- VEG / NON-VEG TOGGLE SWITCH -->
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

      <!-- THE 4-FOOD GROUP BALANCED PEDIATRIC PLATE -->
      <div style="background:#ffffff; border:1.5px solid #fed7aa; border-radius:14px; padding:14px; margin-bottom:14px;">
        <strong style="color:#c2410c; font-size:0.88rem; display:flex; align-items:center; gap:6px; margin-bottom:6px;">
          <i class="fa-solid fa-chart-pie"></i> ${lang === 'english' ? 'The Balanced 4-Group Pediatric Food Plate' : 'संतुलित बाल आहार: 4-खाद्य समूह (Food Plate Concept)'}
        </strong>
        <p style="font-size:0.82rem; color:#431407; margin-bottom:8px;">
          ${lang === 'english' ? 'Every main meal should combine elements from all 4 food groups for optimal brain & physical growth:' : 'प्रत्येक भोजन में इन 4 समूहों का संतुलन बच्चे के मानसिक व शारीरिक विकास के लिए आवश्यक है:'}
        </p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
          <div style="background:#fef2f2; padding:8px 10px; border-radius:8px; border:1px solid #fecaca; font-size:0.78rem; color:#991b1b;">
            <strong>1. Energy Grains:</strong> Rice, suji, sprouted ragi, wheat, oats.
          </div>
          <div style="background:#f0fdf4; padding:8px 10px; border-radius:8px; border:1px solid #bbf7d0; font-size:0.78rem; color:#166534;">
            <strong>2. Body Builders:</strong> Yellow moong dal, paneer, curd, egg yolk, fish, chicken liver.
          </div>
          <div style="background:#eff6ff; padding:8px 10px; border-radius:8px; border:1px solid #bfdbfe; font-size:0.78rem; color:#1e40af;">
            <strong>3. Protective Vitamins:</strong> Steamed pumpkin, carrot, bottle gourd (lauki), papaya, banana.
          </div>
          <div style="background:#fffbeb; padding:8px 10px; border-radius:8px; border:1px solid #fde68a; font-size:0.78rem; color:#854d0e;">
            <strong>4. Calorie Boosters:</strong> 1/2 tsp pure desi ghee or butter per meal.
          </div>
        </div>
      </div>

      <!-- STAGES ACCORDION -->
      <div>${stageCardsHtml}</div>

      <!-- STRICT IAP SAFETY RULES & PROHIBITED FOODS -->
      <div style="background:#fef2f2; border:1.5px solid #fca5a5; border-radius:12px; padding:12px 14px; margin-top:12px;">
        <strong style="color:#991b1b; font-size:0.85rem; display:flex; align-items:center; gap:6px;">
          <i class="fa-solid fa-ban"></i> ${lang === 'english' ? 'Strict IAP Safety Checklist (What NOT to give before 1 Year):' : '1 वर्ष से पहले पूर्णतः वर्जित चीजें (Strict Safety Rules):'}
        </strong>
        <ul style="padding-left:18px; font-size:0.8rem; color:#7f1d1d; margin-top:6px; line-height:1.5;">
          <li><strong>${lang === 'english' ? 'NO Added Sugar or Salt:' : 'नमक व चीनी बिल्कुल न दें:'}</strong> ${lang === 'english' ? "Protects developing infant kidneys and prevents early taste habituation." : "शिशु के गुर्दों (Kidneys) पर दबाव से बचाता है।"}</li>
          <li><strong>${lang === 'english' ? 'NO Honey before 1 Year:' : '1 वर्ष तक शहद बिल्कुल न दें:'}</strong> ${lang === 'english' ? "Severe risk of Infant Botulism (a life-threatening bacterial spore infection)." : "शिशु बोटुलिज़्म (Infant Botulism) नामक घातक संक्रमण का खतरा रहता है।"}</li>
          <li><strong>${lang === 'english' ? "NO Animal Cow's / Buffalo's Milk as primary drink:" : 'गाय या भैंस का दूध न पिलाएं:'}</strong> ${lang === 'english' ? "Causes intestinal micro-bleeding and iron deficiency anemia. Use only breastmilk/formula." : "आंतों में सूक्ष्म रक्तस्राव व खून की कमी (एनीमिया) करता है।"}</li>
          <li><strong>${lang === 'english' ? 'The 3-Day Rule:' : '3-दिन का नियम:'}</strong> ${lang === 'english' ? "Introduce only ONE new single ingredient at a time for 3 consecutive days to rule out food allergies." : "एलर्जी की पहचान हेतु एक बार में केवल एक नया भोजन 3 दिन तक दें।"}</li>
        </ul>
      </div>

    </div>
  `;
}

// 3. 18-MONTH TOILET TRAINING PROTOCOL GENERATOR
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

  const dontsHtml = tt.donts[listLang].map(d => `
    <li style="margin-bottom:4px;">${d}</li>
  `).join("");

  return `
    <div style="background: #f0fdf4; border: 2px solid #86efac; border-radius: 18px; padding: 18px; margin-top: 18px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
        <div>
          <span style="background:#dcfce7; color:#15803d; font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:12px; display:inline-block; margin-bottom:4px;">
            <i class="fa-solid fa-child-reaching"></i> 18 to 24 Months Developmental Milestone
          </span>
          <h5 style="color: #065f46; font-family:'Fredoka',cursive; font-size: 1.25rem; margin:0;">
            ${tt.title[listLang]}
          </h5>
        </div>
        <a href="${tt.ytLink}" target="_blank" rel="noopener noreferrer" style="background:#fee2e2; color:#b91c1c; font-size:0.75rem; font-weight:700; padding:5px 12px; border-radius:14px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; border:1px solid #fca5a5;">
          <i class="fa-brands fa-youtube" style="color:#dc2626; font-size:0.9rem;"></i> ${lang === 'english' ? 'Watch Toilet Training Guide' : 'टॉयलेट ट्रेनिंग वीडियो देखें'}
        </a>
      </div>

      <p style="font-size:0.84rem; color:#047857; margin-bottom:12px; line-height:1.45;">
        ${tt.intro[listLang]}
      </p>

      <!-- READINESS CHECKLIST -->
      <div style="background:#ffffff; border:1.5px solid #a7f3d0; border-radius:14px; padding:14px; margin-bottom:12px;">
        <strong style="color:#065f46; font-size:0.88rem; display:flex; align-items:center; gap:6px; margin-bottom:8px;">
          <i class="fa-solid fa-clipboard-check" style="color:#10b981;"></i> ${lang === 'english' ? "Toddler Readiness Checklist (Is Your 18-Month-Old Ready?):" : "क्या आपका 18 माह का बच्चा तैयार है? (Readiness Checklist):"}
        </strong>
        <ul style="list-style:none; padding:0; margin:0;">${readinessHtml}</ul>
      </div>

      <!-- 4-STEP PEDIATRIC PROTOCOL -->
      <div style="margin-bottom:12px;">
        <strong style="color:#065f46; font-size:0.88rem; display:block; margin-bottom:8px;">
          <i class="fa-solid fa-list-ol" style="color:#10b981;"></i> ${lang === 'english' ? "The 4-Step Pediatric Toilet Routine:" : "4-चरणीय वैज्ञानिक टॉयलेट रूटीन:"}
        </strong>
        ${stepsHtml}
      </div>

      <!-- WHAT NOT TO DO -->
      <div style="background:#fef2f2; border:1.5px solid #fca5a5; border-radius:12px; padding:12px 14px;">
        <strong style="color:#991b1b; font-size:0.84rem; display:flex; align-items:center; gap:6px;">
          <i class="fa-solid fa-triangle-exclamation"></i> ${lang === 'english' ? "Strict Rules for Parents (Preventing Stool Withholding & Fear):" : "अभिभावक क्या न करें (कब्ज व डर से बचाव):"}
        </strong>
        <ul style="padding-left:18px; font-size:0.8rem; color:#7f1d1d; margin-top:6px; line-height:1.5;">${dontsHtml}</ul>
      </div>
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

// 4. COLLAPSIBLE ADOLESCENT SECTION
function renderCollapsibleAdolescentSection() {
  const container = document.getElementById("faqAccordionContainer");
  if (!container || typeof adolescentFaqDatabase === "undefined") return;

  const langEl = document.getElementById("screenerLang");
  const lang = langEl ? langEl.value : "english";
  const listLang = (lang === "hindi") ? "hi" : "en";

  const girlsFaqs = adolescentFaqDatabase.filter(f => f.category === "girls");
  const boysFaqs = adolescentFaqDatabase.filter(f => f.category === "boys");

  const girlsHtml = girlsFaqs.map(faq => `
    <div class="faq-item">
      <button class="faq-question" type="button" onclick="toggleFaq(this)">
        <span><i class="${faq.icon}" style="color:${faq.color}; margin-right: 8px;"></i> ${faq.q[listLang]}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer" style="display: none;"><p>${faq.a[listLang]}</p></div>
    </div>
  `).join("");

  const boysHtml = boysFaqs.map(faq => `
    <div class="faq-item">
      <button class="faq-question" type="button" onclick="toggleFaq(this)">
        <span><i class="${faq.icon}" style="color:${faq.color}; margin-right: 8px;"></i> ${faq.q[listLang]}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer" style="display: none;"><p>${faq.a[listLang]}</p></div>
    </div>
  `).join("");

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 10px;">
      
      <!-- GIRLS CARD -->
      <div style="border: 2px solid #f472b6; border-radius: 20px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 15px rgba(244, 114, 182, 0.12);">
        <button type="button" onclick="toggleGenderBox('girlsContent', this)" style="width: 100%; background: #fdf2f8; border: none; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: left;">
          <div>
            <span style="font-family: 'Fredoka', cursive; font-size: 1.15rem; color: #be185d; display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-venus"></i> ${lang === "english" ? "Girls' Adolescent Health" : "किशोरियों का स्वास्थ्य एवं विकास"}
            </span>
            <small style="color: #9d174d; font-size: 0.8rem; font-weight: 600;">${lang === "english" ? "10 Questions on Menstruation, Hormones & Growth" : "माहवारी, हार्मोन व विकास पर 10 मुख्य प्रश्न"}</small>
          </div>
          <i class="fa-solid fa-circle-chevron-down" style="font-size: 1.4rem; color: #db2777; transition: transform 0.25s;"></i>
        </button>
        <div id="girlsContent" style="display: none; padding: 14px 12px; background: #fff;">
          <div class="faq-container">${girlsHtml}</div>
        </div>
      </div>

      <!-- BOYS CARD -->
      <div style="border: 2px solid #60a5fa; border-radius: 20px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 15px rgba(96, 165, 250, 0.12);">
        <button type="button" onclick="toggleGenderBox('boysContent', this)" style="width: 100%; background: #eff6ff; border: none; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: left;">
          <div>
            <span style="font-family: 'Fredoka', cursive; font-size: 1.15rem; color: #1d4ed8; display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-mars"></i> ${lang === "english" ? "Boys' Adolescent Health" : "किशोरों का स्वास्थ्य एवं विकास"}
            </span>
            <small style="color: #1e40af; font-size: 0.8rem; font-weight: 600;">${lang === "english" ? "10 Questions on Growth Spurts, Voice & Gym Safety" : "कद, आवाज में बदलाव व फिटनेस पर 10 प्रश्न"}</small>
          </div>
          <i class="fa-solid fa-circle-chevron-down" style="font-size: 1.4rem; color: #2563eb; transition: transform 0.25s;"></i>
        </button>
        <div id="boysContent" style="display: none; padding: 14px 12px; background: #fff;">
          <div class="faq-container">${boysHtml}</div>
        </div>
      </div>

    </div>
  `;
}

function toggleGenderBox(contentId, button) {
  const content = document.getElementById(contentId);
  const icon = button.querySelector('.fa-circle-chevron-down');
  if (!content) return;
  const isOpen = (content.style.display === "block");
  content.style.display = isOpen ? "none" : "block";
  if (icon) icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
}

function toggleFaq(button) {
  const item = button.closest('.faq-item');
  if (!item) return;
  const answer = item.querySelector('.faq-answer');
  const isActive = item.classList.contains('active');

  const parentBox = item.closest('.faq-container');
  if (parentBox) {
    parentBox.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      const a = el.querySelector('.faq-answer');
      if (a) a.style.display = 'none';
    });
  }

  if (!isActive && answer) {
    item.classList.add('active');
    answer.style.display = 'block';
  }
}

// 5. MODAL POPUP CONTROLLERS
function openBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function openBlogModal(articleKey) {
  if (typeof blogArticles === "undefined") return;
  const article = blogArticles[articleKey];
  const titleEl = document.getElementById('blogModalTitle');
  const contentEl = document.getElementById('blogModalContent');
  const modal = document.getElementById('blogModal');

  if (article && titleEl && contentEl && modal) {
    titleEl.innerHTML = '<i class="fa-solid fa-newspaper" style="color: var(--brand-secondary);"></i> ' + article.title;
    contentEl.innerHTML = article.content;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeBlogModal() {
  const modal = document.getElementById('blogModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function closeModalOnOverlay(event, modalId) {
  if (event.target && event.target.id === modalId) {
    if (modalId === 'bookingModal') closeBookingModal();
    if (modalId === 'blogModal') closeBlogModal();
    if (modalId === 'disclaimerModal') closeDisclaimerModal();
    if (modalId === 'privacyModal') closePrivacyModal();
  }
}

// 6. AUTO INITIALIZATION
document.addEventListener("DOMContentLoaded", function() {
  runScreener();
  renderCollapsibleAdolescentSection();
});
