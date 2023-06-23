import "./App.css";
import Main from "./components/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/view/home";
import UserForm from "./components/ui/userForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./components/redux/slices/usersSlice";
import MapView from "./components/view/mapView";
function App() {
  const { showUserForm } = useSelector((state) => state.UsersState);
  const dispatch = useDispatch();

  useEffect(() => {
    //fetch data from Local Storage and set data to store value
    const data = JSON.parse(localStorage.getItem("users"));
    dispatch(setData(data));

    // if (data.length < 1) {
    // localStorage.setItem("users", JSON.stringify(users));
    // }
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Home />
                  {showUserForm && <UserForm />}
                </>
              }
            />
            <Route exact path="/mapview" element={<MapView />} />
          </Routes>
        </Main>
      </div>
    </Router>
  );
}

export default App;
