import Header from "../containers/Header";
import ProductDetail from "../containers/ProductDetail";
import { Container } from "reactstrap";
import "../assets/css/product.css";

const ProductDetails = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="row-product">
        <Container>
          <ProductDetail />
        </Container>
      </div>
    </div>
  );
};
export default ProductDetails;
