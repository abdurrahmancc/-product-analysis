import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import "./AllReviews.css";

const AllReviews = (props) => {
  const { name, image, comment, rating } = props.product;

  return (
    <div className="col-md-4">
      <Card className="align-items-center">
        <Card.Img
          style={{ width: "100px" }}
          className=" img-style rounded-circle"
          src={image.url}
        />
        <Card.Body>
          <Card.Title className="fs-3">{name}</Card.Title>

          <div className="mb-4">
            <FontAwesomeIcon className="text-warning icons" icon={faStar} />
            <FontAwesomeIcon className="text-warning icons" icon={faStar} />
            <FontAwesomeIcon className="text-warning icons" icon={faStar} />
            <FontAwesomeIcon className="text-warning icons" icon={faStar} />
            <FontAwesomeIcon className="text-warning icons" icon={faStar} />
          </div>
          <Card.Text className="text-start">
            {comment.slice(0, 150)}
            {/* <a href="">Read more</a> */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllReviews;
