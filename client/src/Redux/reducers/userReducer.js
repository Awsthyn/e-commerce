import { GET_ALL_USERS, DELETE_USER, GET_USER } from "../actions/constants";

const initialState = {
  users: [],
  user: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        user: action.payload,
      };
    case DELETE_USER:
      console.log("Usuario eliminade/x");
      return {
        ...state,
        users: state.users.filter((c) => c.id !== action.payload),
      };
    default:
      return state;
  }
}
