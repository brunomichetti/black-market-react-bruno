import "style/common/_common.scss";
import CommonInput from "components/common/CommonInput";

import "./login-form.scss";

const LoginForm = () => (
  <form className="login-form">
    <CommonInput
      labelText="Email"
      inputType="email"
      placeHolderText="Type your email"
    />
    <CommonInput
      labelText="Password"
      inputType="password"
      placeHolderText="Type your password"
    />
    <button type="button">Log in</button>
  </form>
);

export default LoginForm;
