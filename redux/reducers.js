import { combineReducers } from "redux";

export function loginSubmitted(state = true, action) {
  switch (action.type) {
    case "SUBMIT_LOGIN":
      return !state;

    default:
      return state;
  }
}

export default combineReducers({
  loginSubmitted
});
