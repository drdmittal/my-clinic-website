// ==========================================
// 1. SCREENER CALCULATION & RENDERING
// ==========================================
function runScreener() {
  const lang = document.getElementById("screenerLang").value;
  const ageKey = document.getElementById("screenerAge").value;
  const gender = document.getElementById("screenerGender").value;
  const wInput = parseFloat(document.getElementById("screenerWeight").value);
  const hInput = parseFloat(document.getElementById("screenerHeight").value);
  const fHeight = parseFloat(document.getElementById("fatherHeight").value);
  const mHeight = parseFloat(document.getElementById("motherHeight").value);

  if (lang === "english") {
    document.getElementById("lblTitle").innerText = "Child Growth, Tanner Puberty & Development Screener";
    document.getElementById("lblSubtitle").innerText = "IAP Growth Charts, Tanner Pubertal Staging, Genetic Height Formula & Developmental Milestones.";
    document.getElementById("lblLang").innerText = "Select Language";
    document.getElementById("lblAge").innerText = "Child's Age";
    document.getElementById("lblGender").innerText = "Child's Gender";
    document.getElementById("lblWeight").innerText = "Current Weight (kg)";
    document.getElementById("lblHeight").innerText = (ageKey === "0m" || ageKey === "3m" || ageKey === "6m" || ageKey === "9m" || ageKey === "12m") ? "Current Length (cm)" : "Current Height (cm)";
    document.getElementById("lblFather").innerText = "Father's Height";
    document.getElementById("lblMother").innerText = "Mother's Height";
  } else {
    document.getElementById("lblTitle").innerText = "शिशु विकास, टैनर किशोरावस्था एवं मील के पत्थर (Screener)";
    document.getElementById("lblSubtitle").innerText = "IAP ग्रोथ चार्ट, टैनर प्यूबर्टल स्टेजिंग, जेनेटिक हाइट फॉर्मूला एवं विकासात्मक स्केल आधारित।";
    document.getElementById("lblLang").innerText = "भाषा चुनें (Language)";
    document.getElementById("lblAge").innerText = "बच्चे की उम्र (Age)";
    document.getElementById("lblGender").innerText = "लिंग (Gender)";
    document.getElementById("lblWeight").innerText = "वर्तमान वजन (kg)";
    document.getElementById("lblHeight").innerText = (ageKey === "0m" || ageKey === "3m" || ageKey === "6m" || ageKey === "9m" || ageKey === "12m") ? "वर्तमान लंबाई (cm)" : "वर्तमान कद (cm)";
    document.getElementById("lblFather").innerText = "पिता की लंबाई";
    document.getElementById("lblMother").innerText = "माता की लंबाई";
  }

  const data = milestoneDatabase[ageKey];
  const ageName = data.name[lang === "english" ? "en" : "hi"];
  const ref = data.iap[gender];

  let growthHtml = "";
  let wStatus = "";
  let hStatus = "";

  if (!isNaN(wInput)) {
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

  if (!isNaN(hInput)) {
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

  let mphHtml = "";
  if (!isNaN(fHeight) && !isNaN(mHeight)) {
    let targetHeight = (gender === "boy") ? (fHeight + mHeight + 13) / 2 : (fHeight + mHeight - 13) / 2;
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
              ${!isNaN(hInput) && hInput < ref.minH ? "⚠️ Current height is trailing relative to parental genetic potential. Clinic checkup recommended." : "✔ Current growth trajectory aligns well with parental genetic potential."}
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
              ${!isNaN(hInput) && hInput < ref.minH ? "⚠️ बच्चे की वर्तमान लंबाई माता-पिता की आनुवंशिक क्षमता से कम चल रही है। क्लिनिक परामर्श लें।" : "✔ वर्तमान विकास गति माता-पिता की आनुवंशिक कद-काठी के अनुरूप है।"}
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
        ${lang === "english" ? "Weight:" : "वजन:"} <strong>${ref.minW}–${ref.maxW} kg</strong> | 
        ${lang === "english" ? "Length/Height:" : "लंबाई/कद:"} <strong>${ref.minH}–${ref.maxH} cm</strong>
      </p>
      ${wStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${emptyWText}</p>`}
      ${hStatus || `<p style="font-size:0.82rem; color:#94a3b8;">${emptyHText}</p>`}
      ${mphHtml}
    </div>
  `;

  const listLang = lang === "english" ? "en" : "hi";
  let greenList = data.green[listLang].map(item => `<li>${item}</li>`).join("");
  let yellowList = data.yellow[listLang].map(item => `<li>${item}</li>`).join("");
  let redList = data.red[listLang].map(item => `<li>${item}</li>`).join("");

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

  let devHtml = `
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

  let weaningBox = "";
  if (ageKey === "6m") {
    if (lang === "english") {
      weaningBox = `
        <div class="feeding-protocol-box">
          <h5><i class="fa-solid fa-bowl-food"></i> Detailed 6-Month Weaning & Feeding Protocol</h5>
          <ul>
            <li><strong>How to Start:</strong> Start with 1-2 teaspoons once daily when baby is alert and not overly hungry. Gradually increase to 2 small meals per day.</li>
            <li><strong>Ideal Starter Foods:</strong> Well-cooked, smooth yellow moong dal water/khichdi, single-grain sooji kheer (cooked in water or pumped breastmilk), mashed ripe banana, boiled and puréed apple/pear, or steamed mashed carrot.</li>
            <li><strong>The 3-Day Rule:</strong> Introduce only ONE new food item at a time. Wait for 3 consecutive days to check for allergies, skin rashes, or loose stools before introducing the next food item.</li>
            <li><strong>Foods Strictly Avoided:</strong> NO cow's milk, buffalo milk, honey (risk of infant botulism), added table salt, or refined white sugar before 1 year of age.</li>
          </ul>
        </div>
      `;
    } else {
      weaningBox = `
        <div class="feeding-protocol-box">
          <h5><i class="fa-solid fa-bowl-food"></i> 6 माह पर ऊपरी आहार (Weaning) की संपूर्ण विधि</h5>
          <ul>
            <li><strong>शुरुआत कैसे करें:</strong> दिन में एक बार 1-2 चम्मच से शुरुआत करें जब बच्चा शांत व भूखा हो। धीरे-धीरे मात्रा बढ़ाकर दिन में 2 बार करें।</li>
            <li><strong>सर्वोत्तम प्रारंभिक आहार:</strong> अच्छी तरह पकी मूंग दाल की पतली खिचड़ी, सूजी की पतली खीर (पानी या माँ के दूध में पकी), मसला हुआ पका केला, उबला व मसला हुआ सेब (Apple Puree) अथवा उबली गाजर की प्यूरी।</li>
            <li><strong>3-दिन का नियम (3-Day Rule):</strong> एक समय में केवल एक नया भोजन शुरू करें। 3 दिनों तक लगातार वही दें ताकि किसी भी एलर्जी, पेट खराबी या चकत्तों की पहचान हो सके।</li>
            <li><strong>पूर्णतः वर्जित चीजें:</strong> 1 वर्ष तक गाय/भैंस का दूध, शहद (Infant Botulism का खतरा), नमक एवं अतिरिक्त चीनी बिल्कुल न दें।</li>
          </ul>
        </div>
      `;
    }
  }

  const tips = data.parentTips;
  let tipsHtml = `
    <div class="result-box" style="grid-column: 1 / -1; background: #faf5ff; border: 1.5px solid #e9d5ff;">
      <h4 style="color: #6b21a8;"><i class="fa-solid fa-heart-pulse"></i> ${ageName} ${lang === "english" ? "Parenting & Care Guide" : "अभिभावक देखभाल मार्गदर्शन (Parenting Guide)"}</h4>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: 12px;">
        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#7e22ce; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-apple-whole"></i> ${lang === "english" ? "Nutrition & Diet Requirements:" : "खुराक एवं पोषण (Nutrition):"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.nutrition[listLang]}</p>
        </div>

        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#b91c1c; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-shield-halved"></i> ${lang === "english" ? "Child Safety & Accident Prevention:" : "सुरक्षा एवं दुर्घटना से बचाव (Safety):"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.safety[listLang]}</p>
        </div>

        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#0369a1; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-puzzle-piece"></i> ${lang === "english" ? "Play, Brain & Cognitive Stimulation:" : "खेल, संवाद एवं मानसिक विकास:"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.play[listLang]}</p>
        </div>

        <div style="background:#ffffff; padding:14px; border-radius:12px; border:1px solid #f3e8ff;">
          <strong style="color:#15803d; font-size:0.88rem; display:block; margin-bottom:4px;"><i class="fa-solid fa-stethoscope"></i> ${lang === "english" ? "Vaccine & Doctor Care Tip:" : "टीकाकरण एवं चिकित्सकीय सलाह:"}</strong>
          <p style="font-size:0.84rem; color:#4b5563; line-height:1.45;">${tips.care[listLang]}</p>
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

  document.getElementById("screenerResults").innerHTML = `
    <div class="results-grid">
      ${growthHtml}
      ${devHtml}
      ${tipsHtml}
    </div>
  `;
}

// ==========================================
// 2. FAQ ACCORDION & FILTER LOGIC
// ==========================================
function toggleFaq(button) {
  const item = button.parentElement;
  const answer = item.querySelector('.faq-answer');
  const isActive = item.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('active');
    el.querySelector('.faq-answer').style.display = 'none';
  });

  if (!isActive) {
    item.classList.add('active');
    answer.style.display = 'block';
  }
}

function filterFaq(category) {
  document.querySelectorAll('.faq-filter-btn').forEach(b => b.classList.remove('active-filter'));
  document.getElementById('btn-' + category).classList.add('active-filter');

  document.querySelectorAll('.faq-item').forEach(item => {
    if (category === 'all' || item.classList.contains('faq-' + category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// ==========================================
// 3. MODAL HANDLERS
// ==========================================
function openBookingModal() {
  document.getElementById('bookingModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  document.getElementById('bookingModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function openBlogModal(articleKey) {
  const article = blogArticles[articleKey];
  if (article) {
    document.getElementById('blogModalTitle').innerHTML = '<i class="fa-solid fa-newspaper" style="color: var(--brand-secondary);"></i> ' + article.title;
    document.getElementById('blogModalContent').innerHTML = article.content;
    document.getElementById('blogModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeBlogModal() {
  document.getElementById('blogModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function closeModalOnOverlay(event, modalId) {
  if (event.target.id === modalId) {
    if (modalId === 'bookingModal') closeBookingModal();
    if (modalId === 'blogModal') closeBlogModal();
  }
}

// Auto-run screener on page load
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("screenerAge")) {
    runScreener();
  }
});
