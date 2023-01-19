import React from "react";
import { Table } from "reactstrap";

import { Container } from "./styles.module";

export default function index() {
const [ people, setPeople ] = React.useState([]);

  React.useEffect(() => {
fetch("")
.then((response) => response.json())
.then((data) => setPeople(data));
  }, [])

  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <th>Nome</th>
            {/*  <th>Nome de Usuário</th> */}
            <th>Email</th>
            <th>Função</th>
          </tr>
        </thead>
        <tbody>
          {people.map(() => (
            <tr>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              {/*   <td>mark.hamill</td> */}
              <td>{`${user.email}`}</td>
              <td>{`${user.function}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
