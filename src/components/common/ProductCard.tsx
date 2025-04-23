import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";
import Button from "./Button";

interface ProductCardProps {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  rating: number;
  type: string;
  size: string;
  direction?: "left" | "right" | "up" | "down";
}

const ProductCard = ({
  id,
  name,
  nameEn,
  price,
  image,
  rating,
  type,
  size,
  direction = "left",
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, nameEn, price, image, size });
  };

  const getCardVariants = (direction: string) => {
    const distance = 100;
    switch (direction) {
      case "left":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        };
      case "up":
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        };
    }
  };

  const cardVariants = getCardVariants(direction);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ y: -5 }}
      className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <Link to={`/product/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-coffee-dark/80 text-white text-xs px-2 py-1 rounded">
            {type}
          </div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3
              className="font-heading font-bold text-coffee-dark text-lg line-clamp-1"
              title={name}
            >
              {name}
            </h3>
            <div className="flex items-center gap-1 text-sm">
              <Star
                size={16}
                className="text-accent-secondary fill-accent-secondary"
              />
              <span>{rating}</span>
            </div>
          </div>

          <p className="text-coffee-medium text-sm mb-3">{nameEn}</p>

          <div className="text-coffee-medium text-sm mb-4">الحجم: {size}</div>

          <div className="flex justify-between items-center">
            <div className="font-bold text-coffee-dark">{price} ريال</div>

            <Button
              variant="primary"
              size="md"
              className="w-fit"
              onClick={() => handleAddToCart}
            >
              <ShoppingCart size={20} />
              <span> أضف إلى السلة</span>
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
