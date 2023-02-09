import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { changePassword } from "../../../../services/authServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ChangePassword() {
 
  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  const navigate = useNavigate();
  const initialState = {
    oldPassword: "",
    password: "",
    password2: "",
  };

  //Definindo useState para o form
  const [formData, setformData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  // Definindo valores para o form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  // Definindo função de evento para envio do form
  const changePass = async (e) => {
    e.preventDefault();
    //Comparando a senha nova e a confirmação
    if (password !== password2) {
      return toast.error("É preciso confirmar a nova senha!");
    }
    //Definindo uma variável para enviar para o backend
    const formData = {
      oldPassword,
      password,
    };
    //Envinado para o backend
    const data = await changePassword(formData);
    toast.success(data);
    navigate("/profile");
  };

  return (
    <div className="ChangePassword">
      <p onClick={toggle} className="mx-3">
        Alterar Senha
      </p>
      <Modal isOpen={modal} toggle={toggle}>
        <form className={styles.form_container} onSubmit={changePass}>
          <ModalHeader charCode="Y">Alterar Senha</ModalHeader>
          <ModalBody>
            <input
              type="password"
              placeholder="Digite uma nova senha..."
              name="password"
              value={password}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Confirme a nova senha..."
              name="password2"
              value={password2}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Digite sua antiga senha..."
              name="oldPassword"
              value={oldPassword}
              onChange={handleInputChange}
              required
              className={styles.input}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Alterar!
            </Button>{" "}
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
