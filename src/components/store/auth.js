import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { login: false };

const authslice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    isLogin(state) {
      state.login = true;
    },
    isLogout(state) {
      state.login = false;
    },
  },
});

export default authslice.reducer;

export const authActions = authslice.actions;
