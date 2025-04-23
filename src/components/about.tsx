import { motion } from "framer-motion";
import { Coffee, Truck, Users } from "lucide-react";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const directions = [
    { x: -100, y: 0 }, // من اليسار
    { x: 0, y: -100 }, // من فوق
    { x: 0, y: 100 }, // من تحت
    { x: 100, y: 0 }, // من اليمين
  ];

  // دالة ترجع variant حسب الاتجاه
  const getItemVariants = (index: number) => {
    const direction = directions[index % directions.length];
    return {
      hidden: { opacity: 0, x: direction.x, y: direction.y },
      visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
    };
  };

  // البيانات الخاصة بالكروت
  const cards = [
    {
      icon: <Coffee size={28} className="text-accent-primary" />,
      title: "حبوب مختارة بعناية",
      description: "نختار أفضل حبوب البن من مصادر مستدامة حول العالم",
    },
    {
      icon: <Truck size={28} className="text-accent-primary" />,
      title: "توصيل سريع",
      description: "نوصل منتجاتنا لباب منزلك بكل عناية وسرعة",
    },
    {
      icon: <Users size={28} className="text-accent-primary" />,
      title: "خبراء في القهوة",
      description: "فريقنا من الخبراء المتخصصين في تحميص وتحضير القهوة",
    },
    {
      icon: <Coffee size={28} className="text-accent-primary" />,
      title: "تحميص يومي طازج",
      description: "نحمص القهوة يوميًا لضمان النكهة المثالية والطازجة",
    },
  ];

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
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={getItemVariants(index)}
              className="bg-white p-6 text-center"
            >
              <div className="bg-accent-secondary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-coffee-dark mb-2">
                {card.title}
              </h3>
              <p className="text-coffee-medium">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
