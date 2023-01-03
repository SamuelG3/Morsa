import React, { useState } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

import UserMenu from "../../atoms/UserMenu";

import "./styles.css";

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  
  return (
    <div>
      <Navbar className="Navbar" expand="md">
        <NavbarBrand id="NavbarBrand" href="/">
          Morsa
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto mr-5" navbar>
            <NavItem>
              <NavLink>
                <i class="bi bi-people"></i> Pessoas (108)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                <i class="bi bi-bell"></i>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                <i class="bi bi-question-circle"></i>
              </NavLink>
            </NavItem>
          </Nav>

          <div id="divider"></div>

          <UserMenu />
        </Collapse>
      </Navbar>

      {/* <Modal isOpen={modal} toggle={toggleModal} {...args}>
        <ModalHeader toggle={toggleModal}>Você deseja sair?</ModalHeader>
        <ModalFooter>
          <Button color="primary" onClick={handleLogout}>
            Sair
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal> */}
    </div>
  );
}

export default Header;
