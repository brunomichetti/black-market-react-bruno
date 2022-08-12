import { Navigate } from "react-router-dom";
import { object } from "prop-types";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user") || false;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: object,
};

export default PrivateRoute;
