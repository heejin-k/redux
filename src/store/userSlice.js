import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  //user 정보의 초기 세팅값은 null로 설정
  name: 'user',
  initialState:{
    id: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    gender: null,
    image: null,
    token: localStorage.getItem("testToken"),
  },
  reducers: {
  	//reducer 중 login이 작동하면, 
    login: (state, action) => {
      //전달받은 유저정보를 user에 담는다
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
      state.token = action.payload.token;
    },
    //reducer 중 logout이 작동하면,
    logout: (state) => {
      //user 정보를 null로 바꾼다
      state.user.token = null;
    },
  },
});

//login, logout을 reducer의 작동유형으로 설정하고
export const { login, logout } = userSlice.actions;

//다른 컴포넌트들에서도 user정보를 가져다 데이터바인딩할 수 있게 selector도 설정한다
export const selectUser = (state) => state;
export const selectUserToken = (state) => state.user.token;

export default userSlice.reducer;