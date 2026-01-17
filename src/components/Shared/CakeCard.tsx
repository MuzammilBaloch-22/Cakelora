import { useState } from 'react';
import { ShoppingBag, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Cake, CakeSize, sizeLabels, sizePriceMultiplier, categoryLabels } from '@/data/cakes';
import { getCakeImage } from '@/data/cakeImages';
import { useCart } from '@/hooks/useCart';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CakeCardProps {
  cake: Cake;
  featured?: boolean;
}

const CakeCard = ({ cake, featured = false }: CakeCardProps) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<CakeSize>(cake.sizes[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentPrice = cake.price * sizePriceMultiplier[selectedSize];

  const handleAddToCart = () => {
    addToCart(cake, selectedSize);
  };

  return (
    <>
      <div
        className={`group card-premium ${
          featured ? 'lg:flex lg:gap-8' : ''
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${
            featured ? 'lg:w-1/2' : 'aspect-square'
          }`}
        >
          <div className="img-zoom w-full h-full">
            <img
              src={getCakeImage(cake.id)}
              alt={cake.name}
              className={`w-full h-full object-cover ${
                featured ? 'lg:h-80' : ''
              }`}
            />
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {cake.isBestSeller && (
              <span className="badge-sage flex items-center gap-1">
                <Star className="w-3 h-3 fill-primary" />
                Best Seller
              </span>
            )}
            {cake.isNew && (
              <span className="badge-accent">New Arrival</span>
            )}
          </div>

          {/* Quick View Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Eye className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <span className="absolute bottom-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full font-body text-xs font-medium text-foreground">
            {categoryLabels[cake.category]}
          </span>
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {cake.name}
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
            {cake.description}
          </p>

          {/* Size Selector */}
          <div className="mb-4">
            <p className="font-body text-xs text-muted-foreground mb-2">Select Size:</p>
            <div className="flex flex-wrap gap-2">
              {cake.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1.5 rounded-full font-body text-xs font-medium transition-all duration-300 ${
                    selectedSize === size
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between">
            <div>
              <span className="font-display text-2xl font-bold text-primary">
                ${currentPrice.toFixed(2)}
              </span>
              <span className="font-body text-xs text-muted-foreground ml-2">
                {sizeLabels[selectedSize].split(' ')[0]}
              </span>
            </div>
            <Button
              onClick={handleAddToCart}
              className="btn-primary rounded-full px-4 py-2 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Add</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={getCakeImage(cake.id)}
                alt={cake.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-semibold text-foreground">
                  {cake.name}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="font-body text-muted-foreground mb-4">
                  {cake.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-body text-sm font-medium text-foreground mb-2">Category</p>
                    <span className="badge-sage">{categoryLabels[cake.category]}</span>
                  </div>
                  
                  <div>
                    <p className="font-body text-sm font-medium text-foreground mb-2">Available Sizes</p>
                    <div className="flex flex-wrap gap-2">
                      {cake.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3 py-1.5 rounded-full font-body text-xs font-medium transition-all duration-300 ${
                            selectedSize === size
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground hover:bg-primary/10'
                          }`}
                        >
                          {sizeLabels[size]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-3xl font-bold text-primary">
                        ${currentPrice.toFixed(2)}
                      </span>
                    </div>
                    <Button
                      onClick={() => {
                        handleAddToCart();
                        setIsModalOpen(false);
                      }}
                      className="w-full btn-primary rounded-full py-6 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CakeCard;
