import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import UserTable from "../../UI/organisms/UserTable";
import Header from "../../UI/organisms/Header";
import AddMembers from "../../UI/molecules/AddMembers";

export default function Members() {
  const [peopleCount, setPeopleCount] = useState("");

  useEffect(() => {
    getPeopleoNumber();
  }, []);

  const getPeopleoNumber = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/all`)
      .then((response) => response.json())
      .then((data) => {
        const numberPeople = data.length;
        setPeopleCount(numberPeople);
      });
  };

  return (
    <div>
      <Header></Header>
      <Container>
        <div className="mt-5">
          <h4>{peopleCount} pessoa(s) nessa empresa</h4>
          <p>
            Gerencie pessoas e funções. <a href="/">Saiba mais.</a>
          </p>
          <AddMembers />
        </div>

        <UserTable />
      </Container>
    </div>
  );
}
