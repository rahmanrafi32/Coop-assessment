import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Nav() {
  const readingStatus = useSelector((state) => state.books);

  return (
    <div className=" mt-4 sticky-top m-auto" style={{ width: "fit-content" }}>
      <ul
        className="nav justify-content-center p-2 "
        style={{ backgroundColor: "#fdddff" }}
      >
        <li className="nav-item">
          <Link
            to="/library/all-books"
            className="nav-link active "
            aria-current="page"
          >
            AllBooks
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/library/reading-list" className="nav-link mx-2">
            Reading List{" "}
            <i className="bi bi-bell-fill position-absolute" style={{ top: 6 }}>
              {" "}
              {readingStatus?.readingList?.length}
            </i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  mx-2" to="/library/completed-list">
            Completed{" "}
            <i
              className="bi bi-bell-fill position-absolute "
              style={{ top: 6 }}
            >
              {readingStatus?.finishedList?.length}
            </i>
          </Link>
        </li>
      </ul>
      {/*  */}
    </div>
  );
}
