import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Button from '../common/Button';

interface FilterBarProps {
  onFilter: (filters: {
    type?: string;
    roast?: string;
    minPrice?: number;
    maxPrice?: number;
  }) => void;
  coffeeTypes: string[];
  roastLevels: string[];
}

const PRICE_RANGES = [
  { min: 0, max: 100 },
  { min: 0, max: 50 },
  { min: 50, max: 100 },
];

const FilterBar = ({ onFilter, coffeeTypes, roastLevels }: FilterBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedRoast, setSelectedRoast] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<number>(0);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const handleReset = () => {
    setSelectedType('');
    setSelectedRoast('');
    setSelectedPriceRange(0);
  };

  useEffect(() => {
    const priceRange = PRICE_RANGES[selectedPriceRange];
    onFilter({
      type: selectedType || undefined,
      roast: selectedRoast || undefined,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
    });
  }, [selectedType, selectedRoast, selectedPriceRange, onFilter]);

  const getPriceRangeLabel = (index: number) => {
    if (index === 0) return 'جميع الأسعار';
    const range = PRICE_RANGES[index];
    return `${range.min} - ${range.max} ريال`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <button
        onClick={toggleFilters}
        className="w-full px-4 py-3 flex justify-between items-center text-coffee-dark"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold flex items-center gap-2">
          <Filter size={18} />
          فلترة النتائج
        </span>
        <span className="text-sm">
          {isOpen ? 'إغلاق' : 'فتح'}
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-coffee-dark mb-2">نوع القهوة</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-accent-secondary"
              >
                <option value="">جميع الأنواع</option>
                {coffeeTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'arabic' && 'عربية'}
                    {type === 'espresso' && 'إسبريسو'}
                    {type === 'latte' && 'لاتيه'}
                    {type === 'coldbrew' && 'كولد برو'}
                    {type === 'turkish' && 'تركية'}
                    {type === 'mocha' && 'موكا'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium text-coffee-dark mb-2">درجة التحميص</label>
              <select
                value={selectedRoast}
                onChange={(e) => setSelectedRoast(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-accent-secondary"
              >
                <option value="">جميع الدرجات</option>
                {roastLevels.map((roast) => (
                  <option key={roast} value={roast}>
                    {roast === 'light' && 'فاتح'}
                    {roast === 'medium' && 'متوسط'}
                    {roast === 'dark' && 'غامق'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium text-coffee-dark mb-2">نطاق السعر</label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-accent-secondary"
              >
                {PRICE_RANGES.map((_, index) => (
                  <option key={index} value={index}>
                    {getPriceRangeLabel(index)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
            >
              إعادة ضبط
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FilterBar;