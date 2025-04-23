import { Menu, Search, ShoppingCart, X } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const DesktopLinks = ({
  totalItems,
  isMenuOpen,
  setIsMenuOpen,
  isSearchOpen,
  setIsSearchOpen,
}: {
  totalItems: number;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <nav className="hidden md:flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-coffee-cream 
               ${isActive ? "font-bold" : "font-medium"} 
               hover:text-accent-secondary transition-colors duration-200`
          }
        >
          الرئيسية
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `text-coffee-cream 
               ${isActive ? "font-bold" : "font-medium"} 
               hover:text-accent-secondary transition-colors duration-200`
          }
        >
          القائمة
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `text-coffee-cream 
               ${isActive ? "font-bold" : "font-medium"} 
               hover:text-accent-secondary transition-colors duration-200`
          }
        >
          خدماتنا
        </NavLink>
      </nav>

      <div className="flex items-center gap-4 z-20">
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className={`p-2 rounded-full text-coffee-cream transition-colors duration-200`}
          aria-label="بحث"
        >
          <Search size={20} />
        </button>

        <Link
          to="/cart"
          className={`p-2 rounded-full relative text-coffee-cream transition-colors duration-200`}
          aria-label="عربة التسوق"
        >
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent-secondary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-full text-coffee-cream transition-colors duration-200`}
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </>
  );
};

export default DesktopLinks;
