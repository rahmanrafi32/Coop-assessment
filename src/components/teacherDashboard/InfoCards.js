import React from "react";

const InfoCards = () => {
  return (
    <div className="mx-4 mt-5 mb-3">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card bg-light h-100">
            <div className="d-flex justify-content-around mt-4">
              <p className="fs-3">20 ASSIGNMENTS</p>
              <i className="bi bi-list-task fs-3 text-primary"></i>
            </div>
            <hr />

            <div className="card-text text-center text-success">
              5 new assesment{" "}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  bg-light h-100">
            <div className="d-flex justify-content-around mt-4">
              <p className="fs-3">67% ATTENDENCE</p>
              <i className="bi bi-graph-up fs-3 text-success"></i>
            </div>{" "}
            <hr />
            <div className="card-text text-center text-warning">Below 75% </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-light h-100">
            <div className="d-flex justify-content-around mt-4">
              <p className="fs-3">50 MESSAGES</p>
              <i className="bi bi-chat-fill fs-3 text-info"></i>
            </div>{" "}
            <hr />
            <div className="card-text text-center text-primary">
              5 new messages
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
