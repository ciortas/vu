import { MapPin, TrendingUp, Tractor, Calendar } from "lucide-react";

export const aboutContent = {
  header: {
    title: "Valuckų ūkio raida",
    subtitle: "Nuo mažo 12 hektarų ūkio iki vieno šiuolaikiškiausių Lietuvoje – mūsų kelias kupinas inovacijų ir kokybės siekimo.",
  },
  milestones: [
    {
      year: "1992",
      title: "Ūkio pradžia",
      description: "Vilkaviškio rajone Ramoniškių kaime įsikūrusio Valuckų ūkio valdos tesiekė 12 ha.",
      icon: MapPin,
    },
    {
      year: "1993",
      title: "Kultūrų plėtra",
      description: "Pradėtos auginti įvairios kultūros, iš kurių dominuoja bulvės.",
      icon: TrendingUp,
    },
    {
      year: "Šiandien",
      title: "Modernus ūkis",
      description: "Ūkis tapo vienu šiuolaikiškiausių Lietuvoje su 1000 ha žemės plotu.",
      icon: Tractor,
    },
  ],
  achievements: [
    { number: "1000", label: "ha žemės", suffix: "" },
    { number: "135", label: "ha bulvių", suffix: "" },
    { number: "30+", label: "metų patirties", suffix: "" },
    { number: "12", label: "bulvių veislių", suffix: "" },
  ],
  description: {
    icon: Calendar,
    title: "Šiuolaikiškas ūkis",
    paragraphs: [
      "Ūkio plėtrą lėmė pajamos iš cukrinių runkelių. Šiandien bulvės užima iki 135 ha iš 1000 ha bendro žemės ploto.",
      "Ūkyje taip pat auginami <strong class=\"text-foreground\">kviečiai, avižos, kukurūzai grūdams, rapsai, garstyčios, pupos, grikiai, lubinai</strong>. Kiekvienais metais kultūros šiek tiek keičiasi.",
      "Pasinaudojus ES parama, ūkis tapo vienu šiuolaikiškiausių Lietuvoje: naudojama <strong class=\"text-foreground\">moderni technika</strong>, renovuoti pastatai produkcijos paruošimui ir sandėliavimui.",
    ],
  },
};
