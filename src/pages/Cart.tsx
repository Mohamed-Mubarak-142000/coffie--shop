import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/common/Button';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      // Here you would normally redirect to a thank you page
    }, 2000);
  };

  return (
    <div className="bg-coffee-cream py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl font-bold text-coffee-dark mb-8 text-center">
          عربة التسوق
        </h1>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-coffee-medium opacity-50" />
            </div>
            <h2 className="text-2xl font-bold text-coffee-dark mb-4">عربة التسوق فارغة</h2>
            <p className="text-coffee-medium mb-6">
              لم تقم بإضافة أي منتجات للعربة بعد. تصفح قائمة منتجاتنا واختر ما يناسبك.
            </p>
            <Button variant="primary">
              <Link to="/menu" className="flex items-center gap-2">
                <ShoppingBag size={18} />
                تسوق الآن
              </Link>
            </Button>
          </motion.div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-coffee-dark text-coffee-cream">
                    <tr>
                      <th className="py-4 px-6 text-right">المنتج</th>
                      <th className="py-4 px-6 text-center">السعر</th>
                      <th className="py-4 px-6 text-center">الكمية</th>
                      <th className="py-4 px-6 text-center">المجموع</th>
                      <th className="py-4 px-6 text-center">حذف</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {items.map((item) => (
                        <motion.tr
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-b border-gray-100"
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-4">
                              <Link to={`/product/${item.id}`} className="shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-20 h-20 object-cover rounded"
                                />
                              </Link>
                              <div>
                                <Link
                                  to={`/product/${item.id}`}
                                  className="font-bold text-coffee-dark hover:text-accent-primary"
                                >
                                  {item.name}
                                </Link>
                                <p className="text-sm text-coffee-medium">{item.nameEn}</p>
                                <p className="text-xs text-coffee-medium mt-1">الحجم: {item.size}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className="text-coffee-dark">{item.price} ريال</span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex justify-center">
                              <div className="flex items-center border border-gray-200 rounded">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="px-3 py-1 border-l border-gray-200 text-coffee-dark hover:bg-gray-100"
                                >
                                  -
                                </button>
                                <span className="px-4 py-1 text-coffee-dark">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-3 py-1 border-r border-gray-200 text-coffee-dark hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center font-bold text-coffee-dark">
                            {item.price * item.quantity} ريال
                          </td>
                          <td className="py-4 px-6 text-center">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-error hover:text-error/80 transition-colors duration-200"
                              aria-label="حذف المنتج"
                            >
                              <Trash2 size={18} />
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <Button variant="outline" onClick={clearCart}>
                  إفراغ العربة
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 md:w-72">
                <h3 className="font-heading font-bold text-xl text-coffee-dark mb-4">
                  ملخص الطلب
                </h3>
                
                <div className="flex justify-between mb-2">
                  <span className="text-coffee-medium">المجموع الفرعي:</span>
                  <span className="text-coffee-dark">{totalPrice} ريال</span>
                </div>
                
                <div className="flex justify-between mb-4">
                  <span className="text-coffee-medium">الشحن:</span>
                  <span className="text-coffee-dark">مجاني</span>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between mb-6">
                    <span className="font-bold text-coffee-dark">المجموع:</span>
                    <span className="font-bold text-coffee-dark">{totalPrice} ريال</span>
                  </div>
                  
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                  >
                    {isCheckingOut ? 'جاري التنفيذ...' : 'إتمام الطلب'}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 transition-colors duration-200"
              >
                <ArrowRight size={16} />
                <span>متابعة التسوق</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;