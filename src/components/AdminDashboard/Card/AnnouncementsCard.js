import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faClock,
  faGraduationCap,
  faTrophy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const AnnouncementsCard = () => {
  return (
    <div>
      <div class="card mx-5 my-3">
        <div class="card-header">
          <h6 className="mx-3 mt-1">
            {" "}
            <FontAwesomeIcon icon={faBullhorn} /> ANNOUNCEMENTS{" "}
          </h6>
        </div>

        <div className=" m-4">
          <p className=" text-dark rounded px-3 py-2 m-2 d-inline">
            {" "}
            <FontAwesomeIcon icon={faGraduationCap} /> ACADEMICS
          </p>
          <p className=" text-dark rounded px-3 py-2 m-2 d-inline">
            {" "}
            <FontAwesomeIcon icon={faUsers} /> ADMISSIONS
          </p>
          <p className=" text-dark rounded px-3 py-2 m-2 d-inline">
            {" "}
            <FontAwesomeIcon icon={faTrophy} /> SPORTS
          </p>
          <hr />
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <h5>
              Guest lecture on fine arts by Smith.{" "}
              <span className="bg-danger text-white rounded px-2   mx-2">
                new
              </span>
            </h5>
            <div className="text-secondary">
              <small>
                {" "}
                <FontAwesomeIcon icon={faClock} /> 05-20-2021, 10:30
              </small>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>Thanks,</p>
              <p>John Doe, Principal</p>
            </div>
          </blockquote>
        </div>
        <p className="mx-3"></p>
        <hr />
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <h5>Guest lecture on fine arts by Smith. </h5>
            <div className="text-secondary">
              <small>
                {" "}
                <FontAwesomeIcon icon={faClock} /> 04-20-2021, 10:30
              </small>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>Thanks,</p>
              <p>John Doe, Principal</p>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsCard;
