import { useState, useRef, useEffect } from 'react';
import { Upload, Calendar, MessageSquare, Check, ImageIcon, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { CakeCategory, CakeSize, categoryLabels, sizeLabels } from '@/data/cakes';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  size: CakeSize | '';
  category: CakeCategory | '';
  designPreference: 'inspiration' | 'replicate' | '';
  referenceImage: File | null;
  notes: string;
}

const CustomOrderSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    size: '',
    category: '',
    designPreference: '',
    referenceImage: null,
    notes: '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setFormData({ ...formData, referenceImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.eventDate || !formData.size || !formData.category) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, event date, size, and category are required",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: "Request Submitted Successfully!",
      description: "Our team will contact you shortly to discuss your custom cake.",
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      size: '',
      category: '',
      designPreference: '',
      referenceImage: null,
      notes: '',
    });
    setImagePreview(null);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <section
        ref={sectionRef}
        id="custom"
        className="py-24 section-cream"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center animate-scale-in">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 animate-fade-up">
              Request Submitted Successfully!
            </h2>
            <p className="font-body text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
              Thank you for choosing Cakelora. Our team will review your request and contact you within 24 hours to discuss your custom cake design.
            </p>

            {/* Request Summary */}
            <div className="bg-card rounded-2xl p-6 text-left mb-8 shadow-card animate-fade-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Request Summary</h3>
              <div className="space-y-3 font-body text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="text-foreground font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Event Date:</span>
                  <span className="text-foreground font-medium">{formData.eventDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="text-foreground font-medium">{formData.category && categoryLabels[formData.category]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="text-foreground font-medium">{formData.size && sizeLabels[formData.size]}</span>
                </div>
                {formData.designPreference && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Design Preference:</span>
                    <span className="text-foreground font-medium capitalize">{formData.designPreference === 'replicate' ? 'Replicate exactly' : 'Use as inspiration'}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Button
                onClick={resetForm}
                className="btn-primary rounded-full px-8"
              >
                Submit Another Request
              </Button>
              <Button
                variant="outline"
                className="btn-outline-sage rounded-full px-8"
                onClick={() => window.open('https://wa.me/15551234567', '_blank')}
              >
                Contact via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="custom"
      className="py-24 section-cream"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="badge-sage mb-4 inline-flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Custom Orders
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Create Your Dream Cake
            </h2>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              No more endless back-and-forth messages. Our structured order form ensures we understand your vision perfectly from the start, 
              saving you time and delivering exactly what you imagined.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { title: 'Clear Communication', desc: 'Structured form eliminates misunderstandings' },
                { title: 'Design Accuracy', desc: 'Upload references for precise results' },
                { title: 'Time Efficient', desc: 'No lengthy phone calls or chat threads' },
                { title: 'Quick Response', desc: 'Get a quote within 24 hours' },
              ].map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-semibold text-foreground">{benefit.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-elevated">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Request Form
              </h3>

              <div className="space-y-6">
                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-body text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-premium"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-body text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-premium"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="font-body text-sm font-medium text-foreground mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-premium"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventDate" className="font-body text-sm font-medium text-foreground mb-2 block">
                      Event Date *
                    </Label>
                    <div className="relative">
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="input-premium"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      Minimum 3 days advance notice required
                    </p>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <Label className="font-body text-sm font-medium text-foreground mb-3 block">
                    Cake Category *
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {(Object.entries(categoryLabels) as [CakeCategory, string][]).map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: key })}
                        className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                          formData.category === key
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
                  <Label className="font-body text-sm font-medium text-foreground mb-3 block">
                    Cake Size *
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.entries(sizeLabels) as [CakeSize, string][]).map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setFormData({ ...formData, size: key })}
                        className={`px-4 py-3 rounded-xl font-body text-sm transition-all duration-300 text-left ${
                          formData.size === key
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-primary/10'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reference Image */}
                <div>
                  <Label className="font-body text-sm font-medium text-foreground mb-3 block">
                    Reference Image (Optional)
                  </Label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 ${
                      imagePreview
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Reference"
                          className="max-h-40 mx-auto rounded-lg object-cover"
                        />
                        <p className="font-body text-sm text-primary mt-3">Click to change image</p>
                      </div>
                    ) : (
                      <>
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <p className="font-body text-sm text-foreground mb-1">Click to upload</p>
                        <p className="font-body text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Design Preference */}
                {imagePreview && (
                  <div className="animate-fade-up">
                    <Label className="font-body text-sm font-medium text-foreground mb-3 block">
                      Design Preference
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, designPreference: 'inspiration' })}
                        className={`px-4 py-3 rounded-xl font-body text-sm transition-all duration-300 ${
                          formData.designPreference === 'inspiration'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-primary/10'
                        }`}
                      >
                        Use as inspiration
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, designPreference: 'replicate' })}
                        className={`px-4 py-3 rounded-xl font-body text-sm transition-all duration-300 ${
                          formData.designPreference === 'replicate'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-primary/10'
                        }`}
                      >
                        Replicate exactly
                      </button>
                    </div>
                  </div>
                )}

                {/* Notes */}
                <div>
                  <Label htmlFor="notes" className="font-body text-sm font-medium text-foreground mb-2 block">
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="input-premium min-h-[100px]"
                    placeholder="Special requests, dietary requirements, flavor preferences..."
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full btn-primary rounded-full py-6 text-base font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderSection;
