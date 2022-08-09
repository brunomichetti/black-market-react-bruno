import { useSelector } from "react-redux";
import { useIntl } from "react-intl";

import whiteLogo from "assets/logo-white.png";
import LoginForm from "components/users/LoginForm/LoginForm";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  const intl = useIntl();
  return <footer className="footer"></footer>;
};

export default Footer;
