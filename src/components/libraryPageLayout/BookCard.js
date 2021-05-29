import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import {
  addToReadingList,
  markAsFinished,
  deleteFromReadingList,
  removeFromFinishedList,
} from "../../redux/actions/bookActions";

function BookCard({ book }) {
  const { _id, author_name, book_description, book_image, book_name } = book;
  const dispatch = useDispatch();
  let location = useLocation();
  return (
    <div class="col ">
      <div class="card h-100 ">
        <img
          src={book_image}
          class="card-img-top m-auto p-3"
          style={{ height: "300px", width: "200px" }}
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{book_name}</h5>
          <h6>Author : {author_name}</h6>
          <p class="card-text">{book_description}</p>
        </div>
        <div class="card-footer d-flex align-items-center">
          {location.pathname === "/library/all-books" && (
            <>
              {" "}
              <small class="text-muted">Add to reading list</small>{" "}
              <i
                class="bi bi-node-plus-fill fs-3 ms-5 text-success"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(addToReadingList(book))}
              ></i>{" "}
            </>
          )}
          {location.pathname === "/library/reading-list" && (
            <>
              {" "}
              <i
                class="bi bi-dash-circle-fill fs-5 ms-5 text-warning"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(deleteFromReadingList(_id))}
              >
                Remove
              </i>{" "}
              <i
                class="bi bi-check-circle-fill text-primary ms-4 fs-5"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(markAsFinished(_id))}
              >
                {" "}
                Finished
              </i>
            </>
          )}
          {location.pathname === "/library/completed-list" && (
            <i
              class="bi bi-dash-circle-fill fs-5 ms-5 text-warning"
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(removeFromFinishedList(_id))}
            >
              Remove from the list{" "}
            </i>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
