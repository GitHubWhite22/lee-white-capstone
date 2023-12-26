<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico" />
  <title>Signin Template for Bootstrap</title>
  <link
    rel="canonical"
    href="https://getbootstrap.com/docs/4.0/examples/sign-in/"
  />
  {/* Bootstrap core CSS */}
  <link href="../../dist/css/bootstrap.min.css" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="signin.css" rel="stylesheet" />
  <form className="form-signin">
    <img
      className="mb-4"
      src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
      alt=""
      width={72}
      height={72}
    />
    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label htmlFor="inputEmail" className="sr-only">
      Email address
    </label>
    <input
      type="email"
      id="inputEmail"
      className="form-control"
      placeholder="Email address"
      required=""
      autofocus=""
    />
    <label htmlFor="inputPassword" className="sr-only">
      Password
    </label>
    <input
      type="password"
      id="inputPassword"
      className="form-control"
      placeholder="Password"
      required=""
    />
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" defaultValue="remember-me" /> Remember me
      </label>
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="submit">
      Sign in
    </button>
    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
  </form>
</>;
