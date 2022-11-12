export default function Register() {
  return (
    <div className="container signup">
      <div className="form row align-items-center rounded-3 border shadow-lg">
        <form>
          <h1 className="h3 mb-3 fw-normal">Register Now</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="username"
            />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign Up
          </button>
          <p className="mt-3 mb-0 text-muted">
            If you already have an account then please{" "}
            <a href="/login">Click Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
