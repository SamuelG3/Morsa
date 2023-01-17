import React from "react";
import { Button, Container } from "reactstrap";
import UserTable from "../../UI/organisms/UserTable";
import Header from "../../UI/organisms/Header";

export default function index() {
  return (
    <div>
      <Header></Header>
      <Container>
        <div className="mt-5">
          <h4>1 pessoa nessa empresa</h4>
          <p>
            Gerencie pessoas e funções. <a href="">Saiba mais.</a>
          </p>
          <Button>Convidar Pessoas</Button>
        </div>

        <UserTable />
      </Container>
    </div>
  );
}
