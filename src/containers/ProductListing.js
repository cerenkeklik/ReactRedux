import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import "../assets/css/product.css";

const ProductListing = () => {
  //access state
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="cards-listing">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
