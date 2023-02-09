import React, { useState } from "react";
import "./style.css";
import { toast } from "react-toastify";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { createBoard } from "../../../../services/boardServices";
import { useNavigate } from "react-router-dom";

export default function AddBoard() {
  // Toggle for Modal
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  // Forms

  const navigate = useNavigate();
  const initialState = {
    title: "",
    icon: "",
    colorScheme: "",
  };

  const [formData, setFormData] = useState(initialState);
  const { title, icon, colorScheme } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const create = async (e) => {
    e.preventDefault();

    if (!title || !icon || !colorScheme) {
      return toast.error("É preciso preencher todos os campos");
    }

    const boardData = {
      title,
      icon,
      colorScheme,
    };

    try {
      await createBoard(boardData);
      toast.success("Seu board foi criado!")
      navigate("/kanban");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div id="novaDatabase" className="addNewCard" onClick={toggle}>
        <i className="bi bi-plus-square-fill"></i>
        <p>Novo Kanban</p>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={create}>
          <ModalHeader toggle={toggle}>
            Vamos criar um Kanban &#128516;
          </ModalHeader>
          <ModalBody>
            <div>
              <b>Nome do Kanban</b>
              <br></br>
              <label htmlFor="title" className="small">
                Use um nome curto e descritivo
              </label>
              <input
                type="text"
                className="input"
                placeholder="Título"
                name="title"
                value={title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <b>Escolha uma cor tema:</b>
              <div className="custom-radios">
                <div>
                  <input
                    type="radio"
                    id="blueScheme"
                    name="colorScheme"
                    onChange={handleChange}
                    value="blueScheme"
                  />
                  <label for="blueScheme">
                    <span>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                        alt="Checked Icon"
                      />
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="yellowScheme"
                    name="colorScheme"
                    onChange={handleChange}
                    value="yellowScheme"
                  />
                  <label for="yellowScheme">
                    <span>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                        alt="Checked Icon"
                      />
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="redScheme"
                    name="colorScheme"
                    onChange={handleChange}
                    value="redScheme"
                  />
                  <label for="redScheme">
                    <span>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                        alt="Checked Icon"
                      />
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="greenScheme"
                    name="colorScheme"
                    onChange={handleChange}
                    value="greenScheme"
                  />
                  <label for="greenScheme">
                    <span>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                        alt="Checked Icon"
                      />
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="purpleScheme"
                    name="colorScheme"
                    onChange={handleChange}
                    value="purpleScheme"
                  />
                  <label for="purpleScheme">
                    <span>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                        alt="Checked Icon"
                      />
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="pinkScheme"
                    name="colorScheme"
                    onChange={handleChange}
                    value="pinkScheme"
                  />
                  <label for="pinkScheme">
                    <span>
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                        alt="Checked Icon"
                      />
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <b>Escolha um ícone:</b>
              <div className="custom-radios">
                <div>
                  <input
                    type="radio"
                    id="bi-airplane-fill"
                    name="icon"
                    onChange={handleChange}
                    value="bi bi-airplane-fill"
                  />
                  <label for="bi-airplane-fill">
                    <div className="iconSpan">
                      <i class="bi bi-airplane-fill"></i>
                    </div>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="bi-binoculars-fill"
                    name="icon"
                    onChange={handleChange}
                    value="bi-airplane-fill"
                  />
                  <label for="bi-binoculars-fill">
                    <div className="iconSpan">
                      <i class="bi bi-binoculars-fill"></i>
                    </div>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="bi-browser-safari"
                    name="icon"
                    onChange={handleChange}
                    value="bi bi-browser-safari"
                  />
                  <label for="bi-browser-safari">
                    <div className="iconSpan">
                      <i class="bi bi-browser-safari"></i>{" "}
                    </div>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="bi-emoji-wink-fill"
                    name="icon"
                    onChange={handleChange}
                    value="bi bi-emoji-wink-fill"
                  />
                  <label for="bi-emoji-wink-fill">
                    <div className="iconSpan">
                      <i class="bi bi-emoji-wink-fill"></i>
                    </div>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="bi-building"
                    name="icon"
                    onChange={handleChange}
                    value="bi bi-building"
                  />
                  <label for="bi-building">
                    <div className="iconSpan">
                      <i class="bi bi-building"></i>
                    </div>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="bi-boombox-fill"
                    name="icon"
                    onChange={handleChange}
                    value="bi bi-boombox-fill"
                  />
                  <label for="bi-boombox-fill">
                    <div className="iconSpan">
                      <i class="bi bi-boombox-fill"></i>
                    </div>
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="bi-box2-heart-fill"
                    name="icon"
                    onChange={handleChange}
                    value="bi bi-box2-heart-fill"
                  />
                  <label for="bi-box2-heart-fill">
                    <div className="iconSpan">
                      <i class="bi bi-box2-heart-fill"></i>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" type="submit">
              Criar!!
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
}
