import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./slices/authSlice";
import workSpaceReducer from "./slices/workSpaceSlice";
import thunk from "redux-thunk";

const reducers = combineReducers({
  auth: authReducer,
  workSpace:workSpaceReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['workSpace']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
  middleware: [thunk],
});
export default store;
