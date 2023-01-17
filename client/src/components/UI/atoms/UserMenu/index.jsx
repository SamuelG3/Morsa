import React, { useState } from "react";
import "./style.css";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import userProfile from "../../../../images/undraw_profile.png";

import PropTypes from "prop-types";

export default function UserMenu({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} onClick={toggle} direction={direction}>
        <DropdownToggle color="none">
          <div id="userMenu" class="navLink">
            <span id="userName" className="sm-hide">
              Ada Wong{" "}
            </span>
            <img src={userProfile} alt="UserName" />
          </div>
        </DropdownToggle>
        <DropdownMenu {...args} end="true" style={{ width: "280px" }}>
          <DropdownItem text className="mt-2 font-weight-bold">
            <strong>Ada Wong</strong>
          </DropdownItem>
          <DropdownItem header>ada.wong@gmail.com</DropdownItem>
          <DropdownItem href="/user/id/edit">
            Preferências da conta
          </DropdownItem>

          <DropdownItem divider />
          <DropdownItem>Relatórios da empresa</DropdownItem>
          <DropdownItem>Trocar de empresa</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={handleLogout}>Sair</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

UserMenu.propTypes = {
  direction: PropTypes.string,
};
