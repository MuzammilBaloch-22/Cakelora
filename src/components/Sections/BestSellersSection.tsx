import { useEffect, useRef, useState } from 'react';
import { Star, TrendingUp } from 'lucide-react';
import { getBestSellers, getNewArrivals } from '@/data/cakes';
import CakeCard from '@/components/Shared/CakeCard';

const BestSellersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const bestSellers = getBestSellers();
  const newArrivals = getNewArrivals();

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
      id="bestsellers"
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-accent mb-4 inline-flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Customer Favorites
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Best Sellers & New Arrivals
          </h2>
          <p className="font-body text-muted-foreground">
            Our most loved creations, chosen by customers who know exactly what celebration tastes like
          </p>
        </div>

        {/* Best Sellers */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-primary fill-primary" />
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Best Sellers
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((cake, index) => (
              <div
                key={cake.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CakeCard cake={cake} />
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals */}
        {newArrivals.length > 0 && (
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="px-3 py-1 bg-accent/20 rounded-full">
                <span className="font-body text-sm font-semibold text-accent-foreground">NEW</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Fresh Arrivals
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newArrivals.map((cake, index) => (
                <div
                  key={cake.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CakeCard cake={cake} featured />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellersSection;
