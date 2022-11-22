import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const login = createAsyncThunk(
  "auth/login",
  async ({ values }, { rejectWithValue }) => {
    try {
      const response = await API.post("/login", values);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ values }, { rejectWithValue }) => {
    console.log(values);
    try {
      const response = await API.post("/register", values);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("profile"),
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    logout: (state, action) => {
      state.isAuthenticated = false;
      localStorage.removeItem("profile");
      state.error = "";
      state.user = {};
    },
  },

  extraReducers: {
    [login.pending]: (state, action) => {
      state.error = "";
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      if (action.payload.token) {
        state.loading = false;
        state.isAuthenticated = true;
        localStorage.setItem("profile", action.payload.token);
        state.error = "";
        state.user = action.payload;
      } else {
        state.loading = false;
        state.isAuthenticated = false;
        localStorage.setItem("profile", action.payload.token);
        state.user = {};
        state.error = "unable to login properly.";
      }
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [register.pending]: (state, action) => {
      state.error = "";
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      if (action.payload.token) {
        state.loading = false;
        state.isAuthenticated = true;
        localStorage.setItem("profile", action.payload.token);
        state.error = "";
        state.user = action.payload;
      } else {
        state.loading = false;
        state.isAuthenticated = false;
        localStorage.setItem("profile", action.payload.token);
        state.user = {};
        state.error = "unable to login properly.";
      }
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
