import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Star } from 'lucide-react';
import { fetchCoffeeById, fetchCoffees } from '../services/api';
import { useCart } from '../context/CartContext';
import Button from '../components/common/Button';
import ProductCard from '../components/common/ProductCard';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const { data: coffee, isLoading } = useQuery({
    queryKey: ['coffee', id],
    queryFn: () => fetchCoffeeById(id!),
    enabled: !!id,
  });

  const { data: relatedCoffees } = useQuery({
    queryKey: ['coffees'],
    queryFn: fetchCoffees,
    select: (data) => data.filter((item) => item.id !== Number(id)).slice(0, 3),
  });

  const handleAddToCart = () => {
    if (coffee) {
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: coffee.id,
          name: coffee.name,
          nameEn: coffee.nameEn,
          price: coffee.price,
          image: coffee.image,
          size: coffee.size,
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-coffee-cream flex items-center justify-center">
        <div className="text-coffee-dark text-lg">جاري التحميل...</div>
      </div>
    );
  }

  if (!coffee) {
    return (
      <div className="min-h-screen bg-coffee-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-coffee-dark mb-4">المنتج غير موجود</h2>
          <Link to="/menu" className="text-accent-primary hover:underline">العودة إلى القائمة</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-coffee-cream py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-coffee-medium">
            <Link to="/" className="hover:text-accent-primary">الرئيسية</Link>
            <span className="mx-2">/</span>
            <Link to="/menu" className="hover:text-accent-primary">القائمة</Link>
            <span className="mx-2">/</span>
            <span className="text-coffee-dark">{coffee.name}</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto">
              <motion.img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="md:w-1/2 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4">
                  <span className="inline-block bg-coffee-light/20 text-coffee-dark text-xs px-2 py-1 rounded">
                    {coffee.type === 'arabic' && 'قهوة عربية'}
                    {coffee.type === 'espresso' && 'إسبريسو'}
                    {coffee.type === 'latte' && 'لاتيه'}
                    {coffee.type === 'coldbrew' && 'كولد برو'}
                    {coffee.type === 'turkish' && 'قهوة تركية'}
                    {coffee.type === 'mocha' && 'موكا'}
                  </span>
                </div>
                
                <h1 className="font-heading text-3xl font-bold text-coffee-dark mb-2">
                  {coffee.name}
                </h1>
                
                <p className="text-coffee-medium mb-4">{coffee.nameEn}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={
                        index < Math.floor(coffee.rating)
                          ? 'text-accent-secondary fill-accent-secondary'
                          : 'text-gray-300 fill-gray-300'
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-coffee-medium">
                    ({coffee.rating})
                  </span>
                </div>
                
                <div className="text-2xl font-bold text-coffee-dark mb-6">
                  {coffee.price} ريال
                </div>
                
                <p className="mb-6 leading-relaxed text-coffee-dark">
                  {coffee.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="font-bold text-coffee-dark mb-2">المكونات:</h3>
                  <ul className="list-disc list-inside text-coffee-medium">
                    {coffee.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-coffee-dark mb-2">درجة التحميص:</h3>
                  <div className="flex gap-2 items-center">
                    <span className={`w-8 h-4 rounded ${
                      coffee.roast === 'light' 
                        ? 'bg-coffee-light ring-2 ring-offset-2 ring-coffee-light' 
                        : 'bg-coffee-light/50'
                    }`}></span>
                    <span className={`w-8 h-4 rounded ${
                      coffee.roast === 'medium' 
                        ? 'bg-coffee-medium ring-2 ring-offset-2 ring-coffee-medium' 
                        : 'bg-coffee-medium/50'
                    }`}></span>
                    <span className={`w-8 h-4 rounded ${
                      coffee.roast === 'dark' 
                        ? 'bg-coffee-dark ring-2 ring-offset-2 ring-coffee-dark' 
                        : 'bg-coffee-dark/50'
                    }`}></span>
                    <span className="ml-2 text-coffee-medium">
                      {coffee.roast === 'light' && 'فاتح'}
                      {coffee.roast === 'medium' && 'متوسط'}
                      {coffee.roast === 'dark' && 'غامق'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-gray-200 rounded">
                    <button
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="px-3 py-1 border-l border-gray-200 text-coffee-dark hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-coffee-dark">{quantity}</span>
                    <button
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="px-3 py-1 border-r border-gray-200 text-coffee-dark hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  
                  <Button
                    variant="primary"
                    onClick={handleAddToCart}
                    className="flex-grow gap-2"
                  >
                    <ShoppingCart size={18} />
                    <span>إضافة للسلة</span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedCoffees && relatedCoffees.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-coffee-dark mb-8">
              منتجات مشابهة
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCoffees.map((relatedCoffee) => (
                <ProductCard
                  key={relatedCoffee.id}
                  id={relatedCoffee.id}
                  name={relatedCoffee.name}
                  nameEn={relatedCoffee.nameEn}
                  price={relatedCoffee.price}
                  image={relatedCoffee.image}
                  rating={relatedCoffee.rating}
                  type={relatedCoffee.type}
                  size={relatedCoffee.size}
                />
              ))}
            </div>
          </div>
        )}

        {/* Back to menu */}
        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 transition-colors duration-200"
          >
            <ArrowRight size={16} />
            <span>العودة إلى القائمة</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;