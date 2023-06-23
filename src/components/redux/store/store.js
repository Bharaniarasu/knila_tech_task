import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import UsersReducer from "../slices/usersSlice";

const reducer = combineReducers({
  UsersState: UsersReducer,
});
export default configureStore({
  reducer,
  middleware: [thunk],
});
