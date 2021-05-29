import React from "react";

function StudentInfo() {
  return (
    <div class="mt-4">
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="d-flex align-items-center justify-content-center">
          <div>
            <img
              class="w-25 rounded-circle h-25"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="..."
            />
          </div>
          <p class="p-3">Name: Kaira </p>
        </div>
        <hr />
        <div class="m-2">
          <p>ID : 1234566778</p>
          <p>Semester: 3rd </p>
          <p>Address: Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
