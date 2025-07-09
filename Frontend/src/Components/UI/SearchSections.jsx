// SearchSections.jsx
import { forwardRef, useState, useEffect, useRef } from "react";
import { SearchIcon } from "@/Components/Icon";

const Search = forwardRef(({ className, onClose }, ref) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const formRef = useRef(null);

  const sampleSuggestions = [
    "Portfolio projects",
    "Web development",
    "UI/UX design",
    "Frontend development",
    "React projects",
    "Contact information"
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filteredSuggestions = sampleSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOverlayClick = (e) => {
    // Jika klik pada overlay tapi bukan pada form pencarian
    if (formRef.current && !formRef.current.contains(e.target)) {
      onClose && onClose();
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleOverlayClick}
      className={`h-screen fixed top-0 left-0 w-full items-center justify-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 z-50 ${className}`}
    >
      <div className="relative w-full max-w-2xl mx-4 transform transition-all duration-300 hover:scale-[1.02]">
        <div className="relative group">
          <form ref={formRef} className="relative z-10 p-6 search" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
                <SearchIcon size="24px" className="text-white" />
              </div>

              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search anything..."
                  value={query}
                  onChange={handleInputChange}
                  className="w-full py-4 px-6 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-black placeholder-black/70 outline-none focus:border-white/50 focus:bg-white/20 transition-all duration-300 text-lg"
                />
              </div>
            </div>

            {suggestions.length > 0 && (
              <div className="mt-4 bg-white/30 backdrop-blur-md rounded-xl border border-white/30 overflow-hidden">
                <ul className="py-2">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-6 py-3 hover:bg-white/20 cursor-pointer transition-all duration-200"
                      onClick={() => setQuery(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
});

export default Search;
