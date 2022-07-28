import "style/common/_common.scss";

import "./login-form.scss";

const LoginForm = () => (
  <form className="login-form">
    <label>
      Email
      <input type="email" placeholder="Type your email" />
    </label>
    <label>
      Password
      <input type="password" placeholder="Type your password" />
    </label>
    <button type="button">Log in</button>
  </form>
);

export default LoginForm;
