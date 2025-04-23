import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { avatar } from "../assets/images";

export default function Testimonials() {
  const testimonials = [
    {
      name: "أحمد محمد",
      text: "من أفضل القهوة العربية التي تذوقتها، النكهة غنية ومميزة والقهوة طازجة دائمًا. الخدمة ممتازة والتوصيل سريع.",
      avatar: "/avatars/ahmed.jpg",
      coffeeType: "قهوة عربية بالهيل",
      location: "الرياض، السعودية",
      date: "مارس 2025",
    },
    {
      name: "سارة عبدالله",
      text: "جربت الاشتراك الشهري منذ ٣ أشهر وأنا سعيدة جدًا بالخدمة. القهوة تصل طازجة في الموعد المحدد والنكهة رائعة.",
      avatar: "/avatars/sara.jpg",
      coffeeType: "قهوة عضوية",
      location: "جدة، السعودية",
      date: "فبراير 2025",
    },
    {
      name: "خالد العتيبي",
      text: "أنا من عشاق القهوة وقد جربت العديد من الأنواع، لكن قهوتكم العربية بالهيل والزعفران هي الأفضل على الإطلاق.",
      avatar: "/avatars/khaled.jpg",
      coffeeType: "قهوة بالهيل والزعفران",
      location: "الدمام، السعودية",
      date: "يناير 2025",
    },
  ];

  return (
    <section className="py-20 bg-coffee-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            آراء عملائنا
          </h2>
          <p className="text-coffee-medium text-lg">
            ما يقوله عملاؤنا عن تجربتهم مع قهوتنا
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          className="max-w-4xl mx-auto "
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6">
                <div className="flex items-center flex-col justify-center gap-4 mb-4">
                  <img
                    src={avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <div>
                    <div className="font-heading font-bold text-coffee-dark">
                      {item.name}
                    </div>
                    <div className="text-sm text-coffee-medium">
                      {item.location}
                    </div>
                  </div>
                </div>

                <p className="text-coffee-dark my-6 font-bold leading-relaxed text-center">
                  "{item.text}"
                </p>

                <div className="flex items-center justify-between my-5">
                  <div className="text-sm text-coffee-medium mb-2">
                    نوع القهوة:{" "}
                    <span className="font-bold">{item.coffeeType}</span>
                  </div>
                  <div className="text-sm font-bold text-coffee-light">
                    {item.date}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-accent-secondary fill-accent-secondary"
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
