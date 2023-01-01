import { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";

function UserInfo() {
  const { authState } = useContext(AuthContext);
  const [userData, setUserData] = useState(authState);
  const URL = "https://mandarin.api.weniv.co.kr/profile/";

  useEffect(() => {
    const values = Object.values(authState);
    const isAuthValid = values.reduce((prev, cur) => {
      return Boolean(prev && cur);
    });
    async function getUserData() {
      try {
        const res = await axios.get(URL + authState.accountname, {
          headers: {
            Authorization: `Bearer ${authState.token}`,
            "Content-type": "application/json",
          },
        });
        setUserData({ ...res.data.profile });
      } catch (error) {
        console.error(error);
      }
    }
    /**context api에 데이터가 없을시 getUserData fetch */
    !isAuthValid && getUserData();
  }, []);

  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="title">유저 정보 페이지입니다.</h1>
        <div className="text-box">
          <p className="text">아이디 : {userData.accountname}</p>
          <p className="text">유저네임: {userData.username}</p>
          <p className="text">소개 : {userData.intro}</p>
        </div>
        <Link to="/logout">로그아웃 하기</Link>
      </div>
    </main>
  );
}

export default UserInfo;
