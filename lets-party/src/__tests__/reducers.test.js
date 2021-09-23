import { reducer } from '../utils/reducers';
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  TOGGLE_BASKET,
  ADD_TO_BASKET,
  UPDATE_BASKET_QUANTITY,
  REMOVE_FROM_BASKET,
  ADD_MULTIPLE_TO_BASKET,
  CLEAR_BASKET
} from '../utils/actions';

//Define initial cart values for test to use
const initialState = {
  products: [],
  categories: [{ name: 'Chocolates' }],
  currentCategory: '2',
  cart: [
    {
      _id: '1',
      name: 'Fudge',
      purchaseQuantity: 4
    },
    {
      _id:'2',
      name: 'Carmel',
      purchaseQuantity: 1
    },
    {
      _id:'3',
      name: 'Cake Pop',
      purchaseQuantity: 2
    }
  ],
  cartOpen: false
};

// Tests

test('ADD_TO_BASKET', () => {
  let newState = reducer(initialState, {
    type: ADD_TO_BASKET,
    product: { purchaseQuantity: 1 }
  });
  expect(newState.cart.length).toBe(3);
  expect(initialState.cart.length).toBe(2);
})