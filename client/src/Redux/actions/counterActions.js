import { INCREMENT, DECREMENT } from './constants';


//-------- INCREMENTA COUNTER ----------------
export const increment = () => {
  return {
    type: INCREMENT,
    valor: 1,
  };
};

//-------- DECEREMENTA COUNTER ----------------

export const decrement = () => {
  return {
    type: DECREMENT,
    valor: 1,
  };
};
