import React from "react";
import LandingImage from "../../../images/Design stats-amico.svg";
import { Container } from "./styles.module";
import Empresa1 from "../../../images/fake-logos/logotype/black/fox-hub-2.png";
import Empresa2 from "../../../images/fake-logos/logotype/black/atica.png";
import Empresa3 from "../../../images/fake-logos/logotype/black/earth-2.png";
import Empresa4 from "../../../images/fake-logos/logotype/black/muzica-2.png";
import Visitor from "../../templates/Visitor";
import Parceiros from "../../UI/molecules/Parceiros";
import ErrorMess from "../../UI/atoms/ErrorMess";

export default function Home() {
  return (
    <Container>
      <Visitor>
        <div className="container col-xxl-8 px-4">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={LandingImage}
                id="LandingImage"
                className="d-block mx-lg-auto img-fluid img-float"
                alt="Ilustração isométrica de uma moça utilizando um tablet para ver uma Dashboard"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold lh-1 mb-3">
                Automatize processos em minutos.
              </h2>
              <p className="lead">
                Uma plataforma que mantém todo o seu workflow em um só lugar, da
                maneira mais descomplicada para oferecer uma experiência de
                sucesso para os seus clientes e a sua empresa.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn button-type-1 button-type-1-style btn-lg"
                  onClick={ErrorMess}
                >
                  Solicite uma demonstração
                </button>
                <button
                  type="button"
                  className="btn button-type-1 btn-lg me-md-2"
                  onClick={ErrorMess}
                >
                  Comece Já
                </button>
              </div>
            </div>
          </div>
        </div>

        <article className="parcerias-article mb-8 py-8">
          <div>
            <p>Recomendado por:</p>
            <ul className="pb-5">
              <li>
                <img src={Empresa1} alt="Logo falso de uma empresa 1" />
              </li>
              <li>
                <img src={Empresa2} alt="Logo falso de uma empresa 2" />
              </li>
              <li>
                <img src={Empresa3} alt="Logo falso de uma empresa 3" />
              </li>
              <li>
                <img src={Empresa4} alt="Logo falso de uma empresa 4" />
              </li>
            </ul>
          </div>
        </article>

        <div className="px-4 py-5">
          <div className="container">
            <div className="d-flex justify-content-between py-5 align-items-center">
              <div>
                <p className="text-uppercase">Comece hoje mesmo</p>
                <h3>Transforme seu trabalho com Morsa</h3>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn button-type-1 button-type-1-style"
                  onClick={ErrorMess}
                >
                  Fale com um especialista
                </button>
                <button
                  type="button"
                  className="btn button-type-1 me-md-2 py-2"
                  onClick={ErrorMess}
                >
                  Teste grátis
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray py-1">
          <div className="container my-5">
            <div>
              <h3 className="text-center py-3">
                O que nossos clientes falam sobre nós:
              </h3>

              <Parceiros />
            </div>
          </div>
        </div>
      </Visitor>
    </Container>
  );
}
