import React from "react";

import "./home-page.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="signup">
        <p className="regular-text">Don't have an account?</p>
        <button type="button" className="common-white-button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default HomePage;
