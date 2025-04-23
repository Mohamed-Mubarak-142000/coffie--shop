import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchCoffees } from "../services/api";
import Button from "../components/common/Button";
import ProductCard from "../components/common/ProductCard";
import Hero from "../components/hero";
import About from "../components/about";

const Home = () => {
  const { data: coffees, isLoading } = useQuery({
    queryKey: ["coffees"],
    queryFn: fetchCoffees,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />

      {/* Featured Products */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coffees?.slice(0, 3).map((coffee) => (
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
                />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="primary" size="lg" onClick={() => {}}>
              <Link to="/menu">عرض جميع المنتجات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-coffee-dark relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2837378/pexels-photo-2837378.jpeg"
            alt="خلفية القهوة"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-cream mb-6">
              اشترك في خدمة القهوة الشهرية
            </h2>
            <p className="text-coffee-cream/90 text-lg mb-8 leading-relaxed">
              استمتع بتوصيل القهوة الطازجة لمنزلك كل شهر مع خصم 15% على
              الاشتراكات
            </p>
            <Button variant="secondary" size="lg" onClick={() => {}}>
              <Link to="/services">الاشتراك الآن</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Simple version */}
      <section className="py-20 bg-coffee-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
              آراء عملائنا
            </h2>
            <p className="text-coffee-medium text-lg">
              ما يقوله عملاؤنا عن تجربتهم مع قهوتنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent-secondary fill-accent-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 14.32l-6.152 3.853 1.64-7.15L.512 6.607l7.19-.625L10 0l2.298 5.982 7.19.625-4.976 4.416 1.64 7.15L10 14.32z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-coffee-dark mb-4 leading-relaxed">
                "من أفضل القهوة العربية التي تذوقتها، النكهة غنية ومميزة والقهوة
                طازجة دائمًا. الخدمة ممتازة والتوصيل سريع."
              </p>
              <div className="font-heading font-bold text-coffee-dark">
                أحمد محمد
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent-secondary fill-accent-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 14.32l-6.152 3.853 1.64-7.15L.512 6.607l7.19-.625L10 0l2.298 5.982 7.19.625-4.976 4.416 1.64 7.15L10 14.32z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-coffee-dark mb-4 leading-relaxed">
                "جربت الاشتراك الشهري منذ ٣ أشهر وأنا سعيدة جدًا بالخدمة. القهوة
                تصل طازجة في الموعد المحدد والنكهة رائعة."
              </p>
              <div className="font-heading font-bold text-coffee-dark">
                سارة عبدالله
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent-secondary fill-accent-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 14.32l-6.152 3.853 1.64-7.15L.512 6.607l7.19-.625L10 0l2.298 5.982 7.19.625-4.976 4.416 1.64 7.15L10 14.32z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-coffee-dark mb-4 leading-relaxed">
                "أنا من عشاق القهوة وقد جربت العديد من الأنواع، لكن قهوتكم
                العربية بالهيل والزعفران هي الأفضل على الإطلاق."
              </p>
              <div className="font-heading font-bold text-coffee-dark">
                خالد العتيبي
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
