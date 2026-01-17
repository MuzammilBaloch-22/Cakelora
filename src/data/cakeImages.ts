import rosePetalDream from '@/assets/cakes/rose-petal-dream.jpg';
import chocolateSymphony from '@/assets/cakes/chocolate-symphony.jpg';
import rainbowUnicorn from '@/assets/cakes/rainbow-unicorn.jpg';
import enchantedGarden from '@/assets/cakes/enchanted-garden.jpg';
import strawberryBlush from '@/assets/cakes/strawberry-blush.jpg';
import lavenderDreams from '@/assets/cakes/lavender-dreams.jpg';

export const cakeImages: Record<string, string> = {
  'cake-1': rosePetalDream,
  'cake-2': chocolateSymphony,
  'cake-3': enchantedGarden,
  'cake-4': rainbowUnicorn,
  'cake-5': strawberryBlush,
  'cake-6': enchantedGarden, // Reusing for similar style
  'cake-7': rainbowUnicorn, // Kids theme
  'cake-8': chocolateSymphony, // Corporate
  'cake-9': lavenderDreams,
  'cake-10': rainbowUnicorn, // Kids theme
  'cake-11': enchantedGarden, // Wedding
  'cake-12': strawberryBlush, // Tropical similar
};

export const getCakeImage = (cakeId: string): string => {
  return cakeImages[cakeId] || rosePetalDream;
};
