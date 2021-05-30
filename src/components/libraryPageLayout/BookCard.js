import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const userData = useSelector((state) => state.userData.userInfo);
  return (
    <div className="col mb-3">
      <div className="card h-100 ">
        <img
          src={book_image}
          className="card-img-top m-auto p-3"
          style={{ height: "300px", width: "200px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{book_name}</h5>
          <h6>Author : {author_name}</h6>
          <p className="card-text">{book_description}</p>
        </div>
        <div className="card-footer d-flex align-items-center">
          {location.pathname === "/library/all-books" && (
            <>
              {" "}
              <small className="text-muted">Add to reading list</small>{" "}
              <i
                className="bi bi-node-plus-fill fs-3 ms-5 text-success"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch(addToReadingList({ ...book, reader: userData }))
                }
              ></i>{" "}
            </>
          )}
          {location.pathname === "/library/reading-list" && (
            <>
              {" "}
              <i
                className="bi bi-dash-circle-fill fs-5 ms-5 text-warning"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(deleteFromReadingList(_id))}
              >
                Remove
              </i>{" "}
              <i
                className="bi bi-check-circle-fill text-primary ms-4 fs-5"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch(markAsFinished({ _id, reader: userData }))
                }
              >
                {" "}
                Finished
              </i>
            </>
          )}
          {location.pathname === "/library/completed-list" && (
            <i
              className="bi bi-dash-circle-fill fs-5 ms-5 text-warning"
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
