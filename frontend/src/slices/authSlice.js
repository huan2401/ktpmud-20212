import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../service/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      username,
      firstname,
      lastname,
      email,
      gender,
      avatar,
      phone,
      password,
      roles,
    },
    thunkAPI
  ) => {
    try {
      const response = await AuthService.register(
        username,
        firstname,
        lastname,
        email,
        gender,
        avatar,
        phone,
        password,
        roles
      );
      console.log("sign up data res", response);
      return response.data;
    } catch (error) {
      console.log("erorr register", error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      console.log("username pass", data);
      return { user: data };
    } catch (error) {
      // const message =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();
      // thunkAPI.dispatch(setMessage(message));
      console.log("erorr login", error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (
    {
      username,
      firstname,
      lastname,
      email,
      gender,
      phone,
      password,
      passwordOld,
    },
    thunkAPI
  ) => {
    try {
      const data = await AuthService.updateProfile(
        username,
        firstname,
        lastname,
        email,
        gender,
        phone,
        password,
        passwordOld
      );
      console.log("data updateProfile", data);
      return { user: data };
    } catch (error) {
      console.log("erorr login", error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const signUpRenter = createAsyncThunk(
  "auth/signUpRenter",
  async (_, thunkAPI) => {
    try {
      const data = await AuthService.signUpRenter();
      console.log("data updateProfile", data);
      return { user: data };
    } catch (error) {
      console.log("erorr login", error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { login: true, user }
  : { login: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkLogin(state, action) {
      if (action) {
        localStorage.setItem("login", true);
        return {
          ...state,
          login: true,
        };
      } else {
        return {
          ...state,
          login: false,
        };
      }
    },
    logout(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("login");
      return {
        ...state,
        user: null,
        login: false,
      };
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.login = false;
    },
    [register.rejected]: (state, action) => {
      state.login = false;
    },
    [login.fulfilled]: (state, action) => {
      state.login = true;
      state.user = action.payload.user.data;
    },
    [login.rejected]: (state, action) => {
      state.login = false;
      state.user = null;
    },
    [updateProfile.fulfilled]: (state, action) => {
      console.log("action.payload.user.data", action.payload.user.data);
      state.user = action.payload.user.data.data;
    },
    [signUpRenter.fulfilled]: (state, action) => {
      console.log("action.payload.user.data", action.payload.user.data);
      state.user = action.payload.user.data.user;
    },
    // [updateProfile.rejected]: (state, action) => {
    //   state.user = null;
    // },
    // [logout.fulfilled]: (state, action) => {
    //   state.login = false;
    //   state.user = null;
    // },
  },
});

const { reducer } = authSlice;
export const { checkLogin, logout } = authSlice.actions;
export default reducer;
