import Modal from "./modal";
import "./userForm.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeUserForm, setData } from "../redux/slices/usersSlice";

//schema to validate input elements
const schema = yup.object().shape({
  firstname: yup.string().required("**Enter a First Name**"),
  lastname: yup.string().required("**Enter a Last Name **"),
  email: yup
    .string()
    .email("**Enter a valid Email ID**")
    .required("**Enter your Mail ID**"),
  phoneNumber: yup
    .string()
    .required("**Enter Your Phone Number**")
    .min(10, "**Enter a valid 10 digit Phone Number**")
    .max(12, "**Enter a valid 10 digit Phone Number**"),
  address: yup.string().required("**Enter your Valid Address**"),
  city: yup.string().required("**Enter your City name**"),
  state: yup.string().required("**Enter your State name**"),
  country: yup.string().required("**Enter your Country name**"),
  postalCode: yup.string().required("**Enter Your Postal Code**"),
});

const UserForm = (props) => {
  const dispatch = useDispatch();
  const { users, editUserData, userAction } = useSelector(
    (state) => state.UsersState
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: useMemo(() => {
      return editUserData;
    }, [editUserData]),
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const SubmitFormHandler = (data, e) => {
    e.preventDefault();
    //generate id for each userdata
    data.id = Math.round(Math.random() * 1000000000);

    if (editUserData) {
      const filteredData = users.filter((item) => {
        return item.id !== editUserData.id;
      });

      localStorage.setItem("users", JSON.stringify(filteredData));

      dispatch(setData([data, ...filteredData]));
    } else {
      dispatch(setData([data, ...users]));
    }
    setTimeout(() => {
      dispatch(closeUserForm());
    }, 100);
  };
  useEffect(() => {
    reset(editUserData);
    localStorage.setItem("users", JSON.stringify(users));
  }, [users, editUserData, reset]);
  return (
    <Modal className="add_user_panel">
      <div>
        <h5 className="text-center text-primary">{userAction}</h5>
        <button
          className="btn btn-danger close-btn"
          onClick={() => dispatch(closeUserForm())}
        >
          X
        </button>
      </div>
      <hr />
      <form
        className="add_user_form"
        onSubmit={handleSubmit(SubmitFormHandler)}
      >
        <div className="form_content">
          <label htmlFor="username" className="">
            First name
          </label>
          <input
            type="text"
            className=" "
            id="firstname"
            {...register("firstname")}
          />
          <p className="text-danger">{errors.firstname?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="lastname" className="">
            Last name
          </label>
          <input
            type="text"
            className=" "
            id="lastname"
            {...register("lastname")}
          />
          <p className="text-danger">{errors.lastname?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="email" className="">
            Email
          </label>
          <input type="text" className=" " id="email" {...register("email")} />
          <p className="text-danger">{errors.email?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="phoneNumber" className="">
            Phone Number
          </label>
          <input
            type="number"
            className=" "
            id="phoneNumber"
            {...register("phoneNumber")}
          />
          <p className="text-danger">{errors.phoneNumber?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="address" className="">
            Address
          </label>
          <input
            type="text"
            className=" "
            id="address"
            {...register("address")}
          />
          <p className="text-danger">{errors.address?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="city" className="">
            City
          </label>
          <input type="text" className=" " id="city" {...register("city")} />
          <p className="text-danger">{errors.city?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="state" className="">
            State
          </label>
          <input type="text" className=" " id="state" {...register("state")} />
          <p className="text-danger">{errors.state?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="country" className="">
            Country
          </label>
          <input
            type="text"
            className=" "
            id="country"
            {...register("country")}
          />
          <p className="text-danger">{errors.country?.message}</p>
        </div>
        <div className="form_content">
          <label htmlFor="postalCode" className="">
            Postal Code
          </label>
          <input
            type="text"
            className=" "
            id="postalCode"
            {...register("postalCode")}
          />
          <p className="text-danger">{errors.postalCode?.message}</p>
        </div>

        <input type="submit" className="submit_button " value="Submit" />
      </form>
    </Modal>
  );
};

export default UserForm;
