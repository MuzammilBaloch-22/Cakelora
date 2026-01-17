export interface Cake {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CakeCategory;
  occasions: Occasion[];
  recipientTypes: RecipientType[];
  sizes: CakeSize[];
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export type CakeCategory = 'birthday' | 'anniversary' | 'wedding' | 'kids' | 'custom';
export type Occasion = 'birthday' | 'anniversary' | 'wedding' | 'graduation' | 'baby-shower' | 'corporate' | 'valentines' | 'other';
export type RecipientType = 'kids' | 'couple' | 'corporate' | 'family' | 'individual';
export type CakeSize = 'small' | 'medium' | 'large' | 'xl';

export const categoryLabels: Record<CakeCategory, string> = {
  birthday: 'Birthday',
  anniversary: 'Anniversary',
  wedding: 'Wedding',
  kids: 'Kids',
  custom: 'Custom',
};

export const occasionLabels: Record<Occasion, string> = {
  birthday: 'Birthday',
  anniversary: 'Anniversary',
  wedding: 'Wedding',
  graduation: 'Graduation',
  'baby-shower': 'Baby Shower',
  corporate: 'Corporate Event',
  valentines: "Valentine's Day",
  other: 'Other',
};

export const recipientLabels: Record<RecipientType, string> = {
  kids: 'For Kids',
  couple: 'For Couples',
  corporate: 'Corporate',
  family: 'For Family',
  individual: 'Individual',
};

export const sizeLabels: Record<CakeSize, string> = {
  small: '6" (6-8 servings)',
  medium: '8" (10-14 servings)',
  large: '10" (16-20 servings)',
  xl: '12" (24-30 servings)',
};

export const sizePriceMultiplier: Record<CakeSize, number> = {
  small: 1,
  medium: 1.4,
  large: 1.8,
  xl: 2.2,
};

export const cakes: Cake[] = [
  {
    id: 'cake-1',
    name: 'Rose Petal Dream',
    description: 'Elegant vanilla cake adorned with delicate edible rose petals and buttercream rosettes',
    price: 85,
    category: 'anniversary',
    occasions: ['anniversary', 'valentines', 'wedding'],
    recipientTypes: ['couple', 'individual'],
    sizes: ['small', 'medium', 'large'],
    image: '/placeholder.svg',
    isBestSeller: true,
  },
  {
    id: 'cake-2',
    name: 'Chocolate Symphony',
    description: 'Rich Belgian chocolate layers with ganache, topped with chocolate shards and gold dust',
    price: 95,
    category: 'birthday',
    occasions: ['birthday', 'anniversary', 'corporate'],
    recipientTypes: ['individual', 'family', 'corporate'],
    sizes: ['small', 'medium', 'large', 'xl'],
    image: '/placeholder.svg',
    isBestSeller: true,
  },
  {
    id: 'cake-3',
    name: 'Enchanted Garden',
    description: 'Three-tier masterpiece with cascading sugar flowers and botanical fondant details',
    price: 280,
    category: 'wedding',
    occasions: ['wedding'],
    recipientTypes: ['couple'],
    sizes: ['large', 'xl'],
    image: '/placeholder.svg',
  },
  {
    id: 'cake-4',
    name: 'Rainbow Unicorn Magic',
    description: 'Colorful layers with rainbow frosting, edible glitter, and a magical unicorn topper',
    price: 75,
    category: 'kids',
    occasions: ['birthday', 'baby-shower'],
    recipientTypes: ['kids'],
    sizes: ['small', 'medium', 'large'],
    image: '/placeholder.svg',
    isBestSeller: true,
  },
  {
    id: 'cake-5',
    name: 'Strawberry Blush',
    description: 'Fresh strawberry cake with cream cheese frosting and macaron decorations',
    price: 88,
    category: 'birthday',
    occasions: ['birthday', 'anniversary', 'baby-shower'],
    recipientTypes: ['individual', 'couple', 'family'],
    sizes: ['small', 'medium', 'large'],
    image: '/placeholder.svg',
    isNew: true,
  },
  {
    id: 'cake-6',
    name: 'Golden Elegance',
    description: 'White fondant with hand-painted gold accents and fresh flower arrangements',
    price: 320,
    category: 'wedding',
    occasions: ['wedding', 'anniversary'],
    recipientTypes: ['couple'],
    sizes: ['large', 'xl'],
    image: '/placeholder.svg',
  },
  {
    id: 'cake-7',
    name: 'Dinosaur Adventure',
    description: 'Chocolate cake with prehistoric landscape and edible dinosaur figurines',
    price: 70,
    category: 'kids',
    occasions: ['birthday'],
    recipientTypes: ['kids'],
    sizes: ['small', 'medium'],
    image: '/placeholder.svg',
  },
  {
    id: 'cake-8',
    name: 'Corporate Classic',
    description: 'Professional design with company branding, perfect for milestones and events',
    price: 120,
    category: 'custom',
    occasions: ['corporate', 'graduation', 'other'],
    recipientTypes: ['corporate'],
    sizes: ['medium', 'large', 'xl'],
    image: '/placeholder.svg',
  },
  {
    id: 'cake-9',
    name: 'Lavender Dreams',
    description: 'Lavender-infused sponge with honey buttercream and dried lavender garnish',
    price: 92,
    category: 'anniversary',
    occasions: ['anniversary', 'birthday', 'other'],
    recipientTypes: ['couple', 'individual'],
    sizes: ['small', 'medium', 'large'],
    image: '/placeholder.svg',
    isNew: true,
  },
  {
    id: 'cake-10',
    name: 'Princess Castle',
    description: 'Multi-tiered castle design with towers, edible pearls, and princess figurine',
    price: 150,
    category: 'kids',
    occasions: ['birthday'],
    recipientTypes: ['kids'],
    sizes: ['medium', 'large'],
    image: '/placeholder.svg',
  },
  {
    id: 'cake-11',
    name: 'Rustic Naked Cake',
    description: 'Semi-naked layers with fresh berries and seasonal blooms',
    price: 95,
    category: 'wedding',
    occasions: ['wedding', 'anniversary'],
    recipientTypes: ['couple', 'family'],
    sizes: ['medium', 'large', 'xl'],
    image: '/placeholder.svg',
  },
  {
    id: 'cake-12',
    name: 'Tropical Paradise',
    description: 'Coconut cake with passion fruit curd and tropical fruit decorations',
    price: 88,
    category: 'birthday',
    occasions: ['birthday', 'baby-shower', 'other'],
    recipientTypes: ['individual', 'family'],
    sizes: ['small', 'medium', 'large'],
    image: '/placeholder.svg',
  },
];

export const getCakesByCategory = (category: CakeCategory): Cake[] => {
  return cakes.filter(cake => cake.category === category);
};

export const getBestSellers = (): Cake[] => {
  return cakes.filter(cake => cake.isBestSeller);
};

export const getNewArrivals = (): Cake[] => {
  return cakes.filter(cake => cake.isNew);
};

export const filterCakes = (
  occasion?: Occasion,
  recipientType?: RecipientType,
  size?: CakeSize
): Cake[] => {
  return cakes.filter(cake => {
    if (occasion && !cake.occasions.includes(occasion)) return false;
    if (recipientType && !cake.recipientTypes.includes(recipientType)) return false;
    if (size && !cake.sizes.includes(size)) return false;
    return true;
  });
};
