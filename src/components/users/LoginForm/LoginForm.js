import "style/common/_common.scss";
import CommonInput from "components/common/CommonInput";

import "./login-form.scss";

const LoginForm = () => (
  <form className="login-form">
    <CommonInput
      label="Email"
      inputType="email"
      placeHolder="Type your email"
    />
    <CommonInput
      label="Password"
      inputType="password"
      placeHolder="Type your password"
    />
    <button type="button" className="regular-text">
      Log in
    </button>
  </form>
);

export default LoginForm;
