import React from "react";
import { Search } from "./style.module";

export default function SearchBar() {
  return (
    <Search>
      <form id="SearchBar" className="d-flex align-items-center">
        <input type="text" placeholder="Procurar Cards"></input>
        <i class="bi bi-search"></i>
      </form>
    </Search>
  );
}
