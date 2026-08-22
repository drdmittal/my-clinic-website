// -------------------------------------------------------------
// ENHANCED AUXOLOGICAL DISCREPANCY & MID-PARENTAL EVALUATION
// -------------------------------------------------------------
let childHeightZ = 0;
let targetAdultZ = 0;
let hasHeightDiscrepancy = false;
let discrepancyType = "none"; // 'lagging-severe', 'lagging-moderate', 'exceeding', 'none'
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

// -------------------------------------------------------------
// SYNCHRONIZED MID-PARENTAL BOX OUTPUT
// -------------------------------------------------------------
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
        ? `<span style="color: #b91c1c; font-weight:700; display:block; margin-top:6px;">⚠️ Clinical Guidance: Child's linear growth is trailing below parental genetic potential (>2 SD). Please consult your pediatrician for in-person clinical evaluation and growth charting.</span>`
        : `<span style="color: #b91c1c; font-weight:700; display:block; margin-top:6px;">⚠️ चिकित्सीय मार्गदर्शन: बच्चे की लंबाई माता-पिता की आनुवंशिक क्षमता से कम चल रही है (>2 SD)। बाल रोग विशेषज्ञ से परामर्श लें।</span>`;
    } else if (discrepancyType === "lagging-moderate") {
      boxBgColor = "#fffbeb";
      boxBorderColor = "#fde047";
      boxTitleColor = "#854d0e";
      targetAnalysisText = lang === "english"
        ? `<span style="color: #b45309; font-weight:700; display:block; margin-top:6px;">🟡 Clinical Guidance: Child's linear growth tracks slightly below parental genetic target (~1.5 SD). Regular follow-up with your pediatrician is advised.</span>`
        : `<span style="color: #b45309; font-weight:700; display:block; margin-top:6px;">🟡 चिकित्सीय मार्गदर्शन: बच्चे का विकास क्रम आनुवंशिक लक्ष्य से थोड़ा धीमा है। डॉक्टर से नियमित निगरानी कराएं।</span>`;
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
} else if ((!isNaN(fHeight) && isNaN(mHeight)) || (isNaN(fHeight) && !isNaN(mHeight))) {
  // Helper notice if one parent height is missing
  mphHtml = `
    <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 12px; padding: 10px 14px; margin-top: 10px; font-size: 0.8rem; color: #64748b;">
      <i class="fa-solid fa-circle-info" style="color: #0891b2;"></i> ${lang === "english" ? "Enter both Father's and Mother's height above to calculate Mid-Parental Target Height." : "आनुवंशिक लक्ष्य लंबाई की गणना हेतु माता और पिता दोनों का कद दर्ज करें।"}
    </div>
  `;
}
