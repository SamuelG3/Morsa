import React from "react";
import { Link } from "react-router-dom";

export default function KanbanCard() {
  return (
    <Link to="/">
      <div class="itemCard">
        <div id="favoritarCard">
          <i class="bi bi-star"></i>
        </div>
        <i class="bi bi-airplane-engines-fill"></i>
        <p id="cardTitle">Projeto Uroboros</p>
        <p id="numeroDeCardsNoPipe">15 cards</p>
        <div id="opcoesDoCard">
          <i class="bi bi-three-dots-vertical"></i>
        </div>
      </div>
    </Link>

    /* <div className="itemCard">
    <div id="favoritarCard">
        <i className="bi bi-star"></i>
    </div>
<div className="icon-circle bg-warning">
<svg src={props.pipe.icon}></svg>
</div>
<p id="cardTitle">{props.pipe.title}</p>
<p id="numeroDeCardsNoPipe">{props.pipe.cards.length}</p>
<div id="opcoesDoCard">
<i className="bi bi-three-dots-vertical"></i>
</div>
</div> */
  );
}
