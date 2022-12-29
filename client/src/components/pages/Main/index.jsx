import styles from "./styles.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "../../UI/organisms/Header";
import Board from "../../UI/organisms/Board";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

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
