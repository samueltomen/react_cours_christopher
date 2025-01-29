import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MyAxios from "../../utils/interceptor.js";
import Cookies from "js-cookie";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await MyAxios.post("/login", credentials);
      const token = response.data.token;
      Cookies.set("token", token, { expires: 1 });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response?.data);
    }
  },
);

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await MyAxios.post("/register", credentials);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response?.data?.error);
    }
  },
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
