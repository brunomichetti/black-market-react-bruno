import { string } from "prop-types";

import "./common-input.scss";

const CommonInput = ({ labelText, inputType, placeHolderText }) => (
  <label>
    {labelText}
    <input type={inputType} placeholder={placeHolderText} />
  </label>
);

CommonInput.propTypes = {
  labelText: string,
  inputType: string,
  placeHolderText: string,
};

export default CommonInput;
