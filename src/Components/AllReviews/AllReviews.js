import React from "react";
import { Card } from "react-bootstrap";

const AllReviews = (props) => {
  const { name, image, comment, rating } = props.product;

  return (
    <div className="col-md-4">
      <Card>
        <Card.Img width="50px" height="100px" className="p-3 rounded-circle" src={image.url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-start">{comment.slice(0, 150)}</Card.Text>
          <div className="d-flex justify-content-between">
            <span>Rating: {rating}</span>
            <button title={comment} className="border-0 py-1 px-2 btn-color text-white rounded ">
              More Details
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllReviews;
