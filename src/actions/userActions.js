import { userServices } from "services/userServices";
import { userActionTypesConstants } from "constants/userConstants";

const { USER_REQUEST_SUCCESS } = userActionTypesConstants;

const login = (email, password) => {
  return async (dispatch) => {
    try {
      const {
        data: { refreshToken, accessToken, user },
      } = await userServices.login(email, password);
      sessionStorage.setItem("refreshToken", refreshToken);
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("user", user);
      dispatch({ type: USER_REQUEST_SUCCESS });
    } catch (error) {
      // TODO: change this
    }
  };
};

export const userActions = {
  login,
};
