import Logo from "../../../assets/images/Knila_Logo-1.png";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-dark footer">
      <hr />

      <section className="">
        <div className="container text-center text-md-start mt-4">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img src={Logo} alt="logo" width="100%" />
              <p className="text-justify">
                Nostrud mollit culpa dolor quis id aute deserunt elit ullamco eu
                fugiat in ut dolor. Ut esse ex nisi amet ullamco anim sunt
                consectetur non. Ipsum fugiat aute sunt incididunt
                reprehenderit. Est cillum eiusmod deserunt esse magna.
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Our Services</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a href="#!" className="text-dark">
                  Link 1
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Link 2
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Link 3
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Link 4
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  background: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="#!" className="text-dark">
                  Home
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  About us
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Careers
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              <div className="row">
                <div className="col-1">
                  <i className="fa fa-home me-3"></i>
                </div>
                <div className="col-10 ">
                  No.30 , First floor , <br />
                  Kovai Plaza , RS puram , <br />
                  Kovai - 636 016
                </div>
                <div className="col-1 mt-1">
                  <i className="fa fa-envelope me-3"></i>
                </div>
                <div className="col-10 mt-1">mailtest@gmail.com</div>
                <div className="col-1 mt-1">
                  <i className="fa fa-phone me-3"></i>
                </div>
                <div className="col-10 mt-1">
                  +91 98765 41237,
                  <br />
                  +91 95641 85264
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-1 footer-copy">
        © 2023 Copyright :
        <span className="text-dark ms-2">Knila Tech Task</span>
      </div>
    </footer>
  );
};

export default Footer;
