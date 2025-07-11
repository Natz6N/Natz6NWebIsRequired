// import { createContext, useContext, useEffect, useState } from "react";

// // Buat Context
// const LanguageContext = createContext();

// export const useLang = () => useContext(LanguageContext);

// // Provider
// export const LanguageProvider = ({ children }) => {
//   const [lang, setLang] = useState("id"); // default
//   const [messages, setMessages] = useState({});

//   // Load bahasa saat mount atau saat lang berubah
//   useEffect(() => {
//     fetch(`/lang/${lang}.json`)
//       .then((res) => res.json())
//       .then((data) => setMessages(data))
//       .catch((err) => console.error("Gagal load bahasa:", err));
//   }, [lang]);

//   const value = { lang, setLang, messages };

//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };
