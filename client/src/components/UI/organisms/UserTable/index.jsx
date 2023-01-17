import React from "react";
import { Table } from "reactstrap";

import { Container } from "./styles.module";

export default function index() {
  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome de Usuário</th>
            <th>Função</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>mark.hamill</td>
            <td>Admnistrador</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>mark.hamill</td>
            <td>Admnistrador</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>mark.hamill</td>
            <td>Admnistrador</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
