import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth";
const token = JSON.parse(localStorage.getItem("token"));

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      await authService.login(email, password);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const userInfo = createAsyncThunk(
  "auth/userInfo",
  async (_, thunkAPI) => {
    try {
      const data = await authService.userInfo();
      return { user: data };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = token
  ? { isLoggedIn: true, user: null }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state) => {
      state.isLoggedIn = true;
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [userInfo.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [userInfo.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
