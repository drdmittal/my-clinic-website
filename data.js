// ==========================================================
// CLINIC DATA FILE (data.js)
// Contains: Growth Milestones, Tanner Puberty, FAQs & Blog Articles
// ==========================================================

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
      nutrition: { en: "Exclusive Breastfeeding on demand (every 2-3 hours, 8-12 times a day). Never give plain water, honey, ghutti, or animal milk. Administer Vitamin D3 drops (400 IU) daily.", hi: "मांग अनुसार केवल माँ का दूध (हर 2-3 घंटे में)। पानी, शहद, घुट्टी या गाय/भैंस का दूध बिल्कुल न दें। विटामिन D3 ड्रॉप्स (400 IU) प्रतिदिन नियमित दें।" },
      safety: { en: "Always place baby on their back to sleep on a flat, firm mattress (SIDS prevention). Never leave baby unattended on high beds/sofas. Keep umbilical cord dry and exposed to air.", hi: "शिशु को हमेशा पीठ के बल सुलाएं। बिस्तर या सोफे पर अकेला न छोड़ें (गिरने का खतरा)। गर्भनाल (Umbilical Cord) को सूखा व साफ रखें।" },
      play: { en: "Skin-to-skin Kangaroo Mother Care (KMC) promotes bonding and temperature control. Talk gently and make calm face-to-face eye contact.", hi: "शिशु को सीने से लगाकर कंगारू मदर केयर (KMC) दें। प्यार भरी आवाज में बात करें और नजरें मिलाएं।" },
      care: { en: "Birth Vaccines: BCG, OPV-0, and Hepatitis B (1st dose) at birth. Clean cord with dry cotton; no oils or kajal in eyes/ears. Burp baby after every feed.", hi: "जन्म के टीके: BCG, OPV 0, और हेपेटाइटिस-बी 1st डोज। हर बार दूध पिलाने के बाद डकार (Burp) दिलाएं। आंखों में काजल या कान में तेल न डालें।" }
    }
  },
  "3m": {
    name: { en: "3 Months", hi: "3 माह (3 Months)" },
    iap: { boy: { minW: 5.0, maxW: 7.2, minH: 57, maxH: 63 }, girl: { minW: 4.5, maxW: 6.8, minH: 56, maxH: 62 } },
    green: { en: ["Holds head steady when supported upright", "Responsive social smile to parents", "Follows moving objects with eyes past midline", "Makes cooing and gurgling sounds"], hi: ["गोदी में सीधा पकड़ने पर गर्दन संभालना शुरू करता है", "माता-पिता को देखकर मुस्कुराता है (Social Smile)", "चलती हुई वस्तुओं या चेहरों को आँखों से देखता है", "हल्की आवाजें (कुइंग / Cooing) निकालता है"] },
    yellow: { en: ["Partial head lag still present when pulled to sit", "Inconsistent response to sounds or voices"], hi: ["गर्दन अभी भी पीछे की ओर झुकती है", "आवाज या चेहरे पर ध्यान नहीं देता"] },
    red: { en: ["Complete head lag; cannot lift head in tummy time", "Does not smile at voices or faces", "Does not visually fixate or track moving light"], hi: ["गर्दन बिल्कुल नहीं ठहरा पाता (Head Lag)", "मुस्कुराता बिल्कुल नहीं है", "रोशनी या चेहरे की ओर ध्यान केंद्रित नहीं करता"] },
    parentTips: {
      nutrition: { en: "Exclusive breastfeeding or formula milk only. No water, ghutti, or animal milk. Give 400 IU Vitamin D3 drops daily.", hi: "केवल माँ का दूध अथवा फॉर्मूला दूध। पानी, घुट्टी या शहद बिल्कुल न दें। विटामिन D3 ड्रॉप्स (400 IU) प्रतिदिन नियमित दें।" },
      safety: { en: "Never leave baby unattended on elevated beds or sofas (fall risk). Always place on back to sleep.", hi: "शिशु को ऊंचे बिस्तर या सोफे पर कभी अकेला न छोड़ें (गिरने का खतरा)। हमेशा पीठ के बल सुलाएं।" },
      play: { en: "Provide 5-10 minutes of supervised Tummy Time daily. Talk and make eye contact frequently.", hi: "प्रतिदिन 5-10 मिनट पेट के बल लिटाएं (Tummy Time)। आमने-सामने बातें करें।" },
      care: { en: "Avoid putting kajal in eyes or oil in ears/nose. Ensure 6, 10, and 14 week IAP vaccine visits.", hi: "आंखों में काजल या कान में तेल बिल्कुल न डालें। 6, 10, और 14 सप्ताह के नियमित टीके सुनिश्चित करें।" }
    }
  },
  "6m": {
    name: { en: "6 Months (Complementary Feeding Stage)", hi: "6 माह (ऊपरी आहार / Weaning अवस्था)" },
    iap: { boy: { minW: 6.5, maxW: 9.0, minH: 64, maxH: 70 }, girl: { minW: 5.8, maxW: 8.5, minH: 62, maxH: 68 } },
    green: { en: ["Rolls over front to back and back to front", "Sits with brief hand support (tripod posture)", "Transfers objects between hands", "Babbles consonant sounds ('ba-ba', 'da-da')"], hi: ["पेट के बल से पीठ पर और पलटता है (Rolls over)", "हाथों का सहारा लेकर बैठना शुरू करता है", "खिलौने को एक हाथ से दूसरे हाथ में पकड़ता है", "'बा-बा', 'दा-दा' जैसी ध्वनियाँ निकालता है"] },
    yellow: { en: ["Cannot roll over in both directions", "Does not reach for offered toys", "Tongue thrust reflex still preventing spoon feeding"], hi: ["दोनों तरफ करवट या पलटना नहीं कर पाता", "खिलौने पकड़ने के लिए हाथ आगे नहीं बढ़ाता", "चम्मच से खाना बाहर धकेलना"] },
    red: { en: ["Cannot sit even with support", "Persistently clenched fists / stiff posture", "Does not turn towards sound or name"], hi: ["सहारा देने पर भी बिल्कुल बैठ नहीं पाता", "शरीर बहुत अकड़ा हुआ रहता है", "नाम पुकारने या आवाज पर ध्यान नहीं देता"] },
    parentTips: {
      nutrition: { en: "Start Complementary Feeding alongside breastfeeding. Begin with 1-2 meals/day (2-3 spoons, gradually increasing). Start with single-grain smooth purees: Yellow moong dal khichdi, mashed ripe banana, boiled apple puree, or sooji kheer (cooked in water or pumped breastmilk). Follow 3-day rule for new foods. Zero salt, sugar, honey, or animal milk before 1 year.", hi: "स्तनपान के साथ ऊपरी ठोस आहार शुरू करें। 1-2 चम्मच से शुरुआत करके धीरे-धीरे मात्रा बढ़ाएं। मूंग दाल की पतली खिचड़ी, मसला केला, उबला सेब प्यूरी, सूजी की खीर दें। नई चीज शुरू करते समय 3 दिन का नियम अपनाएं। 1 वर्ष तक नमक, चीनी, शहद या गाय का दूध बिल्कुल न दें।" },
      safety: { en: "Keep small choking hazards away. Do not use baby walkers (fall and injury risk). Ensure baby is seated upright during feeding.", hi: "सिक्के, बटन, सेल जैसी छोटी चीजें दूर रखें। बेबी वॉकर का इस्तेमाल बिल्कुल न करें। खाना हमेशा बैठाकर खिलाएं।" },
      play: { en: "Place toys just out of reach to encourage reaching. Play interactive games like peek-a-boo.", hi: "रंग-बिरंगे खिलौने सामने रखें। 'आंख-मिचौली' (Peek-a-boo) खेलें।" },
      care: { en: "Clean emerging milk teeth with soft silicone brush. Administer 6-month Influenza (Flu-1) shot and Hepatitis B-3 as per IAP.", hi: "पहला दांत निकलने पर मुलायम ब्रश से सफाई करें। IAP अनुसार 6 माह पर इन्फ्लूएंजा (Flu-1) व हेपेटाइटिस-बी 3 टीका लगवाएं।" }
    }
  },
  "9m": {
    name: { en: "9 Months", hi: "9 माह (9 Months)" },
    iap: { boy: { minW: 7.5, maxW: 10.2, minH: 68, maxH: 74 }, girl: { minW: 6.8, maxW: 9.8, minH: 66, maxH: 73 } },
    green: { en: ["Sits steadily without any support", "Crawls on hands and knees", "Picks up small objects with thumb and index finger", "Responds to own name and understands 'No'"], hi: ["बिना सहारे स्वतंत्र रूप से बैठता है", "घुटनों के बल रेंगता (Crawling) है", "अंगूठे और उंगली से छोटी वस्तुएं उठाता है (Pincer grasp)", "अपना नाम पहचानता है"] },
    yellow: { en: ["Needs support to maintain sitting balance", "Infrequent or limited vocal babbling"], hi: ["बिना सहारे बैठने में संतुलन नहीं बना पाता", "हाथों से वस्तुओं को नहीं पकड़ता"] },
    red: { en: ["Cannot sit independently", "Cannot bear weight on legs when supported", "Shows no joyful recognition of parents"], hi: ["अकेले बैठ नहीं पाता", "पैरों पर वजन नहीं डाल पाता", "माता-पिता को देखकर पहचान या प्रसन्नता नहीं दिखाता"] },
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
    green: { en: ["Cruises holding furniture / stands briefly alone", "Says 1-2 meaningful words ('Mama', 'Papa')", "Waves bye-bye and claps hands", "Points to objects with index finger"], hi: ["फर्नीचर पकड़कर चलता है (Cruising) या कुछ कदम अकेला खड़ा होता है", "1-2 सार्थक शब्द बोलता है ('मम्मा', 'पापा')", "हाथ हिलाकर 'बाय-बाय' और ताली बजाता है", "उंगली से किसी वस्तु की ओर इशारा करता है"] },
    yellow: { en: ["Does not pull to stand with furniture", "Does not imitate simple gestures", "No single meaningful words spoken"], hi: ["सहारा लेकर खड़ा नहीं होता", "हाथ हिलाने या ताली बजाने की नकल नहीं करता", "कोई सार्थक शब्द नहीं बोलता"] },
    red: { en: ["Cannot crawl or bear weight", "Does not point or use gestures", "Loss of previously acquired vocal/motor skills"], hi: ["खड़े होने का प्रयास नहीं करता", "इशारा करके कुछ नहीं मांगता", "पहले सीखे हुए शब्द या गतिविधियां भूलने लगा है"] },
    parentTips: {
      nutrition: { en: "Offer standard family food (mild spices). 3 meals + 2 healthy snacks. Cow's milk acceptable (max 400ml/day).", hi: "घर का बना सामान्य भोजन (कम मिर्च-मसाला) दें। दिन में 3 मुख्य भोजन + 2 पौष्टिक स्नैक्स। गाय का दूध शुरू कर सकते हैं (अधिकतम 400ml/दिन)।" },
      safety: { en: "Keep hot beverages, irons, and sharp utensils away from counter edges (burn prevention).", hi: "गर्म चाय, कुकर, इस्त्री और नुकीली वस्तुएं टेबल के किनारों से दूर रखें।" },
      play: { en: "Read simple picture board books together. Practice rolling and throwing soft balls.", hi: "चित्रों वाली किताबें दिखाकर वस्तुओं के नाम बताएं। गेंद फेंकने और पकड़ने का खेल खेलें।" },
      care: { en: "IAP Immunization: Administer Hepatitis A (1st Dose) at 12 months.", hi: "IAP टीकाकरण: 12 माह पर हेपेटाइटिस-ए (Hepatitis-A Dose 1) टीका लगवाएं।" }
    }
  },
  "18m": {
    name: { en: "18 Months (1.5 Years)", hi: "18 माह / 1.5 वर्ष (18 Months)" },
    iap: { boy: { minW: 9.8, maxW: 13.2, minH: 79, maxH: 87 }, girl: { minW: 9.2, maxW: 12.6, minH: 77, maxH: 86 } },
    green: { en: ["Walks steadily and runs independently", "Speaks 6 to 10 clear words", "Stacks 2-3 blocks and scribbles", "Uses spoon with minimal spilling"], hi: ["बिना सहारे स्वतंत्र रूप से दौड़ता और चलता है", "कम से कम 6 से 10 स्पष्ट शब्द बोलता है", "2-3 खिलौना ब्लॉक एक के ऊपर एक रखता है", "चम्मच से स्वयं खाना खाने का प्रयास करता है"] },
    yellow: { en: ["Unsteady gait with frequent falls", "Speaks fewer than 4 clear words", "Rarely imitates household actions"], hi: ["चलते समय बहुत लड़खड़ाता है", "4 से कम शब्द बोलता है", "दैनिक कार्यों की नकल नहीं करता"] },
    red: { en: ["Cannot walk independently", "No spoken words or communicative gestures", "Does not understand simple 1-step verbal commands"], hi: ["स्वतंत्र रूप से चल नहीं पाता", "कोई सार्थक शब्द नहीं बोलता", "सरल निर्देश ('पापा को गेंद दो') नहीं समझता"] },
    parentTips: {
      nutrition: { en: "Focus on iron-rich foods (spinach, lentils, eggs, dates). Avoid packaged juices and chips.", hi: "आयरन युक्त आहार दें: पालक, चना, चुकंदर, दालें, अंडा। पैकेट वाले जूस, चिप्स और चॉकलेट से दूर रखें।" },
      safety: { en: "Keep all medications and cleaning chemicals locked. Secure balcony railings and windows.", hi: "दवाइयां और फिनाइल लॉक वाली अलमारी में रखें। बालकनी की रेलिंग पर जाली लगवाएं।" },
      play: { en: "Encourage drawing with large crayons and stacking blocks. Provide daily outdoor park play.", hi: "ब्लॉक जोड़ना और रंग भरने के लिए क्रेयॉन दें। प्रतिदिन पार्क में खेल खिलाएं।" },
      care: { en: "IAP Immunization: Administer MMR-2, Varicella-1 (15M) and DPT Booster-1, IPV Booster-1, Hib Booster (16-18M).", hi: "IAP टीकाकरण: 15 माह पर छूटे MMR-2/Varicella-1 तथा 16-18 माह पर DPT बूस्टर-1, IPV बूस्टर-1, Hib बूस्टर लगवाएं।" }
    }
  },
  "24m": {
    name: { en: "24 Months (2 Years)", hi: "24 माह / 2 वर्ष (24 Months)" },
    iap: { boy: { minW: 10.8, maxW: 14.8, minH: 83, maxH: 93 }, girl: { minW: 10.2, maxW: 14.2, minH: 82, maxH: 92 } },
    green: { en: ["Runs well and kicks a ball forward", "Speaks 2-word spontaneous phrases ('Drink milk')", "Follows 2-step instructions and builds tower of 4-6 blocks"], hi: ["दौड़ता है और गेंद को किक करता है", "2 शब्दों के वाक्य बोलता है ('दूध दो', 'पार्क चलो')", "4 से 6 ब्लॉकों की मीनार बनाता है", "दो चरणों वाले निर्देश समझता है"] },
    yellow: { en: ["Speaks only single words (no phrases)", "Does not engage in simple pretend play"], hi: ["केवल एकल शब्द बोलता है, 2 शब्द नहीं जोड़ पाता", "अन्य बच्चों के साथ खेलने में रुचि नहीं दिखाता"] },
    red: { en: ["Cannot run or jump", "No eye contact and fails to respond to name (Autism screening flag)"], hi: ["दौड़ या कूद नहीं पाता", "कोई 2 शब्दों का वाक्य नहीं बोलता", "आँखों में नहीं देखता (Eye Contact नहीं करता) और नाम पर ध्यान नहीं देता"] },
    parentTips: {
      nutrition: { en: "Promote self-feeding. Transition completely away from feeding bottles to open cups.", hi: "स्वयं खाने की आदत को बढ़ावा दें। दूध की बोतल बंद करके गिलास या कप से पीने की आदत डालें।" },
      safety: { en: "Keep buckets/washrooms closed (drowning prevention). Install door pinch guards.", hi: "बाथरूम में पानी की बाल्टी हमेशा ढक कर रखें। दरवाजों पर फिंगर गार्ड लगाएं।" },
      play: { en: "Engage in imaginative pretend play. Screen limit strictly under 15 minutes of video calls.", hi: "रोल-प्ले खेलें (डॉक्टर-सेट, किचन-सेट)। स्क्रीन समय अधिकतम 0-15 मिनट रखें।" },
      care: { en: "Initiate daytime potty training. Complete Hepatitis A Dose 2 as per IAP schedule.", hi: "दिन के समय पॉटी ट्रेनिंग का अभ्यास शुरू करें। हेपेटाइटिस-ए की दूसरी खुराक पूर्ण करें।" }
    }
  },
  "3y": { name: { en: "3 Years", hi: "3 वर्ष (3 Years)" }, iap: { boy: { minW: 12.5, maxW: 17.5, minH: 90, maxH: 101 }, girl: { minW: 12.0, maxW: 17.0, minH: 89, maxH: 100 } }, green: { en: ["Pedals tricycle and climbs stairs alternating feet", "Speaks 3-4 word sentences clearly", "Copies a circle and recognizes colors", "Daytime toilet control achieved"], hi: ["ट्राईसाइकिल चलाता है और सीढ़ियों पर चढ़ता है", "3-4 शब्दों के पूरे वाक्य बोलता है", "वृत्त (Circle) बनाता है", "दिन में शौच नियंत्रण सीख जाता है"] }, yellow: { en: ["Speech unclear to strangers (under 50%)", "Difficulty interacting with peers; cannot copy circle"], hi: ["बोली अस्पष्ट है", "सर्कल या गोला नहीं बना पाता"] }, red: { en: ["Cannot climb stairs or run", "Extreme separation anxiety or violent tantrums", "Frequent drooling/unintelligible speech"], hi: ["सीढ़ी चढ़ने में कठिनाई", "अत्यधिक गुस्सा", "लगातार लार टपकती रहती है"] }, parentTips: { nutrition: { en: "Do not force feed during picky eating phases. Offer nutrient-dense curd, paneer, and fruits.", hi: "जबरदस्ती न खिलाएं। थाली में पनीर, दही, ताजे फल शामिल करें।" }, safety: { en: "Teach basic road safety and introduce the concept of Safe vs Unsafe touch.", hi: "सड़क सुरक्षा और 'सुरक्षित स्पर्श व असुरक्षित स्पर्श' सिखाएं।" }, play: { en: "Introduce shape puzzles and coloring. Read a moral bedtime story every night.", hi: "पहेलियां और रंग भरने वाली पुस्तकें दें। हर रात कहानी सुनाएं।" }, care: { en: "Brush teeth twice daily with a pea-sized fluoridated toothpaste.", hi: "सुबह और रात सोने से पहले ब्रश कराएं।" } } },
  "4y": { name: { en: "4 Years", hi: "4 वर्ष (4 Years)" }, iap: { boy: { minW: 14.0, maxW: 20.0, minH: 97, maxH: 108 }, girl: { minW: 13.5, maxW: 19.5, minH: 96, maxH: 107 } }, green: { en: ["Hops on one foot and catches bounced ball", "Tells sequential stories and asks questions", "Draws a person with 2-4 body parts", "Dresses and buttons clothing with minimal help"], hi: ["एक पैर पर कूदता है और गेंद पकड़ता है", "छोटी कहानियां सुनाता है", "मानव आकृति में 3-4 अंग बनाता है", "बटन लगाना सीखता है"] }, yellow: { en: ["Significant stuttering in speech", "Struggles with buttons and zippers"], hi: ["बोलते समय हकलाता है", "बटन लगाने में असमर्थ"] }, red: { en: ["Cannot jump or throw ball overhand", "Ignores other children outside household"], hi: ["कूद नहीं पाता", "अन्य बच्चों को पूरी तरह अनदेखा करता है"] }, parentTips: { nutrition: { en: "Eliminate sugary soda and packed drinks. Provide calcium via dairy, sesame, and almonds.", hi: "कोल्ड ड्रिंक्स बंद करें। दूध, दही व बादाम दें।" }, safety: { en: "Enforce bicycle helmets and rear car seatbelts at all times.", hi: "कार में सीटबेल्ट और साइकिल पर हेलमेट अनिवार्य करें।" }, play: { en: "Pre-school rhymes and counting games. Screen time strictly under 30 mins/day.", hi: "प्री-स्कूल कविताएं सिखाएं। स्क्रीन समय 30 मिनट से कम रखें।" }, care: { en: "Administer IAP 4-6 Year Vaccines: DPT Booster-2, IPV-2, MMR-3, Varicella-2.", hi: "IAP अनुसार 4-6 वर्ष पर DPT बूस्टर-2, IPV बूस्टर-2, MMR-3 और Varicella-2 लगवाएं।" } } },
  "5y": { name: { en: "5 Years", hi: "5 वर्ष (5 Years)" }, iap: { boy: { minW: 15.5, maxW: 22.5, minH: 103, maxH: 115 }, girl: { minW: 15.0, maxW: 22.0, minH: 102, maxH: 114 } }, green: { en: ["Skips smoothly and balances on one foot for 5+ sec", "Speaks fluent sentences in past/future tense", "Copies triangles and writes name", "Understands game rules and cooperates"], hi: ["रस्सी कूदता है और संतुलन बनाता है", "स्पष्ट बातचीत करता है", "त्रिभुज बनाता है और नाम लिखता है", "नियम समझता है"] }, yellow: { en: ["Cannot sustain attention for 5 minutes", "Poor/awkward pencil grip"], hi: ["5 मिनट भी ध्यान केंद्रित नहीं कर पाता", "पेंसिल की पकड़ कमजोर है"] }, red: { en: ["Cannot state full name or follow 3-step directions", "Excessive violent aggression or social withdrawal"], hi: ["नाम और पता नहीं बता पाता", "अत्यधिक आक्रामक व्यवहार"] }, parentTips: { nutrition: { en: "Follow balanced plate: 50% veggies/salad, 25% protein, 25% whole grains.", hi: "संतुलित थाली: 50% सब्जी/सलाद, 25% प्रोटीन, 25% अनाज।" }, safety: { en: "Teach memorization of parent's phone number and home address.", hi: "माता-पिता का फोन नंबर याद करवाएं।" }, play: { en: "Play turn-taking board games (Ludo, Chess). Minimum 1 hour outdoor physical play.", hi: "बोर्ड गेम से धैर्य सिखाएं। प्रतिदिन 1 घंटा खेलकूद कराएं।" }, care: { en: "Complete routine vision and hearing screening prior to formal school admission.", hi: "स्कूल में प्रवेश से पूर्व आंखों और सुनने की जांच कराएं।" } } },
  "6y": { name: { en: "6 Years", hi: "6 वर्ष (6 Years)" }, iap: { boy: { minW: 17.0, maxW: 25.5, minH: 109, maxH: 122 }, girl: { minW: 16.5, maxW: 25.0, minH: 108, maxH: 121 } }, green: { en: ["Rides 2-wheel bicycle", "Reads simple phonics and writes full name", "Understands days, weeks, and basic time"], hi: ["साइकिल चला लेता है", "सरल शब्द पढ़ता-लिखता है", "समय समझता है"] }, yellow: { en: ["Struggles with simple 3-letter phonetic words", "Poor ball catching coordination"], hi: ["सरल शब्द पढ़ने में संघर्ष", "गेंद पकड़ने में तालमेल की कमी"] }, red: { en: ["Marked academic learning delay", "Severe uncontrolled behavioral outbursts"], hi: ["सीखने में गंभीर देरी", "अत्यधिक अनियंत्रित गुस्सा"] }, parentTips: { nutrition: { en: "Never skip breakfast. Include soaked almonds and walnuts daily.", hi: "नाश्ता कभी न छोड़ें। भीगे बादाम दें।" }, safety: { en: "Teach stranger safety and bus boarding precautions.", hi: "अपरिचितों से सुरक्षा सिखाएं।" }, play: { en: "Encourage structured sports (skating, swimming, martial arts).", hi: "खेलकूद को प्रोत्साहित करें।" }, care: { en: "Ensure proper brushing for erupting 6-year permanent molars.", hi: "दाढ़ के पक्के दांत निकलने पर ब्रशिंग पर ध्यान दें।" } } },
  "7y": { name: { en: "7 Years", hi: "7 वर्ष (7 Years)" }, iap: { boy: { minW: 19.0, maxW: 29.0, minH: 115, maxH: 128 }, girl: { minW: 18.5, maxW: 28.5, minH: 114, maxH: 127 } }, green: { en: ["Reads chapter books", "Ties shoelaces independently", "Follows sports rules and shows fair play"], hi: ["पुस्तकें पढ़ता है", "फीते स्वयं बांधता है", "नियमों का पालन करता है"] }, yellow: { en: ["Persistent reading or basic math difficulties", "Fine motor coordination deficits"], hi: ["गणित या पढ़ने में समस्या", "हाथ की गतिविधियों में कमजोरी"] }, red: { en: ["Extreme social isolation", "Severe phonics/reading regression"], hi: ["अलग-थलग रहना", "पढ़ने में गंभीर अक्षमता"] }, parentTips: { nutrition: { en: "Pack nutritious homemade tiffins instead of packaged snacks.", hi: "टिफिन में घर का बना पौष्टिक खाना दें।" }, safety: { en: "Enable parental controls on internet and gaming devices.", hi: "इंटरनेट पर पैरेंटल लॉक लगाएं।" }, play: { en: "Encourage creative hobbies: Drawing, music, Lego building.", hi: "रचनात्मक शौक विकसित करें।" }, care: { en: "Ensure school backpack weight does not exceed 10% of body weight.", hi: "स्कूल बैग का वजन 10% से कम हो।" } } },
  "8y": { 
    name: { en: "8 Years (Tanner 1 / Prepubertal)", hi: "8 वर्ष (Tanner 1 / पूर्व-किशोरावस्था)" }, 
    iap: { boy: { minW: 21.0, maxW: 33.0, minH: 120, maxH: 134 }, girl: { minW: 20.5, maxW: 32.5, minH: 119, maxH: 133 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 1 (Prepubertal)", green: "Normal Prepubertal: Testicular volume < 4 mL, no pubic or facial hair.", yellow: "Mild growth acceleration without genital enlargement.", red: "🚨 Precocious Puberty Alert: Testicular enlargement (>= 4 mL) before age 9 requires pediatric endocrine check." },
      girl: { stage: "Tanner Stage 1 (Prepubertal)", green: "Normal Prepubertal: No breast budding, no pubic hair.", yellow: "Isolated mild body odor without breast enlargement.", red: "🚨 Precocious Puberty Alert: Breast budding (Tanner 2) before age 8 requires endocrine workup." }
    },
    green: { en: ["Active in team sports", "Understands logical cause and effect", "Completes homework independently"], hi: ["खेलों में सक्रिय", "तार्किक सोच", "गृहकार्य स्वयं पूरा करता है"] }, 
    yellow: { en: ["Multi-subject academic decline", "Noticeable motor clumsiness"], hi: ["पढ़ाई का स्तर गिरना", "लड़खड़ाना"] }, 
    red: { en: ["Inability to form or sustain peer friendships", "Severe emotional regression"], hi: ["मित्र बनाने में असमर्थ", "व्यवहार में गिरावट"] }, 
    parentTips: { nutrition: { en: "Encourage 20 minutes morning sun exposure for Vitamin D.", hi: "धूप में 20 मिनट बिताएं।" }, safety: { en: "Mandatory helmet use during neighborhood cycling.", hi: "हेलमेट पहनकर साइकिल चलाने दें।" }, play: { en: "Team games (cricket, badminton, football) to foster resilience.", hi: "टीम खेल खिलाएं।" }, care: { en: "Enforce strict 1 hour non-academic screen limit per day.", hi: "स्क्रीन समय 1 घंटे तक सीमित करें।" } } 
  },
  "9y": { 
    name: { en: "9 Years (Tanner 1 - 2)", hi: "9 वर्ष (Tanner 1 - 2)" }, 
    iap: { boy: { minW: 23.0, maxW: 38.0, minH: 125, maxH: 140 }, girl: { minW: 22.5, maxW: 37.5, minH: 124, maxH: 139 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 1 (Prepubertal Baseline)", green: "Normal baseline growth. Early testicular enlargement begins at 9-11 years.", yellow: "Rapid unexplained height jump without sexual maturity signs.", red: "🚨 Enlarged penis with pubic hair before 9.5 years requires hormone check." },
      girl: { stage: "Tanner Stage 1 - 2 (Early Thelarche Window)", green: "Small breast buds under areola may normally appear (Tanner 2).", yellow: "Unilateral (single side) breast bud tenderness (normal variant).", red: "🚨 Rapid breast enlargement with vaginal bleeding requires immediate review." }
    },
    green: { en: ["Manages chores independently", "Strong physical endurance", "Forms close friendships"], hi: ["दैनिक कार्य स्वयं करता है", "शारीरिक सहनशक्ति", "गहरे मित्र बनाता है"] }, 
    yellow: { en: ["Short attention span", "Difficulty regulating anger"], hi: ["कम ध्यान", "अत्यधिक गुस्सा"] }, 
    red: { en: ["School refusal", "Severe anxiety"], hi: ["स्कूल जाने से मना करना", "अत्यधिक तनाव"] }, 
    parentTips: { nutrition: { en: "Offer healthy protein snacks: Roasted makhana, boiled eggs, chana, paneer.", hi: "भुने मखाने, चना, अंडा, पनीर दें।" }, safety: { en: "Set strict boundaries against voice-chatting with strangers online.", hi: "अजनबियों से ऑनलाइन बात न करने दें।" }, play: { en: "Hands-on science kits, gardening, and household chores.", hi: "विज्ञान प्रयोग किट दें।" }, care: { en: "Nurture self-esteem; avoid comparing academic marks.", hi: "अंकों की तुलना न करें।" } } 
  },
  "10y": { 
    name: { en: "10 Years (Tanner 2 / Early Puberty)", hi: "10 वर्ष (Tanner 2 / प्रारंभिक किशोरावस्था)" }, 
    iap: { boy: { minW: 25.5, maxW: 43.0, minH: 130, maxH: 146 }, girl: { minW: 25.0, maxW: 43.5, minH: 129, maxH: 146 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 2 (Pubertal Onset in Boys)", green: "Testicular enlargement (volume >= 4 mL), scrotum thins, sparse fine pubic hair.", yellow: "No visible changes yet (normal variation if testes < 4 mL).", red: "🚨 Marked gynecomastia with testicular pain." },
      girl: { stage: "Tanner Stage 2 - 3 (Thelarche & Adrenarche)", green: "Breast bud elevation (Tanner 2), sparse straight pubic hair, growth spurt begins.", yellow: "Unequal breast growth or localized tenderness (benign).", red: "🚨 Extreme short stature with no pubertal growth spurt by age 10." }
    },
    green: { en: ["Early pubertal growth onset", "Strong abstract reasoning", "Handles multi-step projects"], hi: ["शारीरिक विकास", "तार्किक सोच", "प्रोजेक्ट संभालता है"] }, 
    yellow: { en: ["Reading comprehension gap", "High anxiety during routine changes"], hi: ["समझने में कठिनाई", "घबराहट"] }, 
    red: { en: ["Severe mood disturbances, sudden academic failure"], hi: ["मूड स्विंग, अचानक गिरावट"] }, 
    parentTips: { nutrition: { en: "Increase iron-rich foods (spinach, jaggery, legumes) for growing girls.", hi: "गुड़, चना, पालक दें।" }, safety: { en: "Teach independent pedestrian crossing and basic fire safety.", hi: "सड़क पार करने के नियम सिखाएं।" }, play: { en: "Encourage endurance athletics, swimming, and cycling.", hi: "तैराकी और साइकिलिंग कराएं।" }, care: { en: "Administer IAP Tdap Booster and HPV Vaccine (for girls aged 9-14 years).", hi: "Tdap और HPV टीका लगवाएं।" } } 
  },
  "11y": { 
    name: { en: "11 Years (Tanner 2 - 3)", hi: "11 वर्ष (Tanner 2 - 3)" }, 
    iap: { boy: { minW: 28.0, maxW: 48.0, minH: 135, maxH: 152 }, girl: { minW: 28.0, maxW: 49.0, minH: 135, maxH: 153 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 2 - 3", green: "Testicular volume 6-10 mL, lengthening penis, darker curling pubic hair.", yellow: "Delayed growth acceleration compared to girls (normal, boys peak later).", red: "🚨 Undescended testicles or scrotal masses." },
      girl: { stage: "Tanner Stage 3 (Peak Height Velocity Window)", green: "Enlargement of breast mound and areola (Tanner 3), darker coarser pubic hair.", yellow: "Mild premenstrual mood sensitivity or acne.", red: "🚨 Severe hirsutism (excess facial hair) with cystic acne (PCOS screening indicator)." }
    },
    green: { en: ["Rapid adolescent growth spurt", "Moral values", "Values peer group collaboration"], hi: ["तीव्र विकास", "नैतिक मूल्य", "मित्रों को महत्व"] }, 
    yellow: { en: ["Body image insecurities", "Middle-school workload pressure"], hi: ["हीनभावना", "पढ़ाई का तनाव"] }, 
    red: { en: ["Extreme social withdrawal, persistent sadness"], hi: ["अकेलापन, लगातार उदासी"] }, 
    parentTips: { nutrition: { en: "Ensure adequate calcium and Vitamin D (milk, curd, ragi).", hi: "दूध, दही, रागी दें।" }, safety: { en: "Foster open communication regarding bullying or peer pressure.", hi: "बुलिंग के प्रति जागरूक करें।" }, play: { en: "Support debate clubs, competitive athletics, coding.", hi: "खेलकूद और कोडिंग सिखाएं।" }, care: { en: "Teach adolescent personal hygiene and daily skin care.", hi: "व्यक्तिगत स्वच्छता सिखाएं।" } } 
  },
  "12y": { 
    name: { en: "12 Years (Tanner 3 / Growth Spurt)", hi: "12 वर्ष (Tanner 3 / विकास गति)" }, 
    iap: { boy: { minW: 31.0, maxW: 54.0, minH: 140, maxH: 159 }, girl: { minW: 31.5, maxW: 55.0, minH: 141, maxH: 159 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 3", green: "Testicular volume 10-12 mL, voice cracking begins, rapid height velocity.", yellow: "Mild transient gynecomastia (breast swelling in boys is benign in ~50%).", red: "🚨 Testes remain < 4 mL with no sign of puberty by 12.5-13 years." },
      girl: { stage: "Tanner Stage 3 - 4 (Approaching Menarche)", green: "Areola forms secondary mound above breast (Tanner 4), adult-like pubic hair.", yellow: "Vaginal white discharge (physiological leukorrhea, normal before menarche).", red: "🚨 Zero breast budding by 12.5-13 years requires delayed puberty workup." }
    },
    green: { en: ["Secondary sexual characteristics", "Personal identity", "Organizes long-term sports"], hi: ["लैंगिक लक्षण", "व्यक्तिगत पहचान", "योजनाएं बनाता है"] }, 
    yellow: { en: ["Lack of academic motivation", "Late night phone use"], hi: ["रुचि खत्म होना", "फोन की लत"] }, 
    red: { en: ["Self-harm ideation, severe clinical anxiety"], hi: ["नुकसान के विचार, घबराहट"] }, 
    parentTips: { nutrition: { en: "Maintain 2.5-3L water intake daily. Limit fast food.", hi: "2.5-3 लीटर पानी पिलाएं।" }, safety: { en: "Charge smartphones outside the bedroom at night. Screen curfew 1 hr before bed.", hi: "फोन कमरे से बाहर रखें।" }, play: { en: "Encourage sports tournaments, musical instruments.", hi: "खेल और संगीत सिखाएं।" }, care: { en: "Educate girls about menstrual health and hygiene with compassion.", hi: "मासिक धर्म स्वच्छता समझाएं।" } } 
  },
  "13y": { 
    name: { en: "13 Years (Tanner 3 - 4 / Menarche Window)", hi: "13 वर्ष (Tanner 3 - 4 / मासिक धर्म अवस्था)" }, 
    iap: { boy: { minW: 35.0, maxW: 60.0, minH: 146, maxH: 166 }, girl: { minW: 35.5, maxW: 60.5, minH: 146, maxH: 164 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 3 - 4 (Peak Velocity Window in Boys)", green: "Testicular volume 12-15 mL, axillary hair, voice deepening, peak growth velocity.", yellow: "Acne breakouts on face/back due to androgen surge.", red: "🚨 Complete absence of pubertal onset by 13.5-14 years (Delayed Puberty Alert)." },
      girl: { stage: "Tanner Stage 4 (Menarche Typically Occurs)", green: "Menarche typically occurs 2-2.5 years after thelarche (average 12.5-13.5y).", yellow: "Irregular menstrual cycles in first 1-2 years after menarche (normal).", red: "🚨 Delayed Puberty Alert: Zero breast development by age 13 requires endocrine check." }
    },
    green: { en: ["Major growth spurt in height and mass", "Abstract reasoning", "Strong career interests"], hi: ["तीव्र वृद्धि", "उन्नत सोच", "करियर में रुचि"] }, 
    yellow: { en: ["Academic drop, chronic tiredness", "Erratic dietary patterns"], hi: ["थकान, खान-पान की खराबी"] }, 
    red: { en: ["Substance exposure risk, clinical depression"], hi: ["धूम्रपान जोखिम, अवसाद"] }, 
    parentTips: { nutrition: { en: "Nutrient-dense home cooked meals with 1g/kg protein intake.", hi: "1 ग्राम/किग्रा प्रोटीन दें।" }, safety: { en: "Empower teens to resist peer pressure regarding smoking/vaping.", hi: "गलत संगत से बचाएं।" }, play: { en: "Structured sports, supervised fitness training.", hi: "प्रतियोगी खेल खिलाएं।" }, care: { en: "Listen empathetically like a trusted mentor; avoid frequent criticism.", hi: "दोस्त की तरह बात करें।" } } 
  },
  "14y": { 
    name: { en: "14 Years (Tanner 4 / Peak Height Velocity)", hi: "14 वर्ष (Tanner 4 / तीव्रतम विकास)" }, 
    iap: { boy: { minW: 39.0, maxW: 66.0, minH: 153, maxH: 173 }, girl: { minW: 39.5, maxW: 65.0, minH: 150, maxH: 167 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 4 (Peak Growth & Voice Break)", green: "Testicular volume 15-20 mL, adult scrotum skin, facial hair on upper lip.", yellow: "Persistent voice cracking and nocturnal emissions (wet dreams - normal).", red: "🚨 Delayed Puberty Alert: Zero testicular enlargement by age 14 requires evaluation." },
      girl: { stage: "Tanner Stage 4 - 5", green: "Established menstrual cycle, adult breast contour, deceleration of linear height growth.", yellow: "Mild period cramps (dysmenorrhea).", red: "🚨 Primary Amenorrhea Alert: No menstruation despite normal breasts for >3 years." }
    },
    green: { en: ["Peak height velocity in boys; voice deepening", "Mature decision making", "High sports coordination"], hi: ["आवाज में भारीपन", "परिपक्व निर्णय", "उच्च तालमेल"] }, 
    yellow: { en: ["Body image distress", "High school academic pressure"], hi: ["तनाव, स्वरूप की चिंता"] }, 
    red: { en: ["Complete academic breakdown, extreme aggression"], hi: ["विमुख होना, आक्रामकता"] }, 
    parentTips: { nutrition: { en: "Reduce greasy junk food to manage acne; increase fresh raw salads and water.", hi: "तैलीय भोजन कम करें।" }, safety: { en: "Review social media privacy settings and address cyber safety.", hi: "सोशल मीडिया पर नजर रखें।" }, play: { en: "Ensure minimum 45 minutes of vigorous physical activity daily.", hi: "45 मिनट कसरत कराएं।" }, care: { en: "Administer Tetanus & Diphtheria (Tdap booster) at clinic.", hi: "Tdap बूस्टर लगवाएं।" } } 
  },
  "15y": { 
    name: { en: "15 Years (Tanner 4 - 5)", hi: "15 वर्ष (Tanner 4 - 5)" }, 
    iap: { boy: { minW: 44.0, maxW: 72.0, minH: 160, maxH: 178 }, girl: { minW: 43.0, maxW: 68.0, minH: 152, maxH: 169 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 4 - 5", green: "Testicular volume >= 20 mL, mature penis size, adult muscle contour, terminal facial hair.", yellow: "Postural backache during final height spurt.", red: "🚨 Failure to progress through pubertal stages over >4.5 years." },
      girl: { stage: "Tanner Stage 5 (Full Adult Contour)", green: "Mature breast contour, adult pubic hair extending to medial thighs.", yellow: "Heavy flow or cycle irregularity beyond 2 years post-menarche.", red: "🚨 Primary Amenorrhea Red Flag: Zero menstrual periods by age 15 regardless of breasts." }
    },
    green: { en: ["Adult physical proportions and endurance", "Plans long-term career goals", "Emotional self-regulation"], hi: ["वयस्क शारीरिक संरचना", "लक्ष्यों की योजना", "आत्म-नियंत्रण"] }, 
    yellow: { en: ["Reversed sleep cycles (late nights)", "Sedentary lifestyle causing weight gain"], hi: ["देर रात जागना, वजन बढ़ना"] }, 
    red: { en: ["Clinical depression, eating disorders (anorexia/bulimia)"], hi: ["अवसाद, खान-पान विकार"] }, 
    parentTips: { nutrition: { en: "Provide brain-healthy Omega-3 fats (walnuts, flaxseeds) and light nutritious meals.", hi: "अखरोट, अलसी दें।" }, safety: { en: "Zero tolerance for underage two-wheeler or four-wheeler driving.", hi: "वाहन चलाने पर रोक रखें।" }, play: { en: "Engage in competitive sports, running, or intellectual challenges.", hi: "दौड़, खेलकूद कराएं।" }, care: { en: "Prioritize 8 hours of uninterrupted sleep for neurological consolidation.", hi: "8 घंटे की नींद सुनिश्चित करें।" } } 
  },
  "16y": { 
    name: { en: "16 Years (Tanner 5 / Adult Maturity)", hi: "16 वर्ष (Tanner 5 / पूर्ण परिपक्वता)" }, 
    iap: { boy: { minW: 49.0, maxW: 77.0, minH: 165, maxH: 182 }, girl: { minW: 46.0, maxW: 71.0, minH: 153, maxH: 170 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 5 (Mature Adult)", green: "Adult genital size and pubic hair distribution extending to umbilicus.", yellow: "Continued slow height gain (epiphyses fusing).", red: "🚨 Testicular atrophy or loss of acquired secondary sexual traits." },
      girl: { stage: "Tanner Stage 5 (Mature Adult)", green: "Full adult reproductive maturity and height stabilization.", yellow: "Dysmenorrhea or premenstrual syndromic symptoms.", red: "🚨 Secondary amenorrhea (cessation of menses for >3 consecutive cycles)." }
    },
    green: { en: ["Near adult height achieved in girls; boys continue muscle building", "Focused career goals", "Mature social empathy"], hi: ["वयस्क कद, करियर स्पष्टता", "जिम्मेदारी की भावना"] }, 
    yellow: { en: ["Exam stress triggering somatization (headache, acidity)", "Poor study posture"], hi: ["सिरदर्द, गलत मुद्रा"] }, 
    red: { en: ["Severe clinical depression or complete social withdrawal"], hi: ["मानसिक तनाव, अलगाव"] }, 
    parentTips: { nutrition: { en: "Ensure zinc, iron, and multivitamins via whole sprouts, nuts, and dairy.", hi: "अंकुरित अनाज, मेवे दें।" }, safety: { en: "Provide non-judgmental emotional support. Listen for 15 mins daily without lecturing.", hi: "15 मिनट बिना आलोचना के सुनें।" }, play: { en: "Trekking, gym workouts with proper form, swimming, or sports leagues.", hi: "जिम और तैराकी कराएं।" }, care: { en: "Ensure ergonomic chair and desk setup to protect the spine during study.", hi: "रीढ़ की सुरक्षा का ध्यान रखें।" } } 
  },
  "17y": { 
    name: { en: "17 Years (Tanner 5)", hi: "17 वर्ष (Tanner 5)" }, 
    iap: { boy: { minW: 53.0, maxW: 81.0, minH: 168, maxH: 184 }, girl: { minW: 48.0, maxW: 73.0, minH: 154, maxH: 171 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 5", green: "Full biological adult stature and male secondary sexual characteristics.", yellow: "Metabolic strain from exam stress.", red: "🚨 Severe hormone or endocrine deficits." },
      girl: { stage: "Tanner Stage 5", green: "Full biological adult stature and regular menstrual cycles.", yellow: "Stress-induced cycle delays.", red: "🚨 Persistent oligomenorrhea or severe clinical hirsutism." }
    },
    green: { en: ["Full biological maturity", "Independent career preparation", "Healthy social adaptation"], hi: ["पूर्ण परिपक्वता", "करियर तैयारी", "सामाजिक अनुकूलन"] }, 
    yellow: { en: ["Chronic study-induced sleep deprivation", "Lack of regular exercise"], hi: ["नींद की कमी", "व्यायाम का अभाव"] }, 
    red: { en: ["Severe panic attacks, clinical depression requiring medical care"], hi: ["पैनिक अटैक, अवसाद"] }, 
    parentTips: { nutrition: { en: "Hydration and fresh fruits; restrict high caffeine/energy drink intake.", hi: "ताजे फल दें, कैफीन सीमित रखें।" }, safety: { en: "Encourage mindfulness and deep-breathing techniques for exam stress.", hi: "प्राणायाम सिखाएं।" }, play: { en: "Maintain healthy social circles and weekend recreational games.", hi: "सकारात्मक मित्र मंडली रखें।" }, care: { en: "Provide reassurance and mental health support during competitive exam phases.", hi: "भावनात्मक संबल दें।" } } 
  },
  "18y": { 
    name: { en: "18 Years (Tanner 5 / Full Maturity)", hi: "18 वर्ष (Tanner 5 / वयस्कता)" }, 
    iap: { boy: { minW: 56.0, maxW: 84.0, minH: 170, maxH: 186 }, girl: { minW: 49.0, maxW: 75.0, minH: 154, maxH: 172 } }, 
    tanner: {
      boy: { stage: "Tanner Stage 5 (Full Adult Maturation)", green: "Complete epiphyseal fusion and adult biological stature.", yellow: "Postural backache from sedentary study hours.", red: "🚨 Testicular pain, swelling, or endocrine decompensation." },
      girl: { stage: "Tanner Stage 5 (Full Adult Maturation)", green: "Complete epiphyseal fusion and adult biological stature.", yellow: "Postural backache or stress.", red: "🚨 Persistent menstrual abnormalities or hormonal imbalance." }
    },
    green: { en: ["Full adult biological maturity", "Readiness for college, career, and independent life", "Responsible personal health and nutrition habits"], hi: ["वयस्क परिपक्वता", "करियर तत्परता", "जिम्मेदार स्वास्थ्य"] }, 
    yellow: { en: ["Metabolic lifestyle strain", "Unmanaged stress during adulthood transition"], hi: ["जीवनशैली तनाव, पीठ दर्द"] }, 
    red: { en: ["Severe clinical psychiatric disorders or substance dependence"], hi: ["मनोरोग या लत की समस्या"] }, 
    parentTips: { nutrition: { en: "Establish lifelong healthy habits: Low sugar, high fiber, wholesome whole foods.", hi: "कम चीनी, उच्च फाइबर आहार लें।" }, safety: { en: "Safe driving responsibility, legal rights awareness, and health insurance basics.", hi: "सुरक्षित ड्राइविंग सिखाएं।" }, play: { en: "Establish a lifelong physical exercise routine (gym, running, yoga).", hi: "नियमित व्यायाम करें।" }, care: { en: "Smooth transition from pediatric care to adult medical consultation.", hi: "वयस्क चिकित्सा में बदलाव।" } } 
  }
};

const adolescentFaqDatabase = [
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "Is it normal for menstrual periods to be irregular during the first 1-2 years after menarche?", hi: "क्या पहले 1-2 वर्षों में मासिक धर्म (Periods) का अनियमित होना सामान्य है?" },
    a: { en: "Yes. The Hypothalamic-Pituitary-Ovarian (HPO) hormonal axis takes 12 to 24 months to mature, resulting in common anovulatory (irregular) cycles. However, consult Dr. Dinesh Mittal if bleeding lasts >7 days, requires pad changes every 1-2 hours, or cycle gap is <21 days.", hi: "हाँ। पहले 1-2 वर्षों में हार्मोनल संतुलन परिपक्व होने में 12 से 24 माह का समय लगता है, जिससे मासिक धर्म का अनियमित होना सामान्य है। लेकिन यदि रक्तस्राव 7 दिन से अधिक रहे या हर 1-2 घंटे में पैड बदलना पड़े, तो चिकित्सीय परामर्श लें।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "How can teenage girls safely manage severe period pain (Dysmenorrhea)?", hi: "किशोरियों में माहवारी के असहनीय दर्द (Period Cramps) से सुरक्षित राहत कैसे पाएं?" },
    a: { en: "Primary dysmenorrhea is caused by uterine prostaglandins. Safe relief includes hot water bottle fermentation, proper hydration, magnesium-rich foods (almonds, bananas), and pediatric-prescribed antispasmodics (like Mefenamic acid). Avoid self-medicating with unprescribed painkillers.", hi: "यह दर्द गर्भाशय में प्रोस्टाग्लैंडीन हार्मोन के कारण होता है। गर्म पानी की सिकाई, पर्याप्त पानी पीना, बादाम व केले का सेवन और डॉक्टर द्वारा सुझाई गई दर्द निवारक दवा से सुरक्षित राहत मिलती है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "What are the early red flags of Polycystic Ovary Syndrome (PCOS) in teenage girls?", hi: "किशोरियों में पीसीओएस (PCOS / PCOD) के शुरुआती चेतावनी संकेत क्या हैं?" },
    a: { en: "Warning signs include persistently irregular cycles beyond 2 years post-menarche, severe cystic acne along the jawline, excess coarse facial/body hair (hirsutism), and dark velvety skin patches on the neck (Acanthosis Nigricans). Early dietary management prevents metabolic strain.", hi: "2 वर्ष बाद भी लगातार पीरियड्स का रुक-रुक कर आना, चेहरे/गर्दन पर अत्यधिक मुँहासे, चेहरे पर अनचाहे बाल (Hirsutism) और गर्दन पर कालापन पीसीओएस के लक्षण हो सकते हैं। समय पर जांच व खानपान में सुधार आवश्यक है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "Is white vaginal discharge (Leukorrhea) normal before or between periods?", hi: "क्या सफेद पानी (White Discharge / Leukorrhea) आना सामान्य है?" },
    a: { en: "Clear, odorless, or whitish discharge is a normal physiological sign of estrogen stimulation—often starting 6-12 months before menarche. However, if discharge turns yellowish-green, curd-like, causes itching or foul odor, it indicates an infection needing pediatric review.", hi: "हल्का सफेद, बिना गंध वाला स्राव सामान्य एस्ट्रोजन हार्मोन का संकेत है। लेकिन यदि स्राव में दुर्गंध हो, खुजली हो, या रंग पीला/हरा हो तो यह संक्रमण (Infection) का संकेत है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "What is the recommended HPV (Cervical Cancer) vaccination schedule for girls?", hi: "बालिकाओं के लिए सर्वाइकल कैंसर (HPV Vaccine) टीका कब लगवाना चाहिए?" },
    a: { en: "The Indian Academy of Pediatrics (IAP) strongly recommends the HPV vaccine for girls aged 9 to 14 years as a 2-dose schedule (0 and 6 months). It provides lifelong protection against high-risk strains causing cervical cancer.", hi: "IAP अनुसार 9 से 14 वर्ष की बालिकाओं को 6 माह के अंतराल पर HPV के 2 टीके लगवाने चाहिए। यह जीवनभर सर्वाइकल कैंसर से सुरक्षा प्रदान करता है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "When should parents consult for Delayed Puberty or Primary Amenorrhea in a girl?", hi: "लड़कियों में प्यूबर्टी की देरी (Delayed Puberty) कब मानी जाती है?" },
    a: { en: "Consult a pediatrician if: (1) Zero breast development by age 13, or (2) Menstruation has not started by age 15 despite breast development, or (3) More than 3 years have passed since breast budding without menarche.", hi: "यदि 13 वर्ष तक स्तनों का कोई विकास न हो, या 15 वर्ष की आयु तक मासिक धर्म शुरू न हुआ हो, तो तुरंत बाल रोग विशेषज्ञ से हार्मोनल जांच कराएं।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "How can adolescent girls prevent and manage Iron-Deficiency Anemia?", hi: "किशोरियों में खून की कमी (एनीमिया / Anemia) से कैसे बचें?" },
    a: { en: "Menstrual blood loss and growth spurts increase iron requirements. Include गुड़ (jaggery), भुना चना (roasted grams), पालक (spinach), अनार (pomegranate), and citrus fruits (Vitamin C for iron absorption). Annual hemoglobin checks are recommended.", hi: "माहवारी के कारण आयरन की कमी हो सकती है। आहार में गुड़, चना, पालक, चुकंदर और विटामिन-सी युक्त फल शामिल करें। वर्ष में एक बार हीमोग्लोबिन जांच अवश्य कराएं।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "What are essential menstrual hygiene practices to prevent urinary infections?", hi: "माहवारी के दौरान संक्रमण से बचाव हेतु कौन सी सावधानियां जरूरी हैं?" },
    a: { en: "Change sanitary pads every 4-6 hours. Avoid synthetic tight underwear and chemical-heavy intimate washes. Always wash the genital area from front to back with plain clean water.", hi: "सैनिटरी पैड को हर 4 से 6 घंटे में बदलें। केवल सादे पानी से आगे से पीछे की ओर सफाई करें और अत्यधिक टाइट कपड़े पहनने से बचें।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "How should parents handle premenstrual mood swings and irritability (PMS)?", hi: "माहवारी से पहले अत्यधिक चिड़चिड़ापन और मूड स्विंग्स (PMS) को कैसे संभालें?" },
    a: { en: "Premenstrual Syndrome (PMS) is driven by progesterone drops. Support your teen with regular 30-min physical exercise, limiting high-salt/sugar snacks, ensuring 8 hours of sleep, and providing empathetic emotional reassurance.", hi: "हार्मोनल बदलावों के कारण यह सामान्य है। नियमित 30 मिनट का व्यायाम, कम नमक व कम चीनी वाला भोजन और भरपूर 8 घंटे की नींद से इसमें काफी सुधार होता है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-venus",
    color: "#db2777",
    q: { en: "My daughter is skipping meals and obsessed with weight. What should we do?", hi: "किशोरी यदि खाना छोड़कर डाइटिंग करे और वजन को लेकर अत्यधिक चिंतित रहे तो क्या करें?" },
    a: { en: "Avoid criticizing weight or physical appearance. Shift home conversations to stamina, bone strength, and immunity. If meal-skipping persists, seek clinical evaluation to prevent eating disorders (Anorexia/Bulimia).", hi: "शारीरिक स्वरूप पर टिप्पणी करने से बचें। पोषण और ऊर्जा पर ध्यान दें। यदि भोजन छोड़ने की आदत जारी रहे, तो समय रहते बाल रोग विशेषज्ञ से परामर्श लें।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "When do teenage boys hit their peak height growth spurt?", hi: "लड़कों में लंबाई का सबसे तीव्र विकास (Growth Spurt) किस उम्र में होता है?" },
    a: { en: "Boys experience their Peak Height Velocity (PHV) later than girls—typically between 13.5 and 15.5 years (Tanner Stage 4), gaining 8-12 cm in a single year. Adequate protein, calcium, Vitamin D, and 8+ hours of sleep are vital.", hi: "लड़कों की लंबाई सबसे तेजी से 13.5 से 15.5 वर्ष (Tanner Stage 4) की उम्र में बढ़ती है (सालाना 8-12 सेमी)। इस दौरान प्रोटीन, कैल्शियम और 8 घंटे की नींद अत्यंत महत्वपूर्ण है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "My son's chest feels tender and swollen under the nipples. Is this normal?", hi: "लड़कों की छाती में हल्की गांठ या दर्द (Pubertal Gynecomastia) क्या सामान्य है?" },
    a: { en: "Yes. Pubertal Gynecomastia affects up to 50-60% of adolescent boys aged 12-14 due to temporary testosterone-estrogen fluctuations. It is completely benign and typically resolves on its own within 12-18 months.", hi: "हाँ। 12 से 14 वर्ष की उम्र में हार्मोनल बदलाव के कारण लगभग 50% लड़कों में छाती में हल्का दर्द या सूजन आ सकती है। यह पूरी तरह सामान्य है और 12-18 माह में स्वतः ठीक हो जाती है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "What are wet dreams (nocturnal emissions), and how should parents reassure boys?", hi: "स्वप्नदोष (Nocturnal Emissions / Wet Dreams) क्या है और इसे कैसे समझें?" },
    a: { en: "Nocturnal emissions are involuntary releases of semen during sleep. They are a healthy, normal sign that the testes and prostate are functioning properly under testosterone. Reassure your son that this is a natural biological milestone.", hi: "सोते समय वीर्य का स्खलन होना एक पूर्णतः प्राकृतिक और स्वस्थ जैविक प्रक्रिया है। यह दर्शाता है कि शरीर में टेस्टोस्टेरोन हार्मोन का सामान्य विकास हो रहा है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "When is puberty considered delayed in adolescent boys?", hi: "लड़कों में किशोरावस्था की देरी (Delayed Puberty) कब मानी जाती है?" },
    a: { en: "Delayed puberty is diagnosed when there is no increase in testicular volume (<4 mL) by age 14, or if >4.5 years elapse between the first genital changes and full maturity. A pediatric endocrine evaluation rules out hormone deficits.", hi: "यदि 14 वर्ष की आयु तक अंडकोष (Testes) के आकार में कोई वृद्धि शुरू न हो, तो बाल रोग विशेषज्ञ से हार्मोनल मूल्यांकन कराना आवश्यक है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "Why does a teenage boy's voice crack and deepen, and how long does it last?", hi: "लड़कों की आवाज भारी होना और फटना (Voice Cracking) कितने समय तक रहता है?" },
    a: { en: "Testosterone causes the vocal cords to thicken and the larynx to enlarge (creating the Adam's apple, Tanner Stage 3-4). The vocal muscles adapt over 6-12 months, after which the adult voice stabilizes.", hi: "टेस्टोस्टेरोन हार्मोन के कारण स्वरयंत्र (Larynx / Adam's Apple) का आकार बढ़ता है। 6 से 12 महीने में आवाज पूरी तरह स्थिर व भारी हो जाती है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "How should teenage boys manage severe facial, chest, and back acne?", hi: "लड़कों में चेहरे और पीठ पर होने वाले जिद्दी मुँहासों (Acne) का सही उपचार क्या है?" },
    a: { en: "Wash face twice daily with a salicylic acid cleanser, shower promptly after sports, avoid squeezing pimples (prevents permanent scarring), and use pediatric-prescribed topical retinoids or benzoyl peroxide for persistent cysts.", hi: "दिन में दो बार माइल्ड फेसवॉश करें, खेलकूद के तुरंत बाद स्नान करें और मुँहासे बिल्कुल न फोड़ें। अत्यधिक दानों के लिए डॉक्टर द्वारा सुझाई गई क्रीम का इस्तेमाल करें।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "What are the emergency warning signs of Testicular Pain or Torsion?", hi: "अंडकोष में अचानक तेज दर्द (Testicular Torsion) के खतरे के संकेत क्या हैं?" },
    a: { en: "🚨 Medical Emergency: Any sudden, severe one-sided scrotal pain, swelling, or vomiting requires immediate hospital evaluation within 4-6 hours to prevent testicular damage due to twisted blood supply.", hi: "🚨 आपातकालीन संकेत: अंडकोष में अचानक असहनीय दर्द, सूजन या उल्टी होना आपातकाल (Testicular Torsion) हो सकता है। 4 से 6 घंटे के भीतर अस्पताल पहुंचना अनिवार्य है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "Is gym workout, resistance training, and weightlifting safe for teens aged 14 to 18?", hi: "क्या 14-18 वर्ष के किशोरों के लिए जिम और वेट ट्रेनिंग सुरक्षित है?" },
    a: { en: "Supervised resistance training with bodyweight exercises and proper form builds peak bone density and posture. However, maximal heavy lifting with poor form and synthetic supplements/steroids must be strictly avoided.", hi: "उचित मार्गदर्शन और सही पोस्चर के साथ किया गया व्यायाम सुरक्षित है और हड्डियों को मजबूत बनाता है। अत्यधिक भारी वजन और बिना डॉक्टरी सलाह के सप्लीमेंट्स से बचें।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "How can parents correct poor posture, slouching, and 'tech neck' in growing boys?", hi: "लड़कों में झुककर बैठने (Slouching) और पीठ दर्द की समस्या को कैसे सुधारें?" },
    a: { en: "Rapid skeletal growth combined with mobile use causes thoracic strain. Keep computer screens at eye level, limit continuous sitting to 45 minutes, encourage swimming/cycling, and keep school bags under 10% of body weight.", hi: "कंप्यूटर स्क्रीन को आंखों के स्तर पर रखें, स्कूल बैग का वजन शरीर के वजन के 10% से कम रखें और तैराकी या साइकिलिंग जैसी गतिविधियों से रीढ़ को सीधा रखने में मदद मिलती है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "How can parents protect teenage boys from peer pressure regarding vaping, smoking, or alcohol?", hi: "किशोरों को गलत संगत और नशे (Vaping, Smoking) से कैसे सुरक्षित रखें?" },
    a: { en: "Educate teens transparently on irreversible lung damage and nicotine addiction. Teach practical, confident refusal lines ('I have football practice tomorrow, I will pass') so they resist pressure without losing social confidence.", hi: "वेपिंग और धूम्रपान के नुकसानों पर खुलकर और दोस्ताना माहौल में बात करें। बच्चे को आत्मविश्वास से 'ना' कहना सिखाएं ताकि वे दोस्तों के दबाव में न आएं।" }
  }
];

const blogArticles = {
  iapSchedule: {
    title: "IAP Recommended Immunization Schedule",
    content: `
      <p><strong>Indian Academy of Pediatrics (IAP) Vaccination Chart:</strong> This age-wise vaccination schedule serves as an essential reference guide for parents to ensure timely immunization against preventable diseases.</p>
      <table class="vaccine-table">
        <thead><tr><th>Age</th><th>Recommended Vaccines</th></tr></thead>
        <tbody>
          <tr><td><strong>At Birth</strong></td><td>BCG, OPV 0, Hepatitis B (1st dose)</td></tr>
          <tr><td><strong>6 Weeks</strong></td><td>DTwP / DTaP 1, IPV 1, Hep B 2, Hib 1, Rotavirus 1, PCV 1</td></tr>
          <tr><td><strong>10 Weeks</strong></td><td>DTwP / DTaP 2, IPV 2, Hib 2, Rotavirus 2, PCV 2</td></tr>
          <tr><td><strong>14 Weeks</strong></td><td>DTwP / DTaP 3, IPV 3, Hib 3, Rotavirus 3, PCV 3</td></tr>
          <tr><td><strong>6 Months</strong></td><td>Influenza (1st Dose), Hepatitis B 3</td></tr>
          <tr><td><strong>7 Months</strong></td><td>Influenza (2nd Dose)</td></tr>
          <tr><td><strong>6 - 9 Months</strong></td><td>Typhoid Conjugate Vaccine</td></tr>
          <tr><td><strong>9 Months</strong></td><td>MMR 1 (Measles, Mumps, Rubella)</td></tr>
          <tr><td><strong>12 Months</strong></td><td>Hepatitis A (1st Dose)</td></tr>
          <tr><td><strong>15 Months</strong></td><td>MMR 2, Varicella (Chickenpox 1st Dose), PCV Booster</td></tr>
          <tr><td><strong>16 - 18 Months</strong></td><td>DTwP / DTaP Booster 1, IPV Booster 1, Hib Booster</td></tr>
          <tr><td><strong>18 - 19 Months</strong></td><td>Hepatitis A (2nd Dose), Varicella 2</td></tr>
          <tr><td><strong>4 - 6 Years</strong></td><td>DTwP / DTaP Booster 2, IPV Booster 2, MMR 3</td></tr>
          <tr><td><strong>10 - 12 Years</strong></td><td>Tdap / Td, HPV (for girls & boys)</td></tr>
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
    content: `<p>Both DTaP (Painless) and DTwP (Painful) vaccines protect against Diphtheria, Tetanus, and Pertussis. The painless version contains acellular components causing significantly lower fever and fussiness. Consult Dr. Dinesh Mittal to choose the best option for your child.</p>`
  },
  blog2: {
    title: "Essential Newborn Care Tips for First-Time Parents",
    content: `<p>Maintain cord dryness, practice exclusive breastfeeding every 2-3 hours, burp after every feed, and watch for warning signs like persistent lethargy or fever.</p>`
  },
  blog3: {
    title: "How to Safely Manage High Fever in Toddlers at Home",
    content: `<p>Offer plenty of fluids, sponge with lukewarm water (never ice water), and give weight-appropriate paracetamol. If fever persists over 3 days, visit the clinic immediately.</p>`
  },
  blog4: {
    title: "Monsoon Influenza in Delhi: Parent Guide",
    content: `<p>Monsoon spikes seasonal viral flu. Ensure yearly flu vaccination above 6 months and teach good hand hygiene habits to prevent spreading germs.</p>`
  }
};
