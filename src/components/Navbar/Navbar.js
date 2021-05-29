import React from "react";

const Header = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">PATHSHALA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Admission</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Academic</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Header;
