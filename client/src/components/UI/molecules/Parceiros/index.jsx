import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("./images/User1.jpg"),
    altText: "Slide 1: Lucas Maio, Redator UX na Zig Consultorias",
    caption:
      "A plataforma permite nos manter sempre conectados e engajados com o nosso público alvo, e ter uma vantagem de preferência para futuras possibilidades no mercado.",
    header: "Lucas Maio, Redator UX na Zig Consultorias",
  },
  {
    src: require("./images/User2.jpg"),
    altText: "Saoko Papi, Gerente de vendas na Motomami.",
    caption:
      "Com a Morsa, conseguimos monitorar os nossos negócios da nossa sede na Espanha, e expandir em novos espaços no mercado latino de motos.",
    header: "Saoko Papi, Gerente de vendas na Motomami.",
  },
  {
    src: require("./images/User3.jpg"),
    altText: "Theodor Maresia, Analista de Marketing na UFOs.",
    caption:
      "Nós customizamos a nossa plataforma de acordo com as nossas necessidades. A melhor parte é a simplicidade da automação.",
    header: "Theodor Maresia, Analista de Marketing na UFOs.",
  },
  {
    src: require("./images/User4.jpg"),
    altText: "Dayane Tagariana, Gestora de Vendas na Target & Ryen Co.",
    caption:
      "Com um funil de vendas bem definido, expandimos a presença da nossa marca. Em apenas seis anos, fomos de uma pequena start up de duas pessoas para uma multinacional que domina o mercado em todos os continentes.",
    header: "Dayane Tagariana, Gestora de Vendas na Target & Ryen Co.",
  },
];

const Parceiros = () => <UncontrolledCarousel items={items} />;

export default Parceiros;
