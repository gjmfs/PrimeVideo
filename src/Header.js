import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/PrimeVideo">
            Prime video
          </NavLink>
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
                <NavLink className="nav-link" aria-current="page" to='/PrimeVideo'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='free-to-me'>
                  Free to me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="store">
                  Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="channels">
                  Channels
                </NavLink>
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
                    <NavLink className="dropdown-item" to="kids">
                      Kids
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="comedy">
                      Comedy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="Action-and-adventure">
                      Action and adventure
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="documentary">
                      Documentary
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="horror">
                      Horror
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="drama">
                      Drama
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="anime">
                      Anime
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="sci-fi">
                      Science fiction
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="historical">
                      Historical
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="my-stuff">
                  My Stuff 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="kids">
                  Kids
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
