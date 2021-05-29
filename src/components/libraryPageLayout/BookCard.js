import React from "react";
import { useDispatch } from "react-redux";
import { addToReadingList } from "../../redux/actions/bookActions";

function BookCard({ book }) {
  const { _id, author_name, book_description, book_image, book_name } = book;
  const dispatch = useDispatch();
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
          <small class="text-muted">Add to reading list</small>{" "}
          <i
            class="bi bi-node-plus-fill fs-3 ms-5 text-success"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(addToReadingList(book))}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
