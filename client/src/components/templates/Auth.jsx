import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Auth(props) {
  return (
    <div>
      <Navbar color="white">
        <NavbarBrand
          id="NavbarBrand"
          className="d-flex justify-content-center"
          href="/home"
        >
          Morsa
        </NavbarBrand>
      </Navbar>
      {props.children}
    </div>
  );
}
