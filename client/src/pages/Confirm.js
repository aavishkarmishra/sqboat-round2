export default function Confirm() {
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
            Order Id : XXXXXXXXXXXXXXX
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
