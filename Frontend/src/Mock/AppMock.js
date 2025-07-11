const stats = [
  { label: "Web View", value: "120+" },
  { label: "Users", value: "80+" },
  { label: "Projects", value: "25" },
  { label: "Likes", value: "300+" },
];
const productData = [
  {
    image:
      "https://i.pinimg.com/736x/f1/ce/7c/f1ce7c4cc2167753897755ff61b23b42.jpg",
    name: "UI Design Kit Modern",
    category: "Design",
    price: 29.99,
    originalPrice: 49.99,
    sale: 40,
    rating: 4.8,
    reviews: 72,
  },
  {
    image:
      "https://i.pinimg.com/736x/6e/f8/28/6ef828eaf9279cb1cfb27c62abf8b49b.jpg",
    name: "Next.js Starter Boilerplate",
    category: "Coding",
    price: 19.0,
    originalPrice: 29.0,
    sale: 34,
    rating: 4.5,
    reviews: 33,
  },
  {
    image:
      "https://i.pinimg.com/736x/f0/b3/6e/f0b36e47cf7f9a453c9b0cd0e2652217.jpg",
    name: "Premiere Pro Transition Pack",
    category: "Editing",
    price: 14.99,
    originalPrice: 24.99,
    sale: 40,
    rating: 4.7,
    reviews: 120,
  },
  {
    image:
      "https://i.pinimg.com/736x/84/23/2c/84232c43be4e4e98e71f66aa86fca5cd.jpg",
    name: "Laravel Admin Template",
    category: "Coding",
    price: 39.99,
    originalPrice: 49.99,
    sale: 20,
    rating: 4.3,
    reviews: 55,
  },
  {
    image:
      "https://i.pinimg.com/736x/fb/f9/aa/fbf9aa5c1bd50f245ea00a7bead93a01.jpg",
    name: "Editable Logo Pack Vol. 1",
    category: "Design",
    price: 9.99,
    originalPrice: 14.99,
    sale: 33,
    rating: 4.9,
    reviews: 89,
  },
  {
    image:
      "https://i.pinimg.com/736x/84/9d/1b/849d1bc496e7e9a07fa20b227ac491e9.jpg",
    name: "AE Social Media Toolkit",
    category: "Editing",
    price: 17.99,
    originalPrice: 29.99,
    sale: 40,
    rating: 4.6,
    reviews: 63,
  },
  {
    image:
      "https://i.pinimg.com/736x/95/2a/d0/952ad09cfe84c123f5368b0c58a816a0.jpg",
    name: "Portfolio HTML Template",
    category: "Design",
    price: 12.5,
    originalPrice: 19.5,
    sale: 36,
    rating: 4.4,
    reviews: 48,
  },
];

const article = [
  {
    date: "23",
    month: "JUN",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Title of the Risen Event",
    address: "1015 California Ave, Los Angeles CA",
    time: "7:00 pm — 8:00 pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim eu turpis non hendrerit.",
  },
  {
    date: "04",
    month: "JUL",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Title of the Risen Event",
    address: "1015 California Ave, Los Angeles CA",
    time: "7:00 pm — 8:00 pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim eu turpis non hendrerit.",
  },
  {
    date: "30",
    month: "AUG",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    title: "Title of the Risen Event",
    address: "1015 California Ave, Los Angeles CA",
    time: "7:00 pm — 8:00 pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim eu turpis non hendrerit.",
  },
];
const faqData = [
  {
    question: "Apa itu React?",
    answer:
      "React adalah library JavaScript untuk membangun user interface yang dikembangkan oleh Facebook. React memungkinkan developer untuk membuat komponen yang reusable dan mengelola state aplikasi dengan efisien.",
  },
  {
    question: "Bagaimana cara menginstall React?",
    answer:
      "Anda dapat menginstall React dengan beberapa cara: menggunakan Create React App (npx create-react-app my-app), menggunakan Vite (npm create vite@latest my-app -- --template react), atau menambahkan React ke project existing dengan npm install react react-dom.",
  },
  {
    question: "Apa perbedaan antara props dan state?",
    answer:
      "Props adalah data yang diteruskan dari parent component ke child component dan bersifat read-only. State adalah data internal component yang dapat berubah dan mempengaruhi rendering component tersebut.",
  },
  {
    question: "Kapan menggunakan useEffect?",
    answer:
      "useEffect digunakan untuk menangani side effects dalam functional component, seperti fetching data, subscription, atau manual DOM manipulation. Hook ini akan berjalan setelah component di-render.",
  },
  {
    question: "Apa itu JSX?",
    answer:
      "JSX adalah syntax extension untuk JavaScript yang memungkinkan kita menulis HTML-like syntax dalam JavaScript. JSX akan di-compile menjadi JavaScript function calls oleh Babel.",
  },
];
export { article, productData, stats, faqData };
