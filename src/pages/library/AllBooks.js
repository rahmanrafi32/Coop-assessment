import React, { useEffect } from "react";
import PageLayout from "../../components/libraryPageLayout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../../components/libraryPageLayout/BookCard";
import { loadBooks } from "../../redux/actions/bookActions";
function AllBooks() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadBooks()), [dispatch]);

  const allBooks = useSelector((state) => state.books.allBooks);
  console.log(allBooks);
  return (
    <PageLayout>
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-3">
        {allBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </PageLayout>
  );
}

export default AllBooks;
