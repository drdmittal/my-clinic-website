// ==========================================================
// CLINIC DATA REPOSITORY (data.js)
// Trivandrum Development Screening Chart (TDSC) Milestones,
// IAP Growth Standards, IYCF Weaning Engine, Toilet Training & FAQs
// ==========================================================

const milestoneDatabase = {
  "0m": {
    name: { en: "Newborn (0 - 30 Days)", hi: "नवजात (0 - 30 दिन)" },
    iap: {
      boy: { minW: 2.5, maxW: 4.3, minH: 46.0, maxH: 54.0 },
      girl: { minW: 2.4, maxW: 4.1, minH: 45.0, maxH: 53.0 }
    },
    green: {
      en: ["Startles or blinks to sudden loud sounds", "Turns head to side when lying on stomach", "Strong sucking and rooting reflex"],
      hi: ["अचानक तेज आवाज पर चौंकना या पलकें झपकाना", "पेट के बल लिटाने पर सिर को एक तरफ मोड़ना", "स्तनपान हेतु मजबूत चूसने का रिफ्लेक्स"]
    },
    yellow: {
      en: ["Uneven sleep patterns", "Occasional transient squint (normal in first weeks)"],
      hi: ["नींद का अनियमित चक्र", "कभी-कभार आँखों का हल्का तिरछा होना (शुरुआती हफ्तों में सामान्य)"]
    },
    red: {
      en: ["Poor sucking, lethargy, or extreme floppiness", "Deep yellow jaundice on palms/soles", "Fever or low body temperature"],
      hi: ["दूध न पीना, अत्यधिक सुस्ती या शरीर बिल्कुल ढीला पड़ना", "हथेलियों या तलवों तक गहरा पीलिया", "बुखार या शरीर ठंडा पड़ना"]
    },
    parentTips: {
      nutrition: { en: "Exclusive breastfeeding on demand (8-12 times in 24 hours).", hi: "केवल माँ का दूध (24 घंटे में 8-12 बार)।" },
      safety: { en: "Always place baby on back to sleep on a firm flat mattress.", hi: "बच्चे को हमेशा पीठ के बल सुलाएं।" },
      play: { en: "Gentle skin-to-skin kangaroo touch and soft maternal voice.", hi: "कंगारू मदर केयर और धीमी आवाज में बातें करें।" },
      care: { en: "BCG, OPV-0, and Hepatitis-B birth dose.", hi: "जन्म के समय बीसीजी, पोलियो और हेपेटाइटिस-बी।" }
    }
  },
  "3m": {
    name: { en: "3 Months (TDSC)", hi: "3 माह (TDSC)" },
    iap: {
      boy: { minW: 5.0, maxW: 7.9, minH: 57.0, maxH: 65.0 },
      girl: { minW: 4.5, maxW: 7.4, minH: 55.5, maxH: 63.5 }
    },
    green: {
      en: ["Social smile in response to voice/face", "Follows moving objects 180° with eyes", "Holds head steady when upright in lap"],
      hi: ["चेहरा या आवाज सुनकर मुस्कुराना (Social Smile)", "चीजों को आँखों से 180° तक देखना", "गोदी में लेने पर गर्दन स्थिर रखना"]
    },
    yellow: {
      en: ["Mild head lag when pulled to sit (normal up to 3.8 months)", "Spitting up milk without weight loss"],
      hi: ["हाथ पकड़कर बैठाने पर गर्दन में हल्का झुकाव", "हल्का दूध पलटना"]
    },
    red: {
      en: ["Complete absence of social smile by 3 months", "Does not focus or follow faces/objects", "Extreme neck/limb stiffness or floppiness"],
      hi: ["3 माह तक बिल्कुल न मुस्कुराना", "नजरें न मिलाना", "शरीर अत्यधिक अकड़ा या ढीला होना"]
    },
    parentTips: {
      nutrition: { en: "Continue exclusive breastfeeding.", hi: "केवल स्तनपान जारी रखें।" },
      safety: { en: "Never leave baby unattended on beds or sofas.", hi: "बच्चे को बेड पर अकेला न छोड़ें।" },
      play: { en: "Supervised tummy time 3-5 minutes while awake.", hi: "जागते समय पेट के बल लिटाएं (टमी टाइम)।" },
      care: { en: "Primary immunization series (6, 10, 14 weeks).", hi: "प्राथमिक टीकाकरण शेड्यूल पूरा करें।" }
    }
  },
  "6m": {
    name: { en: "6 Months (TDSC / Weaning)", hi: "6 माह (TDSC / ऊपरी आहार)" },
    iap: {
      boy: { minW: 6.4, maxW: 9.7, minH: 63.0, maxH: 71.5 },
      girl: { minW: 5.8, maxW: 9.2, minH: 61.0, maxH: 70.0 }
    },
    green: {
      en: ["Rolls over from back to stomach", "Sits with light support/tripod", "Transfers toys from one hand to the other", "Babbles monosyllables ('ba-ba', 'da-da')"],
      hi: ["पीठ से पेट के बल करवट बदलना", "सहारे से बैठना", "एक हाथ से दूसरे हाथ में खिलौना लेना", "आवाजें निकालना ('बा-बा', 'दा-दा')"]
    },
    yellow: {
      en: ["Reluctance to initial solid food textures", "Teething gum discomfort"],
      hi: ["ऊपरी आहार शुरू करने में थोड़ी हिचकिचाहट", "मसूड़ों में खुजली"]
    },
    red: {
      en: ["Cannot hold head steady or roll over", "Does not reach for or grasp objects", "No vocalizations or response to sounds"],
      hi: ["गर्दन बिल्कुल न रुकना या करवट न बदलना", "चीजें न पकड़ना", "आवाज पर प्रतिक्रिया न देना"]
    },
    parentTips: {
      nutrition: { en: "Start home-cooked mashed complementary feeding at completed 180 days.", hi: "180 दिन पूरे होने पर घर का बना मसला हुआ भोजन शुरू करें।" },
      safety: { en: "Childproof low shelves as crawling approaches.", hi: "कोनों व बिजली के बोर्ड सुरक्षित करें।" },
      play: { en: "Interactive peek-a-boo and picture books.", hi: "बातें करें और रंगीन किताबें दिखाएं।" },
      care: { en: "Flu (Influenza) and Typhoid vaccine review.", hi: "इन्फ्लूएंजा व टाइफाइड टीकों का समय।" }
    }
  },
  "9m": {
    name: { en: "9 Months (TDSC)", hi: "9 माह (TDSC)" },
    iap: {
      boy: { minW: 7.2, maxW: 10.9, minH: 67.5, maxH: 76.0 },
      girl: { minW: 6.6, maxW: 10.4, minH: 65.5, maxH: 74.5 }
    },
    green: {
      en: ["Sits steadily without support", "Crawls/creeps on hands and knees", "Picks small pieces with index finger and thumb (Pincer Grasp)", "Responds to own name"],
      hi: ["बिना सहारे बैठना", "घुटनों के बल चलना (Crawling)", "उंगली और अंगूठे से छोटी चीज पकड़ना (Pincer Grasp)", "अपना नाम सुनकर देखना"]
    },
    yellow: {
      en: ["Stranger anxiety and clinginess with parents (normal developmental milestone)"],
      hi: ["अजनबियों को देखकर रोना (सामान्य विकास चरण)"]
    },
    red: {
      en: ["Cannot sit without support", "Does not bear weight on legs when supported", "Does not respond to name or make eye contact"],
      hi: ["बिना सहारे न बैठ पाना", "पैरों पर वजन न लेना", "नाम पुकारने पर न देखना"]
    },
    parentTips: {
      nutrition: { en: "3 semi-solid meals + 1 snack + continued breastfeeding.", hi: "दिन में 3 बार मसला भोजन व स्तनपान।" },
      safety: { en: "Strict avoidance of small choking hazards (coins, batteries, small toy parts).", hi: "सिक्के, सेल व छोटी चीजें दूर रखें।" },
      play: { en: "Hide-and-seek with toys under light blankets.", hi: "खिलौने छुपाकर खोजने का खेल।" },
      care: { en: "MMR-1 / MR-1 immunization dose.", hi: "एमएमआर (खसरा) का पहला टीका।" }
    }
  },
  "12m": {
    name: { en: "12 Months (1 Year - TDSC)", hi: "12 माह (1 वर्ष - TDSC)" },
    iap: {
      boy: { minW: 7.8, maxW: 11.8, minH: 71.0, maxH: 80.5 },
      girl: { minW: 7.1, maxW: 11.3, minH: 69.0, maxH: 79.0 }
    },
    green: {
      en: ["Stands with support / cruising along furniture", "Speaks 1-2 meaningful words with intent ('Mama', 'Dada')", "Waves 'bye-bye' and claps hands", "Releases objects into container voluntarily"],
      hi: ["सहारे से खड़ा होना / फर्नीचर पकड़कर चलना", "1-2 अर्थपूर्ण शब्द बोलना ('मम्मा', 'पापा')", "'बाय-बाय' करना व ताली बजाना", "चीजों को डिब्बे में डालना"]
    },
    yellow: {
      en: ["Not walking independently yet (normal walking window is up to 15 months)"],
      hi: ["स्वतंत्र रूप से न चलना (15 माह तक सामान्य है)"]
    },
    red: {
      en: ["Cannot stand even with firm support", "Cannot point with index finger to indicate needs", "Loss of previously learned speech or social words"],
      hi: ["सहारे से भी खड़ा न हो पाना", "उंगली से इशारा न करना", "सीखे हुए शब्द भूल जाना"]
    },
    parentTips: {
      nutrition: { en: "Family pot food (mildly spiced). Can introduce cow milk in open cup.", hi: "घर का सामान्य भोजन शुरू करें।" },
      safety: { en: "Secure stair gates and window latches.", hi: "सीढ़ियों और खिड़कियों को सुरक्षित करें।" },
      play: { en: "Stacking rings, large building blocks, push toys.", hi: "ब्लॉक्स जोड़ने वाले खिलौने दें।" },
      care: { en: "Hepatitis-A and Chickenpox (Varicella) vaccination.", hi: "हेपेटाइटिस-ए और चेचक का टीका।" }
    }
  },
  "18m": {
    name: { en: "18 Months (1.5 Years - TDSC)", hi: "18 माह (1.5 वर्ष - TDSC)" },
    iap: {
      boy: { minW: 8.8, maxW: 13.3, minH: 76.5, maxH: 86.5 },
      girl: { minW: 8.1, maxW: 12.8, minH: 74.5, maxH: 85.0 }
    },
    green: {
      en: ["Walks steadily without support and climbs steps with help", "Builds tower of 3 cubes", "Vocabulary of 6 to 10 clear words", "Drinks from an open cup and feeds self with spoon"],
      hi: ["बिना सहारे चलना व सहारे से सीढ़ियां चढ़ना", "3 ब्लॉक्स की मीनार बनाना", "6 से 10 साफ शब्द बोलना", "कप से पानी पीना व चम्मच से खाना"]
    },
    yellow: {
      en: ["Mild temper tantrums during frustration (normal toddler behavior)"],
      hi: ["हल्की जिद्द या नखरे दिखाना"]
    },
    red: {
      en: ["Not walking independently by 18 months", "Speaks fewer than 4 consistent words", "Does not imitate household actions or point to objects"],
      hi: ["18 माह तक स्वतंत्र रूप से न चल पाना", "4 से कम शब्द बोलना", "नकल न करना या इशारा न करना"]
    },
    parentTips: {
      nutrition: { en: "3 main meals + 2 healthy fruit/curd snacks.", hi: "3 मुख्य भोजन व 2 पौष्टिक नाश्ते।" },
      safety: { en: "Store cleaning chemicals and medicines strictly locked away.", hi: "दवाएं व फिनाइल ऊंचे लॉकर में रखें।" },
      play: { en: "Name body parts and familiar animals. Zero mobile screen time.", hi: "स्क्रीन से दूर रखें; बातें करें।" },
      care: { en: "DTP booster, Hib booster, and IPV booster at 16-18 months.", hi: "डीटीपी व हिब का पहला बूस्टर डोज।" }
    }
  },
  "24m": {
    name: { en: "24 Months (2 Years - TDSC)", hi: "24 माह (2 वर्ष - TDSC)" },
    iap: {
      boy: { minW: 9.7, maxW: 14.8, minH: 81.5, maxH: 92.5, minBmi: 14.1, ovBmi: 17.5, obBmi: 18.8 },
      girl: { minW: 9.0, maxW: 14.3, minH: 80.0, maxH: 91.5, minBmi: 13.8, ovBmi: 17.3, obBmi: 18.5 }
    },
    green: {
      en: ["Combines 2 words meaningfully ('want milk', 'big dog')", "Runs steadily and kicks a ball forward", "Builds tower of 6 cubes", "Follows 2-step verbal instructions"],
      hi: ["2 शब्द जोड़कर बोलना ('दूध दो', 'बड़ी गाड़ी')", "दौड़ना और गेंद को किक मारना", "6 ब्लॉक्स की मीनार बनाना", "सरल 2-स्टेप निर्देश मानना"]
    },
    yellow: { en: ["Temporary food pickiness"], hi: ["खाने में नखरे करना"] },
    red: {
      en: ["No 2-word meaningful phrases", "Cannot run or jump with both feet", "Lack of social eye contact or shared enjoyment (Autism Screen)"],
      hi: ["2 शब्द जोड़कर न बोल पाना", "आँखों में आँखें डालकर बात न करना (ऑटिज्म स्क्रीन)"]
    },
    parentTips: {
      nutrition: { en: "Whole fruits over juices. Dairy limited to 400ml daily.", hi: "जूस की जगह साबुत ताजे फल दें।" },
      safety: { en: "Supervise water buckets and kitchen cooking surfaces.", hi: "पानी की बाल्टी व गर्म चीजों से दूर रखें।" },
      play: { en: "Pretend roleplay and drawing lines. Zero digital screens.", hi: "रोल-प्ले खिलौने दें। स्क्रीन से बचाएं।" },
      care: { en: "Typhoid booster and Hepatitis-A second dose review.", hi: "टाइफाइड व हेपेटाइटिस-ए की दूसरी खुराक।" }
    }
  },
  "3y": {
    name: { en: "3 Years (TDSC / Pre-School)", hi: "3 वर्ष (TDSC / प्री-स्कूल)" },
    iap: {
      boy: { minW: 11.3, maxW: 17.5, minH: 89.0, maxH: 101.5, minBmi: 13.8, ovBmi: 17.1, obBmi: 18.3 },
      girl: { minW: 10.8, maxW: 17.2, minH: 88.0, maxH: 100.5, minBmi: 13.5, ovBmi: 16.9, obBmi: 18.1 }
    },
    green: {
      en: ["Speaks in full 3-4 word sentences", "Pedals a tricycle", "Copies a circle with crayon", "Understands concepts of 'mine' and 'yours'"],
      hi: ["3-4 शब्दों के वाक्य बोलना", "ट्राइसाइकिल चलाना", "गोला (Circle) बनाना", "'मेरा' और 'तुम्हारा' समझना"]
    },
    yellow: { en: ["Occasional stuttering during excitement"], hi: ["उत्तेजना में कभी-कभार हकलाना"] },
    red: {
      en: ["Unclear speech not understood by family", "Cannot copy a circle or hold crayon", "Does not interact or play with other children"],
      hi: ["बोली बिल्कुल समझ न आना", "बच्चों के साथ न खेलना"]
    },
    parentTips: {
      nutrition: { en: "Paneer, curd, soaked nuts, and seasonal vegetables.", hi: "दही, पनीर, भीगे मेवे व हरी सब्जियां दें।" },
      safety: { en: "Teach street and road safety habits.", hi: "सड़क सुरक्षा सिखाएं।" },
      play: { en: "Clay modelling, coloring, 60 minutes outdoor park play daily.", hi: "रोज 1 घंटा पार्क में खेलकूद।" },
      care: { en: "Annual vision acuity and dental checkup.", hi: "आँखों व दांतों की जांच।" }
    }
  },
  "4y": {
    name: { en: "4 Years", hi: "4 वर्ष" },
    iap: {
      boy: { minW: 12.7, maxW: 20.3, minH: 95.0, maxH: 108.5, minBmi: 13.5, ovBmi: 16.9, obBmi: 18.2 },
      girl: { minW: 12.3, maxW: 20.1, minH: 94.0, maxH: 107.5, minBmi: 13.3, ovBmi: 16.8, obBmi: 18.0 }
    },
    green: {
      en: ["Draws a person with 2-4 body parts", "Hops on one foot steadily", "Tells short stories fluently", "Dresses independently except buttons"],
      hi: ["इंसान का चित्र बनाना (2-4 अंग)", "एक पैर पर कूदना", "छोटी कहानियां सुनाना", "खुद कपड़े पहनना"]
    },
    yellow: { en: ["Imaginary fears of darkness or monsters"], hi: ["अंधेरे से डरना"] },
    red: {
      en: ["Cannot draw a cross (+) or circle", "Frequent daytime urinary incontinence", "Extreme aggressive outbursts"],
      hi: ["प्लस (+) या गोला न बना पाना", "अत्यधिक आक्रामक व्यवहार"]
    },
    parentTips: {
      nutrition: { en: "Zero processed chips, colas, packaged noodles.", hi: "चिप्स व पैकेज्ड स्नैक्स बंद करें।" },
      safety: { en: "Teach parent phone numbers and good touch/bad touch.", hi: "माता-पिता का फोन नंबर व गुड/बैड टच सिखाएं।" },
      play: { en: "Puzzles and running games.", hi: "पहेलियां व खेलकूद।" },
      care: { en: "Preparation for 4.5-5 year DTP & MMR booster.", hi: "5 वर्ष के बूस्टर टीकों की तैयारी।" }
    }
  },
  "5y": {
    name: { en: "5 Years", hi: "5 वर्ष" },
    iap: {
      boy: { minW: 14.1, maxW: 23.2, minH: 101.0, maxH: 115.5, minBmi: 13.4, ovBmi: 16.8, obBmi: 18.3 },
      girl: { minW: 13.7, maxW: 23.1, minH: 100.0, maxH: 114.5, minBmi: 13.2, ovBmi: 16.7, obBmi: 18.2 }
    },
    green: {
      en: ["Counts 10 or more objects accurately", "Skips and somersaults", "Copies a triangle", "Dresses and buttons clothes completely independently"],
      hi: ["10 तक गिनती गिनना", "त्रिभुज (Triangle) बनाना", "कपड़ों के बटन लगाना", "अच्छी तरह उछलना-कूदना"]
    },
    yellow: { en: ["Bedtime delay resistance"], hi: ["सोने में आनाकानी करना"] },
    red: {
      en: ["Cannot focus on a single task for 5 minutes (ADHD screen)", "Severe speech articulation defects", "Cannot wash hands or dry independently"],
      hi: ["5 मिनट भी ध्यान न लगना (ADHD स्क्रीन)", "बोलने में गंभीर लड़खड़ाहट"]
    },
    parentTips: {
      nutrition: { en: "Protein-rich breakfast (eggs, cheela, sprouts).", hi: "प्रोटीन युक्त नाश्ता लें।" },
      safety: { en: "Bicycle helmets mandatory.", hi: "साइकिल पर हेलमेट पहनाएं।" },
      play: { en: "Swimming and team games.", hi: "तैराकी व ग्रुप गेम्स।" },
      care: { en: "DTP-Booster 2, OPV Booster, Varicella Booster.", hi: "डीटीपी और चेचक का दूसरा बूस्टर डोज।" }
    }
  },
  "6y": {
    name: { en: "6 Years", hi: "6 वर्ष" },
    iap: {
      boy: { minW: 15.6, maxW: 26.5, minH: 107.0, maxH: 122.0, minBmi: 13.3, ovBmi: 17.0, obBmi: 18.6 },
      girl: { minW: 15.1, maxW: 26.4, minH: 106.0, maxH: 121.0, minBmi: 13.1, ovBmi: 16.9, obBmi: 18.5 }
    },
    green: { en: ["Reads simple 3-4 letter words", "Ties shoelaces with guidance", "Understands rules of board games"], hi: ["सरल शब्द पढ़ना", "खेल के नियम समझना", "जूते के फीते बांधना"] },
    yellow: { en: ["School adjustment stress"], hi: ["स्कूल का हल्का तनाव"] },
    red: { en: ["Cannot copy letters/numbers", "Frequent clumsiness and tripping over flat ground"], hi: ["अक्षर न लिख पाना", "बार-बार गिरना"] },
    parentTips: {
      nutrition: { en: "Nutritious home-cooked tiffin.", hi: "घर का बना स्कूल टिफिन दें।" },
      safety: { en: "Screen time under 1 hour daily.", hi: "मोबाइल 1 घंटे से कम रखें।" },
      play: { en: "Football, martial arts, dance.", hi: "मार्शल आर्ट्स, फुटबॉल या डांस।" },
      care: { en: "Annual vision acuity test before primary school.", hi: "आँखों की नियमित जांच।" }
    }
  },
  "7y": {
    name: { en: "7 Years", hi: "7 वर्ष" },
    iap: {
      boy: { minW: 17.2, maxW: 30.1, minH: 112.5, maxH: 128.5, minBmi: 13.4, ovBmi: 17.3, obBmi: 19.1 },
      girl: { minW: 16.6, maxW: 30.0, minH: 111.5, maxH: 127.5, minBmi: 13.2, ovBmi: 17.2, obBmi: 19.0 }
    },
    green: { en: ["Understands cause-and-effect", "Rides 2-wheel bicycle without stabilizers"], hi: ["2-पहिया साइकिल चलाना", "कारण व प्रभाव समझना"] },
    yellow: { en: ["Competitive frustration when losing"], hi: ["खेल में हारने पर उदास होना"] },
    red: { en: ["Cannot read simple 1st-grade sentences (Dyslexia screen)"], hi: ["सरल वाक्य न पढ़ पाना"] },
    parentTips: {
      nutrition: { en: "Calcium & Vitamin D through sunlight & dairy.", hi: "धूप में खेल और कैल्शियम युक्त आहार।" },
      safety: { en: "Ergonomic study desk posture.", hi: "पढ़ाई के समय बैठने की सही मुद्रा।" },
      play: { en: "Chess, table tennis, outdoor running.", hi: "शतरंज, टेबल टेनिस, दौड़।" },
      care: { en: "Annual influenza vaccine booster.", hi: "वार्षिक फ्लू का टीका।" }
    }
  },
  "8y": {
    name: { en: "8 Years", hi: "8 वर्ष" },
    iap: {
      boy: { minW: 19.0, maxW: 34.2, minH: 118.0, maxH: 134.5, minBmi: 13.5, ovBmi: 17.7, obBmi: 19.7 },
      girl: { minW: 18.3, maxW: 34.0, minH: 117.0, maxH: 134.0, minBmi: 13.4, ov
