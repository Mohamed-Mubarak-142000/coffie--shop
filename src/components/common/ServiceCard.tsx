import { motion } from 'framer-motion';

interface ServiceCardProps {
  name: string;
  nameEn: string;
  description: string;
  image: string;
}

const ServiceCard = ({ name, nameEn, description, image }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-heading font-bold text-coffee-dark text-xl mb-1">
          {name}
        </h3>
        <p className="text-coffee-medium text-sm mb-4">{nameEn}</p>
        <p className="text-coffee-dark leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;