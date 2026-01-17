import { CartProvider } from '@/hooks/useCart';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Cart from '@/components/Shared/Cart';
import HeroSection from '@/components/Sections/HeroSection';
import CategoriesSection from '@/components/Sections/CategoriesSection';
import BestSellersSection from '@/components/Sections/BestSellersSection';
import CustomOrderSection from '@/components/Sections/CustomOrderSection';
import WhyCakeloraSection from '@/components/Sections/WhyCakeloraSection';
import CTASection from '@/components/Sections/CTASection';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Cart />
        <main>
          <HeroSection />
          <CategoriesSection />
          <BestSellersSection />
          <CustomOrderSection />
          <WhyCakeloraSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
