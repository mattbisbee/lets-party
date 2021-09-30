import { useReducer } from "react";
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_BASKET,
  ADD_MULTIPLE_TO_BASKET,
  UPDATE_BASKET_QUANTITY,
  REMOVE_FROM_BASKET,
  CLEAR_BASKET,
  TOGGLE_BASKET
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_BASKET:
      return {
        ...state,
        basketOpen: true,
        basket: [...state.basket, action.product],
      };

    case ADD_MULTIPLE_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, ...action.products],
      };

    case UPDATE_BASKET_QUANTITY:
      return {
        ...state,
        basketOpen: true,
        basket: state.basket.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case REMOVE_FROM_BASKET:
      let newState = state.basket.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        basketOpen: newState.length > 0,
        basket: newState
      };

    case CLEAR_BASKET:
      return {
        ...state,
        basketOpen: false,
        basket: []
      };

    case TOGGLE_BASKET:
      return {
        ...state,
        basketOpen: !state.basketOpen
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}