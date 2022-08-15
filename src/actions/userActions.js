import { userServices } from "services/userServices";
import { userActionTypesConstants } from "constants/userConstants";
import { userErrorHandlers } from "helpers/errorHandlers";

const { USER_REQUEST, USER_REQUEST_SUCCESS, USER_REQUEST_ERROR } =
  userActionTypesConstants;
const { loginHandleError } = userErrorHandlers;

const setSessionData = (refreshToken, accessToken, user) => {
  localStorage.setItem("refreshToken", refreshToken);
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("user", user);
};

const removeSessionData = () => {
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};

const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      const {
        data: { refresh_token: refreshToken, access_token: accessToken, user },
      } = await userServices.login(email, password);
      setSessionData(refreshToken, accessToken, user);
      dispatch({ type: USER_REQUEST_SUCCESS, data: "loggedInSuccess" });
    } catch (error) {
      dispatch({ type: USER_REQUEST_ERROR, data: loginHandleError(error) });
    }
  };
};

const logout = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      await userServices.logout();
      dispatch({ type: USER_REQUEST_SUCCESS, data: "loggedOutSuccess" });
    } catch (error) {}
    removeSessionData();
  };
};

export const userActions = {
  login,
  logout,
};
