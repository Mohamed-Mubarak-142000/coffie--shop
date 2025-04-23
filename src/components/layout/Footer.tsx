import { Link } from 'react-router-dom';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Coffee size={24} className="text-accent-secondary" />
              <span className="font-heading text-xl font-bold">عالم القهوة</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              نقدم لكم أجود أنواع القهوة العربية والعالمية، محمصة بعناية لتقديم تجربة استثنائية في كل فنجان.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-coffee-cream hover:text-accent-secondary transition-colors duration-200"
                aria-label="فيسبوك"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-coffee-cream hover:text-accent-secondary transition-colors duration-200"
                aria-label="انستغرام"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-coffee-cream hover:text-accent-secondary transition-colors duration-200"
                aria-label="تويتر"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-heading text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-coffee-cream/80 hover:text-accent-secondary transition-colors duration-200"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="text-coffee-cream/80 hover:text-accent-secondary transition-colors duration-200"
                >
                  قائمة القهوة
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-coffee-cream/80 hover:text-accent-secondary transition-colors duration-200"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link 
                  to="/cart" 
                  className="text-coffee-cream/80 hover:text-accent-secondary transition-colors duration-200"
                >
                  عربة التسوق
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-heading text-lg font-bold mb-4">الخدمات</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-coffee-cream/80 hover:text-accent-secondary transition-colors duration-200"
                >
                  تحميص القهوة
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-coffee-cream/80 hover:text-accent-secondary transition-colors duration-200"
                >
                  توصيل القهوة
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-coffee-cream/80 hover:text-accent-secondary transition-colors duration-200"
                >
                  اشتراكات شهرية
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-coffee-cream/80 hover:text-accent-secondary transition-colors duration-200"
                >
                  ورش عمل وتدريب
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-heading text-lg font-bold mb-4">تواصل معنا</h3>
            <address className="not-italic">
              <p className="mb-2">المملكة العربية السعودية، الرياض</p>
              <p className="mb-2">شارع الملك فهد، برج القهوة</p>
              <p className="mb-2 dir-ltr text-right">+966 12 345 6789</p>
              <p className="mb-2">info@coffeeworld.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-coffee-medium mt-12 pt-6 text-center text-sm opacity-70">
          <p>© {currentYear} عالم القهوة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;