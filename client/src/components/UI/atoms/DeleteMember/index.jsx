import React from "react";

import style from "./styles.module.css"
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class DeleteMember extends React.Component {
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
        <i class="bi bi-x-circle" onClick={this.toggle}></i>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody className={style.modalBody}>
            <h5 className={style.h5}>Você tem certeza?</h5>
            <p>Este usuário não será mais membro deste time.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="light" onClick={this.toggle}>
              Cancelar
            </Button>{" "}
            <Button color="danger" onClick={this.toggle}>
              Excluir{" "}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteMember;
