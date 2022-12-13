import { Link } from "react-router-dom";

function Home() {
  return (
    <main class="wrapper">
      <div class="container">
        {/* 로그인 했을시 보이는 화면 */}
        <h1 class="title">환영합니다!</h1>
        {/* 로그인 하지 않았을시 보이는 화면 */}
        <h2>로그인이 필요합니다.</h2>
        <Link to="/login" class="link-login">
          로그인 하기!
        </Link>
      </div>
    </main>
  );
}

export default Home;
