import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../../../images/undraw_profile.png";
import { Button } from "reactstrap";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import Header from "../../UI/organisms/Header";
import { UserEditForm } from "./style.module";
import ChangePassword from "../../UI/atoms/ChangePassword";

export default function UserPage() {
  return (
    <>
      <Header></Header>
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
              <Formik
                initialValues={{
                  name: "",
                  username: "",
                  email: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                <Form className="d-flex flex-column">
                  <div className="d-flex mr-3">
                    <div className="d-flex flex-column justify-content-center">
                      <img className="UserProfileImage" src={UserProfile} />
                      <a
                        title="Remover"
                        /* tabindex="0"
                        rel="nofollow"
                        data-method="put" */
                        href="/users/remove_avatar"
                      >
                        Remover
                      </a>
                    </div>

                    <div className="d-flex flex-column ml-5">
                      <label className="pp-label-text">Imagem de perfil</label>
                      <input
                        className="file optional"
                        type="file"
                        name="user[avatar]"
                        id="user_avatar"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column my-3">
                    <label htmlFor="name">Nome</label>
                    <Field
                      id="name"
                      name="name"
                      placeholder="Ada Wong"
                      className="formInput"
                    />
                  </div>

                  <div className="d-flex flex-column my-3">
                    <label htmlFor="username">Usuário</label>
                    <Field
                      id="username"
                      name="username"
                      placeholder="Ada-Wong-28"
                      className="formInput"
                    />
                  </div>

                  <div className="d-flex flex-column my-3">
                    <label htmlFor="email">Email</label>
                    <Field
                      id="email"
                      name="email"
                      placeholder="jane@acme.com"
                      type="email"
                      className="formInput"
                      disabled
                    />
                  </div>
                  <ChangePassword />
                  <div className="d-flex justify-content-end">
                    <Button type="submit" className="mt-3" id="UserBtnSend">
                      Salvar
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </UserEditForm>
    </>
  );
}

/* ReactDOM.render(<UserPage />, document.getElementById("root"));
 */
