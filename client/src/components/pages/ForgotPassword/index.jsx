import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Auth from "../../templates/Auth";
import { toast } from "react-toastify";
import { forgotPassword, validateEmail } from "../../../services/authServices";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail("");
  };

  return (
    <Auth>
      <div className={styles.container}>
        <form className={styles.form_container} onSubmit={forgot}>
          <h1>Esqueceu a senha?!</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className={styles.input}
          />

          <button type="submit" className={styles.green_btn}>
            Enviar email!
          </button>
        </form>
      </div>
    </Auth>
  );
}
