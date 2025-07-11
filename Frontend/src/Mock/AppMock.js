const stats = [
  { label: "Web View", value: "120+" },
  { label: "Users", value: "80+" },
  { label: "Projects", value: "25" },
  { label: "Likes", value: "300+" },
];
const DataItems = [
  // Design
  {
    image: "https://i.pinimg.com/1200x/4b/e0/e5/4be0e573fc6b613d26fe8289e79bf8bc.jpg",
    name: "Modern Poster Pack",
    category: "Design",
    rating: 4.8,
    reviews: 72,
  },
  {
    image: "https://i.pinimg.com/736x/39/79/5a/39795a61e0d08b6d25119af745f6be46.jpg",
    name: "Minimal Brochure Template",
    category: "Design",
    rating: 4.7,
    reviews: 61,
  },
  {
    image: "https://i.pinimg.com/736x/44/98/56/449856be7a3c19ea2c88d6dd9cf85cd2.jpg",
    name: "Gradient UI Kit",
    category: "Design",
    rating: 4.9,
    reviews: 88,
  },
  {
    image: "https://i.pinimg.com/736x/01/ee/eb/01eeeb6ef0c9a8c5360045de1e1db2b5.jpg",
    name: "Futuristic Icon Set",
    category: "Design",
    rating: 4.6,
    reviews: 45,
  },
  {
    image: "https://i.pinimg.com/originals/b2/1b/5b/b21b5bb7f93144eb2a7267dcf4c06f92.jpg",
    name: "Abstract Poster Layout",
    category: "Design",
    rating: 4.9,
    reviews: 97,
  },

  // Website
  {
    image: "https://i.pinimg.com/736x/0f/74/63/0f74637556b3c3a76a7ddfcd70d7743f.jpg",
    name: "Portfolio Landing Page",
    category: "Website",
    rating: 4.8,
    reviews: 120,
  },
  {
    image: "https://i.pinimg.com/originals/90/2e/25/902e25f8efae17fbe14c8f2a71585f9b.jpg",
    name: "E-commerce UI Kit",
    category: "Website",
    rating: 4.7,
    reviews: 105,
  },
  {
    image: "https://i.pinimg.com/736x/8c/b4/34/8cb434bdff9c58ce5d4f4b2c74865e17.jpg",
    name: "Real Estate Website Template",
    category: "Website",
    rating: 4.6,
    reviews: 80,
  },
  {
    image: "https://i.pinimg.com/originals/7e/82/5e/7e825e1d1c1a7fce09f51ae33b51e3fc.jpg",
    name: "SaaS Dashboard Design",
    category: "Website",
    rating: 4.9,
    reviews: 140,
  },
  {
    image: "https://i.pinimg.com/originals/51/8f/0b/518f0b369b5dc90791ff7f7cceaf09db.jpg",
    name: "Blog Template Clean UI",
    category: "Website",
    rating: 4.5,
    reviews: 66,
  },

  // Editing
  {
    image: "https://i.pinimg.com/564x/3d/57/ba/3d57ba6b1d1c880e45a9935ad8472d4c.jpg",
    name: "Cinematic LUTs Pack",
    category: "Editing",
    rating: 4.9,
    reviews: 213,
  },
  {
    image: "https://i.pinimg.com/736x/50/d3/e4/50d3e4f43f66a59de25efb92aa2ad885.jpg",
    name: "After Effects Glitch Transitions",
    category: "Editing",
    rating: 4.7,
    reviews: 132,
  },
  {
    image: "https://i.pinimg.com/564x/92/40/72/92407243b7d9b57e0f69fdc8392cb5a5.jpg",
    name: "Premiere Pro Intro Pack",
    category: "Editing",
    rating: 4.6,
    reviews: 94,
  },
  {
    image: "https://i.pinimg.com/originals/c4/10/cc/c410cc3f41a09a7a5a55aaeb4ea6aefa.jpg",
    name: "Color Grading Presets",
    category: "Editing",
    rating: 4.8,
    reviews: 152,
  },
  {
    image: "https://i.pinimg.com/564x/95/f2/7e/95f27e274afcc49bfc798e569b1e6370.jpg",
    name: "Typography Animation Pack",
    category: "Editing",
    rating: 4.7,
    reviews: 87,
  },

  // Tambahan (duplikat untuk mencapai 30 total)
  {
    image: "https://i.pinimg.com/564x/87/c2/98/87c2986f9b0fdb04a82cb4db655e2dd7.jpg",
    name: "Creative Resume Template",
    category: "Design",
    rating: 4.8,
    reviews: 54,
  },
  {
    image: "https://i.pinimg.com/564x/e9/71/5a/e9715a87e91a68e6ee4d0d41786a8e54.jpg",
    name: "Dark Mode UI Kit",
    category: "Design",
    rating: 4.9,
    reviews: 78,
  },
  {
    image: "https://i.pinimg.com/originals/fb/59/ff/fb59ff315c697e3a5d3765e38e9f3b27.jpg",
    name: "One Page Website Template",
    category: "Website",
    rating: 4.7,
    reviews: 102,
  },
  {
    image: "https://i.pinimg.com/736x/3e/b6/c6/3eb6c64ad0e3c29399cddc748109ae9b.jpg",
    name: "React Admin Dashboard",
    category: "Website",
    rating: 4.8,
    reviews: 110,
  },
  {
    image: "https://i.pinimg.com/originals/1b/7c/36/1b7c3614899b3963e44d1089a3df9bd3.jpg",
    name: "Gaming Overlay Pack",
    category: "Editing",
    rating: 4.6,
    reviews: 99,
  },
  {
    image: "https://i.pinimg.com/736x/12/e4/4d/12e44d5d4a1e4bdb482759776f8ec7be.jpg",
    name: "Instagram Feed Preset",
    category: "Editing",
    rating: 4.9,
    reviews: 125,
  },
  {
    image: "https://i.pinimg.com/originals/da/e0/8a/dae08a7c2dd8d6d96f7e6e814b9fcbec.jpg",
    name: "Typography Poster Pack",
    category: "Design",
    rating: 4.7,
    reviews: 70,
  },
  {
    image: "https://i.pinimg.com/736x/62/8b/c0/628bc0c6f5ae9d4db9f13b7384e9e964.jpg",
    name: "Personal Blog UI",
    category: "Website",
    rating: 4.6,
    reviews: 84,
  },
  {
    image: "https://i.pinimg.com/originals/19/6a/3c/196a3c7d4698ae68c7f179c7bc33b34e.jpg",
    name: "Final Cut Pro Lower Thirds",
    category: "Editing",
    rating: 4.8,
    reviews: 109,
  },
  {
    image: "https://i.pinimg.com/564x/6a/58/88/6a588829418c7a24fcb9e4f623a4d5e7.jpg",
    name: "Multipurpose Flyer Template",
    category: "Design",
    rating: 4.7,
    reviews: 65,
  },
  {
    image: "https://i.pinimg.com/564x/d1/e2/6f/d1e26fa3a8ea37cb15efc27a2b60479e.jpg",
    name: "Creative Business Card",
    category: "Design",
    rating: 4.6,
    reviews: 60,
  },
  {
    image: "https://i.pinimg.com/736x/6a/e4/94/6ae4943a36827f3bb3ce7497cbd1e4b5.jpg",
    name: "Dark Theme Portfolio Template",
    category: "Website",
    rating: 4.9,
    reviews: 95,
  },
  {
    image: "https://i.pinimg.com/736x/48/49/3b/48493bb3f21b18db36f9fcfb826ab9c5.jpg",
    name: "Slideshow Transitions AE",
    category: "Editing",
    rating: 4.8,
    reviews: 137,
  },
];

