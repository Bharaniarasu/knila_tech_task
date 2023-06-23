import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [
      {
        firstname: "John",
        lastname: "Peter",
        phoneNumber: "9877643221",
        email: "Jpeter.t@gmail.com",
        address: "no.234, fourth street, small town,",
        city: "salem",
        state: "tamilnadu",
        country: "India",
        id: 864834097,
        postalCode: "637505",
      },
    ],
    showUserForm: false,
    userAction: "Add User",
  },
  reducers: {
    getData: (state, action) => {
      return { ...state };
    },
    setData: (state, action) => {
      return { ...state, users: action.payload };
    },
    openUserForm: (state, action) => {
      return { ...state, showUserForm: true };
    },
    closeUserForm: (state, action) => {
      return {
        ...state,
        editUserData: {},
        userAction: "Add User",
        showUserForm: false,
      };
    },
    setEditUserData: (state, action) => {
      return {
        ...state,
        userAction: "Edit User",
        editUserData: action.payload,
      };
    },
  },
});
const { actions, reducer } = UsersSlice;
export const {
  getData,
  setData,
  openUserForm,
  closeUserForm,
  setEditUserData,
} = actions;
export default reducer;
