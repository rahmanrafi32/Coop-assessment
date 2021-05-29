import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Nav() {
  const readingStatus = useSelector((state) => state.books);

  return (
    <div class=" mt-4 sticky-top">
      <ul class="nav justify-content-center bg-light p-2 ">
        <li class="nav-item">
          <Link
            to="/library/all-books"
            class="nav-link active fs-5"
            aria-current="page"
          >
            AllBooks
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/library/reading-list" class="nav-link fs-5 mx-2">
            Reading List{" "}
            <i
              class="bi bi-bell-fill position-absolute fs-6"
              style={{ top: 6 }}
            >
              {" "}
              {readingStatus?.readingList?.length}
            </i>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fs-5 mx-2" to="/library/completed-list">
            Completed{" "}
            <i
              class="bi bi-bell-fill position-absolute fs-6"
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
