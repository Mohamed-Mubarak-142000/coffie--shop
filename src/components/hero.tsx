import React from "react";
import { hero } from "../assets/images";
import { motion } from "framer-motion";
import TypewriterTitle from "./tye-writer-title";
import HeroActions from "./hero-actions";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-coffee-dark bg-opacity-90 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="خلفية القهوة"
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
          <TypewriterTitle text="تذوق سحر القهوة العربية الأصيلة" />
          <p className="text-coffee-cream/90 text-xl mb-8 leading-relaxed">
            استمتع بتجربة فريدة مع أجود أنواع القهوة المحمصة بعناية لنقدم لك
            فنجانًا لا يُنسى
          </p>

          <HeroActions />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
