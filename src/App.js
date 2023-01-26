import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './store/store'
import {createStore} from 'redux'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import UserInfo from "./pages/UserInfo";
import NotFound from "./pages/NotFound";
import { useSelector } from 'react-redux';
import { selectUser,selectUserToken } from "./store/userSlice";
import "./style.css";

function Main() {
  // const access = !!authState.token;
  const user = useSelector(selectUser)
  const token = useSelector(selectUserToken)
  console.log('유저',user)
  console.log('토큰',token)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/logout"
          element={token ? <Logout /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/user"
          element={token ? <UserInfo /> : <Navigate to="/login" />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
