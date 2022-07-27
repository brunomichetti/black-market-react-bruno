import logo from "assets/logo.png";
import LoginForm from "components/users/LoginForm/LoginForm";

import "./home-page.scss";

const HomePage = () => (
  <div className="home-page">
    <section className="login">
      <figure>
        <img src={logo} alt="Logo" className="logo" />
      </figure>
      <LoginForm />
      <nav className="forgot-password-link">
        <a href="/">I forgot my password.</a>
      </nav>
    </section>
    <section className="signup">
      <p className="regular-text">Don't have an account?</p>
      <button type="button" className="common-white-button regular-text">
        Sign up
      </button>
    </section>
  </div>
);

export default HomePage;
