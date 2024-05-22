// Redux actions
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";

export const increaseQuantity = () => ({
  type: INCREASE_QUANTITY,
});

export const decreaseQuantity = () => ({
  type: DECREASE_QUANTITY,
});
