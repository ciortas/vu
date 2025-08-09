import { Award, Leaf, Clock } from 'lucide-react';

/**
 * Šiame faile saugomas pagrindinio puslapio hero skilties turinys.
 */
export const heroContent = {
  badge: {
    icon: Award,
    text: "Aukščiausia kokybė",
  },
  title: "Žemės ūkyje dirbame jau daugiau kaip",
  highlightedTitle: "30 metų!",
  subtitle: "Mūsų patirtis užtikrina aukštą produktų kokybę bei palankias aptarnavimo sąlygas.",
  italicSubtitle: "Apsilankykite ir nenusivilsite!",
  features: [
		{ icon: Award, text: "Sertifikuota sėkla"},
    { icon: Leaf, text: "Kokybiškos bulvės" },
    { icon: Clock, text: "Ištisus metus" },
  ],
  cta: {
    phone: "+37068729812",
    primary: {
      text: "Žiūrėti produktus",
      sectionId: "products",
    },
    facebookUrl: "https://www.facebook.com/AlvyteValucks",
  },
  backgroundImage: "https://images.pexels.com/photos/31908568/pexels-photo-31908568.jpeg",
};
