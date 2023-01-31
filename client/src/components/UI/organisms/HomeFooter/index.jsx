import React from "react";

export default function HomeFooter() {
  return (
    <div className="bg-dark text-secondary px-4 py-5">
      <div className="container">
        <footer className="pt-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Ainda não conhece a Morsa?</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Por que a Morsa?
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    O que é CRM?
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Histórias de sucesso de clientes
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Edições e Preços
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Explorar todos os produtos
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Sobre a Morsa</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Nossa história
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Carreiras
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Legal
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Ser um Trailblazer
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Links populares</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Informações Legais
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Termos de Serviços
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Privacidade
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Contato
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-muted">
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Inscreva-se na nossa newsletter</h5>
                <p>
                  Notícias mensais de tudo que é importante, para se manter
                  antenado em todas novidades para o seu negócio.
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Endereço de e-mail
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="email@email.com"
                  />
                  <button
                    className="btn button-type-1 button-type-1-style py-1"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
            <p>
              © 2022 Company Morsa, Inc. <a>Todos os direitos reservados</a>
            </p>
            <ul className="list-unstyled d-flex align-items-center">
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="/">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
