import { createSlice } from "@reduxjs/toolkit";

const ArtSlice = createSlice({
    name:'arts',
    initialState:[
    {
  id: 101,
  name: "Bharatanatyam",
  category: "Dance",
  type: "Classical",
  state: "Tamil Nadu",
  period: "Ancient",

  image: "https://i.pinimg.com/736x/46/af/55/46af55a204d9caab72979411904986d1.jpg",

  shortDescription: "One of the oldest classical dance forms of India, known for its expressive movements.",

  description:"Bharatanatyam is one of the oldest classical dance forms of India, originating in Tamil Nadu. It is known for its fixed upper torso, intricate footwork, expressive hand gestures (mudras), and storytelling through facial expressions, often depicting themes from Hindu mythology and devotional tales.",
  origin: "Developed in ancient temples of Tamil Nadu",

  keyFeatures: [
    "Mudras (hand gestures)",
    "Rhythmic footwork",
    "Expressive facial expressions"
  ],

  performanceStyle: "Solo dance with Carnatic music",

  modernPresence:
    "Performed globally on cultural and academic platforms",

  relatedIds: [2, 5, 7],

  isFavorite: false
},
    {
  id: 102,
  name: "Warli Painting",
  category: "Painting",
  type: "Traditional",
  state: "Maharashtra",
  period: "Ancient Tribal Tradition",

  image: "https://i.pinimg.com/736x/2a/44/49/2a444982677f8d3a22d14ad994aac30d.jpg",

  shortDescription:
    "Tribal painting using simple geometric shapes to depict daily life and nature.",

  description:"Warli Painting is a traditional tribal art form of the Warli community in Maharashtra. It is characterized by simple geometric shapes, dots, and lines to depict everyday life, nature, and rituals, often painted on mud walls using white pigment on a red or ochre background.",
  origin:
    "Practiced by the Warli tribal communities of Maharashtra",

  keyFeatures: [
    "Use of circles, triangles, and lines",
    "Depiction of village life and rituals",
    "White pigment on earthy backgrounds"
  ],

  materialsUsed: [
    "Rice paste",
    "Natural pigments",
    "Mud walls or handmade paper"
  ],

  themes: [
    "Nature",
    "Harvest",
    "Festivals",
    "Community life"
  ],

  modernPresence:
    "Widely used in wall art, home décor, fashion, and exhibitions",

  relatedIds: [15, 25],

  isFavorite: false
},
{
  id: 103,
  name: "Chhau Dance",
  category: "Dance",
  type: "Folk",
  state: "Odisha / Jharkhand",
  period: "Medieval",
  image: "https://www.solitarytraveller.com/wp-content/uploads/2020/06/chhau_dance_banner-min.jpg",
  shortDescription:
    "Martial folk dance known for powerful movements, and reflecting strength.",
  description:"Chhau Dance is a traditional martial and folk dance from Eastern India, mainly Odisha, West Bengal, and Jharkhand. It combines elements of dance, drama, and combat, often performed during festivals, with performers wearing elaborate masks to depict mythological stories and heroic tales.",
    origin:
    "Developed in the tribal regions of Odisha and Jharkhand",
  keyFeatures: [
    "Vigorous movements inspired by martial arts",
    "Use of colorful masks",
    "Narrative dance sequences"
  ],
  performanceStyle:
    "Group dance performances with rhythmic drumming",
  themes: [
    "Mythology",
    "Epic battles",
    "Folk legends"
  ],

  culturalSignificance:
    "Recognized by UNESCO as Intangible Cultural Heritage",

  modernPresence:
    "Performed in culturalFestivals and classical dance platforms",

  relatedIds: [36, 35],

  isFavorite: false
},
    {
  id: 104,
  name: "Kathak",
  category: "Dance",
  type: "Classical",
  state: "North India",
  period: "Medieval",

  image: "https://i.pinimg.com/1200x/00/0a/23/000a23f5d25e8bd5919fedd8aa1c1324.jpg",

  shortDescription: "Classical dance known for fast footwork, spins, showcasing rhythm and precision.",

  description:"Kathak is a classical dance form from North India, known for its intricate footwork, spins, expressive gestures, and storytelling. Traditionally, it narrates mythological tales through rhythm, facial expressions, and graceful movements, often performed to classical Hindustani music.",
  origin: "Northern India temple storytelling traditions",

  keyFeatures: [
    "Fast spins (chakkars)",
    "Ankle bells (ghungroo)",
    "Storytelling movements"
  ],

  performanceStyle: "Solo or group performance",

  modernPresence:
    "Performed in classical festivals and global stages",

  relatedIds: [1, 4],

  isFavorite: false
},
{
  id: 105,
  name: "Hindustani Music",
  category: "Music",
  type: "Classical",
  state: "North India",
  period: "Ancient – Medieval Era",
  image: "https://media.ipassio.com/media/ckeditor_image/2025/06/25/indian-classical-music.jpg",
  shortDescription:
    "Improvisational classical music tradition of North India, known for its expressive melodies.",
  description:"Hindustani Classical Music is the classical music tradition of North India, known for its improvisational style, ragas (melodic frameworks), and talas (rhythmic patterns). It emphasizes vocal and instrumental performances, devotional compositions, and expressive improvisation, reflecting centuries of cultural and musical evolution.",
  origin:
    "Developed from ancient Vedic traditions and medieval court music",
  keyFeatures: [
    "Raga-based improvisation",
    "Flexible and expressive style",
    "Use of alap, bandish, and taan"
  ],

  instruments: [
    "Sitar",
    "Tabla",
    "Sarod",
    "Harmonium"
  ],

  modernPresence:
    "Performed in concerts, festivals, and taught in music academies worldwide",

  relatedIds: [10],

  isFavorite: false
},
{
  id: 106,
  name: "Yakshagana",
  category: "Theatre",
  type: "Folk",
  state: "Karnataka",
  period: "Medieval",

  image: "https://i.pinimg.com/736x/0e/9b/ce/0e9bcea8e6592516685ea50b226d35c7.jpg",

  shortDescription: "A dance-drama with music, dialogue, costumes, blending stroytelling and performance.",

  description:"Yakshagana is a traditional folk theatre form from Karnataka, combining dance, music, dialogue, and elaborate costumes. Performances often depict stories from Hindu epics like the Ramayana and Mahabharata, and are known for vibrant makeup, energetic movements, and rhythmic storytelling.",
  origin: "Temple theatre traditions of Karnataka",

  keyFeatures: [
    "Elaborate costumes",
    "Live music",
    "Mythological storytelling"
  ],

  performanceStyle: "Open-air night performances",

  modernPresence:
    "Performed in culturalFestivals across India",

  relatedIds: [19, 28],

  isFavorite: false
},
    {
  id: 107,
  name: "Kathakali",
  category: "Dance",
  type: "Classical",
  state: "Kerala",
  period: "Medieval",

  image: "https://i.pinimg.com/1200x/64/e0/90/64e090d3569d5de62ee7148d241a4038.jpg",

  shortDescription: "A classical dance-drama known for elaborate costumes and makeup.",

  description:"Kathakali is a classical dance-drama from Kerala, known for its elaborate costumes, vibrant face makeup, and expressive gestures. It combines dance, acting, and music to narrate stories from Hindu epics like the Ramayana and Mahabharata, emphasizing emotion and dramatic storytelling.",
  origin: "Developed in Kerala from ancient temple and folk traditions",

  keyFeatures: [
    "Elaborate facial makeup and headgear",
    "Hand gestures (mudras)",
    "Storytelling through facial expressions"
  ],

  performanceStyle:
    "Dance-drama performed with live percussion and vocal music",

  modernPresence:
    "Performed in culturalFestivals, temples, and international stages",

  relatedIds: [1, 7, 18],

  isFavorite: false
},
    {
  id: 108,
  name: "Manipuri",
  category: "Dance",
  type: "Classical",
  state: "Manipur",
  period: "Ancient",
  image: "https://i.pinimg.com/1200x/4b/7f/78/4b7f78c92514e33ba92aceb559c6e818.jpg",
  shortDescription: "A soft, graceful classical dance rooted in devotion and expressive storytelling.",
  description:"Manipuri Dance is a classical dance form from Manipur, characterized by graceful, fluid movements and devotional themes. Often performed to narrate stories of Lord Krishna and Radha, it emphasizes gentle expressions, circular movements, and traditional costumes, reflecting the cultural heritage of Northeast India.",
   
  origin:
    "Developed in Manipur and associated with Vaishnavism and temple traditions",

  keyFeatures: [
    "Soft, rounded and flowing movements",
    "Minimal facial expressions",
    "Rich, cylindrical costumes (Potloi)"
  ],

  performanceStyle:
    "Group and solo performances centered on devotional themes, especially Ras Lila",

  modernPresence:
    "Performed at classical dance festivals and cultural events in India and internationally",

  relatedIds: [1, 3, 4, 5],

  isFavorite: false
},
    {
  id: 109,
  name: "Mohiniyattam",
  category: "Dance",
  type: "Classical",
  state: "Kerala",
  period: "Ancient",
  image: "https://i.pinimg.com/736x/aa/aa/ba/aaaaba41a9d68991c712badaa5d70d32.jpg",
  shortDescription:
    "A classical dance from Kerala known for soft movements and feminine expression.",
  description:
    "Mohiniyattam is a classical dance form from Kerala, known for its graceful, feminine movements and subtle expressions. It typically depicts themes of love and devotion, especially stories of Lord Vishnu, and is performed in flowing white and gold costumes with delicate gestures and gentle footwork.",
     origin:
    "Originated in Kerala and developed under temple and royal patronage",

  keyFeatures: [
    "Soft, swaying body movements (Lasya style)",
    "Minimal makeup with white and gold costume",
    "Expressive eye and hand gestures"
  ],

  performanceStyle:
    "Primarily solo performances focusing on devotional and romantic themes",

  modernPresence:
    "Performed at classical dance festivals, cultural programs, and academic institutions worldwide",

  relatedIds: [1, 3, 6],

  isFavorite: false
},
 {
  id: 110,
  name: "Pattachitra",
  category: "Painting",
  type: "Traditional",
  state: "Odisha",
  period: "Ancient",
  image: "https://www.theartlifegallery.com/blog/wp-content/uploads/2023/07/Image-2-1.jpg",
  shortDescription:
    "A traditional scroll painting depicting mythological stories through detailed illustrations.",

  description:
    "Pattachitra is a traditional Indian painting style from Odisha, characterized by intricate details, mythological themes, and vibrant colors. Painted on cloth (patta) or dried palm leaves, it often depicts stories of Hindu deities like Jagannath, Krishna, and Vishnu, showcasing exquisite craftsmanship and cultural heritage.",
  origin:
    "Developed around the Jagannath Temple region of Odisha",

  keyFeatures: [
    "Bold outlines and intricate detailing",
    "Natural pigments and handmade canvas",
    "Mythological and religious themes"
  ],

  materialsUsed: [
    "Cloth canvas",
    "Natural vegetable dyes",
    "Conch shell powder"
  ],

  themes: [
    "Jagannath cult",
    "Epics and legends",
    "Mythology"
  ],

  culturalSignificance:
    "Integral part of Odisha’s temple culture and ritual traditions",

  modernPresence:
    "Used in wall art, souvenirs, textiles, and global exhibitions",

  relatedIds: [15, 17],

  isFavorite: false
},
    {
  id: 111,
  name: "Sattriya",
  category: "Dance",
  type: "Classical",
  state: "Assam",
  period: "15th Century",
  image: "https://i.pinimg.com/736x/df/10/6b/df106b4d175d23cb139c60659c6d3b15.jpg",
  shortDescription:
    "Classical dance of Assam rooted in Vaishnavite traditions and monastery culture.",
  description:
    "Sattriya Dance is a classical dance form from Assam, originally developed in the 15th–16th century by the saint-scholar Srimanta Sankardev as part of the Vaishnavite monasteries (Sattras). It combines expressive storytelling, graceful movements, and devotional themes, primarily depicting stories of Lord Krishna.",
  origin:
    "Developed in the Vaishnavite monasteries (Satras) of Assam",
  keyFeatures: [
    "Graceful yet powerful movements",
    "Mythological themes from Krishna legends",
    "Distinct costumes and traditional Assamese music"
  ],
  performanceStyle:
    "Originally performed by male monks, now practiced by both men and women",

  modernPresence:
    "Performed on classical stages, culturalFestivals, and academic institutions across India",

  relatedIds: [5, 6, 7],

  isFavorite: false
},
   {
  id: 112,
  name: "Carnatic Classical Music",
  category: "Music",
  type: "Classical",
  state: "South India",
  period: "Ancient – Bhakti Movement",

  image: "https://i.pinimg.com/736x/a8/9b/54/a89b54e0cbfecf98f1215b75f7f86563.jpg",

  shortDescription:
    "A structured and devotional classical music of South India, known for its discipline.",

  description:
    "Carnatic Classical Music is the classical music tradition of South India, known for its structured compositions, intricate rhythmic patterns (tala), and devotional themes. It emphasizes vocal music supported by instruments like the mridangam, veena, and flute, and often features improvisation within the framework of ragas.",
  origin:
    "Rooted in temple traditions and Bhakti movement of South India",

  keyFeatures: [
    "Composition-based performance",
    "Complex rhythmic patterns",
    "Strong devotional focus"
  ],

  instruments: [
    "Veena",
    "Mridangam",
    "Violin",
    "Flute"
  ],

  modernPresence:
    "Popular in sabhas, temple festivals, and global music concerts",

  relatedIds: [9],

  isFavorite: false
},
{
  id: 113,
  name: "Baul Music",
  category: "Music",
  type: "Folk",
  state: "West Bengal",
  period: "Medieval Period",

  image: "https://i.pinimg.com/1200x/72/d3/86/72d3860741d102590121ba8f854136ed.jpg",

  shortDescription:
    "A mystic folk music tradition expressing spiritual philosophy and inner devotion.",

  description:
    "Baul Music is a traditional folk music form from Bengal, performed by Bauls, a group of wandering minstrels. It emphasizes spiritual themes, love, and devotion, often accompanied by simple instruments like the ektara, dotara, and duggi, and is known for its soulful melodies and philosophical lyrics.",
  origin:
    "Evolved among rural communities of Bengal",

  keyFeatures: [
    "Spiritual and philosophical lyrics",
    "Simple melodies with deep meaning",
    "Minimal musical accompaniment"
  ],

  instruments: [
    "Ektara",
    "Dotara",
    "Khamak"
  ],

  modernPresence:
    "Performed at folk festivals, cultural events, and international stages",

  relatedIds: [12],

  isFavorite: false
},
 {
  id: 114,
  name: "Phad Painting",
  category: "Painting",
  type: "Traditional",
  state: "Rajasthan",
  period: "Medieval",
  image: "https://i.pinimg.com/736x/82/dd/bf/82ddbfe1ff3d370596ca298a419b808d.jpg",
  shortDescription:
    "A traditional scroll painting narrating folk epics and legends.",
  description:
    "Phad Painting is a traditional scroll painting from Rajasthan, depicting stories of local deities and folk heroes like Pabuji and Devnarayan. Created on long cloth scrolls using vibrant natural colors, it serves both as a visual storytelling medium and a ritualistic art form performed during festivals and processions.",
  origin:
    "Developed in the Bhilwara region of Rajasthan",

  keyFeatures: [
    "Large scroll format",
    "Sequential storytelling through visuals",
    "Bright natural colors"
  ],

  materialsUsed: [
    "Cloth scroll",
    "Natural vegetable dyes",
    "Handmade brushes"
  ],

  themes: [
    "Folk deities",
    "Heroic legends",
    "Local mythology"
  ],

  culturalSignificance:
    "Serves as a visual aid for traditional folk storytelling traditions",

  modernPresence:
    "Displayed in museums, culturalFestivals, and contemporary décor",

  relatedIds: [26, 23],

  isFavorite: false
},
    {
  id: 115,
  name: "Bihu Music",
  category: "Music",
  type: "Folk",
  state: "Assam",
  period: "Ancient Folk Tradition",

  image: "https://i.pinimg.com/736x/1a/3b/61/1a3b6185098a661438c29eecb8f61b31.jpg",

  shortDescription:
    "Festive folk music celebrating Assamese culture, joy and traditional life.",

  description:
    "Bihu Music is the traditional folk music of Assam associated with the Bihu festival. It features rhythmic songs and dances celebrating the agricultural cycle, love, and community life, often accompanied by instruments like the dhol, pepa (hornpipe), and gogona, creating an energetic and festive atmosphere.",
  origin:
    "Associated with agrarian communities of Assam",

  keyFeatures: [
    "Fast-paced rhythm",
    "Joyful and energetic melodies",
    "Strong connection to seasonal festivals"
  ],

  instruments: [
    "Dhol",
    "Pepa",
    "Gogona"
  ],

  modernPresence:
    "Widely performed during festivals, stage shows, and cultural programs",

  relatedIds: [11],

  isFavorite: false
},
{
  id: 116,
  name: "Lavani",
  category: "Music",
  type: "Folk",
  state: "Maharashtra",
  period: "18th Century",

  image: "https://blackhattalent.com/wp-content/uploads/2024/11/Lavani-Dance-Artists.webp",

  shortDescription:
    "Energetic folk music blending song and dance, performed during celebrations.",

  description:
    "Lavani is a traditional folk dance and music form from Maharashtra, known for its powerful rhythm, expressive gestures, and vibrant costumes. Performed to the beats of the dholki, Lavani often depicts themes of love, social issues, and storytelling, and is a prominent part of Maharashtrian cultural heritage.",
   origin:
    "Developed during the Maratha period",

  keyFeatures: [
    "High-energy performances",
    "Expressive facial expressions",
    "Themes of love, society, and valor"
  ],

  instruments: [
    "Dholki",
    "Harmonium"
  ],

  modernPresence:
    "Seen in stage shows, films, and culturalFestivals",

  relatedIds: [14],

  isFavorite: false
},
{
  id: 117,
  name: "Odissi",
  category: "Dance",
  type: "Classical",
  state: "Odisha",
  period: "Ancient",
  image: "https://i.pinimg.com/736x/9f/6c/4f/9f6c4fdf215e03abefcabe5432edc9c4.jpg",
  shortDescription: "Classical dance famous for sculpturesque poses and fluid movements.",
  description:
    "Odissi Dance is a classical dance form from Odisha, characterized by graceful, fluid movements, intricate gestures (mudras), and expressive storytelling. It often depicts stories of Lord Jagannath, Krishna, and other Hindu deities, combining devotion, rhythm, and lyrical elegance.",
  origin: "Odisha temples and ancient Natya Shastra traditions",
  keyFeatures: [
    "Tribhangi posture (three-body bends)",
    "Sculptural poses inspired by temple carvings",
    "Expressive facial expressions (abhinaya)"
  ],
  performanceStyle:
    "Solo performances with emphasis on devotion and grace, accompanied by Odissi music",

  modernPresence:
    "Performed widely in classical dance festivals across India and abroad",

  relatedIds: [1, 3, 4],

  isFavorite: false
},
    {
  id: 118,
  name: "Madhubani Painting",
  category: "Painting",
  type: "Traditional",
  state: "Bihar",
  period: "Ancient",

  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sVlLc1XrhZXvPk3haP-bMeL0eqlGsZuRbQ&s",

  shortDescription: "A folk painting style with geometric patterns and nature-inspired themes.",

  description:
    "Madhubani Painting is a traditional Indian art form from Bihar, characterized by vibrant colors, intricate patterns, and symbolic motifs. Created using natural dyes on walls, cloth, or paper, it often depicts themes from Hindu mythology, nature, and daily life, reflecting cultural traditions and storytelling.",
  origin: "Mithila region of Bihar",

  keyFeatures: [
    "Geometric patterns",
    "Natural dyes",
    "Mythological themes"
  ],

  performanceStyle: "Wall and canvas painting",

  modernPresence:
    "Used in home décor, fashion, and exhibitions",

  relatedIds: [16, 25],

  isFavorite: false
},
{
  id: 119,
  name: "Koodiyattam",
  category: "Theatre",
  type: "Classical",
  state: "Kerala",
  period: "Ancient (over 2000 years old)",
  image: "https://4cd819aa.delivery.rocketcdn.me/wp-content/uploads/2021/09/Koodiyattam-featured-image.webp",
  shortDescription:
    "Ancient Sanskrit theatre performed in temple spaces of Kerala.",
  description:
    "Koodiyattam is a traditional Sanskrit theatre form from Kerala, recognized as one of the oldest living theatrical traditions in the world. It combines elaborate gestures, facial expressions, and stylized acting to narrate stories from Hindu epics like the Ramayana and Mahabharata, often performed in temple theatres over several days.",
  origin:
    "Developed in Kerala temples and Koothambalams",

  keyFeatures: [
    "Sanskrit drama performance",
    "Highly expressive eye and facial movements",
    "Elaborate costumes and makeup"
  ],

  performanceStyle:
    "Slow-paced theatrical performance focusing on detailed emotional expression",

  themes: [
    "Mythological stories",
    "Epics like Ramayana and Mahabharata",
    "Classical Sanskrit plays"
  ],

  culturalSignificance:
    "Recognized by UNESCO as a Masterpiece of the Oral and Intangible Heritage of Humanity",

  modernPresence:
    "Performed in culturalFestivals, academic institutions, and international theatre stages",

  relatedIds: [3, 18],

  isFavorite: false
},
{
  id: 120,
  name: "Kalamkari",
  category: "Painting",
  type: "Traditional",
  state: "Andhra Pradesh",
  period: "Ancient Textile Art",

  image: "https://c9admin.cottage9.com/uploads/5534/origins-and-evolution-of-kalamkari-paintings.jpg",

  shortDescription:
    "Hand-painted and block-printed textile art tradition, known for its craftsmanship.",

  description:
    "Kalamkari is a traditional hand-painted or block-printed textile art from Andhra Pradesh and Telangana. It uses natural dyes to depict mythological stories, epics, and floral motifs on fabric, showcasing intricate designs and vibrant colors that reflect India’s rich craft heritage.",
  origin:
    "Developed in temple towns of Andhra Pradesh",

  keyFeatures: [
    "Hand-drawn designs using a pen",
    "Natural vegetable dyes",
    "Mythological storytelling through art"
  ],
  materialsUsed: [
    "Cotton fabric",
    "Natural dyes",
    "Bamboo or date-palm pen"
  ],
  themes: [
    "Mythology",
    "Epics",
    "Floral patterns",
    "Spiritual stories"
  ],

  modernPresence:
    "Popular in sarees, dupattas, wall hangings, and global fashion",

  relatedIds: [24, 26],

  isFavorite: false
},
  {
  id: 121,
  name: "Santhal Art",
  category: "Tribal Art",
  type: "Tribal",
  state: "Jharkhand / West Bengal",
  period: "Ancient",
  image: "https://i.pinimg.com/736x/db/0a/cc/db0acc9ee851f953142e10954a8f32c7.jpg",
  shortDescription:
    "Tribal wall art portraying daily life and nature, through symbolic and earthy design.",
  description:
    "Santhal Art is a traditional tribal art form of the Santhal community in Jharkhand. It features vibrant, colorful depictions of daily life, nature, animals, and rituals, often painted on walls or paper, reflecting the tribe’s cultural stories, beliefs, and close connection with nature.",
  origin:
    "Santhal tribal communities of eastern India",
  keyFeatures: [
    "Depiction of daily tribal life",
    "Simple human and animal figures",
    "Earthy and natural colors"
  ],
  materialsUsed: [
    "Natural pigments",
    "Mud walls",
    "Plant-based dyes"
  ],
  themes: [
    "Agriculture",
    "Community life",
    "Nature and animals"
  ],

  culturalSignificance:
    "Preserves the lifestyle and traditions of the Santhal tribe",

  modernPresence:
    "Adapted to canvas, paper, and contemporary art forms",

  relatedIds: [36, 37],

  isFavorite: false
},
    {
  id: 122,
  name: "Kuchipudi",
  category: "Dance",
  type: "Classical",
  state: "Andhra Pradesh",
  period: "Ancient",
  image: "https://www.insightsonindia.com/wp-content/uploads/2021/09/Kuchipudi-dance.jpg",
  shortDescription: "Graceful classical dance known for expressive storytelling and refined movements.",
  description:
    "Kuchipudi Dance is a classical dance form from Andhra Pradesh, known for its graceful movements, rhythmic footwork, and expressive storytelling. Traditionally performed as a dance-drama, it depicts stories from Hindu epics like the Ramayana and Mahabharata, combining devotion, rhythm, and theatrical elements.",
  origin: "Originated in the village of Kuchipudi, Andhra Pradesh",

  keyFeatures: [
    "Narrative storytelling",
    "Expressive hand gestures (mudras)",
    "Graceful movements and footwork"
  ],

  performanceStyle:
    "Solo and group performances accompanied by Carnatic music",

  modernPresence:
    "Performed on national and international cultural stages",

  relatedIds: [1, 2, 5],

  isFavorite: false
},
    {
  id: 123,
  name: "Rangoli / Kolam",
  category: "Cultural Practice",
  type: "Traditional",
  state: "India",
  period: "Ancient",
  image: "https://www.ikolam.com/sites/default/files/pageimage/18-pongal-kolam_0.jpg",
  shortDescription: "A Decorative floor art using colors and patterns, created during festivals.",
  description:
    "Rangoli / Kolam is a traditional Indian art form of creating decorative patterns on floors, usually at entrances, using colored powders, rice flour, or flower petals. It is practiced across India, especially during festivals, and symbolizes prosperity, welcome, and auspiciousness.", 
  origin: "Household traditions across India",
  keyFeatures: [
    "Geometric designs",
    "Daily practice",
    "Symbol of prosperity"
  ],
  performanceStyle: "Household decorative art",

  modernPresence:
    "Seen in festivals, competitions, and public spaces",

  relatedIds: [],

  isFavorite: false
},
    {
  id: 124,
  name: "Miniature Painting",
  category: "Painting",
  type: "Traditional",
  state: "Rajasthan",
  period: "Medieval",
  image: "https://i.pinimg.com/1200x/70/91/32/7091329e77de1414ca75085395170cf4.jpg",
  shortDescription:
    "Detailed paintings depicting royal life and mythological scenes.",
  description:
    "Miniature Painting is a detailed and intricate painting style that flourished in India from the medieval period. Often created on paper, cloth, or palm leaves, it depicts court scenes, religious themes, and epic tales using vibrant colors and fine brushwork, reflecting the rich artistic heritage of various regions like Mughal, Rajput, and Pahari schools.",
  origin:
    "Developed in Rajput and Mughal royal courts",

  keyFeatures: [
    "Fine brushwork and intricate detailing",
    "Use of natural mineral pigments",
    "Depiction of royal and mythological themes"
  ],

  materialsUsed: [
    "Natural mineral colors",
    "Handmade paper",
    "Fine brushes"
  ],

  themes: [
    "Royal court life",
    "Hunting scenes",
    "Mythology",
    "Love stories"
  ],

  culturalSignificance:
    "Symbol of royal patronage and artistic excellence in India",

  modernPresence:
    "Preserved in museums, galleries, and reproduced in modern art forms",

  relatedIds: [24, 27],

  isFavorite: false
},
    {
  id: 125,
  name: "Bastar Tribal Art",
  category: "Tribal Art",
  type: "Traditional",
  state: "Chhattisgarh",
  period: "Ancient Tribal Tradition",
  image: "https://tiimg.tistatic.com/fp/1/009/382/bastar-arts-tribal-couple-pair-on-trumpet-mementos-crafts-814.jpg",
  shortDescription:
    "Traditional tribal art known for metal, wood, and natural materials.",
  description:
    "Bastar Tribal Art is a traditional art form of the Bastar region in Chhattisgarh, created by local tribal communities. It includes metalwork, wood carvings, terracotta, and bell metal crafts, often depicting tribal life, animals, and deities, reflecting the community’s cultural heritage and artisanal skills.",
  origin:
    "Practiced by tribal communities of the Bastar region in Chhattisgarh",

  keyFeatures: [
    "Use of natural materials like wood and metal",
    "Handcrafted using traditional techniques",
    "Strong connection to tribal rituals and folklore"
  ],

  materialsUsed: [
    "Bell metal",
    "Wood",
    "Terracotta",
    "Natural pigments"
  ],

  themes: [
    "Nature",
    "Tribal deities",
    "Daily life",
    "Folklore"
  ],

  culturalSignificance:
    "Represents the spiritual and cultural identity of Bastar tribal communities",

  modernPresence:
    "Displayed in exhibitions, handicraft fairs, and contemporary décor",

  relatedIds: [35, 36],

  isFavorite: false
},
    {
  id: 126,
  name: "Rajasthani Folk Music",
  category: "Music",
  type: "Folk",
  state: "Rajasthan",
  period: "Medieval Folk Tradition",
  image: "https://i.pinimg.com/1200x/06/fe/dd/06fedd40378f3490fc8916b4938f8d69.jpg",
  shortDescription:
    "Vibrant folk music reflecting desert life and royal heritage, rich in tradition.",
  description:
    "Rajasthani Folk Music is the traditional music of Rajasthan, known for its soulful melodies, rhythmic beats, and vibrant instruments like the dholak, sarangi, and algoza. It often narrates tales of valor, love, devotion, and daily life, and is performed during festivals, fairs, and cultural gatherings.",
  origin:
    "Developed among desert communities of Rajasthan",

  keyFeatures: [
    "Storytelling through music",
    "Strong rhythm and soulful melodies",
    "Association with royal courts and folk traditions"
  ],

  instrumentsUsed: [
    "Kamaicha",
    "Sarangi",
    "Dholak",
    "Khartal"
  ],

  themes: [
    "Heroic tales",
    "Devotion",
    "Folk legends",
    "Desert life"
  ],

  culturalSignificance:
    "Preserves Rajasthan’s oral history and cultural identity",

  modernPresence:
    "Performed at folk festivals, tourism events, and international stages",

  relatedIds: [13, 14],

  isFavorite: false
},
   {
  id: 127,
  name: "Tanjore Painting",
  category: "Painting",
  type: "Traditional",
  state: "Tamil Nadu",
  period: "16th Century",
  image: "https://i.pinimg.com/736x/4f/f5/0b/4ff50bfc842cb3c3bf178cd0beaf79f8.jpg",
  shortDescription:
    "Classical painting famous for gold foil and vibrant colors, reflecting rich artistic tradition.",
  description:
    "Tanjore Painting is a classical South Indian painting style from Tamil Nadu, known for its rich colors, surface richness, and use of gold foil. Typically depicting Hindu deities, these paintings are characterized by intricate details, ornamental designs, and a sense of divine grandeur.",
  origin:
    "Developed in Thanjavur during the Nayaka and Maratha rule",

  keyFeatures: [
    "Use of gold foil for highlighting",
    "Raised relief effect",
    "Vibrant colors and divine themes"
  ],

  materialsUsed: [
    "Gold foil",
    "Natural pigments",
    "Wooden board"
  ],

  themes: [
    "Hindu deities",
    "Religious symbolism",
    "Temple art"
  ],

  culturalSignificance:
    "Represents devotional art and royal patronage of South India",

  modernPresence:
    "Popular in home décor, galleries, and traditional art collections",

  relatedIds: [16, 38],

  isFavorite: false
},
    {
  id: 128,
  name: "Gond Art",
  category: "Painting",
  type: "Tribal",
  state: "Madhya Pradesh",
  period: "Ancient Tribal Tradition",
  image: "https://i.pinimg.com/1200x/be/91/55/be9155beb5a32759914295d8145941b3.jpg",
  shortDescription:
    "Vibrant tribal art using dots, lines, and nature-inspired patterns.",
  description:
    "Gond Art is a traditional tribal art form of the Gond community in Madhya Pradesh. It features vibrant colors, intricate patterns, and depictions of nature, animals, and folklore, often painted on walls, paper, or cloth, reflecting the community’s cultural stories and close connection with the natural world.",
  origin:
    "Practiced by Gond tribal communities of Central India",

  keyFeatures: [
    "Use of dots and fine lines",
    "Bright and contrasting colors",
    "Strong connection with nature and folklore"
  ],

  materialsUsed: [
    "Natural pigments",
    "Handmade paper or canvas",
    "Brushes or bamboo sticks"
  ],

  themes: [
    "Nature",
    "Animals",
    "Tribal myths",
    "Folk stories"
  ],

  culturalSignificance:
    "Reflects the spiritual beliefs and cultural identity of Gond tribes",

  modernPresence:
    "Widely exhibited in art galleries and contemporary design spaces",

  relatedIds: [36, 21],

  isFavorite: false
},
    {
  id: 129,
  name: "Nautanki",
  category: "Theatre",
  type: "Folk",
  state: "Uttar Pradesh",
  period: "Medieval",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBSGRZXbYiSLKjWX--0haGS7cErPm49et8Q&s",
  shortDescription:
    "Popular folk theatre known for lively music and dramatic storytelling.",
  description:
    "Nautanki is a traditional folk theatre form from North India, combining music, dance, and drama. It is known for lively storytelling, humorous dialogues, and melodious songs, often performed in villages to narrate folk tales, historical events, and social themes.",
  origin:
    "Developed in rural regions of Uttar Pradesh",

  keyFeatures: [
    "High-pitched singing style",
    "Energetic acting and dialogue delivery",
    "Open-air stage performances"
  ],

  performanceStyle:
    "Live folk theatre with music, dance, and dramatic narration",

  themes: [
    "Romantic legends",
    "Heroic tales",
    "Social issues"
  ],

  culturalSignificance:
    "Served as a major source of entertainment and storytelling in rural North India",

  modernPresence:
    "Performed during fairs, festivals, and cultural events",

  relatedIds: [29, 30],

  isFavorite: false
},
    {
  id: 130,
  name: "Jatra",
  category: "Theatre",
  type: "Folk",
  state: "West Bengal",
  period: "Medieval",
  image: "https://abovethehimalaya.com/wp-content/uploads/2019/09/indra-Jatra.jpg",
  shortDescription:
    "Open-air folk theatre with music, dialogue, and dramatic narration.",

  description:
    "Jatra is a traditional folk theatre form from Odisha, characterized by musical drama, vibrant costumes, and expressive storytelling. Performances often depict mythological stories, historical events, and social themes, and are staged during festivals and community gatherings.",
  origin:
    "Developed in rural Bengal and temple processions",

  keyFeatures: [
    "Circular open-air stage",
    "Loud vocal projection",
    "Strong audience interaction"
  ],

  performanceStyle:
    "Musical drama performed overnight with live narration",

  themes: [
    "Mythology",
    "Historical events",
    "Social reform"
  ],

  culturalSignificance:
    "Plays a vital role in preserving Bengali folk storytelling traditions",

  modernPresence:
    "Still popular in villages and urban folk theatre festivals",

  relatedIds: [28, 30],

  isFavorite: false
},
 {
  id: 131,
  name: "Puppetry",
  category: "Cultural Practice",
  type: "Folk",
  state: "Rajasthan",
  period: "Medieval",
  image: "https://i.pinimg.com/1200x/32/77/43/327743473a7ec6131da4fdb04d84ba03.jpg",
  shortDescription:
    "Traditional string puppetry depicting folk tales and legends.",
  description:
    "Puppetry is a traditional performing art in India, where puppets are manipulated to narrate stories from mythology, folklore, and social themes. Various regional styles exist, including string puppets, shadow puppets, and rod puppets, combining music, dialogue, and visual artistry to entertain and educate audiences.",
  origin:
    "Developed among rural communities of Rajasthan",

  keyFeatures: [
    "String-controlled wooden puppets",
    "Bright costumes and exaggerated movements",
    "Narrative storytelling with music"
  ],

  materialsUsed: [
    "Wood",
    "Cloth",
    "Natural colors"
  ],

  themes: [
    "Folk tales",
    "Heroic legends",
    "Social values"
  ],

  culturalSignificance:
    "Preserves oral storytelling traditions of Rajasthan",

  modernPresence:
    "Performed at culturalFestivals, fairs, and heritage events",

  relatedIds: [28, 30],

  isFavorite: false
},
  
 {
  id: 132,
  name: "Folk Storytelling",
  category: "Storytelling",
  type: "Traditional",
  state: "South India",
  period: "Medieval",
  image: "https://i.pinimg.com/564x/2d/58/85/2d58857901f4a64798b816df6d4a1a7b.jpg",
  shortDescription:
    "Narrative storytelling blending music, philosophy, and devotion.",
  description:
    "Folk Storytelling is an ancient Indian tradition of narrating tales orally, often passed down through generations. It includes myths, legends, epics, and moral stories, performed with expressive gestures, music, and songs, serving both entertainment and cultural education in communities.",
  origin:
    "Developed in temple and cultural traditions of South India",

  keyFeatures: [
    "Blend of storytelling and classical music",
    "Use of humor and philosophical insights",
    "Single-performer narrative style"
  ],

  performanceStyle:
    "Solo performance accompanied by musical instruments",

  themes: [
    "Ramayana",
    "Mahabharata",
    "Devotional philosophy"
  ],

  culturalSignificance:
    "Promotes moral values and spiritual learning through storytelling",

  modernPresence:
    "Performed in temples, cultural sabhas, and online platforms",

  relatedIds: [19, 18],

  isFavorite: false
},
 {
  id: 133,
  name: "Garba Music",
  category: "Music",
  type: "Folk",
  state: "Gujarat",
  period: "Ancient Folk Tradition",

  image: "https://i.pinimg.com/736x/91/5e/b4/915eb4a14cf621e85fb3435c17ccdc4c.jpg",

  shortDescription:
    "A Devotional folk music of Navratri festival celebrations, performed with devotion.",

  description:
    "Garba Music is the traditional folk music of Gujarat associated with the Garba dance, performed during the Navaratri festival. It features rhythmic beats, clapping, and devotional songs praising Goddess Durga, creating a lively and energetic atmosphere for community celebration and dance.",
  origin:
    "Rooted in ancient Shakti worship traditions",

  keyFeatures: [
    "Circular rhythmic patterns",
    "Devotional lyrics",
    "Group-based performance"
  ],

  instruments: [
    "Dhol",
    "Manjira",
    "Flute"
  ],

  modernPresence:
    "Performed globally during Navratri festivals and cultural events",

  relatedIds: [13],

  isFavorite: false
},
    {
  id: 134,
  name: "Bhil Painting",
  category: "Tribal Art",
  type: "Tribal",
  state: "Madhya Pradesh / Rajasthan",
  period: "Ancient",

  image: "https://cdn.magicdecor.in/com/2024/12/06131650/BHIL27.jpg",

  shortDescription:
    "Dot-based tribal paintings inspired by nature, depicting animals, plants and daily life.",
  description:
    "Bhil Painting is a traditional tribal art form of the Bhil community in Madhya Pradesh. It is characterized by vibrant colors, intricate patterns, and motifs inspired by nature, animals, and daily life, often painted on walls, paper, or cloth, reflecting the community’s cultural stories and rituals.",
  origin:
    "Bhil tribal regions of central India",

  keyFeatures: [
    "Use of dots instead of brush strokes",
    "Bright and contrasting colors",
    "Symbolic nature-inspired patterns"
  ],

  materialsUsed: [
    "Natural dyes",
    "Canvas and paper",
    "Acrylic colors (modern)"
  ],

  themes: [
    "Nature",
    "Tribal myths",
    "Spiritual symbols"
  ],

  culturalSignificance:
    "Represents tribal beliefs and ecological balance",

  modernPresence:
    "Widely exhibited in art galleries and museums",

  relatedIds: [35, 37],

  isFavorite: false
},
    {
  id: 135,
  name: "Saura Painting",
  category: "Tribal Art",
  type: "Tribal",
  state: "Odisha",
  period: "Ancient",
  image: "https://abirpothi.com/wp-content/uploads/2024/04/Courtesy-Vatsal-Jain-via-Medium.jpg",
  shortDescription:
    "Ritual wall paintings created by the Saura tribe, reflecting spiritual beliefs and traditions.",
  description:
    "Saura Painting is a traditional tribal painting of the Saura community in Odisha. Characterized by bold lines, geometric patterns, and symbolic motifs, it often depicts religious rituals, nature, and daily life, usually painted on walls or murals, reflecting the tribe’s cultural beliefs and heritage.",
  origin:
    "Saura tribal regions of Odisha",

  keyFeatures: [
    "Geometric human and animal figures",
    "Symmetrical and ritual-based layouts",
    "White paintings on red or brown backgrounds"
  ],

  materialsUsed: [
    "Rice paste",
    "Natural earth pigments",
    "Mud walls"
  ],

  themes: [
    "Rituals",
    "Ancestral worship",
    "Mythological beliefs"
  ],

  culturalSignificance:
    "Acts as a spiritual offering and protective symbol",

  modernPresence:
    "Used in modern art spaces and heritage exhibitions",

  relatedIds: [35, 36],

  isFavorite: false
},
    {
  id: 136,
  name: "Toda Embroidery",
  category: "Textile Art",
  type: "Tribal",
  state: "Tamil Nadu",
  period: "Ancient",

  image: "https://i.pinimg.com/originals/71/06/70/7106706bc8e24912bee83322c1e7de85.jpg",

  shortDescription: "Distinctive tribal embroidery in red and black, known for this bold pattern and symbolism.",

  description:
    "Toda Embroidery is a traditional textile craft of the Toda community in the Nilgiri Hills of Tamil Nadu. It is known for its distinctive red and black geometric patterns on white fabric, typically used in shawls and garments, reflecting the tribe’s cultural identity and artisanal skills.",
  origin: "Nilgiri Hills, Tamil Nadu",

  keyFeatures: [
    "Red and black threads",
    "Geometric motifs",
    "Hand embroidery"
  ],

  performanceStyle: "Textile craft",

  modernPresence:
    "Used in shawls, exhibitions, and fashion design",

  relatedIds: [25],

  isFavorite: false
}

  ],
    reducers:{
      toggleLike: (state, action)=>{
        const id = action.payload;
        const item = state.find((art)=> art.id===id)
        if(item){
          item.isFavorite = !item.isFavorite
        }
      }

    }
})

export const {toggleLike} = ArtSlice.actions
export default ArtSlice.reducer