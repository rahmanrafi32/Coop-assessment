import React from "react";

const InfoCards = () => {
  return (
    <div class="mx-4 mt-5 mb-3">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card bg-light h-100">
            <div class="d-flex justify-content-around mt-4">
              <p class="fs-3">20 ASSIGNMENTS</p>
              <i class="bi bi-list-task fs-3 text-primary"></i>
            </div>
            <hr />

            <div class="card-text text-center text-success">
              5 new assesment{" "}
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  bg-light h-100">
            <div class="d-flex justify-content-around mt-4">
              <p class="fs-3">67% ATTENDENCE</p>
              <i class="bi bi-graph-up fs-3 text-success"></i>
            </div>{" "}
            <hr />
            <div class="card-text text-center text-warning">Below 75% </div>
          </div>
        </div>
        <div class="col">
          <div class="card bg-light h-100">
            <div class="d-flex justify-content-around mt-4">
              <p class="fs-3">50 MESSAGES</p>
              <i class="bi bi-chat-fill fs-3 text-info"></i>
            </div>{" "}
            <hr />
            <div class="card-text text-center text-primary">5 new messages</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
