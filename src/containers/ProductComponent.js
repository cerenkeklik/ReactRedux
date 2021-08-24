import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  
} from "reactstrap";
import "../assets/css/product.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, category, price, image } = product;
    return (
      <Link  key={id} to={`/product/${id}`} >
      <Card className="card">
        <CardImg top width="100%" height="65%" src={image} alt={title} />
        <CardBody>
          <CardTitle className="cardtitle" tag="h5">{title}</CardTitle>
          <CardSubtitle>{category} </CardSubtitle>
          <CardText className="card-text">${price} </CardText>
        </CardBody>
      </Card>
      </Link>
    );
  });

  return <div className="renderlist">{renderList}</div>;
};

export default ProductComponent;
