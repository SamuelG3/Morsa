import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Auth from "../../templates/Auth";

import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../../services/authServices";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_NAME } from "../../../redux/features/auth/authSlice";

const Login = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast.error("Todos os campos precisam estar preenchidos!");
    }
    if (!validateEmail(email)) {
      return toast.error("Por favor, utilize um email válido!");
    }

    const userData = {
      email,
      password,
    };

    try {
      const data = await loginUser(userData);
      console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/organization/:userId");
      console.log("Logado!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Auth>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={login}>
              <h1>Logue na sua conta!</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={password}
                required
                className={styles.input}
              />
              <button type="submit" className={styles.green_btn}>
                Login
              </button>
            </form>
            <a href="/forgot-password">Esqueceu sua senha?</a>
          </div>
          <div className={styles.right}>
            <h1>Novo Aqui ?</h1>
            <Link to="/signup">
              <button type="button" className={styles.white_btn}>
                Cadastre-se
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default Login;
