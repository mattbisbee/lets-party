//'npm run test' to trigger react-scripts test
import 'jest-canvas-mock';
import { reducer } from '../utils/reducers';
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  TOGGLE_CART,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  CLEAR_CART
} from '../utils/actions';

//Define initial cart values for test to use
const initialState = {
  products: [],
  categories: [{ name: 'Chocolates' }],
  currentCategory: '1',
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

// Tests: Verify the initialState was not affected by the update

//Add item to cart
test('ADD_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_TO_CART,
    product: { purchaseQuantity: 1 }
  });
  expect(newState.cart.length).toBe(4);
  expect(initialState.cart.length).toBe(3);
});

// Add multiple items to cart
test('ADD_MULTIPLE_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_MULTIPLE_TO_CART,
    products: [{}, {}]
  });
  expect(newState.cart.length).toBe(5);
  expect(initialState.cart.length).toBe(3);
});

// Delete from cart
test('REMOVE_FROM_CART', () => {
  let newState1 = reducer(initialState, {
    type: REMOVE_FROM_CART,
    _id: '1'
  });

  expect(newState1.cartOpen).toBe(true);
  expect(newState1.cart.length).toBe(2);
  expect(newState1.cart[0]._id).toBe('2');

  let newState2 = reducer(newState1, {
    type: REMOVE_FROM_CART,
    _id: '2'
  });

  expect(newState2.cartOpen).toBe(true);
  expect(newState2.cart.length).toBe(1);

  expect(initialState.cart.length).toBe(3);
});

//update the first items quantity only
test('UPDATE_CART_QUANTITY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CART_QUANTITY,   
    _id: '1',
    purchaseQuantity: 3
  });

  expect(newState.cartOpen).toBe(true);
  expect(newState.cart[0].purchaseQuantity).toBe(3);
  expect(newState.cart[1].purchaseQuantity).toBe(1);
  expect(initialState.cartOpen).toBe(false);
});

// empty cart test
test('CLEAR_CART', () => {
  let newState = reducer(initialState, {
    type: CLEAR_CART
  });

  expect(newState.cartOpen).toBe(false);
  expect(newState.cart.length).toBe(0);
  expect(initialState.cart.length).toBe(3);
});

//cart's visibility toggle

test('TOGGLE_CART', () => {
  let newState = reducer(initialState, {
    type: TOGGLE_CART
  });

  expect(newState.cartOpen).toBe(true);
  expect(initialState.cartOpen).toBe(false);

  let newState2 = reducer(newState, {
    type: TOGGLE_CART
  });

  expect(newState2.cartOpen).toBe(false);
});

// update product array
test('UPDATE_PRODUCTS', () => {
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}]
  });

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});

// update category array
test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}]
  });

  expect (newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

// update state of currentCategory to a new string value instead of an array.
test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: '2'
  });
  expect(newState.currentCategory).toBe('2');
  expect(initialState.currentCategory).toBe('1');
});


