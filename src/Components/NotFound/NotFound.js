import {
  faAngleLeft,
  faArrowLeft,
  faArrowLeftLong,
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="styel404">
      <button
        className="style-btn text-white btn-color border-0 fs-4 "
        onClick={() => navigate(-1)}
      >
        {" "}
        <FontAwesomeIcon className="me-2" icon={faArrowLeft}></FontAwesomeIcon>
        Back
      </button>
    </div>
  );
};

export default NotFound;
