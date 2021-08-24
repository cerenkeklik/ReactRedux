import { React, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, CardTitle, CardSubtitle, CardText } from "reactstrap";
import "../assets/css/product.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, category, price, image, description } = product;

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Row>
          <Col xs="6">
            <img className="image-detail" src={image} alt={title} />
          </Col>
          <Col xs="6">
            <div className="detail-cardbody">
              <CardTitle className="detail-cardtitle" tag="h5">
                {title}
              </CardTitle>
              <CardSubtitle>{category} </CardSubtitle>
              <CardText className="detail-card-text">${price} </CardText>
              <CardText className="detail-card-desc">{description} </CardText>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetail;
