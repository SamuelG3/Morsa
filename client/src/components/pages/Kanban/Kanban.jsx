import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Header from "./components/Header";
import Board from "./components/Board";

const Kanban = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Board />

        <GlobalStyle />
      </DndProvider>
    </>
  );
};

export default Kanban;
