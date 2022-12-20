import { useContext } from "react";
import AuthContext from "../store/AuthProvider";
import { Link } from "react-router-dom";

function Home() {
  const ctx = useContext(AuthContext);
  return (
    <main className="wrapper">
      <div className="container">
        {/* 로그인 했을시 보이는 화면 */}
        {!!ctx.isLoggedIn && <h1 className="title">환영합니다!</h1>}
        {/* 로그인 하지 않았을시 보이는 화면 */}
        {!ctx.isLoggedIn && <h2>로그인이 필요합니다.</h2>}
        {!ctx.isLoggedIn && (
          <Link to="/login" className="link-login">
            로그인 하기!
          </Link>
        )}
      </div>
    </main>
  );
}

export default Home;
