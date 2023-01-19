import React from "react";

import { MdAdd } from "react-icons/md";
import AddCardProcess from "../AddCardProcess";

import Card from "../Card";

import { Container } from "./styles";

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header id="ListHeader">
        <h2>{data.title} (25)</h2>
        {data.creatable && <AddCardProcess />}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
