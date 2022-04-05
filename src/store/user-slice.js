import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false || JSON.parse( localStorage.getItem("user"))?.isLoggedIn,
    profilePicture: null,
    name: "",
    email: "",
    phone: "",
    password: "",
  },
  reducers: {
    login(state, { payload }) {
      state.isLoggedIn = true;
      state.profilePicture = payload.profilePicture;
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.password = payload.password;
      localStorage.setItem("user", JSON.stringify({ isLoggedIn : true , ...payload }));
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
    setUser(state, { payload }) {
      state.isLoggedIn = true;
      state.profilePicture = payload.profilePicture;
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.password = payload.password;
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice.reducer;
