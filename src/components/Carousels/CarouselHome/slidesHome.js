import slide1 from "../../../assets/images/slidesHome/slide_1.webp";
import slide2 from "../../../assets/images/slidesHome/slide_2.webp";
import slide3 from "../../../assets/images/slidesHome/slide_3.webp";

import riskManagment from "../../../assets/icons/slidesHome/risk-managment.svg";
import fastTime from "../../../assets/icons/slidesHome/fast-time.svg";
import recruitment from "../../../assets/icons/slidesHome/recruitment.svg";

const slidesHome = [
  {
    background: slide1,
    altBackground: "Persona escribiendo en una laptop.",
    icon: riskManagment,
    altIcon: "Icono que representa el manejo de riesgo.",
    atributtion: "Designed by Freepik.com",
    title: "Sin Riesgo",
    description:
      "Nuestras búsquedas cuentan con un seguro de reemplazo dependiendo de la categoría.",
  },
  {
    background: slide2,
    altBackground: "Dos personas sosteniendo un curriculum vitae.",
    icon: fastTime,
    altIcon: "Icono de un reloj indicando velocidad.",
    atributtion: "Designed by Freepik.com",
    title: "En tiempo Récord",
    description:
      "Con procesos siempre abiertos, podemos preseleccionar candidatos y presentarlos en un tiempo récord.",
  },
  {
    background: slide3,
    altBackground: "Tres personas en una oficina. Dos de ellas dandose un apretón de manos.",
    icon: recruitment,
    altIcon: "Icono que representa el reclutamiento personalizado.",
    atributtion: "Designed by Freepik.com",
    title: "Reclutamiento Personalizado",
    description:
      "El cliente cuenta con un proceso optimizado a medida, según sus necesidades.",
  },
];

export default slidesHome;
