import { motion } from "framer-motion";
import ProductCard from "./common/ProductCard";
import Button from "./common/Button";
import { Link } from "react-router-dom";
import { fetchCoffees } from "../services/api";
import { useQuery } from "@tanstack/react-query";

const FeaturedProduct = () => {
  const directions = ["up", "down", "left", "right"] as const;

  const { data: coffees, isLoading } = useQuery({
    queryKey: ["coffees"],
    queryFn: fetchCoffees,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            منتجاتنا المميزة
          </h2>
          <p className="text-coffee-medium text-lg">
            اكتشف تشكيلتنا المميزة من أجود أنواع القهوة العربية والعالمية
          </p>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-10">جاري التحميل...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coffees?.slice(0, 8).map((coffee) => {
              const randomDirection =
                directions[Math.floor(Math.random() * directions.length)];

              return (
                <ProductCard
                  key={coffee.id}
                  id={coffee.id}
                  name={coffee.name}
                  nameEn={coffee.nameEn}
                  price={coffee.price}
                  image={coffee.image}
                  rating={coffee.rating}
                  type={coffee.type}
                  size={coffee.size}
                  direction={randomDirection}
                />
              );
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="primary" size="lg" onClick={() => {}}>
            <Link to="/menu">عرض جميع المنتجات</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
