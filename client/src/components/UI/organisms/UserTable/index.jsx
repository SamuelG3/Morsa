/* import React from "react";
import { Table } from "reactstrap";

import { Container } from "./styles.module";

export default function index() {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/users/all")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
          </tr>
        </thead>
        <tbody>
          {people.map(() => (
            <tr>
              <td>{`${data.firstName} ${data.lastName}`}</td>
              <td>{`${data.email}`}</td>
              <td>{`${data.function}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
 */
