import { useSelector } from "react-redux";

import logo from "assets/logo.png";
import LoginForm from "components/users/LoginForm/LoginForm";
import { Link } from "react-router-dom";

import "./home-page.scss";

const HomePage = () => {
  const loggedInUser = sessionStorage.getItem("user");

  const loading = useSelector((state) => state.user.loading);

  return (
    <main className="home-page">
      {!loggedInUser ? (
        <>
          <section className="login">
            <figure>
              <img src={logo} alt="Logo" className="logo" />
            </figure>
            <LoginForm />
            <div className="forgot-password-link regular-text">
              <Link to="/home" className={loading && "disable-link"}>
                I forgot my password.
              </Link>
            </div>
          </section>
          <section className="signup">
            <p className="regular-text">Don't have an account?</p>
            <button
              type="button"
              className="common-white-button regular-text"
              disabled={loading}
            >
              Sign up
            </button>
          </section>
        </>
      ) : (
        // TODO: Change this
        <> LOGGED IN </>
      )}
    </main>
  );
};

export default HomePage;
