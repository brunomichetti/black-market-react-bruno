import { useState } from "react";
import { string, func } from "prop-types";
import conditionalClassName from "classnames";

import visibility from "assets/icons/visibility.png";
import visibilityOff from "assets/icons/visibility-off.png";

import "./hide-text-input.scss";

const HideTextInput = ({ name, label, placeHolder, value, handleChange }) => {
  const [showText, setShowText] = useState(false);

  const visibilitySrc = showText ? visibility : visibilityOff;

  return (
    <label className="regular-text">
      {label}
      <div className="hide-text-input-container">
        <input
          name={name}
          type={conditionalClassName({
            text: showText,
            password: !showText,
          })}
          placeholder={placeHolder}
          className="hide-text-input regular-text"
          value={value}
          onChange={handleChange}
        />
        <button
          type="button"
          className="visibility-button"
          onClick={() => setShowText(!showText)}
        >
          <img
            src={visibilitySrc}
            alt=""
            className={conditionalClassName({
              "visibility-icon-on": showText,
              "visibility-icon-off": !showText,
            })}
          />
        </button>
      </div>
    </label>
  );
};

HideTextInput.propTypes = {
  name: string,
  label: string,
  placeHolder: string,
  value: string,
  handleChange: func,
};

export default HideTextInput;
