import { useEffect } from "react";
import { useIntl } from "react-intl";
import { bool, func } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import conditionalClassName from "classnames";

import CommonLoader from "components/common/CommonLoader/CommonLoader";
import { userActions } from "actions/userActions";
import arrowDown from "assets/icons/arrow-down.png";
import arrowUp from "assets/icons/arrow-up.png";
import { loginPath } from "constants/pathConstants";
import "style/common/_common.scss";

import "./my-account-menu.scss";

const MyAccountMenu = ({ openedMenu = false, setOpenedMenu }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, loggedOutSuccess } = useSelector((state) => state.user);

  const arrowSrc = openedMenu ? arrowUp : arrowDown;

  const handleLogout = (e) => {
    e.preventDefault();
    setOpenedMenu(false);
    dispatch(userActions.logout());
  };

  useEffect(() => {
    if (loggedOutSuccess) {
      navigate(loginPath);
    }
  }, [navigate, loggedOutSuccess]);

  return (
    <main className="my-account-menu">
      {loading ? (
        <CommonLoader />
      ) : (
        <button
          className={conditionalClassName("my-account-button regular-text", {
            "border-top": openedMenu,
            border: !openedMenu,
          })}
          onClick={() => setOpenedMenu(!openedMenu)}
          disabled={loading}
        >
          <p>
            {intl.formatMessage({
              id: "my.account",
            })}
          </p>
          <img src={arrowSrc} alt="" className="button-icon" />
        </button>
      )}
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
