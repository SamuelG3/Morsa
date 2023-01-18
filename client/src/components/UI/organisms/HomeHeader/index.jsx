import React from "react";

import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center align-items-center py-3 border-bottom">
        <Link
          to="/"
          class="d-flex mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <h1 class="mx-auto">Morsa</h1>
        </Link>

        <ul class="nav nav-pills align-items-center">
          <li class="nav-item mx-auto">
            <Link to="/product" class="nav-link">
              Features
            </Link>
          </li>
          <li class="nav-item mx-auto">
            <Link to="/pricing" class="nav-link">
              Preços
            </Link>
          </li>
          <li class="nav-item mx-auto">
            <Link to="/faq" class="nav-link">
              FAQ
            </Link>
          </li>
          <li class="nav-item mx-auto">
            <Link to="/login" class="nav-link special-btn" aria-current="page">
              Já tem uma conta?
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
