export type SupportedLanguage = 'en' | 'hi' | 'bn' | 'ta';

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  nativeLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
];

export const TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    // Top Bar & Accessibility
    skip_to_content: 'Skip to Main Content',
    language_label: 'Language:',
    text_size_label: 'Text:',
    high_contrast: 'High Contrast',
    standard_mode: 'Standard Mode',
    contrast_active: 'Active',
    gazette_archive_link: 'Gazette Archive',
    rti_cell_link: 'RTI Transparency Cell',
    coalition_25_link: 'Coalition 25',
    portal_title: 'Right to Education India',
    portal_subtitle: 'National Legal & Policy Portal · Article 21-A',
    search_placeholder: 'Search acts, circulars, judgments, state rules...',
    search_button: 'Search',
    statutory_helpdesk: 'Statutory Helpdesk',
    ask_question: 'Ask a Question',

    // Navigation
    nav_home: 'Home',
    nav_know_your_rte: 'Know Your RTE',
    nav_resources: 'Resources',
    nav_judgments: 'Judicial Orders',
    nav_research: 'Policy & Research',
    nav_participation: 'Public Participation',
    nav_archives: 'Archives',
    nav_blog: 'Blog',

    // Sublinks
    sub_about_rte: 'About the RTE Act',
    sub_key_features: 'Key Features & Mandates',
    sub_chronology: 'Legal Chronology (2002–2026)',
    sub_faq: 'Frequently Asked Questions',
    sub_central_notifications: 'Central Government Notifications',
    sub_state_directory: 'State & UT Directory (37 States/UTs)',
    sub_rte_matrix: 'RTE State Rules Matrix',
    sub_ask_question: 'Ask a Question',
    sub_forum: 'Start a Discussion',
    sub_report_grievance: 'Report a Grievance',
    sub_news: 'News & Press Clippings',
    sub_events: 'Workshops & Events',
    sub_polls: 'Public Opinion Polls',
    sub_videos: 'Audio & Video Library',
    sub_the_blog: 'The RTE Blog',
    sub_featured_blog: 'Featured Analysis',
    sub_bloggers: 'Contributing Bloggers',

    // Key Provisions
    key_provisions_label: 'Key Provisions:',
    topic_25_reservation: '25% Reservation',
    topic_admissions: 'Admissions',
    topic_curriculum: 'Curriculum',
    topic_budgets: 'Budgets',
    topic_ict: 'ICT in Education',
    topic_inclusion: 'Inclusion & CWSN',
    topic_infrastructure: 'School Infrastructure',
    topic_mid_day_meal: 'Mid Day Meal',
    topic_quality: 'Quality of Learning',
    topic_smcs: 'SMCs & Governance',
    topic_recognition: 'School Recognition',
    topic_teachers: 'Teachers & PTR Norms',
    topic_vouchers: 'Education Vouchers',
    topic_elementary: 'Elementary Education',
    topic_courts: 'Court Judgments',
    topic_government_orders: 'Government Orders',
    topic_private_schools: 'Private Schools',

    // Top Bulletin & Ticker
    latest_bulletin: 'Latest Bulletin',
    updates_label: 'Updates',
    read_notice: 'Read Notice →',
    all_releases_btn: 'All Releases',

    // Announcements Section
    announcements_badge: 'Latest Legal Bulletin',
    announcements_deva: 'नवीनतम विज्ञप्तियां एवं सूचनाएं',
    announcements_live: 'Live Feed · AY 2025–26',
    announcements_title: 'New Releases & Official Announcements',
    announcements_desc:
      'Authentic statutory repository of Central and State notifications, model rule amendments, Section 12(1)(c) admission schedules, and landmark Supreme Court directives.',
    statutory_highlight: 'STATUTORY HIGHLIGHT',
    read_full_notice: 'Read Full Notice',
    tab_all: 'All Updates',
    tab_releases: 'New Releases',
    tab_announcements: 'Announcements',
    tab_gazettes: 'Gazettes',
    tab_orders: 'Judicial Orders',
    tab_circulars: 'Circulars',
    urgent_only: 'Urgent Only',
    search_announcements: 'Search by keywords, subject, issuing department, gazette code...',
    read_more: 'Read More',
    view_details: 'View Details',
    checksum_note:
      'Codified with verified gazette citations and checksum-authenticated downloads under Section 38.',
    all_gazettes_btn: 'All Gazette Notifications',
    archives_dir_btn: 'Archives Directory',

    // Home Page Hero
    const_article: 'Constitution of India · Article 21-A',
    act_no: 'Act No. 35 of 2009',
    hero_title: 'National Legal & Policy Resource Portal on Right to Education',
    hero_desc:
      'An authoritative civil-society repository documenting the Right of Children to Free and Compulsory Education Act, 2009. Providing verified statutory gazettes, Section 38 state rules, landmark Supreme Court jurisprudence, and Section 12(1)(c) implementation monitoring across 28 States and 8 Union Territories.',
    explore_rte_btn: 'Explore the RTE Act',
    state_dir_btn: 'State & UT Directory (37)',
    rules_matrix_btn: 'RTE State Rules Matrix',

    // Home Pillars
    pillar_kyr_title: 'Know Your RTE',
    pillar_kyr_desc:
      'Historical background, key mandates, 2002–2026 chronology, and frequently asked legal questions.',
    pillar_resources_title: 'Central Resources',
    pillar_resources_desc:
      'Official gazettes, central model rules, advisory circulars, and the Section 38 State Rules Matrix.',
    pillar_states_title: 'State & UT Desks',
    pillar_states_desc:
      'Comprehensive profiles for all 28 States & 8 UTs including Telangana, Ladakh, and Maharashtra.',
    pillar_judgments_title: 'Judicial Orders',
    pillar_judgments_desc:
      'Landmark Supreme Court rulings, High Court interpretations, and constitutional bench precedents.',
    explore_section: 'Explore Section →',
    browse_repository: 'Browse Repository →',
    view_all_states: 'View All States →',
    read_judgments: 'Read Judgments →',

    // Priority Records
    priority_records_category: 'Verified Archives',
    priority_records_title: 'Priority Statutory & Jurisprudential Records',
    priority_records_desc:
      'Authoritative legal documents codified with primary source gazette citations and checksum validation.',
    view_all_records: 'View All Gazette Records',

    // State Desks Section
    state_desks_category: 'Sub-National Governance',
    state_desks_title: 'State Implementation Desks',
    state_desks_desc:
      'Explore state-specific admission portals, Section 38 rules, per-child reimbursement formulas, and SCPCR grievance contacts.',
    explore_all_states: 'Explore All 37 States & UTs',

    // Open Governance
    open_gov_category: 'Open Public Governance',
    open_gov_title: 'Public Participation, Helpdesk & Grievance Redressal',
    open_gov_desc:
      'Need guidance on Section 12(1)(c) admission lotteries, school fee reimbursement norms, or filing an application under Section 4(1)(b) of the Right to Information Act, 2005? Access our community platforms and state grievance cells.',
    start_discussion: 'Start a Discussion',
    report_grievance: 'Report a Grievance',
    rti_guide: 'RTI Filing Guide →',
    portal_statistics: 'Portal Statistics',
    archived_legal_records: 'Archived Legal Records:',
    states_uts_profiled: 'States & UTs Profiled:',
    court_orders_count: 'High Court & SC Orders:',
    access_license_label: 'Access License:',

    // Footer
    footer_about_title: 'About RTE India Portal',
    footer_about_desc:
      'An authoritative open-access digital archive mandated under Article 21-A of the Constitution of India. Dedicated to non-partisan civil society governance, legislative dissemination, and longitudinal public monitoring of the Right of Children to Free and Compulsory Education Act, 2009.',
    footer_statutory_title: 'Statutory References',
    footer_state_desks_title: 'State Implementation Desks',
    footer_helpdesk_title: 'Public Redressal & Helpdesk',
    footer_rights_reserved: 'All Public Legal Documents Free under CC BY 4.0.',
    footer_disclaimer:
      'Disclaimer: This portal is an independent legal documentation initiative and civil society public repository.',
  },

  hi: {
    // Top Bar & Accessibility
    skip_to_content: 'मुख्य सामग्री पर जाएं',
    language_label: 'भाषा:',
    text_size_label: 'फ़ॉन्ट आकार:',
    high_contrast: 'उच्च कंट्रास्ट (High Contrast)',
    standard_mode: 'मानक मोड',
    contrast_active: 'सक्रिय',
    gazette_archive_link: 'राजपत्र अभिलेखागार',
    rti_cell_link: 'आरटीआई पारदर्शिता प्रकोष्ठ',
    coalition_25_link: 'गठबंधन 25',
    portal_title: 'शिक्षा का अधिकार भारत',
    portal_subtitle: 'राष्ट्रीय विधिक एवं नीति संसाधन पोर्टल · अनुच्छेद 21-क',
    search_placeholder: 'अधिनियम, परिपत्र, निर्णय, राज्य नियमावली खोजें...',
    search_button: 'खोजें',
    statutory_helpdesk: 'विधिक सहायता केंद्र',
    ask_question: 'प्रश्न पूछें',

    // Navigation
    nav_home: 'मुख्य पृष्ठ',
    nav_know_your_rte: 'आरटीई जानें',
    nav_resources: 'संसाधन',
    nav_judgments: 'न्यायिक आदेश',
    nav_research: 'नीति एवं अनुसंधान',
    nav_participation: 'जन सहभागिता',
    nav_archives: 'अभिलेखागार',
    nav_blog: 'ब्लॉग',

    // Sublinks
    sub_about_rte: 'आरटीई अधिनियम का परिचय',
    sub_key_features: 'प्रमुख विशेषताएं एवं अधिदेश',
    sub_chronology: 'विधिक घटनाक्रम (2002–2026)',
    sub_faq: 'प्रायः पूछे जाने वाले प्रश्न (FAQ)',
    sub_central_notifications: 'केंद्रीय सरकारी अधिसूचनाएं',
    sub_state_directory: 'राज्य एवं संघ राज्य क्षेत्र निर्देशिका (37 राज्य/यूटी)',
    sub_rte_matrix: 'राज्य आरटीई नियम मैट्रिक्स',
    sub_ask_question: 'प्रश्न पूछें',
    sub_forum: 'चर्चा प्रारंभ करें',
    sub_report_grievance: 'शिकायत दर्ज करें',
    sub_news: 'समाचार एवं प्रेस कतरनें',
    sub_events: 'कार्यशालाएं एवं सम्मेलन',
    sub_polls: 'जनमत सर्वेक्षण',
    sub_videos: 'ऑडियो-वीडियो लाइब्रेरी',
    sub_the_blog: 'आरटीई आधिकारिक ब्लॉग',
    sub_featured_blog: 'विशेष कानूनी विश्लेषण',
    sub_bloggers: 'योगदानकर्ता लेखक',

    // Key Provisions
    key_provisions_label: 'प्रमुख विधिक प्रावधान:',
    topic_25_reservation: '25% आरक्षण',
    topic_admissions: 'प्रवेश प्रक्रिया',
    topic_curriculum: 'पाठ्यक्रम',
    topic_budgets: 'शिक्षा बजट',
    topic_ict: 'शिक्षा में आईसीटी',
    topic_inclusion: 'समावेशी शिक्षा एवं सीडब्ल्यूएसएन',
    topic_infrastructure: 'विद्यालयी आधारभूत ढांचा',
    topic_mid_day_meal: 'मध्याह्न भोजन योजना',
    topic_quality: 'शिक्षा की गुणवत्ता',
    topic_smcs: 'एसएमसी एवं प्रबंधन',
    topic_recognition: 'विद्यालय मान्यता मानदंड',
    topic_teachers: 'शिक्षक एवं छात्र अनुपात (PTR)',
    topic_vouchers: 'शिक्षा वाउचर',
    topic_elementary: 'प्रारंभिक शिक्षा',
    topic_courts: 'अदालती निर्णय',
    topic_government_orders: 'शासनादेश एवं परिपत्र',
    topic_private_schools: 'निजी विद्यालय',

    // Top Bulletin & Ticker
    latest_bulletin: 'नवीनतम बुलेटिन',
    updates_label: 'अपडेट्स',
    read_notice: 'विज्ञप्ति पढ़ें →',
    all_releases_btn: 'सभी विज्ञप्तियां',

    // Announcements Section
    announcements_badge: 'नवीनतम विधिक बुलेटिन',
    announcements_deva: 'नवीनतम विज्ञप्तियां एवं सूचनाएं',
    announcements_live: 'सक्रिय प्रसारण · शैक्षिक सत्र 2025–26',
    announcements_title: 'नई विज्ञप्तियां एवं आधिकारिक घोषणाएं',
    announcements_desc:
      'केंद्रीय एवं राज्य अधिसूचनाओं, मॉडल नियमों, धारा 12(1)(ग) प्रवेश समय-सारिणी और सर्वोच्च न्यायालय के ऐतिहासिक आदेशों का अधिकृत संग्रह।',
    statutory_highlight: 'प्रमुख वैधानिक सूचना',
    read_full_notice: 'पूर्ण सूचना पढ़ें',
    tab_all: 'सभी अपडेट',
    tab_releases: 'नई विज्ञप्तियां',
    tab_announcements: 'घोषणाएं',
    tab_gazettes: 'राजपत्र',
    tab_orders: 'न्यायिक आदेश',
    tab_circulars: 'परिपत्र',
    urgent_only: 'केवल अति आवश्यक',
    search_announcements: 'शीर्षक, विषय, विभाग, राजपत्र संख्या द्वारा खोजें...',
    read_more: 'विस्तार से पढ़ें',
    view_details: 'विवरण देखें',
    checksum_note:
      'धारा 38 के तहत सत्यापित राजपत्र उद्धरणों और डिजिटल हस्ताक्षर के साथ संहिताबद्ध।',
    all_gazettes_btn: 'सभी राजपत्र अधिसूचनाएं',
    archives_dir_btn: 'अभिलेखागार निर्देशिका',

    // Home Page Hero
    const_article: 'भारत का संविधान · अनुच्छेद 21-क',
    act_no: '2009 का अधिनियम संख्या 35',
    hero_title: 'शिक्षा का अधिकार राष्ट्रीय विधिक एवं नीति संसाधन पोर्टल',
    hero_desc:
      'निःशुल्क और अनिवार्य बाल शिक्षा का अधिकार अधिनियम, 2009 का दस्तावेजीकरण करने वाला आधिकारिक नागरिक समाज संग्रह। 28 राज्यों और 8 संघ राज्य क्षेत्रों में सत्यापित राजपत्र, धारा 38 राज्य नियम, उच्चतम न्यायालय के निर्णय और धारा 12(1)(ग) का क्रियान्वयन।',
    explore_rte_btn: 'आरटीई अधिनियम जानें',
    state_dir_btn: 'राज्य एवं यूटी निर्देशिका (37)',
    rules_matrix_btn: 'राज्य आरटीई नियम मैट्रिक्स',

    // Home Pillars
    pillar_kyr_title: 'आरटीई को जानें',
    pillar_kyr_desc:
      'ऐतिहासिक पृष्ठभूमि, प्रमुख अधिदेश, 2002-2026 घटनाक्रम और प्रायः पूछे जाने वाले विधिक प्रश्न।',
    pillar_resources_title: 'केंद्रीय संसाधन',
    pillar_resources_desc:
      'आधिकारिक राजपत्र, केंद्रीय मॉडल नियम, परामर्श परिपत्र और धारा 38 राज्य नियमावली।',
    pillar_states_title: 'राज्य एवं यूटी प्रकोष्ठ',
    pillar_states_desc:
      'तेलंगाना, लद्दाख और महाराष्ट्र सहित सभी 28 राज्यों और 8 केंद्र शासित प्रदेशों की विस्तृत प्रोफाइल।',
    pillar_judgments_title: 'न्यायिक आदेश',
    pillar_judgments_desc:
      'सर्वोच्च न्यायालय के ऐतिहासिक फैसले, उच्च न्यायालय की व्याख्याएं और संवैधानिक पीठ की नजीरें।',
    explore_section: 'अनुभाग देखें →',
    browse_repository: 'संग्रह ब्राउज़ करें →',
    view_all_states: 'सभी राज्य देखें →',
    read_judgments: 'निर्णय पढ़ें →',

    // Priority Records
    priority_records_category: 'सत्यापित अभिलेखागार',
    priority_records_title: 'प्राथमिक वैधानिक एवं न्यायिक अभिलेख',
    priority_records_desc:
      'मूल स्रोत राजपत्र उद्धरणों और चेकसम प्रमाणीकरण के साथ संहिताबद्ध आधिकारिक विधिक दस्तावेज।',
    view_all_records: 'सभी राजपत्र अभिलेख देखें',

    // State Desks Section
    state_desks_category: 'उप-राष्ट्रीय शासन',
    state_desks_title: 'राज्य क्रियान्वयन डेस्क',
    state_desks_desc:
      'राज्य-विशिष्ट प्रवेश पोर्टल, धारा 38 नियम, प्रति-बालक प्रतिपूर्ति सूत्र और राज्य बाल अधिकार आयोग संपर्क।',
    explore_all_states: 'सभी 37 राज्यों और यूटी को देखें',

    // Open Governance
    open_gov_category: 'खुला लोक प्रशासन',
    open_gov_title: 'जन सहभागिता, सहायता केंद्र एवं शिकायत निवारण',
    open_gov_desc:
      'धारा 12(1)(ग) प्रवेश लॉटरी, शुल्क प्रतिपूर्ति या सूचना का अधिकार अधिनियम, 2005 के तहत आवेदन में सहायता चाहिए? हमारे नागरिक मंचों और राज्य शिकायत प्रकोष्ठों से जुड़ें।',
    start_discussion: 'चर्चा प्रारंभ करें',
    report_grievance: 'शिकायत दर्ज करें',
    rti_guide: 'आरटीआई आवेदन मार्गदर्शिका →',
    portal_statistics: 'पोर्टल सांख्यिकी',
    archived_legal_records: 'अभिलेखागार विधिक दस्तावेज:',
    states_uts_profiled: 'प्रोफाइल किए गए राज्य/यूटी:',
    court_orders_count: 'अदालती एवं सुप्रीम कोर्ट आदेश:',
    access_license_label: 'पहुंच लाइसेंस:',

    // Footer
    footer_about_title: 'आरटीई भारत पोर्टल के बारे में',
    footer_about_desc:
      'भारत के संविधान के अनुच्छेद 21-क के तहत स्थापित आधिकारिक खुला डिजिटल अभिलेखागार। निःशुल्क और अनिवार्य बाल शिक्षा का अधिकार अधिनियम, 2009 के निष्पक्ष नागरिक समाज शासन और निगरानी को समर्पित।',
    footer_statutory_title: 'वैधानिक संदर्भ',
    footer_state_desks_title: 'राज्य क्रियान्वयन प्रकोष्ठ',
    footer_helpdesk_title: 'जन निवारण एवं हेल्पलाइन',
    footer_rights_reserved: 'सभी सार्वजनिक विधिक दस्तावेज CC BY 4.0 के तहत निःशुल्क उपलब्ध हैं।',
    footer_disclaimer:
      'अस्वीकरण: यह पोर्टल एक स्वतंत्र कानूनी दस्तावेजीकरण और नागरिक समाज सार्वजनिक भंडार है।',
  },

  bn: {
    // Top Bar & Accessibility
    skip_to_content: 'মূল বিষয়বস্তুতে যান',
    language_label: 'ভাষা:',
    text_size_label: 'হরফের আকার:',
    high_contrast: 'উচ্চ বৈসাদৃশ্য (High Contrast)',
    standard_mode: 'সাধারণ মোড',
    contrast_active: 'সক্রিয়',
    gazette_archive_link: 'গেজেট সংরক্ষণাগার',
    rti_cell_link: 'আরটিআই স্বচ্ছতা সেল',
    coalition_25_link: 'কোয়ালিশন ২৫',
    portal_title: 'শিক্ষা অধিকার ভারত',
    portal_subtitle: 'জাতীয় আইন ও নীতি সম্পদ পোর্টাল · অনুচ্ছেদ ২১-ক',
    search_placeholder: 'আইন, নির্দেশিকা, রায়, রাজ্য নিয়মাবলী অনুসন্ধান করুন...',
    search_button: 'অনুসন্ধান',
    statutory_helpdesk: 'আইনি হেল্পডেস্ক',
    ask_question: 'প্রশ্ন জিজ্ঞাসা করুন',

    // Navigation
    nav_home: 'প্রধান পাতা',
    nav_know_your_rte: 'আপনার আরটিই জানুন',
    nav_resources: 'সংস্থানসমূহ',
    nav_judgments: 'বিচারিক আদেশ',
    nav_research: 'নীতি ও গবেষণা',
    nav_participation: 'জনসাধারণের অংশগ্রহণ',
    nav_archives: 'সংরক্ষণাগার',
    nav_blog: 'ব্লগ',

    // Sublinks
    sub_about_rte: 'আরটিই আইন সম্পর্কে',
    sub_key_features: 'প্রধান বৈশিষ্ট্য ও নির্দেশিকা',
    sub_chronology: 'আইনি কালপঞ্জি (২০০২–২০২৬)',
    sub_faq: 'সাধারণ প্রশ্নোত্তর (FAQ)',
    sub_central_notifications: 'কেন্দ্রীয় সরকারি বিজ্ঞপ্তি',
    sub_state_directory: 'রাজ্য ও কেন্দ্রশাসিত অঞ্চল নির্দেশিকা (৩৭ টি)',
    sub_rte_matrix: 'রাজ্য আরটিই নিয়ম ম্যাট্রিক্স',
    sub_ask_question: 'প্রশ্ন করুন',
    sub_forum: 'আলোচনা শুরু করুন',
    sub_report_grievance: 'অভিযোগ দায়ের করুন',
    sub_news: 'সংবাদ ও প্রেস ক্লিপিংস',
    sub_events: 'কর্মশালা ও ইভেন্ট',
    sub_polls: 'জনমত জরিপ',
    sub_videos: 'ভিডিও ও অডিও লাইব্রেরি',
    sub_the_blog: 'আরটিই ব্লগ',
    sub_featured_blog: 'বিশেষ বিশ্লেষণ',
    sub_bloggers: 'অবদানকারী লেখকবৃন্দ',

    // Key Provisions
    key_provisions_label: 'মূল আইনি বিধানসমূহ:',
    topic_25_reservation: '২৫% সংরক্ষণ',
    topic_admissions: 'ভর্তি প্রক্রিয়া',
    topic_curriculum: 'পাঠ্যক্রম',
    topic_budgets: 'শিক্ষা বাজেট',
    topic_ict: 'শিক্ষায় আইসিটি',
    topic_inclusion: 'অন্তর্ভুক্তিমূলক শিক্ষা ও সিডব্লিউএসএন',
    topic_infrastructure: 'বিদ্যালয়ের অবকাঠামো',
    topic_mid_day_meal: 'মিড ডে মিল',
    topic_quality: 'শিক্ষার মান',
    topic_smcs: 'এসএমসি ও পরিচালনা',
    topic_recognition: 'বিদ্যালয় স্বীকৃতি',
    topic_teachers: 'শিক্ষক ও ছাত্র অনুপাত (PTR)',
    topic_vouchers: 'শিক্ষা ভাউচার',
    topic_elementary: 'প্রাথমিক শিক্ষা',
    topic_courts: 'আদালতের রায়',
    topic_government_orders: 'সরকারি আদেশ',
    topic_private_schools: 'বেসরকারি বিদ্যালয়',

    // Top Bulletin & Ticker
    latest_bulletin: 'সর্বশেষ বুলেটিন',
    updates_label: 'আপডেট',
    read_notice: 'বিজ্ঞপ্তি পড়ুন →',
    all_releases_btn: 'সকল প্রকাশনা',

    // Announcements Section
    announcements_badge: 'সর্বশেষ আইনি বুলেটিন',
    announcements_deva: 'नवीनतम विज्ञप्तियां एवं सूचनाएं',
    announcements_live: 'সরাসরি সম্প্রচার · ২০২৫–২৬ সেশন',
    announcements_title: 'নতুন প্রকাশনা ও অফিসিয়াল ঘোষণা',
    announcements_desc:
      'কেন্দ্রীয় ও রাজ্য বিজ্ঞপ্তি, মডেল নিয়ম সংশোধন, ধারা ১২(১)(গ) ভর্তি সময়সূচী এবং সুপ্রিম কোর্টের যুগান্তকারী নির্দেশাবলীর প্রামাণ্য সংগ্রহ।',
    statutory_highlight: 'বিশেষ সংবিধিবদ্ধ বিজ্ঞপ্তি',
    read_full_notice: 'সম্পূর্ণ বিজ্ঞপ্তি পড়ুন',
    tab_all: 'সকল আপডেট',
    tab_releases: 'নতুন প্রকাশনা',
    tab_announcements: 'ঘোষণা',
    tab_gazettes: 'গেজেট',
    tab_orders: 'বিচারিক আদেশ',
    tab_circulars: 'পরিপত্র',
    urgent_only: 'কেবল জরুরি',
    search_announcements: 'বিষয়, বিভাগ, গেজেট কোড বা কিওয়ার্ড দ্বারা খুঁজুন...',
    read_more: 'বিস্তারিত পড়ুন',
    view_details: 'বিবরণ দেখুন',
    checksum_note: 'ধারা ৩৮-এর অধীনে গেজেট উদ্ধৃতি সহ প্রামাণ্য সংগ্রহ।',
    all_gazettes_btn: 'সকল গেজেট বিজ্ঞপ্তি',
    archives_dir_btn: 'সংরক্ষণাগার নির্দেশিকা',

    // Home Page Hero
    const_article: 'ভারতের সংবিধান · অনুচ্ছেদ ২১-ক',
    act_no: '২০০৯ সালের ৩৫ নম্বর আইন',
    hero_title: 'শিক্ষা অধিকার সংক্রান্ত জাতীয় আইনি ও নীতি সম্পদ পোর্টাল',
    hero_desc:
      'বিনামূল্যে ও বাধ্যতামূলক শিশু শিক্ষার অধিকার আইন, ২০০৯ নথিভুক্ত করার জন্য একটি প্রামাণিক নাগরিক সমাজ সংগ্রহশালা। ২৮টি রাজ্য এবং ৮টি কেন্দ্রশাসিত অঞ্চলে যাচাইকৃত সংবিধিবদ্ধ গেজেট, ধারা ৩৮ রাজ্য বিধি এবং সুপ্রিম কোর্টের আইনি ব্যাখ্যা সরবরাহ করে।',
    explore_rte_btn: 'আরটিই আইনটি জানুন',
    state_dir_btn: 'রাজ্য ও ইউটি নির্দেশিকা (৩৭)',
    rules_matrix_btn: 'রাজ্য আরটিই নিয়ম ম্যাট্রিক্স',

    // Home Pillars
    pillar_kyr_title: 'আপনার আরটিই জানুন',
    pillar_kyr_desc: 'ঐতিহাসিক পটভূমি, মূল নির্দেশাবলী, ২০০২-২০২৬ কালপঞ্জি এবং আইনি প্রশ্নোত্তর।',
    pillar_resources_title: 'কেন্দ্রীয় সংস্থান',
    pillar_resources_desc:
      'অফিসিয়াল গেজেট, কেন্দ্রীয় মডেল নিয়ম, পরামর্শমূলক পরিপত্র এবং ধারা ৩৮ ম্যাট্রিক্স।',
    pillar_states_title: 'রাজ্য ও ইউটি ডেস্ক',
    pillar_states_desc: 'তেলেঙ্গানা, লাদাখ এবং মহারাষ্ট্র সহ ৩৭টি রাজ্য ও ইউটির বিস্তারিত প্রোফাইল।',
    pillar_judgments_title: 'বিচারিক আদেশ',
    pillar_judgments_desc: 'সুপ্রিম কোর্টের ঐতিহাসিক রায়, হাইকোর্টের ব্যাখ্যা এবং সাংবিধানিক নজির।',
    explore_section: 'বিভাগে যান →',
    browse_repository: 'সংগ্রহশালা ব্রাউজ করুন →',
    view_all_states: 'সকল রাজ্য দেখুন →',
    read_judgments: 'রায় পড়ুন →',

    // Priority Records
    priority_records_category: 'যাচাইকৃত সংরক্ষণাগার',
    priority_records_title: 'অগ্রাধিকার সংবিধিবদ্ধ ও বিচারিক নথি',
    priority_records_desc:
      'মূল গেজেট উদ্ধৃতি সহ সংকলিত প্রামাণ্য আইনি নথিপত্র।',
    view_all_records: 'সকল গেজেট নথি দেখুন',

    // State Desks Section
    state_desks_category: 'উপ-জাতীয় শাসনব্যবস্থা',
    state_desks_title: 'রাজ্য বাস্তবায়ন ডেস্ক',
    state_desks_desc:
      'রাজ্যভিত্তিক ভর্তি পোর্টাল, ধারা ৩৮ নিয়ম, শিশু প্রতি খরচ পরিশোধ সূত্র এবং এসসিপিসিআর হেল্পলাইন।',
    explore_all_states: 'সকল ৩৭টি রাজ্য ও ইউটি অন্বেষণ করুন',

    // Open Governance
    open_gov_category: 'উন্মুক্ত জনশাসন',
    open_gov_title: 'জনসাধারণের অংশগ্রহণ, হেল্পডেস্ক ও অভিযোগ প্রতিকার',
    open_gov_desc:
      'ধারা ১২(১)(গ) ভর্তি লটারি, ফি প্রতিদান বা ২০০৫ সালের আরটিআই আইনের অধীনে তথ্য চাওয়ার নির্দেশিকা।',
    start_discussion: 'আলোচনা শুরু করুন',
    report_grievance: 'অভিযোগ দায়ের করুন',
    rti_guide: 'আরটিআই ফাইলিং গাইড →',
    portal_statistics: 'পোর্টাল পরিসংখ্যান',
    archived_legal_records: 'সংরক্ষিত আইনি নথি:',
    states_uts_profiled: 'নথিভুক্ত রাজ্য ও ইউটি:',
    court_orders_count: 'আদালত ও সুপ্রিম কোর্টের আদেশ:',
    access_license_label: 'অ্যাক্সেস লাইসেন্স:',

    // Footer
    footer_about_title: 'আরটিই ইন্ডিয়া পোর্টাল সম্পর্কে',
    footer_about_desc:
      'ভারতের সংবিধানের অনুচ্ছেদ ২১-ক এর অধীনে উন্মুক্ত ডিজিটাল আর্কাইভ। বিনামূল্যে ও বাধ্যতামূলক শিক্ষার অধিকার আইন, ২০০৯ এর দীর্ঘমেয়াদী পর্যবেক্ষণ ও আইনি প্রচারে নিবেদিত।',
    footer_statutory_title: 'সংবিধিবদ্ধ রেফারেন্স',
    footer_state_desks_title: 'রাজ্য বাস্তবায়ন ডেস্ক',
    footer_helpdesk_title: 'জন প্রতিকার ও হেল্পলাইন',
    footer_rights_reserved: 'সকল পাবলিক আইনি নথি CC BY 4.0 এর অধীনে উন্মুক্ত।',
    footer_disclaimer: 'দাবিত্যাগ: এই পোর্টালটি একটি স্বাধীন আইনি নথিপত্র এবং নাগরিক সমাজ সংরক্ষণাগার।',
  },

  ta: {
    // Top Bar & Accessibility
    skip_to_content: 'முதன்மை உள்ளடக்கத்திற்குச் செல்லவும்',
    language_label: 'மொழி:',
    text_size_label: 'எழுத்துரு அளவு:',
    high_contrast: 'உயர் மாறுபாடு (High Contrast)',
    standard_mode: 'வழக்கமான பயன்முறை',
    contrast_active: 'செயலில்',
    gazette_archive_link: 'அரசிதழ் காப்பகம்',
    rti_cell_link: 'ஆர்டிஐ வெளிப்படைத்தன்மை மையம்',
    coalition_25_link: 'கூட்டமைப்பு 25',
    portal_title: 'கல்வி உரிமை இந்தியா',
    portal_subtitle: 'தேசிய சட்ட மற்றும் கொள்கை போர்டல் · பிரிவு 21-A',
    search_placeholder: 'சட்டங்கள், சுற்றறிக்கைகள், தீர்ப்புகள், மாநில விதிகளைத் தேடுங்கள்...',
    search_button: 'தேடுங்கள்',
    statutory_helpdesk: 'சட்ட உதவி மையம்',
    ask_question: 'கேள்வி கேட்கவும்',

    // Navigation
    nav_home: 'முகப்பு',
    nav_know_your_rte: 'உங்கள் ஆர்டிஇ-ஐ அறியுங்கள்',
    nav_resources: 'வளங்கள்',
    nav_judgments: 'நீதித்துறை உத்தரவுகள்',
    nav_research: 'கொள்கை மற்றும் ஆராய்ச்சி',
    nav_participation: 'பொதுமக்கள் பங்கேற்பு',
    nav_archives: 'காப்பகங்கள்',
    nav_blog: 'வலைப்பதிவு',

    // Sublinks
    sub_about_rte: 'ஆர்டிஇ சட்டம் பற்றி',
    sub_key_features: 'முக்கிய அம்சங்கள் மற்றும் வழிகாட்டுதல்கள்',
    sub_chronology: 'சட்ட காலவரிசை (2002–2026)',
    sub_faq: 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)',
    sub_central_notifications: 'மத்திய அரசு அறிவிப்புகள்',
    sub_state_directory: 'மாநில மற்றும் யூடி கோப்பகம் (37 மாநிலங்கள்/யூடிகள்)',
    sub_rte_matrix: 'மாநில ஆர்டிஇ விதிகள் மேட்ரிக்ஸ்',
    sub_ask_question: 'கேள்வி கேட்கவும்',
    sub_forum: 'விவாதத்தைத் தொடங்கவும்',
    sub_report_grievance: 'குறைபாட்டைப் புகாரளிக்கவும்',
    sub_news: 'செய்திகள் & செய்தித் துணுக்குகள்',
    sub_events: 'பட்டறைகள் & நிகழ்வுகள்',
    sub_polls: 'பொதுக்கருத்துக் கணிப்புகள்',
    sub_videos: 'ஆடியோ & வீடியோ நூலகம்',
    sub_the_blog: 'ஆர்டிஇ வலைப்பதிவு',
    sub_featured_blog: 'சிறப்பு ஆய்வு',
    sub_bloggers: 'பங்களிப்பாளர்கள்',

    // Key Provisions
    key_provisions_label: 'முக்கிய சட்ட விதிகள்:',
    topic_25_reservation: '25% இடஒதுக்கீடு',
    topic_admissions: 'சேர்க்கை நடைமுறை',
    topic_curriculum: 'பாடத்திட்டம்',
    topic_budgets: 'கல்வி நிதிநிலை அறிக்கை',
    topic_ict: 'கல்வியில் தகவல் தொழில்நுட்பம் (ICT)',
    topic_inclusion: 'உள்ளடக்கிய கல்வி மற்றும் CWSN',
    topic_infrastructure: 'பள்ளி உள்கட்டமைப்பு',
    topic_mid_day_meal: 'மதிய உணவுத் திட்டம்',
    topic_quality: 'கல்வித் தரம்',
    topic_smcs: 'பள்ளி மேலாண்மைக் குழுக்கள் (SMC)',
    topic_recognition: 'பள்ளி அங்கீகாரம்',
    topic_teachers: 'ஆசிரியர்கள் மற்றும் PTR விகிதம்',
    topic_vouchers: 'கல்வி வவுச்சர்கள்',
    topic_elementary: 'தொடக்கக் கல்வி',
    topic_courts: 'நீதிமன்றத் தீர்ப்புகள்',
    topic_government_orders: 'அரசாணை மற்றும் சுற்றறிக்கைகள்',
    topic_private_schools: 'தனியார் பள்ளிகள்',

    // Top Bulletin & Ticker
    latest_bulletin: 'சமீபத்திய செய்திமடல்',
    updates_label: 'புதுப்பிப்புகள்',
    read_notice: 'அறிவிப்பைப் படியுங்கள் →',
    all_releases_btn: 'அனைத்து வெளியீடுகள்',

    // Announcements Section
    announcements_badge: 'சமீபத்திய சட்டச் செய்திமடல்',
    announcements_deva: 'नवीनतम विज्ञप्तियां एवं सूचनाएं',
    announcements_live: 'நேரலை ஊட்டம் · கல்வி ஆண்டு 2025–26',
    announcements_title: 'புதிய வெளியீடுகள் மற்றும் அதிகாரப்பூர்வ அறிவிப்புகள்',
    announcements_desc:
      'மத்திய மற்றும் மாநில அறிவிப்புகள், மாதிரி விதித் திருத்தங்கள், பிரிவு 12(1)(c) சேர்க்கை அட்டவணைகள் மற்றும் உச்ச நீதிமன்ற உத்தரவுகளின் அதிகாரப்பூர்வக் காப்பகம்.',
    statutory_highlight: 'முக்கிய சட்ட அறிவிப்பு',
    read_full_notice: 'முழு அறிவிப்பையும் படியுங்கள்',
    tab_all: 'அனைத்து அறிவிப்புகள்',
    tab_releases: 'புதிய வெளியீடுகள்',
    tab_announcements: 'அறிவிப்புகள்',
    tab_gazettes: 'அரசிதழ்',
    tab_orders: 'நீதித்துறை உத்தரவுகள்',
    tab_circulars: 'சுற்றறிக்கைகள்',
    urgent_only: 'முக்கியமானவை மட்டும்',
    search_announcements: 'தலைப்பு, துறை, அரசிதழ் எண் மூலம் தேடுங்கள்...',
    read_more: 'மேலும் படிக்க',
    view_details: 'விவரங்களைக் காண்க',
    checksum_note: 'பிரிவு 38-இன் கீழ் சரிபார்க்கப்பட்ட அரசிதழ் பதிவுகள்.',
    all_gazettes_btn: 'அனைத்து அரசிதழ் அறிவிப்புகள்',
    archives_dir_btn: 'காப்பகக் கோப்பகம்',

    // Home Page Hero
    const_article: 'இந்திய அரசியலமைப்பு · பிரிவு 21-A',
    act_no: '2009 ஆம் ஆண்டின் சட்டம் எண் 35',
    hero_title: 'கல்வி உரிமை தேசிய சட்ட மற்றும் கொள்கை வள போர்டல்',
    hero_desc:
      'குழந்தைகளுக்கான இலவச மற்றும் கட்டாயக் கல்வி உரிமைச் சட்டம், 2009-ஐ ஆவணப்படுத்தும் அதிகாரப்பூர்வ சிவில் சமூக களஞ்சியம். 28 மாநிலங்கள் மற்றும் 8 யூனியன் பிரதேசங்களில் சரிபார்க்கப்பட்ட அரசிதழ்கள், பிரிவு 38 மாநில விதிகள் மற்றும் உச்ச நீதிமன்றத் தீர்ப்புகளை வழங்குகிறது.',
    explore_rte_btn: 'ஆர்டிஇ சட்டத்தை அறியுங்கள்',
    state_dir_btn: 'மாநில மற்றும் யூடி கோப்பகம் (37)',
    rules_matrix_btn: 'மாநில ஆர்டிஇ விதிகள் மேட்ரிக்ஸ்',

    // Home Pillars
    pillar_kyr_title: 'உங்கள் ஆர்டிஇ-ஐ அறியுங்கள்',
    pillar_kyr_desc: 'வரலாற்றுப் பின்னணி, முக்கிய ஆணைகள், 2002-2026 காலவரிசை மற்றும் சட்டக் கேள்விகள்.',
    pillar_resources_title: 'மத்திய வளங்கள்',
    pillar_resources_desc: 'அரசாங்க அரசிதழ்கள், மாதிரி விதிகள், ஆலோசனைச் சுற்றறிக்கைகள் மற்றும் விதிகள் மேட்ரிக்ஸ்.',
    pillar_states_title: 'மாநில மற்றும் யூடி பிரிவுகள்',
    pillar_states_desc: 'தெலுங்கானா, லடாக், தமிழ்நாடு மற்றும் மகாராஷ்டிரா உள்ளிட்ட 37 மாநிலங்களின் சுயவிவரங்கள்.',
    pillar_judgments_title: 'நீதித்துறை உத்தரவுகள்',
    pillar_judgments_desc: 'உச்ச நீதிமன்ற முக்கியத் தீர்ப்புகள், உயர் நீதிமன்ற விளக்கங்கள் மற்றும் முன்மாதிரிகள்.',
    explore_section: 'பிரிவைப் பார்க்க →',
    browse_repository: 'களஞ்சியத்தை உலாவவும் →',
    view_all_states: 'அனைத்து மாநிலங்களையும் காண்க →',
    read_judgments: 'தீர்ப்புகளைப் படியுங்கள் →',

    // Priority Records
    priority_records_category: 'சரிபார்க்கப்பட்ட காப்பகங்கள்',
    priority_records_title: 'முன்னுரிமை சட்ட மற்றும் நீதித்துறை பதிவுகள்',
    priority_records_desc:
      'முதன்மை மூல அரசிதழ் மேற்கோள்களுடன் குறியிடப்பட்ட அதிகாரப்பூர்வ சட்ட ஆவணங்கள்.',
    view_all_records: 'அனைத்து அரசிதழ் பதிவுகளையும் காண்க',

    // State Desks Section
    state_desks_category: 'மாநில அளவிலான நிர்வாகம்',
    state_desks_title: 'மாநில செயலாக்கப் பிரிவுகள்',
    state_desks_desc:
      'மாநில சேர்க்கை போர்ட்டல்கள், பிரிவு 38 விதிகள், கட்டணத் திருப்பிச் செலுத்தும் சூத்திரங்கள் மற்றும் SCPCR தொடர்புகள்.',
    explore_all_states: 'அனைத்து 37 மாநிலங்களையும் காண்க',

    // Open Governance
    open_gov_category: 'திறந்த மக்கள் நிர்வாகம்',
    open_gov_title: 'பொதுமக்கள் பங்கேற்பு, உதவி மையம் மற்றும் குறை தீர்ப்பு',
    open_gov_desc:
      'பிரிவு 12(1)(c) சேர்க்கை குலுக்கல், பள்ளி கட்டணத் திருப்பிச் செலுத்துதல் அல்லது தகவல் அறியும் உரிமைச் சட்டம் (RTI) வழிகாட்டுதல்கள் தேவைப்படுகிறதா? எங்கள் தளங்களை அணுகவும்.',
    start_discussion: 'விவாதத்தைத் தொடங்குங்கள்',
    report_grievance: 'புகாரைப் பதிவு செய்யவும்',
    rti_guide: 'RTI தாக்கல் வழிகாட்டி →',
    portal_statistics: 'போர்டல் புள்ளிவிவரங்கள்',
    archived_legal_records: 'காப்பகப்படுத்தப்பட்ட சட்ட ஆவணங்கள்:',
    states_uts_profiled: 'சுயவிவரம் செய்யப்பட்ட மாநிலங்கள்:',
    court_orders_count: 'உயர்நீதிமன்ற மற்றும் உச்சநீதிமன்ற உத்தரவுகள்:',
    access_license_label: 'அணுகல் உரிமம்:',

    // Footer
    footer_about_title: 'ஆர்டிஇ இந்தியா போர்டல் பற்றி',
    footer_about_desc:
      'இந்திய அரசியலமைப்பின் பிரிவு 21-A இன் கீழ் உருவாக்கப்பட்ட திறந்த அணுகல் டிஜிட்டல் காப்பகம். குழந்தைகளுக்கான இலவச மற்றும் கட்டாயக் கல்வி உரிமைச் சட்டம், 2009-ன் சட்டப்பூர்வ பரப்புரை மற்றும் கண்காணிப்பிற்கு அர்ப்பணிக்கப்பட்டது.',
    footer_statutory_title: 'சட்டரீதியான குறிப்புகள்',
    footer_state_desks_title: 'மாநில செயலாக்க மையங்கள்',
    footer_helpdesk_title: 'பொது நிவாரணம் & உதவி மையம்',
    footer_rights_reserved: 'அனைத்து பொது சட்ட ஆவணங்களும் CC BY 4.0 இன் கீழ் இலவசமாகக் கிடைக்கின்றன.',
    footer_disclaimer: 'பொறுப்புத் துறப்பு: இந்த போர்டல் ஒரு சுயாதீன சட்ட ஆவணப்படுத்தல் மற்றும் பொதுக் களஞ்சியமாகும்.',
  },
};
