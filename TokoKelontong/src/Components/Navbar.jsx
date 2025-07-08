import { SearchIcon } from "@/Components/Icon";
import Search from "@/Components/UI/SearchSections";
import { useState, useEffect, useRef } from "react";
import useResponsive from "@/Hook/useResponsive"; // Sesuaikan path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Cek elemen yang diklik
      const clickedElement = event.target;

      // Jangan close mobile menu kalau klik tombol toggle
      const toggleButton = document.querySelector(
        '[aria-label="Toggle mobile menu"]'
      );
      if (toggleButton && toggleButton.contains(clickedElement)) return;

      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target) && setIsMobileMenuOpen(false)
      ) {
        setIsOpen(false);
      }

      // Handle mobile menu close
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(clickedElement) && isOpen(true)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const ButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSearch = () => {
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <>
      <div className="flex bg-white fixed top-0 w-full justify-center items-center z-50 shadow">
        <div className="container flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src="ones.png" className="w-14 h-14" alt="Logo" />
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div
              className={`flex mx-auto items-center font-semibold justify-center ${
                isTablet ? "gap-6" : "gap-10"
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Desktop Action Buttons */}
          {!isMobile && (
            <div className="flex gap-2 items-center justify-center relative">
              <button
                onClick={ButtonClick}
                className="p-2 cursor-pointer rounded-full hover:bg-gray-200 transition"
              >
                <SearchIcon size="24px" />
              </button>
              <button className="text-white cursor-pointer rounded-sm flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-4 py-2 transition-colors">
                Hire Me
              </button>
            </div>
          )}

          {/* Mobile Menu Button & Search */}
          {isMobile && (
            <div className="flex items-center gap-2">
              <button
                onClick={ButtonClick}
                className="p-2 cursor-pointer rounded-full hover:bg-gray-200 transition"
              >
                <SearchIcon size="20px" />
              </button>
              <div
                ref={searchContainerRef}
                className={`transition-all w-full fixed right-3 top-[80px] duration-300 ease-in-out transform ${
                  isOpen
                    ? "translate-x-0 opacity-100 max-w-[200px]"
                    : "translate-x-full opacity-0 max-w-0"
                } overflow-hidden`}
              >
                <input
                  type="text"
                  placeholder="Cari Kebutuhan Anda..."
                  className="border border-gray-300 rounded-md w-full bg-white outline-none py-2 px-4 shadow-md w-full transition-all duration-300 ease-in-out"
                />
              </div>
              {/* ⛔ Ganti block ini */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 cursor-pointer rounded-full hover:bg-gray-200 transition"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        >
          <div
            ref={mobileMenuRef}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-6">
                <img src="ones.png" className="w-10 h-10" alt="Logo" />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-200 rounded-full transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block text-lg font-semibold text-gray-700 hover:text-blue-500 transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Mobile Action Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={closeMobileMenu}
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Hire Me
                </button>
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Ready to work together?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Search Overlay */}
      {!isMobile && (
        <>
          <Search
            ref={searchContainerRef}
            className={isOpen ? "flex" : "hidden"}
            onClose={handleCloseSearch}
          />
        </>
      )}
    </>
  );
}
