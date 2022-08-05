import { combineReducers } from "redux";

import { user } from "reducers/userReducer";

// Add all the reducers here
const rootReducer = combineReducers({
  user,
});

export default rootReducer;
