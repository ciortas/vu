import { Award, Leaf, Clock } from 'lucide-react';

/**
 * Šiame faile saugomas pagrindinio puslapio hero skilties turinys.
 */
export const heroContent = {
  badge: {
    icon: Award,
    text: "Aukščiausia kokybė",
  },
  title: "Švieži ir natūralūs produktai",
  highlightedTitle: "iš Valuckų ūkio",
  subtitle: "Tiesiai iš mūsų ūkio ant jūsų stalo.",
  italicSubtitle: "Kokybė, kuria galite pasitikėti.",
  features: [
    { icon: Leaf, text: "100% Natūralu" },
    { icon: Clock, text: "Visada šviežia" },
  ],
  cta: {
    phone: "+37065273696",
    primary: {
      text: "Žiūrėti produktus",
      sectionId: "products",
    },
    facebookUrl: "https://www.facebook.com/AlvyteValucks",
  },
  backgroundImage: "https://images.pexels.com/photos/31908568/pexels-photo-31908568.jpeg",
};
