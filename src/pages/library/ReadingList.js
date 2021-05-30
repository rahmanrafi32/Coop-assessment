import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../../components/libraryPageLayout/BookCard";
import PageLayout from "../../components/libraryPageLayout/PageLayout";

function ReadingList() {
  const readingList = useSelector((state) => state.books.readingList);

  console.log(readingList);
  return (
    <PageLayout>
      {" "}
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4">
        {readingList.length ? (
          readingList.map((book) => <BookCard key={book._id} book={book} />)
        ) : (
          <p class="p-5 w-100 text-center">
            There is no book in your reading list{" "}
          </p>
        )}
      </div>
    </PageLayout>
  );
}

export default ReadingList;
