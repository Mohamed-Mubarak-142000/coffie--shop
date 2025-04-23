import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypewriterTitle = ({
  text,
  speed = 100,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000); // وقت الانتظار قبل ما يعيد من الأول
      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, speed]);

  return (
    <motion.h1
      className="font-heading text-4xl md:text-6xl font-bold text-coffee-cream mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        className="inline-block w-[1px] bg-coffee-cream ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.h1>
  );
};

export default TypewriterTitle;
