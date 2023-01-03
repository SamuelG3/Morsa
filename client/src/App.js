import { Route, Routes, Navigate } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Main from "./components/pages/Main";
import Signup from "./components/pages/Singup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        {user && <Route path="/home" exact element={<Home />} />}

        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/home" element={<Navigate replace to="/login" />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
