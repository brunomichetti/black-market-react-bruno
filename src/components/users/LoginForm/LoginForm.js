import "./login-form.scss";
import "./../../../style/common/common.scss";

const LoginForm = () => (
  <form className="login-form">
    <label className="login-form-input-container">
      Email
      <input
        className="login-form-input regular-text"
        type="email"
        placeholder="Type your email"
      />
    </label>
    <label className="login-form-input-container">
      Password
      <input
        className="login-form-input regular-text"
        type="password"
        placeholder="Type your password"
      />
    </label>
    <button type="button" className="common-black-button regular-text">
      Log in
    </button>
  </form>
);

export default LoginForm;
