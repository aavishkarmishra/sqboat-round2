import { useState } from "react";
import { login } from "../actions/auth";

export default function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event);
  };
  const handlePassChange = (event) => {
    setPassword(event);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    login(email, password,setAuth);
  };
  return (
    <div className="container signup">
      <div className="form row align-items-center rounded-3 border shadow-lg">
        <form onSubmit={(event) => onSubmit(event)}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              required
              onChange={(event) => handleEmailChange(event.target.value)}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              required
              onChange={(event) => handlePassChange(event.target.value)}
            />
            <label>Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-3 mb-0 text-muted">
            If you don't have an account then please{" "}
            <a href="/register">Register Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
