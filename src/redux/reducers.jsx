import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actions";

const initialState = {
  quantity: 1,
};

const quantityReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity > 1 ? state.quantity - 1 : 1,
      };
    default:
      return state;
  }
};

export default quantityReducer;
