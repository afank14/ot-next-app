export interface BibleVerse {
  id: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  category: string;
  context: string;
  reflection: string;
  challenge: string;
}

export const verses: BibleVerse[] = [
  {
    id: "1",
    book: "Isaiah",
    chapter: 51,
    verse: 9,
    text: "Awake, awake, put on strength, O arm of the LORD; awake, as in the ancient days, in the generations of old. Art thou not it that hath cut Rahab, and wounded the dragon?",
    category: "Divine Warrior",
    context: "Isaiah calls upon the power of the Lord, referencing His role as the Divine Warrior who delivers us from chaos.",
    reflection: "How do the Lord's past acts of deliverance strengthen your faith in His power to help you today?",
    challenge: "Make a list of times when you've witnessed God's power in your life and share one of these experiences with someone who needs encouragement."
  },
  {
    id: "2",
    book: "Exodus",
    chapter: 19,
    verse: 4,
    text: "Ye have seen what I did unto the Egyptians, and how I bare you on eagles' wings, and brought you unto myself. Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine: And ye shall be unto me a kingdom of priests, and an holy nation.",
    category: "covenant",
    context: "The Lord speaks to Israel at Mount Sinai, establishing His covenant relationship with them and their special role among nations.",
    reflection: "How does your covenant relationship with God influence your daily choices and actions?",
    challenge: "Prayerfully ponder on your covenants and identify one specific way you can better honor them this week."
  },
  {
    id: "3",
    book: "Deuteronomy",
    chapter: 10,
    verse: 18,
    text: "He doth execute the judgment of the fatherless and widow, and loveth the stranger, in giving him food and raiment. Love ye therefore the stranger: for ye were strangers in the land of Egypt.",
    category: "covenant",
    context: "Moses reminds Israel of God's care for the vulnerable and their obligation to show similar compassion.",
    reflection: "How can you better emulate God's love for those who are vulnerable or marginalized in your community?",
    challenge: "Find a specific way to help someone who is new or feels like a stranger in your community this week."
  },
  {
    id: "4",
    book: "Leviticus",
    chapter: 19,
    verse: 2,
    text: "Speak unto all the congregation of the children of Israel, and say unto them, Ye shall be holy: for I the LORD your God am holy.",
    category: "holiness",
    context: "The Lord sets forth His standard of holiness for Israel, calling them to reflect His divine nature.",
    reflection: "Holiness means to be complete. How can a commitment to God and your covenant with Him make you more complete?",
    challenge: "Choose one aspect of your life where you can increase in holiness through more Christ-like behavior."
  },
  {
    id: "5",
    book: "Ruth",
    chapter: 3,
    verse: 10,
    text: "And he said, Blessed be thou of the LORD, my daughter: for thou hast shewed more kindness in the latter end than at the beginning, inasmuch as thou followedst not young men, whether poor or rich.",
    category: "hesed",
    context: "Boaz blesses Ruth for helping him see who he can become.",
    reflection: "How can you help others see their true divine potential?",
    challenge: "Reach out to someone who is struggling and remind them of their divine identity."
  },
  {
    id: "6",
    book: "Jeremiah",
    chapter: 9,
    verse: 24,
    text: "But let him that glorieth glory in this, that he understandeth and knoweth me, that I am the LORD which exercise lovingkindness, judgment, and righteousness, in the earth: for in these things I delight, saith the LORD.",
    category: "hesed",
    context: "The Lord emphasizes that He loves performing acts of hesed for His people.",
    reflection: "How does the Lord's love for hesed impact your relationship with Him?",
    challenge: "Find time today to perform service for someone else."
  },
  {
    id: "7",
    book: "Micah",
    chapter: 7,
    verse: 7,
    text: "Therefore I will look unto the LORD; I will wait for the God of my salvation: my God will hear me.",
    category: "faith",
    context: "Micah expresses trust in God's faithfulness despite difficult circumstances.",
    reflection: "How do you maintain hope and trust in God during challenging times?",
    challenge: "Practice patient waiting on the Lord through prayer and meditation this week."
  },
  {
    id: "8",
    book: "Micah",
    chapter: 6,
    verse: 8,
    text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
    category: "hesed",
    context: "Micah emphasizes the importance of performing acts of hesed for others.",
    reflection: "How do you balance justice, mercy, and humility in your relationships?",
    challenge: "Focus on one aspect (justice, mercy, or humility) and find a specific way to improve in that area today."
  },
  {
    id: "9",
    book: "1 Samuel",
    chapter: 10,
    verse: 9,
    text: "And it was so, that when he had turned his back to go from Samuel, God gave him another heart: and all those signs came to pass that day.",
    category: "messiah",
    context: "Saul experiences divine transformation as he anointed to become the king of Israel.",
    reflection: "How has God transformed your heart and mind through your relationship with Him?",
    challenge: "Identify one area where you need God's transforming power and pray specifically about it."
  },
  {
    id: "10",
    book: "Psalm",
    chapter: 63,
    verse: 2,
    text: "To see thy power and thy glory, so as I have seen thee in the sanctuary.",
    category: "temple",
    context: "David expresses his deep longing to experience God's presence through worship in the temple.",
    reflection: "How do you seek to experience God's presence in your templeworship?",
    challenge: "Go to the temple this weekand spend time in prayer and reflection."
  },
  {
    id: "11",
    book: "Psalm",
    chapter: 42,
    verse: 4,
    text: "When I remember these things, I pour out my soul in me: for I had gone with the multitude, I went with them to the house of God, with the voice of joy and praise, with a multitude that kept holyday.",
    category: "temple",
    context: "The psalmist expresses the joy of being in the temple with the multitude.",
    reflection: "How do you experience the joy of being in the temple?",
    challenge: "Express your joy and praise to God through prayer or journaling."
  },
  {
    id: "12",
    book: "Isaiah",
    chapter: 41,
    verse: 8,
    text: "But thou, Israel, art my servant, Jacob whom I have chosen, the seed of Abraham my friend. Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
    category: "covenant",
    context: "God reassures Israel of His chosen relationship with them and His ongoing support.",
    reflection: "How does knowing you are chosen by God affect your confidence and sense of purpose?",
    challenge: "Share God's promises of strength and help with someone who is struggling with fear or doubt."
  },
  {
    id: "13",
    book: "Isaiah",
    chapter: 49,
    verse: 15,
    text: "Can a woman forget her sucking child, that she should not have compassion on the son of her womb? yea, they may forget, yet will I not forget thee. Behold, I have graven thee upon the palms of my hands; thy walls are continually before me.",
    category: "covenant",
    context: "God compares His love for His people to a mother's love for her child, emphasizing His unfailing remembrance.",
    reflection: "How does God's unchanging love and constant awareness of you impact your daily life?",
    challenge: "Write down ways God has shown His unfailing love to you and share your testimony with others."
  },
  {
    id: "14",
    book: "Jeremiah",
    chapter: 29,
    verse: 7,
    text: "And seek the peace of the city whither I have caused you to be carried away captives, and pray unto the LORD for it: for in the peace thereof shall ye have peace.",
    category: "heilsgeschichte",
    context: "Jeremiah instructs the exiles to seek the welfare of their captive city, showing God's concern for all communities.",
    reflection: "How can you contribute to the peace and welfare of others, even in difficult circumstances?",
    challenge: "Pray for your the welfare of those who have wronged you."
  },
  {
    id: "15",
    book: "Jonah",
    chapter: 4,
    verse: 2,
    text: "And he prayed unto the LORD, and said, I pray thee, O LORD, was not this my saying, when I was yet in my country? Therefore I fled before unto Tarshish: for I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil.",
    category: "heilsgeschichte",
    context: "Jonah acknowledges God's merciful nature, even while struggling with its implications for Nineveh.",
    reflection: "How does knowing God is merciful unto all impact your view of Him?",
    challenge: "Show mercy to someone who you feel may not deserve it, remembering God's mercy toward all."
  },
  {
    id: "16",
    book: "Isaiah",
    chapter: 19,
    verse: 22,
    text: "And the LORD shall smite Egypt: he shall smite and heal it: and they shall return even to the LORD, and he shall be intreated of them, and shall heal them. In that day shall there be a highway out of Egypt to Assyria, and the Assyrian shall come into Egypt, and the Egyptian into Assyria, and the Egyptians shall serve with the Assyrians. In that day shall Israel be the third with Egypt and with Assyria, even a blessing in the midst of the land: Whom the LORD of hosts shall bless, saying, Blessed be Egypt my people, and Assyria the work of my hands, and Israel mine inheritance.",
    category: "heilsgeschichte",
    context: "Isaiah prophesies of future unity and blessing among former enemies through God's healing power.",
    reflection: "How does God's vision of reconciliation and unity challenge your view of current divisions?",
    challenge: "Take a step toward reconciliation with someone or some group you've considered an 'enemy.'"
  },
  {
    id: "17",
    book: "Genesis",
    chapter: 15,
    verse: 6,
    text: "And he believed in the LORD; and he counted it to him for righteousness.",
    category: "faith",
    context: "Abraham's faith in God's promise of posterity is highlighted as a model of righteousness.",
    reflection: "What promise from God are you trying to trust right now?",
    challenge: "Take one small step today that demonstrates your trust in God's promises."
  },
  {
    id: "18",
    book: "Genesis",
    chapter: 17,
    verse: 7,
    text: "And I will establish my covenant between me and thee and thy seed after thee in their generations for an everlasting covenant, to be a God unto thee, and to thy seed after thee.",
    category: "covenant",
    context: "God confirms His everlasting covenant with Abraham and his descendants.",
    reflection: "What does it mean to you that God's covenant is generational and eternal?",
    challenge: "Talk with a family member about how you each can honor God's covenant together."
  },
  {
    id: "19",
    book: "Psalm",
    chapter: 27,
    verse: 4,
    text: "One thing have I desired of the LORD, that will I seek after; that I may dwell in the house of the LORD all the days of my life...",
    category: "temple",
    context: "David expresses his deep desire to be in the presence of God continually.",
    reflection: "How does your desire for God's presence influence your daily actions?",
    challenge: "Set aside time for quiet reflection as if you were in God’s holy house."
  },
  {
    id: "20",
    book: "Exodus",
    chapter: 25,
    verse: 8,
    text: "And let them make me a sanctuary; that I may dwell among them.",
    category: "temple",
    context: "God commands the Israelites to build a tabernacle so His presence can be among them.",
    reflection: "What can you do to create a holy space for God in your life?",
    challenge: "Clean and dedicate a space in your home where you can feel closer to God."
  },
  {
    id: "21",
    book: "Genesis",
    chapter: 22,
    verse: 8,
    text: "And Abraham said, My son, God will provide himself a lamb for a burnt offering...",
    category: "faith",
    context: "Abraham demonstrates unwavering trust in God's provision during a difficult test.",
    reflection: "How can Abraham’s example help you trust God in times of uncertainty?",
    challenge: "Write down a fear you're facing and a prayer for God’s provision."
  },
  {
    id: "22",
    book: "Deuteronomy",
    chapter: 6,
    verse: 5,
    text: "And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might.",
    category: "covenant",
    context: "Moses summarizes the heart of Israel's covenantal relationship with God.",
    reflection: "What part of your heart or soul do you hold back from God?",
    challenge: "Choose one way to love God more fully in action today."
  },
  {
    id: "23",
    book: "Isaiah",
    chapter: 2,
    verse: 3,
    text: "And many people shall go and say, Come ye, and let us go up to the mountain of the LORD...",
    category: "temple",
    context: "Isaiah envisions a future where nations seek truth and peace in the temple of God.",
    reflection: "What draws you to God's temple today?",
    challenge: "Invite someone to experience God's house or a spiritual place with you."
  },
  {
    id: "24",
    book: "Psalm",
    chapter: 84,
    verse: 10,
    text: "For a day in thy courts is better than a thousand...",
    category: "temple",
    context: "The psalmist treasures being in God's house above any worldly privilege.",
    reflection: "How do you show that you value God’s presence above other things?",
    challenge: "Fast from a worldly distraction and replace that time with worship or prayer."
  },
  {
    id: "25",
    book: "Joshua",
    chapter: 1,
    verse: 9,
    text: "Have not I commanded thee? Be strong and of a good courage...",
    category: "faith",
    context: "God encourages Joshua as he takes leadership, promising His continued presence.",
    reflection: "How can God’s presence strengthen your courage today?",
    challenge: "Face a fear or challenge today with prayer and courage in God."
  },
  {
    id: "26",
    book: "Numbers",
    chapter: 23,
    verse: 19,
    text: "God is not a man, that he should lie; neither the son of man, that he should repent...",
    category: "faith",
    context: "Balaam affirms God's unchanging reliability when blessing Israel.",
    reflection: "How does God's unchanging nature increase your trust in Him?",
    challenge: "List three things you know God will always be faithful in."
  },
  {
    id: "27",
    book: "Exodus",
    chapter: 24,
    verse: 7,
    text: "All that the LORD hath said will we do, and be obedient.",
    category: "covenant",
    context: "Israel formally accepts God's covenant, pledging obedience to His law.",
    reflection: "What commitment have you made to God that you can renew today?",
    challenge: "Make a visible reminder of a covenant you want to honor more fully."
  },
  {
    id: "28",
    book: "Psalm",
    chapter: 46,
    verse: 1,
    text: "God is our refuge and strength, a very present help in trouble.",
    category: "faith",
    context: "A song of assurance in God’s protection during chaos and hardship.",
    reflection: "Where do you need God's refuge in your life right now?",
    challenge: "Write a short prayer asking for strength in a specific challenge."
  },
  {
    id: "29",
    book: "2 Chronicles",
    chapter: 7,
    verse: 16,
    text: "For now have I chosen and sanctified this house, that my name may be there for ever...",
    category: "temple",
    context: "God speaks to Solomon after the dedication of the temple, confirming His presence there.",
    reflection: "What does it mean for a space to be sanctified by God's presence?",
    challenge: "Enter a house of worship this week and listen quietly for God's voice."
  },
  {
    id: "30",
    book: "Isaiah",
    chapter: 40,
    verse: 31,
    text: "But they that wait upon the LORD shall renew their strength...",
    category: "faith",
    context: "Isaiah offers a promise of renewal to those who patiently rely on God.",
    reflection: "What might God be trying to renew in you as you wait on Him?",
    challenge: "Practice quiet waiting—go for a walk or sit in silence with God for 10 minutes."
  },
  {
    id: "31",
    book: "Deuteronomy",
    chapter: 7,
    verse: 9,
    text: "Know therefore that the LORD thy God, he is God, the faithful God, which keepeth covenant and mercy...",
    category: "covenant",
    context: "Moses emphasizes God's consistency in keeping His promises across generations.",
    reflection: "How does God’s faithfulness encourage you to keep your end of the covenant?",
    challenge: "Record one promise God has kept in your life, and share it with someone close to you."
  }  
]; 