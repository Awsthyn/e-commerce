import { GET_ALL_REVIEWS, ADD_REVIEW } from "../actions/constants";

const initialState = {
  reviews: [],
  review: {}
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ADD_REVIEW:
      return {
        ...state,
        review: action.payload,
      };
    default:
      return state;
  }
}