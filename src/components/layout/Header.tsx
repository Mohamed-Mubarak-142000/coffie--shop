import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import SearchOverlay from "../search-overlay";
import Logo from "../logo";
import DesktopLinks from "../desktop-links";
import MobileLinks from "../mobile-links";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to menu page with search query
      window.location.href = `/menu?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300  ${
        isScrolled ? "bg-coffee-dark shadow-md rounded-b-xl" : "bg-coffee-dark "
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <DesktopLinks
          isMenuOpen={isMenuOpen}
          isSearchOpen={isSearchOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsSearchOpen={setIsSearchOpen}
          totalItems={totalItems}
        />
      </div>

      {/* Mobile Menu */}
      <MobileLinks isMenuOpen={isMenuOpen} />

      {/* Search Overlay */}
      <SearchOverlay
        handleSearchSubmit={handleSearchSubmit}
        isSearchOpen={isSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </header>
  );
};

export default Header;
