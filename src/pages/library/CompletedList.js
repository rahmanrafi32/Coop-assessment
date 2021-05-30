import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../../components/libraryPageLayout/BookCard";
import PageLayout from "../../components/libraryPageLayout/PageLayout";

function CompletedList() {
  const finishedList = useSelector((state) => state.books.finishedList);
  return (
    <PageLayout>
      {" "}
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-4">
        {finishedList.length ? (
          finishedList.map((book) => <BookCard key={book._id} book={book} />)
        ) : (
          <p className="p-5 w-100 text-center">
            There is no book in your finished list{" "}
          </p>
        )}
      </div>
    </PageLayout>
  );
}

export default CompletedList;
