import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./store/AuthProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import UserInfo from "./pages/UserInfo";
import NotFound from "./pages/NotFound";
import "./style.css";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/user" element={<UserInfo />}></Route>
        </Routes>
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
