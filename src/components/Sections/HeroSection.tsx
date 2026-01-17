import { useState, useEffect } from 'react';
import { Search, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { filterCakes, Occasion, RecipientType, CakeSize, occasionLabels, recipientLabels, sizeLabels } from '@/data/cakes';
import CakeCard from '@/components/Shared/CakeCard';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [occasion, setOccasion] = useState<Occasion | ''>('');
  const [recipient, setRecipient] = useState<RecipientType | ''>('');
  const [size, setSize] = useState<CakeSize | ''>('');
  const [recommendations, setRecommendations] = useState<ReturnType<typeof filterCakes>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (occasion || recipient || size) {
      const filtered = filterCakes(
        occasion || undefined,
        recipient || undefined,
        size || undefined
      );
      setRecommendations(filtered.slice(0, 3));
    } else {
      setRecommendations([]);
    }
  }, [occasion, recipient, size]);

  const resetFinder = () => {
    setOccasion('');
    setRecipient('');
    setSize('');
    setRecommendations([]);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cakelora bakery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`max-w-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge-sage mb-6 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Artisan Cake Studio
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Crafting Sweet
              <span className="text-primary block">Memories</span>
              For Every Celebration
            </h1>
            
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience the art of bespoke cake design. From intimate gatherings to grand celebrations, 
              we transform your vision into edible masterpieces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => setIsFinderOpen(!isFinderOpen)}
                className="btn-primary rounded-full px-8 py-6 text-base font-medium flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Find Your Perfect Cake
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isFinderOpen ? 'rotate-180' : ''}`} />
              </Button>
              <Button
                variant="outline"
                className="btn-outline-sage rounded-full px-8 py-6 text-base font-medium"
              >
                <a href="#categories">Browse Collection</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-body text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Custom Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Fresh Ingredients</span>
              </div>
            </div>
          </div>

          {/* Smart Cake Finder */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {isFinderOpen && (
              <div className="bg-card/95 backdrop-blur-md rounded-3xl p-8 shadow-elevated animate-scale-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Smart Cake Finder
                  </h2>
                  <button
                    onClick={resetFinder}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Reset
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Occasion */}
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-3 block">
                      What's the occasion?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(Object.entries(occasionLabels) as [Occasion, string][]).slice(0, 6).map(([key, label]) => (
                        <button
                          key={key}
                          onClick={() => setOccasion(occasion === key ? '' : key)}
                          className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                            occasion === key
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-primary/10'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recipient */}
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-3 block">
                      Who is it for?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(Object.entries(recipientLabels) as [RecipientType, string][]).map(([key, label]) => (
                        <button
                          key={key}
                          onClick={() => setRecipient(recipient === key ? '' : key)}
                          className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                            recipient === key
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-primary/10'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size */}
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-3 block">
                      Preferred size?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(Object.entries(sizeLabels) as [CakeSize, string][]).map(([key, label]) => (
                        <button
                          key={key}
                          onClick={() => setSize(size === key ? '' : key)}
                          className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                            size === key
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-primary/10'
                          }`}
                        >
                          {label.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                {recommendations.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                      Recommended for you ({recommendations.length})
                    </h3>
                    <div className="space-y-4">
                      {recommendations.map((cake) => (
                        <CakeCard key={cake.id} cake={cake} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a
          href="#categories"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="font-body text-xs">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
