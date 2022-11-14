import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";

import ProductCard from "../components/productCard";

function Home({ product: { products }, getProducts }) {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

Home.prototype = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts })(Home);
