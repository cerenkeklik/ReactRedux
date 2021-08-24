import { Container, Row } from "reactstrap";
import Header from "../containers/Header";
import ProductListing from "../containers/ProductListing";
import "../App.css";

const Homepage = () => {
  return (
    <div>
      <Row className="header">
        <Header />
      </Row>

      <Row >
        <Container className="main-row">
          <ProductListing />
        </Container>
      </Row>
    </div>
  );
};
export default Homepage;