// Group data by category
const groupedData = DataItems.reduce((acc, item) => {
  const category = item.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item);
  return acc;
}, {});

const article = [
  {
    date: "05",
    month: "JUL",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Workshop Desain UI untuk Pemula",
    address: "Creative Space, Yogyakarta",
    time: "13:00 — 16:00",
    description:
      "Belajar dasar-dasar UI design menggunakan Figma, cocok untuk pemula yang ingin terjun ke dunia desain digital.",
  },
  {
    date: "12",
    month: "AUG",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Seminar Editing Cinematic Video",
    address: "Auditorium ITESA, Semarang",
    time: "09:00 — 12:00",
    description:
      "Bahas teknik editing cinematic menggunakan Premiere Pro dan After Effects. Dilengkapi studi kasus & preset gratis.",
  },
  {
    date: "18",
    month: "SEP",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    title: "Webinar: Freelance di Dunia Desain",
    address: "Zoom Online Event",
    time: "19:30 — 21:00",
    description:
      "Diskusi dan strategi menjadi freelancer desain dan editor video, termasuk cara mendapatkan klien pertama.",
  },
  {
    date: "24",
    month: "SEP",
    image: "https://images.unsplash.com/photo-1522199794611-8e48f0703f34",
    title: "Live Class: Membuat Landing Page Modern",
    address: "Gedung Startup Hub, Jakarta",
    time: "10:00 — 13:00",
    description:
      "Belajar membangun landing page responsive dengan Tailwind CSS dan React. Sertifikat dan file latihan disediakan.",
  },
  {
    date: "01",
    month: "OCT",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    title: "Kelas Intensif Motion Graphic",
    address: "Online (Google Meet)",
    time: "18:00 — 20:00",
    description:
      "Mempelajari dasar animasi teks, masking, dan transisi menggunakan After Effects dalam 3 hari.",
  },

];

