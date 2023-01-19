import React from "react";
import Auth from "../../templates/Auth";
import { useNavigate } from "react-router-dom";

export default function PasswRecovery() {
  const navigate = useNavigate();

  const navigateEmail = () => {
    // 👇️ navigate to /contacts
    navigate("/accounts/recovery/instructions");
  };

  return (
    <Auth>
      <div>
        <div className="d-flex h-100 justify-content-center mt-5">
          <div className="w-50">
            <form>
              <h1 className="h3 mb-3 fw-normal">Esqueceu sua senha?</h1>
              <p>
                Digite seu e-mail ou CPF e enviaremos a você instruções por
                e-mail de como redefinir sua senha.
              </p>
              <div id="email-enviado-modal"></div>

              <div className="form-floating my-3 text-left">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Seu email</label>
              </div>

              <button
                className="w-100 btn btn-lg btn-primary"
                onClick={navigateEmail}
                type="button"
              >
                Enviar Instruções
              </button>
            </form>
          </div>
        </div>
      </div>
    </Auth>
  );
}
