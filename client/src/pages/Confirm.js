import PropTypes from "prop-types";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getOrder } from "../actions/orders";
import { parseURLParams } from "../utils/parseUrlParams";
import NotFound from "./NotFound ";

function Confirm({ order: { order,loading }, getOrder }) {
  const { id } = parseURLParams(String(window.location));
  useEffect(() => {
    if(id)
    getOrder(id);
  }, [id,getOrder]);
  if(loading){
    return null;
  }
  if(!order){
    return <NotFound/>
  }
  return (
    <div className="container">
      <div
        className="row align-items-center rounded-3 border shadow-lg"
        style={{ background: "#ffff" }}
      >
        <div className="confirmed">
          <h1 className="display-4 fw-bold lh-1">
            Hooray !! Your order is confrimed.
          </h1>
          <p className="lead">
            Order Id : {order._id}
            <br />
            Note down the order id for tracking the progress.
          </p>
          <a href="/" className="btn btn-primary btn-lg  fw-bold">
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}

Confirm.prototype = {
  order: PropTypes.object.isRequired,
  getOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps, { getOrder })(Confirm);
