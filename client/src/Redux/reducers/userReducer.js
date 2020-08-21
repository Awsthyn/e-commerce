import { GET_ALL_USERS } from "../actions/constants";

const initialState = {
    users: []
};

export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
    users: action.payload
      };

    default:
      return state;
  }
};
