// ==========================================================
// CLINIC APPLICATION ENGINE (app.js)
// Handles: Growth Screener, Tanner Puberty, FAQs & Popups
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

  const isBaby = (ageKey === "0m" || ageKey === "3m" || ageKey === "6m" || ageKey === "9m" || ageKey === "12m");

  if (lang === "english") {
    if (lblTitle) lblTitle.innerText = "Child Growth, Tanner Puberty & Development Screener";
    if (lblSubtitle) lblSubtitle.innerText = "IAP Growth Charts, Tanner Pubertal Staging, Genetic Height Formula & Developmental Milestones.";
    if (lblLang) lblLang.innerText = "Select Language";
    if (lblAge) lblAge.innerText = "Child's Age";
    if (lblGender) lblGender.innerText = "Child's Gender";
    if (lblWeight) lblWeight.innerText = "Current Weight (kg)";
    if (lblHeight) lblHeight.innerText = isBaby ? "Length (cm)" : "Height (cm)";
    if (lblFather) lblFather.innerText = "Father's Height";
    if (lblMother) lblMother.innerText = "Mother's Height";
  } else {
    if (lblTitle) lblTitle.innerText = "शिशु विकास, टैनर किशोरावस्था एवं मील के पत्थर (Screener)";
    if (lblSubtitle) lblSubtitle.innerText = "IAP ग्रोथ चार्ट, टैनर प्यूबर्टल स्टेजिंग, जेनेटिक हाइट फॉर्मूला एवं विकासात्मक स्केल आधारित।";
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

  // Weight Evaluation
  if (!isNaN(wInput) && ref) {
    if (wInput < ref.minW) {
      wStatus = lang === "english" 
        ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Weight (${wInput} kg): Below 3rd percentile.</strong> Standard IAP healthy range: ${ref.minW} – ${ref.maxW} kg. Consult Dr. Dinesh Mittal for dietary review.</div></div>`
        : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>वजन (${wInput} kg): मानक सीमा से कम (Underweight)।</strong> सामान्य IAP सीमा: ${ref.minW} – ${ref.maxW} kg। पोषण समीक्षा हेतु डॉ. दिनेश मित्तल से परामर्श लें।</div></div>`;
    } else if (wInput > ref.maxW) {
      wStatus = lang === "english"
        ? `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>Weight (${wInput} kg): Above 97th percentile.</strong> Exceeds typical IAP range (${ref.minW} – ${ref.maxW} kg). Balance nutrition and physical activity.</div></div>`
        : `<div class="flag-card flag-yellow"><i class="fa-solid fa-triangle-exclamation"></i> <div><strong>वजन (${wInput} kg): 97वें परसेंटाइल से अधिक।</strong> सामान्य IAP सीमा (${ref.minW} – ${ref.maxW} kg) से अधिक है। पोषण व शारीरिक गतिविधि संतुलित करें।</div></div>`;
    } else {
      wStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Weight (${wInput} kg): Normal & Healthy.</strong> Well aligned with standard IAP range (${ref.minW} – ${ref.maxW} kg).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>वजन (${wInput} kg): बिल्कुल सामान्य एवं स्वस्थ।</strong> IAP मानक सीमा (${ref.minW} – ${ref.maxW} kg) के अनुसार उत्तम है।</div></div>`;
    }
  }

  // Height Evaluation
  if (!isNaN(hInput) && ref) {
    if (hInput < ref.minH) {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>Length/Height (${hInput} cm): Below 3rd percentile.</strong> Below expected IAP range (${ref.minH} – ${ref.maxH} cm). Linear growth evaluation advised.</div></div>`
        : `<div class="flag-card flag-red"><i class="fa-solid fa-circle-exclamation"></i> <div><strong>लंबाई / कद (${hInput} cm): 3वें परसेंटाइल से कम।</strong> मानक IAP सीमा (${ref.minH} – ${ref.maxH} cm) से कम है। चिकित्सीय जांच अनुशंसित है।</div></div>`;
    } else if (hInput > ref.maxH) {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Length/Height (${hInput} cm): Above Average.</strong> Exceeds typical 97th percentile range (${ref.minH} – ${ref.maxH} cm).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>लंबाई / कद (${hInput} cm): औसत से अधिक (उत्तम वृद्धि)।</strong> IAP मानक सीमा (${ref.minH} – ${ref.maxH} cm) से बेहतर है।</div></div>`;
    } else {
      hStatus = lang === "english"
        ? `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>Length/Height (${hInput} cm): Ideal Growth Track.</strong> Perfectly tracking on IAP growth charts (${ref.minH} – ${ref.maxH} cm).</div></div>`
        : `<div class="flag-card flag-green"><i class="fa-solid fa-circle-check"></i> <div><strong>लंबाई / कद (${hInput} cm): आदर्श विकास क्रम।</strong> IAP ग्रोथ चार्ट (${ref.minH} – ${ref.maxH} cm) के अनुसार सही है।</div></div>`;
    }
  }

  // Mid-Parental Height (MPH) Formula
  let mphHtml = "";
  if (!isNaN(fHeight) && !isNaN(mHeight)) {
    const targetHeight = (gender === "boy") ? (fHeight + mHeight + 13) / 2 : (fHeight + mHeight - 13) / 2;
    const minTarget = (targetHeight - 6).toFixed(1);
    const maxTarget = (targetHeight + 6).toFixed(1);
    const midTarget = targetHeight.toFixed(1);

    if (lang === "english") {
      mphHtml = `
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 14px; margin-top: 12px;">
          <div style="font-weight: 700; color: #1e40af; font-size: 0.9rem; margin-bottom: 6px;">
            <i class="fa-solid fa-dna"></i> Genetic Mid-Parental Target Adult Height (Tanner Formula)
          </div>
          <div style="font-size: 0.86rem; color: #1e3a8a; line-height: 1.5;">
            • Projected Adult Target Height: <strong>${midTarget} cm</strong><br>
            • Target Genetic Range (±6 cm): <strong>${minTarget} cm – ${maxTarget} cm</strong><br>
            <span style="font-size: 0.8rem; color: #3b82f6; display: inline-block; margin-top: 4px;">
              ${(!isNaN(hInput) && ref && hInput < ref.minH) ? "⚠️ Current height is trailing relative to parental genetic potential. Clinic checkup recommended." : "✔ Current growth trajectory aligns well with parental genetic potential."}
            </span>
          </div>
        </div>
      `;
    } else {
      mphHtml = `
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 14px; margin-top: 12px;">
          <div style="font-weight: 700; color: #1e40af; font-size: 0.9rem; margin-bottom: 6px;">
            <i class="fa-solid fa-dna"></i> आनुवंशिक संभावित वयस्क लंबाई (Tanner Formula)
          </div>
          <div style="font-size: 0.86rem; color: #1e3a8a; line-height: 1.5;">
            • संभावित वयस्क लक्ष्य लंबाई: <strong>${midTarget} cm</strong><br>
            • आनुवंशिक सीमा (±6 cm): <strong>${minTarget} cm – ${maxTarget} cm</strong><br>
            <span style="font-size: 0.8rem; color: #3b82f6; display: inline-block; margin-top: 4px;">
              ${(!isNaN(hInput) && ref && hInput < ref.minH) ? "⚠️ बच्चे की वर्तमान लंबाई माता-पिता की आनुवंशिक क्षमता से कम चल रही है। क्लिनिक परामर्श लें।" : "✔ वर्तमान विकास गति माता-पिता की आनुवंशिक कद-काठी के अनुरूप है।"}
            </span>
          </div>
        </div>
      `;
    }
  }

  const genderTitle = (gender === "boy") ? (lang === "english" ? "BOY" : "बालक") : (lang === "english" ? "GIRL" : "बालिका");
  const emptyWText = lang === "english" ? "Enter current weight above for instant assessment." : "त्वरित मूल्यांकन हेतु ऊपर वजन दर्ज करें।";
  const emptyHText = lang === "english" ? "Enter current height/length above for instant assessment." : "त्वरित मूल्यांकन हेतु ऊपर लंबाई दर्ज करें।";

  growthHtml = `
    <div class="result-box">
      <h4><i class="fa-solid fa-ruler-combined" style="color: var(--brand-primary);"></i> ${lang === "english" ? "IAP Growth & Target Height Assessment" : "IAP ग्रोथ एवं संभावित कद मूल्यांकन"}</h4>
      <span class="iap-ref-badge">IAP Standard (${ageName} - ${genderTitle})</span>
      <p style="font-size:0.84rem; color:#64748b; margin-bottom:10px;">
        ${lang === "english" ? "Standard Healthy Range:" : "सामान्य स्वस्थ सीमा:"} 
        ${lang === "english" ? "Weight:" : "वजन:"} <strong>${ref ? ref.minW : "" }–${ref ? ref.maxW : "" } kg</strong> | 
        ${lang === "english" ? "Length/Height:" : "लंबाई/कद:"} <strong>${ref ? ref.minH : "" }–${ref ? ref.maxH : "" } cm</strong>
      </p>
      ${wStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${emptyWText}</p>`}
      ${hStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${emptyHText}</p>`}
      ${mphHtml}
    </div>
  `;

  // Milestones List
  const listLang = lang === "english" ? "en" : "hi";
  const greenList = (data.green && data.green[listLang]) ? data.green[listLang].map(item => `<li>${item}</li>`).join("") : "";
  const yellowList = (data.yellow && data.yellow[listLang]) ? data.yellow[listLang].map(item => `<li>${item}</li>`).join("") : "";
  const redList = (data.red && data.red[listLang]) ? data.red[listLang].map(item => `<li>${item}</li>`).join("") : "";

  // Tanner Puberty Section (8y to 18y)
  let tannerHtml = "";
  if (data.tanner && data.tanner[gender]) {
    const tInfo = data.tanner[gender];
    tannerHtml = `
      <div style="background: #fdf4ff; border: 1.5px solid #f0abfc; border-radius: 12px; padding: 14px; margin-top: 14px;">
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
      <h4><i class="fa-solid fa-brain" style="color: #0284c7;"></i> ${lang === "english" ? "Developmental Milestones & Screening" : "विकासात्मक मील के पत्थर एवं जांच"}</h4>
      
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

  // Weaning Card at 6 Months
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

  // Parenting Tips Box
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
        <button onclick="openBookingModal()" class="hero-cta-btn" style="padding: 10px 24px; font-size: 0.9rem; background:#0284c7; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);">
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

  renderAdolescentFaqs();
}

// 2. ADOLESCENT FAQS ACCORDION RENDERER
function renderAdolescentFaqs() {
  const container = document.getElementById("faqAccordionContainer");
  if (!container || typeof adolescentFaqDatabase === "undefined") return;

  const langEl = document.getElementById("screenerLang");
  const lang = langEl ? langEl.value : "english";
  const listLang = (lang === "hindi") ? "hi" : "en";

  let html = "";
  adolescentFaqDatabase.forEach((faq) => {
    html += `
      <div class="faq-item faq-all faq-${faq.category}" style="display: block;">
        <button class="faq-question" type="button" onclick="toggleFaq(this)">
          <span><i class="${faq.icon}" style="color:${faq.color}; margin-right: 8px;"></i> ${faq.q[listLang]}</span>
          <i class="fa-solid fa-chevron-down faq-icon"></i>
        </button>
        <div class="faq-answer" style="display: none;">
          <p>${faq.a[listLang]}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 3. FAQ ACCORDION INTERACTION
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  if (!item) return;
  const answer = item.querySelector('.faq-answer');
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('active');
    const a = el.querySelector('.faq-answer');
    if (a) a.style.display = 'none';
  });

  if (!isActive && answer) {
    item.classList.add('active');
    answer.style.display = 'block';
  }
}

function filterFaq(category) {
  document.querySelectorAll('.faq-filter-btn').forEach(b => b.classList.remove('active-filter'));
  const targetBtn = document.getElementById('btn-' + category);
  if (targetBtn) targetBtn.classList.add('active-filter');

  document.querySelectorAll('.faq-item').forEach(item => {
    if (category === 'all' || item.classList.contains('faq-' + category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
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
  renderAdolescentFaqs();
});
