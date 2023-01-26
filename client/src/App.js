import { Route, Routes, Navigate } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Fonts } from "./styles/fonts";
import Main from "./components/pages/Main";
import Signup from "./components/pages/Singup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Members from "./components/pages/Members";
import UserPage from "./components/pages/UserPage";
import UserHome from "./components/pages/UserHome";
import EmailVerify from "./components/pages/EmailVerify";
import ForgotPassword from "./components/pages/ForgotPassword";
import PasswordReset from "./components/pages/PasswordReset";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        {user && <Route path="/members" exact element={<Members />} />}
        {user && (
          <Route path="/user/:userId/edit" exact element={<UserPage />} />
        )}
        {user && (
          <Route path="/organization/:userId" exact element={<UserHome />} />
        )}

        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />

        <Route path="/home" exact element={<Home />} />
        <Route path="/" element={<Navigate replace to="/login" />} />

        <Route
          path="/user/:userId/edit"
          element={<Navigate replace to="/signup" />}
        />
        <Route path="/members" element={<Navigate replace to="/signup" />} />
        <Route
          path="/organization/:userId"
          element={<Navigate replace to="/home" />}
        />
      </Routes>
      <GlobalStyle />
      <Fonts />
    </>
  );
}

export default App;
