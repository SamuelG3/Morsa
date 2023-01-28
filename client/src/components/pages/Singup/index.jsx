import styles from "./styles.module.css";
import Auth from "../../templates/Auth";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../../services/authServices";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SET_LOGIN, SET_NAME } from "../../../redux/features/auth/authSlice";

const Signup = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("É preciso preencher todos os campos");
    }
    if (password.length < 6) {
      return toast.error("A senha precisa ter pelo menos 6 caracteres");
    }
    if (!validateEmail(email)) {
      return toast.error("Por favor, coloque um email válido...");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      name,
      email,
      password,
    };

    try {
      const data = await registerUser(userData);
      /* console.log(data); */
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/organization/:userId");
      console.log("Usuário criado com sucesso!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Auth>
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h1>Já tem uma conta?</h1>
            <Link to="/login">
              <button type="button" className={styles.white_btn}>
                Logue
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={register}>
              <h1>Crie uma conta!</h1>
              <input
                type="text"
                placeholder="Nome"
                name="name"
                onChange={handleChange}
                value={name}
                required
                className={styles.input}
              />

              <input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={handleChange}
                value={email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Senha"
                name="password"
                onChange={handleChange}
                value={password}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Confirme a sua senha..."
                name="password2"
                onChange={handleChange}
                value={password2}
                required
                className={styles.input}
              />

              <button type="submit" className={styles.green_btn}>
                Cadastre-se
              </button>
            </form>
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default Signup;
