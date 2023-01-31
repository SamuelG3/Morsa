import React, { useEffect, useState } from "react";
import "./style.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { getUser, logoutUser } from "../../../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectName,
  SET_LOGIN,
  SET_NAME,
  SET_USER,
} from "../../../../redux/features/auth/authSlice";
import UserPicture from "../UserPicture";

export default function UserMenu({ direction, ...args }) {
  //DropDown Menu
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  //User Info
  const name = useSelector(selectName);

  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const data = await getUser();

      setProfile(data);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);

  // LogOut
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };

  return (
    <div className="d-flex">
      <Dropdown isOpen={dropdownOpen} onClick={toggle} direction={direction}>
        <DropdownToggle color="none">
          <div id="userMenu" className="navLink">
            <span id="userName" className="sm-hide">
              {name}{" "}
            </span>
            <UserPicture />
          </div>
        </DropdownToggle>
        <DropdownMenu {...args} style={{ width: "280px" }}>
          <DropdownItem header className="font-weight-bold mb-0">
            <strong>{name}</strong>
            <p>{profile?.email}</p>
          </DropdownItem>
          <DropdownItem href="/profile">
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
