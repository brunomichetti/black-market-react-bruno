import { string, func } from "prop-types";

import "./common-input.scss";

const CommonInput = ({
  name,
  label,
  inputType,
  placeHolder,
  value,
  handleChange,
}) => (
  <label className="regular-text">
    {label}
    <input
      name={name}
      type={inputType}
      placeholder={placeHolder}
      className="regular-text"
      value={value}
      onChange={handleChange}
    />
  </label>
);

CommonInput.propTypes = {
  name: string,
  label: string,
  inputType: string,
  placeHolder: string,
  value: string,
  handleChange: func,
};

export default CommonInput;
