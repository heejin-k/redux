import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from "../store/userSlice";

function UserInfo() {
  const { authState } = useSelector(selectUser);
  console.log('g',authState)
  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="title">유저 정보 페이지입니다.</h1>
        <img className="user-img" src={authState.image} />
        <div className="text-box">
          <p className="text">
            이름 : {authState.firstName + " " + authState.lastName}
          </p>
          <p className="text">유저 닉네임: {authState.username}</p>
          <p className="text">이메일 주소 : {authState.email}</p>
        </div>
        <Link to="/logout">로그아웃 하기</Link>
      </div>
    </main>
  );
}

export default UserInfo;
