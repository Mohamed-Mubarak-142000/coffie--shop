import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const MobileLinks = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { totalItems } = useCart();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-coffee-dark text-coffee-cream"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-4 rounded ${
                  isActive ? "bg-coffee-medium font-bold" : ""
                }`
              }
            >
              الرئيسية
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `py-2 px-4 rounded ${
                  isActive ? "bg-coffee-medium font-bold" : ""
                }`
              }
            >
              القائمة
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `py-2 px-4 rounded ${
                  isActive ? "bg-coffee-medium font-bold" : ""
                }`
              }
            >
              خدماتنا
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `py-2 px-4 rounded ${
                  isActive ? "bg-coffee-medium font-bold" : ""
                }`
              }
            >
              عربة التسوق {totalItems > 0 && `(${totalItems})`}
            </NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileLinks;
