import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Confirm from "./pages/Confirm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound ";
import Register from "./pages/Register";
import "./App.css";

function App() {
  const [authenticated, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [orderId, setOrder] = useState(null);
  useEffect(() => {
    if (localStorage.token) {
      const { token } = localStorage;
      if (token) {
        const decoded = jwtDecode(token);
        setUser(decoded.user);
        setAuth(true);
        axios.defaults.headers.common["x-auth-token"] = token;
      } else {
        delete axios.defaults.headers.common["x-auth-token"];
        setUser(null);
        setOrder(null);
        setAuth(false);
      }
    }
  }, []);
  const handleLogout = () => {
    setUser(null);
    setOrder(null);
    setAuth(false);
    localStorage.removeItem("token");
  };
  const Private = (children, navigate) => {
    if (authenticated) return children;
    return navigate;
  };
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Ecommmerce
          </a>
          <div className="navbarNav">
            {authenticated ? (
              <a
                className="nav-link active"
                aria-current="page"
                onClick={handleLogout}
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
      <Routes>
        <Route
          path="/login"
          element={
            authenticated ? <Navigate to="/" /> : <Login setAuth={setAuth} />
          }
        />
        <Route
          path="/register"
          element={
            authenticated ? <Navigate to="/" /> : <Register setAuth={setAuth} />
          }
        />
        <Route
          path="/confirm"
          element={authenticated ? <Confirm orderId={orderId} /> : <NotFound />}
        />
        <Route
          path="/"
          element={
            authenticated ? (
              <Home user={user} setOrder={setOrder} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
