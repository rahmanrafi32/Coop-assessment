import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link nav-text" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-text" href="#">
                About
              </a>
            </li>
          </ul>
          <form class="d-flex m-auto">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <div class="mx-4 nav-text">Admin </div>
          <div class="mx-4 ">
            <Link to="/teacher-dashboard" class="nav-text text-decoration-none">
              Teacher dash{" "}
            </Link>{" "}
          </div>
          <div class="mx-4 ">
            <Link to="/student-dashboard" class="nav-text text-decoration-none">
              Student dash
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;