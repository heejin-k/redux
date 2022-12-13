import React from "react";

function Logout() {
  return (
    <main class="wrapper">
      <div class="container">
        <h1 class="title login">로그아웃 하실래요?</h1>

        <button
          class="btn logout"
          onClick={() => console.log("로그아웃 버튼입니다")}
        >
          로그아웃
        </button>
      </div>
    </main>
  );
}

export default Logout;
