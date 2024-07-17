import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Prime video
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Free to me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Channels
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Kids
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action and adventure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Documentary
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Horror
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Anime
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Science fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Historical
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Stuff 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kids
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
