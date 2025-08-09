/**
 * Šis failas skirtas valdyti bendrų svetainės elementų turinį,
 * tokių kaip antraštė (header) ir poraštė (footer).
 */
export const layoutContent = {
  /**
   * Antraštės (navigacijos) nustatymai.
   */
  header: {
    siteName: "Valuckų ūkis",
    logoUrl: "https://picsum.photos/48",
    navLinks: [
      { name: "Pradžia", sectionId: "home" },
			{ name: "Naujienos", sectionId: "news" },
      { name: "Produktai", sectionId: "products" },
      { name: "Apie mus", sectionId: "about" },
      { name: "Kontaktai", sectionId: "contacts" },
    ],
    cta: {
      phone: "+37065273696",
      facebookUrl: "https://www.facebook.com/AlvyteValucks",
    }
  },
  /**
   * Poraštės (footer) nustatymai.
   */
  footer: {
    copyright: "© 2024 Valuckų ūkis. Visos teisės saugomos.",
  },
};
