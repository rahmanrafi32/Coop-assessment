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

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler bg-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link nav-text p-2"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-text p-2"
                aria-current="page"
                to="/library/all-books"
              >
                Library
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text p-2" to="/">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex m-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              Search
            </button>
          </form>
          <div className="mx-4">
            {/*  */}

            <ul style={{ listStyle: "none" }} className="nav-text">
              <li className="dropdown">
                <p
                  className="mt-1  dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dashboard
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="mt-3">
                    <Link
                      to="/admin-dashboard"
                      className="nav-text text-decoration-none"
                    >
                      Admin
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="/teacher-dashboard"
                      className="nav-text text-decoration-none "
                    >
                      Teacher dash
                    </Link>{" "}
                  </li>

                  <li className="mt-3">
                    <Link
                      to="/student-dashboard"
                      className="nav-text text-decoration-none "
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
          <div className="mx-4 nav-text">
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
