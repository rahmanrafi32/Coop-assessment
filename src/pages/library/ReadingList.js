import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../../components/libraryPageLayout/BookCard";
import PageLayout from "../../components/libraryPageLayout/PageLayout";

function ReadingList() {
  const readingList = useSelector((state) => state.books.readingList);
  return (
    <PageLayout>
      {" "}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {readingList.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </PageLayout>
  );
}

export default ReadingList;
