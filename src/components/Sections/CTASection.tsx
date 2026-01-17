import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const assurances = [
    'Fast response within 24 hours',
    'Transparent pricing, no hidden fees',
    'Premium ingredients guaranteed',
    'Flexible payment options',
    'Satisfaction guaranteed or refund',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-primary relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Create Something
              <span className="block">Unforgettable?</span>
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Your celebration deserves a cake that's as unique as you are. Let's bring your vision to life with Cakelora's artisan touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 py-6 text-base font-medium flex items-center justify-center gap-2 shadow-elevated"
              >
                <a href="#custom" className="flex items-center gap-2">
                  Start Your Order
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 py-6 text-base font-medium"
              >
                <a href="#categories">Browse Collection</a>
              </Button>
            </div>
          </div>

          {/* Assurances */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {assurances.map((assurance, index) => (
              <div
                key={assurance}
                className="flex items-center gap-3 justify-center sm:justify-start"
              >
                <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
                <span className="font-body text-sm text-primary-foreground/90">
                  {assurance}
                </span>
              </div>
            ))}
          </div>

          {/* Contact Options */}
          <div className={`bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-primary-foreground mb-1">Call Us</p>
                  <p className="font-body text-primary-foreground/80 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-primary-foreground mb-1">Email Us</p>
                  <p className="font-body text-primary-foreground/80 text-sm">hello@cakelora.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-primary-foreground mb-1">Working Hours</p>
                  <p className="font-body text-primary-foreground/80 text-sm">Mon - Sat: 9AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
