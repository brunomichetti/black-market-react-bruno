import { useState } from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

import whiteLogo from "assets/logo-white.png";
import searchButton from "assets/icons/search.png";
import shoppingCart from "assets/icons/shopping-cart.png";
import MyAccountMenu from "components/users/MyAccountMenu/MyAccountMenu";

import "./header.scss";

const Header = () => {
  const intl = useIntl();

  const [openedMenu, setOpenedMenu] = useState(false);

  const { loading } = useSelector((state) => state.user);

  return (
    <header className="header">
      <figure className="logo-container">
        <img src={whiteLogo} alt="" className="logo" />
      </figure>
      <section className="search-container">
        <input
          className="search-input regular-text"
          placeholder={intl.formatMessage({
            id: "search.products",
          })}
        />
        <button className="search-button" disabled={loading}>
          <img src={searchButton} alt="" className="button-icon" />
        </button>
      </section>
      <MyAccountMenu openedMenu={openedMenu} setOpenedMenu={setOpenedMenu} />
      <button className="shopping-cart-button" disabled={loading}>
        <p className="regular-text">
          {intl.formatMessage({
            id: "shopping.cart",
          })}
        </p>
        <img src={shoppingCart} alt="" className="button-icon icon-margin" />
      </button>
    </header>
  );
};

export default Header;
