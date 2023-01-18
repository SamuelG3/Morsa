import React from "react";
import ChartPie from "./svg-icons/chart-diagram-pie-svgrepo-com.svg";
import ChartGrowth from "./svg-icons/chart-growth-invest-svgrepo-com.svg";
import CommLetter from "./svg-icons/communication-letter-memo-svgrepo-com.svg";
import UserProfile from "../../../images/undraw_profile.png";
import Header from "../../UI/organisms/Header";
import { Container } from "./styles.module";
import AddCard from "../../UI/molecules/AddCard";
import KanbanCard from "../../UI/molecules/KanbanCard";


export default function UserHome() {
  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between mt-5 align-items-center ">
            <div className="d-flex align-items-center">
              <img
                id="UserProfileHeader"
                className="rounded-circle mr-3 "
                src={UserProfile}
                alt=" "
              />
              <h5 className="text-gray-800 text-wrap">
                <span id="UserNameHeader">Ada Wong</span>, adoramos ter você
                aqui! &#128588;
              </h5>
            </div>

            <div id="cards" className="d-flex my-3 mx-5">
              <a
                className="d-flex align-items-center px-3 py-2 mr-2 border rounded"
                href="/"
              >
                <div className="mr-2">
                  <img width="30" height="30" src={ChartPie} alt="" />
                </div>
                <div className="text-nowrap">
                  <p className="small font-weight-bold mb-0">Meu trabalho</p>
                  <p className="small text-gray-500 mb-0">Ver cards</p>
                </div>
              </a>

              <a
                className="d-flex align-items-center px-3 py-2 mr-2 border rounded"
                href="/"
              >
                <div className="mr-2">
                  <img width="30" height="30" src={ChartGrowth} alt=" " />
                </div>
                <div className="text-nowrap">
                  <p className="small font-weight-bold mb-0">Templates</p>
                  <p className="small text-gray-500 mb-0">Ideias pra você</p>
                </div>
              </a>

              <a
                className="d-flex align-items-center px-3 py-2 border rounded"
                href="/"
              >
                <div className="mr-2">
                  <img width="30" height="30" src={CommLetter} alt=" " />
                </div>
                <div className="text-nowrap">
                  <p className="small font-weight-bold mb-0">Ajuda</p>
                  <p className="small text-gray-500 mb-0">Tire suas dúvidas</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-5 border-bottom">
            <h3 className="font-weight-bold">Pipes</h3>
          </div>

          <div id="Pipes" className="mt-4 d-flex">
            <AddCard />

            <KanbanCard />
          </div>

          {/*    <div className="mt-5 border-bottom">
                <h3 className="font-weight-bold ">Databases</h3>
            </div>
            <div id="Databases" className="mt-4 mb-5">
            <AddCard />
        
             </div> */}
        </div>
      </Container>
    </>
  );
}
