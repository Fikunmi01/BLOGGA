import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/login";
import { SignUp } from "./components/signup";
import { Homepage } from "./components/homepage";
import { Welcome } from "./components/welcome";
import { Editor } from "./components/newPost";
// import { CookieWAuth } from "../../../backend/controllers/cookieWAuth";

const isAuthorized = localStorage.getItem("token") !== null;

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/editor" element={<Editor />} />

      </Routes>
      {isAuthorized ? <Navigate to="/homepage" /> : null}
    </>
  );
}

export default App;
