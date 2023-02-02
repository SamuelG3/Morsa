import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/features/auth/authSlice";
import { removePhoto, updateUser } from "../../../services/authServices";

import { Link, useNavigate } from "react-router-dom";

import { Button } from "reactstrap";
import { toast } from "react-toastify";

import Header from "../../UI/organisms/Header";
import { UserEditForm } from "./style.module";
import ChangePassword from "../../UI/atoms/ChangePassword";
import UserPicture from "../../UI/atoms/UserPicture";

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { email } = user;

  useEffect(() => {
    if (!email) {
      navigate("/profile");
    }
  }, [email, navigate]);

  const initialState = {
    name: user?.name,
    email: user?.email,
    photo: user?.photo,
  };

  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    try {
      // Handle Image upload
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "samuelsgs");
        image.append("upload_preset", "v7wo2jnf");

        // Salvando imagens no cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/samuelsgs/image/upload",
          { method: "post", body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();

        // Save Profile
        const formData = {
          name: profile.name,
          photo: profileImage ? imageURL : profile.photo,
        };

        const data = await updateUser(formData);
        console.log(data);
        toast.success("User updated");
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const delPhoto = async (e) => {
    e.preventDefault();
    try {
      const data = await removePhoto();
      console.log(data);
      toast.success("Sua foto foi alterada!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

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

            <div>
              <form className="d-flex flex-column" onSubmit={saveProfile}>
                <div className="d-flex mr-3">
                  <div className="d-flex flex-column justify-content-center">
                    <UserPicture />
                    <a title="Remover" onClick={delPhoto}>
                      Remover
                    </a>
                  </div>

                  <div className="d-flex flex-column ml-5">
                    <label className="pp-label-text">Imagem de perfil</label>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                      id="user_avatar"
                    />
                  </div>
                </div>

                <div className="d-flex flex-column my-3">
                  <label htmlFor="name">Nome</label>
                  <input
                    id="name"
                    name="name"
                    value={profile?.name}
                    onChange={handleInputChange}
                    className="formInput"
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

                <div className="d-flex flex-column my-3 mb-5">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={profile?.email}
                    type="email"
                    className="formInput"
                    disabled
                  />
                  <b>
                    As configurações da sua conta não permitem a alteração de
                    email.
                  </b>
                </div>

                <ChangePassword />
                <div className="d-flex justify-content-end">
                  <Button type="submit" className="mt-3" id="UserBtnSend">
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </UserEditForm>
    </>
  );
};

export default UserPage;
