import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        /* const url = `http://localhost:8080/password-reset`;
        const { data } = await axios.post(url, { email });
        setMsg(data.message);
        setError(""); */
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          /* setError(error.response.data.message);
          setMsg(""); */
        }
      }
    };
    return (
      <div className="ChangePassword">
        <p onClick={this.toggle} className="mx-3">
          Alterar Senha
        </p>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} charCode="Y">
            Alterar Senha
          </ModalHeader>
          <ModalBody>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <input
                type="password"
                placeholder="Digite uma nova senha..."
                name="new-password"
                /* onChange={(e) => setEmail(e.target.value)} */
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Confirme a nova senha..."
                name="confirmNewPassword" /* 
                onChange={(e) => setEmail(e.target.value)} */
                required
                className={styles.input}
              />
              <br />
              <input
                type="password"
                placeholder="Digite sua senha antiga!"
                name="password" /* 
                onChange={(e) => setEmail(e.target.value)} */
                required
                className={styles.input}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Alterar!
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ChangePassword;
