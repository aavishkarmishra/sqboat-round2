import { Route, Routes, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Confirm from "./pages/Confirm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound ";
import Register from "./pages/Register";

function Router({ auth: { isAuthenticated, loading }, order: { order } }) {
  if (loading) {
    return null;
  }
  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/confirm/*"
        element={isAuthenticated ? <Confirm /> : <NotFound />}
      />
      <Route
        path="/"
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

Router.prototype = {
  auth: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps)(Router);
