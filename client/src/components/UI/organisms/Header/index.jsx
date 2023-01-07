import React, { useState } from "react";
import {
  Button,
  ModalBody,
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
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="navDiv">
      <Navbar className="Navbar" expand="md">
        <NavbarBrand id="NavbarBrand" href="/">
          Morsa
        </NavbarBrand>
        <div class="d-flex align-items-center">
          <i
            id="sm-show"
            class="bi bi-three-dots-vertical navLink"
            onClick={toggle}
          ></i>

          <Nav id="sm-hide" className="ms-auto mr-5 align-items-center" navbar>
            <NavItem>
              <NavLink className="d-flex align-items-center justify-content-between navLink">
                <i class="bi bi-people"></i>
                <p className="my-0 mx-1">Pessoas (108)</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="d-flex justify-content-sm-end navLink"
                href="https://github.com/reactstrap/reactstrap"
              >
                <i class="bi bi-bell col-3 "></i>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className="d-flex justify-content-sm-end navLink"
                href="https://github.com/reactstrap/reactstrap"
              >
                <i className="bi bi-question-circle col-3"></i>
              </NavLink>
            </NavItem>
          </Nav>

          <div id="sm-hide" className="top-bar-divider"></div>

          <UserMenu />
        </div>
      </Navbar>

      <Modal isOpen={modal} toggle={toggle} {...args} fullscreen>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <Nav>
            <NavItem id="sm-hide">
              <NavLink className="d-flex align-items-center justify-content-between navLink">
                <i class="bi bi-people"></i>
                <p className="my-0 mx-1">Pessoas (108)</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="d-flex justify-content-sm-end navLink"
                href="https://github.com/reactstrap/reactstrap"
              >
                <i class="bi bi-bell col-3 "></i>
                <p id="sm-show">Notificações</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className="d-flex justify-content-sm-end navLink"
                href="https://github.com/reactstrap/reactstrap"
              >
                <i className="bi bi-question-circle col-3"></i>
                <p id="sm-show" class="w-100">
                  Perguntas frequentes
                </p>
              </NavLink>
            </NavItem>
          </Nav>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Header;
