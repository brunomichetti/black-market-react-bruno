import { useState } from "react";
import { useDispatch } from "react-redux";

import "style/common/_common.scss";
import CommonInput from "components/common/CommonInput";
import { userActions } from "actions/userActions";

import "./login-form.scss";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const handleChange = ({ target: { name, value } }) => {
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    dispatch(userActions.login(email, password));
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <CommonInput
        label="Email"
        inputType="email"
        placeHolder="Type your email"
        inputValue={email}
        handleChange={handleChange}
      />
      <CommonInput
        label="Password"
        inputType="password"
        placeHolder="Type your password"
        inputValue={password}
        handleChange={handleChange}
      />
      <button type="submit" className="regular-text">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
