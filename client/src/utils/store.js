//section
import { createStore } from "redux";
import reducer from "./reducers";

let preloadedState;
preloadedState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

export const store = createStore(
  reducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
