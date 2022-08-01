import { userActionTypesConstants } from "constants/userConstants";

const initialState = {
  loading: false,
};

const { USER_REQUEST, USER_REQUEST_SUCCESS } = userActionTypesConstants;

export const user = (state = initialState, { type, data }) => {
  switch (type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
