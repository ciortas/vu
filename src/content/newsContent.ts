/**
 * Šis failas skirtas valdyti "Naujienų" skilties turinį.
 * Čia galite keisti skilties antraštę, paantraštę ir pačius naujienų įrašus.
 */
import { Newspaper, Calendar, Tractor, Leaf, Award } from "lucide-react";

/**
 * Ikonos importuojamos iš `lucide-react` bibliotekos.
 * Norėdami naudoti kitą ikoną:
 * 1. Apsilankykite https://lucide.dev/ ir išsirinkite norimą ikoną.
 * 2. Importuokite ją viršuje, pvz.: `import { PieChart } from "lucide-react";`
 * 3. Priskirkite ją `icon` laukelyje, pvz.: `icon: PieChart`.
 */
export const newsContent = {
  /**
   * Skilties antraštė ir paantraštė.
   */
  header: {
    title: "Ūkio naujienos",
    subtitle: "Sekite mūsų ūkio naujienas, pranešimus ir pasiekimus.",
  },
  /**
   * Naujienų įrašų sąrašas.
   * Kiekvienas įrašas yra objektas su data, pavadinimu, turiniu ir ikona.
   * Norėdami pridėti naują įrašą, tiesiog nukopijuokite esamą objektą ir pakeiskite jo turinį.
   * Naujausi įrašai turėtų būti sąrašo viršuje.
   */
  items: [
    {
      date: "2024-07-20",
      title: "Priimami užsakymai 2025 metų derliui",
      content: "Jau dabar priimame išankstinius užsakymus 2025 metų bulvių, kviečių, garstyčių, kukurūzų grūdų ir grikių derliui. Užsitikrinkite geriausią kainą ir kokybę susisiekę su mumis!",
      icon: Calendar,
    },
    {
      date: "2024-06-15",
      title: "Sėkmingai baigėsi bulvių sodinimas",
      content: "Džiaugiamės pranešdami, kad šiemet bulvių sodinimo darbai buvo atlikti laiku. Pasodinta 135 ha bulvių, naudojant sertifikuotą sėklą. Laukiame gausaus derliaus!",
      icon: Tractor,
    },
    {
      date: "2024-05-01",
      title: "Atnaujinta sandėliavimo technika",
      content: "Investavome į modernią sandėliavimo įrangą, kuri leis dar geriau išlaikyti produkcijos kokybę ištisus metus. Mūsų produktai – visada švieži.",
      icon: Newspaper,
    },
    {
      date: "2024-04-10",
      title: "Gautas ekologinio ūkio sertifikatas",
      content: "Su džiaugsmu pranešame, kad mūsų ūkiui suteiktas ekologinio ūkio sertifikatas. Tai įrodo mūsų atsidavimą tvariam ir natūraliam ūkininkavimui.",
      icon: Leaf,
    },
    {
      date: "2024-03-22",
      title: "Laimėjome 'Metų Ūkio' apdovanojimą",
      content: "Buvome įvertinti ir laimėjome 'Metų Ūkio 2024' apdovanojimą regioninėje parodoje. Dėkojame už pasitikėjimą!",
      icon: Award,
    },
  ]
};
