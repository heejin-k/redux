import React from "react";
import selectUser from '../store/userSlice'

function Logout() {
  // const { logoutHandler } = useContext(AuthContext);

  function logOut() {
    localStorage.removeItem("testToken");
    // logoutHandler();
    // window.location.reload();
  }
  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="title login">로그아웃 하실래요?</h1>

        <button className="btn logout" onClick={logOut}>
          로그아웃
        </button>
      </div>
    </main>
  );
}

export default Logout;
