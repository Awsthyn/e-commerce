export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => {
  return {
    type: INCREMENT,
    valor: 1,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
    valor: 1,
  };
};
