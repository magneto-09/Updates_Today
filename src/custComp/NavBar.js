import React from "react";

import { Link } from "react-router-dom";

import About from "./About";

export default function NavBar(props) {
  return (
    <div className="">
      <nav className="navbar  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          Updates Today
          </Link>
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
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className="dropdown-menu mx-3">
                  <li>
                    <Link className="dropdown-item" to="/business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </Link>
                <ul className="dropdown-menu mx-3">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/au`}
                    >
                      Australia
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/br`}
                    >
                      Brazil
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/cn`}
                    >
                      China
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/fr`}
                    >
                      France
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/gb`}
                    >
                      Great Britain
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/jp`}
                    >
                      Japan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/il`}
                    >
                      Israel
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/kr`}
                    >
                      South Korea
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/tw`}
                    >
                      Taiwan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/${props.category}/us`}
                    >
                      United States
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Default Props set kr rhe h NavBar k kiye --> Link m use krne k liye
NavBar.defaultProps = {
  category: "general",
};
