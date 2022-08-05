import { userServices } from "services/userServices";
import { userActionTypesConstants } from "constants/userConstants";
import { userErrorHandlers } from "helpers/errorHandlers";

const { USER_REQUEST, USER_REQUEST_SUCCESS, USER_REQUEST_ERROR } =
  userActionTypesConstants;
const { loginHandleError } = userErrorHandlers;

const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      const {
        data: { refreshToken, accessToken, user },
      } = await userServices.login(email, password);
      sessionStorage.setItem("refreshToken", refreshToken);
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("user", user);
      dispatch({ type: USER_REQUEST_SUCCESS });
    } catch (error) {
      dispatch({ type: USER_REQUEST_ERROR, data: loginHandleError(error) });
    }
  };
};

export const userActions = {
  login,
};
