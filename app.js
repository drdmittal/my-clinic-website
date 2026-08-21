// ==========================================================
// CLINIC APPLICATION ENGINE (app.js)
// Advanced Auxology: IAP BMI-for-Age (Obesity / Overweight / 
// Underweight), Growth Percentiles & Mid-Parental Target Screener
// ==========================================================

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

  // Dynamic UI Form Labels
  const lblTitle = document.getElementById("lblTitle");
  const lblSubtitle = document.getElementById("lblSubtitle");
  const lblLang = document.getElementById("lblLang");
  const lblAge = document.getElementById("lblAge");
  const lblGender = document.getElementById("lblGender");
  const lblWeight = document.getElementById("lblWeight");
  const lblHeight = document.getElementById("lblHeight");
  const lblFather = document.getElementById("lblFather");
  const lblMother = document.getElementById("lblMother");

  const isBaby = (ageKey === "0m" || ageKey === "3m" || ageKey === "6m" || ageKey === "9m" || ageKey === "12m" || ageKey === "18m");

  if (lang === "english") {
    if (lblTitle) lblTitle.innerText = "Check Your Child's Growth & Development";
    if (lblSubtitle) lblSubtitle.innerText = "IAP BMI-for-Age (Obesity Screen), Tanner Staging, Genetic Target Height & Milestones.";
    if (lblLang) lblLang.innerText = "Select Language";
    if (lblAge) lblAge.innerText = "Child's Age";
    if (lblGender) lblGender.innerText = "Child's Gender";
    if (lblWeight) lblWeight.innerText = "Current Weight (kg)";
    if (lblHeight) lblHeight.innerText = isBaby ? "Length (cm)" : "Height (cm)";
    if (lblFather) lblFather.innerText = "Father's Height";
    if (lblMother) lblMother.innerText = "Mother's Height";
  } else {
    if (lblTitle) lblTitle.innerText = "बच्चे की वृद्धि और विकास की जांच (Check Child's Growth & Development)";
    if (lblSubtitle) lblSubtitle.innerText = "IAP बीएमआई चार्ट (मोटापा जांच), टैनर स्टेजिंग, जेनेटिक हाइट फॉर्मूला एवं विकासात्मक स्केल।";
    if (lblLang) lblLang.innerText = "भाषा चुनें (Language)";
    if (lblAge) lblAge.innerText = "बच्चे की उम्र (Age)";
    if (lblGender) lblGender.innerText = "लिंग (Gender)";
    if (lblWeight) lblWeight.innerText = "वर्तमान वजन (kg)";
    if (lblHeight) lblHeight.innerText = isBaby ? "वर्तमान लंबाई (cm)" : "वर्तमान कद (cm)";
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

  // -------------------------------------------------------------
  // 1. Weight Evaluation
  // -------------------------------------------------------------
  if (!isNaN(wInput) && ref) {
    if (wInput < ref.minW) {
      wStatus = lang === "english" 
        ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Weight (${wInput} kg): Below 3rd percentile.</strong> Standard IAP range: ${ref.minW} – ${ref.maxW} kg. Consult Dr. Dinesh Mittal for nutritional review.</div></div>`
        : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>वजन (${wInput} kg): 3वें परसेंटाइल से कम (Underweight)।</strong> मानक IAP सीमा: ${ref.minW} – ${ref.maxW} kg। पोषण समीक्षा आवश्यक है।</div></div>`;
    } else if (wInput > ref.maxW) {
      wStatus = lang === "english"
        ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Weight (${wInput} kg): Above 97th percentile.</strong> Exceeds typical population range (${ref.minW} – ${ref.maxW} kg). Diet & activity review advised.</div></div>`
        : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>वजन (${wInput} kg): 97वें परसेंटाइल से अधिक।</strong> मानक IAP सीमा (${ref.minW} – ${ref.maxW} kg) से अधिक है।</div></div>`;
    } else {
      wStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Weight (${wInput} kg): Normal & Healthy.</strong> Aligned with standard IAP population range (${ref.minW} – ${ref.maxW} kg).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>वजन (${wInput} kg): बिल्कुल सामान्य एवं स्वस्थ।</strong> IAP मानक सीमा (${ref.minW} – ${ref.maxW} kg) के अनुसार उत्तम है।</div></div>`;
    }
  }

  // -------------------------------------------------------------
  // 2. Auxological Height Z-Score & Mid-Parental Discrepancy
  // -------------------------------------------------------------
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

  // Mid-Parental Height (Tanner Formula)
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
      } else if (zDiff >= 1.4) {
        hasHeightDiscrepancy = true;
        discrepancySeverity = "moderate";
      }
    }
  }

  // Absolute Population Height Status
  if (!isNaN(hInput) && ref) {
    if (hInput < ref.minH) {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>Length/Height (${hInput} cm): Below 3rd percentile (Short Stature).</strong> Below population norm (${ref.minH} – ${ref.maxH} cm). Growth velocity evaluation advised.</div></div>`
        : `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>लंबाई / कद (${hInput} cm): 3वें परसेंटाइल से कम (Short Stature)।</strong> मानक IAP सीमा (${ref.minH} – ${ref.maxH} cm) से कम है। चिकित्सीय जांच आवश्यक है।</div></div>`;
    } else if (hasHeightDiscrepancy && discrepancySeverity === "severe") {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-red"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Height (${hInput} cm): Genetic Target Discrepancy Alert!</strong> Child tracks >2 Standard Deviations below parental genetic potential. Pediatric evaluation advised.</div></div>`
        : `<div class="flag-card flag-red"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>लंबाई (${hInput} cm): जेनेटिक क्षमता से गंभीर अंतर (Discrepancy Alert)!</strong> माता-पिता की अनुवांशिक लंबाई के अनुपात में काफी कम है (>2 SD अंतर)।</div></div>`;
    } else if (hasHeightDiscrepancy && discrepancySeverity === "moderate") {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Height (${hInput} cm): Trailing Relative to Parental Target.</strong> Tracks below mid-parental genetic centile channel (~1.5 SD difference).</div></div>`
        : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>लंबाई (${hInput} cm): जेनेटिक लक्ष्य से धीमी गति।</strong> बच्चे का कद माता-पिता की संभावित जेनेटिक क्षमता से कम गति से बढ़ रहा है।</div></div>`;
    } else if (hInput > ref.maxH) {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Length/Height (${hInput} cm): Above Average (>97th percentile).</strong> Robust linear growth above population average (${ref.minH} – ${ref.maxH} cm).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>लंबाई / कद (${hInput} cm): औसत से अधिक (>97वां परसेंटाइल)।</strong> उत्तम विकास।</div></div>`;
    } else {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Length/Height (${hInput} cm): Normal & Harmonious.</strong> Tracking well within expected population and genetic target parameters (${ref.minH} – ${ref.maxH} cm).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>लंबाई / कद (${hInput} cm): आदर्श विकास क्रम।</strong> IAP ग्रोथ चार्ट व आनुवंशिक लक्ष्य के अनुरूप है।</div></div>`;
    }
  }

  // -------------------------------------------------------------
  // 3. IAP BMI-FOR-AGE EVALUATION (Ages 2 to 18 Years)
  // -------------------------------------------------------------
  if (!isNaN(wInput) && !isNaN(hInput) && ref && ref.minBmi) {
    const heightInMeters = hInput / 100;
    const calcBmi = (wInput / (heightInMeters * heightInMeters)).toFixed(1);

    if (calcBmi < ref.minBmi) {
      // Underweight / Wasting (< 3rd percentile)
      bmiStatus = lang === "english"
        ? `<div class="flag-card flag-red" style="background:#fff1f2; border-color:#fecdd3; color:#9f1239;"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Underweight / Thinness (<3rd Percentile).</strong> Below healthy IAP range (Normal: ${ref.minBmi} – ${ref.ovBmi}). Comprehensive dietary & calorie-density plan advised by Dr. Dinesh Mittal.</div></div>`
        : `<div class="flag-card flag-red" style="background:#fff1f2; border-color:#fecdd3; color:#9f1239;"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): कम वजन / कुपोषण (<3वां परसेंटाइल)।</strong> सामान्य IAP सीमा: ${ref.minBmi} – ${ref.ovBmi} kg/m²। पोषण सुधार हेतु क्लिनिक परामर्श लें।</div></div>`;
    } else if (calcBmi >= ref.obBmi) {
      // Obese (>= 27th adult equivalent / > 95th percentile)
      bmiStatus = lang === "english"
        ? `<div class="flag-card flag-red" style="background:#fef2f2; border-color:#f87171; color:#991b1b;"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Childhood Obesity (≥95th Percentile / IAP 27-Equivalent).</strong> Elevated metabolic risk (insulin resistance, fatty liver, hypertension). Structured lifestyle, zero-sugar, and pediatric endocrine guidance recommended.</div></div>`
        : `<div class="flag-card flag-red" style="background:#fef2f2; border-color:#f87171; color:#991b1b;"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): बाल मोटापा - Childhood Obesity (≥95वां परसेंटाइल)।</strong> उच्च मेटाबॉलिक जोखिम (इंसुलिन रेजिस्टेंस, फैटी लिवर)। तत्काल जीवनशैली सुधार व डॉक्टर से परामर्श लें।</div></div>`;
    } else if (calcBmi >= ref.ovBmi) {
      // Overweight (>= 23rd adult equivalent / > 75th percentile)
      bmiStatus = lang === "english"
        ? `<div class="flag-card flag-yellow" style="background:#fffbeb; border-color:#fde047; color:#854d0e;"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>BMI (${calcBmi} kg/m²): Overweight (≥75th Percentile / IAP 23-Equivalent).</strong> Exceeds normal threshold (${ref.ovBmi} kg/m²). Limit processed snacks/sugars and ensure 60 mins active sports daily.</div></div>`
        : `<div class="flag-card flag-yellow" style="background:#fffbeb; border-color:#fde047; color:#854d0e;"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): अधिक वजन - Overweight (≥75वां परसेंटाइल)।</strong> सामान्य सीमा (${ref.minBmi} – ${ref.ovBmi}) से अधिक है। जंक फूड बंद करें व रोज 1 घंटा खेलकूद सुनिश्चित करें।</div></div>`;
    } else {
      // Normal BMI
      bmiStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-heart-pulse"></i> <div><strong>BMI (${calcBmi} kg/m²): Ideal & Healthy Weight.</strong> Perfectly tracking in healthy IAP percentile channels (${ref.minBmi} – ${ref.ovBmi} kg/m²).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-heart-pulse"></i> <div><strong>बीएमआई (${calcBmi} kg/m²): आदर्श एवं स्वस्थ वजन।</strong> IAP मानक अनुसार बिल्कुल सही सीमा (${ref.minBmi} – ${ref.ovBmi} kg/m²) में है।</div></div>`;
    }
  }

  // -------------------------------------------------------------
  // 4. Mid-Parental Height Output Box
  // -------------------------------------------------------------
  let mphHtml = "";
  if (!isNaN(targetHeight)) {
    const minTarget = (targetHeight - 6).toFixed(1);
    const maxTarget = (targetHeight + 6).toFixed(1);
    const midTarget = targetHeight.toFixed(1);

    let targetAnalysisText = "";
    if (!isNaN(hInput) && ref) {
      if (discrepancySeverity === "severe") {
        targetAnalysisText = lang === "english"
          ? `<span style="color: #b91c1c; font-weight:700; display:block; margin-top:6px;">⚠️ Clinical Note: Parents are tall/high-percentile, but the child is tracking on lower percentiles. Evaluation for nutritional, celiac, thyroid, or growth-hormone factors advised.</span>`
          : `<span style="color: #b91c1c; font-weight:700; display:block; margin-top:6px;">⚠️ चिकित्सीय संकेत: माता-पिता का कद ऊंचा है, परन्तु बच्चा निचले परसेंटाइल पर चल रहा है। विस्तृत चिकित्सीय जांच आवश्यक है।</span>`;
      } else if (discrepancySeverity === "moderate") {
        targetAnalysisText = lang === "english"
          ? `<span style="color: #b45309; font-weight:600; display:block; margin-top:6px;">🟡 Clinical Note: Child tracks slightly below genetic target. Chart growth velocity every 3-6 months.</span>`
          : `<span style="color: #b45309; font-weight:600; display:block; margin-top:6px;">🟡 चिकित्सीय संकेत: बच्चा जेनेटिक लक्ष्य से थोड़ा धीमा है। हर 3 से 6 महीने में विकास दर मापें।</span>`;
      } else {
        targetAnalysisText = lang === "english"
          ? `<span style="color: #15803d; font-weight:600; display:block; margin-top:6px;">✔ Child's linear trajectory is well-harmonized with parental genetic target height.</span>`
          : `<span style="color: #15803d; font-weight:600; display:block; margin-top:6px;">✔ बच्चे का विकास क्रम माता-पिता की आनुवंशिक कद-काठी के पूर्णतः अनुकूल है।</span>`;
      }
    }

    if (lang === "english") {
      mphHtml = `
        <div style="background: ${hasHeightDiscrepancy ? '#fef2f2' : '#f0fdfa'}; border: 1.5px solid ${hasHeightDiscrepancy ? '#fca5a5' : '#99f6e4'}; border-radius: 14px; padding: 14px; margin-top: 12px;">
          <div style="font-weight: 700; color: ${hasHeightDiscrepancy ? '#991b1b' : '#0f766e'}; font-size: 0.9rem; margin-bottom: 4px;">
            <i class="fa-solid fa-dna"></i> Mid-Parental Target Adult Height (Tanner-IAP Formula)
          </div>
          <div style="font-size: 0.86rem; color: #334155; line-height: 1.5;">
            • Projected Adult Genetic Target: <strong>${midTarget} cm</strong><br>
            • Target Genetic Range (±6 cm / ±1.88 SD): <strong>${minTarget} cm – ${maxTarget} cm</strong>
            ${targetAnalysisText}
          </div>
        </div>
      `;
    } else {
      mphHtml = `
        <div style="background: ${hasHeightDiscrepancy ? '#fef2f2' : '#f0fdfa'}; border: 1.5px solid ${hasHeightDiscrepancy ? '#fca5a5' : '#99f6e4'}; border-radius: 14px; padding: 14px; margin-top: 12px;">
          <div style="font-weight: 700; color: ${hasHeightDiscrepancy ? '#991b1b' : '#0f766e'}; font-size: 0.9rem; margin-bottom: 4px;">
            <i class="fa-solid fa-dna"></i> आनुवंशिक संभावित वयस्क लंबाई (Tanner Formula)
          </div>
          <div style="font-size: 0.86rem; color: #334155; line-height: 1.5;">
            • संभावित वयस्क लक्ष्य लंबाई: <strong>${midTarget} cm</strong><br>
            • आनुवंशिक सीमा (±6 cm): <strong>${minTarget} cm – ${maxTarget} cm</strong>
            ${targetAnalysisText}
          </div>
        </div>
      `;
    }
  }

  const genderTitle = (gender === "boy") ? (lang === "english" ? "BOY" : "बालक") : (lang === "english" ? "GIRL" : "बालिका");
  const emptyWText = lang === "english" ? "Enter weight above for instant percentile assessment." : "त्वरित मूल्यांकन हेतु ऊपर वजन दर्ज करें।";
  const emptyHText = lang === "english" ? "Enter height/length above for instant percentile assessment." : "त्वरित मूल्यांकन हेतु ऊपर लंबाई दर्ज करें।";

  growthHtml = `
    <div class="result-box">
      <h4><i class="fa-solid fa-ruler-combined" style="color: var(--brand-primary);"></i> ${lang === "english" ? "IAP Growth & BMI Assessment" : "IAP ग्रोथ एवं बीएमआई मूल्यांकन"}</h4>
      <span class="iap-ref-badge">IAP Standard (${ageName} - ${genderTitle})</span>
      <p style="font-size:0.84rem; color:#64748b; margin-bottom:10px;">
        ${lang === "english" ? "Population 3rd–97th Range:" : "सामान्य स्वस्थ सीमा:"} 
        ${lang === "english" ? "Weight:" : "वजन:"} <strong>${ref ? ref.minW : "" }–${ref ? ref.maxW : "" } kg</strong> | 
        ${lang === "english" ? "Length/Height:" : "लंबाई/कद:"} <strong>${ref ? ref.minH : "" }–${ref ? ref.maxH : "" } cm</strong>
      </p>
      ${wStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${emptyWText}</p>`}
      ${hStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${emptyHText}</p>`}
      ${bmiStatus}
      ${mphHtml}
    </div>
  `;

  // -------------------------------------------------------------
  // 5. Milestones & Tanner Pubertal Staging
  // -------------------------------------------------------------
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
          <i class="fa-solid fa-person-arrow-up-from-line"></i> ${lang === "english" ? "Tanner Pubertal Staging & Development" : "टैनर प्यूबर्टल स्टेजिंग एवं किशोरावस्था विकास"} (${genderTitle})
        </div>
        <div style="font-size: 0.84rem; color: #701a75; line-height: 1.45; margin-bottom: 8px;">
          <strong>Stage:</strong> ${tInfo.stage}
        </div>
        <div class="flag-card flag-green" style="margin-bottom: 6px; padding: 8px 10px; font-size: 0.82rem;">
          <i class="fa-solid fa-circle-check"></i>
          <div><strong>🟢 Normal Timeline:</strong> ${tInfo.green}</div>
        </div>
        <div class="flag-card flag-yellow" style="margin-bottom: 6px; padding: 8px 10px; font-size: 0.82rem;">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <div><strong>🟡 Watch / Monitor:</strong> ${tInfo.yellow}</div>
        </div>
        <div class="flag-card flag-red" style="margin-bottom: 0; padding: 8px 10px; font-size: 0.82rem;">
          <i class="fa-solid fa-circle-exclamation"></i>
          <div><strong>🔴 Alert Flag:</strong> ${tInfo.red}</div>
        </div>
      </div>
    `;
  }

  const devHtml = `
    <div class="result-box">
      <h4><i class="fa-solid fa-brain" style="color: #0891b2;"></i> ${lang === "english" ? "Developmental Milestones & Screening" : "विकासात्मक मील के पत्थर एवं जांच"}</h4>
      <div class="flag-card flag-green">
        <i class="fa-solid fa-circle-check"></i>
        <div>
          <strong>🟢 ${lang === "english" ? "Green Flags (Expected Milestones):" : "सामान्य मील के पत्थर (Green Flags):"}</strong>
          <ul style="margin-top:4px; padding-left:16px;">${greenList}</ul>
        </div>
      </div>
      <div class="flag-card flag-yellow">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <div>
          <strong>🟡 ${lang === "english" ? "Yellow Flags (Monitor Closely):" : "निगरानी योग्य संकेत (Yellow Flags):"}</strong>
          <ul style="margin-top:4px; padding-left:16px;">${yellowList}</ul>
        </div>
      </div>
      <div class="flag-card flag-red">
        <i class="fa-solid fa-circle-exclamation"></i>
        <div>
          <strong>🔴 ${lang === "english" ? "Red Flags (Pediatric Review Advised):" : "सतर्कता संकेत - तुरंत डॉक्टर को दिखाएं (Red Flags):"}</strong>
          <ul style="margin-top:4px; padding-left:16px;">${redList}</ul>
        </div>
      </div>
      ${tannerHtml}
    </div>
  `;

  let weaningBox = "";
  if (ageKey === "6m") {
    if (lang === "english") {
      weaningBox = `
        <div class="feeding-protocol-box">
          <h5><i class="fa-solid fa-bowl-food"></i> Detailed 6-Month Weaning & Feeding Protocol</h5>
          <ul>
            <li><strong>How to Start:</strong> Start with 1-2 teaspoons once daily. Gradually increase to 2 small meals per day.</li>
            <li><strong>Ideal Starter Foods:</strong> Well-cooked yellow moong dal khichdi, sooji kheer, mashed banana, boiled apple puree, steamed carrot.</li>
            <li><strong>The 3-Day Rule:</strong> Introduce only ONE new food at a time for 3 days to monitor allergies.</li>
            <li><strong>Foods Strictly Avoided:</strong> NO cow's milk, honey, added salt, or sugar before 1 year.</li>
          </ul>
        </div>
      `;
    } else {
      weaningBox = `
        <div class="feeding-protocol-box">
          <h5><i class="fa-solid fa-bowl-food"></i> 6 माह पर ऊपरी आहार (Weaning) की संपूर्ण विधि</h5>
          <ul>
            <li><strong>शुरुआत कैसे करें:</strong> दिन में एक बार 1-2 चम्मच से शुरुआत करें। धीरे-धीरे मात्रा बढ़ाकर दिन में 2 बार करें।</li>
            <li><strong>सर्वोत्तम प्रारंभिक आहार:</strong> मूंग दाल की पतली खिचड़ी, सूजी की खीर, मसला केला, उबला व मसला हुआ सेब (Apple Puree)।</li>
            <li><strong>3-दिन का नियम:</strong> एक समय में केवल एक नया भोजन 3 दिन तक दें ताकि एलर्जी की पहचान हो सके।</li>
            <li><strong>पूर्णतः वर्जित चीजें:</strong> 1 वर्ष तक गाय/भैंस का दूध, शहद, नमक एवं अतिरिक्त चीनी बिल्कुल न दें।</li>
          </ul>
        </div>
      `;
    }
  }

  const tips = data.parentTips || { nutrition: {}, safety: {}, play: {}, care: {} };
  const tipsHtml = `
    <div class="result-box" style="grid-column: 1 / -1; background: #faf5ff; border: 1.5px solid #e9d5ff;">
      <h4 style="color: #6b21a8;"><i class="fa-solid fa-heart-pulse"></i> ${ageName} ${lang === "english" ? "Parenting & Care Guide" : "अभिभावक देखभाल मार्गदर्शन (Parenting Guide)"}</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: 12px;">
        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#7e22ce; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-apple-whole"></i> ${lang === "english" ? "Nutrition & Diet Requirements:" : "खुराक एवं पोषण (Nutrition):"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.nutrition[listLang] || ""}</p>
        </div>
        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#b91c1c; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-shield-halved"></i> ${lang === "english" ? "Child Safety & Accident Prevention:" : "सुरक्षा एवं दुर्घटना से बचाव (Safety):"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.safety[listLang] || ""}</p>
        </div>
        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#0369a1; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-puzzle-piece"></i> ${lang === "english" ? "Play, Brain & Cognitive Stimulation:" : "खेल, संवाद एवं मानसिक विकास:"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.play[listLang] || ""}</p>
        </div>
        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#15803d; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-stethoscope"></i> ${lang === "english" ? "Vaccine & Doctor Care Tip:" : "टीकाकरण एवं चिकित्सकीय सलाह:"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.care[listLang] || ""}</p>
        </div>
      </div>
      ${weaningBox}
      <div style="text-align:center; margin-top:18px;">
        <button onclick="openBookingModal()" class="hero-cta-btn" style="padding: 10px 24px; font-size: 0.9rem; background:#0891b2; box-shadow: 0 4px 14px rgba(8, 145, 178, 0.35);">
          <i class="fa-solid fa-calendar-check"></i> ${lang === "english" ? "Book Growth & BMI Consultation with Dr. Dinesh Mittal" : "डॉ. दिनेश मित्तल से विकास एवं बीएमआई परामर्श बुक करें"}
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

// 2. COLLAPSIBLE GENDER CARDS FOR ADOLESCENT HEALTH
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
      <div class="faq-answer" style="display: none;">
        <p>${faq.a[listLang]}</p>
      </div>
    </div>
  `).join("");

  const boysHtml = boysFaqs.map(faq => `
    <div class="faq-item">
      <button class="faq-question" type="button" onclick="toggleFaq(this)">
        <span><i class="${faq.icon}" style="color:${faq.color}; margin-right: 8px;"></i> ${faq.q[listLang]}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer" style="display: none;">
        <p>${faq.a[listLang]}</p>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 10px;">
      
      <!-- GIRLS COLLAPSIBLE CARD -->
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

      <!-- BOYS COLLAPSIBLE CARD -->
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

// TOGGLE MAIN GENDER CARD (GIRL / BOY)
function toggleGenderBox(contentId, button) {
  const content = document.getElementById(contentId);
  const icon = button.querySelector('.fa-circle-chevron-down');
  if (!content) return;

  const isOpen = content.style.display === "block";
  content.style.display = isOpen ? "none" : "block";

  if (icon) {
    icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
  }
}

// 3. FAQ ACCORDION INTERACTION (INSIDE CARDS)
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

// 4. MODAL POPUP CONTROLLERS
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
  }
}

// 5. AUTO-INITIALIZATION ON PAGE LOAD
document.addEventListener("DOMContentLoaded", function() {
  runScreener();
  renderCollapsibleAdolescentSection();
});
