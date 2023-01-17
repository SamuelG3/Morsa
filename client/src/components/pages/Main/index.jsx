import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Navbar, Nav, NavLink, NavItem } from "reactstrap";
import Header from "../../UI/organisms/Header";
import Board from "../../UI/organisms/Board";
import "./style.css";
import SearchBar from "../../UI/atoms/SearchBar";

const Main = () => {
  return (
    <div class="KanbanPage">
      <DndProvider backend={HTML5Backend}>
        <div id="FullHeader">
          <Header />

          <Navbar
            id="kanbanNavbar"
            color="light"
            className="border-bottom d-flex justify-content-between"
          >
            <Nav className="me-auto nav-1">
              <NavItem>
                <NavLink href="/">
                  <p>
                    <i class="bi bi-inboxes"></i> Kanban{" "}
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <p>
                    <i class="bi bi-clipboard-data"></i> Relatórios
                  </p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="">
                  <p>
                    <i class="bi bi-ui-checks"></i> Formulário
                  </p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="">
                  <p>
                    <i class="bi bi-envelope"></i> Emails
                  </p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="">
                  <p>
                    <i class="bi bi-pie-chart"></i> Painéis
                  </p>
                </NavLink>
              </NavItem>
            </Nav>

            <Nav>
              <SearchBar />
              <NavItem>
                <NavLink href="">
                  <p>
                    <i class="bi bi-filter"></i>
                  </p>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <Board id="Board"/>
      </DndProvider>
    </div>
  );
};

export default Main;
