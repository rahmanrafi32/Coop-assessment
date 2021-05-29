import React from "react";

function Notification() {
  return (
    <div>
      <div class="mt-4 card" style={{ maxWidth: "540px" }}>
        <div class=" mb-3 p-3">
          <h5 class="card-title">Submit your assignment</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odit
            quaerat tempore quisquam iusto fugit sed fugiat eos distinctio quod.{" "}
          </p>
        </div>
        <hr />
        <div class=" mb-3 p-3" style={{ maxWidth: "540px" }}>
          <h5 class="card-title">Your fee is due.</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            itaque aperiam ipsam, eius harum officiis! Rem voluptas laudantium
            corporis! Quidem.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
