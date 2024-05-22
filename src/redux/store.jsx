import { createStore } from "redux";
import quantityReducer from "./reducers";

const store = createStore(quantityReducer);

export default store;
