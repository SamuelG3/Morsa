import React from "react";

import { Link } from "react-router-dom";
import ErrorMess from "../../atoms/ErrorMess";

export default function HomeHeader() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center align-items-center py-3 border-bottom">
        <Link
          onClick={ErrorMess}
          className="d-flex mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <h1 id="NavbarBrand" className="mx-auto">
            Morsa
          </h1>
        </Link>

        <ul className="nav nav-pills align-items-center">
          <li className="nav-item mx-auto">
            <Link onClick={ErrorMess} className="nav-link">
              Features
            </Link>
          </li>
          <li className="nav-item mx-auto">
            <Link onClick={ErrorMess} className="nav-link">
              Preços
            </Link>
          </li>
          <li className="nav-item mx-auto">
            <Link onClick={ErrorMess} className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-item mx-auto">
            <Link to="/login" className="nav-link special-btn" aria-current="page">
              Já tem uma conta?
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
