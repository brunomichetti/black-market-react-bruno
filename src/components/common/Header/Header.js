import { useIntl } from "react-intl";

import whiteLogo from "assets/logo-white.png";
import searchButton from "assets/icons/search.png";
import shoppingCart from "assets/icons/shopping-cart.png";

import "./header.scss";

const Header = () => {
  const intl = useIntl();
  return (
    <header className="header">
      <figure className="logo-container">
        <img src={whiteLogo} alt="Logo" className="logo" />
      </figure>
      <section className="search-container">
        <input
          className="search-input regular-text"
          placeholder={intl.formatMessage({
            id: "search.products",
          })}
        />
        <button className="search-button">
          <img src={searchButton} alt="Logo" className="button-icon" />
        </button>
      </section>
      <button className="shopping-cart-button">
        <p className="regular-text">
          {intl.formatMessage({
            id: "shopping.cart",
          })}
        </p>
        <img src={shoppingCart} alt="Logo" className="button-icon" />
      </button>
    </header>
  );
};

export default Header;
