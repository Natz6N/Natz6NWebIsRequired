import { SearchIcon } from "@/Components/Icon";
import Search from "@/Components/UI/SearchSections";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
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

  return (
    <>
      <div className="flex bg-white fixed top-0 w-full justify-center items-center z-50 shadow">
        <div className="container flex items-center justify-between px-4 py-2">
          <a href="/">
            <img src="ones.png" className="w-14 h-14" alt="Logo" />
          </a>

          <div className="flex mx-auto items-center font-semibold justify-center gap-10">
            <a href="" className="hover:text-blue-500">Home</a>
            <a href="">About</a>
            <a href="">Resume</a>
            <a href="">Projects</a>
          </div>

          <div className="flex gap-2 items-center justify-center relative">
            <button
              onClick={ButtonClick}
              className="p-2 cursor-pointer rounded-full hover:bg-gray-200 transition"
            >
              <SearchIcon size="24px" />
            </button>
            <button className="text-white cursor-pointer rounded-sm flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-4 py-2">
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <Search 
        ref={searchContainerRef} 
        className={isOpen ? "flex" : "hidden"} 
        onClose={handleCloseSearch}
      />
    </>
  );
}
