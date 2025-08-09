/**
 * Šis failas skirtas valdyti "Produktų" skilties turinį.
 * Jame galite keisti skilties antraštę, ypatybes, produktų korteles ir sąrašus.
 */
import { Award, Truck, Calendar } from "lucide-react";

/**
 * Ikonos importuojamos iš `lucide-react` bibliotekos.
 * Norėdami naudoti kitą ikoną:
 * 1. Apsilankykite https://lucide.dev/ ir išsirinkite norimą ikoną.
 * 2. Importuokite ją viršuje, pvz.: `import { Apple } from "lucide-react";`
 * 3. Priskirkite ją `icon` laukelyje `features` skiltyje, pvz.: `icon: Apple`.
 */
export const productsContent = {
  /**
   * Skilties antraštė ir paantraštė.
   */
  header: {
    title: "Mūsų produktai",
    subtitle: "Aukštos kokybės žemės ūkio produktai, auginami su meile ir profesionalumu",
  },
  /**
   * Pagrindinių ypatybių sąrašas.
   * Kiekviena ypatybė turi ikoną, pavadinimą ir aprašymą.
   */
  features: [
    {
      icon: Award,
      title: "Sertifikuota sėkla",
      description: "2025 m. bulvės pasodintos tik iš sertifikuotos sėklos",
    },
    {
      icon: Truck,
      title: "Pristatymas",
      description: "Fasuojame pagal pageidavimą, didesnius kiekius pristatome į norimą vietą",
    },
    {
      icon: Calendar,
      title: "Ištisus metus",
      description: "Maistinėmis bulvėmis prekiaujame ištisus metus",
    },
  ],
  /**
   * Skirtukų (tabs) pavadinimai.
   */
  tabs: {
    potatoes: "Bulvės",
    crops: "Kitos kultūros",
  },
  /**
   * "Bulvių" skirtuko turinys.
   */
  potatoes: {
    card: {
      image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Bulvių veislės",
      title: "Kokybiškos bulvės",
      paragraphs: [
        "Laikomės <strong class=\"text-foreground\">„Nacionalinės Kokybės Produkto\"</strong> sertifikavimo reikalavimų.",
        "Vykdome didmeninę ir mažmeninę prekybą, turime eksporto dokumentus.",
        "Sudarome ilgalaikes ir trumpalaikes sutartis.",
      ],
      buttonText: "Užsakyti bulves",
    },
    /**
     * Bulvių veislių sąrašas.
     * Kiekviena veislė turi pavadinimą, aprašymą, spalvą ir tipą.
     */
    varieties: [
      { name: "Vineta", description: "Geltonas minkštimas, vidutiniškai miltingas, puikiai tinka košei, kepti ir tirpti.", color: "Geltona", type: "Universali" },
      { name: "Jelly", description: "Raudona žievė, kreminio, tvirtai laikomo minkštimo – ideali salotoms ir virimui.", color: "Raudona", type: "Salotoms" },
      { name: "Baltic Rosse", description: "Ryškiai raudona žievė, tvirtas baltas minkštimas – universalus variantas salotoms, troškinimui ir orkaitėje kepimui.", color: "Raudona", type: "Universali" },
      { name: "Alouette", description: "Ankstyva veislė su kreminiu minkštimu – puikiai tinka garinimui ir lengvam virimui.", color: "Kreminė", type: "Ankstyva" },
      { name: "Melody", description: "Aukštas derlingumas, geltonas minkštimas – universalus: košėms, traškučiams ir kepti.", color: "Geltona", type: "Universali" },
      { name: "Soraya", description: "Gelsvas, trapus minkštimas – idealus kepimui, traškučiams ir orkaitės patiekalams.", color: "Geltona", type: "Kepimui" },
      { name: "Barcelona", description: "Raudona žievė, geltonas minkštimas – puikiai tinka kepti orkaitėje ir troškinti.", color: "Raudona", type: "Kepimui" },
      { name: "Acoustic", description: "Nauja stalo veislė, plona odelelė, trapi tekstūra – puikiai tinka salotoms ir garinimui.", color: "Balta", type: "Salotoms" },
      { name: "Emmanuelle", description: "Universali, kreminė tekstūra, gerai laikosi sandėlyje – tinkama virti ir košėms.", color: "Kreminė", type: "Universali" },
      { name: "Queen Anne", description: "Raudona žievė su geltonu minkštimu – dekoratyvi ir skoninga salotoms.", color: "Raudona", type: "Salotoms" },
      { name: "Colomba", description: "Balta žievė, miltingas baltas minkštimas – puikiai tinka traškučiams ir kepimui.", color: "Balta", type: "Kepimui" },
    ],
  },
  /**
   * "Kitų kultūrų" skirtuko turinys. grikiai, avižos, kukurūzų grūdai, kviečiai, rapsai, garstyčios, lubinai, seradelės
   */
  otherCrops: {
    list: [
      { name: "Grikiai", description: "Aukštos kokybės grikiai, idealiai tinka maistui ir sveikam gyvenimo būdui." },
      { name: "Avižos", description: "Šviežiai nukultos avižos" },
      { name: "Kviečiai", description: "Aukštos kokybės kviečiai" },
      { name: "Rapsai", description: "Maistingi aliejiniai rapso sėmenys, naudojami tiek maistui, tiek aliejaus gamybai." },
      { name: "Garstyčios", description: "Aromatingi garstyčių grūdai" },
      { name: "Kukurūzų grūdai", description: "Brandūs, saldūs kukurūzų grūdai, naudojami maistui ir pašarams." },
			{ name: "Lubinai", description: "Baltymingi ir maistingi lubinų grūdai, tinkami pašarams ir maistui." },
			{ name: "Seradelės", description: "Kokybiškos seradelės, naudojamos maisto gamyboje ir pašarams." },
    ],
    cta: {
      title: "Užsakykite jau šiandien",
      text: "Priimame užsakymus 2025 metų derliui. Susisiekite su mumis dėl kainų ir pristatymo sąlygų.",
      buttonText: "Susisiekti",
    },
  },
};
