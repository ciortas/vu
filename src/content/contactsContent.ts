import { Users, Briefcase, Phone, Mail, MapPin } from "lucide-react";

/**
 * Šis failas skirtas valdyti "Kontaktų" skilties turinį.
 * Čia galite keisti antraštes, savininkų ir komandos kontaktinę informaciją bei adresą.
 */
export const contactsContent = {
  /**
   * Skilties antraštės.
   */
  header: {
    title: "Susisiekite su mumis",
    subtitle: "Turite klausimų ar norite pateikti užsakymą? Mielai Jums padėsime.",
  },
  /**
   * Kontaktų kortelės. Yra dvi kortelės: "Savininkai" ir "Komanda".
   * Kiekviena kortelė turi ikoną, pavadinimą ir sąrašą kontaktų.
   * Ikonas galite keisti importuodami jas iš `lucide-react`.
   * Visą ikonų sąrašą rasite: https://lucide.dev/
   */
  cards: {
    owners: {
      icon: Users,
      title: "Savininkai",
      list: [
        {
          name: "Jonas Valuckas",
          phone: "+370 612 34567",
          email: "jonas@valuckuukis.lt",
        },
        {
          name: "Petras Valuckas",
          phone: "+370 612 34568",
          email: "petras@valuckuukis.lt",
        },
      ],
    },
    team: {
      icon: Briefcase,
      title: "Komanda",
      list: [
        {
          name: "Vadybininkas",
          role: "Pardavimai ir užsakymai",
          phone: "+370 612 34569",
          email: "pardavimai@valuckuukis.lt",
        },
        {
          name: "Agronomas",
          role: "Auginimo klausimai",
          phone: "+370 612 34570",
          email: "agronomas@valuckuukis.lt",
        },
      ],
    },
  },
  /**
   * Adreso informacija.
   */
  address: {
    title: "Mūsų adresas",
    lines: ["Valuckų g. 1,", "Valuckų k., LT-12345, Lietuvos Respublika"],
  },
};
