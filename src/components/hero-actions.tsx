import Button from "./common/Button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary" size="lg" onClick={() => {}}>
        <Link to="/menu" className="flex items-center gap-2">
          <ShoppingBag size={20} />
          تسوق الآن
        </Link>
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={() => {}}
        className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream/10"
      >
        <Link to="/services">تعرف على خدماتنا</Link>
      </Button>
    </div>
  );
};

export default HeroActions;
