import React from "react";
import Navbar from "../view/navBar";
import Footer from "../view/footer";

const Main = (props) => {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Main;
