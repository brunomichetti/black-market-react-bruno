import logo from "assets/logo.png";
import LoginForm from "components/users/LoginForm/LoginForm";

import "./home-page.scss";

const HomePage = () => (
  <main className="home-page">
    <section className="login">
      <figure>
        <img src={logo} alt="Logo" className="logo" />
      </figure>
      <LoginForm />
      <div className="forgot-password-link regular-text">
        <a href="/">I forgot my password.</a>
      </div>
    </section>
    <section className="signup">
      <p className="regular-text">Don't have an account?</p>
      <button type="button" className="common-white-button regular-text">
        Sign up
      </button>
    </section>
  </main>
);

export default HomePage;
