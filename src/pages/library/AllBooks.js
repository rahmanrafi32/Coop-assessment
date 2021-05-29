import React from "react";
import PageLayout from "../../components/libraryPageLayout/PageLayout";
import { useSelector } from "react-redux";
import BookCard from "../../components/libraryPageLayout/BookCard";
function AllBooks() {
  const allBooks = useSelector((state) => state.books.allBooks);
  console.log(allBooks);
  return (
    <PageLayout>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {allBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </PageLayout>
  );
}

export default AllBooks;
