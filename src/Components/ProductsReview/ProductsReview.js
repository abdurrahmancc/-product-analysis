import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

const ProductsReview = (props) => {
  const { name, image, comment, rating } = props.product;
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img width="50px" height="100px" className="p-3 rounded-circle" src={image.url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-start">{comment.slice(0, 150)}</Card.Text>
          <p>{rating}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductsReview;
