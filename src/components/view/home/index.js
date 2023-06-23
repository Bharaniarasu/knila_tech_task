import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openUserForm,
  setData,
  setEditUserData,
} from "../../redux/slices/usersSlice";

const Home = (props) => {
  //Get data from store
  const { users } = useSelector((state) => state.UsersState);
  //assign to another state to do Edit and Delete Operation
  const [userData, setUserData] = useState(users);
  const [sortOrder, setSortOrder] = useState("ASC");
  const dispatch = useDispatch();
  //Handler to delete an user
  const userDeleteHandler = (userData) => {
    const filteredUsers = users.filter((user) => {
      return userData.id !== user.id;
    });
    const text = "Are you sure to delete this user data ?";
    if (window.confirm(text)) {
      localStorage.setItem("users", JSON.stringify(filteredUsers));
      dispatch(setData(filteredUsers));
    }
  };
  //Handler for edit user
  const userEditHandler = (user) => {
    // console.log("Before  => ", users);
    dispatch(openUserForm());
    //Set data on store to show user data on input fields
    dispatch(setEditUserData(user));
  };
  //Sort table function
  const sortTable = (str) => {
    if (users.length > 2) {
      let usersCopy = [...users];
      if (sortOrder === "ASC") {
        let sortedUser = usersCopy.sort((a, b) => {
          if (a[str].toLowerCase() > b[str].toLowerCase()) {
            return 1;
          } else if (a[str].toLowerCase() < b[str].toLowerCase()) {
            return -1;
          } else {
            return 0;
          }
        });
        setUserData(sortedUser);
        setSortOrder("DSC");
      } else if (sortOrder === "DSC") {
        let sortedUser = usersCopy.sort((a, b) => {
          if (a[str].toLowerCase() > b[str].toLowerCase()) {
            return -1;
          } else if (a[str].toLowerCase() < b[str].toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });
        setUserData(sortedUser);
        setSortOrder("ASC");
      }
    }
  };
  useEffect(() => {
    // dispatch(getData());
    // const data = localStorage.getItem("users");
    // dispatch(setData(JSON.parse(data)));
    setUserData(users);
  }, [users, dispatch]);

  return (
    <div className="row">
      <div className="col-12 mt-4">
        <button
          className="btn btn-primary float-end me-5"
          onClick={() => dispatch(openUserForm())}
        >
          Add New
        </button>
      </div>
      <div className="col-12 table-responsive ">
        <table className="table table-striped table-bordered  my-4">
          <thead className="">
            <tr className="">
              <th onClick={() => sortTable("firstname")}>
                First Name &nbsp; <i className="fa fa-sort"></i>
              </th>
              <th onClick={() => sortTable("lastname")}>
                Last Name&nbsp; <i className="fa fa-sort"></i>
              </th>
              <th onClick={() => sortTable("email")}>
                Email&nbsp; <i className="fa fa-sort"></i>
              </th>
              <th onClick={() => sortTable("phoneNumber")}>
                Phone Number &nbsp;<i className="fa fa-sort"></i>
              </th>
              <th onClick={() => sortTable("address")}>
                Address &nbsp;<i className="fa fa-sort"></i>
              </th>
              <th onClick={() => sortTable("city")}>
                City &nbsp;<i className="fa fa-sort"></i>
              </th>
              <th onClick={() => sortTable("state")}>
                State &nbsp;<i className="fa fa-sort"></i>
              </th>
              <th onClick={() => sortTable("country")}>
                Country &nbsp;<i className="fa fa-sort"></i>
              </th>
              <th onClick={() => sortTable("postalCode")}>
                Postal code&nbsp; <i className="fa fa-sort"></i>
              </th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map((user, index) => (
                <tr className="table-row" key={user.id}>
                  <td className="mt-2">{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.address}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.country}</td>
                  <td>{user.postalCode}</td>
                  <td>
                    <button
                      className="edit_button btn btn-primary"
                      onClick={() => userEditHandler(user)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete_button btn btn-danger"
                      onClick={() => userDeleteHandler(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
