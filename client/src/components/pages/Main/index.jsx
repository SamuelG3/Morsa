import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "../../UI/organisms/Header";
import Board from "../../UI/organisms/Board";

const Main = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <Board />
      </DndProvider>
    </>
  );
};

export default Main;
