import { Route, Routes, Navigate } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Main from "./components/pages/Main";
import Signup from "./components/pages/Singup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Members from "./components/pages/Members";
import UserPage from "./components/pages/UserPage";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        {user && <Route path="/members" exact element={<Members />} />}
        {user && <Route path="/user/id/edit" exact element={<UserPage />} />}

        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />

        <Route path="/home" exact element={<Home />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/user/id/edit"
          element={<Navigate replace to="/signup" />}
        />
        <Route path="/members" element={<Navigate replace to="/signup" />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
