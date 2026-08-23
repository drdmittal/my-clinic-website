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
      girl: { minW: 18.3, maxW: 34.0, minH: 117.0, maxH: 134.0, minBmi: 13.4, ovBmi: 17.6, obBmi: 19.6 }
    },
    green: { en: ["Understands money values", "Fine motor crafts"], hi: ["पैसे का हिसाब समझना", "क्राफ्ट व कला"] },
    yellow: { en: ["Desire for peer brand comparisons"], hi: ["दोस्तों से तुलना की आदत"] },
    red: { en: ["Precocious puberty signs: breast buds <8y or testes <9y"], hi: ["8 वर्ष से पहले स्तन वृद्धि या 9 वर्ष से पहले यौवन लक्षण"] },
    parentTips: {
      nutrition: { en: "Avoid bakery products and trans-fats to prevent early obesity.", hi: "तली-भुनी चीजें व बेकरी बंद करें।" },
      safety: { en: "Strict internet supervision.", hi: "इंटरनेट पर कड़ी निगरानी रखें।" },
      play: { en: "Minimum 60 mins vigorous sport daily.", hi: "रोज 60 मिनट तेज खेलकूद।" },
      care: { en: "Annual height velocity check (5-6 cm/year).", hi: "कद कम से कम 5-6 सेमी/वर्ष बढ़ना चाहिए।" }
    }
  },
  "9y": {
    name: { en: "9 Years", hi: "9 वर्ष" },
    iap: {
      boy: { minW: 21.0, maxW: 39.0, minH: 123.0, maxH: 140.5, minBmi: 13.7, ovBmi: 18.2, obBmi: 20.4 },
      girl: { minW: 20.3, maxW: 38.8, minH: 122.5, maxH: 140.5, minBmi: 13.6, ovBmi: 18.1, obBmi: 20.3 }
    },
    green: { en: ["Independent homework", "Strong peer friendships"], hi: ["स्वयं गृहकार्य करना", "अच्छी सामाजिक मित्रता"] },
    yellow: { en: ["Moodiness before puberty transition"], hi: ["हल्का चिड़चिड़ापन"] },
    red: { en: ["Height percentile falling on growth charts"], hi: ["कद का अचानक रुकना या गिरना"] },
    parentTips: {
      nutrition: { en: "High fiber diet (salads, millets, sprouts).", hi: "भोजन में सलाद, बाजरा व रागी शामिल करें।" },
      safety: { en: "Open discussions regarding school bullying.", hi: "स्कूल व दोस्तों की बातें रोजाना सुनें।" },
      play: { en: "Badminton, basketball, cycling.", hi: "बैडमिंटन, बास्केटबॉल व साइकिलिंग।" },
      care: { en: "HPV vaccine eligibility starting at 9 years for girls.", hi: "9 वर्ष से बालिकाओं हेतु HPV टीका।" }
    }
  },
  "10y": {
    name: { en: "10 Years", hi: "10 वर्ष" },
    iap: {
      boy: { minW: 23.2, maxW: 44.5, minH: 128.0, maxH: 146.5, minBmi: 14.0, ovBmi: 18.7, obBmi: 21.1 },
      girl: { minW: 22.5, maxW: 44.3, minH: 128.0, maxH: 147.0, minBmi: 13.9, ovBmi: 18.7, obBmi: 21.1 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 1-2 (Thelarche)", green: "Early breast budding between 8-12y is normal.", yellow: "Rapid weight gain.", red: "Absence of any secondary sexual traits by 13y." },
      boy: { stage: "Tanner Stage 1", green: "Testicular volume 1-3 ml. Steady growth at 5 cm/yr.", yellow: "Weight creeping up.", red: "Testicular enlargement >4ml before 9y." }
    },
    green: { en: ["Abstract reasoning develops"], hi: ["तार्किक व अमूर्त सोच का विकास"] },
    yellow: { en: ["Body image consciousness"], hi: ["शारीरिक रूप-रंग को लेकर सचेत होना"] },
    red: { en: ["Growth plateau (<4 cm/yr)", "Persistent fatigue/pallor"], hi: ["साल में 4 सेमी से कम कद बढ़ना, अत्यधिक थकान"] },
    parentTips: {
      nutrition: { en: "Zero sweetened sodas to prevent childhood obesity.", hi: "मीठे पेय व कोल्ड ड्रिंक्स पूरी तरह बंद करें।" },
      safety: { en: "Cyber safety and digital boundaries.", hi: "सोशल मीडिया व साइबर सुरक्षा के नियम तय करें।" },
      play: { en: "Athletics, swimming, yoga.", hi: "एथलेटिक्स, योग व तैराकी।" },
      care: { en: "HPV Vaccine (2-dose schedule at 0 and 6 months) for girls.", hi: "बालिकाओं हेतु एचपीवी वैक्सीन।" }
    }
  },
  "11y": {
    name: { en: "11 Years", hi: "11 वर्ष" },
    iap: {
      boy: { minW: 25.7, maxW: 50.5, minH: 133.0, maxH: 153.0, minBmi: 14.3, ovBmi: 19.3, obBmi: 21.9 },
      girl: { minW: 25.1, maxW: 50.3, minH: 134.0, maxH: 154.0, minBmi: 14.3, ovBmi: 19.4, obBmi: 22.0 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 2", green: "Breast buds enlarge, fine pubic hair. Growth spurt starts.", yellow: "Mild breast tenderness.", red: "Menarche starting before 10y without review." },
      boy: { stage: "Tanner Stage 2", green: "Testicular volume increases to 4-8 ml.", yellow: "Temporary pubertal gynecomastia.", red: "No testicular enlargement by 14y." }
    },
    green: { en: ["Height spurt beginning in girls"], hi: ["लड़कियों में ग्रोथ स्पर्ट की शुरुआत"] },
    yellow: { en: ["Emotional mood swings"], hi: ["भावनात्मक उतार-चढ़ाव"] },
    red: { en: ["Eating disorder signs", "Excessive isolation"], hi: ["खाना छोड़ना, अत्यधिक डाइटिंग"] },
    parentTips: {
      nutrition: { en: "Iron-rich foods (jaggery, spinach, raisins, lentils) + Vitamin C.", hi: "आयरन व विटामिन सी युक्त आहार।" },
      safety: { en: "Open puberty discussions at home.", hi: "घर पर शारीरिक बदलावों पर चर्चा करें।" },
      play: { en: "Cardiovascular endurance sports.", hi: "हृदय स्वास्थ्य हेतु एरोबिक खेल।" },
      care: { en: "Tdap booster dose between 10-12 years.", hi: "10-12 वर्ष पर Tdap बूस्टर टीका लगवाएं।" }
    }
  },
  "12y": {
    name: { en: "12 Years", hi: "12 वर्ष" },
    iap: {
      boy: { minW: 28.5, maxW: 56.8, minH: 138.5, maxH: 160.0, minBmi: 14.7, ovBmi: 20.0, obBmi: 22.7 },
      girl: { minW: 28.2, maxW: 56.4, minH: 140.0, maxH: 160.5, minBmi: 14.8, ovBmi: 20.1, obBmi: 22.8 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 3", green: "Peak height velocity (8 cm/year).", yellow: "Irregular cycles in first 1-2 years post menarche.", red: "Hirsutism, severe cystic acne, or acanthosis nigricans (PCOS)." },
      boy: { stage: "Tanner Stage 2-3", green: "Penile lengthening, darker pubic hair, voice cracking.", yellow: "Mild pubertal gynecomastia disc.", red: "No genital pubertal changes." }
    },
    green: { en: ["Critical analytical thinking"], hi: ["विश्लेषणात्मक सोच"] },
    yellow: { en: ["Mild pubertal acne breakouts"], hi: ["चेहरे पर हल्के कील-मुंहासे"] },
    red: { en: ["Acanthosis Nigricans (dark velvety neck patches)"], hi: ["गर्दन पर काली मोटी परत"] },
    parentTips: {
      nutrition: { en: "1000 mg dietary calcium daily for bones.", hi: "मजबूत हड्डियों के लिए 1000mg कैल्शियम।" },
      safety: { en: "Zero gym protein powders or supplements.", hi: "जिम सप्लीमेंट्स से दूर रखें।" },
      play: { en: "Combat desk slouching with sports.", hi: "नियमित स्पोर्ट्स खेलें।" },
      care: { en: "Annual spine examination for scoliosis.", hi: "रीढ़ व थायरॉइड की नियमित जांच।" }
    }
  },
  "13y": {
    name: { en: "13 Years", hi: "13 वर्ष" },
    iap: {
      boy: { minW: 31.8, maxW: 63.0, minH: 144.5, maxH: 167.0, minBmi: 15.2, ovBmi: 20.6, obBmi: 23.5 },
      girl: { minW: 31.8, maxW: 62.1, minH: 145.0, maxH: 165.0, minBmi: 15.3, ovBmi: 20.9, obBmi: 23.6 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 3-4", green: "Menarche occurs ~2y post thelarche.", yellow: "Cycle lengths 21-45 days.", red: "Menarche not achieved by 15y." },
      boy: { stage: "Tanner Stage 3", green: "Testicular volume 10-12 ml. Peak growth begins (9-10 cm/yr).", yellow: "Transient nocturnal emissions.", red: "Failure of growth spurt onset." }
    },
    green: { en: ["Forms personal identity"], hi: ["स्वतंत्र पहचान का निर्माण"] },
    yellow: { en: ["Desire for privacy"], hi: ["प्राइवेसी की मांग"] },
    red: { en: ["Depression symptoms, severe weight imbalance"], hi: ["गंभीर अवसाद, वजन असंतुलन"] },
    parentTips: {
      nutrition: { en: "High zinc and protein diet for peak growth.", hi: "जिंक व प्रोटीन युक्त आहार।" },
      safety: { en: "8-9 hours deep sleep for growth hormone release.", hi: "ग्रोथ हार्मोन हेतु 8-9 घंटे की नींद।" },
      play: { en: "Bodyweight strength exercises.", hi: "बॉडीवेट एक्सरसाइज व दौड़।" },
      care: { en: "Catch-up vaccines review.", hi: "छूटे हुए टीकों का कैच-अप पूरा करें।" }
    }
  },
  "14y": {
    name: { en: "14 Years", hi: "14 वर्ष" },
    iap: {
      boy: { minW: 35.5, maxW: 69.0, minH: 151.0, maxH: 174.0, minBmi: 15.7, ovBmi: 21.3, obBmi: 24.3 },
      girl: { minW: 35.5, maxW: 67.0, minH: 148.5, maxH: 167.5, minBmi: 15.8, ovBmi: 21.6, obBmi: 24.3 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 4", green: "Cycles regularize.", yellow: "Mild cramping.", red: "Incapacitating pelvic pain or bleeding >8 days." },
      boy: { stage: "Tanner Stage 4", green: "Voice deepening, axillary hair.", yellow: "Mild facial acne.", red: "Testicular volume remains <4 ml." }
    },
    green: { en: ["Career focus"], hi: ["भविष्य के प्रति सजगता"] },
    yellow: { en: ["Exam stress"], hi: ["परीक्षाओं का तनाव"] },
    red: { en: ["Chronic heavy bleeding causing anemia"], hi: ["पीरियड्स में अत्यधिक रक्तस्राव"] },
    parentTips: {
      nutrition: { en: "Never skip breakfast; avoid trans-fats.", hi: "नाश्ता कभी न छोड़ें।" },
      safety: { en: "Stress resilience and mindfulness.", hi: "तनाव प्रबंधन सिखाएं।" },
      play: { en: "Competitive team athletics.", hi: "प्रतिस्पर्धी खेलकूद।" },
      care: { en: "Annual blood pressure & hemoglobin screen.", hi: "ब्लड प्रेशर व हीमोग्लोबिन जांच।" }
    }
  },
  "15y": {
    name: { en: "15 Years", hi: "15 वर्ष" },
    iap: {
      boy: { minW: 39.5, maxW: 74.5, minH: 157.0, maxH: 179.5, minBmi: 16.3, ovBmi: 22.0, obBmi: 25.0 },
      girl: { minW: 38.8, maxW: 71.0, minH: 150.5, maxH: 169.0, minBmi: 16.3, ovBmi: 22.2, obBmi: 24.9 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 4-5", green: "Height velocity tapers.", yellow: "Study weight fluctuations.", red: "Secondary Amenorrhea >90 days." },
      boy: { stage: "Tanner Stage 4-5", green: "Adult male musculature, mustache.", yellow: "Voice cracking resolving.", red: "Height lagging far below genetic potential." }
    },
    green: { en: ["Full social autonomy"], hi: ["पूर्ण सामाजिक परिपक्वता"] },
    yellow: { en: ["Study screen fatigue"], hi: ["स्क्रीन से थकान"] },
    red: { en: ["Absence of pubertal development, hypertension"], hi: ["यौवन विकास का अभाव, हाई बीपी"] },
    parentTips: {
      nutrition: { en: "2.5L daily hydration; balanced whole foods.", hi: "दिन में 2.5 लीटर पानी लें।" },
      safety: { en: "Strict zero-tobacco, zero-vape policy.", hi: "धूम्रपान व वेपिंग से सख्त बचाव।" },
      play: { en: "Certified trainer fitness or athletics.", hi: "प्रमाणित ट्रेनर की देखरेख में फिटनेस।" },
      care: { en: "Comprehensive adolescent health review.", hi: "किशोरावस्था संपूर्ण स्वास्थ्य जांच।" }
    }
  },
  "16y": {
    name: { en: "16 Years", hi: "16 वर्ष" },
    iap: {
      boy: { minW: 43.5, maxW: 79.5, minH: 161.5, maxH: 183.5, minBmi: 16.8, ovBmi: 22.6, obBmi: 25.6 },
      girl: { minW: 41.5, maxW: 74.0, minH: 151.5, maxH: 170.0, minBmi: 16.7, ovBmi: 22.7, obBmi: 25.4 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 5 (Adult)", green: "Final adult height reached (~98%).", yellow: "Mild PMS.", red: "Hirsutism and rapid unexplained weight gain." },
      boy: { stage: "Tanner Stage 5", green: "Testicular volume 15-25 ml, adult male build.", yellow: "Acne on back.", red: "Testicular volume <10 ml." }
    },
    green: { en: ["Adult cognitive reasoning"], hi: ["वयस्क बौद्धिक क्षमता"] },
    yellow: { en: ["Entrance examination stress"], hi: ["प्रतियोगी परीक्षाओं का दबाव"] },
    red: { en: ["Severe metabolic syndrome (BMI >27 with high BP/lipids)"], hi: ["मेटाबॉलिक सिंड्रोम (मोटापा, बीपी जोखिम)"] },
    parentTips: {
      nutrition: { en: "Avoid crash diets; maintain balanced nutrition.", hi: "क्रैश डाइटिंग न करें।" },
      safety: { en: "Strict no underage motorized driving.", hi: "बिना लाइसेंस वाहन न चलाएं।" },
      play: { en: "45 mins aerobic exercise daily.", hi: "प्रतिदिन 45 मिनट व्यायाम।" },
      care: { en: "Lipid profile and fasting sugar check if family history.", hi: "शुगर व लिपिड प्रोफाइल की जांच।" }
    }
  },
  "17y": {
    name: { en: "17 Years", hi: "17 वर्ष" },
    iap: {
      boy: { minW: 47.0, maxW: 83.5, minH: 164.0, maxH: 185.5, minBmi: 17.3, ovBmi: 23.1, obBmi: 26.2 },
      girl: { minW: 43.5, maxW: 76.5, minH: 152.0, maxH: 170.5, minBmi: 17.0, ovBmi: 23.0, obBmi: 25.8 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 5 (Adult)", green: "Complete maturity. Epiphyses fused.", yellow: "Stress cycle delays.", red: "Persistent severe oligomenorrhea." },
      boy: { stage: "Tanner Stage 5", green: "Linear growth completion.", yellow: "Desk study stiffness.", red: "Absence of facial/body hair and low energy." }
    },
    green: { en: ["Mature decision making"], hi: ["परिपक्व निर्णय क्षमता"] },
    yellow: { en: ["Pre-college anxiety"], hi: ["कॉलेज दाखिले की चिंता"] },
    red: { en: ["Severe obesity (BMI >97th centile) risking fatty liver"], hi: ["गंभीर मोटापा (फैटी लिवर जोखिम)"] },
    parentTips: {
      nutrition: { en: "Fresh home food; avoid late-night junk delivery.", hi: "घर का ताजा भोजन लें।" },
      safety: { en: "Mental health and emotional support.", hi: "मानसिक स्वास्थ्य संबल दें।" },
      play: { en: "Yoga, gym, swimming, cycling.", hi: "योग, जिम, तैराकी।" },
      care: { en: "Pre-college vaccines (Meningococcal, Tdap booster, MMR).", hi: "कॉलेज पूर्व टीकों की समीक्षा।" }
    }
  },
  "18y": {
    name: { en: "18 Years", hi: "18 वर्ष" },
    iap: {
      boy: { minW: 50.0, maxW: 87.0, minH: 165.5, maxH: 187.0, minBmi: 17.8, ovBmi: 23.6, obBmi: 26.8 },
      girl: { minW: 45.0, maxW: 78.5, minH: 152.5, maxH: 171.0, minBmi: 17.2, ovBmi: 23.3, obBmi: 26.1 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 5 (Adult)", green: "Adult reproductive maturity.", yellow: "Desk-bound college routine.", red: "PCOS symptoms." },
      boy: { stage: "Tanner Stage 5 (Adult)", green: "Full adult stature achieved.", yellow: "Sedentary study habits.", red: "Delayed maturity." }
    },
    green: { en: ["Complete adult independence"], hi: ["पूर्ण वयस्क स्वावलंबन"] },
    yellow: { en: ["University transition"], hi: ["उच्च शिक्षा में सामंजस्य"] },
    red: { en: ["Metabolic syndrome, high uric acid, early hypertension"], hi: ["यूरिक एसिड, बीपी या फैटी लिवर की समस्या"] },
    parentTips: {
      nutrition: { en: "Low glycemic index, high fiber, unsaturated healthy fats.", hi: "कम चीनी, अधिक फाइबर व स्वस्थ वसा।" },
      safety: { en: "Safe driving and zero substance abuse.", hi: "सुरक्षित ड्राइविंग व नशे से दूरी।" },
      play: { en: "150 minutes physical activity weekly.", hi: "साप्ताहिक 150 मिनट शारीरिक गतिविधि।" },
      care: { en: "Transition to adult medical records.", hi: "वयस्क स्वास्थ्य रिकॉर्ड तैयार रखें।" }
    }
  }
};

// ==========================================================
// IAP IYCF WEANING DATABASE (WITH YOUTUBE VIDEO LINKS)
// ==========================================================
const weaningEducationDatabase = {
  stages: [
    {
      stageKey: "stage6",
      ageRange: { en: "6 - 7 Months (Starter Phase)", hi: "6 - 7 माह (आरंभिक अवस्था)" },
      consistency: { en: "Smooth, thick purees & mash (falls slowly from spoon, NOT watery).", hi: "गाढ़ा मसला हुआ पेस्ट (चम्मच तिरछी करने पर धीरे गिरे, पानी जैसा पतला न हो)।" },
      frequency: { en: "1 to 2 small meals per day + frequent on-demand breastfeeding.", hi: "दिन में 1 से 2 बार (2-3 चम्मच से शुरुआत) + माँ का दूध जारी रखें।" },
      quantity: { en: "Start with 2-3 teaspoons; gradually build up to half a small katori (100 ml) per feed.", hi: "2-3 चम्मच से शुरू कर आधी छोटी कटोरी (100 ml) तक बढ़ाएं।" },
      ytQuery: "6 month baby food recipes without salt sugar",
      vegRecipes: [
        { 
          name: { en: "Moong Dal & Suji Sheera (No Sugar)", hi: "मूंग दाल व सूजी शीरा (बिना चीनी)" }, 
          prep: { en: "Roast 1 tbsp suji with 1/2 tsp desi ghee, add cooked yellow moong dal water/mash, cook till smooth.", hi: "1/2 चम्मच देसी घी में 1 चम्मच सूजी भूनें, उबली पीली मूंग दाल का पेस्ट मिलाकर गाढ़ा पकाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=6+month+baby+moong+dal+suji+puree+recipe"
        },
        { 
          name: { en: "Steamed Apple & Carrot Puree", hi: "उबला हुआ सेब व गाजर प्यूरी" }, 
          prep: { en: "Steam 1/2 peeled apple and 1/2 carrot for 10 mins. Puree with fork with 2 drops of ghee.", hi: "सेब व गाजर को 10 मिनट भाप में पकाएं। कांटे से मसलकर 2 बूंद घी मिलाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=apple+carrot+puree+for+6+month+baby"
        },
        { 
          name: { en: "Mashed Pumpkin & Moong Dal Mash (Kaddu-Dal)", hi: "कद्दू व मूंग दाल प्यूरी" }, 
          prep: { en: "Steam yellow pumpkin with washed yellow moong dal. Fork mash with 1/2 tsp ghee for calorie density.", hi: "पीले कद्दू को मूंग दाल के साथ उबालें और 1/2 चम्मच देसी घी मिलाकर मसलें।" },
          ytUrl: "https://www.youtube.com/results?search_query=pumpkin+dal+puree+for+6+month+baby"
        },
        { 
          name: { en: "Steamed Pear & Cardamom Mash", hi: "उबली नाशपाती प्यूरी" }, 
          prep: { en: "Peel and steam pear slices for 8 mins. Fork mash with a tiny pinch of roasted cardamom powder for digestion.", hi: "नाशपाती को भाप में पकाकर मसलें और चुटकी भर इलायची पाउडर मिलाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=pear+puree+for+baby+6+months"
        }
      ],
      nonVegRecipes: [
        { 
          name: { en: "Steamed Egg Yolk Mash (Starter)", hi: "उबले अंडे की जर्दी (Egg Yolk Mash)" }, 
          prep: { en: "Hard boil an egg (12 mins). Mash 1/4th of the yellow yolk with a few drops of warm breastmilk.", hi: "अंडे को 12 मिनट उबालें। केवल पीली जर्दी (1/4 भाग) लेकर माँ के दूध में मसलें।" },
          ytUrl: "https://www.youtube.com/results?search_query=egg+yolk+for+6+month+baby+recipe"
        },
        { 
          name: { en: "Clear Chicken Broth with Mashed Potato", hi: "चिकन शोरबा व मसला आलू" }, 
          prep: { en: "Pressure cook chicken bone-in with mild turmeric. Mix 3 tbsp clear broth with boiled mashed potato.", hi: "हल्दी के साथ चिकन उबालें। इसके 3 चम्मच सूप में उबला आलू मसलकर खिलाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=chicken+soup+puree+for+6+month+baby"
        }
      ]
    },
    {
      stageKey: "stage8",
      ageRange: { en: "8 - 9 Months (Lumpy & Finger Food Phase)", hi: "8 - 9 माह (दानेदार व फिंगर फूड अवस्था)" },
      consistency: { en: "Thick lumpy mashed food, soft finger-sized cooked pieces baby can hold with gums.", hi: "दानेदार मसला हुआ भोजन और हाथ से पकड़ने योग्य नरम टुकड़े (Finger Foods)।" },
      frequency: { en: "3 main meals per day + 1 healthy mid-day snack + breastfeeding.", hi: "दिन में 3 मुख्य भोजन + 1 हल्का नाश्ता + माँ का दूध।" },
      quantity: { en: "Half a standard katori (125 ml) per meal.", hi: "आधी मानक कटोरी (125 ml) प्रति भोजन।" },
      ytQuery: "8 to 9 month baby food recipes homemade hindi",
      vegRecipes: [
        { 
          name: { en: "Mixed Vegetable & Dal Khichdi with Ghee", hi: "सब्जी-दाल खिचड़ी (देसी घी युक्त)" }, 
          prep: { en: "Cook rice, yellow moong dal, grated lauki & pumpkin with 1/2 tsp ghee & jeera powder.", hi: "चावल, मूंग दाल, कद्दू व लौकी को 1/2 चम्मच घी व जीरे के साथ पकाकर मसलें।" },
          ytUrl: "https://www.youtube.com/results?search_query=dal+khichdi+for+8+month+baby"
        },
        { 
          name: { en: "Sprouted Ragi (Nachni) & Apple Porridge", hi: "रागी व सेब शीरा (बिना चीनी)" }, 
          prep: { en: "Cook 1 tbsp sprouted ragi flour in water with 1/2 tsp ghee. Add grated steamed apple.", hi: "1 चम्मच रागी का आटा पानी व घी में पकाएं और घिसा उबला सेब मिलाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=ragi+apple+porridge+for+baby+8+months"
        },
        { 
          name: { en: "Lauki & Fresh Paneer Khichdi", hi: "लौकी व ताजा पनीर खिचड़ी" }, 
          prep: { en: "Pressure-cook rice and dal with peeled lauki. Mash leaving soft lumps and stir in 1 tbsp crumbled paneer.", hi: "दाल-चावल में लौकी पकाएं और ऊपर से 1 चम्मच ताजा मसला पनीर मिलाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=paneer+khichdi+for+8+month+baby"
        },
        { 
          name: { en: "Soft Steamed Carrot & Beetroot Sticks (Finger Food)", hi: "गाजर व चुकंदर स्टिक्स (फिंगर फूड)" }, 
          prep: { en: "Cut carrots into thick 2-inch batons. Steam until soft enough to squash between fingers.", hi: "गाजर को लंबे टुकड़ों में काटें और इतना उबालें कि हाथ से दबाने पर दब जाए।" },
          ytUrl: "https://www.youtube.com/results?search_query=baby+finger+food+steamed+carrot+sticks"
        }
      ],
      nonVegRecipes: [
        { 
          name: { en: "Whole Boiled Egg Mash with Curd", hi: "पूरा उबला अंडा व दही" }, 
          prep: { en: "Chop 1/2 hard-boiled whole egg finely, fold into 2 tbsp fresh homemade curd with roasted cumin.", hi: "आधा उबला अंडा बारीक काटकर 2 चम्मच ताजे दही व भुने जीरे के साथ मिलाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=boiled+egg+recipes+for+8+month+baby"
        },
        { 
          name: { en: "Shredded Chicken Moong Khichdi", hi: "बारीक चिकन कीमा खिचड़ी" }, 
          prep: { en: "Cook finely minced shredded chicken breast with rice, yellow moong dal and ghee till tender.", hi: "बारीक चिकन कीमा चावल, मूंग दाल और घी के साथ एकदम नरम पकाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=chicken+khichdi+for+8+month+baby"
        },
        { 
          name: { en: "Steamed Deboned Fish & Rice Mash", hi: "कांटा-रहित मछली व चावल मैश" }, 
          prep: { en: "Steam freshwater fish fillet. Check meticulously for zero bones, mash with rice and ghee.", hi: "कांटे निकालकर मछली को भाप में पकाएं और चावल व घी के साथ मसलें।" },
          ytUrl: "https://www.youtube.com/results?search_query=fish+mash+for+8+month+baby+recipe"
        }
      ]
    },
    {
      stageKey: "stage10",
      ageRange: { en: "10 - 12 Months (Family Pot Food Transition)", hi: "10 - 12 माह (घर के भोजन की अवस्था)" },
      consistency: { en: "Finely chopped family food, soft roti pieces soaked in dal, chewable soft bites.", hi: "घर का सामान्य भोजन (हल्के मसाले), दाल में भीगी नरम रोटी, चबाने योग्य नरम टुकड़े।" },
      frequency: { en: "3 nutritious main meals + 2 healthy finger food snacks + continued breastfeeding.", hi: "3 बार मुख्य भोजन + 2 बार पौष्टिक नाश्ता (फल/चीला) + स्तनपान जारी रखें।" },
      quantity: { en: "Three-quarters to 1 full standard katori (175 - 200 ml) per meal.", hi: "पौना से 1 पूरी कटोरी (175 - 200 ml) प्रति भोजन।" },
      ytQuery: "10 to 12 month baby food recipes family meal indian",
      vegRecipes: [
        { 
          name: { en: "Dal-Soaked Soft Roti with Ghee & Curd", hi: "दाल में भीगी नरम रोटी व ताजा दही" }, 
          prep: { en: "Soak 1/2 fresh whole wheat roti in thick dal with 1 tsp desi ghee for 10 mins. Serve with curd.", hi: "आधी रोटी को गाढ़ी दाल और 1 चम्मच देसी घी में 10 मिनट भिगोकर मसलें। साथ में दही दें।" },
          ytUrl: "https://www.youtube.com/results?search_query=dal+roti+for+10+month+baby"
        },
        { 
          name: { en: "Moong Dal & Vegetable Dalia (Broken Wheat)", hi: "मूंग दाल व सब्जी दलिया" }, 
          prep: { en: "Cook roasted dalia with yellow moong dal, grated carrots and peas in light ghee and cumin until soft.", hi: "भुना दलिया मूंग दाल व गाजर के साथ घी व जीरे में एकदम नरम पकाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=vegetable+daliya+for+10+month+baby"
        },
        { 
          name: { en: "Besan & Paneer Vegetable Cheela", hi: "बेसन व पनीर का पौष्टिक चीला" }, 
          prep: { en: "Make small bite-sized soft cheelas with grated carrot & paneer cooked in light ghee.", hi: "बारीक घिसी गाजर व पनीर मिलाकर तवे पर देसी घी में नरम छोटे चीले बनाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=paneer+besan+cheela+for+baby"
        },
        { 
          name: { en: "Curd Idli Bites with Desi Ghee", hi: "दही इडली बाइट्स (देसी घी युक्त)" }, 
          prep: { en: "Steam soft rice-urad idlis. Cut into bite-sized finger squares, dip in curd with drops of ghee.", hi: "नरम इडली के छोटे चौकोर टुकड़े काटें, ताजे दही व 2 बूंद घी में मिलाकर दें।" },
          ytUrl: "https://www.youtube.com/results?search_query=idli+for+10+month+baby"
        }
      ],
      nonVegRecipes: [
        { 
          name: { en: "Egg Bhurji (Scrambled) with Soft Roti", hi: "अंडा भुर्जी व नरम रोटी" }, 
          prep: { en: "Scramble 1 whole egg in 1/2 tsp ghee with finely chopped tomatoes and coriander (no salt/chili). Serve with soft roti.", hi: "टमाटर व धनिए के साथ 1 अंडा घी में भूनें (बिना नमक/मिर्च) और नरम रोटी के साथ दें।" },
          ytUrl: "https://www.youtube.com/results?search_query=egg+bhurji+for+10+month+baby+without+salt"
        },
        { 
          name: { en: "Chicken Keema & Vegetable Roti Mash", hi: "चिकन कीमा व सब्जी रोटी मैश" }, 
          prep: { en: "Cook tender chicken mince with mild cumin and turmeric. Mix with soft roti soaked in mild gravy.", hi: "चिकन कीमा हल्दी-जीरे में पकाएं और दाल/ग्रेवी में भीगी नरम रोटी के साथ खिलाएं।" },
          ytUrl: "https://www.youtube.com/results?search_query=chicken+keema+for+10+month+baby"
        }
      ]
    }
  ]
};

// ==========================================================
// 18-MONTH TOILET TRAINING PROTOCOL DATABASE (IAP GUIDELINES)
// ==========================================================
const toiletTrainingDatabase = {
  title: {
    en: "18-Month Pediatric Toilet Training Guide (Readiness & Protocol)",
    hi: "18 माह का शिशु: टॉयलेट ट्रेनिंग के नियम एवं मार्गदर्शन"
  },
  intro: {
    en: "At 18 months, many toddlers begin showing physiological and neurological readiness for toilet training. Pediatricians recommend a child-oriented approach based on readiness signals.",
    hi: "18 माह की उम्र में बच्चे शारीरिक और मानसिक रूप से शौच नियंत्रण (Toilet Training) के संकेत देने लगते हैं। स्वाभाविक संकेतों के अनुसार सिखाना सबसे सफल रहता है।"
  },
  readinessSigns: {
    en: [
      "Stays dry for at least 2 consecutive hours during the day or wakes up dry from naps.",
      "Has predictable, regular bowel movements at specific times of the day.",
      "Expresses facial discomfort, grunts, or gestures when diaper is wet or soiled.",
      "Can walk independently, pull pants up/down with minimal help, and sit steadily.",
      "Understands simple 2-step instructions (e.g., 'Sit on potty chair', 'Bring toy')."
    ],
    hi: [
      "दिन में कम से कम 2 घंटे तक डायपर सूखा रहना या नींद के बाद सूखा उठना।",
      "शौच का एक निश्चित समय होना (जैसे नाश्ते के बाद)।",
      "डायपर गीला होने पर खींचना या असहजता जताना।",
      "स्वतंत्र रूप से चलना और पैंट नीचे-ऊपर करने में हाथ लगाना।",
      "सरल 2-स्टेप निर्देश समझना।"
    ]
  },
  steps: [
    {
      num: 1,
      title: { en: "Introduce the Child-Sized Potty Chair", hi: "बाल-अनुकूल पॉटी सीट से परिचय" },
      desc: { 
        en: "Place a small, stable potty chair on the floor. Let the toddler sit on it fully clothed first while reading stories to remove any fear.",
        hi: "कमरे में बच्चे के आकार की पॉटी चेयर रखें। शुरुआत में कपड़े पहने हुए ही उस पर बैठने दें ताकि डर निकल जाए।"
      }
    },
    {
      num: 2,
      title: { en: "Establish Timed Sittings (Post-Meal Routine)", hi: "भोजन के 15-20 मिनट बाद बैठाने की आदत" },
      desc: {
        en: "Bowel reflexes are highest 15-20 minutes after breakfast and lunch. Sit your toddler on the potty for 3 to 5 minutes without pressure.",
        hi: "भोजन के 15-20 मिनट बाद पेट की प्राकृतिक गति तेज होती है। इस समय बच्चे को 3-5 मिनट पॉटी पर बैठाएं।"
      }
    },
    {
      num: 3,
      title: { en: "Positive Reinforcement & Zero Punishment", hi: "सकारात्मक प्रोत्साहन (Positive Praise)" },
      desc: {
        en: "Praise attempts enthusiastically with high-fives. Never shame or scold accidents—accidents are an expected part of bladder learning.",
        hi: "हर छोटे प्रयास पर तारीफ करें। कपड़े खराब होने पर कभी न डांटें—यह सीखने का स्वाभाविक हिस्सा है।"
      }
    },
    {
      num: 4,
      title: { en: "Switch to Cotton Training Underwear during Daytime", hi: "दिन के समय सूती ट्रेनिंग पैंट का उपयोग" },
      desc: {
        en: "Cotton training pants help the toddler's brain associate the wet sensation with bladder release, unlike modern super-absorbent diapers.",
        hi: "दिन में सूती पैंट पहनाने से बच्चे का दिमाग पेशाब के एहसास को तुरंत पहचानता है।"
      }
    }
  ],
  donts: {
    en: [
      "Never force a crying or resisting toddler to sit on the potty chair (causes stool withholding and constipation).",
      "Never flush the big toilet while the toddler is sitting on it (loud rushing noise can cause acute phobia).",
      "Avoid starting toilet training during major life disruptions or fever illness."
    ],
    hi: [
      "रोते हुए बच्चे को जबरदस्ती पॉटी सीट पर न बैठाएं (इससे कब्ज हो सकती है)।",
      "बच्चे के बैठे रहने पर फ्लश न चलाएं।",
      "बच्चे के बीमार होने के दौरान ट्रेनिंग शुरू न करें।"
    ]
  },
  ytLink: "https://www.youtube.com/results?search_query=toddler+toilet+training+tips+pediatrician+hindi"
};

// ADOLESCENT HEALTH FAQ DATABASE
const adolescentFaqDatabase = [
  {
    category: "girls",
    icon: "fa-solid fa-droplet",
    color: "#db2777",
    q: { en: "1. At what age should a girl have her first period (Menarche)?", hi: "1. लड़कियों में पहला मासिक धर्म (Menarche) किस उम्र में होना चाहिए?" },
    a: { en: "In Indian girls, menarche typically occurs between 11.5 and 13.5 years (usually about 2 years after breast budding begins). If a girl has not started periods by 15 years, a pediatric evaluation is recommended.", hi: "भारतीय लड़कियों में पहला पीरियड आमतौर पर 11.5 से 13.5 वर्ष की उम्र में आता है। यदि 15 वर्ष तक न आए, तो डॉक्टर से परामर्श लें।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-calendar-days",
    color: "#db2777",
    q: { en: "2. Are irregular periods normal in the first 1-2 years?", hi: "2. क्या पहले 1-2 वर्षों में पीरियड्स का अनियमित होना सामान्य है?" },
    a: { en: "Yes. Due to the immaturity of the hormonal axis, cycles are often anovulatory. Gaps between 21 to 45 days are common.", hi: "हाँ, शुरुआत में हार्मोनल सिस्टम परिपक्व होने में 1 से 2 साल का समय लगता है। 21 से 45 दिनों का अंतराल सामान्य है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-person-arrow-up-from-line",
    color: "#db2777",
    q: { en: "3. Does a girl stop growing taller once periods start?", hi: "3. क्या पीरियड शुरू होने के बाद लड़कियों की लंबाई बढ़ना रुक जाती है?" },
    a: { en: "No. On average, girls gain about 5 to 7.5 cm (2 to 3 inches) in the 1.5 to 2 years following menarche before growth plates fuse.", hi: "नहीं, लंबाई तुरंत नहीं रुकती। पीरियड शुरू होने के बाद औसतन 5 से 7.5 सेमी (2-3 इंच) तक लंबाई और बढ़ती है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-shield-virus",
    color: "#db2777",
    q: { en: "4. Why is the HPV Vaccine critical for teenage girls?", hi: "4. किशोरियों के लिए HPV (सर्वाइकल कैंसर) का टीका क्यों आवश्यक है?" },
    a: { en: "The HPV vaccine prevents >90% of cervical cancers later in life. Recommended for all girls aged 9 to 14 years (2-dose schedule at 0 and 6 months).", hi: "एचपीवी टीका भविष्य में सर्वाइकल कैंसर से बचाता है। IAP 9 से 14 वर्ष की बालिकाओं को 2 डोज लगवाने की सिफारिश करता है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-circle-exclamation",
    color: "#db2777",
    q: { en: "5. What are early warning signs of PCOS in teen girls?", hi: "5. टीनएज लड़कियों में PCOS के शुरुआती लक्षण क्या हैं?" },
    a: { en: "Gaps >60 days between periods, male-pattern facial hair, severe cystic acne, and dark velvety patches on the neck (Acanthosis Nigricans).", hi: "लगातार 60 दिनों से ज्यादा पीरियड न आना, चेहरे पर बाल और गर्दन पर काली मोटी त्वचा पीसीओएस के मुख्य संकेत हैं।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-capsules",
    color: "#db2777",
    q: { en: "6. How to identify and prevent Anemia in teenage girls?", hi: "6. किशोरियों में खून की कमी (एनीमिया) की पहचान कैसे करें?" },
    a: { en: "Fatigue, pale nails, dizziness, poor concentration. Prevent with iron-rich foods (jaggery, spinach, raisins, lentils) + Vitamin C and annual checks.", hi: "थकान, पीलापन व पढ़ाई में ध्यान न लगना एनीमिया के लक्षण हैं। गुड़, पालक व दालों के साथ वार्षिक हीमोग्लोबिन जांच आवश्यक है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-bed",
    color: "#db2777",
    q: { en: "7. Is severe period pain (Dysmenorrhea) normal?", hi: "7. क्या माहवारी के दौरान अत्यधिक पेट दर्द सामान्य है?" },
    a: { en: "Mild cramping is common. Severe pain causing school absenteeism or vomiting requires clinical review.", hi: "हल्का दर्द सामान्य है, लेकिन अगर दर्द के कारण स्कूल छूटे या उल्टी हो, तो डॉक्टर से परामर्श लें।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-hand-holding-heart",
    color: "#db2777",
    q: { en: "8. What is the safest menstrual hygiene practice for teens?", hi: "8. टीनएजर्स के लिए सुरक्षित माहवारी स्वच्छता क्या है?" },
    a: { en: "Change sanitary pads every 4 to 6 hours. Wash with plain clean water; avoid perfumed chemical intimate washes.", hi: "पैड को हर 4-6 घंटे में बदलें, केवल सादे पानी से सफाई रखें और सूती इनरवेयर पहनें।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-bowl-rice",
    color: "#db2777",
    q: { en: "9. How to handle extreme dieting or body image anxiety?", hi: "9. वजन घटाने के लिए खाना छोड़ने की आदत को कैसे संभालें?" },
    a: { en: "Crash dieting deprives bones and brain of critical calcium, zinc, and iron. Emphasize sports and balanced meals.", hi: "किशोरावस्था में डाइटिंग से हड्डियों का विकास रुक सकता है। पौष्टिक भोजन और खेलकूद पर ध्यान दें।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-shield-halved",
    color: "#db2777",
    q: { en: "10. What is Precocious (Early) Puberty in girls?", hi: "10. बालिकाओं में समय पूर्व यौवन (Precocious Puberty) क्या है?" },
    a: { en: "Breast budding or pubic hair before 8 years of age is defined as precocious puberty. It requires immediate pediatric hormone assessment.", hi: "8 वर्ष से पहले स्तन वृद्धि या यौवन लक्षण आना समय पूर्व यौवन है, अतः तुरंत डॉक्टर को दिखाएं।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "11. When does puberty start in boys and what is the first sign?", hi: "11. लड़कों में यौवन किस उम्र में शुरू होता है और पहला लक्षण क्या है?" },
    a: { en: "Puberty typically begins between 9.5 and 13.5 years. The first physical sign is testicular enlargement (>4 ml volume).", hi: "लड़कों में प्यूबर्टी 9.5 से 13.5 वर्ष के बीच शुरू होती है। सबसे पहला लक्षण अंडकोष के आकार में वृद्धि होना है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-arrow-trend-up",
    color: "#2563eb",
    q: { en: "12. When do boys experience their peak height growth spurt?", hi: "12. लड़कों की लंबाई सबसे तेजी से किस उम्र में बढ़ती है?" },
    a: { en: "Boys have peak height spurt between 13 and 15.5 years (Tanner Stage 3-4), growing 9 to 11 cm in a single year with adequate nutrition and sleep.", hi: "लड़कों का ग्रोथ स्पर्ट 13 से 15.5 वर्ष के बीच आता है। इस दौरान वे 1 साल में 9 से 11 सेमी तक बढ़ सकते हैं।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-microphone",
    color: "#2563eb",
    q: { en: "13. Why does a teenage boy's voice crack and deepen?", hi: "13. टीनएज में लड़कों की आवाज भारी क्यों होती है?" },
    a: { en: "Testosterone causes rapid enlargement of the larynx (voice box) and lengthening of the vocal cords. Cracking occurs temporarily between 12-14y.", hi: "टेस्टोस्टेरोन से वोकल कॉर्ड्स का आकार बढ़ता है, जिससे कुछ समय आवाज भारी या फटने लगती है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-heart-pulse",
    color: "#2563eb",
    q: { en: "14. Is breast swelling (Gynecomastia) normal in teenage boys?", hi: "14. क्या टीनएज लड़कों में छाती में हल्की गांठ सामान्य है?" },
    a: { en: "Yes. Up to 50-60% of boys develop temporary pubertal gynecomastia due to transient hormonal imbalances. It resolves naturally in 12-18 months.", hi: "हाँ, 12 से 14 वर्ष में हार्मोनल असंतुलन से 50% लड़कों में हल्की गांठ बन जाती है, जो 1 से 1.5 साल में ठीक हो जाती है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-moon",
    color: "#2563eb",
    q: { en: "15. Are nocturnal emissions ('wet dreams') normal in boys?", hi: "15. क्या लड़कों में नाइटफॉल होना सामान्य है?" },
    a: { en: "Completely normal and healthy physiological milestone. It causes zero weakness or physical harm.", hi: "यह पूर्णतः प्राकृतिक और स्वस्थ शारीरिक क्रिया है। इससे कोई कमजोरी नहीं आती।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-dumbbell",
    color: "#2563eb",
    q: { en: "16. Is heavy gym weightlifting safe before age 16?", hi: "16. क्या 16 साल से पहले जिम में भारी वजन उठाना सुरक्षित है?" },
    a: { en: "Heavy maximal weightlifting should be avoided before growth plates fuse. Bodyweight exercises (pushups, pullups, swimming) build superior strength safely.", hi: "ग्रोथ प्लेट्स बंद होने से पहले भारी वजन उठाना रीढ़ के लिए हानिकारक हो सकता है। बॉडीवेट एक्सरसाइज सबसे सुरक्षित हैं।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-ban",
    color: "#2563eb",
    q: { en: "17. Why are gym protein powders risky for teens?", hi: "17. जिम प्रोटीन शेक टीनएजर्स के लिए हानिकारक क्यों हैं?" },
    a: { en: "Unregulated powders often strain teenage kidneys and livers. Real food (eggs, paneer, sprouts, milk, nuts) fulfills 100% of athletic protein needs.", hi: "बाजारू प्रोटीन पाउडर से किडनी पर दबाव पड़ता है। घर का भोजन (अंडा, पनीर, स्प्राउट्स) पर्याप्त है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-bed",
    color: "#2563eb",
    q: { en: "18. How does deep sleep impact a boy's height growth?", hi: "18. गहरी नींद लड़कों की लंबाई बढ़ाने में कैसे मदद करती है?" },
    a: { en: "Over 70% of human Growth Hormone is released during deep sleep between 10 PM and 4 AM. Late-night mobile browsing suppresses growth.", hi: "ग्रोथ हार्मोन का 70% स्राव रात में गहरी नींद में होता है। देर रात मोबाइल चलाने से लंबाई पर बुरा असर पड़ता है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-clock-rotate-left",
    color: "#2563eb",
    q: { en: "19. What is Constitutional Delay of Growth (Late Bloomers)?", hi: "19. देर से प्यूबर्टी आना (Constitutional Delay) क्या होता है?" },
    a: { en: "Common genetic trait where puberty starts late (after 14y). These boys catch up completely and reach normal adult height by 18-19y.", hi: "कुछ लड़कों में प्यूबर्टी देर से शुरू होती है। वे 18-19 साल तक अपना पूरा जेनेटिक कद हासिल कर लेते हैं।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-shield-virus",
    color: "#2563eb",
    q: { en: "20. What critical vaccines do teenage boys need?", hi: "20. टीनएज लड़कों को कौन से टीके लगवाने चाहिए?" },
    a: { en: "1. Tdap Booster (at 10-12y). 2. Annual Influenza vaccine. 3. Catch-up Hepatitis-B, MMR, and Varicella.", hi: "1. 10-12 वर्ष पर Tdap बूस्टर। 2. वार्षिक फ्लू का टीका। 3. छूटे हुए हेपेटाइटिस-बी और चेचक के टीके।" }
  }
];

// CLINIC BLOG ARTICLES REPOSITORY
const blogArticles = {
  iapSchedule: {
    title: "Official IAP Immunization Chart (Indian Academy of Pediatrics)",
    content: `
      <p>Comprehensive age-wise vaccine schedule recommended by the Indian Academy of Pediatrics (IAP) for children from birth to 18 years:</p>
      <div style="overflow-x:auto;">
        <table class="vaccine-table">
          <thead>
            <tr><th>Age Window</th><th>Recommended Vaccines</th><th>Protects Against</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>At Birth</strong></td><td>BCG, OPV-0, Hepatitis B-1</td><td>Tuberculosis, Polio, Hep-B</td></tr>
            <tr><td><strong>6 Weeks</strong></td><td>DTwP/DTaP-1, IPV-1, Hep B-2, Hib-1, Rotavirus-1, PCV-1</td><td>Diphtheria, Tetanus, Pertussis, Polio, Hib, Diarrhea, Pneumonia</td></tr>
            <tr><td><strong>10 Weeks</strong></td><td>DTwP/DTaP-2, IPV-2, Hib-2, Rotavirus-2, PCV-2</td><td>Primary Infant Immunization Series</td></tr>
            <tr><td><strong>14 Weeks</strong></td><td>DTwP/DTaP-3, IPV-3, Hib-3, Rotavirus-3, PCV-3</td><td>Primary Series Completion</td></tr>
            <tr><td><strong>6 & 7 Months</strong></td><td>Influenza (Flu) Dose 1 & 2</td><td>Seasonal Viral Pneumonia & Flu</td></tr>
            <tr><td><strong>9 Months</strong></td><td>MMR-1, Oral Polio Booster</td><td>Measles, Mumps, Rubella</td></tr>
            <tr><td><strong>12 Months</strong></td><td>Hepatitis A (Live/Inactivated-1), Japanese Encephalitis</td><td>Liver Infection / Jaundice</td></tr>
            <tr><td><strong>15 Months</strong></td><td>MMR-2, Varicella-1 (Chickenpox), PCV Booster</td><td>Viral Exanthems & Invasive Pneumococcal</td></tr>
            <tr><td><strong>16 - 18 Months</strong></td><td>DTwP/DTaP Booster-1, IPV Booster-1, Hib Booster</td><td>Toddler Immunity Reinforcement</td></tr>
            <tr><td><strong>2 Years</strong></td><td>Typhoid Conjugate (TCV) Booster</td><td>Enteric Typhoid Fever</td></tr>
            <tr><td><strong>4 - 5 Years</strong></td><td>DTwP/DTaP Booster-2, MMR-3, Varicella-2, OPV</td><td>Pre-School Booster Series</td></tr>
            <tr><td><strong>9 - 14 Years</strong></td><td>HPV Vaccine (2 Doses for Girls), Tdap Booster</td><td>Cervical Cancer & Tetanus/Pertussis</td></tr>
          </tbody>
        </table>
      </div>
      <div class="article-cta-box">
        <p>Ensure your child never misses a critical vaccine milestone. Consult Dr. Dinesh Mittal for verified WHO/IAP cold-chain vaccination.</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Book Vaccination Consultation</button>
      </div>
    `
  },
  blog1: {
    title: "Understanding Painless vs Painful Vaccines for Babies",
    content: `
      <p>One of the most common questions parents ask in our clinic is: <em>"Doctor, should we opt for the painless or the conventional vaccine for our baby?"</em></p>
      <h4 class="article-section-title">The Scientific Difference</h4>
      <p>The difference lies in the <strong>Pertussis (Whooping Cough)</strong> component of the 6-in-1 / DTP vaccine:</p>
      <ul>
        <li><strong>Conventional (DTwP / "Painful"):</strong> Contains whole-cell killed pertussis bacteria. It triggers a strong immune response, often accompanied by 24-48 hours of high fever and local swelling.</li>
        <li><strong>Acellular (DTaP / "Painless"):</strong> Contains only purified pertussis antigens. It causes significantly less fever and discomfort while providing protective immunity.</li>
      </ul>
      <div class="article-cta-box">
        <p>Have questions regarding your infant's upcoming vaccination schedule?</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Book Vaccine Appointment</button>
      </div>
    `
  },
  blog2: {
    title: "Essential Newborn Care Tips for First-Time Parents",
    content: `
      <p>Bringing a newborn home is joyful, but the first 30 days can feel overwhelming. Here are essential pediatrician-backed guidelines:</p>
      <h4 class="article-section-title">1. Feeding Schedules</h4>
      <p>Feed on demand (every 2 to 3 hours). A well-hydrated infant should pass urine at least 6 to 8 times in 24 hours and regain birth weight by day 10 to 14.</p>
      <h4 class="article-section-title">2. Umbilical Cord Hygiene</h4>
      <p>Keep the umbilical cord stump strictly dry and clean. Avoid applying oil, turmeric, or powders.</p>
      <div class="article-cta-box">
        <p>Schedule your newborn checkup with Dr. Dinesh Mittal in Sector 3 Rohini.</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Schedule Newborn Checkup</button>
      </div>
    `
  },
  blog3: {
    title: "How to Safely Manage High Fever in Toddlers at Home",
    content: `
      <p>Fever is a natural physiological defense mechanism indicating that your child's immune system is fighting an infection. Here is how to handle it safely:</p>
      <h4 class="article-section-title">1. Accurate Temperature Measurement</h4>
      <p>Use a digital axillary thermometer under the armpit. A reading above 100.4°F (38°C) is considered fever.</p>
      <h4 class="article-section-title">2. Lukewarm Sponge Bathing</h4>
      <p>Use normal tap/lukewarm water on a soft cloth. <strong>Never use ice water or alcohol rubs</strong>.</p>
      <div class="article-cta-box">
        <p>Need urgent advice for persistent childhood fever?</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Book Consultation</button>
      </div>
    `
  },
  blog4: {
    title: "Monsoon Influenza in Delhi: Parent Guide",
    content: `
      <p>During the monsoon and seasonal transitions in Delhi NCR, pediatric clinics see a surge in viral influenza, RSV, and throat infections.</p>
      <h4 class="article-section-title">Common Symptoms</h4>
      <p>Sudden high fever, running nose, dry cough, throat pain, body aches, and loss of appetite.</p>
      <div class="article-cta-box">
        <p>Protect your child with the latest annual quadrivalent flu vaccine at our Rohini clinic.</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Book Flu Vaccination</button>
      </div>
    `
  }
};
// ==========================================================
// GLOBAL BILINGUAL DICTIONARY (Everyday Conversational Hindi)
// ==========================================================
const siteTranslations = {
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

    blog_badge: "Health Education",
    blog_heading: "Parenting & Health Insights",
    blog_view_all: "View All Guides",
    blog_featured_badge: "Latest Pediatric Guide",
    blog_featured_title: "Air Purifiers for Delhi Pollution: A Pediatric Deep Dive & Buying Guide",
    blog_featured_desc: "Do purifiers truly protect child lungs against winter smog? Learn certified HEPA H13 standards, CADR ratings for Delhi bedrooms, and critical household mistakes that cause purifiers to fail.",
    blog_read_btn: "Read Full Guide",
    blog_explore_btn: "Browse All 8 Articles in Health Library",

    loc_title: "Visit Our Clinic",
    loc_card_title: "Clinic Details",
    loc_address_label: "Address:",
    loc_hours_label: "Consultation Hours:",
    loc_hours_text: "Mon - Sat: 10:00 AM - 1:00 PM | 6:00 PM - 8:30 PM<br>Sunday: 11:00 AM - 12:00 PM",
    loc_maps_btn: "Open Directions in Google Maps",

    teen_badge: "Ages 10 - 18 Years",
    teen_heading: "Adolescent Health & Puberty Guidance",
    teen_btn_all: "All (20)",
    teen_btn_girls: "Girls",
    teen_btn_boys: "Boys",
    teen_book_btn: "Book Confidential Teen Consult"
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

    blog_badge: "स्वास्थ्य जागरूकता",
    blog_heading: "पेरेंटिंग एवं बाल स्वास्थ्य मार्गदर्शन",
    blog_view_all: "सभी गाइड देखें",
    blog_featured_badge: "नवीनतम बाल स्वास्थ्य गाइड",
    blog_featured_title: "दिल्ली के प्रदूषण में क्या एयर प्यूरीफायर खरीदना चाहिए? बाल रोग विशेषज्ञ गाइड",
    blog_featured_desc: "क्या प्यूरीफायर सचमुच बच्चों के फेफड़ों को बचाते हैं? True HEPA H13 मानक, कमरे के अनुसार CADR रेटिंग, और वे गलतियां जिनसे प्यूरीफायर काम नहीं करता।",
    blog_read_btn: "पूरी गाइड पढ़ें",
    blog_explore_btn: "सभी 8 स्वास्थ्य लेख व गाइड देखें",

    loc_title: "क्लिनिक समय व पता",
    loc_card_title: "क्लिनिक विवरण",
    loc_address_label: "पता:",
    loc_hours_label: "परामर्श का समय:",
    loc_hours_text: "सोमवार - शनिवार: सुबह 10:00 - दोपहर 1:00 | शाम 6:00 - 8:30<br>रविवार: सुबह 11:00 - दोपहर 12:00",
    loc_maps_btn: "गूगल मैप्स पर रास्ता देखें",

    teen_badge: "उम्र 10 से 18 वर्ष",
    teen_heading: "किशोरावस्था स्वास्थ्य एवं प्यूबर्टी मार्गदर्शन",
    teen_btn_all: "सभी (20)",
    teen_btn_girls: "बालिकाएं (Girls)",
    teen_btn_boys: "बालक (Boys)",
    teen_book_btn: "गोपनीय टीनएज परामर्श बुक करें"
    // Add inside siteTranslations.en:
  vax_spotlight_badge: "Essential Clinical Guide",
  vax_spotlight_title: "Pediatric Vaccine FAQs: A Pediatrician’s Deep Dive for Parents",
  vax_spotlight_desc: "What if a dose is missed? Can 2-3 vaccines be given on the same day? Learn why cold-chain matters, managing post-shot swelling, and IAP safety facts.",
  vax_spotlight_btn: "Read Full Vaccine FAQs",
  vax_spotlight_card_head: "100% Cold-Chain Safety",
  vax_spotlight_card_sub: "WHO & IAP verified protocols at our Rohini clinic.",

  // Add inside siteTranslations.hi:
  vax_spotlight_badge: "जरूरी डॉक्टरी गाइड",
  vax_spotlight_title: "टीकाकरण (Vaccination) से जुड़े जरूरी सवाल व डॉक्टरी जवाब",
  vax_spotlight_desc: "क्या छूटा हुआ टीका दोबारा शुरू करना पड़ता है? क्या एक साथ 2-3 टीके लग सकते हैं? जानिए कोल्ड-चेन का महत्व और टीके के बाद गांठ व बुखार की सही देखभाल।",
  vax_spotlight_btn: "संपूर्ण वैक्सीन FAQ पढ़ें",
  vax_spotlight_card_head: "100% कोल्ड-चेन सुरक्षा",
  vax_spotlight_card_sub: "WHO एवं IAP प्रमाणित सुरक्षित टीकाकरण।"
// Inside siteTranslations.en:
  iap_btn_badge: "Official Medical Chart",
  iap_btn_title: "Official IAP Immunization Schedule (0 to 18 Years)",
  iap_btn_subtitle: "Tap to view the complete age-by-age vaccine chart approved by Indian Academy of Pediatrics.",
  blog_btn_badge: "Health Education Library",
  blog_btn_title: "Parenting & Pediatric Health Insights",
  blog_btn_subtitle: "Tap to explore all verified medical guides on fever care, infant nutrition, dengue, and air pollution.",

  // Inside siteTranslations.hi:
  iap_btn_badge: "आधिकारिक टीकाकरण चार्ट",
  iap_btn_title: "IAP आधिकारिक टीकाकरण तालिका (जन्म से 18 वर्ष)",
  iap_btn_subtitle: "इंडियन एकेडमी ऑफ पीडियाट्रिक्स द्वारा अनुमोदित संपूर्ण टीकाकरण चार्ट देखने के लिए क्लिक करें।",
  blog_btn_badge: "स्वास्थ्य मार्गदर्शिका",
  blog_btn_title: "पेरेंटिंग एवं बाल स्वास्थ्य लेख",
  blog_btn_subtitle: "बुखार, नवजात देखभाल, डेंगू और प्रदूषण से बचाव से जुड़े सभी सत्यापित लेख पढ़ने के लिए क्लिक करें।",
  }
};
