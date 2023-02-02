import React from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddBoard extends React.Component {
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
      <>
        <div id="novaDatabase" className="addNewCard" onClick={this.toggle}>
          <i className="bi bi-plus-square-fill"></i>
          <p>Novo Kanban</p>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Vamos criar um Kanban &#128516;
          </ModalHeader>
          <ModalBody>
            <b>Nome do Kanban</b>
            <p className="small">Use um nome curto e descritivo</p>

            <input type="text" required className="input" />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancelar
            </Button>
            <Button color="primary" onClick={this.toggle}>
              Criar!!
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default AddBoard;
