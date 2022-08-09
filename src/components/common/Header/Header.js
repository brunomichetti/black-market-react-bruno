import { useIntl } from "react-intl";

import whiteLogo from "assets/logo-white.png";
import searchButton from "assets/icons/search.png";

import "./header.scss";

const Header = () => {
  const intl = useIntl();
  return (
    <header className="header">
      <figure>
        <img src={whiteLogo} alt="Logo" className="logo" />
      </figure>
      <section className="search-container">
        <input class="search-input"></input>
        <button className="search-button">
          <figure
            src={searchButton}
            alt="Logo"
            className="search-icon"
          ></figure>
        </button>
      </section>
    </header>
  );
};

export default Header;
