export const EVENT_CATEGORIES = [
  'All',
  'Music',
  'Design & Tech',
  'Art & Culture',
  'Literature',
  'Food & Culinary',
  'Workshops',
  'Cinema & Theatre'
];

export const INITIAL_EVENTS = [
  {
    id: 'delhi-type-salon-2026',
    title: 'Delhi Typographic Salon & Letterpress Expo',
    tagline: 'Three days of hot metal, wood type, and contemporary Indic scripts.',
    description: 'An intimate gathering of type designers, printmakers, and editorial designers celebrating the physical tactile beauty of letterforms. Experience live casting demonstrations, rare Urdu and Devanagari wood type specimen books, and hands-on poster printing sessions on vintage Heidelberg and Vandercook cylinder presses.',
    category: 'Design & Tech',
    date: '2026-11-10',
    startTime: '10:00',
    endTime: '18:30',
    venue: {
      name: 'Triveni Kala Sangam (Shri Ram Basement Gallery)',
      address: '205 Tansen Marg, Mandi House',
      city: 'New Delhi',
      mapUrl: 'https://maps.google.com/?q=Triveni+Kala+Sangam+New+Delhi'
    },
    price: 650,
    isFree: false,
    totalSeats: 90,
    seatsLeft: 14,
    featured: true,
    featuredTier: 'primary',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Akshar Type Collective',
      role: 'Archive & Foundational Guild',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '10:00 AM', title: 'Curator Welcome & Keynote: The Lost Matrices of Old Delhi', description: 'Examining century-old foundry matrices rescued from Chawri Bazaar.' },
      { time: '12:00 PM', title: 'Live Monotype Casting & Proofing Session', description: 'Hands-on type setting using lead and cherry wood blocks.' },
      { time: '02:30 PM', title: 'Panel: Designing for 11 Indic Scripts Simultaneously', description: 'Led by senior foundries on modern open-type font engineering.' },
      { time: '05:00 PM', title: 'Poster Pull & Broadside Swap', description: 'Every attendee prints and takes home a limited two-color letterpress broadsheet.' }
    ],
    speakers: [
      { name: 'Sunita Rao', role: 'Type Director', company: 'Ek Type Foundry', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
      { name: 'Devendra Patil', role: 'Master Letterpress Printer', company: 'Bombay Broadside Press', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
      { name: 'Kabeer Akhtar', role: 'Archivist & Calligrapher', company: 'Nastaliq Studies Delhi', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Do I need printmaking or typography experience to attend?', answer: 'Not at all. Sessions are curated for both inquisitive novices and seasoned graphic practitioners.' },
      { question: 'Are materials included in the registration fee?', answer: 'Yes, heavy 300gsm cotton rag paper, block inks, composing sticks, and an archival print folder are provided.' },
      { question: 'Is the venue wheelchair accessible?', answer: 'Yes, Triveni Kala Sangam has ramp access to all ground and basement gallery spaces.' }
    ],
    tags: ['Typography', 'Letterpress', 'Design', 'Printmaking']
  },
  {
    id: 'monsoon-ambient-and-modular-salon',
    title: 'Monsoon Drone & Modular Synthesis Gathering',
    tagline: 'Deep listening, analog patch cords, and spatial acoustics in an abandoned mill.',
    description: 'An evening of unbroken quadraphonic soundscapes, tactile analog synthesis, and microtonal drone experiments. Musicians perform in the center of the textile hall surrounded by listeners on floor bolsters. Bring an open ear and your favorite field recording.',
    category: 'Music',
    date: '2026-11-08',
    startTime: '19:00',
    endTime: '23:30',
    venue: {
      name: 'The Great Eastern Mill Warehouse',
      address: 'Dr. Ambedkar Road, Byculla',
      city: 'Mumbai',
      mapUrl: 'https://maps.google.com/?q=The+Great+Eastern+Mills+Byculla+Mumbai'
    },
    price: 850,
    isFree: false,
    totalSeats: 120,
    seatsLeft: 6,
    featured: true,
    featuredTier: 'secondary',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Sub-Bass & Spatial Research',
      role: 'Acoustic Arts Society',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '07:00 PM', title: 'Tuning the Room & Tape Loop Installation', description: 'Four reel-to-reel tape decks looping fragments across the high rafters.' },
      { time: '08:15 PM', title: 'Bhairav Transmuted: Indian Classical Drone Meets Buchla 200e', description: 'Live modular synthesis intertwined with tanpura harmonics.' },
      { time: '10:00 PM', title: 'Quadraphonic Spatial Improvisation', description: 'All artists patch simultaneously into the 4-corner horn system.' }
    ],
    speakers: [
      { name: 'Arjun Sen', role: 'Sound Sculptor', company: 'Modular India', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' },
      { name: 'Nandini Ghosh', role: 'Electro-Acoustic Composer', company: 'Independent', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Is seating provided or floor seating only?', answer: 'Floor seating with firm yoga bolsters and carpets is standard; folding chairs are available upon request.' },
      { question: 'Will it be dangerously loud?', answer: 'No. This is ambient and micro-dynamic listening; sound levels hover between 65-78dB.' }
    ],
    tags: ['Modular', 'Ambient', 'Synthesizers', 'Deep Listening']
  },
  {
    id: 'bengaluru-craft-fermentation-forum',
    title: 'Wild Fermentation & Foraged Yeasts Symposium',
    tagline: 'Koji, wild meads, sourdough micro-flora, and pickled mountain berries.',
    description: 'A sensory gathering bringing together wild fermenters, sourdough bakers, coffee processors, and beverage tinkerers. Learn how wild lactobacillus strains and ambient fungal cultures transform humble local grains into complex umami-dense delicacies.',
    category: 'Food & Culinary',
    date: '2026-11-15',
    startTime: '11:00',
    endTime: '17:00',
    venue: {
      name: 'The Greenhouse at Bangalore Club',
      address: 'Field Marshal Cariappa Rd, Ashok Nagar',
      city: 'Bengaluru',
      mapUrl: 'https://maps.google.com/?q=Bangalore+Club+Residency+Road'
    },
    price: 1200,
    isFree: false,
    totalSeats: 60,
    seatsLeft: 19,
    featured: true,
    featuredTier: 'secondary',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Ferment Guild Karnataka',
      role: 'Culinary Biology Collective',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '11:00 AM', title: 'Taming Wild Microbes: From Kudremukh Moss to Yeast Starters', description: 'Isolation techniques for native brewing strains.' },
      { time: '01:00 PM', title: 'Fermented Lunch Feast', description: 'Five courses showcasing tempeh, lacto-fermented raw mango, and aged miso.' },
      { time: '03:00 PM', title: 'Koji-Kin Masterclass: Cultivating Aspergillus oryzae on Red Rice', description: 'Take home an inoculated cedar koji tray.' }
    ],
    speakers: [
      { name: 'Chef Tarun Sridhar', role: 'Fermentation Specialist', company: 'Soil & Koji Lab', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80' },
      { name: 'Dr. Meera Nambiar', role: 'Microbiologist', company: 'IISc Bio-Archive', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Is food included in the registration?', answer: 'Yes! A 5-course fermented lunch paired with wild non-alcoholic shrubs and kombuchas is included.' },
      { question: 'Do I get to take ferments home?', answer: 'Yes, each attendee receives a living sourdough starter and a seeded koji tray.' }
    ],
    tags: ['Culinary', 'Fermentation', 'Gastronomy', 'Microbiology']
  },
  {
    id: 'independent-cinema-broadsheet-retreat',
    title: 'Celluloid & 16mm Guerilla Film Salon',
    tagline: 'Shooting, hand-processing, and screening physical film stock under starlight.',
    description: 'A 2-day hands-on summit for independent filmmakers refusing the digital hegemony. Participants load 16mm Bolex cameras, shoot silent shorts, soup the film in eco-friendly caffenol baths, and project workprints on a white canvas wall.',
    category: 'Cinema & Theatre',
    date: '2026-11-28',
    startTime: '14:00',
    endTime: '22:00',
    venue: {
      name: 'Kala Ghoda Open Courtyard',
      address: 'Rampart Row, Fort',
      city: 'Mumbai',
      mapUrl: 'https://maps.google.com/?q=Kala+Ghoda+Fort+Mumbai'
    },
    price: 0,
    isFree: true,
    totalSeats: 80,
    seatsLeft: 31,
    featured: false,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Grain & Silver Cinema Club',
      role: 'Analog Film Cooperative',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '02:00 PM', title: 'Loading the Bolex & Mechanical Maintenance', description: 'Understanding spring-wound motors and manual exposure meters.' },
      { time: '04:00 PM', title: 'Urban Shooting Sprint (Fort District)', description: '3-minute rolls per duo capturing architectural light.' },
      { time: '07:00 PM', title: 'Bucket Darkroom: Caffenol Reversal Processing', description: 'Developing using instant coffee, washing soda, and vitamin C.' },
      { time: '09:00 PM', title: 'Open Projection & Live Score', description: 'Screening wet prints with improvised percussion.' }
    ],
    speakers: [
      { name: 'Rohan Deshmukh', role: 'Cinematographer', company: 'FTII Alum', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Why is this event free?', answer: 'Supported by the Independent Arts Council to foster celluloid literacy. Registration is mandatory to reserve seats.' }
    ],
    tags: ['16mm', 'Celluloid', 'Cinema', 'Darkroom']
  },
  {
    id: 'chandigarh-brutalist-sketch-walk',
    title: 'Brutalist Concrete: Corbusier Sketch & Theory Walk',
    tagline: 'Measuring cast shadows, raw shuttering patterns, and modular proportions.',
    description: 'An architectural sketching and historical lecture through Sector 1 Capitol Complex. Armed with heavy paper sketchbooks and 6B graphite, explore how Le Corbusier and Pierre Jeanneret translated climate, light, and reinforced concrete into a monumental civic identity.',
    category: 'Art & Culture',
    date: '2026-11-22',
    startTime: '07:30',
    endTime: '13:00',
    venue: {
      name: 'Capitol Complex Assembly Plaza',
      address: 'Sector 1',
      city: 'Chandigarh',
      mapUrl: 'https://maps.google.com/?q=Capitol+Complex+Chandigarh'
    },
    price: 450,
    isFree: false,
    totalSeats: 40,
    seatsLeft: 11,
    featured: false,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Urban Monolith Society',
      role: 'Heritage Research Group',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '07:30 AM', title: 'Dawn Light on the High Court Portico', description: 'Perspective rendering and sun-shade geometry.' },
      { time: '10:00 AM', title: 'The Open Hand Monument & Acoustic Trench', description: 'Critique session on civic symbolism and raw formwork textures.' },
      { time: '12:00 PM', title: 'Chai & Sketchbook Review at Neelam Cinema Lounge', description: 'Group pin-up of all morning drawings.' }
    ],
    speakers: [
      { name: 'Prof. Ananya Varma', role: 'Architectural Historian', company: 'CCA Chandigarh', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Do I need permits to enter the Capitol Complex?', answer: 'Official security clearance for the group is included with your ticket; carry government photo ID.' }
    ],
    tags: ['Architecture', 'Brutalism', 'Sketching', 'Corbusier']
  },
  {
    id: 'himalayan-risograph-and-zine-fair',
    title: 'Himalayan Risograph & Micro-Press Fair',
    tagline: 'Vibrant soy inks, tactile papers, and radical self-published zines.',
    description: 'A two-day gathering of over 40 print collectives, risograph operators, zine makers, and lyric essayists. Discover limited-run artist books, screenprinted posters, and community publications rarely distributed through mainstream bookstores.',
    category: 'Workshops',
    date: '2026-11-18',
    startTime: '11:00',
    endTime: '19:00',
    venue: {
      name: 'Tibetan Heritage Art Studio',
      address: 'Jogiwara Road, McLeod Ganj',
      city: 'Dharamshala',
      mapUrl: 'https://maps.google.com/?q=McLeod+Ganj+Dharamshala'
    },
    price: 0,
    isFree: true,
    totalSeats: 150,
    seatsLeft: 72,
    featured: false,
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Dhauladhar Zine Co-op',
      role: 'Publishing Guild',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '11:00 AM', title: 'Fair Doors Open: 40 Independent Tables', description: 'Browse and trade artist publications.' },
      { time: '02:00 PM', title: 'Workshop: 2-Drum Riso Separation Mastery', description: 'Color overlay chemistry with fluorescent pink and teal.' },
      { time: '05:00 PM', title: 'Readings from Mountain Pamphlets', description: 'Poetry and non-fiction readings by local writers.' }
    ],
    speakers: [
      { name: 'Tenzin Norbu', role: 'Publisher', company: 'High Pass Press', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Can I bring my own zines to sell or trade?', answer: 'Yes! There is an open swap table for community submissions.' }
    ],
    tags: ['Zines', 'Risograph', 'Self-Publishing', 'Print']
  },
  {
    id: 'kerala-monsoon-ragas-and-mridangam-retreat',
    title: 'Temple Bells & Tala: Carnatic Rhythmic Intensive',
    tagline: 'Deep dive into complex korvais, konnakol recitation, and mridangam phrasing.',
    description: 'An acoustic immersion set in a centuries-old courtyard. Master percussionists deconstruct rhythmic architectures, intricate mathematical polyrhythms, and vocalized konnakol syllables under the canopy of ancient teak pillars.',
    category: 'Music',
    date: '2026-11-25',
    startTime: '09:00',
    endTime: '16:30',
    venue: {
      name: 'Edappally Heritage Nalukettu',
      address: 'Near Changampuzha Park, Edappally',
      city: 'Kochi',
      mapUrl: 'https://maps.google.com/?q=Edappally+Kochi'
    },
    price: 900,
    isFree: false,
    totalSeats: 50,
    seatsLeft: 8,
    featured: false,
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Kerala Rhythm Collective',
      role: 'Percussion Conservatoire',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '09:00 AM', title: 'The Vocal Beat: Konnakol Foundations', description: 'Translating complex 7-beat and 9-beat cycles into spoken rhythmic poetry.' },
      { time: '11:30 AM', title: 'Mridangam Harmonics & Pitch Resonance', description: 'The craft of black tuning paste (satham) and tone projection.' },
      { time: '02:30 PM', title: 'Open Tala Jugalbandi', description: 'Collaborative rhythmic duel with attendees tapping along.' }
    ],
    speakers: [
      { name: 'Guru K. V. Ramanathan', role: 'Master Mridangist', company: 'Trichur Sangeetha Sabha', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Do I need to own a drum to participate?', answer: 'No. Rhythmic concepts are taught vocally via konnakol; practice pads will be provided.' }
    ],
    tags: ['Carnatic', 'Percussion', 'Rhythm', 'Classical']
  },
  {
    id: 'urba-botany-and-dyeing-symposium',
    title: 'Indigo, Madder & Myrobalan: Natural Vat Dyeing',
    tagline: 'Fermenting living indigo vats and extracting pigments from temple marigolds.',
    description: 'Step into the alchemy of non-toxic natural dyeing. Learn how to maintain a reduced fructose-indigo vat, mordant organic cotton and tussar silks with harda fruit, and extract earthy yellows and terracotta reds from discarded wedding garlands.',
    category: 'Workshops',
    date: '2026-11-12',
    startTime: '10:00',
    endTime: '16:00',
    venue: {
      name: 'The Living Loom Yard',
      address: 'Sunder Nursery Craft Courtyard, Nizamuddin',
      city: 'New Delhi',
      mapUrl: 'https://maps.google.com/?q=Sunder+Nursery+New+Delhi'
    },
    price: 1100,
    isFree: false,
    totalSeats: 35,
    seatsLeft: 5,
    featured: false,
    image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Nil & Soil Studio',
      role: 'Ecological Textile Guild',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '10:00 AM', title: 'Vat Awakening: Organic Fermentation Chemistry', description: 'Testing pH and reducing sugars without synthetic hydrosulphite.' },
      { time: '12:00 PM', title: 'Shibori & Clamp Resists on Khadi', description: 'Precision folding techniques for geometric resists.' },
      { time: '02:30 PM', title: 'The Deep Dip: 5-Dip Indigo Oxidation', description: 'Watching pale green transform to vivid cobalt under oxygen.' }
    ],
    speakers: [
      { name: 'Pooja Kashyap', role: 'Dye Chemist & Weaver', company: 'Nil Atelier', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'What should I wear?', answer: 'Wear clothes you do not mind staining or an apron; natural dyes are permanent.' },
      { question: 'Can I bring my own garments to dye?', answer: 'Yes, up to 2 small pre-washed 100% natural fiber garments (cotton, linen, silk).' }
    ],
    tags: ['Textiles', 'Indigo', 'Natural Dye', 'Craft']
  },
  {
    id: 'speculative-fiction-writers-conclave',
    title: 'Monsoon Cybernetics & South Asian Speculative Fiction',
    tagline: 'Worldbuilding, climate-futurism, and ancient folklore reimagined in prose.',
    description: 'An intensive seminar on penning speculative narratives rooted in non-Western cosmologies. Discuss solar-punk infrastructures, algorithmic deities, monsoon economics, and linguistic drift with prominent authors and literary editors.',
    category: 'Literature',
    date: '2026-11-16',
    startTime: '15:00',
    endTime: '20:30',
    venue: {
      name: 'Atta Galatta Cultural Center',
      address: '134 KHB Colony, 5th Block, Koramangala',
      city: 'Bengaluru',
      mapUrl: 'https://maps.google.com/?q=Atta+Galatta+Bangalore'
    },
    price: 350,
    isFree: false,
    totalSeats: 70,
    seatsLeft: 22,
    featured: false,
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Yantra Katha Guild',
      role: 'Literary Society',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '03:00 PM', title: 'De-centering Western Sci-Fi Tropes', description: 'Why space operas need not mimic 18th century naval imperialism.' },
      { time: '05:00 PM', title: 'Worldbuilding Clinic: The Drowned Megacities', description: 'Interactive exercise in economic and ecological coherence.' },
      { time: '07:30 PM', title: 'Twilight Flash Fiction Readings', description: 'Five-minute readings from newly drafted speculative shorts.' }
    ],
    speakers: [
      { name: 'Dr. Siddharth Sen', role: 'Author & Theorist', company: 'South Asian Futurisms', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Is this only for published writers?', answer: 'No, aspiring writers and curious readers are equally welcome.' }
    ],
    tags: ['Literature', 'SciFi', 'Worldbuilding', 'Writing']
  },
  {
    id: 'single-estate-coffee-cupping-and-roasting',
    title: 'Western Ghats Microlots: Single-Estate Coffee Cupping',
    tagline: 'Anaerobic naturals, peaberry varieties, and sensory aroma profiling.',
    description: 'A sensory journey through high-elevation shade-grown coffees from Chikmagalur, Coorg, and Araku Valley. Blind-cup 12 rare microlot lots, score brightness and body on standard SCA protocol sheets, and explore roast curve telemetry.',
    category: 'Food & Culinary',
    date: '2026-11-19',
    startTime: '08:30',
    endTime: '12:00',
    venue: {
      name: 'Araku Flagship Roastery Lab',
      address: '12th Main Road, Indiranagar',
      city: 'Bengaluru',
      mapUrl: 'https://maps.google.com/?q=Araku+Coffee+Indiranagar'
    },
    price: 750,
    isFree: false,
    totalSeats: 30,
    seatsLeft: 9,
    featured: false,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Estate Origins Coffee Lab',
      role: 'Sensory Guild',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '08:30 AM', title: 'Palate Calibrations & Fragrance Scoring', description: 'Distinguishing floral aldehydes from fermentation esters.' },
      { time: '09:45 AM', title: 'The Break & The Slurp: Blind Cupping Table', description: 'SCA standard tasting across 12 estate samples.' },
      { time: '11:15 AM', title: 'Q&A with Regenerative Estate Growers', description: 'Shade trees, soil carbon, and harvest processing methods.' }
    ],
    speakers: [
      { name: 'Bhavna Karia', role: 'Licensed Q-Grader', company: 'Ghats Sensory Guild', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Will breakfast be served?', answer: 'Light sourdough pastries and mineral water for palate cleansing are included.' }
    ],
    tags: ['Coffee', 'Cupping', 'Gastronomy', 'Western Ghats']
  },
  {
    id: 'koodiyattam-sanskrit-theatre-masterclass',
    title: 'Koodiyattam: 2000 Years of Sanskrit Gesture & Eye Theatre',
    tagline: 'Facial muscle isolation, mudra codices, and timeless Kerala stagecraft.',
    description: 'An extraordinary masterclass taught by living exponents of Koodiyattam—the oldest surviving classical theatre tradition in humanity recognized by UNESCO. Discover the subtle ocular movements (netra abhinaya) that convey cosmic wrath, tenderness, and meditative silence.',
    category: 'Cinema & Theatre',
    date: '2026-11-21',
    startTime: '17:00',
    endTime: '21:00',
    venue: {
      name: 'Margi Theatre Conservatoire',
      address: 'Near Fort High School',
      city: 'Thiruvananthapuram',
      mapUrl: 'https://maps.google.com/?q=Margi+Theatre+Trivandrum'
    },
    price: 0,
    isFree: true,
    totalSeats: 65,
    seatsLeft: 18,
    featured: false,
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Margi Heritage Theatre Foundation',
      role: 'Sanskrit Stage Trust',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '05:00 PM', title: 'Netra Sadhana: The Anatomy of the Actor’s Gaze', description: 'Centering exercises and ocular micro-expressions.' },
      { time: '06:30 PM', title: 'Deciphering the Hasta Lakshana Deepika (Mudra Codices)', description: '24 root root hand gestures and their syntactic permutations.' },
      { time: '08:00 PM', title: 'Live Performance Excerpt: Torana Yuddham', description: 'With resonant mizhavu drum accompaniment.' }
    ],
    speakers: [
      { name: 'Kalamandalam Madhu', role: 'Koodiyattam Acharya', company: 'Margi Repertory', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Is prior dance or acting experience required?', answer: 'No. The seminar is tailored for performing arts enthusiasts, directors, and researchers.' }
    ],
    tags: ['Theatre', 'Koodiyattam', 'Sanskrit', 'UNESCO']
  },
  {
    id: 'kolkata-tramway-and-print-heritage-walk',
    title: 'College Street Boi-Para & Tramway Typographic Walk',
    tagline: 'Wooden bookstalls, tin signs, and century-old lithograph presses.',
    description: 'Traverse the legendary lanes of College Street (Boi-Para)—the largest second-hand book market in the world. Ride the vintage wooden trams, photograph hand-painted enameled signs, and visit underground letterpress shops that still print poetry chapbooks on handmade paper.',
    category: 'Art & Culture',
    date: '2026-11-14',
    startTime: '08:00',
    endTime: '13:00',
    venue: {
      name: 'College Square Fountain Gate',
      address: 'Bankim Chatterjee Street, Bowbazar',
      city: 'Kolkata',
      mapUrl: 'https://maps.google.com/?q=College+Square+Kolkata'
    },
    price: 500,
    isFree: false,
    totalSeats: 30,
    seatsLeft: 7,
    featured: false,
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Calcutta Tram & Print Society',
      role: 'Urban Archival Trust',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '08:00 AM', title: 'Historic Tram Depot Boarding & Bell Signals', description: 'Chartered route across the old university corridor.' },
      { time: '10:00 AM', title: 'Alleyway Letterpress Discovery', description: 'Visiting century-old treadle presses in hidden lanes.' },
      { time: '11:45 AM', title: 'Infusion Coffee & Debates at Indian Coffee House', description: 'Traditional round-table discussion over hot black brew.' }
    ],
    speakers: [
      { name: 'Dr. Debabrata Roy', role: 'Social Historian', company: 'Presidency University', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Are tram tickets included?', answer: 'Yes, chartered heritage tram fare and Coffee House refreshments are covered.' }
    ],
    tags: ['Kolkata', 'Print History', 'Heritage', 'Trams']
  },
  {
    id: 'sindh-ajrak-block-printing-colloquium',
    title: 'Geometries of Kutch: Ajrak Mud-Resist Block Printing',
    tagline: '16 stages of washing, indigo dipping, and pomegranate peel dyeing.',
    description: 'An authentic masterclass in Ajrakhpur with national award-winning Khatri block printers. Explore why authentic Ajrakh takes 21 days of sun, river water, and camel dung conditioning to achieve its celestial stars and indigo-crimson equilibrium.',
    category: 'Workshops',
    date: '2026-11-24',
    startTime: '09:30',
    endTime: '17:30',
    venue: {
      name: 'Khatri Artisan Courtyard',
      address: 'Ajrakhpur, Post Dhamadka',
      city: 'Bhuj, Kutch',
      mapUrl: 'https://maps.google.com/?q=Ajrakhpur+Bhuj'
    },
    price: 1400,
    isFree: false,
    totalSeats: 25,
    seatsLeft: 4,
    featured: false,
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Kutch Artisans Collective',
      role: 'Master Crafts Guild',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '09:30 AM', title: 'Introduction to Teak Blocks & Porous Mortar', description: 'Carving balance and mathematical repeat symmetries.' },
      { time: '11:30 AM', title: 'Gach Stamping (Lime & Arabic Gum Resist)', description: 'Precision stamping to preserve pure white lines.' },
      { time: '02:30 PM', title: 'Alizarin Boiling in Copper Cauldron', description: 'Developing the characteristic deep madder red.' }
    ],
    speakers: [
      { name: 'Ismail Mohammed Khatri', role: 'Master Ajrakh Craftsman', company: 'Ajrakhpur Guild', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Will we make our own textile piece?', answer: 'Yes, every participant stamps and finishes a pure mulberry silk pocket square.' }
    ],
    tags: ['Ajrakh', 'Block Printing', 'Kutch', 'Handloom']
  },
  {
    id: 'contemporary-clay-and-wood-firing-symposium',
    title: 'Anagama Wood Firing & Wild Earth Ceramics',
    tagline: '72 hours of stoking split pine, fly ash glazes, and wabi-sabi kiln openings.',
    description: 'Camp under the pines in the Kangra valley as a traditional multi-chambered Anagama kiln reaches 1300°C. Experience how falling pine ash melts into glass on raw stoneware, leaving unpredictable flame marks and flashing colors dictated solely by fire and wind.',
    category: 'Art & Culture',
    date: '2026-11-27',
    startTime: '10:00',
    endTime: '18:00',
    venue: {
      name: 'Andretta Pottery & Craft Society',
      address: 'Palanpur-Andretta Road, Kangra',
      city: 'Andretta',
      mapUrl: 'https://maps.google.com/?q=Andretta+Pottery+Himachal'
    },
    price: 1500,
    isFree: false,
    totalSeats: 30,
    seatsLeft: 12,
    featured: false,
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Andretta Ceramic Studio',
      role: 'Clay Guild',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '10:00 AM', title: 'Wood Stoking Rhythms & Pyrometric Cones', description: 'Reading chimney draft and flame color.' },
      { time: '01:00 PM', title: 'Wheel Throwing with Wild Riverbed Clay', description: 'Forming unglazed vessels for atmospheric kilns.' },
      { time: '04:00 PM', title: 'Unloading the Cool Chamber: Ash Melt Reveals', description: 'First inspection of the previous firing results.' }
    ],
    speakers: [
      { name: 'Mansimran Singh', role: 'Ceramicist', company: 'Andretta Pottery', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Is accommodation provided in Andretta?', answer: 'We coordinate homestays with village artist families upon registration.' }
    ],
    tags: ['Ceramics', 'Pottery', 'Anagama', 'Craft']
  },
  {
    id: 'bengal-folk-ballads-and-baul-philosophy',
    title: 'Mystics of the Soil: Baul Philosophy & Ektara Evening',
    tagline: 'Dehatatva songs, riverside poetry, and the unadorned human voice.',
    description: 'An open-air dusk gathering dedicated to the Baul musical tradition of Bengal. Listen to the resonant twang of the ektara, the dubki drum, and unmetered spiritual songs probing love, mortality, and the cosmos without religious dogma.',
    category: 'Music',
    date: '2026-11-17',
    startTime: '18:00',
    endTime: '22:00',
    venue: {
      name: 'Khoai Sonajhurir Haat Forest Clearing',
      address: 'Prantik, Santiniketan',
      city: 'Santiniketan',
      mapUrl: 'https://maps.google.com/?q=Sonajhuri+Forest+Santiniketan'
    },
    price: 0,
    isFree: true,
    totalSeats: 100,
    seatsLeft: 44,
    featured: false,
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Santiniketan Baul Ashram',
      role: 'Oral Folk Foundation',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '06:00 PM', title: 'Dusk Ektara Invocations', description: 'Opening melodies as lanterns are lit among the Sal trees.' },
      { time: '07:30 PM', title: 'Deconstructing Lalon Shah’s Verses', description: 'Bilingual translation and philosophical context.' },
      { time: '09:30 PM', title: 'Community Singing & Baul Dance (Nritya)', description: 'Celebratory circular choral performance.' }
    ],
    speakers: [
      { name: 'Parvathy Baul', role: 'Baul Practitioner & Custodian', company: 'Sanatan Siddhashram', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Is translation available for non-Bengali speakers?', answer: 'Yes, printed booklet translations in English and Hindi are distributed at entrance.' }
    ],
    tags: ['Folk', 'Baul', 'Acoustic', 'Philosophy']
  },
  {
    id: 'south-asian-graphic-novel-summit',
    title: 'Inks, Frames & Marginalia: Graphic Novel Summit',
    tagline: 'Visual journalism, comic pacing, and sequential storytelling.',
    description: 'A weekend forum gathering graphic novelists, cartoonists, and comic journalists from across the subcontinent. From autobiographical memoirs to political satire, discover the techniques behind page pacing, speech bubble placement, and dynamic panel layouts.',
    category: 'Literature',
    date: '2026-11-23',
    startTime: '10:30',
    endTime: '17:30',
    venue: {
      name: 'Goa State Central Library Auditorium',
      address: 'Patto Centre, Panaji',
      city: 'Goa',
      mapUrl: 'https://maps.google.com/?q=Goa+State+Central+Library+Panaji'
    },
    price: 400,
    isFree: false,
    totalSeats: 90,
    seatsLeft: 38,
    featured: false,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    organizer: {
      name: 'Subcontinent Comics Collective',
      role: 'Publishing Forum',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=240&q=80'
    },
    schedule: [
      { time: '10:30 AM', title: 'The Silent Panel: Storytelling Without Words', description: 'Harnessing gutter space and negative tension.' },
      { time: '01:30 PM', title: 'Inking Styles: Bamboo Quill to Digital Brush', description: 'Live line art demonstration on projection.' },
      { time: '04:00 PM', title: 'Portfolio Review & Pitch Workshop', description: 'Pitching sequential manuscripts to indie publishers.' }
    ],
    speakers: [
      { name: 'Nikhil Merchant', role: 'Graphic Novelist', company: 'Blaft Publications', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' }
    ],
    faqs: [
      { question: 'Can I bring my unpublished portfolio?', answer: 'Yes! Selected portfolios get dedicated 15-minute 1-on-1 critiques.' }
    ],
    tags: ['Comics', 'Graphic Novels', 'Illustration', 'Publishing']
  }
];
