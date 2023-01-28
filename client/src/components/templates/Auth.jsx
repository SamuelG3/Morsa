import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Auth(props) {
  return (
    <div>
      <Navbar color="white">
        <NavbarBrand
          id="NavbarBrand"
          className="d-flex justify-content-center"
          href="/"
        >
          Morsa
        </NavbarBrand>
      </Navbar>
      {props.children}
    </div>
  );
}
