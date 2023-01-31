import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SET_NAME, SET_USER } from "../../../redux/features/auth/authSlice";
import { getUser } from "../../../services/authServices";

import { Button } from "reactstrap";

import Header from "../../UI/organisms/Header";
import { UserEditForm } from "./style.module";
import ChangePassword from "../../UI/atoms/ChangePassword";

import UserPicture from "../../UI/atoms/UserPicture";

const Profile = () => {
  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <UserEditForm>
        {" "}
        <div className="container">
          <div className="my-3">
            <div className="my-5">
              <h4 className="text-dark text-bold mb-0">Minhas configurações</h4>
              <p className="mt-0">
                Edite as informações do seu perfil e suas preferências.{" "}
                <Link to="/">Saiba mais.</Link>
              </p>
            </div>

            <div className="d-flex flex-column justify-content-center">
              <UserPicture />
            </div>

            <div className="d-flex flex-column my-3">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                value={profile?.name}
                className="formInput"
                disabled
              />
            </div>
            <div className="d-flex flex-column my-3">
              <label htmlFor="username">Usuário</label>
              <input
                id="username"
                name="username"
                defaultValue="ada-wong-32"
                disabled
                className="formInput"
              />
            </div>
            <div className="d-flex flex-column my-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={profile?.email}
                type="email"
                className="formInput"
                disabled
              />
            </div>
            <div>
              <div className="d-flex justify-content-center mt-5">
                <Link to="/edit-profile" className="w-100">
                  <Button type="" className="mt-3" id="UserBtnSend">
                    Editar Perfil
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </UserEditForm>
    </>
  );
};

export default Profile;
