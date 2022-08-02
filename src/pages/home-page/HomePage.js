import { useSelector } from "react-redux";

import logo from "assets/logo.png";
import LoginForm from "components/users/LoginForm/LoginForm";

import "./home-page.scss";

const HomePage = () => {
  const loading = useSelector((state) => state.user.loading);

  const loggedInUser = sessionStorage.getItem("user");

  return (
    <main className="home-page">
      {!loggedInUser ? (
        <>
          <section className="login">
            <figure>
              <img src={logo} alt="Logo" className="logo" />
            </figure>
            <LoginForm />
            {/* TODO: Change this*/}
            {loading && <> LOADING </>}
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
        </>
      ) : (
        // TODO: Change this
        <> LOGGED IN </>
      )}
    </main>
  );
};

export default HomePage;
