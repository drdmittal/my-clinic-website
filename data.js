// ==========================================
// 1. MILESTONES, IAP GROWTH, TANNER & TIPS
// ==========================================
const milestoneDatabase = {
  "0m": {
    name: { en: "Newborn (0 - 30 Days)", hi: "नवजात शिशु (0 - 30 दिन)" },
    iap: { boy: { minW: 2.5, maxW: 3.9, minH: 47, maxH: 53 }, girl: { minW: 2.4, maxW: 3.7, minH: 46, maxH: 52 } },
    green: {
      en: ["Active sucking, rooting, and grasp reflexes present", "Startles to loud sudden noises (Moro reflex)", "Focuses on faces 8-12 inches away", "Cries vigorously to communicate hunger/wetness"],
      hi: ["सक्रिय स्तनपान (Sucking), रूटिंग और पकड़ने की स्वाभाविक सजगता", "तेज आवाज पर चौंकना (Moro Reflex)", "8-12 इंच दूरी पर चेहरे पर ध्यान केंद्रित करना", "भूख या गीलेपन पर रोकर बताना"]
    },
    yellow: {
      en: ["Weak latch or sleepy during feeds", "Occasional milk regurgitation after feeding", "Mild physiological jaundice on face/chest"],
      hi: ["स्तनपान के समय कमजोर पकड़ या अत्यधिक सुस्ती", "दूध पीने के बाद थोड़ा दूध निकालना", "चेहरे या छाती पर हल्का पीलिया (Jaundice)"]
    },
    red: {
      en: ["Refusing feeds across multiple cycles", "Severe deep yellow jaundice spreading to palms/soles", "Fever > 100.4°F (38°C) or hypothermia", "Lethargy, grunting, or rapid chest breathing"],
      hi: ["लगातार दूध पीने से मना करना", "हथेलियों और तलवों तक गहरा पीलिया फैलना", "बुखार > 100.4°F या शरीर का ठंडा पड़ना", "अत्यधिक सुस्ती, पसलियां चलना या सांस लेने में परेशानी"]
    },
    parentTips: {
      nutrition: { 
        en: "Exclusive Breastfeeding on demand (every 2-3 hours, 8-12 times a day). Never give plain water, honey, ghutti, or animal milk. Administer Vitamin D3 drops (400 IU) daily.", 
        hi: "मांग अनुसार केवल माँ का दूध (हर 2-3 घंटे में)। पानी, शहद, घुट्टी या गाय/भैंस का दूध बिल्कुल न दें। विटामिन D3 ड्रॉप्स (400 IU) प्रतिदिन नियमित दें।" 
      },
      safety: { 
        en: "Always place baby on their back to sleep on a flat, firm mattress (SIDS prevention). Never leave baby unattended on high beds/sofas. Keep umbilical cord dry and exposed to air.", 
        hi: "शिशु को हमेशा पीठ के बल सुलाएं। बिस्तर या सोफे पर अकेला न छोड़ें (गिरने का खतरा)। गर्भनाल (Umbilical Cord) को सूखा व साफ रखें।" 
      },
      play: { 
        en: "Skin-to-skin Kangaroo Mother Care (KMC) promotes bonding and temperature control. Talk gently and make calm face-to-face eye contact.", 
        hi: "शिशु को सीने से लगाकर कंगारू मदर केयर (KMC) दें। प्यार भरी आवाज में बात करें और नजरें मिलाएं।" 
      },
      care: { 
        en: "Birth Vaccines: BCG, OPV-0, and Hepatitis B (1st dose) at birth. Clean cord with dry cotton; no oils or kajal in eyes/ears. Burp baby after every feed.", 
        hi: "जन्म के टीके: BCG, OPV 0, और हेपेटाइटिस-बी 1st डोज। हर बार दूध पिलाने के बाद डकार (Burp) दिलाएं। आंखों में काजल या कान में तेल न डालें।" 
      }
    }
  },
  "3m": {
    name: { en: "3 Months", hi: "3 माह (3 Months)" },
    iap: { boy: { minW: 5.0, maxW: 7.2, minH: 57, maxH: 63 }, girl: { minW: 4.5, maxW: 6.8, minH: 56, maxH: 62 } },
    green: {
      en: ["Holds head steady when supported upright", "Responsive social smile to parents", "Follows moving objects with eyes past midline", "Makes cooing and gurgling sounds"],
      hi: ["गोदी में सीधा पकड़ने पर गर्दन संभालना शुरू करता है", "माता-पिता को देखकर मुस्कुराता है (Social Smile)", "चलती हुई वस्तुओं या चेहरों को आँखों से देखता है", "हल्की आवाजें (कुइंग / Cooing) निकालता है"]
    },
    yellow: {
      en: ["Partial head lag still present when pulled to sit", "Inconsistent response to sounds or voices"],
      hi: ["गर्दन अभी भी पीछे की ओर झुकती है", "आवाज या चेहरे पर ध्यान नहीं देता"]
    },
    red: {
      en: ["Complete head lag; cannot lift head in tummy time", "Does not smile at voices or faces", "Does not visually fixate or track moving light"],
      hi: ["गर्दन बिल्कुल नहीं ठहरा पाता (Head Lag)", "मुस्कुराता बिल्कुल नहीं है", "रोशनी या चेहरे की ओर ध्यान केंद्रित नहीं करता"]
    },
    parentTips: {
      nutrition: { en: "Exclusive breastfeeding or formula milk only. No water, ghutti, or animal milk. Give 400 IU Vitamin D3 drops daily.", hi: "केवल माँ का दूध (Exclusive Breastfeeding) अथवा फॉर्मूला दूध। पानी, घुट्टी या शहद बिल्कुल न दें। विटामिन D3 ड्रॉप्स (400 IU) प्रतिदिन नियमित दें।" },
      safety: { en: "Never leave baby unattended on elevated beds or sofas (fall risk). Always place on back to sleep.", hi: "शिशु को ऊंचे बिस्तर या सोफे पर कभी अकेला न छोड़ें (गिरने का खतरा)। हमेशा पीठ के बल सुलाएं।" },
      play: { en: "Provide 5-10 minutes of supervised Tummy Time daily. Talk and make eye contact frequently.", hi: "प्रतिदिन 5-10 मिनट पेट के बल लिटाएं (Tummy Time) जब शिशु जाग रहा हो। आमने-सामने बातें करें।" },
      care: { en: "Avoid putting kajal in eyes or oil in ears/nose. Ensure 6, 10, and 14 week IAP vaccine visits.", hi: "आंखों में काजल या कान में तेल बिल्कुल न डालें। 6, 10, और 14 सप्ताह के नियमित टीके सुनिश्चित करें।" }
    }
  },
  "6m": {
    name: { en: "6 Months (Complementary Feeding Stage)", hi: "6 माह (ऊपरी आहार / Weaning अवस्था)" },
    iap: { boy: { minW: 6.5, maxW: 9.0, minH: 64, maxH: 70 }, girl: { minW: 5.8, maxW: 8.5, minH: 62, maxH: 68 } },
    green: {
      en: ["Rolls over front to back and back to front", "Sits with brief hand support (tripod posture)", "Transfers objects between hands", "Babbles consonant sounds ('ba-ba', 'da-da')"],
      hi: ["पेट के बल से पीठ पर और पलटता है (Rolls over)", "हाथों का सहारा लेकर बैठना शुरू करता है", "खिलौने को एक हाथ से दूसरे हाथ में पकड़ता है", "'बा-बा', 'दा-दा' जैसी ध्वनियाँ (Babbling) निकालता है"]
    },
    yellow: {
      en: ["Cannot roll over in both directions", "Does not reach for offered toys", "Tongue thrust reflex still preventing spoon feeding"],
      hi: ["दोनों तरफ करवट या पलटना नहीं कर पाता", "खिलौने पकड़ने के लिए हाथ आगे नहीं बढ़ाता", "चम्मच से खाना बाहर धकेलना"]
    },
    red: {
      en: ["Cannot sit even with support", "Persistently clenched fists / stiff posture", "Does not turn towards sound or name"],
      hi: ["सहारा देने पर भी बिल्कुल बैठ नहीं पाता", "शरीर बहुत अकड़ा हुआ रहता है", "नाम पुकारने या आवाज पर ध्यान नहीं देता"]
    },
    parentTips: {
      nutrition: { 
        en: "Start Complementary Feeding alongside breastfeeding. Begin with 1-2 meals/day (2-3 spoons, gradually increasing). Start with single-grain smooth purees: Yellow moong dal khichdi, mashed ripe banana, boiled apple puree, or sooji kheer (cooked in water or pumped breastmilk). Follow 3-day rule for new foods. Zero salt, sugar, honey, or animal milk before 1 year.", 
        hi: "स्तनपान के साथ ऊपरी ठोस आहार (Complementary Feeding) शुरू करें। 1-2 चम्मच से शुरुआत करके धीरे-धीरे मात्रा बढ़ाएं। मूंग दाल की पतली खिचड़ी, मसला केला, उबला सेब प्यूरी, सूजी की खीर दें। नई चीज शुरू करते समय 3 दिन का नियम अपनाएं। 1 वर्ष तक नमक, चीनी, शहद या गाय का दूध बिल्कुल न दें।" 
      },
      safety: { en: "Keep small choking hazards away. Do not use baby walkers (fall and injury risk). Ensure baby is seated upright during feeding.", hi: "सिक्के, बटन, सेल जैसी छोटी चीजें दूर रखें (Choking Hazard)। बेबी वॉकर का इस्तेमाल बिल्कुल न करें। खाना हमेशा बैठाकर खिलाएं।" },
      play: { en: "Place toys just out of reach to encourage reaching. Play interactive games like peek-a-boo.", hi: "रंग-बिरंगे खिलौने सामने रखें। 'आंख-मिचौली' (Peek-a-boo) खेलें।" },
      care: { en: "Clean emerging milk teeth with soft silicone brush. Administer 6-month Influenza (Flu-1) shot and Hepatitis B-3 as per IAP.", hi: "पहला दांत निकलने पर मुलायम ब्रश से सफाई करें। IAP अनुसार 6 माह पर इन्फ्लूएंजा (Flu-1) व हेपेटाइटिस-बी 3 टीका लगवाएं।" }
    }
  },
  "9m": {
    name: { en: "9 Months", hi: "9 माह (9 Months)" },
    iap: { boy: { minW: 7.5, maxW: 10.2, minH: 68, maxH: 74 }, girl: { minW: 6.8, maxW: 9.8, minH: 66, maxH: 73 } },
    green: {
      en: ["Sits steadily without any support", "Crawls on hands and knees", "Picks up small objects with thumb and index finger", "Responds to own name and understands 'No'"],
      hi: ["बिना सहारे स्वतंत्र रूप से बैठता है", "घुटनों के बल रेंगता (Crawling) है", "अंगूठे और उंगली से छोटी वस्तुएं उठाता है (Pincer grasp)", "अपना नाम पहचानता है और प्रतिक्रिया देता है"]
    },
    yellow: {
      en: ["Needs support to maintain sitting balance", "Infrequent or limited vocal babbling"],
      hi: ["बिना सहारे बैठने में संतुलन नहीं बना पाता", "हाथों से वस्तुओं को नहीं पकड़ता"]
    },
    red: {
      en: ["Cannot sit independently", "Cannot bear weight on legs when supported", "Shows no joyful recognition of parents"],
      hi: ["अकेले बैठ नहीं पाता", "पैरों पर वजन नहीं डाल पाता", "माता-पिता को देखकर पहचान या प्रसन्नता नहीं दिखाता"]
    },
    parentTips: {
      nutrition: { en: "Offer 3 balanced semi-solid meals daily (dalia, vegetables, paneer mash, boiled egg yolk). Introduce soft finger foods.", hi: "दिन में 3 बार मसला हुआ ठोस आहार दें (दलिया, उबली सब्जियां, पनीर, अंडा)। पौष्टिक फिंगर फूड्स दें।" },
      safety: { en: "Child-proof the home: Cover electrical sockets, install stair gates, keep floor buckets dry.", hi: "घर को सुरक्षित बनाएं: बिजली के स्विचबोर्ड ढकें, सीढ़ियों पर गेट लगाएं, फर्श पर पानी न छोड़ें।" },
      play: { en: "Encourage floor exploration with stacking cups and soft balls. Zero screen time (TV/Mobiles).", hi: "नरम गेंदों और बर्तनों से फर्श पर खेलने दें। मोबाइल/टीवी स्क्रीन बिल्कुल न दिखाएं।" },
      care: { en: "Administer IAP-recommended MMR-1 and Typhoid Conjugate Vaccine at 9 months.", hi: "IAP अनुसार 9 माह पर MMR-1 (खसरा-गलसुआ-रूबेला) और टाइफाइड कंजुगेट टीका सुनिश्चित करें।" }
    }
  },
  "12m": {
    name: { en: "12 Months (1 Year)", hi: "12 माह / 1 वर्ष (12 Months)" },
    iap: { boy: { minW: 8.4, maxW: 11.5, minH: 72, maxH: 79 }, girl: { minW: 7.8, maxW: 11.0, minH: 70, maxH: 78 } },
    green: {
      en: ["Cruises holding furniture / stands briefly alone", "Says 1-2 meaningful words ('Mama', 'Papa')", "Waves bye-bye and claps hands", "Points to objects with index finger"],
      hi: ["फर्नीचर पकड़कर चलता है (Cruising) या कुछ कदम अकेला खड़ा होता है", "1-2 सार्थक शब्द बोलता है ('मम्मा', 'पापा')", "हाथ हिलाकर 'बाय-बाय' और ताली बजाता है", "उंगली से किसी वस्तु की ओर इशारा करता है"]
    },
    yellow: {
      en: ["Does not pull to stand with furniture", "Does not imitate simple gestures", "No single meaningful words spoken"],
      hi: ["सहारा लेकर खड़ा नहीं होता", "हाथ हिलाने या ताली बजाने की नकल नहीं करता", "कोई सार्थक शब्द नहीं बोलता"]
    },
    red: {
      en: ["Cannot crawl or bear weight", "Does not point or use gestures", "Loss of previously acquired vocal/motor skills"],
      hi: ["खड़े होने का प्रयास नहीं करता", "इशारा करके कुछ नहीं मांगता", "पहले सीखे हुए शब्द या गतिविधियां भूलने लगा है"]
    },
    parentTips: {
      nutrition: { en: "Offer standard family food (mild spices). 3 meals + 2 healthy snacks. Cow's milk acceptable (max 400ml/day).", hi: "घर का बना सामान्य भोजन (कम मिर्च-मसाला) दें। दिन में 3 मुख्य भोजन + 2 पौष्टिक स्नैक्स। गाय का दूध शुरू कर सकते हैं (अधिकतम 400ml/दिन)।" },
      safety: { en: "Keep hot beverages, irons, and sharp utensils away from counter edges (burn prevention).", hi: "गर्म चाय, कुकर, इस्त्री और नुकीली वस्तुएं टेबल के किनारों से दूर रखें (जलने और चोट का खतरा)।" },
      play: { en: "Read simple picture board books together. Practice rolling and throwing soft balls.", hi: "चित्रों वाली किताबें दिखाकर वस्तुओं के नाम बताएं। गेंद फेंकने और पकड़ने का खेल खेलें।" },
      care: { en: "IAP Immunization: Administer Hepatitis A (1st Dose) at 12 months.", hi: "IAP टीकाकरण: 12 माह पर हेपेटाइटिस-ए (Hepatitis-A Dose 1) टीका लगवाएं।" }
    }
  },
  "18m": {
    name: { en: "18 Months (1.5 Years)", hi: "18 माह / 1.5 वर्ष (18 Months)" },
    iap: { boy: { minW: 9.8, maxW: 13.2, minH: 79, maxH: 87 }, girl: { minW: 9.2, maxW: 12.6, minH: 77, maxH: 86 } },
    green: {
      en: ["Walks steadily and runs independently", "Speaks 6 to 10 clear words", "Stacks 2-3 blocks and scribbles", "Uses spoon with minimal spilling"],
      hi: ["बिना सहारे स्वतंत्र रूप से दौड़ता और चलता है", "कम से कम 6 से 10 स्पष्ट शब्द बोलता है", "2-3 खिलौना ब्लॉक एक के ऊपर एक रखता है", "चम्मच से स्वयं खाना खाने का प्रयास करता है"]
    },
    yellow: {
      en: ["Unsteady gait with frequent falls", "Speaks fewer than 4 clear words", "Rarely imitates household actions"],
      hi: ["चलते समय बहुत लड़खड़ाता है", "4 से कम शब्द बोलता है", "दैनिक कार्यों की नकल नहीं करता"]
    },
    red: {
      en: ["Cannot walk independently", "No spoken words or communicative gestures", "Does not understand simple 1-step verbal commands"],
      hi: ["स्वतंत्र रूप से चल नहीं पाता", "कोई सार्थक शब्द नहीं बोलता", "सरल निर्देश ('पापा को गेंद दो') नहीं समझता"]
    },
    parentTips: {
      nutrition: { en: "Focus on iron-rich foods (spinach, lentils, eggs, dates). Avoid packaged juices and chips.", hi: "आयरन युक्त आहार दें: पालक, चना, चुकंदर, दालें, अंडा। पैकेट वाले जूस, चिप्स और चॉकलेट से दूर रखें।" },
      safety: { en: "Keep all medications and cleaning chemicals locked. Secure balcony railings and windows.", hi: "दवाइयां और फिनाइल लॉक वाली अलमारी में रखें। बालकनी की रेलिंग पर जाली लगवाएं।" },
      play: { en: "Encourage drawing with large crayons and stacking blocks. Provide daily outdoor park play.", hi: "ब्लॉक जोड़ना और रंग भरने के लिए क्रेयॉन दें। प्रतिदिन पार्क में शारीरिक खेल खिलाएं।" },
      care: { en: "IAP Immunization: Administer MMR-2, Varicella-1 (15M) and DPT Booster-1, IPV Booster-1, Hib Booster (16-18M).", hi: "IAP टीकाकरण: 15 माह पर छूटे MMR-2/Varicella-1 तथा 16-18 माह पर DPT बूस्टर-1, IPV बूस्टर-1, Hib बूस्टर लगवाएं।" }
    }
  },
  "24m": {
    name: { en: "24 Months (2 Years)", hi: "24 माह / 2 वर्ष (24 Months)" },
    iap: { boy: { minW: 10.8, maxW: 14.8, minH: 83, maxH: 93 }, girl: { minW: 10.2, maxW: 14.2, minH: 82, maxH: 92 } },
    green: {
      en: ["Runs well and kicks a ball forward", "Speaks 2-word spontaneous phrases ('Drink milk')", "Follows 2-step instructions and builds tower of 4-6 blocks"],
      hi: ["दौड़ता है और गेंद को किक करता है", "2 शब्दों के वाक्य बोलता है ('दूध दो', 'पार्क चलो')", "4 से 6 ब्लॉकों की मीनार बनाता है", "दो चरणों वाले निर्देश समझता है"]
    },
    yellow: {
      en: ["Speaks only single words (no phrases)", "Does not engage in simple pretend play"],
      hi: ["केवल एकल शब्द बोलता है, 2 शब्द नहीं जोड़ पाता", "अन्य बच्चों के साथ खेलने में रुचि नहीं दिखाता"]
    },
    red: {
      en: ["Cannot run or jump", "No eye contact and fails to respond to name (Autism screening flag)"],
      hi: ["दौड़ या कूद नहीं पाता", "कोई 2 शब्दों का वाक्य नहीं बोलता", "आँखों में नहीं देखता (Eye Contact नहीं करता) और नाम पर ध्यान नहीं देता"]
    },
    parentTips: {
      nutrition: { en: "Promote self-feeding. Transition completely away from feeding bottles to open cups.", hi: "स्वयं खाने की आदत को बढ़ावा दें। दूध की बोतल बंद करके गिलास या कप से पीने की आदत डालें।" },
      safety: { en: "Keep buckets/washrooms closed (drowning prevention). Install door pinch guards.", hi: "बाथरूम में पानी की बाल्टी या टब हमेशा ढक कर रखें (डूबने का खतरा)। दरवाजों पर फिंगर गार्ड लगाएं।" },
      play: { en: "Engage in imaginative pretend play. Screen limit strictly under 15 minutes of video calls.", hi: "रोल-प्ले खेलें (डॉक्टर-सेट, किचन-सेट)। स्क्रीन का समय अधिकतम 0-15 मिनट रखें।" },
      care: { en: "Initiate daytime potty training. Complete Hepatitis A Dose 2 as per IAP schedule.", hi: "दिन के समय पॉटी ट्रेनिंग का अभ्यास धैर्यपूर्वक शुरू करें। हेपेटाइटिस-ए की दूसरी खुराक (Hepatitis-A 2) पूर्ण करें।" }
    }
  },
  "3y": { name: { en: "3 Years", hi: "3 वर्ष (3 Years)" }, iap: { boy: { minW: 12.5, maxW: 17.5, minH: 90, maxH: 101 }, girl: { minW: 12.0, maxW: 17.0, minH: 89, maxH: 100 } }, green: { en: ["Pedals tricycle and climbs stairs alternating feet", "Speaks 3-4 word sentences clearly", "Copies a circle and recognizes colors", "Daytime toilet control achieved"], hi: ["ट्राईसाइकिल चलाता है और सीढ़ियों पर बारी-बारी पैर रखकर चढ़ता है", "3-4 शब्दों के पूरे वाक्य स्पष्ट बोलता है", "वृत्त (Circle) बनाता है और रंगों के नाम जानता है", "दिन के समय शौच नियंत्रण सीख जाता है"] }, yellow: { en: ["Speech unclear to strangers (under 50%)", "Difficulty interacting with peers; cannot copy circle"], hi: ["बोली अस्पष्ट है (अपरिचित लोग 50% भी नहीं समझ पाते)", "सर्कल या गोला नहीं बना पाता"] }, red: { en: ["Cannot climb stairs or run", "Extreme separation anxiety or violent tantrums", "Frequent drooling/unintelligible speech"], hi: ["सीढ़ी चढ़ने या दौड़ने में अत्यधिक कठिनाई", "माता-पिता से अलग होने पर अत्यधिक गुस्सा", "लगातार लार टपकती रहती है"] }, parentTips: { nutrition: { en: "Do not force feed during picky eating phases. Offer nutrient-dense curd, paneer, and fruits.", hi: "खाने में नखरे सामान्य हैं, जबरदस्ती न खिलाएं। थाली में पनीर, दही, ताजे फल शामिल करें।" }, safety: { en: "Teach basic road safety and introduce the concept of Safe vs Unsafe touch.", hi: "सड़क सुरक्षा सिखाएं (हमेशा हाथ पकड़ना)। 'सुरक्षित स्पर्श व असुरक्षित स्पर्श' (Safe & Unsafe Touch) की प्राथमिक जानकारी दें।" }, play: { en: "Introduce shape puzzles and coloring. Read a moral bedtime story every night.", hi: "पहेलियां (Puzzles) और रंग भरने वाली पुस्तकें दें। हर रात 1 प्रेरणादायक कहानी सुनाएं।" }, care: { en: "Brush teeth twice daily with a pea-sized fluoridated toothpaste.", hi: "सुबह और रात सोने से पहले मटर के दाने जितना फ्लोराइड युक्त टूथपेस्ट से ब्रश कराएं।" } } },
  "4y": { name: { en: "4 Years", hi: "4 वर्ष (4 Years)" }, iap: { boy: { minW: 14.0, maxW: 20.0, minH: 97, maxH: 108 }, girl: { minW: 13.5, maxW: 19.5, minH: 96, maxH: 107 } }, green: { en: ["Hops on one foot and catches bounced ball", "Tells sequential stories and asks questions", "Draws a person with 2-4 body parts", "Dresses and buttons clothing with minimal help"], hi: ["एक पैर पर कूदता (Hop) है और गेंद पकड़ता है", "छोटी कहानियां सुनाता है और सवाल पूछता है", "मानव आकृति में 3-4 अंग बनाता है", "बिना मदद के कपड़े व बटन लगाना सीखता है"] }, yellow: { en: ["Significant stuttering in speech", "Struggles with buttons and zippers"], hi: ["बोलते समय बहुत हकलाता (Stuttering) है", "बटन या जिप लगाने में असमर्थ"] }, red: { en: ["Cannot jump or throw ball overhand", "Ignores other children outside household", "Fails to grasp simple prepositions"], hi: ["कूद नहीं पाता, गेंद ओवरहैंड नहीं फेंक पाता", "घर के बाहर अन्य बच्चों को पूरी तरह अनदेखा करता है"] }, parentTips: { nutrition: { en: "Eliminate sugary soda and packed drinks. Provide calcium via dairy, sesame, and almonds.", hi: "कोल्ड ड्रिंक्स और डिब्बाबंद जूस पूरी तरह बंद करें। कैल्शियम के लिए दूध, दही व बादाम दें।" }, safety: { en: "Enforce bicycle helmets and rear car seatbelts at all times.", hi: "कार में सीटबेल्ट और साइकिल चलाते समय हेलमेट अनिवार्य करें।" }, play: { en: "Pre-school rhymes and counting games. Screen time strictly under 30 mins/day.", hi: "प्री-स्कूल कविताएं व गिनती सिखाएं। स्क्रीन का समय 30 मिनट प्रतिदिन से कम रखें।" }, care: { en: "Administer IAP 4-6 Year Vaccines: DPT Booster-2, IPV-2, MMR-3, Varicella-2.", hi: "IAP अनुसार 4-6 वर्ष पर DPT बूस्टर-2, IPV बूस्टर-2, MMR-3 और Varicella-2 लगवाएं।" } } },
  "5y": { name: { en: "5 Years", hi: "5 वर्ष (5 Years)" }, iap: { boy: { minW: 15.5, maxW: 22.5, minH: 103, maxH: 115 }, girl: { minW: 15.0, maxW: 22.0, minH: 102, maxH: 114 } }, green: { en: ["Skips smoothly and balances on one foot for 5+ sec", "Speaks fluent sentences in past/future tense", "Copies triangles and writes name", "Understands game rules and cooperates"], hi: ["रस्सी कूदता है और 5+ सेकंड एक पैर पर संतुलन बनाता है", "भूतकाल व भविष्यकाल में स्पष्ट बातचीत करता है", "त्रिभुज बनाता है और अपना नाम लिखता है", "खेलों के नियम समझता और पालन करता है"] }, yellow: { en: ["Cannot sustain attention for 5 minutes", "Poor/awkward pencil grip"], hi: ["5 मिनट भी किसी कार्य पर ध्यान केंद्रित नहीं कर पाता", "पेंसिल की पकड़ बहुत कमजोर या उल्टी है"] }, red: { en: ["Cannot state full name or follow 3-step directions", "Excessive violent aggression or social withdrawal"], hi: ["अपना पूरा नाम और पता नहीं बता पाता", "अत्यधिक आक्रामक या भयभीत व्यवहार"] }, parentTips: { nutrition: { en: "Follow balanced plate: 50% veggies/salad, 25% protein (dal/paneer/egg), 25% whole grains.", hi: "संतुलित थाली नियम: 50% सब्जी/सलाद, 25% प्रोटीन (दाल/पनीर/अंडा), 25% अनाज।" }, safety: { en: "Teach memorization of parent's phone number and home address.", hi: "आपातकालीन संपर्क नंबर (माता-पिता का फोन नंबर) याद करवाएं।" }, play: { en: "Play turn-taking board games (Ludo, Chess). Minimum 1 hour outdoor physical play.", hi: "बोर्ड गेम (लूडो, सांप-सीढ़ी) से धैर्य सिखाएं। प्रतिदिन 1 घंटा खेलकूद सुनिश्चित करें।" }, care: { en: "Complete routine vision and hearing screening prior to formal school admission.", hi: "विद्यालय में प्रवेश से पूर्व आंखों (दृष्टि) और सुनने (Hearing) की जांच कराएं।" } } },
  "6y": { name: { en: "6 Years", hi: "6 वर्ष (6 Years)" }, iap: { boy: { minW: 17.0, maxW: 25.5, minH: 109, maxH: 122 }, girl: { minW: 16.5, maxW: 25.0, minH: 108, maxH: 121 } }, green: { en: ["Rides 2-wheel bicycle", "Reads simple phonics and writes full name", "Understands days, weeks, and basic time"], hi: ["दो पहियों वाली साइकिल चला लेता है", "सरल शब्द पढ़ता और लिखता है", "दिन, सप्ताह और समय की अवधारणा समझता है"] }, yellow: { en: ["Struggles with simple 3-letter phonetic words", "Poor ball catching coordination"], hi: ["3 अक्षरों वाले सरल शब्द पढ़ने में संघर्ष", "गेंद पकड़ने में तालमेल की कमी"] }, red: { en: ["Marked academic learning delay", "Severe uncontrolled behavioral outbursts"], hi: ["स्कूल में सीखने में गंभीर देरी", "अत्यधिक अनियंत्रित गुस्सा"] }, parentTips: { nutrition: { en: "Never skip breakfast. Include soaked almonds and walnuts daily.", hi: "सुबह का नाश्ता कभी न छूटने दें। प्रतिदिन भीगे बादाम और अखरोट दें।" }, safety: { en: "Teach stranger safety and bus boarding precautions.", hi: "अपरिचितों से सुरक्षा (Stranger Danger) और स्कूल बस के नियम सिखाएं।" }, play: { en: "Encourage structured sports (skating, swimming, martial arts).", hi: "खेलकूद (स्केटिंग, तैराकी, कराटे) को प्रोत्साहित करें।" }, care: { en: "Ensure proper brushing for erupting 6-year permanent molars.", hi: "दाढ़ के पक्के दांत (6-year molars) निकलने पर उचित ब्रशिंग पर ध्यान दें।" } } },
  "7y": { name: { en: "7 Years", hi: "7 वर्ष (7 Years)" }, iap: { boy: { minW: 19.0, maxW: 29.0, minH: 115, maxH: 128 }, girl: { minW: 18.5, maxW: 28.5, minH: 114, maxH: 127 } }, green: { en: ["Reads chapter books", "Ties shoelaces independently", "Follows sports rules and shows fair play"], hi: ["अध्याय वाली पुस्तकें पढ़ता है", "जूते के फीते स्वयं बांधता है", "खेलों में निष्पक्षता और नियमों का पालन करता है"] }, yellow: { en: ["Persistent reading or basic math difficulties", "Fine motor coordination deficits"], hi: ["गणित या पढ़ने में लगातार समस्या", "हाथ की गतिविधियों (Fine motor) में कमजोरी"] }, red: { en: ["Extreme social isolation", "Severe phonics/reading regression"], hi: ["सामाजिक रूप से बिल्कुल अलग-थलग रहना", "पढ़ने में गंभीर अक्षमता"] }, parentTips: { nutrition: { en: "Pack nutritious homemade tiffins (sprout chaat, paneer wraps) instead of packaged snacks.", hi: "टिफिन में घर का बना पौष्टिक खाना (स्प्राउट्स चाट, पनीर रोल) दें।" }, safety: { en: "Enable parental controls on internet and gaming devices.", hi: "गैजेट्स और इंटरनेट पर पैरेंटल लॉक लगाएं।" }, play: { en: "Encourage creative hobbies (music, Lego engineering, sketching).", hi: "रचनात्मक शौक: चित्रकला, संगीत, लेगो निर्माण।" }, care: { en: "Ensure school backpack weight does not exceed 10% of body weight.", hi: "स्कूल बैग का वजन बच्चे के शरीर के वजन के 10% से अधिक न हो।" } } },
  "8y": { 
    name: { en: "8 Years (Tanner 1 / Prepubertal)", hi: "8 वर्ष (Tanner 1 / पूर्व-किशोरावस्था)" }, 
    iap: { boy: { minW: 21.0, maxW: 33.0, minH: 120, maxH: 134 }, girl: { minW: 20.5, maxW: 32.5, minH: 119, maxH: 133 } }, 
    tanner: {
      boy: { 
        stage: "Tanner Stage 1 (Prepubertal)", 
        green: "Normal Prepubertal State: Testicular volume < 4 mL, no pubic or facial hair.", 
        yellow: "Mild growth acceleration without genital enlargement (monitor growth chart).", 
        red: "🚨 Precocious Puberty Alert: Testicular enlargement (>= 4 mL) or pubic hair before age 9 requires urgent pediatric endocrine evaluation." 
      },
      girl: { 
        stage: "Tanner Stage 1 (Prepubertal)", 
        green: "Normal Prepubertal State: Elevation of papilla only (no breast budding), no pubic hair.", 
        yellow: "Isolated mild body odor without breast enlargement.", 
        red: "🚨 Precocious Puberty Alert: Breast budding (Thelarche / Tanner 2) or pubic hair before age 8 requires prompt pediatric endocrine workup." 
      }
    },
    green: { en: ["Active in team sports", "Understands logical cause and effect", "Completes homework with minimal supervision"], hi: ["टीम खेलों में सक्रिय रहता है", "तार्किक कारण और प्रभाव समझता है", "गृहकार्य स्वयं पूरा करता है"] }, 
    yellow: { en: ["Multi-subject academic decline", "Noticeable motor clumsiness"], hi: ["अनेक विषयों में पढ़ाई का स्तर गिरना", "अत्यधिक लड़खड़ाना या गिरना"] }, 
    red: { en: ["Inability to form or sustain peer friendships", "Severe emotional regression"], hi: ["मित्र बनाने में पूर्णतः असमर्थ", "व्यवहार में गंभीर गिरावट"] }, 
    parentTips: { nutrition: { en: "Encourage 20 minutes morning sun exposure for Vitamin D. Junk food max once weekly.", hi: "विटामिन D के लिए सुबह 20 मिनट धूप में रहें। जंक फूड सप्ताह में अधिकतम 1 बार।" }, safety: { en: "Mandatory helmet use during neighborhood cycling.", hi: "सुरक्षित लेन में हेलमेट पहनकर ही साइकिल चलाने दें।" }, play: { en: "Team games (cricket, badminton, football) to foster resilience.", hi: "क्रिकेट, फुटबॉल, बैडमिंटन जैसे खेलों से अनुशासन सिखाएं।" }, care: { en: "Enforce strict 1 hour non-academic screen limit per day.", hi: "गैर-शैक्षणिक स्क्रीन समय प्रतिदिन अधिकतम 1 घंटे तक सीमित करें।" } } 
  },
  "9y": { 
    name: { en: "9 Years (Tanner 1 - 2)", hi: "9 वर्ष (Tanner 1 - 2)" }, 
    iap: { boy: { minW: 23.0, maxW: 38.0, minH: 125, maxH: 140 }, girl: { minW: 22.5, maxW: 37.5, minH: 124, maxH: 139 } }, 
    tanner: {
      boy: { 
        stage: "Tanner Stage 1 (Prepubertal Baseline)", 
        green: "Normal baseline growth. Early testicular enlargement (Tanner 2) normally begins at 9-11 years.", 
        yellow: "Rapid unexplained height jump without sexual maturity signs.", 
        red: "🚨 Enlarged penis with pubic hair before 9.5 years requires clinical hormone check." 
      },
      girl: { 
        stage: "Tanner Stage 1 - 2 (Early Thelarche Window)", 
        green: "Normal onset: Small breast buds (Thelarche) under areola may normally appear (Tanner 2).", 
        yellow: "Unilateral (single side) breast bud tenderness (common physiological variant).", 
        red: "🚨 Rapid breast enlargement accompanied by vaginal bleeding requires immediate review." 
      }
    },
    green: { en: ["Manages chores and homework independently", "Strong physical endurance", "Forms close, loyal peer friendships"], hi: ["गृहकार्य और दैनिक कार्य स्वयं प्रबंधित करता है", "उत्कृष्ट शारीरिक सहनशक्ति", "गहरे मित्र बनाता है"] }, 
    yellow: { en: ["Short attention span; frequent academic frustration", "Difficulty regulating anger"], hi: ["ध्यान केंद्रित करने का समय बहुत कम", "अत्यधिक गुस्सा या भावनात्मक असंतुलन"] }, 
    red: { en: ["School refusal or severe generalized anxiety", "Lack of basic cognitive reasoning"], hi: ["स्कूल जाने से मना करना (School Refusal)", "अत्यधिक तनाव या चिंता"] }, 
    parentTips: { nutrition: { en: "Offer healthy protein snacks: Roasted makhana, boiled eggs, chana, paneer cubes.", hi: "प्रोटीन युक्त स्नैक्स दें: भुने मखाने, चना चाट, उबला अंडा, पनीर।" }, safety: { en: "Set strict boundaries against voice-chatting with strangers in online games.", hi: "ऑनलाइन गेमिंग में अजनबियों से बात न करने का सख्त नियम बनाएं।" }, play: { en: "Hands-on science kits, gardening, and household chores.", hi: "विज्ञान प्रयोग किट और बागवानी में रुचि जगाएं।" }, care: { en: "Nurture self-esteem; avoid comparing academic marks with peers.", hi: "आत्मसम्मान बढ़ाएं; अंकों को लेकर अन्य बच्चों से तुलना न करें।" } } 
  },
  "10y": { 
    name: { en: "10 Years (Tanner 2 / Early Puberty)", hi: "10 वर्ष (Tanner 2 / प्रारंभिक किशोरावस्था)" }, 
    iap: { boy: { minW: 25.5, maxW: 43.0, minH: 130, maxH: 146 }, girl: { minW: 25.0, maxW: 43.5, minH: 129, maxH: 146 } }, 
    tanner: {
      boy: { 
        stage: "Tanner Stage 2 (Pubertal Onset in Boys)", 
        green: "Normal Onset: Testicular enlargement (volume >= 4 mL), scrotum thins and reddens, sparse fine pubic hair.", 
        yellow: "No visible changes yet (normal variation if testicular volume is < 4 mL).", 
        red: "🚨 Marked gynecomastia (breast tissue in boys) with testicular pain/swelling." 
      },
      girl: { 
        stage: "Tanner Stage 2 - 3 (Thelarche & Adrenarche)", 
        green: "Normal: Breast bud elevation (Tanner 2), sparse straight pigmented pubic hair along labia (Tanner 2), growth spurt begins.", 
        yellow: "Unequal breast growth or localized tenderness (benign, monitor).", 
        red: "🚨 Extreme short stature with no pubertal growth spurt by age 10." 
      }
    },
    green: { en: ["Early pubertal growth onset (especially girls)", "Strong abstract and logical reasoning", "Handles multi-step academic projects"], hi: ["किशोरावस्था पूर्व शारीरिक विकास", "अमूर्त और तार्किक सोच", "जटिल स्कूल प्रोजेक्ट स्वयं संभालता है"] }, 
    yellow: { en: ["Reading comprehension gap", "High anxiety during routine changes"], hi: ["पढ़ने और समझने में कठिनाई", "दिनचर्या बदलने पर अत्यधिक घबराहट"] }, 
    red: { en: ["Severe mood disturbances, depression, abrupt school failure"], hi: ["गंभीर मूड स्विंग, अवसाद, अचानक पढ़ाई में गिरावट"] }, 
    parentTips: { nutrition: { en: "Increase iron-rich foods (spinach, jaggery, legumes) for growing girls.", hi: "बालिकाओं में आयरन की आवश्यकता बढ़ती है: गुड़, चना, पालक, हरी पत्तेदार सब्जियां।" }, safety: { en: "Teach independent pedestrian crossing and basic fire safety.", hi: "सड़क पार करने और आग से सुरक्षा के नियम सिखाएं।"] }, play: { en: "Encourage endurance athletics, swimming, and cycling.", hi: "एथलेटिक्स, तैराकी और साइकिलिंग को बढ़ावा दें।" }, care: { en: "Administer IAP Tdap Booster and HPV Vaccine (for girls aged 9-14 years).", hi: "IAP अनुसार 10-12 वर्ष पर Tdap टीका तथा बालिकाओं के लिए सर्वाइकल कैंसर (HPV) टीका लगवाएं।" } } 
  },
  "11y": { 
    name: { en: "11 Years (Tanner 2 - 3)", hi: "11 वर्ष (Tanner 2 - 3)" }, 
    iap: { boy: { minW: 28.0, maxW: 48.0, minH: 135, maxH: 152 }, girl: { minW: 28.0, maxW: 49.0, minH: 135, maxH: 153 } }, 
    tanner: {
      boy: { 
        stage: "Tanner Stage 2 - 3", 
        green: "Normal: Testicular volume 6-10 mL, lengthening of penis, darker curling pubic hair at base of penis.", 
        yellow: "Delayed growth acceleration compared to female classmates (normal, boys peak later).", 
        red: "🚨 Undescended testicles (cryptorchidism) or scrotal masses." 
      },
      girl: { 
        stage: "Tanner Stage 3 (Peak Height Velocity Window)", 
        green: "Normal: Enlargement of breast mound and areola with no contour separation (Tanner 3), darker coarser pubic hair.", 
        yellow: "Mild premenstrual mood sensitivity or acne appearance.", 
        red: "🚨 Severe hirsutism (excess facial/body hair) with cystic acne (PCOS screening indicator)." 
      }
    },
    green: { en: ["Rapid adolescent growth spurt", "Understands abstract ideas and moral values", "Strongly values peer group collaboration"], hi: ["तीव्र शारीरिक विकास (Growth Spurt)", "अमूर्त विचारों और नैतिक मूल्यों की समझ", "मित्रों के समूह को महत्व देता है"] }, 
    yellow: { en: ["Body image insecurities", "Difficulty coping with middle-school workload"], hi: ["शारीरिक बनावट को लेकर हीनभावना", "मिडिल स्कूल की पढ़ाई का तनाव"] }, 
    red: { en: ["Extreme social withdrawal, persistent clinical sadness"], hi: ["अत्यधिक अकेलापन, लगातार उदासी, नींद न आना"] }, 
    parentTips: { nutrition: { en: "Ensure adequate calcium and Vitamin D (milk, curd, ragi) for skeletal mineralization.", hi: "हड्डियों के विकास के लिए कैल्शियम युक्त आहार (दूध, दही, रागी) सुनिश्चित करें।" }, safety: { en: "Foster open communication regarding bullying or peer pressure.", hi: "बुलिंग (Bullying) के प्रति जागरूक करें; खुलकर बात करने का माहौल दें।" }, play: { en: "Support debate clubs, competitive athletics, coding, and creative arts.", hi: "वाद-विवाद, खेलकूद, कोडिंग और कलात्मक गतिविधियां।" }, care: { en: "Teach adolescent personal hygiene, daily bathing, and basic skincare.", hi: "व्यक्तिगत स्वच्छता, प्रतिदिन स्नान और त्वचा की देखभाल सिखाएं।" } } 
  },
  "12y": { 
    name: { en: "12 Years (Tanner 3 / Growth Spurt)", hi: "12 वर्ष (Tanner 3 / विकास गति)" }, 
    iap: { boy: { minW: 31.0, maxW: 54.0, minH: 140, maxH: 159 }, girl: { minW: 31.5, maxW: 55.0, minH: 141, maxH: 159 } }, 
    tanner: {
      boy: { 
        stage: "Tanner Stage 3", 
        green: "Normal: Testicular volume 10-12 mL, penis lengthening and widening, voice cracking begins, rapid height velocity.", 
        yellow: "Mild transient gynecomastia (breast tissue swelling in boys is benign in ~50% of pubertal boys).", 
        red: "🚨 Testicular volume remains < 4 mL with no sign of puberty by 12.5-13 years." 
      },
      girl: { 
        stage: "Tanner Stage 3 - 4 (Approaching Menarche)", 
        green: "Normal: Areola and papilla form a secondary mound above breast tissue (Tanner 4), adult-like pubic hair covering pubis.", 
        yellow: "Vaginal white discharge (physiological leukorrhea, normal 3-6 months prior to menarche).", 
        red: "🚨 Complete absence of breast budding (Tanner 1) by 12.5-13 years requires delayed puberty workup." 
      }
    },
    green: { en: ["Clear secondary sexual characteristics developing", "Forms personal identity and ethical reasoning", "Organizes long-term schedules and sports"], hi: ["द्वितीयक लैंगिक लक्षण विकसित होते हैं", "व्यक्तिगत पहचान और नैतिक सोच", "लंबी अवधि की योजनाएं बनाता है"] }, 
    yellow: { en: ["Lack of academic motivation", "Late night phone use disrupting sleep"], hi: ["पढ़ाई में रुचि खत्म होना", "देर रात तक फोन का इस्तेमाल"] }, 
    red: { en: ["Signs of bullying, self-harm ideation, severe clinical anxiety"], hi: ["खुद को नुकसान पहुंचाने के विचार, अत्यधिक घबराहट के दौरे"] }, 
    parentTips: { nutrition: { en: "Maintain 2.5-3L water intake daily. Limit fast food and fried items.", hi: "प्रतिदिन 2.5-3 लीटर पानी का सेवन कराएं। फास्ट फूड पर नियंत्रण रखें।" }, safety: { en: "Charge smartphones outside the bedroom at night. Screen curfew 1 hr before bed.", hi: "सोते समय मोबाइल फोन कमरे से बाहर रखें। सोने से 1 घंटे पहले स्क्रीन बंद करें।" }, play: { en: "Encourage sports tournaments, musical instruments, and group leadership.", hi: "खेल टूर्नामेंट, संगीत वाद्ययंत्र और समूह नेतृत्व।" }, care: { en: "Educate girls about menstrual health and hygiene with compassion.", hi: "बालिकाओं को मासिक धर्म स्वच्छता (Menstrual Hygiene) के बारे में संवेदनशीलता से समझाएं।" } } 
  },
  "13y": { 
    name: { en: "13 Years (Tanner 3 - 4 / Menarche Window)", hi: "13 वर्ष (Tanner 3 - 4 / मासिक धर्म अवस्था)" }, 
    iap: { boy: { minW: 35.0, maxW: 60.0, minH: 146, maxH: 166 }, girl: { minW: 35.5, maxW: 60.5, minH: 146, maxH: 164 } }, 
    tanner: {
      boy: { 
        stage: "Tanner Stage 3 - 4 (Peak Velocity Window in Boys)", 
        green: "Normal: Testicular volume 12-15 mL, significant penis growth, axillary hair, voice deepening, peak growth velocity.", 
        yellow: "Acne breakouts on face/back due to androgen surge.", 
        red: "🚨 Complete absence of pubertal onset (no testicular growth, Tanner 1) by 13.5-14 years (Delayed Puberty Alert)." 
      },
      girl: { 
        stage: "Tanner Stage 4 (Menarche Typically Occurs)", 
        green: "Normal: Menarche (first period) typically occurs 2-2.5 years after thelarche (average 12.5-13.5 years in India).", 
        yellow: "Irregular menstrual cycles in first 1-2 years after menarche (normal anovulatory cycles).", 
        red: "🚨 Delayed Puberty Alert: Zero breast development (Tanner 1) by age 13 requires pediatric endocrine assessment." 
      }
    },
    green: { en: ["Major growth spurt in height and mass", "Advanced hypothetical reasoning", "Strong individual personality and career interests"], hi: ["ऊंचाई और शारीरिक संरचना में तीव्र वृद्धि", "उन्नत परिकल्पनात्मक सोच", "मजबूत व्यक्तित्व और करियर में रुचि"] }, 
    yellow: { en: ["Noticeable academic drop", "Chronic tiredness and erratic dietary patterns"], hi: ["अंकों में गिरावट, लगातार थकान", "खान-पान की अनियमित आदतें"] }, 
    red: { en: ["Risk of substance exposure (vaping/tobacco), clinical depression"], hi: ["धूम्रपान/वेपिंग का जोखिम, गंभीर अवसाद, पूर्ण सामाजिक अलगाव"] }, 
    parentTips: { nutrition: { en: "Nutrient-dense home cooked meals with 1g/kg protein intake for active growth.", hi: "पोषक तत्वों से भरपूर घर का खाना। प्रति किलोग्राम वजन पर 1 ग्राम प्रोटीन दें।" }, safety: { en: "Empower teens to resist peer pressure regarding smoking, vaping, or substance use.", hi: "मित्रों के दबाव (Peer Pressure) में गलत आदतों से बचने के लिए 'ना' कहना सिखाएं।" }, play: { en: "Structured sports, supervised fitness training, or dramatic arts.", hi: "प्रतियोगी खेल, प्रशिक्षक की देखरेख में जिम व्यायाम।" }, care: { en: "Listen empathetically like a trusted mentor; avoid frequent criticism.", hi: "किशोर से एक मित्र और मार्गदर्शक की तरह बात करें। व्यंग्य या आलोचना से बचें।" } } 
  },
  "14y": { 
    name: { en: "14 Years (Tanner 4 / Peak Height Velocity)", hi: "14 वर्ष (Tanner 4 / तीव्रतम विकास)" }, 
    iap: { boy: { minW: 39.0, maxW: 66.0, minH: 153, maxH: 173 }, girl: { minW: 39.5, maxW: 65.0, minH: 150, maxH: 167 } }, 
    tanner: {
      boy: { 
        stage: "Tanner Stage 4 (Peak Growth & Voice Break)", 
        green: "Normal: Testicular volume 15-20 mL, adult skin texture on scrotum, adult pubic hair distribution (not yet medial thighs), facial hair on upper lip.", 
        yellow: "Persistent voice cracking and nocturnal emissions (wet dreams - benign and normal).", 
        red: "🚨 Delayed Puberty Alert: Zero testicular enlargement by age 14 requires specialist evaluation for hypogonadism." 
      },
      girl: { 
        stage: "Tanner Stage 4 - 5", 
        green: "Normal: Established menstrual cycle, adult breast contour, deceleration of linear height growth (normal post-menarche).", 
        yellow: "Mild dysmenorrhea (period cramps), manage with hydration and gentle warmth.", 
        red: "🚨 Primary Amenorrhea Alert: No menstruation despite normal breast development for >3 years." 
      }
    },
    green: { en: ["Peak height velocity in boys; voice deepening", "Mature decision making and abstract logic", "Refined motor and sports coordination"], hi: ["बालकों में आवाज में भारीपन व तीव्र वृद्धि", "परिपक्व निर्णय लेने की क्षमता", "खेलों में उच्च तालमेल"] }, 
    yellow: { en: ["Body image distress", "Difficulty handling high school academic pressure"], hi: ["शरीर के स्वरूप को लेकर चिंता (Body Dysmorphia)", "परीक्षा के तनाव का अनियंत्रण"] }, 
    red: { en: ["Complete academic disengagement, severe mood or anxiety disorders"], hi: ["पढ़ाई से पूरी तरह विमुख होना, अत्यधिक आक्रामकता"] }, 
    parentTips: { nutrition: { en: "Reduce greasy junk food to manage acne; increase fresh raw salads and water.", hi: "मुंहासों से बचाव के लिए तैलीय भोजन कम करें, ताजे सलाद और पानी की मात्रा बढ़ाएं।" }, safety: { en: "Review social media privacy settings and address cyber safety.", hi: "सोशल मीडिया प्राइवेसी सेटिंग्स की निगरानी करें।" }, play: { en: "Ensure minimum 45 minutes of vigorous cardiovascular physical activity daily.", hi: "प्रतिदिन 45 मिनट गहन कार्डियो व शारीरिक कसरत।" }, care: { en: "Administer Tetanus & Diphtheria (Tdap booster) at clinic.", hi: "IAP अनुसार टिटनेस और डिप्थीरिया बूस्टर (Tdap Booster) की स्थिति जांचें।" } } 
  },
  "15y": { 
    name: { en: "15 Years (Tanner 4 - 5)", hi: "15 वर्ष (Tanner 4 - 5)" }, 
    iap: { boy: { minW: 44.0, maxW: 72.0, minH: 160, maxH: 178 }, girl: { minW: 43.0, maxW: 68.0, minH: 152, maxH: 169 } }, 
    tanner: {
      boy: { 
        stage: "Tanner Stage 4 - 5", 
        green: "Normal: Testicular volume >= 20 mL, mature penis size, adult muscle contour, terminal facial and chest hair.", 
        yellow: "Postural backache during final height spurt.", 
        red: "🚨 Failure to progress through pubertal stages over >4.5 years." 
      },
      girl: { 
        stage: "Tanner Stage 5 (Full Adult Contour)", 
        green: "Normal: Mature breast contour (areola recessed to general contour), adult pubic hair extending to medial thighs.", 
        yellow: "Heavy flow or cycle irregularity beyond 2 years post-menarche.", 
        red: "🚨 Primary Amenorrhea Red Flag: Zero menstrual periods by age 15 regardless of secondary sexual characteristics." 
      }
    },
    green: { en: ["Adult physical proportions and endurance", "Plans long-term academic/career goals", "Demonstrates emotional self-regulation"], hi: ["वयस्क शारीरिक संरचना और सहनशक्ति", "दीर्घकालिक लक्ष्यों की योजना", "भावनात्मक आत्म-नियंत्रण"] }, 
    yellow: { en: ["Reversed sleep cycles (late nights)", "Sedentary lifestyle causing weight gain"], hi: ["उल्टा स्लीप चक्र (देर रात जागना)", "गतिहीन जीवनशैली से वजन बढ़ना"] }, 
    red: { en: ["Clinical depression, self-harm signs, or eating disorders (anorexia/bulimia)"], hi: ["चिकित्सीय अवसाद (Clinical Depression), खान-पान के विकार (Eating Disorders)"] }, 
    parentTips: { nutrition: { en: "Provide brain-healthy Omega-3 fats (walnuts, flaxseeds) and light nutritious meals.", hi: "परीक्षा की तैयारी के दौरान ओमेगा-3 (अखरोट, अलसी) और सुपाच्य पौष्टिक भोजन दें।" }, safety: { en: "Zero tolerance for underage two-wheeler or four-wheeler driving.", hi: "अल्पायु में वाहन (स्कूटर/कार) चलाने पर पूर्ण प्रतिबंध रखें।" }, play: { en: "Engage in competitive sports, running, or intellectual challenges.", hi: "दौड़, खेलकूद, बौद्धिक चुनौतियां।" }, care: { en: "Prioritize 8 hours of uninterrupted sleep for neurological consolidation.", hi: "8 घंटे की निर्बाध रात की नींद सुनिश्चित करें।" } } 
  },
  "16y": { 
    name: { en: "16 Years (Tanner 5 / Adult Maturity)", hi: "16 वर्ष (Tanner 5 / पूर्ण परिपक्वता)" }, 
    iap: { boy: { minW: 49.0, maxW: 77.0, minH: 165, maxH: 182 }, girl: { minW: 46.0, maxW: 71.0, minH: 153, maxH: 170 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 5 (Mature Adult)", green: "Adult genital size and pubic hair distribution extending to umbilicus.", yellow: "Continued slow height gain (epiphyses fusing).", red: "🚨 Testicular atrophy or loss of acquired secondary sexual traits." },
      girl: { stage: "Tanner Stage 5 (Mature Adult)", green: "Full adult reproductive maturity and height stabilization.", yellow: "Dysmenorrhea or premenstrual syndromic symptoms.", red: "🚨 Secondary amenorrhea (cessation of menses for >3 consecutive cycles)." }
    },
    green: { en: ["Near adult height achieved in girls; boys continue muscle building", "Focused career goals and intellectual maturity", "Mature social empathy and responsibility"], hi: ["बालिकाओं में पूर्ण वयस्क कद; बालकों में मांसपेशियों का विकास", "करियर के प्रति स्पष्टता", "सामाजिक जिम्मेदारी की भावना"] }, 
    yellow: { en: ["Exam stress triggering somatization (headache, acidity)", "Poor study posture"], hi: ["परीक्षा के तनाव से सिरदर्द या एसिडिटी", "पढ़ाई के दौरान बैठने की गलत मुद्रा (Poor Posture)"] }, 
    red: { en: ["Severe clinical depression or complete social withdrawal"], hi: ["गंभीर मानसिक तनाव या पूर्ण सामाजिक अलगाव"] }, 
    parentTips: { nutrition: { en: "Ensure zinc, iron, and multivitamins via whole sprouts, nuts, and dairy.", hi: "अंकुरित अनाज, मेवे और डेयरी उत्पादों से आयरन, जिंक और मल्टीविटामिन दें।" }, safety: { en: "Provide non-judgmental emotional support. Listen for 15 mins daily without lecturing.", hi: "प्रतिदिन 15 मिनट बिना किसी भाषण या आलोचना के बच्चे की बात सुनें।" }, play: { en: "Trekking, gym workouts with proper form, swimming, or sports leagues.", hi: "ट्रेकिंग, तैराकी, बैडमिंटन, जिम व्यायाम।" }, care: { en: "Ensure ergonomic chair and desk setup to protect the spine during long study hours.", hi: "रीढ़ की सुरक्षा के लिए एर्गोनॉमिक अध्ययन टेबल व कुर्सी की व्यवस्था करें।" } } 
  },
  "17y": { 
    name: { en: "17 Years (Tanner 5)", hi: "17 वर्ष (Tanner 5)" }, 
    iap: { boy: { minW: 53.0, maxW: 81.0, minH: 168, maxH: 184 }, girl: { minW: 48.0, maxW: 73.0, minH: 154, maxH: 171 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 5", green: "Full biological adult stature and male secondary sexual characteristics.", yellow: "Metabolic strain from exam stress.", red: "🚨 Severe hormone or endocrine deficits." },
      girl: { stage: "Tanner Stage 5", green: "Full biological adult stature and regular menstrual cycles.", yellow: "Stress-induced cycle delays.", red: "🚨 Persistent oligomenorrhea or severe clinical hirsutism." }
    },
    green: { en: ["Full biological maturity", "Independent career preparation and critical thinking", "Healthy social adaptation"], hi: ["पूर्ण जैविक परिपक्वता", "स्वतंत्र करियर तैयारी और आलोचनात्मक सोच", "स्वस्थ सामाजिक अनुकूलन"] }, 
    yellow: { en: ["Chronic study-induced sleep deprivation", "Lack of regular physical exercise"], hi: ["पढ़ाई के दबाव से नींद की कमी", "शारीरिक व्यायाम का पूर्ण अभाव"] }, 
    red: { en: ["Severe panic attacks, clinical depression requiring medical care"], hi: ["गंभीर पैनिक अटैक, अवसाद"] }, 
    parentTips: { nutrition: { en: "Hydration and fresh fruits; restrict high caffeine/energy drink intake.", hi: "पर्याप्त पानी, ताजे फल दें; देर रात की पढ़ाई में कैफीन/कॉफी सीमित रखें।" }, safety: { en: "Encourage mindfulness and deep-breathing techniques for entrance exam stress.", hi: "प्रतियोगी परीक्षाओं के तनाव के लिए माइंडफुलनेस और प्राणायाम सिखाएं।" }, play: { en: "Maintain healthy social circles and weekend recreational games.", hi: "सप्ताहांत पर खेलकूद और सकारात्मक मित्र मंडली।" }, care: { en: "Provide reassurance and mental health support during competitive exam phases.", hi: "प्रतियोगी परीक्षा के तनाव में भावनात्मक संबल प्रदान करें।" } } 
  },
  "18y": { 
    name: { en: "18 Years (Tanner 5 / Full Maturity)", hi: "18 वर्ष (Tanner 5 / वयस्कता)" }, 
    iap: { boy: { minW: 56.0, maxW: 84.0, minH: 170, maxH: 186 }, girl: { minW: 49.0, maxW: 75.0, minH: 154, maxH: 172 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 5 (Full Adult Maturation)", green: "Complete epiphyseal fusion and adult biological stature.", yellow: "Postural backache from sedentary study hours.", red: "🚨 Testicular pain, swelling, or endocrine decompensation." },
      girl: { stage: "Tanner Stage 5 (Full Adult Maturation)", green: "Complete epiphyseal fusion and adult biological stature.", yellow: "Postural backache or stress.", red: "🚨 Persistent menstrual abnormalities or hormonal imbalance." }
    },
    green: { en: ["Full adult biological maturity", "Readiness for college, career, and independent life", "Responsible personal health and nutrition habits"], hi: ["पूर्ण वयस्क परिपक्वता", "कॉलेज व करियर के लिए तत्परता", "जिम्मेदार स्वास्थ्य और जीवनशैली प्रबंधन"] }, 
    yellow: { en: ["Metabolic lifestyle strain", "Unmanaged stress during adulthood transition"], hi: ["जीवनशैली तनाव, पीठ दर्द"] }, 
    red: { en: ["Severe clinical psychiatric disorders or substance dependence"], hi: ["गंभीर मनोरोग या लत की समस्या"] }, 
    parentTips: { nutrition: { en: "Establish lifelong healthy habits: Low sugar, high fiber, wholesome whole foods.", hi: "आजीवन स्वस्थ खान-पान: कम चीनी, उच्च फाइबर, संतुलित आहार।" }, safety: { en: "Safe driving responsibility, legal rights awareness, and health insurance basics.", hi: "जिम्मेदार नागरिक चेतना, सुरक्षित ड्राइविंग और स्वास्थ्य बीमा की समझ।" }, play: { en: "Establish a lifelong physical exercise routine (gym, running, yoga).", hi: "आजीवन फिटनेस दिनचर्या (दौड़, योग, खेल)।" }, care: { en: "Smooth transition from pediatric care to adult medical consultation.", hi: "बाल चिकित्सा से वयस्क चिकित्सा परामर्श में सहज बदलाव।" } } 
  }
};

// ==========================================
// 2. BLOG ARTICLES DATA
// ==========================================
const blogArticles = {
  iapSchedule: {
    title: "IAP Recommended Immunization Schedule",
    content: `
      <p><strong>Indian Academy of Pediatrics (IAP) Vaccination Chart:</strong> This age-wise vaccination schedule serves as an essential reference guide for parents to ensure timely immunization against preventable diseases.</p>
      
      <table class="vaccine-table">
        <thead>
          <tr>
            <th>Age</th>
            <th>Recommended Vaccines</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>At Birth</strong></td>
            <td>BCG, OPV 0, Hepatitis B (1st dose)</td>
          </tr>
          <tr>
            <td><strong>6 Weeks</strong></td>
            <td>DTwP / DTaP 1, IPV 1, Hep B 2, Hib 1, Rotavirus 1, PCV 1</td>
          </tr>
          <tr>
            <td><strong>10 Weeks</strong></td>
            <td>DTwP / DTaP 2, IPV 2, Hib 2, Rotavirus 2, PCV 2</td>
          </tr>
          <tr>
            <td><strong>14 Weeks</strong></td>
            <td>DTwP / DTaP 3, IPV 3, Hib 3, Rotavirus 3, PCV 3</td>
          </tr>
          <tr>
            <td><strong>6 Months</strong></td>
            <td>Influenza (1st Dose), Hepatitis B 3</td>
          </tr>
          <tr>
            <td><strong>7 Months</strong></td>
            <td>Influenza (2nd Dose)</td>
          </tr>
          <tr>
            <td><strong>6 - 9 Months</strong></td>
            <td>Typhoid Conjugate Vaccine</td>
          </tr>
          <tr>
            <td><strong>9 Months</strong></td>
            <td>MMR 1 (Measles, Mumps, Rubella)</td>
          </tr>
          <tr>
            <td><strong>12 Months</strong></td>
            <td>Hepatitis A (1st Dose)</td>
          </tr>
          <tr>
            <td><strong>15 Months</strong></td>
            <td>MMR 2, Varicella (Chickenpox 1st Dose), PCV Booster</td>
          </tr>
          <tr>
            <td><strong>16 - 18 Months</strong></td>
            <td>DTwP / DTaP Booster 1, IPV Booster 1, Hib Booster</td>
          </tr>
          <tr>
            <td><strong>18 - 19 Months</strong></td>
            <td>Hepatitis A (2nd Dose), Varicella 2</td>
          </tr>
          <tr>
            <td><strong>4 - 6 Years</strong></td>
            <td>DTwP / DTaP Booster 2, IPV Booster 2, MMR 3</td>
          </tr>
          <tr>
            <td><strong>10 - 12 Years</strong></td>
            <td>Tdap / Td, HPV (for girls & boys)</td>
          </tr>
        </tbody>
      </table>
      <br>
      <p style="font-size: 0.88rem; color: #64748b;"><em>Note: Annual Influenza (flu) vaccines are recommended every year up to 5 years of age. Please consult Dr. Dinesh Mittal for individual catch-up schedules or specialized vaccines.</em></p>
      
      <div class="article-cta-box">
        <p style="font-weight: 600; color: #0c4a6e;">Need to check your child's vaccination status?</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Book Vaccination Consultation</button>
      </div>
    `
  },
  blog1: {
    title: "Understanding Painless vs Painful Vaccines for Babies",
    content: `
      <p>When scheduling your baby's vaccination, you will often be given the choice between "painless" (DTaP) and "painful" (DTwP) vaccines. Understanding the key clinical differences helps parents choose with confidence.</p>
      
      <h4 class="article-section-title">1. Painful Vaccine (DTwP - Whole Cell Pertussis)</h4>
      <p>• Contains whole inactivated pertussis bacteria.<br>
      • Provides robust, long-lasting immunity against Diphtheria, Tetanus, and Pertussis.<br>
      • Common Side Effects: Often causes moderate fever, swelling at the injection site, and fussiness for 24-48 hours.</p>
      
      <h4 class="article-section-title">2. Painless Vaccine (DTaP - Acellular Pertussis)</h4>
      <p>• Contains only specific purified protein components of the pertussis bacteria.<br>
      • Provides strong protection while significantly minimizing post-vaccination side effects.<br>
      • Advantage: Very low incidence of post-shot fever and pain, making it gentler for sensitive infants.</p>
      
      <h4 class="article-section-title">Pediatric Guidance from Dr. Dinesh Mittal</h4>
      <p>Both vaccine options are safe, effective, and approved by the Indian Academy of Pediatrics (IAP). If your baby has a history of high fever convulsions or severe discomfort, the painless option may be recommended. Visit our Sector 3 Rohini clinic to discuss the best choice for your baby.</p>

      <div class="article-cta-box">
        <p style="font-weight: 600; color: #0c4a6e;">Have questions about your baby's next shot?</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Consult Dr. Dinesh Mittal</button>
      </div>
    `
  },
  blog2: {
    title: "Essential Newborn Care Tips for First-Time Parents",
    content: `
      <p>Bringing your newborn home is an exciting milestone, but first-time parents often feel overwhelmed by daily care routines. Here are vital pediatrician-approved guidelines for the first 30 days:</p>
      
      <h4 class="article-section-title">1. Umbilical Cord Stump Care</h4>
      <p>• Keep the stump clean, dry, and exposed to air.<br>
      • Avoid applying alcohol, antiseptic powders, or oils unless prescribed.<br>
      • The stump usually dries up and falls off naturally within 7 to 14 days.</p>
      
      <h4 class="article-section-title">2. Feeding & Hydration</h4>
      <p>• Feed on demand, typically every 2 to 3 hours (8–12 times per day).<br>
      • Exclusive breastfeeding is recommended for the first 6 months. Do not give plain water or honey to newborns.</p>
      
      <h4 class="article-section-title">3. Proper Sleep & Temperature Management</h4>
      <p>• Always place your baby on their back to sleep on a firm, flat mattress free of loose blankets or heavy pillows.<br>
      • Dress the baby in one extra layer of clothing relative to adults to maintain ideal body warmth.</p>
      
      <h4 class="article-section-title">When to Contact Our Clinic Immediately</h4>
      <p>Seek prompt medical attention if you observe a fever above 100.4°F, persistent refusal to feed, yellowing of skin or eyes (jaundice), or severe lethargy.</p>

      <div class="article-cta-box">
        <p style="font-weight: 600; color: #0c4a6e;">Schedule your newborn's routine health checkup:</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Book Newborn Checkup</button>
      </div>
    `
  },
  blog3: {
    title: "How to Safely Manage High Fever in Toddlers at Home",
    content: `
      <p>A sudden fever in a toddler can be alarming, but fever itself is a natural, healthy immune response helping your child fight off an infection. Here is how to manage it safely:</p>
      
      <h4 class="article-section-title">1. Keep Your Child Hydrated</h4>
      <p>Offer frequent small sips of water, ORS solutions, clear soups, coconut water, or milk. Hydration is key to preventing fatigue and complications during fever.</p>
      
      <h4 class="article-section-title">2. Lukewarm Sponge Bathing</h4>
      <p>• If the temperature rises above 101°F and the child is uncomfortable, sponge their body with lukewarm (not cold) water for 10–15 minutes.<br>
      • Avoid ice water or cold baths, as shivering actually raises internal body temperature.</p>
      
      <h4 class="article-section-title">3. Safe Medication Practices</h4>
      <p>• Administer Paracetamol only in the exact dosage prescribed for your child’s body weight by your pediatrician.<br>
      • Never give aspirin or unprescribed adult antipyretics to toddlers.</p>
      
      <h4 class="article-section-title">Warning Signs Requiring Urgent Medical Evaluation</h4>
      <p>Visit Dr. Dinesh Mittal immediately if the fever persists for more than 3 consecutive days, or if your child exhibits difficulty breathing, extreme drowsiness, stiff neck, or vomiting everything they drink.</p>

      <div class="article-cta-box">
        <p style="font-weight: 600; color: #0c4a6e;">If fever persists beyond 48-72 hours, get expert care:</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Schedule Doctor Visit</button>
      </div>
    `
  },
  blog4: {
    title: "Monsoon Influenza in Delhi: Parent Guide",
    content: `
      <p>Monsoon weather in Delhi brings welcome relief from summer heat, but high humidity and temperature drops also lead to a seasonal spike in viral influenza infections among children.</p>
      
      <h4 class="article-section-title">Key Symptoms of Seasonal Flu</h4>
      <p>• Sudden high fever with chills.<br>
      • Dry cough, sore throat, or nasal congestion.<br>
      • Marked body fatigue, muscle pain, and appetite loss.<br>
      • Occasional stomach pain, vomiting, or loose stools in younger toddlers.</p>
      
      <h4 class="article-section-title">Essential Home Precautions</h4>
      <p><strong>1. Hand Hygiene:</strong> Teach kids to wash hands with soap for at least 20 seconds before eating and after returning from school.<br>
      <strong>2. Yearly Flu Vaccination:</strong> The annual influenza vaccine provides strong defense against circulating seasonal strains and is recommended for children above 6 months.<br>
      <strong>3. Stay Rested at Home:</strong> Keep sick children home from school or day care until they have been fever-free for at least 24 hours to prevent spreading viral germs.</p>
      
      <h4 class="article-section-title">When to Seek Medical Attention</h4>
      <p>Consult Dr. Dinesh Mittal if fever remains high after 3 days, if your child develops rapid or wheezing breathing, or shows signs of severe dehydration (dry lips, crying without tears, or low urine output).</p>

      <div class="article-cta-box">
        <p style="font-weight: 600; color: #0c4a6e;">Protect your child with the yearly seasonal flu shot:</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Book Flu Vaccination</button>
      </div>
    `
  }
};
