import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Palette, Clock, Shield, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Clear Communication',
    description: 'Our structured ordering process eliminates back-and-forth messaging, ensuring we understand your vision from the start.',
  },
  {
    icon: Palette,
    title: 'Design Accuracy',
    description: 'Upload reference images and specify your preferences precisely. What you envision is exactly what you\'ll receive.',
  },
  {
    icon: Clock,
    title: 'Time Efficiency',
    description: 'No lengthy phone calls or endless chat threads. Fill out our form once and receive a detailed quote within 24 hours.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every cake is crafted with premium ingredients and meticulous attention to detail. We guarantee your satisfaction.',
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: 'Our skilled pastry artists bring years of experience to every creation, ensuring professional excellence.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every cake tells a story. We pour passion into every design, making your special moments truly memorable.',
  },
];

const WhyCakeloraSection = () => {
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

  return (
    <section
      ref={sectionRef}
      id="why-cakelora"
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="badge-sage mb-4 inline-block">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Cakelora Difference
          </h2>
          <p className="font-body text-muted-foreground">
            We've reimagined the cake ordering experience to be seamless, stress-free, and delightfully simple
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={feature.title}
                className={`group p-8 rounded-3xl bg-card hover:bg-primary/5 transition-all duration-500 hover-lift ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: '500+', label: 'Happy Customers' },
            { value: '1000+', label: 'Cakes Delivered' },
            { value: '50+', label: 'Unique Designs' },
            { value: '4.9', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCakeloraSection;
