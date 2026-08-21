// ==========================================================
// CLINIC DATA REPOSITORY (data.js)
// Contains: IAP Growth Standards (with 2-18y BMI Cutoffs), 
// Developmental Milestones, Adolescent FAQs, and Blog Articles
// ==========================================================

const milestoneDatabase = {
  "0m": {
    name: { en: "Newborn (0 - 30 Days)", hi: "नवजात (0 - 30 दिन)" },
    iap: {
      boy: { minW: 2.5, maxW: 4.3, minH: 46.0, maxH: 54.0 },
      girl: { minW: 2.4, maxW: 4.1, minH: 45.0, maxH: 53.0 }
    },
    green: {
      en: ["Focuses on mother's face", "Startles to loud sounds", "Strong sucking reflex"],
      hi: ["माँ के चेहरे पर ध्यान देना", "तेज आवाज पर चौंकना", "दूध पीने का मजबूत रिफ्लेक्स"]
    },
    yellow: {
      en: ["Mild physiological jaundice clearing", "Passing urine <6 times daily"],
      hi: ["हल्का पीलिया जो कम हो रहा हो", "दिन में 6 बार से कम पेशाब करना"]
    },
    red: {
      en: ["Poor feeding or lethargy", "Deep yellow jaundice on soles", "Fever or low temperature"],
      hi: ["दूध न पीना या अत्यधिक सुस्ती", "पैरों के तलवों तक गहरा पीलिया", "तेज बुखार या शरीर ठंडा पड़ना"]
    },
    parentTips: {
      nutrition: { en: "Exclusive breastfeeding on demand (8-12 times in 24 hours).", hi: "केवल माँ का दूध (24 घंटे में 8-12 बार)।" },
      safety: { en: "Always place baby on back to sleep. Keep crib free of loose bedding.", hi: "बच्चे को हमेशा पीठ के बल सुलाएं।" },
      play: { en: "Gentle skin-to-skin touch and soothing voice.", hi: "कंगारू मदर केयर और धीमी आवाज में बातें करें।" },
      care: { en: "BCG, OPV-0, and Hepatitis-B at birth.", hi: "जन्म के समय बीसीजी, पोलियो और हेपेटाइटिस-बी।" }
    }
  },
  "3m": {
    name: { en: "3 Months", hi: "3 माह" },
    iap: {
      boy: { minW: 5.0, maxW: 7.9, minH: 57.0, maxH: 65.0 },
      girl: { minW: 4.5, maxW: 7.4, minH: 55.5, maxH: 63.5 }
    },
    green: {
      en: ["Holds head steady when supported", "Social smile", "Follows moving objects 180°"],
      hi: ["गर्दन संभालना", "पहचान कर मुस्कुराना", "चीजों को आँखों से 180° देखना"]
    },
    yellow: {
      en: ["Frequent spitting up without weight loss", "Uneven sleep cycles"],
      hi: ["हल्का दूध पलटना (वजन सही रहे तो)", "अनियमित नींद"]
    },
    red: {
      en: ["No head control", "Does not respond to loud sounds", "Does not make eye contact"],
      hi: ["गर्दन बिल्कुल न रुकना", "आवाज पर प्रतिक्रिया न देना", "नजरें न मिलाना"]
    },
    parentTips: {
      nutrition: { en: "Continue exclusive breastfeeding.", hi: "केवल स्तनपान जारी रखें।" },
      safety: { en: "Never leave baby unattended on a bed or sofa.", hi: "बच्चे को बेड पर अकेला न छोड़ें।" },
      play: { en: "Tummy time 3-5 minutes while awake and supervised.", hi: "जागते समय पेट के बल लिटाएं (टमी टाइम)।" },
      care: { en: "6th, 10th, 14th week primary vaccination schedule.", hi: "प्राथमिक टीकाकरण शेड्यूल पूरा करें।" }
    }
  },
  "6m": {
    name: { en: "6 Months (Weaning Stage)", hi: "6 माह (ऊपरी आहार शुरुआत)" },
    iap: {
      boy: { minW: 6.4, maxW: 9.7, minH: 63.0, maxH: 71.5 },
      girl: { minW: 5.8, maxW: 9.2, minH: 61.0, maxH: 70.0 }
    },
    green: {
      en: ["Sits with support", "Transfers objects hand-to-hand", "Babbles ('ba-ba', 'da-da')"],
      hi: ["सहारे से बैठना", "एक हाथ से दूसरे हाथ में खिलौना लेना", "बड़बड़ाना (बा-बा, दा-दा)"]
    },
    yellow: {
      en: ["Initial reluctance to solid textures", "Teething gum discomfort"],
      hi: ["ऊपरी आहार शुरू करने में थोड़ी हिचकिचाहट", "दांत निकलने पर मसूड़ों में खुजली"]
    },
    red: {
      en: ["Cannot roll over", "Extreme stiffness or floppiness", "No babbling sounds"],
      hi: ["करवट न बदल पाना", "शरीर बहुत अकड़ा या ढीला होना", "कोई आवाज न निकालना"]
    },
    parentTips: {
      nutrition: { en: "Start home-cooked mashed weaning foods (moong dal khichdi, suji kheer, fruit purees).", hi: "घर का बना मसला हुआ भोजन शुरू करें (खिचड़ी, सूजी, फल)।" },
      safety: { en: "Baby proof low shelves and sharp edges as crawling approaches.", hi: "फर्श और कोनों की सुरक्षा सुनिश्चित करें।" },
      play: { en: "Read colorful picture books and play peek-a-boo.", hi: "रंगीन किताबें दिखाएं और बात करें।" },
      care: { en: "Flu (Influenza) and Typhoid conjugate vaccination review.", hi: "इन्फ्लूएंजा व टाइफाइड टीकों का समय।" }
    }
  },
  "9m": {
    name: { en: "9 Months", hi: "9 माह" },
    iap: {
      boy: { minW: 7.2, maxW: 10.9, minH: 67.5, maxH: 76.0 },
      girl: { minW: 6.6, maxW: 10.4, minH: 65.5, maxH: 74.5 }
    },
    green: {
      en: ["Sits without support", "Crawls on belly/hands", "Pincer grasp (picks small objects)"],
      hi: ["बिना सहारे बैठना", "घुटनों के बल चलना", "उंगलियों से छोटी चीज पकड़ना"]
    },
    yellow: {
      en: ["Stranger anxiety (crying when seeing unfamiliar people)"],
      hi: ["अजनबियों को देखकर डरना (सामान्य विकास चरण)"]
    },
    red: {
      en: ["Cannot sit steadily", "Does not bear weight on legs", "Does not respond to name"],
      hi: ["बिना सहारे न बैठ पाना", "पैरों पर वजन न लेना", "नाम पुकारने पर न देखना"]
    },
    parentTips: {
      nutrition: { en: "Offer 3 semi-solid meals plus breastfeeding.", hi: "दिन में 3 बार मसला भोजन व स्तनपान।" },
      safety: { en: "Keep choking hazards (coins, small toys, batteries) strictly away.", hi: "सिक्के, सेल व छोटी चीजें दूर रखें।" },
      play: { en: "Encourage crawling with soft obstacle courses.", hi: "घुटनों के बल चलने के लिए प्रेरित करें।" },
      care: { en: "MMR / MR-1 and OPV booster window.", hi: "एमएमआर (खसरा) का पहला टीका।" }
    }
  },
  "12m": {
    name: { en: "12 Months (1 Year)", hi: "12 माह (1 वर्ष)" },
    iap: {
      boy: { minW: 7.8, maxW: 11.8, minH: 71.0, maxH: 80.5 },
      girl: { minW: 7.1, maxW: 11.3, minH: 69.0, maxH: 79.0 }
    },
    green: {
      en: ["Stands holding support / taking first steps", "Speaks 1-2 clear words", "Waves 'bye-bye'"],
      hi: ["सहारे से खड़ा होना / पहला कदम", "1-2 साफ शब्द बोलना", "'बाय-बाय' करना"]
    },
    yellow: {
      en: ["Fussiness with self-feeding spoon practice"],
      hi: ["चम्मच से खुद खाने में गिराना"]
    },
    red: {
      en: ["Cannot stand with support", "Cannot point with index finger", "Loss of any previously learned speech"],
      hi: ["सहारे से भी खड़ा न होना", "उंगली से इशारा न करना", "सीखे हुए शब्द भूल जाना"]
    },
    parentTips: {
      nutrition: { en: "Family pot food (mildly spiced). Can introduce pasteurized cow milk in cup.", hi: "घर का सामान्य सुपाच्य भोजन शुरू करें।" },
      safety: { en: "Secure stair gates, window grilles, and electrical switchboards.", hi: "सीढ़ियों और बिजली के बोर्ड सुरक्षित करें।" },
      play: { en: "Stacking cups, large building blocks, push toys.", hi: "ब्लॉक्स जोड़ने वाले खिलौने दें।" },
      care: { en: "Hepatitis-A and Chickenpox (Varicella) vaccination.", hi: "हेपेटाइटिस-ए और चेचक का टीका।" }
    }
  },
  "18m": {
    name: { en: "18 Months (1.5 Years)", hi: "18 माह (1.5 वर्ष)" },
    iap: {
      boy: { minW: 8.8, maxW: 13.3, minH: 76.5, maxH: 86.5 },
      girl: { minW: 8.1, maxW: 12.8, minH: 74.5, maxH: 85.0 }
    },
    green: {
      en: ["Walks steadily without help", "Vocabulary of 6-10 words", "Drinks from open cup"],
      hi: ["बिना सहारे चलना व दौड़ना", "6-10 शब्द बोलना", "कप से पानी पीना"]
    },
    yellow: {
      en: ["Mild toddler tantrums when told 'no'"],
      hi: ["हल्की जिद्द या नखरे दिखाना (सामान्य व्यवहार)"]
    },
    red: {
      en: ["Not walking independently", "Speaks fewer than 4 words", "Does not imitate actions"],
      hi: ["स्वतंत्र रूप से न चल पाना", "4 से कम शब्द बोलना", "नकल न करना"]
    },
    parentTips: {
      nutrition: { en: "3 main balanced meals + 2 healthy finger snacks.", hi: "3 मुख्य भोजन व 2 हल्के पौष्टिक नाश्ते।" },
      safety: { en: "Store all medicines, cleaning liquids, and detergents locked away.", hi: "दवाएं व फिनाइल ऊंचे लॉकर में रखें।" },
      play: { en: "Name body parts together; avoid mobile phone screen exposure.", hi: "शरीर के अंगों के नाम सिखाएं; स्क्रीन से दूर रखें।" },
      care: { en: "DTP booster, Hib booster, and IPV booster at 16-18 months.", hi: "डीटीपी व हिब का पहला बूस्टर डोज।" }
    }
  },
  "24m": {
    name: { en: "24 Months (2 Years)", hi: "24 माह (2 वर्ष)" },
    iap: {
      boy: { minW: 9.7, maxW: 14.8, minH: 81.5, maxH: 92.5, minBmi: 14.1, ovBmi: 17.5, obBmi: 18.8 },
      girl: { minW: 9.0, maxW: 14.3, minH: 80.0, maxH: 91.5, minBmi: 13.8, ovBmi: 17.3, obBmi: 18.5 }
    },
    green: {
      en: ["Combines 2 words ('want milk')", "Runs and kicks ball", "Follows 2-step instructions"],
      hi: ["2 शब्द जोड़कर बोलना ('दूध चाहिए')", "दौड़ना और गेंद को किक मारना", "सरल निर्देश मानना"]
    },
    yellow: {
      en: ["Picky eating phases; occasional thumb sucking"],
      hi: ["खाने में नखरे करना"]
    },
    red: {
      en: ["No 2-word phrases", "Cannot jump or climb stairs with help", "Lack of social engagement/eye contact"],
      hi: ["2 शब्द जोड़कर न बोल पाना", "आँखों में आँखें डालकर बात न करना (Autism Screen)"]
    },
    parentTips: {
      nutrition: { en: "Whole fruits over fruit juices. Balanced iron and calcium intake.", hi: "जूस की जगह साबुत ताजे फल दें। दूध 400ml तक सीमित।" },
      safety: { en: "Supervise closely near hot kitchen utensils, buckets, and water tanks.", hi: "पानी की बाल्टी व गर्म बर्तनों से दूर रखें।" },
      play: { en: "Pretend play (kitchen set, doctor set, toy animals). Zero screen time.", hi: "रोल-प्ले खिलौने दें। मोबाइल स्क्रीन से बचाएं।" },
      care: { en: "Typhoid Booster, Hepatitis-A dose-2 review.", hi: "टाइफाइड व हेपेटाइटिस-ए की दूसरी खुराक।" }
    }
  },
  "3y": {
    name: { en: "3 Years", hi: "3 वर्ष" },
    iap: {
      boy: { minW: 11.3, maxW: 17.5, minH: 89.0, maxH: 101.5, minBmi: 13.8, ovBmi: 17.1, obBmi: 18.3 },
      girl: { minW: 10.8, maxW: 17.2, minH: 88.0, maxH: 100.5, minBmi: 13.5, ovBmi: 16.9, obBmi: 18.1 }
    },
    green: {
      en: ["Speaks in full 3-4 word sentences", "Pedals tricycle", "Understands 'mine' and 'yours'"],
      hi: ["3-4 शब्दों के वाक्य बोलना", "ट्राइसाइकिल चलाना", "'मेरा' और 'तुम्हारा' समझना"]
    },
    yellow: {
      en: ["Occasional stuttering during rapid excitement"],
      hi: ["उत्तेजना में कभी-कभार हकलाना"]
    },
    red: {
      en: ["Unclear speech that family cannot understand", "Cannot balance on one foot briefly", "Does not engage with other children"],
      hi: ["बोली बिल्कुल समझ न आना", "बच्चों के साथ न खेलना"]
    },
    parentTips: {
      nutrition: { en: "Incorporate soaked nuts, paneer, curd, and seasonal leafy greens.", hi: "दही, पनीर, भीगे मेवे व हरी सब्जियां दें।" },
      safety: { en: "Teach basic street road safety and crossing habits.", hi: "सड़क सुरक्षा की आदतें सिखाएं।" },
      play: { en: "Clay modelling, crayon coloring, outdoor park play daily.", hi: "रोज 1 घंटा पार्क में खेलकूद जरूरी।" },
      care: { en: "Annual vision screen and dental checkup.", hi: "आँखों व दांतों की वार्षिक जांच।" }
    }
  },
  "4y": {
    name: { en: "4 Years", hi: "4 वर्ष" },
    iap: {
      boy: { minW: 12.7, maxW: 20.3, minH: 95.0, maxH: 108.5, minBmi: 13.5, ovBmi: 16.9, obBmi: 18.2 },
      girl: { minW: 12.3, maxW: 20.1, minH: 94.0, maxH: 107.5, minBmi: 13.3, ovBmi: 16.8, obBmi: 18.0 }
    },
    green: {
      en: ["Draws a person with 2-4 body parts", "Hops on one foot", "Tells short stories"],
      hi: ["इंसान का चित्र बनाना", "एक पैर पर कूदना", "छोटी कहानियां सुनाना"]
    },
    yellow: {
      en: ["Imaginary fears (monsters, dark rooms)"],
      hi: ["अंधेरे या काल्पनिक चीजों से डरना"]
    },
    red: {
      en: ["Cannot draw a circle or cross", "Frequent bedwetting without daytime control", "Severe aggression"],
      hi: ["गोला न बना पाना", "अत्यधिक आक्रामक व्यवहार"]
    },
    parentTips: {
      nutrition: { en: "Limit processed packaged snacks, chips, and colas.", hi: "चिप्स, बिस्कुट व पैकेज्ड स्नैक्स बंद करें।" },
      safety: { en: "Teach child's full name, parents' mobile numbers, and 'good touch/bad touch'.", hi: "माता-पिता का फोन नंबर व गुड/बैड टच सिखाएं।" },
      play: { en: "Roleplay, puzzles, running and obstacle sports.", hi: "पहेलियां व खेलकूद।" },
      care: { en: "Preparation for 4.5-5 year DTP booster & MMR booster.", hi: "5 वर्ष के बूस्टर टीकों की तैयारी।" }
    }
  },
  "5y": {
    name: { en: "5 Years", hi: "5 वर्ष" },
    iap: {
      boy: { minW: 14.1, maxW: 23.2, minH: 101.0, maxH: 115.5, minBmi: 13.4, ovBmi: 16.8, obBmi: 18.3 },
      girl: { minW: 13.7, maxW: 23.1, minH: 100.0, maxH: 114.5, minBmi: 13.2, ovBmi: 16.7, obBmi: 18.2 }
    },
    green: {
      en: ["Counts 10 or more objects", "Skips and somersaults", "Dresses independently"],
      hi: ["10 तक गिनती गिनना", "खुद कपड़े पहनना", "अच्छी तरह उछलना-कूदना"]
    },
    yellow: {
      en: ["Temporary bedtime delay resistance"],
      hi: ["सोने में थोड़ा आनाकानी करना"]
    },
    red: {
      en: ["Extreme difficulty focusing for 5 minutes", "Unable to brush teeth/wash hands independently", "Speech articulation defects"],
      hi: ["5 मिनट भी ध्यान न लगना (ADHD Screen)", "बोलने में गंभीर लड़खड़ाहट"]
    },
    parentTips: {
      nutrition: { en: "Protein-rich breakfast (eggs, sprouted moong, dal cheela).", hi: "प्रोटीन युक्त नाश्ता (अंडा, चीला, स्प्राउट्स)।" },
      safety: { en: "Always insist on helmets for bicycling.", hi: "साइकिल चलाते समय हेलमेट जरूर पहनाएं।" },
      play: { en: "Encourage team sports and swimming.", hi: "तैराकी व ग्रुप गेम्स को बढ़ावा दें।" },
      care: { en: "DTP-Booster 2, OPV Booster, Varicella Booster.", hi: "डीटीपी और चेचक का दूसरा बूस्टर डोज।" }
    }
  },
  "6y": {
    name: { en: "6 Years", hi: "6 वर्ष" },
    iap: {
      boy: { minW: 15.6, maxW: 26.5, minH: 107.0, maxH: 122.0, minBmi: 13.3, ovBmi: 17.0, obBmi: 18.6 },
      girl: { minW: 15.1, maxW: 26.4, minH: 106.0, maxH: 121.0, minBmi: 13.1, ovBmi: 16.9, obBmi: 18.5 }
    },
    green: {
      en: ["Reads simple 3-4 letter words", "Ties shoelaces with guidance", "Understands rules of board games"],
      hi: ["सरल शब्द पढ़ना", "खेल के नियम समझना", "जूते के फीते बांधना"]
    },
    yellow: {
      en: ["School adjustment stress or sibling rivalry"],
      hi: ["स्कूल के नए माहौल में हल्का तनाव"]
    },
    red: {
      en: ["Cannot copy letters/numbers", "Frequent clumsiness and tripping over flat ground", "Extreme difficulty making friends"],
      hi: ["अक्षर न लिख पाना", "बार-बार गिरना, मित्र न बना पाना"]
    },
    parentTips: {
      nutrition: { en: "Balanced tiffin: Roti rolls, homemade vegetable cutlets, nuts.", hi: "घर का बना पौष्टिक स्कूल टिफिन दें।" },
      safety: { en: "Educate on digital screen limits (maximum 1 hour educational screen).", hi: "मोबाइल का प्रयोग 1 घंटे से कम रखें।" },
      play: { en: "Football, martial arts, classical/modern dance for posture.", hi: "मार्शल आर्ट्स, फुटबॉल या डांस क्लास।" },
      care: { en: "Annual vision acuity test before primary school sessions.", hi: "कक्षा में बैठने से पहले आँखों की जांच।" }
    }
  },
  "7y": {
    name: { en: "7 Years", hi: "7 वर्ष" },
    iap: {
      boy: { minW: 17.2, maxW: 30.1, minH: 112.5, maxH: 128.5, minBmi: 13.4, ovBmi: 17.3, obBmi: 19.1 },
      girl: { minW: 16.6, maxW: 30.0, minH: 111.5, maxH: 127.5, minBmi: 13.2, ovBmi: 17.2, obBmi: 19.0 }
    },
    green: {
      en: ["Understands cause-and-effect", "Rides 2-wheel bicycle without stabilizers", "Fluent reading"],
      hi: ["2-पहिया साइकिल चलाना", "धाराप्रवाह पढ़ना", "कारण व प्रभाव समझना"]
    },
    yellow: {
      en: ["Competitive frustration when losing games"],
      hi: ["खेल में हारने पर उदास होना"]
    },
    red: {
      en: ["Cannot read simple 1st-grade sentences (Dyslexia screen)", "Severe posture slouching", "Persistent daytime urinary urgency"],
      hi: ["सरल वाक्य न पढ़ पाना, रीढ़ में झुकाव"]
    },
    parentTips: {
      nutrition: { en: "Ensure adequate calcium and vitamin D through sunlight exposure & dairy.", hi: "धूप में खेल और कैल्शियम युक्त आहार।" },
      safety: { en: "Ensure ergonomic study table posture to avoid early neck strain.", hi: "पढ़ाई के समय बैठने की सही मुद्रा।" },
      play: { en: "Chess, table tennis, swimming, outdoor running.", hi: "शतरंज, टेबल टेनिस, दौड़।" },
      care: { en: "Influenza annual dose booster for school-going children.", hi: "वार्षिक फ्लू का टीका।" }
    }
  },
  "8y": {
    name: { en: "8 Years", hi: "8 वर्ष" },
    iap: {
      boy: { minW: 19.0, maxW: 34.2, minH: 118.0, maxH: 134.5, minBmi: 13.5, ovBmi: 17.7, obBmi: 19.7 },
      girl: { minW: 18.3, maxW: 34.0, minH: 117.0, maxH: 134.0, minBmi: 13.4, ovBmi: 17.6, obBmi: 19.6 }
    },
    green: {
      en: ["Understands money values", "Fine motor skills (skilled drawing/craft)", "Participates in team games"],
      hi: ["पैसे का हिसाब समझना", "चित्रकला व क्राफ्ट", "टीम स्पोर्ट्स में भाग लेना"]
    },
    yellow: {
      en: ["Desire for peer acceptance & brand comparisons"],
      hi: ["दोस्तों के साथ तुलना करने की आदत"]
    },
    red: {
      en: ["Signs of early puberty: breast budding in girls <8y, testicular enlargement in boys <9y (Precocious Puberty Alert)", "Severe learning gaps"],
      hi: ["8 वर्ष से पहले स्तन वृद्धि या 9 वर्ष से पहले यौवन लक्षण (Precocious Puberty)"]
    },
    parentTips: {
      nutrition: { en: "Avoid bakery products with palm oil & trans-fats to prevent early obesity.", hi: "तली-भुनी चीजें व बेकरी प्रोडक्ट्स बंद करें।" },
      safety: { en: "Supervise online games and internet connectivity strictly.", hi: "इंटरनेट व ऑनलाइन गेमिंग पर कड़ी निगरानी रखें।" },
      play: { en: "Minimum 60 minutes vigorous outdoor play daily.", hi: "रोज कम से कम 60 मिनट तेज खेलकूद।" },
      care: { en: "Growth velocity monitoring: Child should gain 5-6 cm height/year.", hi: "कद कम से कम 5-6 सेमी प्रति वर्ष बढ़ना चाहिए।" }
    }
  },
  "9y": {
    name: { en: "9 Years", hi: "9 वर्ष" },
    iap: {
      boy: { minW: 21.0, maxW: 39.0, minH: 123.0, maxH: 140.5, minBmi: 13.7, ovBmi: 18.2, obBmi: 20.4 },
      girl: { minW: 20.3, maxW: 38.8, minH: 122.5, maxH: 140.5, minBmi: 13.6, ovBmi: 18.1, obBmi: 20.3 }
    },
    green: {
      en: ["Independent school homework completion", "Strong logical thinking", "Solid peer friendships"],
      hi: ["स्वयं गृहकार्य करना", "तार्किक सोच", "अच्छी सामाजिक मित्रता"]
    },
    yellow: {
      en: ["Occasional moodiness before adolescent transition"],
      hi: ["हल्का चिड़चिड़ापन (हार्मोनल बदलाव की शुरुआत)"]
    },
    red: {
      en: ["Height dropping across percentiles on growth charts", "School refusal and anxiety"],
      hi: ["कद का अचानक रुकना या घटना, स्कूल जाने से अत्यधिक घबराहट"]
    },
    parentTips: {
      nutrition: { en: "High fiber diet: Salads before meals, sprouted grains, millets (ragi, jowar).", hi: "भोजन से पहले सलाद, बाजरा व रागी शामिल करें।" },
      safety: { en: "Keep open channels of communication regarding school bullying.", hi: "स्कूल व दोस्तों की बातें रोजाना सुनें।" },
      play: { en: "Badminton, basketball, cycling for bone mineralization.", hi: "बैडमिंटन, बास्केटबॉल व साइकिलिंग।" },
      care: { en: "Preparation for HPV vaccine eligibility starting at 9 years for girls.", hi: "9 वर्ष से बालिकाओं हेतु HPV (सर्वाइकल कैंसर) टीका।" }
    }
  },
  "10y": {
    name: { en: "10 Years", hi: "10 वर्ष" },
    iap: {
      boy: { minW: 23.2, maxW: 44.5, minH: 128.0, maxH: 146.5, minBmi: 14.0, ovBmi: 18.7, obBmi: 21.1 },
      girl: { minW: 22.5, maxW: 44.3, minH: 128.0, maxH: 147.0, minBmi: 13.9, ovBmi: 18.7, obBmi: 21.1 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 1-2 (Adrenarche / Thelarche)", green: "Early breast budding (thelarche) between 8-12 years is normal.", yellow: "Rapid weight gain accelerating breast fat deposition.", red: "Absence of any secondary sexual traits by 13 years (Delayed Puberty)." },
      boy: { stage: "Tanner Stage 1 (Pre-pubertal)", green: "Normal testicular volume 1-3 ml. Growth rate steady at 5 cm/year.", yellow: "Weight creeping up with reduced physical sports.", red: "Early testicular enlargement >4ml before 9 years." }
    },
    green: {
      en: ["Abstract reasoning develops", "Maintains personal hygiene routines independently"],
      hi: ["व्यक्तिगत स्वच्छता का ध्यान रखना, अमूर्त विचार समझना"]
    },
    yellow: {
      en: ["Body image consciousness beginnings"],
      hi: ["शारीरिक रूप-रंग को लेकर सचेत होना"]
    },
    red: {
      en: ["Severe linear growth plateau (<4 cm/year)", "Persistent fatigue or pallor (Anemia)"],
      hi: ["साल में 4 सेमी से कम कद बढ़ना, अत्यधिक थकान (खून की कमी)"]
    },
    parentTips: {
      nutrition: { en: "Prevent childhood obesity by eliminating liquid sugars (sweetened sodas, packaged juices).", hi: "मीठे पेय व कोल्ड ड्रिंक्स पूरी तरह बंद करें।" },
      safety: { en: "Educate on online privacy, passwords, and cyber safety.", hi: "सोशल मीडिया व साइबर सुरक्षा के नियम तय करें।" },
      play: { en: "Athletics, swimming, yoga for flexibility.", hi: "एथलेटिक्स, योग व तैराकी।" },
      care: { en: "HPV Vaccine (2-dose schedule at 0 and 6 months) for adolescent girls.", hi: "बालिकाओं के लिए एचपीवी (सर्वाइकल कैंसर) वैक्सीन का सर्वोत्तम समय।" }
    }
  },
  "11y": {
    name: { en: "11 Years", hi: "11 वर्ष" },
    iap: {
      boy: { minW: 25.7, maxW: 50.5, minH: 133.0, maxH: 153.0, minBmi: 14.3, ovBmi: 19.3, obBmi: 21.9 },
      girl: { minW: 25.1, maxW: 50.3, minH: 134.0, maxH: 154.0, minBmi: 14.3, ovBmi: 19.4, obBmi: 22.0 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 2 (Thelarche & Pubarche)", green: "Breast buds enlarge, fine pubic hair appears. Linear growth spurt starts.", yellow: "Mild breast tenderness during budding.", red: "Menarche starting before 10 years without medical review." },
      boy: { stage: "Tanner Stage 2 (Gonadarche)", green: "Testicular volume increases to 4-8 ml. Scrotum thins and reddens.", yellow: "Temporary pubertal gynecomastia (breast gland swelling in boys).", red: "No testicular enlargement by 14 years." }
    },
    green: {
      en: ["Understands complex moral values", "Stronger peer allegiances", "Height spurt beginning in girls"],
      hi: ["लड़कियों में कद की तेज बढ़ोत्तरी (Growth Spurt) की शुरुआत"]
    },
    yellow: {
      en: ["Frequent emotional sensitivity or mood swings"],
      hi: ["भावनात्मक उतार-चढ़ाव (मूड स्विंग्स)"]
    },
    red: {
      en: ["Eating disorder signs (extreme fasting, skipping meals)", "Excessive social isolation"],
      hi: ["खाना छोड़ना, वजन घटाने का अत्यधिक जुनून (Eating Disorder)"]
    },
    parentTips: {
      nutrition: { en: "Iron-rich foods (jaggery, spinach, raisins, lentils) + Vitamin C for absorption.", hi: "आयरन व विटामिन सी युक्त आहार (गुड़, पालक, दालें)।" },
      safety: { en: "Open, confidential conversations at home regarding bodily puberty changes.", hi: "घर पर शारीरिक बदलावों पर खुलकर दोस्ताना चर्चा करें।" },
      play: { en: "Aerobic sports for cardiovascular fitness.", hi: "हृदय स्वास्थ्य हेतु एरोबिक खेल।" },
      care: { en: "Tdap (Tetanus, reduced Diphtheria, Pertussis) booster dose between 10-12 years.", hi: "10-12 वर्ष पर Tdap बूस्टर का टीका अवश्य लगवाएं।" }
    }
  },
  "12y": {
    name: { en: "12 Years", hi: "12 वर्ष" },
    iap: {
      boy: { minW: 28.5, maxW: 56.8, minH: 138.5, maxH: 160.0, minBmi: 14.7, ovBmi: 20.0, obBmi: 22.7 },
      girl: { minW: 28.2, maxW: 56.4, minH: 140.0, maxH: 160.5, minBmi: 14.8, ovBmi: 20.1, obBmi: 22.8 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 3", green: "Breast contour and areola enlarge. Peak height velocity (8 cm/year).", yellow: "Irregular cycles in first 1-2 years post menarche.", red: "Excessive facial hair, severe acne, or acanthosis nigricans (PCOS risk)." },
      boy: { stage: "Tanner Stage 2-3", green: "Penile lengthening begins, darker pubic hair, voice starts cracking.", yellow: "Mild pubertal gynecomastia (normal if painless and small).", red: "No signs of genital pubertal changes." }
    },
    green: {
      en: ["Capable of long-term planning", "Critical analytical thinking"],
      hi: ["गहरी तार्किक व विश्लेषणात्मक सोच का विकास"]
    },
    yellow: {
      en: ["Mild skin breakouts (pubertal acne)"],
      hi: ["चेहरे पर हल्के कील-मुंहासे (Acne)"]
    },
    red: {
      en: ["Dark velvety skin patches on neck/armpits (Acanthosis Nigricans - Insulin Resistance)", "Severe spinal curvature (Scoliosis)"],
      hi: ["गर्दन पर काली मोटी परत (इंसुलिन रेजिस्टेंस व डायबिटीज का पूर्व संकेत)"]
    },
    parentTips: {
      nutrition: { en: "Ensure 1000 mg dietary calcium daily for peak bone mass.", hi: "मजबूत हड्डियों के लिए 1000mg दैनिक कैल्शियम।" },
      safety: { en: "Educate against unsupervised consumption of gym protein shakes/steroids.", hi: "जिम सप्लीमेंट्स व प्रोटीन पाउडर से दूर रखें।" },
      play: { en: "Regular sports to combat sedentary screen posture.", hi: "नियमित स्पोर्ट्स खेलें।" },
      care: { en: "Annual spine examination for scoliosis and thyroid checkup if lethargic.", hi: "रीढ़ व थायरॉइड की नियमित जांच।" }
    }
  },
  "13y": {
    name: { en: "13 Years", hi: "13 वर्ष" },
    iap: {
      boy: { minW: 31.8, maxW: 63.0, minH: 144.5, maxH: 167.0, minBmi: 15.2, ovBmi: 20.6, obBmi: 23.5 },
      girl: { minW: 31.8, maxW: 62.1, minH: 145.0, maxH: 165.0, minBmi: 15.3, ovBmi: 20.9, obBmi: 23.6 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 3-4 (Menarche Transition)", green: "Menarche typically occurs ~2 years post breast budding (Average 12.5y).", yellow: "Cycle lengths varying between 21 to 45 days initially.", red: "Menarche not achieved by 15 years (Primary Amenorrhea)." },
      boy: { stage: "Tanner Stage 3", green: "Testicular volume 10-12 ml. Peak growth velocity starting (9-10 cm/year).", yellow: "Transient nocturnal emissions (wet dreams).", red: "Failure of growth spurt onset." }
    },
    green: {
      en: ["Forms strong personal identity", "Capable of complex problem solving"],
      hi: ["स्वतंत्र पहचान का निर्माण, गंभीर विषयों पर समझ"]
    },
    yellow: {
      en: ["Desire for extreme privacy from family"],
      hi: ["अत्यधिक प्राइवेसी की मांग"]
    },
    red: {
      en: ["Depression symptoms: withdrawal, drop in grades, sleep reversal", "Extreme underweight/overweight"],
      hi: ["गंभीर अवसाद, पढ़ाई में अचानक गिरावट, वजन में भारी असंतुलन"]
    },
    parentTips: {
      nutrition: { en: "High zinc and protein diet for peak pubertal growth spurt.", hi: "जिंक व प्रोटीन युक्त आहार (दालें, अंडे, नट्स)।" },
      safety: { en: "Ensure 8-9 hours of uninterrupted night sleep for growth hormone secretion.", hi: "ग्रोथ हार्मोन के लिए रात में 8-9 घंटे की गहरी नींद।" },
      play: { en: "Strength and endurance training with bodyweight exercises.", hi: "बॉडीवेट एक्सरसाइज व दौड़।" },
      care: { en: "Complete any missed catch-up vaccines (Hepatitis-B, Varicella, MMR).", hi: "छूटे हुए टीकों का कैच-अप पूरा करें।" }
    }
  },
  "14y": {
    name: { en: "14 Years", hi: "14 वर्ष" },
    iap: {
      boy: { minW: 35.5, maxW: 69.0, minH: 151.0, maxH: 174.0, minBmi: 15.7, ovBmi: 21.3, obBmi: 24.3 },
      girl: { minW: 35.5, maxW: 67.0, minH: 148.5, maxH: 167.5, minBmi: 15.8, ovBmi: 21.6, obBmi: 24.3 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 4", green: "Areola forms secondary mound above breast contour. Cycles regularize.", yellow: "Mild premenstrual cramping (dysmenorrhea).", red: "Severe incapacitating pelvic pain or bleeding lasting >8 days." },
      boy: { stage: "Tanner Stage 4", green: "Testicular volume 12-15 ml, axillary hair, prominent Adam's apple, deepening voice.", yellow: "Mild facial acne.", red: "Testicular volume remains <4 ml." }
    },
    green: {
      en: ["Abstract conceptualization", "Career and scholastic focus"],
      hi: ["भविष्य व करियर के प्रति सजगता"]
    },
    yellow: {
      en: ["Academic examination stress"],
      hi: ["परीक्षाओं को लेकर तनाव"]
    },
    red: {
      en: ["Chronic heavy menstrual bleeding leading to severe anemia", "High blood pressure during pediatric screen"],
      hi: ["पीरियड्स में अत्यधिक रक्तस्राव, कम उम्र में हाई ब्लड प्रेशर"]
    },
    parentTips: {
      nutrition: { en: "Avoid skipping breakfast; eliminate fast-food trans-fats.", hi: "नाश्ता कभी न छोड़ें, जंक फूड से बचें।" },
      safety: { en: "Encourage stress resilience and mindfulness.", hi: "मानसिक तनाव प्रबंधन और ध्यान सिखाएं।" },
      play: { en: "Competitive team sports or athletic track disciplines.", hi: "प्रतिस्पर्धी खेलकूद।" },
      care: { en: "Annual blood pressure, hemoglobin, and BMI screening.", hi: "ब्लड प्रेशर, हीमोग्लोबिन व बीएमआई की वार्षिक जांच।" }
    }
  },
  "15y": {
    name: { en: "15 Years", hi: "15 वर्ष" },
    iap: {
      boy: { minW: 39.5, maxW: 74.5, minH: 157.0, maxH: 179.5, minBmi: 16.3, ovBmi: 22.0, obBmi: 25.0 },
      girl: { minW: 38.8, maxW: 71.0, minH: 150.5, maxH: 169.0, minBmi: 16.3, ovBmi: 22.2, obBmi: 24.9 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 4-5", green: "Adult breast contour. Linear growth begins tapering off (epiphyseal fusion).", yellow: "Weight fluctuations with board exam study hours.", red: "Amenorrhea >90 days after regular periods began (Secondary Amenorrhea)." },
      boy: { stage: "Tanner Stage 4-5", green: "Adult pubic hair distribution, facial hair on upper lip, masculine muscle bulk.", yellow: "Voice cracking resolving into adult pitch.", red: "Height lagging far behind family mid-parental potential." }
    },
    green: {
      en: ["Full social autonomy", "Clear analytical reasoning"],
      hi: ["पूर्ण सामाजिक व बौद्धिक परिपक्वता"]
    },
    yellow: {
      en: ["Late night study screen fatigue"],
      hi: ["देर रात तक पढ़ने से आँखों में थकान"]
    },
    red: {
      en: ["Complete absence of pubertal development", "Severe hypertension or dyslipidemia"],
      hi: ["यौवन विकास का पूर्ण अभाव, कोलेस्ट्रॉल असंतुलन"]
    },
    parentTips: {
      nutrition: { en: "Balanced whole foods; adequate hydration (2.5L water daily).", hi: "संतुलित आहार व दिन में 2.5 लीटर पानी।" },
      safety: { en: "Enforce strict zero-tobacco, zero-vape, zero-alcohol policies.", hi: "धूम्रपान, वेपिंग व नशे से सख्त बचाव।" },
      play: { en: "Regular gym fitness or sports under certified trainer.", hi: "प्रमाणित ट्रेनर की देखरेख में फिटनेस।" },
      care: { en: "Comprehensive adolescent health checkup with Dr. Dinesh Mittal.", hi: "किशोरावस्था संपूर्ण स्वास्थ्य जांच।" }
    }
  },
  "16y": {
    name: { en: "16 Years", hi: "16 वर्ष" },
    iap: {
      boy: { minW: 43.5, maxW: 79.5, minH: 161.5, maxH: 183.5, minBmi: 16.8, ovBmi: 22.6, obBmi: 25.6 },
      girl: { minW: 41.5, maxW: 74.0, minH: 151.5, maxH: 170.0, minBmi: 16.7, ovBmi: 22.7, obBmi: 25.4 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 5 (Adult)", green: "Adult female contour. Final adult height reached (~98%).", yellow: "Mild premenstrual syndrome (PMS).", red: "Hirsutism (male-pattern body hair), rapid unexplained weight gain." },
      boy: { stage: "Tanner Stage 5", green: "Testicular volume 15-25 ml, adult male musculature, facial beard growth.", yellow: "Acne breakouts on back/shoulders.", red: "Testicular volume <10 ml (Hypogonadism screen)." }
    },
    green: { en: ["Adult cognitive and moral reasoning"], hi: ["वयस्क बौद्धिक क्षमता"] },
    yellow: { en: ["Career entrance exam stress"], hi: ["प्रतियोगी परीक्षाओं का मानसिक दबाव"] },
    red: { en: ["Severe metabolic syndrome (BMI >27 with high BP/triglycerides)"], hi: ["मेटाबॉलिक सिंड्रोम (मोटापा, बीपी व शुगर जोखिम)"] },
    parentTips: {
      nutrition: { en: "Avoid crash diets; maintain complex carbs, lean proteins, and healthy fats.", hi: "क्रैश डाइटिंग न करें, संतुलित पोषण लें।" },
      safety: { en: "Educate on road safety; strict no underage motorized driving without license.", hi: "बिना ड्राइविंग लाइसेंस वाहन चलाने से रोकें।" },
      play: { en: "Daily 45 minutes of cardiovascular/aerobic exercise.", hi: "प्रतिदिन 45 मिनट कार्डियो/व्यायाम।" },
      care: { en: "Lipid profile and fasting sugar check if family history of early diabetes/cardiac disease.", hi: "शुगर व लिपिड प्रोफाइल की निवारक जांच।" }
    }
  },
  "17y": {
    name: { en: "17 Years", hi: "17 वर्ष" },
    iap: {
      boy: { minW: 47.0, maxW: 83.5, minH: 164.0, maxH: 185.5, minBmi: 17.3, ovBmi: 23.1, obBmi: 26.2 },
      girl: { minW: 43.5, maxW: 76.5, minH: 152.0, maxH: 170.5, minBmi: 17.0, ovBmi: 23.0, obBmi: 25.8 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 5 (Adult)", green: "Complete adult maturity. Epiphyses fused.", yellow: "Occasional stress-induced cycle delays.", red: "Persistent severe oligomenorrhea or pelvic pain." },
      boy: { stage: "Tanner Stage 5", green: "Final linear growth completion (growth plates fusing).", yellow: "Postural stiffness from prolonged desk study.", red: "Complete absence of facial/body hair and low energy." }
    },
    green: { en: ["Fully mature decision making"], hi: ["परिपक्व निर्णय क्षमता"] },
    yellow: { en: ["Pre-college anxiety"], hi: ["कॉलेज दाखिले को लेकर चिंता"] },
    red: { en: ["Severe obesity (BMI >97th centile) risking fatty liver & hypertension"], hi: ["गंभीर मोटापा (फैटी लिवर व हाई बीपी जोखिम)"] },
    parentTips: {
      nutrition: { en: "Emphasize home food; avoid late-night junk ordering.", hi: "घर का ताजा भोजन, देर रात जंक फूड से बचाव।" },
      safety: { en: "Mental health check-ins and open emotional support.", hi: "मानसिक स्वास्थ्य व भावनात्मक संबल दें।" },
      play: { en: "Yoga, gym training, swimming, cycling.", hi: "योग, जिम, तैराकी।" },
      care: { en: "Pre-college vaccination review (Meningococcal, Tdap booster, MMR).", hi: "कॉलेज से पूर्व आवश्यक टीकों की समीक्षा।" }
    }
  },
  "18y": {
    name: { en: "18 Years", hi: "18 वर्ष" },
    iap: {
      boy: { minW: 50.0, maxW: 87.0, minH: 165.5, maxH: 187.0, minBmi: 17.8, ovBmi: 23.6, obBmi: 26.8 },
      girl: { minW: 45.0, maxW: 78.5, minH: 152.5, maxH: 171.0, minBmi: 17.2, ovBmi: 23.3, obBmi: 26.1 }
    },
    tanner: {
      girl: { stage: "Tanner Stage 5 (Adult)", green: "Adult physiological and reproductive maturity.", yellow: "Desk-bound lifestyle during college.", red: "Polycystic ovarian syndrome (PCOS) symptoms." },
      boy: { stage: "Tanner Stage 5 (Adult)", green: "Full adult male stature, voice, and muscle mass achieved.", yellow: "Sedentary study routine.", red: "Growth plate unfused with delayed sexual maturation." }
    },
    green: { en: ["Complete adult independence"], hi: ["पूर्ण वयस्क स्वावलंबन"] },
    yellow: { en: ["Transition to university life"], hi: ["उच्च शिक्षा जीवन में सामंजस्य"] },
    red: { en: ["Metabolic syndrome, high uric acid, early hypertension"], hi: ["यूरिक एसिड, बीपी या फैटी लिवर की समस्या"] },
    parentTips: {
      nutrition: { en: "Lifelong heart-healthy diet: Low glycemic index, high fiber, unsaturated fats.", hi: "हृदय-स्वस्थ आहार: कम चीनी, अधिक फाइबर।" },
      safety: { en: "Safe driving habits and zero substance abuse.", hi: "सुरक्षित ड्राइविंग व नशे से दूरी।" },
      play: { en: "Lifetime commitment to 150 minutes of physical activity weekly.", hi: "साप्ताहिक 150 मिनट शारीरिक गतिविधि।" },
      care: { en: "Transition to adult preventative healthcare records.", hi: "वयस्क स्वास्थ्य रिकॉर्ड तैयार रखें।" }
    }
  }
};

// ADOLESCENT HEALTH FAQ DATABASE
const adolescentFaqDatabase = [
  // GIRLS HEALTH (10 FAQS)
  {
    category: "girls",
    icon: "fa-solid fa-droplet",
    color: "#db2777",
    q: { en: "1. At what age should a girl have her first period (Menarche)?", hi: "1. लड़कियों में पहला मासिक धर्म (Menarche) किस उम्र में होना चाहिए?" },
    a: { en: "In Indian girls, menarche typically occurs between 11.5 and 13.5 years (usually about 2 years after breast budding begins). If a girl has not started periods by 15 years, or has no signs of breast development by 13 years, a pediatric endocrinology evaluation is recommended.", hi: "भारतीय लड़कियों में पहला पीरियड आमतौर पर 11.5 से 13.5 वर्ष की उम्र में आता है (स्तन वृद्धि शुरू होने के लगभग 2 साल बाद)। यदि 15 वर्ष तक पीरियड न आए, तो बाल रोग विशेषज्ञ से जांच कराएं।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-calendar-days",
    color: "#db2777",
    q: { en: "2. Are irregular periods normal in the first 1-2 years?", hi: "2. क्या पहले 1-2 वर्षों में पीरियड्स का अनियमित होना सामान्य है?" },
    a: { en: "Yes. Due to the immaturity of the hypothalamic-pituitary-ovarian (HPO) axis, cycles are often anovulatory (without egg release). Gaps between 21 to 45 days are common. However, if bleeding lasts more than 8 days or causes severe weakness/pallor, consultation is needed.", hi: "हाँ, शुरुआत में हार्मोनल सिस्टम परिपक्व होने में 1 से 2 साल का समय लगता है। 21 से 45 दिनों का अंतराल सामान्य है। परन्तु यदि ब्लीडिंग 8 दिन से ज्यादा चले या कमजोरी आए, तो डॉक्टर को दिखाएं।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-person-arrow-up-from-line",
    color: "#db2777",
    q: { en: "3. Does a girl stop growing taller once periods start?", hi: "3. क्या पीरियड शुरू होने के बाद लड़कियों की लंबाई बढ़ना रुक जाती है?" },
    a: { en: "No, height growth does not immediately stop. However, it slows down significantly. On average, girls gain about 5 to 7.5 cm (2 to 3 inches) of height in the 1.5 to 2 years following menarche before the bone growth plates (epiphyses) fully fuse.", hi: "नहीं, लंबाई तुरंत नहीं रुकती, लेकिन गति धीमी हो जाती है। पीरियड शुरू होने के बाद औसतन 5 से 7.5 सेमी (2-3 इंच) तक लंबाई और बढ़ती है, जिसके बाद हड्डियों की ग्रोथ प्लेट्स बंद हो जाती हैं।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-shield-virus",
    color: "#db2777",
    q: { en: "4. Why is the HPV Vaccine critical for teenage girls?", hi: "4. किशोरियों के लिए HPV (सर्वाइकल कैंसर) का टीका क्यों आवश्यक है?" },
    a: { en: "The HPV (Human Papillomavirus) vaccine prevents >90% of cervical cancers later in life. The Indian Academy of Pediatrics (IAP) strongly recommends it for all girls aged 9 to 14 years (2-dose schedule at 0 and 6 months) for maximum lifetime immune protection.", hi: "एचपीवी टीका भविष्य में गर्भाशय ग्रीवा (Cervical Cancer) के 90% से अधिक मामलों से बचाता है। IAP 9 से 14 वर्ष की बालिकाओं को इसके 2 डोज (0 और 6 माह पर) लगवाने की पुरजोर सिफारिश करता है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-circle-exclamation",
    color: "#db2777",
    q: { en: "5. What are early warning signs of PCOS in teen girls?", hi: "5. टीनएज लड़कियों में PCOS (पीसीओएस) के शुरुआती लक्षण क्या हैं?" },
    a: { en: "Persistent gaps >60 days between periods, excessive male-pattern facial/body hair (hirsutism), severe cystic acne unresponsive to creams, and dark velvety patches on the neck (acanthosis nigricans indicating insulin resistance). Early lifestyle intervention prevents long-term metabolic issues.", hi: "लगातार 60 दिनों से ज्यादा पीरियड न आना, चेहरे पर अनचाहे बाल, गंभीर मुंहासे और गर्दन पर काली मोटी त्वचा (इंसुलिन रेजिस्टेंस) पीसीओएस के मुख्य संकेत हैं।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-capsules",
    color: "#db2777",
    q: { en: "6. How to identify and prevent Anemia in teenage girls?", hi: "6. किशोरियों में खून की कमी (एनीमिया) की पहचान और रोकथाम कैसे करें?" },
    a: { en: "Symptoms include fatigue, pale conjunctiva/nails, dizziness, poor academic concentration, and brittle nails. Prevention requires iron-rich foods (jaggery, spinach, raisins, lentils) combined with Vitamin C, and annual hemoglobin checks.", hi: "थकान, पीलापन, चक्कर आना और पढ़ाई में ध्यान न लगना एनीमिया के लक्षण हैं। गुड़, पालक, मेवे व दालों के साथ वार्षिक हीमोग्लोबिन जांच आवश्यक है।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-bed",
    color: "#db2777",
    q: { en: "7. Is severe period pain (Dysmenorrhea) normal?", hi: "7. क्या माहवारी के दौरान अत्यधिक पेट दर्द सामान्य है?" },
    a: { en: "Mild lower abdominal cramping due to uterine prostaglandins is common. However, severe pain that causes school absenteeism, vomiting, or does not respond to simple warm compresses/pediatrician-prescribed analgesics requires clinical review.", hi: "हल्का दर्द सामान्य है, लेकिन अगर दर्द के कारण स्कूल छूटे, उल्टी हो या बिस्तर से न उठा जाए, तो डॉक्टर से परामर्श लें।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-hand-holding-heart",
    color: "#db2777",
    q: { en: "8. What is the safest menstrual hygiene practice for teens?", hi: "8. टीनएजर्स के लिए सुरक्षित माहवारी स्वच्छता क्या है?" },
    a: { en: "Change sanitary pads every 4 to 6 hours regardless of flow volume. Wash only with plain clean water (avoid harsh perfumed chemical intimate washes), wear breathable cotton underwear, and dispose of pads wrapped in paper.", hi: "पैड को हर 4-6 घंटे में बदलें, केवल सादे पानी से सफाई रखें, खुशबूदार केमिकल वाश से बचें और सूती इनरवेयर पहनें।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-bowl-rice",
    color: "#db2777",
    q: { en: "9. How to handle extreme dieting or body image anxiety?", hi: "9. वजन घटाने के लिए खाना छोड़ने की आदत को कैसे संभालें?" },
    a: { en: "Crash dieting during puberty deprives bones and brain of critical calcium, zinc, and iron, leading to amenorrhea and stunted height. Emphasize strength, active sports, and nutritious meals rather than body weight numbers.", hi: "किशोरावस्था में डाइटिंग करने से हड्डियों व दिमाग का विकास रुक सकता है। वजन के बजाय पौष्टिक भोजन और खेलकूद पर ध्यान दें।" }
  },
  {
    category: "girls",
    icon: "fa-solid fa-shield-halved",
    color: "#db2777",
    q: { en: "10. What is Precocious (Early) Puberty in girls?", hi: "10. बालिकाओं में समय पूर्व यौवन (Precocious Puberty) क्या है?" },
    a: { en: "Breast budding or pubic hair before 8 years of age is defined as precocious puberty. It can cause early growth plate fusion leading to significantly short adult stature. It requires immediate pediatric hormone assessment.", hi: "8 वर्ष से पहले स्तन वृद्धि या यौवन लक्षण आना समय पूर्व यौवन है। इससे आगे चलकर बच्चे का कद छोटा रह सकता है, अतः तुरंत डॉक्टर को दिखाएं।" }
  },

  // BOYS HEALTH (10 FAQS)
  {
    category: "boys",
    icon: "fa-solid fa-mars",
    color: "#2563eb",
    q: { en: "11. When does puberty start in boys and what is the first sign?", hi: "11. लड़कों में यौवन (Puberty) किस उम्र में शुरू होता है और पहला लक्षण क्या है?" },
    a: { en: "Puberty in boys typically begins between 9.5 and 13.5 years. The very first physical sign is testicular enlargement (>4 ml volume), followed by scrotal thinning, penile growth, pubic hair, and eventually the voice crack.", hi: "लड़कों में प्यूबर्टी 9.5 से 13.5 वर्ष के बीच शुरू होती है। सबसे पहला लक्षण अंडकोष (Testes) के आकार में वृद्धि होना है, जिसके बाद कद व आवाज में बदलाव आता है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-arrow-trend-up",
    color: "#2563eb",
    q: { en: "12. When do boys experience their peak height growth spurt?", hi: "12. लड़कों की लंबाई सबसे तेजी से किस उम्र में बढ़ती है?" },
    a: { en: "Boys have their peak growth spurt about 2 years later than girls, typically between 13 and 15.5 years (Tanner Stage 3-4). During this peak, boys can grow 9 to 11 cm in a single year, provided nutrition and sleep are optimal.", hi: "लड़कों का ग्रोथ स्पर्ट 13 से 15.5 वर्ष के बीच आता है। इस दौरान लड़के 1 साल में 9 से 11 सेमी तक लंबे हो सकते हैं।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-microphone",
    color: "#2563eb",
    q: { en: "13. Why does a teenage boy's voice crack and deepen?", hi: "13. टीनएज में लड़कों की आवाज भारी क्यों होती है या फटने क्यों लगती है?" },
    a: { en: "Testosterone causes rapid enlargement of the larynx (voice box) and lengthening of the vocal cords, creating the 'Adam's apple'. As muscles adapt to this rapid growth, temporary cracking occurs between ages 12 to 14 before stabilizing.", hi: "टेस्टोस्टेरोन हार्मोन के प्रभाव से वोकल कॉर्ड्स और लेरिंक्स (कंठ) का आकार बढ़ता है। मांसपेशियों के ढलने के दौरान कुछ समय आवाज भारी या फटने लगती है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-heart-pulse",
    color: "#2563eb",
    q: { en: "14. Is breast swelling (Gynecomastia) normal in teenage boys?", hi: "14. क्या टीनएज लड़कों में छाती में हल्की गांठ या उभार सामान्य है?" },
    a: { en: "Yes! Up to 50-60% of boys develop temporary pubertal gynecomastia (a tender, marble-sized disc under the nipple) due to transient estrogen-testosterone imbalances around ages 12-14. It naturally resolves on its own in 12-18 months.", hi: "हाँ, 12 से 14 वर्ष की उम्र में हार्मोनल असंतुलन से 50% लड़कों में छाती के नीचे हल्की गांठ बन जाती है, जो 1 से 1.5 साल में अपने आप ठीक हो जाती है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-moon",
    color: "#2563eb",
    q: { en: "15. Are nocturnal emissions ('wet dreams') normal in boys?", hi: "15. क्या लड़कों में नाइटफॉल (Nocturnal Emissions) होना सामान्य है?" },
    a: { en: "Completely normal and healthy. As testosterone stimulates semen production, the body releases excess fluid naturally during sleep dreams. It is a normal physiological milestone and causes no physical harm or weakness.", hi: "यह पूर्णतः प्राकृतिक और स्वस्थ शारीरिक क्रिया है। इससे शरीर में कोई कमजोरी नहीं आती। यह प्यूबर्टी का सामान्य हिस्सा है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-dumbbell",
    color: "#2563eb",
    q: { en: "16. Is heavy gym weightlifting safe before age 16?", hi: "16. क्या 16 साल से पहले जिम में भारी वजन उठाना सुरक्षित है?" },
    a: { en: "Heavy maximal weightlifting and spinal compression exercises (heavy squats, overhead presses) should be avoided before growth plates fuse. Bodyweight exercises (pushups, pullups, swimming, athletics) build superior functional strength safely.", hi: "हड्डियों की ग्रोथ प्लेट्स बंद होने से पहले बहुत भारी वजन उठाना रीढ़ और जोड़ों के लिए हानिकारक हो सकता है। बॉडीवेट एक्सरसाइज और खेलकूद सबसे सुरक्षित हैं।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-ban",
    color: "#2563eb",
    q: { en: "17. Why are gym protein powders and supplements risky for teens?", hi: "17. जिम प्रोटीन शेक व सप्लीमेंट्स टीनएजर्स के लिए हानिकारक क्यों हो सकते हैं?" },
    a: { en: "Unregulated gym powders often contain artificial additives, excess sodium, or hidden anabolic steroids that strain teenage kidneys and livers. Real food (eggs, paneer, sprouts, milk, nuts) fulfills 100% of daily athletic protein requirements.", hi: "बाजारू प्रोटीन पाउडर से किडनी व लिवर पर अतिरिक्त दबाव पड़ता है। घर का भोजन (अंडा, पनीर, स्प्राउट्स, दालें, दूध) मांसपेशियों के विकास के लिए पर्याप्त है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-bed",
    color: "#2563eb",
    q: { en: "18. How does deep sleep impact a boy's height growth?", hi: "18. गहरी नींद लड़कों की लंबाई बढ़ाने में कैसे मदद करती है?" },
    a: { en: "Over 70% of human Growth Hormone (GH) is pulsatile-secreted during Stage 3-4 Slow Wave deep sleep between 10 PM and 4 AM. Chronic late-night mobile phone browsing suppresses GH release and stunts potential adult height.", hi: "ग्रोथ हार्मोन का 70% स्राव रात में गहरी नींद के दौरान होता है। देर रात तक मोबाइल चलाने से लंबाई पर सीधा नकारात्मक प्रभाव पड़ता है।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-clock-rotate-left",
    color: "#2563eb",
    q: { en: "19. What is Constitutional Delay of Growth & Puberty (Late Bloomers)?", hi: "19. देर से प्यूबर्टी आना (Constitutional Delay) क्या होता है?" },
    a: { en: "Common in boys where puberty starts late (after 14y) with a delayed bone age. Often runs in families (father was a late bloomer). These boys catch up completely and reach their normal genetic adult height by age 18-19.", hi: "कुछ लड़कों में आनुवंशिक कारणों से प्यूबर्टी देर से (14 वर्ष के बाद) शुरू होती है। वे 18-19 साल तक अपना पूरा जेनेटिक कद हासिल कर लेते हैं।" }
  },
  {
    category: "boys",
    icon: "fa-solid fa-shield-virus",
    color: "#2563eb",
    q: { en: "20. What critical vaccines do teenage boys need?", hi: "20. टीनएज लड़कों को कौन से टीके लगवाने चाहिए?" },
    a: { en: "1. Tdap Booster (at 10-12 years for Tetanus, Diphtheria, Pertussis). 2. Annual Influenza vaccine. 3. Catch-up Hepatitis-B, MMR, and Chickenpox if doses were missed during infancy.", hi: "1. 10-12 वर्ष पर Tdap बूस्टर। 2. वार्षिक फ्लू का टीका। 3. बचपन में छूटे हुए हेपेटाइटिस-बी, एमएमआर और चेचक के टीके।" }
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
        <li><strong>Conventional (DTwP / "Painful"):</strong> Contains whole-cell killed pertussis bacteria. It triggers a strong immune response, often accompanied by 24-48 hours of high fever, irritability, and local injection-site swelling.</li>
        <li><strong>Acellular (DTaP / "Painless"):</strong> Contains only purified pertussis antigens. It causes significantly less fever and discomfort while providing protective immunity.</li>
      </ul>
      <h4 class="article-section-title">Which One is Recommended by IAP?</h4>
      <p>Both vaccines provide protective efficacy against whooping cough. Acellular (painless) vaccines are preferred by parents seeking minimal post-vaccination fever, while whole-cell vaccines are widely used in universal public health programs. Dr. Dinesh Mittal evaluates each child's health history to advise the most appropriate option.</p>
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
      <p>Keep the umbilical cord stump strictly dry and clean. Avoid applying oil, turmeric, or powders. It will naturally dry and detach within 7 to 14 days.</p>
      <h4 class="article-section-title">3. Safe Sleep Protocol (SIDS Prevention)</h4>
      <p>Always place your baby on their back on a firm mattress. Keep the crib free of loose pillows, blankets, and heavy quilts.</p>
      <h4 class="article-section-title">4. Red Flag Warnings</h4>
      <p>Consult our clinic immediately if you notice lethargy, poor sucking, fast breathing (>60 breaths/min), or deep yellow jaundice extending down to the palms and soles.</p>
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
      <p>Use normal tap/lukewarm water on a soft cloth to gently sponge the forehead, neck, and limbs. <strong>Never use ice water or alcohol rubs</strong>, as they cause shivering and rebound spikes.</p>
      <h4 class="article-section-title">3. Medication Safety</h4>
      <p>Administer only pediatrician-prescribed Paracetamol drops/syrups according to your child's exact weight, not age. Never give Aspirin or self-medicate with over-the-counter combinations.</p>
      <h4 class="article-section-title">4. When to Seek Urgent Medical Care</h4>
      <p>Visit our clinic immediately if fever exceeds 102°F for >48 hours, or if the child develops a stiff neck, seizures (febrile fit), vomiting, or extreme lethargy.</p>
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
      <h4 class="article-section-title">Preventive Measures</h4>
      <ul>
        <li>Annual IAP Influenza vaccination for all children above 6 months of age.</li>
        <li>Frequent hand washing after returning from school or playground.</li>
        <li>Adequate warm hydration (soups, boiled water, home-cooked light meals).</li>
      </ul>
      <div class="article-cta-box">
        <p>Protect your child with the latest annual quadrivalent flu vaccine at our Rohini clinic.</p>
        <button onclick="closeBlogModal(); openBookingModal();" class="article-cta-btn"><i class="fa-solid fa-calendar-check"></i> Book Flu Vaccination</button>
      </div>
    `
  }
};
