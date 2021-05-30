import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../pages/Login/LoginMethods";
import { removeUser } from "../../redux/actions/userLogin";

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userInfo);
  const handleLogOut = () => {
    logOut();
    dispatch(removeUser());
  };

  console.log("sagar", userData);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler bg-info"
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
              <Link class="nav-link nav-text p-2" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link nav-text p-2"
                aria-current="page"
                to="/library/all-books"
              >
                Library
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link nav-text p-2" to="/">
                About
              </Link>
            </li>
          </ul>
          <form class="d-flex m-auto">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-info" type="submit">
              Search
            </button>
          </form>
          <div class="mx-4">
            {/*  */}

            <ul style={{ listStyle: "none" }} class="nav-text">
              <li class="dropdown">
                <p
                  class="mt-1  dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dashboard
                </p>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li class="mt-3">
                    <Link
                      to="/admin-dashboard"
                      class="nav-text text-decoration-none"
                    >
                      Admin
                    </Link>
                  </li>
                  <li class="mt-3">
                    <Link
                      to="/teacher-dashboard"
                      class="nav-text text-decoration-none "
                    >
                      Teacher dash
                    </Link>{" "}
                  </li>

                  <li class="mt-3">
                    <Link
                      to="/student-dashboard"
                      class="nav-text text-decoration-none "
                    >
                      Student dash
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/*  */}
          </div>

          {(userData.name || userData.email) && (
            <li className="nav-link fw-bold text-dark">
              <img
                src={userData?.photo}
                alt=""
                style={{ height: 30, width: 30, borderRadius: "50%" }}
                className="mx-2"
              />
              {userData?.name || userData?.email}
            </li>
          )}
          <div class="mx-4 nav-text">
            {userData.name || userData.email ? (
              <p
                className=""
                onClick={handleLogOut}
                style={{ cursor: "pointer" }}
              >
                Logout
              </p>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
