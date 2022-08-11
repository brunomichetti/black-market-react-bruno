import { useIntl } from "react-intl";
import { bool, func } from "prop-types";

import arrowDown from "assets/icons/arrow-down.png";
import arrowUp from "assets/icons/arrow-up.png";
import "style/common/_common.scss";

import "./my-account-menu.scss";

const MyAccountMenu = ({ openedMenu = false, setOpenedMenu }) => {
  const intl = useIntl();

  const buttonBorder = openedMenu ? "border-top" : "border";

  const arrowSrc = openedMenu ? arrowUp : arrowDown;

  const handleLogout = (e) => {};

  return (
    <main className="my-account-menu">
      <button
        className={`my-account-button regular-text ${buttonBorder}`}
        onClick={() => setOpenedMenu(!openedMenu)}
      >
        <p>
          {intl.formatMessage({
            id: "my.account",
          })}
        </p>
        <img src={arrowSrc} alt="" className="button-icon" />
      </button>
      {openedMenu && (
        <section className="menu">
          <button className="menu-item regular-text" onClick={handleLogout}>
            <p>
              {intl.formatMessage({
                id: "logout",
              })}
            </p>
          </button>
        </section>
      )}
    </main>
  );
};

MyAccountMenu.propTypes = {
  openedMenu: bool,
  setOpenedMenu: func,
};

export default MyAccountMenu;
