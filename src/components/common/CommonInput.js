import { string, func } from "prop-types";

import "./common-input.scss";

const CommonInput = ({
  label,
  inputType,
  placeHolder,
  value,
  handleChange,
}) => (
  <label className="regular-text">
    {label}
    <input
      type={inputType}
      placeholder={placeHolder}
      className="regular-text"
      value={value}
      onChange={handleChange}
    />
  </label>
);

CommonInput.propTypes = {
  label: string,
  inputType: string,
  placeHolder: string,
  value: string,
  handleChange: func,
};

export default CommonInput;
