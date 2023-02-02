import React from "react";
import { MdAdd } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddCard extends React.Component {
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
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          <MdAdd size={24} color="#FFF" />
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
        >
          <ModalHeader>Crie um card para o seu processo! &#128513;</ModalHeader>
          <ModalBody>
            <b>Dê um título ao seu card!</b>
            <br />
            <input type="text" className="input"></input>
            {/*  <br />
            <p>Selecione cor e ícone</p>
            <div></div> */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Criar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddCard;
