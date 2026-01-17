import { useState, useEffect, useRef } from 'react';
import { Cake, Gift, Heart, Users, Sparkles } from 'lucide-react';
import { cakes, CakeCategory, categoryLabels } from '@/data/cakes';
import CakeCard from '@/components/Shared/CakeCard';

const categories: { key: CakeCategory; icon: React.ElementType; description: string }[] = [
  { key: 'birthday', icon: Cake, description: 'Celebrate another year' },
  { key: 'anniversary', icon: Heart, description: 'Cherish your love' },
  { key: 'wedding', icon: Gift, description: 'Begin forever' },
  { key: 'kids', icon: Users, description: 'Fun & colorful' },
  { key: 'custom', icon: Sparkles, description: 'Your vision, our craft' },
];

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState<CakeCategory>('birthday');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredCakes = cakes.filter((cake) => cake.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="py-24 section-cream"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-sage mb-4 inline-block">Our Collection</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="font-body text-muted-foreground">
            Discover our handcrafted collections, each designed to make your moments unforgettable
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.key;
            
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`group flex flex-col items-center gap-2 px-6 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-card hover:bg-primary/10 text-foreground'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? '' : 'text-primary'}`} />
                <span className="font-display text-sm font-semibold">
                  {categoryLabels[category.key]}
                </span>
                <span className={`font-body text-xs ${isActive ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {category.description}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cakes Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredCakes.map((cake, index) => (
            <div
              key={cake.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CakeCard cake={cake} />
            </div>
          ))}
        </div>

        {filteredCakes.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body text-muted-foreground">
              No cakes available in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;
