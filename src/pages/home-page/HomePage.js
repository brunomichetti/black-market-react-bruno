import "./home-page.scss";
import "style/common/_common.scss";
import logo from "assets/logo.png";
import LoginForm from "components/users/LoginForm/LoginForm";

const HomePage = () => (
  <div className="home-page">
    <div className="login">
      <img src={logo} alt="Logo" className="logo" />
      <LoginForm />
    </div>
    <div className="signup">
      <p className="regular-text">Don't have an account?</p>
      <button type="button" className="common-white-button regular-text">
        Sign up
      </button>
    </div>
  </div>
);

export default HomePage;
