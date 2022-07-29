import { userServices } from "services/userServices";

const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await userServices.login(email, password);
      debugger;
    } catch (error) {
      console.log(error);
      debugger;
    }
  };
};

export const userActions = {
  login,
};
