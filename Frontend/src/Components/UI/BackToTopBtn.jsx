// components/BackToTopButton.jsx
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Cek posisi scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300); // muncul setelah scroll 300px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // animasi smooth
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed z-[999] bottom-5 right-5 p-4 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all"
        aria-label="Scroll to top"
      >
        ^
      </button>
    )
  );
};

export default BackToTopButton;
