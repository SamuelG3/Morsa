// Importing Dempendencies
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Importing Images
import ChartPie from "./svg-icons/chart-diagram-pie-svgrepo-com.svg";
import ChartGrowth from "./svg-icons/chart-growth-invest-svgrepo-com.svg";
import CommLetter from "./svg-icons/communication-letter-memo-svgrepo-com.svg";

// Importing React Components
import Header from "../../UI/organisms/Header";
import { Container } from "./styles.module";
import AddCard from "../../UI/molecules/AddBoard";
import KanbanCard from "../../UI/molecules/BoardCard";
import UserPicture from "../../UI/atoms/UserPicture";

// Importing Data
import greetings from "../../../services/greeting";

import { selectName } from "../../../redux/features/auth/authSlice";
import ErrorMess from "../../UI/atoms/ErrorMess";

//Exporting Page
export default function UserHome() {
  // Greeting quote generator
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let dataQuotes = greetings.quotes;
    let randomNum = Math.floor(Math.random() * dataQuotes.length);
    let randomQuote = dataQuotes[randomNum];

    setQuote(randomQuote.quote);
  };

  // Set profile
  const name = useSelector(selectName);

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between mt-5 align-items-center ">
            <div className="d-flex align-items-center">
              <UserPicture className="userProfileHeader" />
              <h5 className="text-gray-800 text-wrap">
                <span className="userNameHeader">{name}</span>, {quote}
              </h5>
            </div>

            <div id="cards" className="d-flex my-3 mx-5">
              <a
                className="d-flex align-items-center px-3 py-2 mr-2  rounded"
                onClick={ErrorMess}
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
                className="d-flex align-items-center px-3 py-2 mr-2  rounded"
                onClick={ErrorMess}
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
                className="d-flex align-items-center px-3 py-2  rounded"
                onClick={ErrorMess}
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
        </div>
      </Container>
    </>
  );
}
