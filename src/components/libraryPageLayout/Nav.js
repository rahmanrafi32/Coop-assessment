import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div class=" mt-4">
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
          <Link to="/library/reading-list" class="nav-link fs-5">
            Reading List
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fs-5" to="/library/completed-list">
            Completed
          </Link>
        </li>
      </ul>
      {/*  */}
    </div>
  );
}
