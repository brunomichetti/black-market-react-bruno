import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";

import logo from "assets/logo.png";
import LoginForm from "components/users/LoginForm/LoginForm";
import { homePath } from "constants/pathConstants";

import "./login-page.scss";

const LoginPage = () => {
  const intl = useIntl();

  const navigate = useNavigate();

  const { loading, loggedInSuccess } = useSelector((state) => state.user);

  const forgotPasswordClass = loading ? "disable-link" : "";

  useEffect(() => {
    if (loggedInSuccess) {
      navigate(homePath);
    }
  }, [navigate, loggedInSuccess]);

  return (
    <main className="login-page">
      <section className="login">
        <figure>
          <img src={logo} alt="" className="logo" />
        </figure>
        <LoginForm />
        <div className="forgot-password-link regular-text">
          <Link to="/home" className={forgotPasswordClass}>
            {intl.formatMessage({
              id: "forgot.password",
            })}
          </Link>
        </div>
      </section>
      <section className="signup">
        <p className="regular-text">
          {intl.formatMessage({
            id: "dont.have.account",
          })}
        </p>
        <button
          type="button"
          className="common-white-button regular-text"
          disabled={loading}
        >
          {intl.formatMessage({
            id: "signup",
          })}
        </button>
      </section>
    </main>
  );
};

export default LoginPage;
