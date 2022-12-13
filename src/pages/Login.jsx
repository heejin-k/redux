import React from "react";

function Login() {
  return (
    <main class="wrapper">
      <div class="container">
        <h1 class="title login">로그인 하기</h1>
        <input
          type="text"
          id="account"
          class="input-login"
          placeholder="아이디를 입력해주세요"
        />
        <input
          type="password"
          id="password"
          class="input-login"
          placeholder="비밀번호를 입력해주세요"
        />
        <button
          class="btn login"
          onClick={() => console.log("로그인 버튼입니다")}
        >
          로그인
        </button>
      </div>
    </main>
  );
}

export default Login;
