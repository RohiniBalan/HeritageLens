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

  description:
    "Bharatanatyam is a classical Indian dance form originating from Tamil Nadu, known for its fixed upper torso, bent legs, and expressive gestures.",

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

  description:
    "Warli Painting is a traditional tribal art form practiced by the Warli tribe of Maharashtra. It uses simple geometric shapes like circles, triangles, and lines to depict daily life, nature, farming, rituals, and social events.",

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
  description:
    "Chhau Dance is a semi-classical folk dance form originating from eastern India. It combines martial arts, acrobatics, and storytelling, often performed using elaborate masks to depict mythological and heroic characters.",
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

  description:
    "Kathak evolved from storytelling traditions and is famous for intricate footwork and graceful spins.",

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

  description:
    "Hindustani Classical Music is a major classical music tradition of India that evolved in North India. It emphasizes improvisation and emotional expression through ragas and talas, influenced by ancient Vedic chants and later Persian musical elements.",

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

  description:
    "Yakshagana is a traditional theatre form combining dance, music, and dialogue, based on epics.",

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

  description:
    "Kathakali is a classical dance-drama from Kerala that combines dance, music, acting, and elaborate facial makeup to narrate stories from Indian epics.",

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
  description:
    "Manipuri is a classical dance form from Manipur known for its gentle movements, flowing costumes, and spiritual themes. Unlike other classical dances, it avoids sharp movements and strong facial expressions, focusing instead on elegance and devotion.",

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
    "Mohiniyattam is a classical dance form from Kerala characterized by gentle, flowing movements and subtle facial expressions. It draws inspiration from the mythological figure Mohini, the female avatar of Lord Vishnu, and emphasizes elegance, emotion, and lyrical grace.",
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
    "Pattachitra is a traditional scroll painting from Odisha, known for its intricate details and mythological narratives. The art form mainly depicts stories from Lord Jagannath, Ramayana, and Mahabharata using natural colors and bold outlines.",

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
    "Sattriya is one of the eight recognized classical dance forms of India, originating in Assam. It was introduced by the Vaishnavite saint Srimanta Sankardeva as a medium to spread religious teachings through dance-dramas performed in monasteries called Satras.",

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
    "Carnatic Classical Music is the traditional music system of South India, known for its highly structured compositions and devotional themes. It places strong emphasis on kritis composed by saint composers like Tyagaraja, Muthuswami Dikshitar, and Syama Sastri.",

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
    "Baul Music is a mystical folk tradition of Bengal practiced by wandering minstrels called Bauls. Their songs blend spiritual beliefs from Hinduism, Buddhism, and Sufism, focusing on inner realization and love for humanity.",

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
    "Phad Painting is a traditional scroll painting from Rajasthan, used as a mobile temple by folk storytellers. It narrates heroic tales of local deities like Pabuji and Devnarayan through vibrant colors and sequential storytelling.",

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
    "Bihu Music is a lively folk music tradition of Assam performed during the Bihu festival. It celebrates nature, love, and agricultural life, accompanied by energetic dance movements and traditional instruments.",

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
    "Lavani is a popular folk music and dance form of Maharashtra known for its powerful rhythm and expressive performance. Traditionally performed by women, it combines music, dance, and dramatic storytelling.",

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
    "Odissi is one of the oldest classical dance forms of India, originating from Odisha. It is known for its graceful tribhangi posture, lyrical movements, and expressive storytelling inspired by temple sculptures and devotional themes.",
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
    "Madhubani painting is a traditional art form from Bihar using natural dyes and depicting mythology and daily life.",

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
    "Koodiyattam is one of the oldest surviving theatre traditions in the world, originating in Kerala. Performed in temple theatres called Koothambalams, it combines Sanskrit drama with elaborate gestures, facial expressions, and symbolic storytelling.",

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
    "Kalamkari is a traditional art form where stories from epics like the Ramayana and Mahabharata are hand-painted or block-printed on fabric using natural dyes. The term 'Kalamkari' comes from 'kalam' (pen) and 'kari' (craft).",

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
    "Santhal Art is a traditional tribal painting style practiced by the Santhal tribe. It reflects everyday life, rituals, farming activities, animals, and nature through simple figures and earthy colors, often painted on walls during festivals.",
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
    "Kuchipudi is a classical Indian dance form from Andhra Pradesh that blends graceful movements, expressive storytelling, and rhythmic footwork, often based on mythological themes.",

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
    "Rangoli or Kolam is a traditional floor art made using rice flour, symbolizing positivity and welcome.",
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
    "Miniature Painting is a traditional art form that flourished in royal courts of Rajasthan and the Mughal Empire. These paintings are characterized by intricate detailing, fine brushwork, and rich colors depicting court life, battles, and mythology.",

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
    "Bastar Tribal Art is practiced by indigenous tribes of Chhattisgarh and is famous for its use of metal, wood, terracotta, and natural resources. The art reflects tribal beliefs, daily life, folklore, and deep connections with nature.",

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
    "Rajasthani Folk Music is deeply rooted in the desert culture of Rajasthan. Performed by communities like Manganiyars and Langas, the music narrates tales of bravery, love, devotion, and royal history using traditional instruments.",

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
    "Tanjore Painting is a classical South Indian art form that originated in Thanjavur, Tamil Nadu. It is known for its rich colors, surface ornamentation, and the use of gold foil to depict Hindu deities and religious themes.",

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
    "Gond Art is a traditional tribal art form practiced by the Gond tribes of Madhya Pradesh. The paintings are known for their vibrant colors, intricate dot and line patterns, and themes inspired by nature, mythology, and tribal folklore.",

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
    "Nautanki is a traditional folk theatre form from North India, especially Uttar Pradesh. It combines music, dialogue, and dramatic performances to narrate tales of romance, bravery, and social themes, performed in open spaces.",

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
    "Jatra is a traditional folk theatre form of Bengal performed in open-air arenas. Known for its loud dialogue, melodramatic acting, and musical narration, Jatra plays often depict mythological stories and social themes.",

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
    "Kathputli is a traditional string puppetry art form of Rajasthan. Performed by puppeteers known as Bhat community, it narrates folk tales, heroic legends, and moral stories using colorful wooden puppets, music, and rhythmic dialogue.",

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
    "Harikatha is a traditional storytelling art form from South India that combines narration, music, poetry, and philosophy. Performers narrate stories from Hindu epics while engaging audiences through songs, humor, and moral teachings.",

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
    "Garba Music is a traditional folk music of Gujarat performed during Navratri in devotion to Goddess Durga. The rhythmic songs accompany circular dance movements symbolizing the cycle of life.",

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
    "Bhil Painting is a vibrant tribal art form known for its dot patterns and bright colors. Created by the Bhil tribe, these paintings often represent animals, trees, deities, and natural elements, symbolizing harmony between humans and nature.",

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
    "Saura Painting is a ritualistic tribal art form practiced by the Saura tribe of Odisha. These geometric wall paintings are traditionally created during festivals and rituals to honor deities and ancestral spirits.",

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
    "Toda embroidery is practiced by the Toda tribe using geometric patterns inspired by nature.",

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