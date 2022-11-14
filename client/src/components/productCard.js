import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createOrder } from "../actions/orders";

function ProductCard({ product, createOrder }) {
  const handleBuyNow = async () => {
    createOrder(product._id)
  }
  return (
    <div className="card shadow-lg" style={{ width: "18rem", margin: "1rem" }}>
      <img
        src={product.image}
        className="card-img-top mt-3"
        style={{ minHeight: "16rem", maxHeight: "16rem" }}
      />
      <div className="card-body" style={{ textAlign: "center" }}>
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.details}</p>
        <button onClick={handleBuyNow} className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}

ProductCard.prototype = {
  product: PropTypes.object.isRequired,
  createOrder: PropTypes.func.isRequired,
};

export default connect(null, { createOrder })(ProductCard);
