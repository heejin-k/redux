import React from "react";

function Logout() {
  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="title login">로그아웃 하실래요?</h1>

        <button
          className="btn logout"
          onClick={() => console.log("로그아웃 버튼입니다")}
        >
          로그아웃
        </button>
      </div>
    </main>
  );
}

export default Logout;
