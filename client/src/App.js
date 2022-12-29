import { Route, Routes, Navigate } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Main from "./components/pages/Main";
import Signup from "./components/pages/Singup";
import Login from "./components/pages/Login";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
