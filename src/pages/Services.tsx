import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { fetchServices } from '../services/api';
import ServiceCard from '../components/common/ServiceCard';

const Services = () => {
  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center bg-coffee-dark bg-opacity-90 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg"
            alt="خلفية خدمات القهوة"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-coffee-cream mb-4">
              خدماتنا
            </h1>
            <p className="text-coffee-cream/90 text-lg">
              اكتشف مجموعة الخدمات المتميزة التي نقدمها للارتقاء بتجربة عشاق القهوة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-coffee-cream">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-10">جاري التحميل...</div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services?.map((service) => (
                <ServiceCard
                  key={service.id}
                  name={service.name}
                  nameEn={service.nameEn}
                  description={service.description}
                  image={service.image}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-coffee-dark rounded-lg overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img
                  src="https://images.pexels.com/photos/2113129/pexels-photo-2113129.jpeg"
                  alt="اشتراك شهري"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <h2 className="font-heading text-3xl font-bold text-coffee-cream mb-4">
                    اشترك في خدمة القهوة الشهرية
                  </h2>
                  <p className="text-coffee-cream/90 text-lg mb-6 leading-relaxed">
                    اختر من بين باقاتنا المتنوعة ليصلك أفضل أنواع القهوة إلى باب منزلك شهريًا مع مزايا حصرية
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-accent-secondary"></div>
                      <p className="text-coffee-cream">قهوة طازجة محمصة حديثًا</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-accent-secondary"></div>
                      <p className="text-coffee-cream">توصيل مجاني شهريًا</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-accent-secondary"></div>
                      <p className="text-coffee-cream">خصم 15% على جميع المنتجات</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-accent-secondary"></div>
                      <p className="text-coffee-cream">هدايا حصرية مع كل باقة</p>
                    </div>
                  </div>
                  
                  <button className="mt-8 bg-accent-secondary hover:bg-accent-secondary/90 text-coffee-dark font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                    اشترك الآن
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-coffee-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-coffee-dark mb-4">
              ورش عمل وتدريب
            </h2>
            <p className="text-coffee-medium text-lg">
              تعلم فنون تحضير القهوة المختلفة مع خبراء متخصصين في مجال القهوة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg"
                  alt="ورشة تحضير القهوة العربية"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-coffee-dark mb-2">
                  أساسيات تحضير القهوة العربية
                </h3>
                <p className="text-coffee-medium mb-4">
                  ورشة عمل تعلمك أصول وأساليب تحضير القهوة العربية التقليدية
                </p>
                <div className="text-coffee-dark font-bold mb-4">
                  299 ريال
                </div>
                <button className="bg-accent-primary hover:bg-accent-primary/90 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                  سجل الآن
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4816089/pexels-photo-4816089.jpeg"
                  alt="فن اللاتيه"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-coffee-dark mb-2">
                  فن اللاتيه والرسم على القهوة
                </h3>
                <p className="text-coffee-medium mb-4">
                  تعلم مهارات فن اللاتيه والإبداع في الرسم على سطح القهوة
                </p>
                <div className="text-coffee-dark font-bold mb-4">
                  349 ريال
                </div>
                <button className="bg-accent-primary hover:bg-accent-primary/90 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                  سجل الآن
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6249/coffee-roasted-beans.jpg"
                  alt="تحميص القهوة"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-coffee-dark mb-2">
                  أساسيات تحميص القهوة
                </h3>
                <p className="text-coffee-medium mb-4">
                  تعرف على أسرار تحميص القهوة وتأثير درجات التحميص المختلفة على النكهة
                </p>
                <div className="text-coffee-dark font-bold mb-4">
                  399 ريال
                </div>
                <button className="bg-accent-primary hover:bg-accent-primary/90 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                  سجل الآن
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;