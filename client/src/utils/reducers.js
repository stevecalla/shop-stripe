import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      //useEffects executes twice in React 18, strict mode while in development
      //thus duplicating items in the cart upon page refresh
      //to offset the code below creates an array of ids for state and cart
      const stateIds = state.cart && state.cart.map(element => element._id)
      const cartIds = action.products && action.products.map(element => element._id)

      let render = [];
      //if state & cart contain the same items ids, return state to avoid duplicates
      //if state & cart don't include the same items ids, add cart to the state
      stateIds.join() === cartIds.join() ? render = { ...state } : render = {
        ...state,
        cart: [...state.cart, ...action.products],
      }

      return {
        ...render
      };

      //original code created duplicate items in the cart upon page refresh
      // return {
      //   ...state,
      //   cart: [...state.cart, ...action.products],
      // };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
