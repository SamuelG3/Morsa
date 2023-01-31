import React from "react";
import styles from "./styles.module.css";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddMembers extends React.Component {
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
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Convidar Pessoas
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <form
              className={styles.form_container} /*  onSubmit={handleSubmit} */
            >
              <h5 className={styles.title}>Convide pessoas para sua equipe</h5>
              <p className={styles.p}>
                Convide mais pessoas para colaborar e construir processos
                incríveis junto com você.
              </p>
              <br />

              <p className={styles.label}>Adicionar por nome ou email</p>
              <input
                type="email"
                placeholder="email@domínio.com"
                name="email"
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="email@domínio.com"
                name="email"
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="email@domínio.com"
                name="email"
                required
                className={styles.input}
              />

              <a href="/" className={styles.mais_pessoas}>
                + Adicionar pessoas
              </a>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Convidar
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMembers;