const faqData = [
  {
    question: "Apa saja yang bisa saya temukan di website ini?",
    answer:
      "Website ini menyediakan berbagai sumber daya kreatif seperti artikel tutorial, template desain, preset, serta panduan instalasi plugin untuk software populer seperti After Effects, Premiere Pro, Photoshop, dan lainnya. Semua konten disediakan untuk membantu publik mempercepat workflow kreatif mereka.",
  },
  {
    question: "Apakah template dan plugin di website ini gratis?",
    answer:
      "Sebagian besar template, preset, dan plugin yang tersedia di website ini dapat digunakan secara **gratis** untuk keperluan pribadi maupun komersial, dengan tetap menghargai lisensi dan hak cipta masing-masing pembuat. Kami juga menyediakan beberapa konten premium untuk mendukung keberlanjutan platform.",
  },
  {
    question: "Bagaimana cara menginstal plugin di Adobe After Effects?",
    answer:
      "Anda bisa melihat di artikel tutorial pasang plug in atau pasang preset",
  },
  {
    question:
      "Apakah saya harus memiliki skill editing untuk menggunakan template?",
    answer:
      "Tidak harus. Banyak template yang kami sediakan telah dirancang dengan sistem drag-and-drop atau editable text yang mudah digunakan bahkan oleh pemula. Setiap file juga dilengkapi dengan panduan penggunaan (readme atau video tutorial) untuk mempermudah proses pengeditan.",
  },
  {
    question: "Bolehkah saya membagikan ulang template dari website ini?",
    answer:
      "Kami menghargai semangat berbagi, namun mohon untuk **tidak mendistribusikan ulang file secara langsung**. Sebagai gantinya, silakan bagikan link menuju halaman aslinya. Hal ini penting untuk menjaga hak cipta, statistik download, dan mendukung pembuat konten.",
  },
  {
    question:
      "Apakah saya bisa mengajukan permintaan tutorial atau template tertentu?",
    answer:
      "Tentu saja! Kami sangat terbuka dengan permintaan dan saran dari pengguna. Anda dapat mengirimkan request melalui formulir kontak, kolom komentar, atau media sosial resmi kami. Tim kami akan mempertimbangkan dan merespons permintaan tersebut secepatnya.",
  },
];

const EventItems = [
  {
    img: "https://i.pinimg.com/1200x/19/ec/a0/19eca0ef53156b6d1aaae11c78470da6.jpg",
    Judul: "nf2u Idontknow",
  },
  {
    img: "https://i.pinimg.com/1200x/30/3f/44/303f44e80550e7fe7545a3d3f065dc32.jpg",
    Judul: "Organization Bubble gum Anime",
  },
  {
    img: "https://i.pinimg.com/736x/0e/a7/74/0ea774172ff9c3934e7157a5481647a7.jpg",
    Judul: "LoliItems",
  },
];

export { article, stats, faqData, EventItems, groupedData };
