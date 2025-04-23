import { motion } from "framer-motion";
import { Coffee, Truck, Users } from "lucide-react";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-coffee-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            قصة عالم القهوة
          </h2>
          <p className="text-coffee-medium text-lg leading-relaxed">
            بدأت رحلتنا مع القهوة قبل أكثر من 20 عامًا، نسعى لتقديم أفضل أنواع
            القهوة العربية والعالمية المحمصة بعناية فائقة لضمان تجربة لا تُنسى
            في كل فنجان.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-accent-secondary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Coffee size={28} className="text-accent-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-coffee-dark mb-2">
              حبوب مختارة بعناية
            </h3>
            <p className="text-coffee-medium">
              نختار أفضل حبوب البن من مصادر مستدامة حول العالم
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-accent-secondary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Truck size={28} className="text-accent-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-coffee-dark mb-2">
              توصيل سريع
            </h3>
            <p className="text-coffee-medium">
              نوصل منتجاتنا لباب منزلك بكل عناية وسرعة
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-accent-secondary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Users size={28} className="text-accent-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-coffee-dark mb-2">
              خبراء في القهوة
            </h3>
            <p className="text-coffee-medium">
              فريقنا من الخبراء المتخصصين في تحميص وتحضير القهوة
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-accent-secondary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Coffee size={28} className="text-accent-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl text-coffee-dark mb-2">
              تحميص يومي طازج
            </h3>
            <p className="text-coffee-medium">
              نحمص القهوة يوميًا لضمان النكهة المثالية والطازجة
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
