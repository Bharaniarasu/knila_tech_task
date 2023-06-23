import "./navbar.scss";
import Logo from "../../../assets/images/Knila_Logo-1.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="logo" width="200" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-target="#navbarContent"
            data-bs-toggle="collapse"
            aria-controls="navContent"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarContent">
            <ul className="navbar-nav gap-4 pe-4">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/mapview">
                  Map View
                </a>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="dropdown-toggle nav-link"
                  id="dropdownTrainig"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Training
                  <ul
                    className="dropdown-menu pt-4"
                    aria-labelledby="dropdownTrainig"
                  >
                    <li>
                      <a className="dropdown-item text-center" href="/">
                        Frontend Development
                      </a>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <a className="dropdown-item text-center" href="/">
                        Backend Development
                      </a>{" "}
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <a className="dropdown-item text-center" href="/">
                        Fullstack Development
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="/careers">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
