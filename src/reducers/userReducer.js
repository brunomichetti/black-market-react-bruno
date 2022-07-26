import { userActionTypesConstants } from "constants/userConstants";

const initialState = {
  loading: false,
  errorMsg: null,
  loggedInSuccess: false,
};

const { USER_REQUEST, USER_REQUEST_SUCCESS, USER_REQUEST_ERROR } =
  userActionTypesConstants;

export const user = (state = initialState, { type, data }) => {
  switch (type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
        errorMsg: null,
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: null,
        loggedInSuccess: true,
      };
    case USER_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        errorMsg: data,
        loggedInSuccess: false,
      };
    default:
      return state;
  }
};
