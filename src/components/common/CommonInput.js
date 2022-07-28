import { string } from "prop-types";

import "./common-input.scss";

const CommonInput = ({ label, inputType, placeHolder }) => (
  <label className="regular-text">
    {label}
    <input
      type={inputType}
      placeholder={placeHolder}
      className="regular-text"
    />
  </label>
);

CommonInput.propTypes = {
  label: string,
  inputType: string,
  placeHolder: string,
};

export default CommonInput;
