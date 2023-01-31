import { Route, Routes } from "react-router-dom";

// Styles
import GlobalStyle from "./styles/global";
import { Fonts } from "./styles/fonts";

// Dependencies
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import { getLoginStatus } from "./services/authServices";

// Importando páginas
import Kanban from "./components/pages/Kanban";
import Signup from "./components/pages/Singup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Members from "./components/pages/Members";
import UserPage from "./components/pages/UserPage";
import UserHome from "./components/pages/UserHome";
import ForgotPassword from "./components/pages/ForgotPassword";
import Reset from "./components/pages/Reset";
import Profile from "./components/pages/Profile";

// Any requests from the app, will be able to save credentials
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:resetToken" element={<Reset />} />
        <Route path="/kanban" exact element={<Kanban />} />
        <Route path="/members" exact element={<Members />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/edit-profile" exact element={<UserPage />} />
        <Route path="/organization/:userId" exact element={<UserHome />} />
      </Routes>
      <GlobalStyle />
      <Fonts />
    </>
  );
}

export default App;
