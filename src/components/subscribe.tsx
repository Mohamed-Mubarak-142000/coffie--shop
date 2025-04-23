import Button from "./common/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section className="py-20 bg-coffee-dark relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2837378/pexels-photo-2837378.jpeg"
          alt="خلفية القهوة"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.8 }}
            className="font-heading text-3xl md:text-4xl font-bold text-coffee-cream"
          >
            اشترك في خدمة القهوة الشهرية
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.8 }}
            className="text-coffee-cream/90 text-lg leading-relaxed"
          >
            استمتع بتوصيل القهوة الطازجة لمنزلك كل شهر مع خصم 15% على الاشتراكات
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <Button
              variant="primary"
              className="w-full"
              size="lg"
              onClick={() => {}}
            >
              <Link to="/services" className="font-bold">
                الاشتراك الآن
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
