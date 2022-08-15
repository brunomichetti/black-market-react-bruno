import { useSelector } from "react-redux";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import conditionalClassName from "classnames";

import logo from "assets/logo.png";
import LoginForm from "components/users/LoginForm/LoginForm";

import "./login-page.scss";

const LoginPage = () => {
  const intl = useIntl();

  const { loading } = useSelector((state) => state.user);

  return (
    <main className="login-page">
      <section className="login">
        <figure>
          <img src={logo} alt="" className="logo" />
        </figure>
        <LoginForm />
        <div className="forgot-password-link regular-text">
          <Link
            to="/home"
            className={conditionalClassName({
              "disable-link": loading,
            })}
          >
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
