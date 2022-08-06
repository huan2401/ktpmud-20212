import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "../service/news.service";

// const user = JSON.parse(localStorage.getItem("user"));

export const createNews = createAsyncThunk(
  "auth/createNews",
  async (data, thunkAPI) => {
    try {
      const response = await newsService.createNews(data);
      console.log("response create news", response.data);
      return response.data;
    } catch (error) {
      console.log("erorr register", error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [createNews.fulfilled]: (state, action) => {
      //   state.login = false;
    },
    [createNews.rejected]: (state, action) => {
      //   state.login = false;
    },
  },
});

const { reducer } = newsSlice;
// export const { checkLogin, logout } = newsSlice.actions;
export default reducer;
