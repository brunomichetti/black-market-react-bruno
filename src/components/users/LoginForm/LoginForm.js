import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import "style/common/_common.scss";
import CommonInput from "components/common/CommonInput/CommonInput";
import CommonLoader from "components/common/CommonLoader/CommonLoader";
import { userActions } from "actions/userActions";
import { homePath } from "constants/pathConstants";

import "./login-form.scss";

const LoginForm = () => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, errorMsg, loggedInSuccess } = useSelector(
    (state) => state.user
  );

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs;

  const handleChange = ({ target: { name, value } }) => {
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userActions.login(email, password));
  };

  useEffect(() => {
    if (loggedInSuccess) {
      navigate(homePath);
    }
  }, [navigate, loggedInSuccess]);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <CommonInput
        name="email"
        label="Email"
        inputType="email"
        placeHolder={intl.formatMessage({
          id: "type.email",
        })}
        inputValue={email}
        handleChange={handleChange}
      />
      <CommonInput
        name="password"
        label="Password"
        inputType="password"
        placeHolder={intl.formatMessage({
          id: "type.password",
        })}
        inputValue={password}
        handleChange={handleChange}
      />
      <button
        type="submit"
        className="regular-text"
        disabled={!email || !password}
      >
        {!loading ? <>Log in</> : <CommonLoader />}
      </button>
      <div className="error-container regular-text">
        {errorMsg && <>{errorMsg}</>}
      </div>
    </form>
  );
};

export default LoginForm;
