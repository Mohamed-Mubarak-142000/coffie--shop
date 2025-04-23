import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 z-20"
      aria-label="الصفحة الرئيسية"
    >
      <Coffee size={30} className={"text-coffee-cream"} />
      <span className={`font-heading text-xl font-bold text-coffee-cream`}>
        عالم القهوة
      </span>
    </Link>
  );
};

export default Logo;
