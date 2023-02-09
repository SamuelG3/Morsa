import React, { useEffect } from "react";
import { Table } from "reactstrap";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useDispatch } from "react-redux";
import { deleteUser, getAllUsers } from "../../../../services/authServices";

import { Container } from "./styles.module";
import { useState } from "react";

export default function Index() {
  const dispatch = useDispatch();

  const delUser = async (id) => {
    console.log(id);
    await dispatch(deleteUser(id));
    await dispatch(getAllUsers());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Você tem certeza?",
      message: "Este usuário não será mais membro deste time.",
      buttons: [
        {
          label: "Remover",
          onClick: () => delUser(id),
        },
        {
          label: "Cancelar",
        },
      ],
    });
  };

  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/all`)
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person._id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={`${person.photo}`}
                    alt="Imagem de Perfil do usuário"
                    id="profilePic"
                    className="rounded-circle"
                  />
                  <div>
                    <p className="mx-2 my-0">
                      <b>{`${person.name}`}</b>
                    </p>
                    <p className="mx-2 my-0">{`${person.email}`}</p>
                  </div>
                </div>
              </td>
              <td>{`${person.role}`}</td>
              <td>
                <i
                  class="bi bi-x-circle-fill"
                  onClick={() => confirmDelete(person._id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
