import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

function Navbar({ auth: { isAuthenticated }, logout }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Ecommmerce
        </a>
        <div className="navbarNav">
          {isAuthenticated ? (
            <a
              className="nav-link active"
              aria-current="page"
              onClick={logout}
              href='#'
            >
              Logout
            </a>
          ) : (
            <a className="nav-link active" aria-current="page" href="/login">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
