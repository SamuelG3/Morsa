import React from "react";
import { Link } from "react-router-dom";

export default function BoardCard() {
  return (
    <div className="boardCard">
      <Link to="/kanban">
        <div className="itemCard">
          <div id="favoritarCard">
            <i className="bi bi-star"></i>
          </div>
          <i id="icon" className="bi bi-airplane-engines-fill"></i>
          <p id="cardTitle">Projeto Uroboros</p>
          <p id="numeroDeCardsNoPipe">15 cards</p>
          <div id="opcoesDoCard">
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
      </Link>
    </div>
  );
}
