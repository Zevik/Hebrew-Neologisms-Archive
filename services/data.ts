import { WordEntry, WordStatus, Weight, Author } from '../types';

export const wordList: WordEntry[] = [
  // --- BEN YEHUDA: Aleph ---
  {
    id: 'by_1',
    word: 'אַבְחָמֶץ',
    definition: 'חמצן (Oxygen)',
    translation: 'Oxygen',
    status: WordStatus.REJECTED,
    weight: 'הלחם (אב+חמץ)',
    etymology: 'ניסיון ליצור יסודות עם התחילית "אב". נדחה מפני חמצן.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_2',
    word: 'אַבְחָנָק',
    definition: 'חנקן (Nitrogen)',
    translation: 'Nitrogen',
    status: WordStatus.REJECTED,
    weight: 'הלחם (אב+חנק)',
    etymology: 'נדחה מפני חנקן.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_3',
    word: 'אַבְמַיִם',
    definition: 'מימן (Hydrogen)',
    translation: 'Hydrogen',
    status: WordStatus.REJECTED,
    weight: 'הלחם (אב+מים)',
    etymology: 'נדחה מפני מימן.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_4',
    word: 'אַבְנִיָּה',
    definition: 'מסילה כבושה באבנים, כביש',
    translation: 'Paved road',
    status: WordStatus.REJECTED,
    weight: 'סיומת -יָה',
    notes: 'נדחקה מפני "מרצפת" או "כביש".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_5',
    word: 'אָבָץ',
    definition: 'יסוד כימי מתכתי',
    translation: 'Zinc',
    status: WordStatus.ACCEPTED,
    weight: Weight.PAAL,
    etymology: 'חידוש פונטי להשלמת המינוח המדעי',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_6',
    word: 'אַבְרוֹן',
    definition: 'עיפרון',
    translation: 'Pencil',
    status: WordStatus.REJECTED,
    weight: 'סיומת -וֹן',
    notes: 'נדחה מפני "עיפרון" של קלוזנר.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_7',
    word: 'אָדִיב',
    definition: 'בעל נימוסים והליכות נאות',
    translation: 'Polite',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעִיל',
    etymology: 'שורש אד"ב (מקביל לערבית Adab)',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_8',
    word: 'אֲדִיבוּת',
    definition: 'התנהגות מנומסת (שם עצם מופשט)',
    translation: 'Politeness',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_9',
    word: 'אָדִישׁ',
    definition: 'חוסר איכפתיות או ניתוק רגשי',
    translation: 'Indifferent',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_10',
    word: 'אֲדִישׁוּת',
    definition: 'מצב נפשי של חוסר עניין',
    translation: 'Indifference',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_11',
    word: 'אַדֶּמֶת',
    definition: 'מחלה (במקור Measles, כיום Rubella)',
    translation: 'German Measles',
    status: WordStatus.MODIFIED,
    weight: 'פַּעֶלֶת (מחלות)',
    notes: 'בן יהודה ייעד ל-Measles (חצבת), כיום משמש ל-Rubella.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_12',
    word: 'אֲהַבְהָב',
    definition: 'אהבה קלה, פלירט',
    translation: 'Flirtation',
    status: WordStatus.ACCEPTED,
    weight: 'פְּעַלְעַל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_13',
    word: 'אָהַד',
    definition: 'להביע תמיכה רגשית או הזדהות',
    translation: 'To Sympathize',
    status: WordStatus.ACCEPTED,
    weight: Weight.PAAL,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_14',
    word: 'אַהֲדָה',
    definition: 'יחס חיובי ותומך כלפי גורם חיצוני',
    translation: 'Sympathy',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_15',
    word: 'אָהוּד',
    definition: 'אדם או אובייקט הזוכה לאהדת הכלל',
    translation: 'Popular/Liked',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעוּל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_16',
    word: 'אֲוִירוֹן',
    definition: 'מטוס',
    translation: 'Airplane',
    status: WordStatus.REJECTED,
    weight: 'סיומת -וֹן',
    notes: 'נדחק מפני "מטוס" של ביאליק, נותר בשפת ילדים.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_17',
    word: 'אוֹפַן',
    definition: 'אופניים (צורה יחידאית)',
    translation: 'Bicycle',
    status: WordStatus.REJECTED,
    weight: 'קֹטֶל',
    notes: 'הציבור העדיף את צורת הזוגי "אופניים" או "אופנוע".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_18',
    word: 'אוֹפַנַּיִם',
    definition: 'כלי רכב דו-גלגלי',
    translation: 'Bicycle',
    status: WordStatus.ACCEPTED,
    weight: 'זוגי',
    etymology: 'מהמילה המקראית "אופן" (גלגל)',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_19',
    word: 'אוֹרִית',
    definition: 'רדיום (מתכת מאירה)',
    translation: 'Radium',
    status: WordStatus.REJECTED,
    weight: Weight.IT,
    notes: 'לא נקלט. משתמשים בשם הלועזי.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_20',
    word: 'אִזֵּן',
    definition: 'בדק בשמיעה (האזין ללב/ריאות)',
    translation: 'Auscultate',
    status: WordStatus.REJECTED,
    weight: 'פיעל',
    notes: 'מקובל "האזין".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_21',
    word: 'אַחֲרָה',
    definition: 'רתיחת דם, שיגעון לדבר',
    translation: 'Frenzy',
    status: WordStatus.REJECTED,
    weight: 'קַטָּלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_22',
    word: 'אַחְמְתָא',
    definition: 'כלי קיבול, ילקוט או תיק',
    translation: 'Bag/Satchel',
    status: WordStatus.REJECTED,
    weight: Weight.MISHKAL_AHER,
    notes: 'מילה מקראית שבן יהודה ניסה להחיות ללא הצלחה.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_23',
    word: 'אַכֶּלֶת',
    definition: 'סרטן (מחלה)',
    translation: 'Cancer',
    status: WordStatus.REJECTED,
    weight: 'פַּעֶלֶת',
    notes: 'נדחק מפני "סרטן".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_24',
    word: 'אָלֹם',
    definition: 'צבע חום (שחום)',
    translation: 'Brown',
    status: WordStatus.REJECTED,
    weight: 'פָּעֹל',
    notes: 'נדחה מפני "חום".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_25',
    word: 'אִמּוּר',
    definition: 'שביתה',
    translation: 'Strike',
    status: WordStatus.REJECTED,
    weight: 'פִּעוּל',
    notes: 'נדחה מפני "שביתה".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_26',
    word: 'אָמָּנוּת',
    definition: 'יצירה אסתטית גבוהה',
    translation: 'Art',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_27',
    word: 'אָפְנָה',
    definition: 'הצורה העכשווית, "מודה"',
    translation: 'Fashion',
    status: WordStatus.ACCEPTED,
    weight: 'קָטְלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_28',
    word: 'אֶפְעוֹן',
    definition: 'צמח (Viperine)',
    translation: 'Viperine',
    status: WordStatus.REJECTED,
    weight: 'סיומת -וֹן',
    notes: 'מזוהה כיום כ"עכנאי".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_29',
    word: 'אֵפֶר',
    definition: 'שריד אבקתי של שריפה',
    translation: 'Ashes',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_30',
    word: 'אֶקְדָּח',
    definition: 'כלי נשק יורה',
    translation: 'Pistol',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_31',
    word: 'אֶרֶד',
    definition: 'פטריית כמהין (Truffle)',
    translation: 'Truffle',
    status: WordStatus.REJECTED,
    weight: 'סגוליים',
    notes: 'מקובל "כמהה".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_32',
    word: 'אָרָד',
    definition: 'ברונזה',
    translation: 'Bronze',
    status: WordStatus.ACCEPTED,
    weight: Weight.PAAL,
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Bet ---
  {
    id: 'by_33',
    word: 'בֻּבָּה',
    definition: 'דמות למשחק',
    translation: 'Doll',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_34',
    word: 'בַּדּוּרָה',
    definition: 'עגבנייה',
    translation: 'Tomato',
    status: WordStatus.REJECTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_35',
    word: 'בַּחֲרָן',
    definition: 'אדם בררן',
    translation: 'Choosy',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -ָן',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_36',
    word: 'בִּצְבּוּץ',
    definition: 'חזרת אור/נצנוץ (במקור)',
    translation: 'Glimmer/Reflection',
    status: WordStatus.MODIFIED,
    weight: 'פִּעְלוּל',
    notes: 'המשמעות המקורית של החזרת אור לא נקלטה, משמש כ"יציאה החוצה" או נביטה.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_37',
    word: 'בֹּרֶג',
    definition: 'יתד מתכת מסולסלת',
    translation: 'Screw',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Gimel ---
  {
    id: 'by_38',
    word: 'גֶּבֶס',
    definition: 'חומר מינרלי לבנייה ורפואה',
    translation: 'Gypsum',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_39',
    word: 'גְּלִידָה',
    definition: 'ממתק קפוא',
    translation: 'Ice Cream',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_40',
    word: 'גָּמִישׁ',
    definition: 'בעל אלסטיות',
    translation: 'Flexible',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_41',
    word: 'גְּמִישׁוּת',
    definition: 'תכונת האלסטיות',
    translation: 'Flexibility',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_42',
    word: 'גִּנְדֵּר',
    definition: 'להתקשט יתר על המידה',
    translation: 'To preen',
    status: WordStatus.ACCEPTED,
    weight: 'פיעל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_43',
    word: 'גַּנְדְּרָן',
    definition: 'אדם העוסק יתר על המידה בלבושו',
    translation: 'Dandy',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -ָן',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_44',
    word: 'גַּנֶּנֶת',
    definition: 'מחנכת בגן ילדים',
    translation: 'Kindergarten Teacher',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעָלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_45',
    word: 'גִּפֵּר',
    definition: 'פיזר גופרית',
    translation: 'Sulphurize',
    status: WordStatus.ACCEPTED,
    weight: 'פיעל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_46',
    word: 'גַּפְתָּנוּת',
    definition: 'גאווה, התפארות',
    translation: 'Arrogance',
    status: WordStatus.UNCERTAIN,
    weight: Weight.UT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_47',
    word: 'גֶּרֶב',
    definition: 'פריט לבוש לרגל',
    translation: 'Sock',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_48',
    word: 'גְּרָרָה',
    definition: 'עגלה נגררת (על שלג)',
    translation: 'Sled/Trailer',
    status: WordStatus.REJECTED,
    weight: 'פְּעָלָה',
    notes: 'מקובל "מגררה" או "מזחלת".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_49',
    word: 'גְּשׁוֹר',
    definition: 'אמיץ, נועז',
    translation: 'Bold',
    status: WordStatus.REJECTED,
    weight: Weight.MISHKAL_AHER,
    etymology: 'מהערבית "ג\'אסר".',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Dalet ---
  {
    id: 'by_50',
    word: 'דַּיָּל',
    definition: 'מלצר (במקור), כיום במטוס',
    translation: 'Steward',
    status: WordStatus.MODIFIED,
    weight: 'פַּעָל',
    notes: 'בן יהודה חידש עבור מלצר במסעדה. כיום משמש בטיסה.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_51',
    word: 'דִּיל',
    definition: 'שמיר (צמח)',
    translation: 'Dill',
    status: WordStatus.REJECTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_52',
    word: 'דְּמוּמָה / דְּמוּמִית',
    definition: 'כלנית (Anemone)',
    translation: 'Anemone',
    status: WordStatus.REJECTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_53',
    word: 'דִּפְדַּף',
    definition: 'הפך דפים',
    translation: 'Leaf through',
    status: WordStatus.ACCEPTED,
    weight: 'פִּלְפֵּל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_54',
    word: 'דְפוּפָה',
    definition: 'כוננית ספרים',
    translation: 'Bookstand',
    status: WordStatus.REJECTED,
    weight: 'פְּעוּלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_55',
    word: 'דִּרְבֵּן',
    definition: 'לזרז',
    translation: 'To spur',
    status: WordStatus.ACCEPTED,
    weight: 'פיעל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_56',
    word: 'דַּשׁ',
    definition: 'דש הבגד',
    translation: 'Lapel',
    status: WordStatus.ACCEPTED,
    weight: 'קל',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: He ---
  {
    id: 'by_57',
    word: 'הֲגִירָה',
    definition: 'תנועת אוכלוסין',
    translation: 'Migration',
    status: WordStatus.ACCEPTED,
    weight: 'הפעיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_58',
    word: 'הִגֵּר',
    definition: 'לעבור ארץ',
    translation: 'To migrate',
    status: WordStatus.ACCEPTED,
    weight: 'פיעל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_59',
    word: 'הָטֹב',
    definition: 'צבוע בצבעים מתחלפים',
    translation: 'Variegated',
    status: WordStatus.REJECTED,
    weight: 'פָּעֹל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_60',
    word: 'הַפְתָּעָה',
    definition: 'דבר לא צפוי',
    translation: 'Surprise',
    status: WordStatus.ACCEPTED,
    weight: 'הפעיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_61',
    word: 'הַצְהָרָה',
    definition: 'הודעה רשמית',
    translation: 'Declaration',
    status: WordStatus.ACCEPTED,
    weight: 'הפעיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_62',
    word: 'הָרָם',
    definition: 'פירמידה',
    translation: 'Pyramid',
    status: WordStatus.REJECTED,
    weight: 'פָּרָס',
    notes: 'נדחה מפני "פירמידה".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_63',
    word: 'הִתְגַנְדְּרוּת',
    definition: 'פעולת ההתייפות',
    translation: 'Preening',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_64',
    word: 'הִתְעַנְיְנוּת',
    definition: 'שימת לב',
    translation: 'Interest',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Vav ---
  {
    id: 'by_65',
    word: 'וְזָרָה',
    definition: 'משרד ממשלתי (מיניסטריון)',
    translation: 'Ministry',
    status: WordStatus.REJECTED,
    weight: 'פְּעָלָה',
    notes: 'הוחלף ב"משרד". נגזר מ"וזיר".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_66',
    word: 'וֶרֶד',
    definition: 'הפרח Rose',
    translation: 'Rose',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_67',
    word: 'וַעֲדָה',
    definition: 'קבוצה ממונה',
    translation: 'Commission',
    status: WordStatus.ACCEPTED,
    weight: 'פְּעָלָה',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Zayin ---
  {
    id: 'by_68',
    word: 'זִבְדָּה',
    definition: 'שמנת',
    translation: 'Cream',
    status: WordStatus.UNCERTAIN,
    weight: 'פִּעְלָה',
    notes: 'רווחת המילה "שמנת". זִבְדָּה משמש לעיתים.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_69',
    word: 'זִג',
    definition: 'שקוף',
    translation: 'Transparent',
    status: WordStatus.REJECTED,
    weight: 'פֶּעֶל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_70',
    word: 'זֶהוּת',
    definition: 'ה"אני" הייחודי',
    translation: 'Identity',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_71',
    word: 'זָהָרִית',
    definition: 'זרחן (במקור)',
    translation: 'Phosphorus',
    status: WordStatus.REJECTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_72',
    word: 'זִיּוּן',
    definition: 'סיכון (Risk)',
    translation: 'Risk',
    status: WordStatus.REJECTED,
    weight: 'פִּעוּל',
    notes: 'כיום משמש ל-Armament. למשמעות Risk מקובל "סיכון".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_73',
    word: 'זִים',
    definition: 'איבר נשימה בדג',
    translation: 'Gill',
    status: WordStatus.ACCEPTED,
    weight: 'קל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_74',
    word: 'זִמְזוּם',
    definition: 'קול המיה',
    translation: 'Buzzing',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלוּל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_75',
    word: 'זַמֶּרֶת',
    definition: 'זמרת (אשה)',
    translation: 'Singer (fem)',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעֶלֶת',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Het ---
  {
    id: 'by_76',
    word: 'חֲבִיתָה',
    definition: 'מאכל ביצים מטוגן',
    translation: 'Omelette',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_77',
    word: 'חֲגִיגִי',
    definition: 'סולמני, פסטיבי',
    translation: 'Solemn/Festive',
    status: WordStatus.ACCEPTED,
    weight: 'שם תואר',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_78',
    word: 'חַוֶּרֶת',
    definition: 'אדמת גיר',
    translation: 'Chalk soil',
    status: WordStatus.REJECTED,
    weight: 'פַּעֶלֶת',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_79',
    word: 'חֲזִיָּה',
    definition: 'פריט לבוש תחתון',
    translation: 'Bra',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_80',
    word: 'חָזִית',
    definition: 'הצד הקדמי / שדה הקרב',
    translation: 'Front',
    status: WordStatus.ACCEPTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_81',
    word: 'חֲזֶרֶת',
    definition: 'חזרת / חזרת (מחלה)',
    translation: 'Horseradish/Mumps',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעֶלֶת',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_82',
    word: 'חִטֵּב',
    definition: 'לפסל',
    translation: 'Sculpt',
    status: WordStatus.ACCEPTED,
    weight: 'פיעל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_83',
    word: 'חַטָּב',
    definition: 'פסל (אמן)',
    translation: 'Sculptor',
    status: WordStatus.REJECTED,
    weight: 'קַטָּל',
    notes: 'מקובל "פסל".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_84',
    word: 'חַיְדַּק',
    definition: 'בקטריה',
    translation: 'Bacteria',
    status: WordStatus.ACCEPTED,
    weight: 'הלחם',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_85',
    word: 'חַיָּל',
    definition: 'איש צבא',
    translation: 'Soldier',
    status: WordStatus.ACCEPTED,
    weight: 'קַטָּל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_86',
    word: 'חֲלִיקָה',
    definition: 'חולצה (Blouse)',
    translation: 'Blouse',
    status: WordStatus.REJECTED,
    weight: 'פְּעִילָה',
    notes: 'הוצע לחולצת נשים. לא נקלט.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_87',
    word: 'חֲמָמָה',
    definition: 'מבנה לגידול',
    translation: 'Greenhouse',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_88',
    word: 'חֲנֻכִּיָּה',
    definition: 'מנורת חנוכה',
    translation: 'Hanukkah Lamp',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Tet, Yod ---
  {
    id: 'by_89',
    word: 'טֶקֶס',
    definition: 'אירוע רשמי',
    translation: 'Ceremony',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_90',
    word: 'יְהָר',
    definition: 'יהירות',
    translation: 'Arrogance',
    status: WordStatus.REJECTED,
    weight: 'פֹּעֶל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_91',
    word: 'יָזְמָה',
    definition: 'התחלת דבר חדש',
    translation: 'Initiative',
    status: WordStatus.ACCEPTED,
    weight: 'קָטְלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_92',
    word: 'יַמִּיָּה',
    definition: 'צי',
    translation: 'Navy',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Kaf ---
  {
    id: 'by_93',
    word: 'כֹּחִית',
    definition: 'דינמיט',
    translation: 'Dynamite',
    status: WordStatus.REJECTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_94',
    word: 'כְּפָפָה',
    definition: 'כסיה',
    translation: 'Glove',
    status: WordStatus.ACCEPTED,
    weight: 'פְּעָלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_95',
    word: 'כְּרוּבִית',
    definition: 'ירק',
    translation: 'Cauliflower',
    status: WordStatus.ACCEPTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_96',
    word: 'כַּתָּבָה',
    definition: 'ידיעה עיתונאית',
    translation: 'Article',
    status: WordStatus.ACCEPTED,
    weight: 'קַטָּלָה',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Lamed ---
  {
    id: 'by_97',
    word: 'לָטִיף',
    definition: 'מי שמלטף',
    translation: 'Caresser',
    status: WordStatus.REJECTED,
    weight: 'פָּעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_98',
    word: 'לִטֵּף',
    definition: 'לגעת ברכות',
    translation: 'Caress',
    status: WordStatus.ACCEPTED,
    weight: 'פיעל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_99',
    word: 'לְטִיפָה',
    definition: 'פעולת הליטוף',
    translation: 'Caressing',
    status: WordStatus.ACCEPTED,
    weight: 'פְּעִילָה',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Mem ---
  {
    id: 'by_100',
    word: 'מַאֲזֵן הָאַוִיר',
    definition: 'ברומטר',
    translation: 'Barometer',
    status: WordStatus.REJECTED,
    weight: 'צירוף',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_101',
    word: 'מָבוֹךְ',
    definition: 'לבירינט',
    translation: 'Maze',
    status: WordStatus.ACCEPTED,
    weight: 'מָקוֹל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_102',
    word: 'מִבְרָק',
    definition: 'טלגרמה',
    translation: 'Telegram',
    status: WordStatus.ACCEPTED,
    weight: 'מִפְעָל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_103',
    word: 'מִבְרָשָׁה',
    definition: 'מברשת',
    translation: 'Brush',
    status: WordStatus.MODIFIED,
    weight: 'מִפְעָלָה',
    notes: 'התקבלה הצורה "מברשת".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_104',
    word: 'מַגֶּבֶת',
    definition: 'כלי לניגוב',
    translation: 'Towel',
    status: WordStatus.ACCEPTED,
    weight: Weight.MAFEL,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_105',
    word: 'מַגְהֵץ',
    definition: 'מגהץ',
    translation: 'Iron',
    status: WordStatus.ACCEPTED,
    weight: Weight.MAFEL,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_106',
    word: 'מַגָּשׁ',
    definition: 'כלי להגשה',
    translation: 'Tray',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטָל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_107',
    word: 'מַדְלֵק',
    definition: 'גפרור',
    translation: 'Match',
    status: WordStatus.REJECTED,
    weight: Weight.MAFEL,
    notes: 'התקבל "גפרור" של מנדלי.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_108',
    word: 'מִדְרָכָה',
    definition: 'מדרכה',
    translation: 'Sidewalk',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_109',
    word: 'מִדְרָשָׁה',
    definition: 'בית ספר תיכון (במקור)',
    translation: 'Seminary',
    status: WordStatus.MODIFIED,
    weight: Weight.MIFALA,
    notes: 'משמש כיום למוסד לימודי תורני/פדגוגי, לא תיכון.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_110',
    word: 'מְהַגֵּר',
    definition: 'אמיגרנט',
    translation: 'Emigrant',
    status: WordStatus.ACCEPTED,
    weight: 'בינוני',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_111',
    word: 'מַהְפְּכָנִי',
    definition: 'רבולוציונר',
    translation: 'Revolutionary',
    status: WordStatus.ACCEPTED,
    weight: 'שם תואר',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_112',
    word: 'מוֹז',
    definition: 'בננה',
    translation: 'Banana',
    status: WordStatus.REJECTED,
    weight: 'פּוֹל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_113',
    word: 'מוֹשׁ',
    definition: 'סחופת',
    translation: 'Alluvium',
    status: WordStatus.REJECTED,
    weight: 'פּוֹל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_114',
    word: 'מַחְלָבָה',
    definition: 'מפעל חלב',
    translation: 'Dairy',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_115',
    word: 'מַחֲלֵץ',
    definition: 'חולץ פקקים',
    translation: 'Corkscrew',
    status: WordStatus.ACCEPTED,
    weight: Weight.MAFEL,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_116',
    word: 'מִטְבָּח',
    definition: 'חדר בישול',
    translation: 'Kitchen',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטָל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_117',
    word: 'מִטְרִיָּה',
    definition: 'מטריה',
    translation: 'Umbrella',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_118',
    word: 'מַכּוֹשׁ',
    definition: 'פטיש בפסנתר',
    translation: 'Piano hammer',
    status: WordStatus.ACCEPTED,
    weight: 'מָקוֹל',
    notes: 'משמש במשמעות כללית של כלי עבודה.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_119',
    word: 'מַכּוֹשִׁית',
    definition: 'פסנתר',
    translation: 'Piano',
    status: WordStatus.REJECTED,
    weight: Weight.IT,
    notes: 'נדחה מפני "פסנתר".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_120',
    word: 'מִכְלָלָה',
    definition: 'אוניברסיטה',
    translation: 'College',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_121',
    word: 'מִכְתָּבָה',
    definition: 'שולחן כתיבה',
    translation: 'Desk',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_122',
    word: 'מִלּוֹן',
    definition: 'דיקציונר',
    translation: 'Dictionary',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -וֹן',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_123',
    word: 'מִמְחָטָה',
    definition: 'מטפחת אף',
    translation: 'Handkerchief',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_124',
    word: 'מַמְרֵט',
    definition: 'כלי למריטת עור',
    translation: 'Plucker/Scraper',
    status: WordStatus.UNCERTAIN,
    weight: Weight.MAFEL,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_125',
    word: 'מִנְאָם',
    definition: 'נאום',
    translation: 'Speech',
    status: WordStatus.REJECTED,
    weight: 'מִפְעָל',
    notes: 'נדחה מפני "נאום".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_126',
    word: 'מָנוּי',
    definition: 'סובסקריבר',
    translation: 'Subscriber',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעוּל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_127',
    word: 'מְנָיָה',
    definition: 'חלק בשותפות',
    translation: 'Share/Stock',
    status: WordStatus.ACCEPTED,
    weight: 'פְּעָלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_128',
    word: 'מִנְשָׁר',
    definition: 'מניפסט',
    translation: 'Manifesto',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטָל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_129',
    word: 'מִסְבָּאָה',
    definition: 'בית יין',
    translation: 'Pub/Tavern',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_130',
    word: 'מַסְחֵף',
    definition: 'מגן פנים ללוחם',
    translation: 'Visor',
    status: WordStatus.REJECTED,
    weight: Weight.MAFEL,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_131',
    word: 'מִסְמָךְ',
    definition: 'דוקומנט',
    translation: 'Document',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטָל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_132',
    word: 'מִסְעָדָה',
    definition: 'רסטורן',
    translation: 'Restaurant',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_133',
    word: 'מַסְפֵּג',
    definition: 'כלי לספיגת דיו',
    translation: 'Blotter',
    status: WordStatus.ACCEPTED,
    weight: Weight.MAFEL,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_134',
    word: 'מַעְבָּדָה',
    definition: 'לבורטוריום',
    translation: 'Laboratory',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_135',
    word: 'מַעֲטָפָה',
    definition: 'כיסוי למכתב',
    translation: 'Envelope',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_136',
    word: 'מַעֲלֶה וּמוֹרִיד',
    definition: 'מעלית',
    translation: 'Elevator',
    status: WordStatus.REJECTED,
    weight: 'בינוני',
    notes: 'התקבל "מעלית".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_137',
    word: 'מַעֲמָד',
    definition: 'קנדידט (במקור) / סטטוס',
    translation: 'Candidate/Class',
    status: WordStatus.MODIFIED,
    weight: 'מִקְטָל',
    notes: 'בן יהודה הציע עבור מועמד. נקלט כמעמד חברתי.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_138',
    word: 'מַעַן',
    definition: 'כתובת',
    translation: 'Address',
    status: WordStatus.ACCEPTED,
    weight: 'מֶקְטָל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_139',
    word: 'מַעֲצָמָה',
    definition: 'מדינה אדירה',
    translation: 'Superpower',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_140',
    word: 'מַעֲשֵׁנָה',
    definition: 'ארובה',
    translation: 'Chimney',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_141',
    word: 'מַפּוּחִית',
    definition: 'הרמוניקה',
    translation: 'Harmonica',
    status: WordStatus.ACCEPTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_142',
    word: 'מַפְצֵעַ',
    definition: 'מפצח אגוזים',
    translation: 'Nutcracker',
    status: WordStatus.ACCEPTED,
    weight: Weight.MAFEL,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_143',
    word: 'מִפְרַחַת',
    definition: 'סרטים בשמלה (Flounce)',
    translation: 'Flounce',
    status: WordStatus.REJECTED,
    weight: 'מִפְעֶלֶת',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_144',
    word: 'מְקַדָּה',
    definition: 'כלי ניקוב לרצען',
    translation: 'Punch tool',
    status: WordStatus.REJECTED,
    weight: Weight.MISHKAL_AHER,
    notes: 'מקובל "מקביים".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_145',
    word: 'מַקְדֵּם',
    definition: 'קודם, טרם זמנו',
    translation: 'Early/Prefix',
    status: WordStatus.ACCEPTED,
    weight: 'בינוני',
    notes: 'כיום משמש כמקדם (Coefficient).',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_146',
    word: 'מָקוֹב',
    definition: 'כלי לרצען',
    translation: 'Tool',
    status: WordStatus.REJECTED,
    weight: 'מָקוֹל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_147',
    word: 'מָקוֹל',
    definition: 'גרמופון',
    translation: 'Gramophone',
    status: WordStatus.REJECTED,
    weight: 'מָקוֹל',
    notes: 'האקדמיה אימצה, אך הציבור העדיף "פטיפון".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_148',
    word: 'מָקוֹלִית',
    definition: 'גרמופון',
    translation: 'Gramophone',
    status: WordStatus.REJECTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_149',
    word: 'מִקְלַחַת',
    definition: 'דוש',
    translation: 'Shower',
    status: WordStatus.ACCEPTED,
    weight: 'מִפְעֶלֶת',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_150',
    word: 'מַקְלֵעַ',
    definition: 'תותח (במקור) / מכונת ירייה',
    translation: 'Machine gun',
    status: WordStatus.MODIFIED,
    weight: Weight.MAFEL,
    notes: 'בן יהודה הציע לתותח. התקבל כמקלע (Machine gun).',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_151',
    word: 'מַרְשׁוֹן',
    definition: 'פרלמנט',
    translation: 'Parliament',
    status: WordStatus.REJECTED,
    weight: 'סיומת -וֹן',
    notes: 'התקבל "כנסת".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_152',
    word: 'מַשְׁאֵבָה',
    definition: 'פומפה',
    translation: 'Pump',
    status: WordStatus.ACCEPTED,
    weight: 'מַפְעֵלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_153',
    word: 'מַשְׁאֵפָה',
    definition: 'משאבת ריק (Vacuum)',
    translation: 'Vacuum pump',
    status: WordStatus.MODIFIED,
    weight: 'מַפְעֵלָה',
    notes: 'בן יהודה הציע למשאבת ריק. כיום משמש לאינהלטור (Inhaler).',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_154',
    word: 'מִשְׁוָרָה',
    definition: 'עצם באוזן (Stapes)',
    translation: 'Stapes',
    status: WordStatus.REJECTED,
    weight: Weight.MIFALA,
    notes: 'סיוון מציין שלא מקובל, למרות הופעתו במילונים מסוימים.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_155',
    word: 'מִשְׁטָרָה',
    definition: 'פוליציה',
    translation: 'Police',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_156',
    word: 'מִשְׁקֶפֶת',
    definition: 'טלסקופ/משקפת',
    translation: 'Binoculars',
    status: WordStatus.ACCEPTED,
    weight: 'מִפְעֶלֶת',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_157',
    word: 'מִשְׁקֶפֶת הַמֶרְחָק',
    definition: 'טלסקופ',
    translation: 'Telescope',
    status: WordStatus.REJECTED,
    weight: 'צירוף',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_158',
    word: 'מִשְׂרָד',
    definition: 'ביורו',
    translation: 'Office',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטָל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_159',
    word: 'מִשְׁתָּלָה',
    definition: 'מקום לשתילים',
    translation: 'Nursery',
    status: WordStatus.ACCEPTED,
    weight: Weight.MIFALA,
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Nun, Samekh, Ayin, Pe ---
  {
    id: 'by_160',
    word: 'נוֹשֵׁךְ הַחַרְצָן',
    definition: 'ציפור (Hawfinch)',
    translation: 'Hawfinch',
    status: WordStatus.REJECTED,
    weight: 'צירוף',
    notes: 'נקרא כיום פצחן.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_161',
    word: 'נַזֶּלֶת',
    definition: 'הפרשה/מחלה',
    translation: 'Runny nose',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעֶלֶת',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_162',
    word: 'נִצְבָּה',
    definition: 'עמידה על הדעת',
    translation: 'Resoluteness',
    status: WordStatus.REJECTED,
    weight: 'פַּעְלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_163',
    word: 'נִקְפָּה',
    definition: 'מכה באצבע',
    translation: 'Finger tap',
    status: WordStatus.REJECTED,
    weight: 'פַּעְלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_164',
    word: 'נַקְנִיק',
    definition: 'בשר מעובד',
    translation: 'Sausage',
    status: WordStatus.ACCEPTED,
    weight: 'מרובע',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_165',
    word: 'סֶגֶל',
    definition: 'צוות',
    translation: 'Staff',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_166',
    word: 'סְמוּקָה',
    definition: 'אדמומיות',
    translation: 'Redness',
    status: WordStatus.UNCERTAIN,
    weight: 'פְּעוּלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_167',
    word: 'סָנִיף',
    definition: 'סעיף של בית עסק',
    translation: 'Branch',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_168',
    word: 'סָכָה',
    definition: 'מבט/הגנה',
    translation: 'Sight',
    status: WordStatus.REJECTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_169',
    word: 'סֶרֶד',
    definition: 'לוח סידור בדפוס',
    translation: 'Typesetting board',
    status: WordStatus.UNCERTAIN,
    weight: 'פֶּעֶל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_170',
    word: 'עִירִיָּה',
    definition: 'מוסד העיר',
    translation: 'Municipality',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_171',
    word: 'עַמּוֹן',
    definition: 'דמוקרט (איש העם)',
    translation: 'Democrat',
    status: WordStatus.REJECTED,
    weight: 'סיומת -וֹן',
    notes: 'נדחה בגלל הקישור המקראי לבני עמון.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_172',
    word: 'עֲנָקִי',
    definition: 'גדול מאוד',
    translation: 'Gigantic',
    status: WordStatus.ACCEPTED,
    weight: 'שם תואר',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_173',
    word: 'עָקִיב',
    definition: 'קונסקוונטי',
    translation: 'Consistent',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_174',
    word: 'עֲקִיבוּת',
    definition: 'עקביות',
    translation: 'Consistency',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_175',
    word: 'עַשְׂבִיָּה',
    definition: 'עשבים שוטים/הרבריום',
    translation: 'Weeds',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_176',
    word: 'עִתּוֹן',
    definition: 'גליון חדשות',
    translation: 'Newspaper',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -וֹן',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_177',
    word: 'פְּלִישָׁה',
    definition: 'חדירת צבא',
    translation: 'Invasion',
    status: WordStatus.ACCEPTED,
    weight: 'פְּעִילָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_178',
    word: 'פְּנִימִיָּה',
    definition: 'מוסד עם מגורים',
    translation: 'Boarding school',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_179',
    word: 'פָּעִיל',
    definition: 'אקטיבי',
    translation: 'Active',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_180',
    word: 'פִּעְפַּע',
    definition: 'טרף (ביצה)',
    translation: 'Beat (eggs)',
    status: WordStatus.REJECTED,
    weight: 'פִּלְפֵּל',
    notes: 'משמש כיום למשמעות של חלחול/בועות.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_181',
    word: 'פְּצָצָה',
    definition: 'בומבה',
    translation: 'Bomb',
    status: WordStatus.ACCEPTED,
    weight: 'פְּעָלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_182',
    word: 'פַּרְוָה',
    definition: 'כסות שיער',
    translation: 'Fur',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_183',
    word: 'פִּרְקָה',
    definition: 'דיביזיה',
    translation: 'Division',
    status: WordStatus.REJECTED,
    weight: 'פַּעְלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_184',
    word: 'פַּרְפַּר',
    definition: 'חרק מעופף',
    translation: 'Butterfly',
    status: WordStatus.ACCEPTED,
    weight: 'מרובע',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Tzadi - Tav ---
  {
    id: 'by_185',
    word: 'צִיּוּר־אוֹר',
    definition: 'צילום',
    translation: 'Photograph',
    status: WordStatus.REJECTED,
    weight: 'צירוף',
    notes: 'התקבל "צילום" של דוד ילין.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_186',
    word: 'צִיר',
    definition: 'דיפלומט',
    translation: 'Diplomat',
    status: WordStatus.ACCEPTED,
    weight: 'קל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_187',
    word: 'קֶבֶס',
    definition: 'בחילה',
    translation: 'Nausea',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_188',
    word: 'קִדְמָה',
    definition: 'פרוגרס',
    translation: 'Progress',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעְלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_189',
    word: 'קָדוֹחַ',
    definition: 'מי שקודח (מקצוע)',
    translation: 'Driller',
    status: WordStatus.REJECTED,
    weight: 'קָטוֹל',
    notes: 'מקובל "קודח".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_190',
    word: 'קְטִינָה',
    definition: 'חלקת אדמה',
    translation: 'Patch of land',
    status: WordStatus.REJECTED,
    weight: 'פְּעִילָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_191',
    word: 'קִיצוֹנִי',
    definition: 'אקסטרמיסט',
    translation: 'Extremist',
    status: WordStatus.ACCEPTED,
    weight: 'שם תואר',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_192',
    word: 'קַלְפִּי',
    definition: 'תיבת הצבעה',
    translation: 'Ballot box',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_193',
    word: 'רְאִינוֹעַ',
    definition: 'קולנוע אילם',
    translation: 'Cinema',
    status: WordStatus.REJECTED,
    weight: 'הלחם',
    notes: 'הוחלף ב"קולנוע" כשהסרטים קיבלו קול.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_194',
    word: 'רַבָּה',
    definition: 'ריבה',
    translation: 'Jam',
    status: WordStatus.REJECTED,
    weight: 'פַּעָלָה',
    notes: 'התקבעה הצורה "ריבה".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_195',
    word: 'רָהוּט',
    definition: 'שטף דיבור',
    translation: 'Fluent',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעוּל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_196',
    word: 'רִהוּט',
    definition: 'כלל הרהיטים',
    translation: 'Furniture',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעוּל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_197',
    word: 'רַכֶּבֶת',
    definition: 'שיירת קרונות',
    translation: 'Train',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעֶלֶת',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_198',
    word: 'רָצִין',
    definition: 'רציני',
    translation: 'Serious',
    status: WordStatus.MODIFIED,
    weight: 'פָּעִיל',
    notes: 'התקבלה הצורה "רציני".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_199',
    word: 'רְצִינִי',
    definition: 'כבד ראש',
    translation: 'Serious',
    status: WordStatus.ACCEPTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_200',
    word: 'רִשְׁמִי',
    definition: 'אופיציאלי',
    translation: 'Official',
    status: WordStatus.ACCEPTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_201',
    word: 'שְׂח-רָחוֹק',
    definition: 'טלפון',
    translation: 'Telephone',
    status: WordStatus.REJECTED,
    weight: 'הלחם',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_202',
    word: 'שַׁחֶלֶת',
    definition: 'נזלת אוזניים (במקור)',
    translation: 'Ear disease',
    status: WordStatus.MODIFIED,
    weight: 'פַּעֶלֶת',
    notes: 'כיום משמש ל-Ovary (איבר רבייה). בן יהודה ייעד למחלה.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_203',
    word: 'שִׁיֵּץ',
    definition: 'פזל',
    translation: 'Squint',
    status: WordStatus.REJECTED,
    weight: 'פִּעֵל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_204',
    word: 'שִׁמְשִׁיָּה',
    definition: 'מטריה לשמש',
    translation: 'Parasol',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_205',
    word: 'שָׁנִית',
    definition: 'מחלה (Scarlet fever)',
    translation: 'Scarlet fever',
    status: WordStatus.ACCEPTED,
    weight: Weight.IT,
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_206',
    word: 'שָׁעוֹן',
    definition: 'מורה שעות',
    translation: 'Clock',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -וֹן',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_207',
    word: 'תְּאַבְדַּעִי',
    definition: 'סקרן',
    translation: 'Curious',
    status: WordStatus.REJECTED,
    weight: 'שם תואר',
    notes: 'נדחה מפני "סקרן".',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_208',
    word: 'תָּאוּרָה',
    definition: 'אילומינציה',
    translation: 'Lighting',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעוּלָה',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_209',
    word: 'תַּבְחִין',
    definition: 'קריטריון',
    translation: 'Criterion',
    status: WordStatus.ACCEPTED,
    weight: 'תַּפְעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_210',
    word: 'תּוּת כְּנַעֲנִי',
    definition: 'תות שדה',
    translation: 'Strawberry',
    status: WordStatus.REJECTED,
    weight: 'צירוף',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_211',
    word: 'תַּחֲזִית',
    definition: 'ספקטרום (במקור)',
    translation: 'Forecast/Spectrum',
    status: WordStatus.MODIFIED,
    weight: 'תַּפְעִית',
    notes: 'בן יהודה ייעד לספקטרום, כיום משמש ל-Forecast.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_212',
    word: 'תַּחְרִים',
    definition: 'תחרה',
    translation: 'Lace',
    status: WordStatus.ACCEPTED,
    weight: 'תַּפְעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_213',
    word: 'תִּזְמֹרֶת',
    definition: 'מנגינה (במקור)',
    translation: 'Orchestra/Melody',
    status: WordStatus.MODIFIED,
    weight: 'תִּפְעֹלֶת',
    notes: 'בן יהודה ייעד למנגינה. הציבור אימץ כ-Orchestra.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_214',
    word: 'תֹּכֶן הָאַוִיר',
    definition: 'ברומטר',
    translation: 'Barometer',
    status: WordStatus.REJECTED,
    weight: 'צירוף',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_215',
    word: 'תֹּכֶן הָאוֹר',
    definition: 'פוטומטר',
    translation: 'Photometer',
    status: WordStatus.REJECTED,
    weight: 'צירוף',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_216',
    word: 'תִּמְרוּן',
    definition: 'מנבּר',
    translation: 'Maneuver',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלוּל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_217',
    word: 'תַּכְשִׁיר',
    definition: 'פרפרט (תרופה)',
    translation: 'Preparation',
    status: WordStatus.ACCEPTED,
    weight: 'תַּפְעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_218',
    word: 'תַּסְבֹּכֶת',
    definition: 'סיבוך',
    translation: 'Complication',
    status: WordStatus.ACCEPTED,
    weight: 'תִּפְעֹלֶת',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_219',
    word: 'תַּפְנִית',
    definition: 'כיוון (במקור)',
    translation: 'Turning point',
    status: WordStatus.MODIFIED,
    weight: 'תַּפְעִית',
    notes: 'כיום משמש כנקודת מפנה.',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_220',
    word: 'תַּפְתִּיחַ',
    definition: 'אדמה סדוקה',
    translation: 'Cracked earth',
    status: WordStatus.REJECTED,
    weight: 'תַּפְעִיל',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_221',
    word: 'תַּצְפִּית',
    definition: 'אובזרבציה',
    translation: 'Observation',
    status: WordStatus.ACCEPTED,
    weight: 'תַּפְעִית',
    author: Author.BEN_YEHUDA
  },
  {
    id: 'by_222',
    word: 'תַּרְגִּיל',
    definition: 'אימון',
    translation: 'Exercise',
    status: WordStatus.ACCEPTED,
    weight: 'תַּפְעִיל',
    author: Author.BEN_YEHUDA
  },
  // --- BEN YEHUDA: Civil Terms ---
  { id: 'by_223', word: 'אַגְרָה', definition: 'תשלום קבוע', translation: 'Fee', status: WordStatus.ACCEPTED, weight: Weight.MISHKAL_AHER, author: Author.BEN_YEHUDA },
  { id: 'by_224', word: 'אֻמְנָה', definition: 'טיפול וחינוך', translation: 'Fostering', status: WordStatus.ACCEPTED, weight: Weight.MISHKAL_AHER, author: Author.BEN_YEHUDA },
  { id: 'by_225', word: 'אֲסִימוֹן', definition: 'מטבע לטלפון', translation: 'Token', status: WordStatus.ACCEPTED, weight: 'סיומת -וֹן', author: Author.BEN_YEHUDA },
  { id: 'by_226', word: 'אַרְנוֹנָה', definition: 'מס עירוני', translation: 'Property Tax', status: WordStatus.ACCEPTED, weight: Weight.MISHKAL_AHER, author: Author.BEN_YEHUDA },
  { id: 'by_227', word: 'גּוּבַיְנָא', definition: 'גבייה', translation: 'Collection', status: WordStatus.ACCEPTED, weight: Weight.MISHKAL_AHER, author: Author.BEN_YEHUDA },
  { id: 'by_228', word: 'דַּרְכּוֹן', definition: 'פספורט', translation: 'Passport', status: WordStatus.ACCEPTED, weight: 'סיומת -וֹן', author: Author.BEN_YEHUDA },
  { id: 'by_229', word: 'הַתְקָנָה', definition: 'הסדרה/אינסטלציה', translation: 'Installation', status: WordStatus.ACCEPTED, weight: 'הפעיל', author: Author.BEN_YEHUDA },
  { id: 'by_230', word: 'חִלּוּט', definition: 'קונפיסקציה', translation: 'Forfeiture', status: WordStatus.ACCEPTED, weight: 'פיעל', author: Author.BEN_YEHUDA },
  { id: 'by_231', word: 'כְּנֶסֶת', definition: 'בית המחוקקים', translation: 'Parliament', status: WordStatus.ACCEPTED, weight: Weight.MISHKAL_AHER, author: Author.BEN_YEHUDA },
  { id: 'by_232', word: 'מְלִיאָה', definition: 'ישיבה כללית', translation: 'Plenum', status: WordStatus.ACCEPTED, weight: Weight.MISHKAL_AHER, author: Author.BEN_YEHUDA },
  { id: 'by_233', word: 'מַצָּע', definition: 'פרוגרמה פוליטית', translation: 'Platform', status: WordStatus.ACCEPTED, weight: 'מִקְטָל', author: Author.BEN_YEHUDA },
  { id: 'by_234', word: 'מִשְׁכָּן', definition: 'מבנה רשמי', translation: 'Residence', status: WordStatus.ACCEPTED, weight: 'מִקְטָל', author: Author.BEN_YEHUDA },
  { id: 'by_235', word: 'סִיעָה', definition: 'פרקציה', translation: 'Faction', status: WordStatus.ACCEPTED, weight: Weight.MISHKAL_AHER, author: Author.BEN_YEHUDA },
  { id: 'by_236', word: 'קַיָּמוּת', definition: 'סוסטיינביליטי', translation: 'Sustainability', status: WordStatus.ACCEPTED, weight: Weight.UT, author: Author.BEN_YEHUDA },
  { id: 'by_237', word: 'שְׁאִילְתָה', definition: 'שאלה פרלמנטרית', translation: 'Query', status: WordStatus.ACCEPTED, weight: Weight.MISHKAL_AHER, author: Author.BEN_YEHUDA },

  // --- BIALIK ---
  {
    id: 'bi_1',
    word: 'מָטוֹס',
    definition: 'כלי טיס',
    translation: 'Airplane',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטָל',
    etymology: 'שורש ט-ו-ס (איוב). החליף את "אוירון".',
    author: Author.BIALIK
  },
  {
    id: 'bi_2',
    word: 'טַיָּס',
    definition: 'מפעיל כלי הטיס',
    translation: 'Pilot',
    status: WordStatus.ACCEPTED,
    weight: 'קַטָּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_3',
    word: 'טִיסָה',
    definition: 'פעולת הטיסה',
    translation: 'Flight',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_4',
    word: 'טַיִס',
    definition: 'תחום התעופה',
    translation: 'Aviation',
    status: WordStatus.ACCEPTED,
    weight: 'קַטִל',
    author: Author.BIALIK
  },
  {
    id: 'bi_5',
    word: 'טַיֶּסֶת',
    definition: 'יחידה צבאית',
    translation: 'Squadron',
    status: WordStatus.ACCEPTED,
    weight: 'קַטֶּלֶת',
    author: Author.BIALIK
  },
  {
    id: 'bi_6',
    word: 'לָטוּס',
    definition: 'הפועל',
    translation: 'To fly',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעַל',
    author: Author.BIALIK
  },
  {
    id: 'bi_7',
    word: 'מַטּוֹסִי',
    definition: 'הקשור למטוס',
    translation: 'Aerial/Aircraft-related',
    status: WordStatus.ACCEPTED,
    weight: 'שם תואר',
    author: Author.BIALIK
  },
  {
    id: 'bi_8',
    word: 'מוֹנִית',
    definition: 'רכב שכור עם מונה',
    translation: 'Taxi',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -ִית',
    author: Author.BIALIK
  },
  {
    id: 'bi_9',
    word: 'מַשָּׂאִית',
    definition: 'רכב להובלת משא',
    translation: 'Truck',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -ִית',
    author: Author.BIALIK
  },
  {
    id: 'bi_10',
    word: 'אוֹפַנּוֹעַ',
    definition: 'אופניים ממונעים',
    translation: 'Motorcycle',
    status: WordStatus.ACCEPTED,
    weight: 'הלחם',
    author: Author.BIALIK
  },
  {
    id: 'bi_11',
    word: 'סַוָּר',
    definition: 'פועל נמל',
    translation: 'Stevedore',
    status: WordStatus.ACCEPTED,
    weight: 'קַטָּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_12',
    word: 'מְכָלִית',
    definition: 'רכב להובלת נוזלים',
    translation: 'Tanker',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -ִית',
    author: Author.BIALIK
  },
  {
    id: 'bi_13',
    word: 'שַׁלְדָּג',
    definition: 'ציפור',
    translation: 'Kingfisher',
    status: WordStatus.ACCEPTED,
    weight: 'הלחם',
    author: Author.BIALIK
  },
  {
    id: 'bi_14',
    word: 'גַּחֲלִילִית',
    definition: 'חרק מאיר',
    translation: 'Firefly',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -ִית',
    author: Author.BIALIK
  },
  {
    id: 'bi_15',
    word: 'צְרָצַר',
    definition: 'חרק משמיע צליל',
    translation: 'Cricket',
    status: WordStatus.ACCEPTED,
    weight: 'מרובע',
    etymology: 'אונומטופאה (חיקוי צליל)',
    author: Author.BIALIK
  },
  {
    id: 'bi_16',
    word: 'סנָאִי',
    definition: 'מכרסם',
    translation: 'Squirrel',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_17',
    word: 'זְנַבְנָב',
    definition: 'זנב קטן',
    translation: 'Little tail',
    status: WordStatus.ACCEPTED,
    weight: 'הקטנה',
    author: Author.BIALIK
  },
  {
    id: 'bi_18',
    word: 'אַרְנְבוֹן',
    definition: 'ארנב קטן',
    translation: 'Bunny',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -וֹן',
    author: Author.BIALIK
  },
  {
    id: 'bi_19',
    word: 'כְּלַבְלַב',
    definition: 'גור כלבים',
    translation: 'Puppy',
    status: WordStatus.ACCEPTED,
    weight: 'הקטנה',
    author: Author.BIALIK
  },
  {
    id: 'bi_20',
    word: 'חֲתוּלְתּוּל',
    definition: 'גור חתולים',
    translation: 'Kitten',
    status: WordStatus.ACCEPTED,
    weight: 'הקטנה',
    author: Author.BIALIK
  },
  {
    id: 'bi_21',
    word: 'עַגְבָנִית',
    definition: 'עגבנייה (הצורה שביאליק העדיף)',
    translation: 'Tomato',
    status: WordStatus.MODIFIED,
    weight: 'סיומת -ִית',
    notes: 'ביאליק העדיף סיומת -ית, אך התקבלה סיומת -יה.',
    author: Author.BIALIK
  },
  {
    id: 'bi_22',
    word: 'חַמָּנִית',
    definition: 'פרח השמש',
    translation: 'Sunflower',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -ִית',
    author: Author.BIALIK
  },
  {
    id: 'bi_23',
    word: 'כְּרוּבִית',
    definition: 'ירק',
    translation: 'Cauliflower',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -ִית',
    author: Author.BIALIK
  },
  {
    id: 'bi_24',
    word: 'מְלָפְפוֹן',
    definition: 'מלון (במקור)',
    translation: 'Cucumber',
    status: WordStatus.MODIFIED,
    weight: 'שאילה מיוונית',
    notes: 'ביאליק ניסה לשמר את המשמעות המקורית (מלון), אך הציבור אימץ למלפפון ירוק.',
    author: Author.BIALIK
  },
  {
    id: 'bi_25',
    word: 'תִּירָס',
    definition: 'דגן אמריקאי',
    translation: 'Corn',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_26',
    word: 'אֶשְׁכּוֹלִית',
    definition: 'פרי הדר',
    translation: 'Grapefruit',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -ִית',
    etymology: 'תרגום שאילה מ-Grapefruit.',
    author: Author.BIALIK
  },
  {
    id: 'bi_27',
    word: 'צְנוֹן',
    definition: 'ירק שורש',
    translation: 'Radish',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_28',
    word: 'סֶלֶק',
    definition: 'ירק שורש אדום',
    translation: 'Beet',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BIALIK
  },
  {
    id: 'bi_29',
    word: 'בּוּלְבּוּס',
    definition: 'תפוח אדמה',
    translation: 'Potato',
    status: WordStatus.MODIFIED,
    weight: Weight.MISHKAL_AHER,
    notes: 'לא נקלט בשפה המדוברת (תפוח אדמה ניצח).',
    author: Author.BIALIK
  },
  {
    id: 'bi_30',
    word: 'פִּטְרִיָּה',
    definition: 'צמח חסר כלורופיל',
    translation: 'Mushroom',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_31',
    word: 'מַצְלֵמָה',
    definition: 'מכשיר צילום',
    translation: 'Camera',
    status: WordStatus.ACCEPTED,
    weight: 'מַפְעֵלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_32',
    word: 'מְקָרֵר',
    definition: 'מכשיר קירור',
    translation: 'Refrigerator',
    status: WordStatus.ACCEPTED,
    weight: 'בינוני',
    author: Author.BIALIK
  },
  {
    id: 'bi_33',
    word: 'מַקְרֵן',
    definition: 'מכשיר הקרנה',
    translation: 'Projector',
    status: WordStatus.ACCEPTED,
    weight: 'מַפְעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_34',
    word: 'מְעַרְבֵּל',
    definition: 'מכשיר ערבוב',
    translation: 'Mixer',
    status: WordStatus.ACCEPTED,
    weight: 'בינוני',
    author: Author.BIALIK
  },
  {
    id: 'bi_35',
    word: 'שַׁפָּר',
    definition: 'מעצב דקורטור',
    translation: 'Decorator',
    status: WordStatus.REJECTED,
    weight: 'קַטָּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_36',
    word: 'אוֹפַנַּיִם',
    definition: 'כלי רכב דו-גלגלי',
    translation: 'Bicycle',
    status: WordStatus.ACCEPTED,
    weight: 'זוגי',
    notes: 'ביאליק נתן לגיטימציה ספרותית למילה.',
    author: Author.BIALIK
  },
  {
    id: 'bi_37',
    word: 'וִילוֹן',
    definition: 'מסך בד',
    translation: 'Curtain',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -וֹן',
    author: Author.BIALIK
  },
  {
    id: 'bi_38',
    word: 'עֲשָׁשִׁית',
    definition: 'מנורת נפט',
    translation: 'Kerosene lamp',
    status: WordStatus.ACCEPTED,
    weight: Weight.IT,
    author: Author.BIALIK
  },
  {
    id: 'bi_39',
    word: 'פְּתִילָה',
    definition: 'חוט בערה',
    translation: 'Wick',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_40',
    word: 'בֶּרֶז',
    definition: 'מתקן למים',
    translation: 'Faucet',
    status: WordStatus.ACCEPTED,
    weight: 'סגוליים',
    author: Author.BIALIK
  },
  {
    id: 'bi_41',
    word: 'גַּפְרוּר',
    definition: 'מקל הצתה',
    translation: 'Match',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_42',
    word: 'מַעֲטָפָה',
    definition: 'כיסוי למכתב',
    translation: 'Envelope',
    status: WordStatus.ACCEPTED,
    weight: 'מַפְעָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_43',
    word: 'חוֹתֶמֶת',
    definition: 'כלי להטבעת חותם',
    translation: 'Stamp/Seal',
    status: WordStatus.ACCEPTED,
    weight: 'פוֹעֶלֶת',
    author: Author.BIALIK
  },
  {
    id: 'bi_44',
    word: 'מְגֵרָה',
    definition: 'תא נשלף',
    translation: 'Drawer',
    status: WordStatus.ACCEPTED,
    weight: 'מְפְעֵלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_45',
    word: 'רָהִיט',
    definition: 'פריט לבית',
    translation: 'Furniture',
    status: WordStatus.ACCEPTED,
    weight: 'קָטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_46',
    word: 'יְבוּא',
    definition: 'הבאת סחורה מחו"ל',
    translation: 'Import',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_47',
    word: 'יְצוּא',
    definition: 'שליחת סחורה לחו"ל',
    translation: 'Export',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_48',
    word: 'מַעֲנָק',
    definition: 'מתנה כספית',
    translation: 'Grant',
    status: WordStatus.ACCEPTED,
    weight: 'מַפְעָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_49',
    word: 'מְנָיָה',
    definition: 'חלק בחברה',
    translation: 'Stock/Share',
    status: WordStatus.ACCEPTED,
    weight: 'פְּעָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_50',
    word: 'שׁוּתָפוּת',
    definition: 'קשר עסקי',
    translation: 'Partnership',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_51',
    word: 'חוֹזֶה',
    definition: 'הסכם משפטי',
    translation: 'Contract',
    status: WordStatus.ACCEPTED,
    weight: 'פוֹעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_52',
    word: 'בֵּית מִסְחָר',
    definition: 'חנות גדולה',
    translation: 'Trading house',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_53',
    word: 'צַרְכָנִיָּה',
    definition: 'חנות קואופרטיבית',
    translation: 'Grocery/Co-op',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_54',
    word: 'פִּקְחִי',
    definition: 'ערני, מפוכח',
    translation: 'Clever/Alert',
    status: WordStatus.ACCEPTED,
    weight: 'שם תואר',
    author: Author.BIALIK
  },
  {
    id: 'bi_55',
    word: 'נִלְעָג',
    definition: 'ראוי ללעג',
    translation: 'Ridiculous',
    status: WordStatus.ACCEPTED,
    weight: 'נִפְעָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_56',
    word: 'דַּאֲגָן',
    definition: 'מרבה לדאוג',
    translation: 'Worrier',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלָן',
    author: Author.BIALIK
  },
  {
    id: 'bi_57',
    word: 'רַגְזָן',
    definition: 'נוטה לכעוס',
    translation: 'Grumpy',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלָן',
    author: Author.BIALIK
  },
  {
    id: 'bi_58',
    word: 'בַּיְשָׁן',
    definition: 'בעל בושה',
    translation: 'Shy',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלָן',
    author: Author.BIALIK
  },
  {
    id: 'bi_59',
    word: 'קַפְּדָן',
    definition: 'מדקדק בפרטים',
    translation: 'Strict/Pedantic',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלָן',
    author: Author.BIALIK
  },
  {
    id: 'bi_60',
    word: 'סוֹעֵר',
    definition: 'חסר מנוחה (נפשית)',
    translation: 'Stormy/Agitated',
    status: WordStatus.ACCEPTED,
    weight: 'פוֹעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_61',
    word: 'תְּהוֹמִי',
    definition: 'עמוק מאוד',
    translation: 'Abysmal',
    status: WordStatus.ACCEPTED,
    weight: 'שם תואר',
    author: Author.BIALIK
  },
  {
    id: 'bi_62',
    word: 'עֲרִירִי',
    definition: 'בודד, ללא צאצאים',
    translation: 'Childless/Solitary',
    status: WordStatus.ACCEPTED,
    weight: 'שם תואר',
    author: Author.BIALIK
  },
  {
    id: 'bi_63',
    word: 'בּוֹדֵד',
    definition: 'לבד',
    translation: 'Lonely',
    status: WordStatus.ACCEPTED,
    weight: 'פוֹעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_64',
    word: 'עֶרְגָּה',
    definition: 'געגוע עז',
    translation: 'Yearning',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_65',
    word: 'תְּגוּבָה',
    definition: 'מענה, ריאקציה',
    translation: 'Reaction',
    status: WordStatus.ACCEPTED,
    weight: 'תְּקוּמָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_66',
    word: 'הִתְחַבְּטוּת',
    definition: 'מאבק פנימי',
    translation: 'Dilemma',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_67',
    word: 'זַעֲזוּעַ',
    definition: 'טלטלה נפשית',
    translation: 'Shock',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_68',
    word: 'הִתְרַגְּשׁוּת',
    definition: 'סערת רגשות',
    translation: 'Excitement',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_69',
    word: 'כִּסּוּפִים',
    definition: 'געגועים',
    translation: 'Yearning',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_70',
    word: 'סְלִידָה',
    definition: 'דחייה, גועל',
    translation: 'Revulsion',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_71',
    word: 'צְרָחָה',
    definition: 'צעקה חזקה',
    translation: 'Scream',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_72',
    word: 'אֲנָחָה',
    definition: 'גניחה מכאב/צער',
    translation: 'Groan/Sigh',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_73',
    word: 'נְבִיחָה',
    definition: 'קול הכלב',
    translation: 'Bark',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_74',
    word: 'שְׁאָגָה',
    definition: 'קול האריה',
    translation: 'Roar',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_75',
    word: 'צְנָפָה',
    definition: 'קול הסוס',
    translation: 'Neigh',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_76',
    word: 'יְלָלָה',
    definition: 'קול בכי/תן',
    translation: 'Howl',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_77',
    word: 'הֶמְיָה',
    definition: 'קול המהום',
    translation: 'Humming',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_78',
    word: 'רִשְׁרוּשׁ',
    definition: 'רעש חיכוך קל',
    translation: 'Rustle',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_79',
    word: 'צִחְקֵק',
    definition: 'צחק קלות',
    translation: 'Giggle',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_80',
    word: 'גִּרְגּוּר',
    definition: 'קול גרוני',
    translation: 'Purr/Gargle',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_81',
    word: 'צִפְצוּף',
    definition: 'שריקה/קול ציפור',
    translation: 'Chirp',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_82',
    word: 'טִרְטוּר',
    definition: 'רעש מכני/הטרדה',
    translation: 'Rattle',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_83',
    word: 'בְּעָטָה',
    definition: 'מכת רגל (ספרותי)',
    translation: 'Kick',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_84',
    word: 'דְּהָרָה',
    definition: 'ריצת סוס',
    translation: 'Gallop',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_85',
    word: 'שְׁעָטָה',
    definition: 'רקיעת פרסות',
    translation: 'Stomping',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_86',
    word: 'קְפִיצָה',
    definition: 'ניתור',
    translation: 'Jump',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_87',
    word: 'נִדְנוּד',
    definition: 'תנועה מצד לצד',
    translation: 'Swinging',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_88',
    word: 'טִלְטוּל',
    definition: 'ניעור',
    translation: 'Shaking',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_89',
    word: 'אַבִּיר',
    definition: 'לוחם רכוב',
    translation: 'Knight',
    status: WordStatus.ACCEPTED,
    weight: 'קַטִּיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_90',
    word: 'טַחֲנַת רוּחַ',
    definition: 'מתקן טחינה',
    translation: 'Windmill',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_91',
    word: 'עֲנָק',
    definition: 'יצור אגדי עצום',
    translation: 'Giant',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_92',
    word: 'קַסְדָּה',
    definition: 'כובע מגן',
    translation: 'Helmet',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_93',
    word: 'נוֹשֵׂא כֵּלִים',
    definition: 'עוזר לאביר',
    translation: 'Squire',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_94',
    word: 'גְּבִירָה',
    definition: 'אישה רמת מעלה',
    translation: 'Lady',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_95',
    word: 'הַרְפַּתְקָה',
    definition: 'חוויה מסעירה',
    translation: 'Adventure',
    status: WordStatus.ACCEPTED,
    weight: 'ארמית',
    author: Author.BIALIK
  },
  {
    id: 'bi_96',
    word: 'טִירָה',
    definition: 'מבנה מבוצר',
    translation: 'Castle',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_97',
    word: 'חָצֵר',
    definition: 'חצר המלוכה',
    translation: 'Royal Court',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_98',
    word: 'אֲצֻלָּה',
    definition: 'מעמד גבוה',
    translation: 'Nobility',
    status: WordStatus.ACCEPTED,
    weight: 'קְטֻלָּה',
    author: Author.BIALIK
  },
  {
    id: 'bi_99',
    word: 'רוֹמַח',
    definition: 'כלי נשק',
    translation: 'Lance',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_100',
    word: 'מָגֵן',
    definition: 'כלי הגנה',
    translation: 'Shield',
    status: WordStatus.ACCEPTED,
    weight: 'מַפְעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_101',
    word: 'אָרוֹן הַסְּפָרִים',
    definition: 'קורפוס תרבותי',
    translation: 'Jewish Bookshelf',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_102',
    word: 'גְּדוֹלוֹת וּנְצוּרוֹת',
    definition: 'הישגים כבירים',
    translation: 'Great things',
    status: WordStatus.ACCEPTED,
    weight: 'ניב',
    author: Author.BIALIK
  },
  {
    id: 'bi_103',
    word: 'קֵן לַצִּפּוֹר',
    definition: 'סמל לבית',
    translation: 'Bird\'s nest',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_104',
    word: 'מַרְאֵה עֵינַיִם',
    definition: 'עדות ישירה',
    translation: 'Sight',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_105',
    word: 'הַצָּצָה וּפְגִיעָה',
    definition: 'סיכון רוחני',
    translation: 'Heresy risk',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_106',
    word: 'תּוֹהוּ וָבוֹהוּ',
    definition: 'אי-סדר מוחלט',
    translation: 'Chaos',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_107',
    word: 'מַלְאֲכַת מַחֲשֶׁבֶת',
    definition: 'אומנות מוקפדת',
    translation: 'Masterpiece',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_108',
    word: 'מִשְׁנֶה תּוֹקֶף',
    definition: 'חיזוק משמעותי',
    translation: 'Reinforcement',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_109',
    word: 'בְּרִיחָה שֶׁל שַׁחֲרִית',
    definition: 'החמצה',
    translation: 'Missed opportunity',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_110',
    word: 'תַּרְבּוּת',
    definition: 'יצירה אנושית',
    translation: 'Culture',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלוּת',
    author: Author.BIALIK
  },
  {
    id: 'bi_111',
    word: 'כִּנּוּס',
    definition: 'איסוף נכסי רוח',
    translation: 'Ingathering',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_112',
    word: 'גְּנִיזָה',
    definition: 'ארכיון',
    translation: 'Genizah/Archive',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_113',
    word: 'תְּחִיָּה',
    definition: 'רנסנס לאומי',
    translation: 'Revival',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_114',
    word: 'עֲבוֹדָה',
    definition: 'עמל כפיים (ערך)',
    translation: 'Labor',
    status: WordStatus.ACCEPTED,
    weight: 'קְטֻלָּה',
    author: Author.BIALIK
  },
  {
    id: 'bi_115',
    word: 'יְצִירָה',
    definition: 'פעולה אומנותית',
    translation: 'Creativity',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_116',
    word: 'אֲוִירִירִי',
    definition: 'קל, עדין',
    translation: 'Airy',
    status: WordStatus.ACCEPTED,
    weight: 'שם תואר',
    author: Author.BIALIK
  },
  {
    id: 'bi_117',
    word: 'תְּאוּנָה',
    definition: 'תקרית שלילית',
    translation: 'Accident',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_118',
    word: 'סֶפַח',
    definition: 'תוספת מסמך',
    translation: 'Appendix',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_119',
    word: 'קַדַּחְתָּנִי',
    definition: 'נמרץ מאוד',
    translation: 'Hectic',
    status: WordStatus.ACCEPTED,
    weight: Weight.IT,
    author: Author.BIALIK
  },
  {
    id: 'bi_120',
    word: 'שְׁנוֹרֵר',
    definition: 'קבצן (סלנג)',
    translation: 'Moacher',
    status: WordStatus.ACCEPTED,
    weight: 'שאילה מיידיש',
    author: Author.BIALIK
  },
  {
    id: 'bi_121',
    word: 'הִתְבַּלְּשְׁנוּת',
    definition: 'עיסוק טרחני בשפה',
    translation: 'Amateur linguistics',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_122',
    word: 'רַשְׁמָן',
    definition: 'כתב שטחי',
    translation: 'Reporter',
    status: WordStatus.REJECTED,
    weight: 'קַטְלָן',
    author: Author.BIALIK
  },
  {
    id: 'bi_123',
    word: 'נָאֶמֶת',
    definition: 'מחלת נאומים',
    translation: 'Speechifying',
    status: WordStatus.REJECTED,
    weight: 'פַּעֶלֶת',
    author: Author.BIALIK
  },
  {
    id: 'bi_124',
    word: 'מַחְבּוֹא',
    definition: 'מקום מסתור',
    translation: 'Hiding place',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_125',
    word: 'נָדְנֵדָה',
    definition: 'מתקן שעשועים',
    translation: 'Swing',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלֵלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_126',
    word: 'יַלְקוּט',
    definition: 'תיק תלמיד',
    translation: 'Schoolbag',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_127',
    word: 'גַּנֶּנֶת',
    definition: 'מחנכת',
    translation: 'Kindergarten teacher',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעֶלֶת',
    author: Author.BIALIK
  },
  {
    id: 'bi_128',
    word: 'פָּעוֹטוֹן',
    definition: 'מוסד לפעוטות',
    translation: 'Nursery',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -וֹן',
    author: Author.BIALIK
  },
  {
    id: 'bi_129',
    word: 'מַסָּה',
    definition: 'חיבור עיוני',
    translation: 'Essay',
    status: WordStatus.ACCEPTED,
    weight: 'קַטָּה',
    author: Author.BIALIK
  },
  {
    id: 'bi_130',
    word: 'צַהֲלוּלִים',
    definition: 'קול שמחה',
    translation: 'Ululation',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_131',
    word: 'חַסָּה',
    definition: 'ירק עלים',
    translation: 'Lettuce',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_132',
    word: 'דְּלַעַת',
    definition: 'ירק',
    translation: 'Pumpkin',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעַלַת',
    author: Author.BIALIK
  },
  {
    id: 'bi_133',
    word: 'קִשּׁוּא',
    definition: 'ירק',
    translation: 'Zucchini',
    status: WordStatus.ACCEPTED,
    weight: 'קִטּוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_134',
    word: 'אֲפוּנָה',
    definition: 'קטניה',
    translation: 'Pea',
    status: WordStatus.ACCEPTED,
    weight: 'פְּעֻלָּה',
    author: Author.BIALIK
  },
  {
    id: 'bi_135',
    word: 'מְלוּנָה',
    definition: 'בית הכלב',
    translation: 'Doghouse',
    status: WordStatus.ACCEPTED,
    weight: 'מְפֻעָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_136',
    word: 'רֶפֶת',
    definition: 'מבנה לפרות',
    translation: 'Cowshed',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_137',
    word: 'לוּל',
    definition: 'מבנה לתרנגולות',
    translation: 'Coop',
    status: WordStatus.ACCEPTED,
    weight: Weight.MISHKAL_AHER,
    author: Author.BIALIK
  },
  {
    id: 'bi_138',
    word: 'שֹׁבָךְ',
    definition: 'בית יונים',
    translation: 'Dovecote',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_139',
    word: 'כוּוֶרֶת',
    definition: 'בית דבורים',
    translation: 'Beehive',
    status: WordStatus.ACCEPTED,
    weight: 'פֻּעֶלֶת',
    author: Author.BIALIK
  },
  {
    id: 'bi_140',
    word: 'מְשׁוֹשָׁה',
    definition: 'איבר חישה',
    translation: 'Antenna',
    status: WordStatus.ACCEPTED,
    weight: 'מְפֻעָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_141',
    word: 'זַחַל',
    definition: 'שלב בגלגול החרק',
    translation: 'Caterpillar',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_142',
    word: 'גֹּלֶם',
    definition: 'שלב בגלגול',
    translation: 'Pupa',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_143',
    word: 'פַּרְפַּר',
    definition: 'חרק',
    translation: 'Butterfly',
    status: WordStatus.ACCEPTED,
    weight: 'מרובע',
    author: Author.BIALIK
  },
  {
    id: 'bi_144',
    word: 'חֹרְשָׁה',
    definition: 'יער קטן',
    translation: 'Grove',
    status: WordStatus.ACCEPTED,
    weight: 'קָטְלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_145',
    word: 'עָצִיץ',
    definition: 'כלי לצמח',
    translation: 'Flowerpot',
    status: WordStatus.ACCEPTED,
    weight: 'קָטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_146',
    word: 'דַּחְלִיל',
    definition: 'בובה להפחדת ציפורים',
    translation: 'Scarecrow',
    status: WordStatus.ACCEPTED,
    weight: 'תַּקְטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_147',
    word: 'שַׁלֶּכֶת',
    definition: 'נשירת עלים',
    translation: 'Fall/Foliage',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעֶלֶת',
    author: Author.BIALIK
  },
  {
    id: 'bi_148',
    word: 'גִּבְעוֹל',
    definition: 'קנה הצמח',
    translation: 'Stem',
    status: WordStatus.ACCEPTED,
    weight: 'קִטְלוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_149',
    word: 'צַמֶּרֶת',
    definition: 'ראש העץ',
    translation: 'Treetop',
    status: WordStatus.ACCEPTED,
    weight: 'פַּעֶלֶת',
    author: Author.BIALIK
  },
  {
    id: 'bi_150',
    word: 'נִצָּן',
    definition: 'ראשית הפרח',
    translation: 'Bud',
    status: WordStatus.ACCEPTED,
    weight: 'קִטָּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_151',
    word: 'פַּרְדֵּס',
    definition: 'מטע הדרים',
    translation: 'Orchard',
    status: WordStatus.ACCEPTED,
    weight: 'מרובע',
    author: Author.BIALIK
  },
  {
    id: 'bi_152',
    word: 'בַּצִּיר',
    definition: 'קטיף ענבים',
    translation: 'Grape harvest',
    status: WordStatus.ACCEPTED,
    weight: 'קַטִּיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_153',
    word: 'נְטִיעָה',
    definition: 'שתילת עץ',
    translation: 'Planting',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_154',
    word: 'גּוֹזָל',
    definition: 'צאצא הציפור',
    translation: 'Fledgling',
    status: WordStatus.ACCEPTED,
    weight: 'קוֹטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_155',
    word: 'אֶפְרוֹחַ',
    definition: 'צאצא התרנגולת',
    translation: 'Chick',
    status: WordStatus.ACCEPTED,
    weight: 'אֶקְטוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_156',
    word: 'זָמִיר',
    definition: 'ציפור שיר',
    translation: 'Nightingale',
    status: WordStatus.ACCEPTED,
    weight: 'קָטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_157',
    word: 'טַוָּס',
    definition: 'עוף מהודר',
    translation: 'Peacock',
    status: WordStatus.ACCEPTED,
    weight: 'קַטָּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_158',
    word: 'בַּרְבּוּר',
    definition: 'עוף מים',
    translation: 'Swan',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_159',
    word: 'לְאַבְזֵר',
    definition: 'לצייד באביזרים',
    translation: 'Accessorize',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_160',
    word: 'לְתַמְלֵל',
    definition: 'להעביר לכתב',
    translation: 'Transcribe',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_161',
    word: 'לְתַסְרֵט',
    definition: 'לכתוב תסריט',
    translation: 'Script',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_162',
    word: 'לְשַׁחְזֵר',
    definition: 'להחזיר לקדמותו',
    translation: 'Reconstruct',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_163',
    word: 'לְאַלְתֵּר',
    definition: 'לעשות ללא הכנה',
    translation: 'Improvise',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_164',
    word: 'בֹּהַק',
    definition: 'אור חזק',
    translation: 'Glare',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_165',
    word: 'קְרִינָה',
    definition: 'פליטת אנרגיה',
    translation: 'Radiation',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_166',
    word: 'צְלִיל',
    definition: 'טון',
    translation: 'Sound',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_167',
    word: 'חִיּוּךְ',
    definition: 'הבעת פנים',
    translation: 'Smile',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_168',
    word: 'לְטִיפָה',
    definition: 'מגע רך',
    translation: 'Caress',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_169',
    word: 'נִיחוֹחַ',
    definition: 'ריח נעים',
    translation: 'Fragrance',
    status: WordStatus.ACCEPTED,
    weight: 'קִיטוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_170',
    word: 'מַגָּע',
    definition: 'קונטקט',
    translation: 'Contact',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_171',
    word: 'רֶגֶשׁ',
    definition: 'אמוציה',
    translation: 'Emotion',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_172',
    word: 'לַהַט',
    definition: 'התלהבות',
    translation: 'Passion',
    status: WordStatus.ACCEPTED,
    weight: 'קַטַל',
    author: Author.BIALIK
  },
  {
    id: 'bi_173',
    word: 'תְּשׁוּקָה',
    definition: 'חשק עז',
    translation: 'Desire',
    status: WordStatus.ACCEPTED,
    weight: 'תְּקוּמָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_174',
    word: 'מִקְרֶה',
    definition: 'אירוע',
    translation: 'Incident',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטֶה',
    author: Author.BIALIK
  },
  {
    id: 'bi_175',
    word: 'אַגָּדָה',
    definition: 'סיפור עם',
    translation: 'Legend',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_176',
    word: 'עָלוּם',
    definition: 'נסתר',
    translation: 'Hidden',
    status: WordStatus.ACCEPTED,
    weight: 'פָּעוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_177',
    word: 'בָּהִיר',
    definition: 'מואר, ברור',
    translation: 'Bright',
    status: WordStatus.ACCEPTED,
    weight: 'קָטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_178',
    word: 'זַכּוּת',
    definition: 'טוהר',
    translation: 'Purity',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_179',
    word: 'שְׁקִיפוּת',
    definition: 'תכונת השקוף',
    translation: 'Transparency',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_180',
    word: 'אֲטִימוּת',
    definition: 'חוסר שקיפות',
    translation: 'Opaqueness',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_181',
    word: 'מִשְׁעוֹל',
    definition: 'שביל צר',
    translation: 'Path',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_182',
    word: 'נָתִיב',
    definition: 'דרך',
    translation: 'Route',
    status: WordStatus.ACCEPTED,
    weight: 'קָטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_183',
    word: 'מְסִלָּה',
    definition: 'דרך סלולה',
    translation: 'Track',
    status: WordStatus.ACCEPTED,
    weight: 'מְקִטָּה',
    author: Author.BIALIK
  },
  {
    id: 'bi_184',
    word: 'גַּלְגַּל',
    definition: 'אופן',
    translation: 'Wheel',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלַל',
    author: Author.BIALIK
  },
  {
    id: 'bi_185',
    word: 'שַׁלְשֶׁלֶת',
    definition: 'שרשרת',
    translation: 'Chain',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלֶלֶת',
    author: Author.BIALIK
  },
  {
    id: 'bi_186',
    word: 'חוּלְיָה',
    definition: 'חלק משרשרת',
    translation: 'Link',
    status: WordStatus.ACCEPTED,
    weight: 'סיומת -יָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_187',
    word: 'נִתּוּק',
    definition: 'הפרדה',
    translation: 'Disconnection',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_188',
    word: 'קְרִיעָה',
    definition: 'שיסוע',
    translation: 'Tearing',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_189',
    word: 'זַעַם',
    definition: 'כעס רב',
    translation: 'Fury',
    status: WordStatus.ACCEPTED,
    weight: 'קַטַל',
    author: Author.BIALIK
  },
  {
    id: 'bi_190',
    word: 'נָקָם',
    definition: 'נקמה',
    translation: 'Vengeance',
    status: WordStatus.ACCEPTED,
    weight: 'קָטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_191',
    word: 'שִׁלּוּם',
    definition: 'תגמול',
    translation: 'Retribution',
    status: WordStatus.ACCEPTED,
    weight: 'פִּעוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_192',
    word: 'אַלְמָנוּת',
    definition: 'מצב האלמנה',
    translation: 'Widowhood',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_193',
    word: 'יַתְמוּת',
    definition: 'מצב היתום',
    translation: 'Orphanhood',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_194',
    word: 'גָּלוּת',
    definition: 'חיים מחוץ למולדת',
    translation: 'Exile',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_195',
    word: 'גְּאֻלָּה',
    definition: 'שחרור, פדייה',
    translation: 'Redemption',
    status: WordStatus.ACCEPTED,
    weight: 'קְטֻלָּה',
    author: Author.BIALIK
  },
  {
    id: 'bi_196',
    word: 'מִזְמוֹר',
    definition: 'שיר',
    translation: 'Psalm',
    status: WordStatus.ACCEPTED,
    weight: 'מִקְטוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_197',
    word: 'פִּזְמוֹן',
    definition: 'חלק חוזר בשיר',
    translation: 'Chorus',
    status: WordStatus.ACCEPTED,
    weight: 'קִטְלוֹן',
    author: Author.BIALIK
  },
  {
    id: 'bi_198',
    word: 'נְעִימָה',
    definition: 'מלודיה',
    translation: 'Melody',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_199',
    word: 'בַּת-צְחוֹק',
    definition: 'חיוך קל',
    translation: 'Faint smile',
    status: WordStatus.ACCEPTED,
    weight: 'צירוף',
    author: Author.BIALIK
  },
  {
    id: 'bi_200',
    word: 'דִּמְעָה',
    definition: 'נוזל העין',
    translation: 'Tear',
    status: WordStatus.ACCEPTED,
    weight: 'קִטְלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_201',
    word: 'שָׁוְא',
    definition: 'הבל',
    translation: 'Vanity',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְל',
    author: Author.BIALIK
  },
  {
    id: 'bi_202',
    word: 'תֹּהוּ',
    definition: 'כאוס',
    translation: 'Chaos',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_203',
    word: 'בֹּהוּ',
    definition: 'ריק',
    translation: 'Void',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_204',
    word: 'לֵבָב',
    definition: 'לב (ספרותי)',
    translation: 'Heart',
    status: WordStatus.ACCEPTED,
    weight: 'קֵטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_205',
    word: 'כָּנָף',
    definition: 'איבר תעופה',
    translation: 'Wing',
    status: WordStatus.ACCEPTED,
    weight: 'קָטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_206',
    word: 'קֵן',
    definition: 'בית הציפור',
    translation: 'Nest',
    status: WordStatus.ACCEPTED,
    weight: 'קֵט',
    author: Author.BIALIK
  },
  {
    id: 'bi_207',
    word: 'בֵּיצָה',
    definition: 'ביצה',
    translation: 'Egg',
    status: WordStatus.ACCEPTED,
    weight: 'קֵטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_208',
    word: 'יוֹנָה',
    definition: 'עוף',
    translation: 'Dove',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_209',
    word: 'תּוֹר',
    definition: 'סוג יונה',
    translation: 'Turtledove',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_210',
    word: 'נֶשֶׁר',
    definition: 'עוף דורס',
    translation: 'Eagle',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_211',
    word: 'עוֹרֵב',
    definition: 'ציפור שחורה',
    translation: 'Raven',
    status: WordStatus.ACCEPTED,
    weight: 'קוֹטֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_212',
    word: 'חָלִיל',
    definition: 'כלי נשיפה',
    translation: 'Flute',
    status: WordStatus.ACCEPTED,
    weight: 'קָטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_213',
    word: 'יַעַר',
    definition: 'חורש',
    translation: 'Forest',
    status: WordStatus.ACCEPTED,
    weight: 'קַטַל',
    author: Author.BIALIK
  },
  {
    id: 'bi_214',
    word: 'אִילָן',
    definition: 'עץ',
    translation: 'Tree',
    status: WordStatus.ACCEPTED,
    weight: 'קִטָּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_215',
    word: 'עָנָף',
    definition: 'זרוע העץ',
    translation: 'Branch',
    status: WordStatus.ACCEPTED,
    weight: 'קָטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_216',
    word: 'בַּד',
    definition: 'ענף עבה',
    translation: 'Bough',
    status: WordStatus.ACCEPTED,
    weight: 'קַט',
    author: Author.BIALIK
  },
  {
    id: 'bi_217',
    word: 'עָלֶה',
    definition: 'חלק הצמח',
    translation: 'Leaf',
    status: WordStatus.ACCEPTED,
    weight: 'קָטֶה',
    author: Author.BIALIK
  },
  {
    id: 'bi_218',
    word: 'פֶּרַח',
    definition: 'פריחה',
    translation: 'Flower',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_219',
    word: 'צִיץ',
    definition: 'ניצן',
    translation: 'Bud',
    status: WordStatus.ACCEPTED,
    weight: 'קִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_220',
    word: 'פְּרִי',
    definition: 'יבול',
    translation: 'Fruit',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִי',
    author: Author.BIALIK
  },
  {
    id: 'bi_221',
    word: 'גַּרְעִין',
    definition: 'זרע',
    translation: 'Seed',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_222',
    word: 'קְלִפָּה',
    definition: 'מעטפת',
    translation: 'Peel',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_223',
    word: 'שֹׁרֶשׁ',
    definition: 'בסיס הצמח',
    translation: 'Root',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_224',
    word: 'גֶּזַע',
    definition: 'גוף העץ',
    translation: 'Trunk',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_225',
    word: 'בְּרוֹשׁ',
    definition: 'עץ מחטני',
    translation: 'Cypress',
    status: WordStatus.ACCEPTED,
    weight: 'קְטוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_226',
    word: 'אֹרֶן',
    definition: 'עץ מחטני',
    translation: 'Pine',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_227',
    word: 'אֵלוֹן',
    definition: 'עץ חסון',
    translation: 'Oak',
    status: WordStatus.ACCEPTED,
    weight: 'קֵטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_228',
    word: 'תָּמָר',
    definition: 'דקל',
    translation: 'Palm',
    status: WordStatus.ACCEPTED,
    weight: 'קָטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_229',
    word: 'זַיִת',
    definition: 'עץ שמן',
    translation: 'Olive',
    status: WordStatus.ACCEPTED,
    weight: 'קַיִט',
    author: Author.BIALIK
  },
  {
    id: 'bi_230',
    word: 'גֶּפֶן',
    definition: 'מטפס',
    translation: 'Vine',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_231',
    word: 'תְּאֵנָה',
    definition: 'עץ פרי',
    translation: 'Fig',
    status: WordStatus.ACCEPTED,
    weight: 'קְטֵלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_232',
    word: 'רִמּוֹן',
    definition: 'עץ פרי',
    translation: 'Pomegranate',
    status: WordStatus.ACCEPTED,
    weight: 'קִטּוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_233',
    word: 'שָׁקֵד',
    definition: 'עץ אגוזים',
    translation: 'Almond',
    status: WordStatus.ACCEPTED,
    weight: 'קָטֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_234',
    word: 'תַּפּוּחַ',
    definition: 'פרי',
    translation: 'Apple',
    status: WordStatus.ACCEPTED,
    weight: 'קַטּוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_235',
    word: 'אֱגוֹז',
    definition: 'פרי קשה',
    translation: 'Nut',
    status: WordStatus.ACCEPTED,
    weight: 'אֶקְטוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_236',
    word: 'גַּן',
    definition: 'מקום צמחים',
    translation: 'Garden',
    status: WordStatus.ACCEPTED,
    weight: 'קַל',
    author: Author.BIALIK
  },
  {
    id: 'bi_237',
    word: 'שָׂדֶה',
    definition: 'שטח חקלאי',
    translation: 'Field',
    status: WordStatus.ACCEPTED,
    weight: 'קָטֶה',
    author: Author.BIALIK
  },
  {
    id: 'bi_238',
    word: 'נִיר',
    definition: 'שדה חרוש',
    translation: 'Plowed field',
    status: WordStatus.ACCEPTED,
    weight: 'קִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_239',
    word: 'תֶּלֶם',
    definition: 'חריץ במרשה',
    translation: 'Furrow',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_240',
    word: 'מַחְרֵשָׁה',
    definition: 'כלי חרישה',
    translation: 'Plow',
    status: WordStatus.ACCEPTED,
    weight: 'מַפְעֵלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_241',
    word: 'מַגָּל',
    definition: 'כלי קציר',
    translation: 'Sickle',
    status: WordStatus.ACCEPTED,
    weight: 'מַקְטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_242',
    word: 'חֶרְמֵשׁ',
    definition: 'כלי קציר',
    translation: 'Scythe',
    status: WordStatus.ACCEPTED,
    weight: 'קִטְלֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_243',
    word: 'אֲלֻמָּה',
    definition: 'אגודת שיבולים',
    translation: 'Sheaf',
    status: WordStatus.ACCEPTED,
    weight: 'אֲקֻלָּה',
    author: Author.BIALIK
  },
  {
    id: 'bi_244',
    word: 'גֹּרֶן',
    definition: 'מקום הדישה',
    translation: 'Threshing floor',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_245',
    word: 'יֶקֶב',
    definition: 'מפעל יין',
    translation: 'Winery',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_246',
    word: 'קָצִיר',
    definition: 'איסוף תבואה',
    translation: 'Harvest',
    status: WordStatus.ACCEPTED,
    weight: 'קָטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_247',
    word: 'אָסִיף',
    definition: 'איסוף יבול',
    translation: 'Gathering',
    status: WordStatus.ACCEPTED,
    weight: 'קָטִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_248',
    word: 'זְרִיעָה',
    definition: 'פיזור זרעים',
    translation: 'Sowing',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_249',
    word: 'שְׁתִילָה',
    definition: 'נטיעה',
    translation: 'Planting',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_250',
    word: 'הַשְׁקָיָה',
    definition: 'מתן מים',
    translation: 'Irrigation',
    status: WordStatus.ACCEPTED,
    weight: 'הַפְעָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_251',
    word: 'בְּאֵר',
    definition: 'מקור מים',
    translation: 'Well',
    status: WordStatus.ACCEPTED,
    weight: 'קְטֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_252',
    word: 'מַעְיָן',
    definition: 'נביעת מים',
    translation: 'Spring',
    status: WordStatus.ACCEPTED,
    weight: 'מַקְטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_253',
    word: 'נַחַל',
    definition: 'זרם מים',
    translation: 'Stream',
    status: WordStatus.ACCEPTED,
    weight: 'קַטַל',
    author: Author.BIALIK
  },
  {
    id: 'bi_254',
    word: 'נָהָר',
    definition: 'זרם מים גדול',
    translation: 'River',
    status: WordStatus.ACCEPTED,
    weight: 'קָטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_255',
    word: 'יָם',
    definition: 'גוף מים גדול',
    translation: 'Sea',
    status: WordStatus.ACCEPTED,
    weight: 'קָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_256',
    word: 'זֹהַר',
    definition: 'אור',
    translation: 'Radiance',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_257',
    word: 'נֹגַהּ',
    definition: 'אור',
    translation: 'Brightness',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_258',
    word: 'יִפְעָה',
    definition: 'יופי',
    translation: 'Splendor',
    status: WordStatus.ACCEPTED,
    weight: 'קִטְלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_259',
    word: 'הוֹד',
    definition: 'פאר',
    translation: 'Majesty',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_260',
    word: 'הָדָר',
    definition: 'פאר',
    translation: 'Glory',
    status: WordStatus.ACCEPTED,
    weight: 'קָטָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_261',
    word: 'הֵד',
    definition: 'קול חוזר',
    translation: 'Echo',
    status: WordStatus.ACCEPTED,
    weight: 'קֵל',
    author: Author.BIALIK
  },
  {
    id: 'bi_262',
    word: 'רַעַשׁ',
    definition: 'קול חזק',
    translation: 'Noise',
    status: WordStatus.ACCEPTED,
    weight: 'קַטַל',
    author: Author.BIALIK
  },
  {
    id: 'bi_263',
    word: 'שֶׁקֶט',
    definition: 'דממה',
    translation: 'Quiet',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_264',
    word: 'דְּמָמָה',
    definition: 'שקט מוחלט',
    translation: 'Silence',
    status: WordStatus.ACCEPTED,
    weight: 'קְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_265',
    word: 'סוֹד',
    definition: 'רז',
    translation: 'Secret',
    status: WordStatus.ACCEPTED,
    weight: 'קֹטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_266',
    word: 'רָז',
    definition: 'סוד',
    translation: 'Mystery',
    status: WordStatus.ACCEPTED,
    weight: 'קָל',
    author: Author.BIALIK
  },
  {
    id: 'bi_267',
    word: 'חִידָה',
    definition: 'תעלומה',
    translation: 'Riddle',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_268',
    word: 'פִּתְרוֹן',
    definition: 'מענה',
    translation: 'Solution',
    status: WordStatus.ACCEPTED,
    weight: 'קִטְלוֹן',
    author: Author.BIALIK
  },
  {
    id: 'bi_269',
    word: 'שְׁאֵלָה',
    definition: 'קושיה',
    translation: 'Question',
    status: WordStatus.ACCEPTED,
    weight: 'קְטֵלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_270',
    word: 'תְּשׁוּבָה',
    definition: 'מענה',
    translation: 'Answer',
    status: WordStatus.ACCEPTED,
    weight: 'תְּקוּמָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_271',
    word: 'מַחֲשָׁבָה',
    definition: 'הרהור',
    translation: 'Thought',
    status: WordStatus.ACCEPTED,
    weight: 'מַקְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_272',
    word: 'הִגָּיוֹן',
    definition: 'לוגיקה',
    translation: 'Logic',
    status: WordStatus.ACCEPTED,
    weight: 'קִטָּלוֹן',
    author: Author.BIALIK
  },
  {
    id: 'bi_273',
    word: 'רַעְיוֹן',
    definition: 'אידיאה',
    translation: 'Idea',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלוֹן',
    author: Author.BIALIK
  },
  {
    id: 'bi_274',
    word: 'דֵּעָה',
    definition: 'השקפה',
    translation: 'Opinion',
    status: WordStatus.ACCEPTED,
    weight: 'קֵטָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_275',
    word: 'אֱמוּנָה',
    definition: 'ביטחון',
    translation: 'Belief',
    status: WordStatus.ACCEPTED,
    weight: 'קְטֻלָּה',
    author: Author.BIALIK
  },
  {
    id: 'bi_276',
    word: 'תִּקְוָה',
    definition: 'ציפייה',
    translation: 'Hope',
    status: WordStatus.ACCEPTED,
    weight: 'תִּקְטָלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_277',
    word: 'יֵאוּשׁ',
    definition: 'חוסר תקווה',
    translation: 'Despair',
    status: WordStatus.ACCEPTED,
    weight: 'קִטּוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_278',
    word: 'שִׂמְחָה',
    definition: 'אושר',
    translation: 'Joy',
    status: WordStatus.ACCEPTED,
    weight: 'קִטְלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_279',
    word: 'שָׂשׂוֹן',
    definition: 'שמחה',
    translation: 'Gladness',
    status: WordStatus.ACCEPTED,
    weight: 'קָטוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_280',
    word: 'גִּיל',
    definition: 'שמחה',
    translation: 'Rejoicing',
    status: WordStatus.ACCEPTED,
    weight: 'קִיל',
    author: Author.BIALIK
  },
  {
    id: 'bi_281',
    word: 'רִנָּה',
    definition: 'שירה',
    translation: 'Singing',
    status: WordStatus.ACCEPTED,
    weight: 'קִטָּלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_282',
    word: 'צָהֳלָה',
    definition: 'שמחה קולנית',
    translation: 'Jubilation',
    status: WordStatus.ACCEPTED,
    weight: 'קָטְלָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_283',
    word: 'עֶצֶב',
    definition: 'יגון',
    translation: 'Sadness',
    status: WordStatus.ACCEPTED,
    weight: 'קֶטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_284',
    word: 'יָגוֹן',
    definition: 'צער רב',
    translation: 'Grief',
    status: WordStatus.ACCEPTED,
    weight: 'קָטוֹן',
    author: Author.BIALIK
  },
  {
    id: 'bi_285',
    word: 'אֵבֶל',
    definition: 'צער על מת',
    translation: 'Mourning',
    status: WordStatus.ACCEPTED,
    weight: 'קֵטֶל',
    author: Author.BIALIK
  },
  {
    id: 'bi_286',
    word: 'בְּכִי',
    definition: 'דמעות',
    translation: 'Crying',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִי',
    author: Author.BIALIK
  },
  {
    id: 'bi_287',
    word: 'צְחוֹק',
    definition: 'שחוק',
    translation: 'Laughter',
    status: WordStatus.ACCEPTED,
    weight: 'קְטוֹל',
    author: Author.BIALIK
  },
  {
    id: 'bi_288',
    word: 'נְשִׁיקָה',
    definition: 'מגע שפתיים',
    translation: 'Kiss',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_289',
    word: 'חִבּוּק',
    definition: 'לפיתה',
    translation: 'Hug',
    status: WordStatus.ACCEPTED,
    weight: 'קִטּוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_290',
    word: 'רֵיחַ',
    definition: 'ניחוח',
    translation: 'Smell',
    status: WordStatus.ACCEPTED,
    weight: 'קֵיט',
    author: Author.BIALIK
  },
  {
    id: 'bi_291',
    word: 'טַעַם',
    definition: 'חוש הטעם',
    translation: 'Taste',
    status: WordStatus.ACCEPTED,
    weight: 'קַטַל',
    author: Author.BIALIK
  },
  {
    id: 'bi_292',
    word: 'מַרְאֶה',
    definition: 'חזות',
    translation: 'Appearance',
    status: WordStatus.ACCEPTED,
    weight: 'מַקְטֶה',
    author: Author.BIALIK
  },
  {
    id: 'bi_293',
    word: 'שְׁמִיעָה',
    definition: 'חוש השמע',
    translation: 'Hearing',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_294',
    word: 'רְאִיָּה',
    definition: 'חוש הראייה',
    translation: 'Sight',
    status: WordStatus.ACCEPTED,
    weight: 'קְטִילָה',
    author: Author.BIALIK
  },
  {
    id: 'bi_295',
    word: 'מִשּׁוּשׁ',
    definition: 'חוש המגע',
    translation: 'Touch',
    status: WordStatus.ACCEPTED,
    weight: 'קִטּוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_296',
    word: 'חוּשׁ',
    definition: 'אינסטינקט',
    translation: 'Sense',
    status: WordStatus.ACCEPTED,
    weight: 'קוּל',
    author: Author.BIALIK
  },
  {
    id: 'bi_297',
    word: 'יְדִידוּת',
    definition: 'קשר קרוב',
    translation: 'Friendship',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_298',
    word: 'חֲבֵרוּת',
    definition: 'רעות',
    translation: 'Comradeship',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_299',
    word: 'רֵעוּת',
    definition: 'חברות',
    translation: 'Fellowship',
    status: WordStatus.ACCEPTED,
    weight: Weight.UT,
    author: Author.BIALIK
  },
  {
    id: 'bi_300',
    word: 'אַחֲוָה',
    definition: 'אחות',
    translation: 'Brotherhood',
    status: WordStatus.ACCEPTED,
    weight: 'קַטְלָה',
    author: Author.BIALIK
  }
];

// Updated Stats based on the full list (~535 words total)
export const stats = {
  totalAnalyzed: wordList.length,
  successRateEstimate: 85, // Sivan estimates ~75% survival rate, Bialik is higher
  topWeights: [
    { name: Weight.MIFALA, value: 45 },
    { name: Weight.UT, value: 35 },
    { name: Weight.MAFEL, value: 25 },
    { name: 'סיומת -וֹן', value: 30 },
    { name: 'סיומת -יָה', value: 20 },
  ]
};