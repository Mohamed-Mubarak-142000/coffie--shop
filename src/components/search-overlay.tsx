import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const SearchOverlay = ({
  isSearchOpen,
  searchQuery,
  setSearchQuery,
  handleSearchSubmit,
}: {
  isSearchOpen: boolean;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSearchSubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-coffee-dark p-4 shadow-md"
        >
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن القهوة..."
              className="flex-grow py-2 px-4 rounded bg-coffee-medium text-coffee-cream placeholder-coffee-cream/70 focus:outline-none focus:ring-2 focus:ring-accent-secondary"
            />
            <button
              type="submit"
              className="bg-accent-secondary text-white py-2 px-4 rounded hover:bg-accent-primary transition-colors duration-200"
            >
              بحث
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
