import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, Home } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-coffee-cream flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <div className="flex justify-center mb-6">
          <Coffee size={80} className="text-coffee-dark" />
        </div>
        
        <h1 className="font-heading text-6xl font-bold text-coffee-dark mb-4">404</h1>
        
        <h2 className="font-heading text-2xl font-bold text-coffee-dark mb-4">
          الصفحة غير موجودة
        </h2>
        
        <p className="text-coffee-medium text-lg mb-8">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها أو حذفها.
        </p>
        
        <Button variant="primary" onClick={() => {}}>
          <Link to="/" className="flex items-center gap-2">
            <Home size={18} />
            العودة للصفحة الرئيسية
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;