import {
  InfosBoxsReact,
  InfosBoxsRFBoot,
  InfosBoxsRFire,
} from "./PorftInfoBox/InfoBox";

export const PortfArray = [
  {
    img: require("./PortfImg/screen1.png"),
    class: "portf-img one",
    title: "Photogralexphie",
    text: " Photographie ",
    path: "https://photogralexphie.fr/",
    infoB: <InfosBoxsReact />,
  },
  {
    img: require("./PortfImg/screen2.png"),
    class: "portf-img two",
    title: "Meute2Rats",
    text: " Blog, Suivie de Portée ",
    path: "https://meute2rats.fr/",
    infoB: <InfosBoxsRFire />,
  },
  {
    img: require("./PortfImg/screen3.png"),
    class: "portf-img three",
    title: "Netflix Clone",
    text: "Clone",
    path: "https://github.com/H-R-JS",
    infoB: <InfosBoxsRFBoot />,
  },
];
