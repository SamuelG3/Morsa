import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style.module";
import AddBoard from "../../molecules/AddBoard";

export default function BoardList() {
  const navigate = useNavigate();

  const kanban = () => {
    navigate("/kanban");
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [board, setBoard] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/board/getall`)
      .then((response) => response.json())
      .then((data) => setBoard(data));
  }, []);

  return (
    <Container>
      <div className="mb-5 pb-5">
        <div id="Pipes" className="mt-4 d-flex flex-wrap">
          <AddBoard />

          {board.map((pipe) => (
            <div
              key={pipe._id}
              id="boardCard"
              className={`${pipe.colorScheme}`}
            >
              <Link to={`/kanban/${pipe._id}`}>
                <div className="itemCard">
                  <div id="favoritarCard">
                    <i class="bi bi-star"></i>
                  </div>
                  <i id="cardIcon" className={`${pipe.icon}`}></i>
                  <p id="cardTitle">{`${pipe.title}`}</p>
                  <p id="numeroDeCardsNoPipe">15 cards</p>

                  <div id="opcoesDoCard">
                    <i className="bi bi-three-dots-vertical"></i>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
