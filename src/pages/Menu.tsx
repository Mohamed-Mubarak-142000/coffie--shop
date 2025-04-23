import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchCoffees, filterCoffees, searchCoffees } from '../services/api';
import ProductCard from '../components/common/ProductCard';
import FilterBar from '../components/filters/FilterBar';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Menu = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [filters, setFilters] = useState({
    type: '',
    roast: '',
    minPrice: 0,
    maxPrice: 100,
  });
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || '');

  const { data: allCoffees, isLoading: isLoadingAll } = useQuery({
    queryKey: ['coffees'],
    queryFn: fetchCoffees,
  });

  const { data: filteredCoffees, isLoading: isLoadingFiltered } = useQuery({
    queryKey: ['filteredCoffees', filters],
    queryFn: () => filterCoffees(filters.type, filters.roast, filters.minPrice, filters.maxPrice),
    enabled: !!filters.type || !!filters.roast || filters.minPrice > 0 || filters.maxPrice < 100,
  });

  const { data: searchedCoffees, isLoading: isLoadingSearch } = useQuery({
    queryKey: ['searchCoffees', searchQuery],
    queryFn: () => searchCoffees(searchQuery || ''),
    enabled: !!searchQuery,
  });

  const isLoading = isLoadingAll || isLoadingFiltered || isLoadingSearch;
  const coffees = searchQuery ? searchedCoffees : (filteredCoffees || allCoffees);

  const getCoffeeTypes = () => {
    if (!allCoffees) return [];
    return [...new Set(allCoffees.map(coffee => coffee.type))];
  };

  const getRoastLevels = () => {
    if (!allCoffees) return [];
    return [...new Set(allCoffees.map(coffee => coffee.roast))];
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearchQuery.trim()) {
      window.location.href = `/menu?search=${encodeURIComponent(localSearchQuery)}`;
    } else {
      window.location.href = '/menu';
    }
  };

  useEffect(() => {
    if (searchQuery) {
      setLocalSearchQuery(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 flex items-center bg-coffee-dark bg-opacity-90 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2796211/pexels-photo-2796211.jpeg"
            alt="خلفية قائمة القهوة"
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
              قائمة القهوة
            </h1>
            <p className="text-coffee-cream/90 text-lg">
              اكتشف تشكيلتنا المتنوعة من أجود أنواع القهوة المحمصة بعناية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-coffee-cream">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                placeholder="ابحث عن القهوة..."
                className="w-full py-3 px-4 pr-12 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-secondary"
              />
              <button
                type="submit"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-coffee-medium hover:text-coffee-dark"
                aria-label="بحث"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Filter and Products */}
      <section className="py-12 bg-coffee-cream">
        <div className="container mx-auto px-4">
          <FilterBar
            onFilter={handleFilterChange}
            coffeeTypes={getCoffeeTypes()}
            roastLevels={getRoastLevels()}
          />

          {isLoading ? (
            <div className="text-center py-10">جاري التحميل...</div>
          ) : coffees && coffees.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coffees.map((coffee) => (
                <ProductCard
                  key={coffee.id}
                  id={coffee.id}
                  name={coffee.name}
                  nameEn={coffee.nameEn}
                  price={coffee.price}
                  image={coffee.image}
                  rating={coffee.rating}
                  type={coffee.type}
                  size={coffee.size}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-coffee-dark text-lg">
                لم يتم العثور على أي منتجات تطابق البحث أو الفلاتر المحددة.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;