import { string } from "prop-types";

import "./common-input.scss";

const CommonInput = ({ label, inputType, placeHolder }) => (
  <label>
    {label}
    <input type={inputType} placeholder={placeHolder} />
  </label>
);

CommonInput.propTypes = {
  label: string,
  inputType: string,
  placeHolder: string,
};

export default CommonInput;
