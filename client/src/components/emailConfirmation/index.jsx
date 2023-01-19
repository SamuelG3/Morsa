import React from "react";
import Auth from "../templates/Auth";
import ForgotPass from "./password-amico.svg";
import "./styles.css";

export default function emailConfirmation() {
  return (
    <Auth>
      <div class="d-flex h-100 justify-content-center mt-5">
        <div class="w-50">
          <img
            src={ForgotPass}
            id="ForgotPass"
            alt="lady forgot her password"
          />
          <h2>Instruções de redefinição de senha enviadas</h2>
          <p className="small">
            Confira sua caixa de entrada para ver as instruções de redefinição
            de senha.
          </p>

          <button
            class="w-100 btn btn-lg btn-primary"
            type="button"
            onsubmit="return false;"
          >
            Ok, entendi!
          </button>

          <div className="mt-3 d-flex ">
            <i class="bi bi-exclamation-circle-fill"></i>
            <p>
              Não encontrou o e-mail? Verifique sua caixa de spam, se mesmo
              assim não encontrar, talvez sua conta tenha sido criada com outro
              endereço de e-mail.
            </p>
          </div>
        </div>
      </div>
    </Auth>
  );
}
