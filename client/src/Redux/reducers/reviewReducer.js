import { GET_ALL_REVIEWS } from "../actions/constants";

const initialState = {
  reviews: [],
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
}