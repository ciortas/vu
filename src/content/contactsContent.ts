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
          name: "Alvytė Valuckienė",
          phone: "+370 687 29812",
          email: "valuckuukis@gmail.com",
        },
        {
          name: "Neringa Budrevičienė",
          phone: "+370 652 73696",
          email: "neringabudreviciene@gmail.com",
        },
      ],
    },
    team: {
      icon: Briefcase,
      title: "Komanda",
      list: [
				{
          name: "Eugenijus Valuckas",
          phone: "+370 698 2748",
        },
        {
          name: "Nauris Valuckas",
          phone: "+370 68 639419",
        },
        {
          name: "Saulius Budrevičius",
          phone: "+370 612 34570",
					/* role: "Ūkvedys-sandėlininkas" */
        },
      ],
    },
  },
  /**
   * Adreso informacija.
   */
  address: {
    title: "Mūsų adresas",
    lines: ["V. Pietario g. 58, Ramoniškių k., Pilviškių sen., LT‑70303 Vilkaviškio r."],
  },
};
