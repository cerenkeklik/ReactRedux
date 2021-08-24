import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import "../assets/css/product.css";

const ProductListing = () => {
  //access state
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Error", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

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
