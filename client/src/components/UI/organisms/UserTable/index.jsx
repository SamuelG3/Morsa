import React from "react";
import { Table } from "reactstrap";
import DeleteMember from "../../atoms/DeleteMember";

import { Container } from "./styles.module";

export default function Index() {
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
            <th> </th>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.email} id={person.email}>
              <td>
                {" "}
                <img src={`${person.photo}`} alt="" />{" "}
              </td>
              <td>{`${person.name}`}</td>
              <td>{`${person.email}`}</td>
              <td>{`${person.role}`}</td>
              <td>
                <DeleteMember />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
