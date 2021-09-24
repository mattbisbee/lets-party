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

// Tests: Verify the initialState was not affected by the update

// Add item to basket
test('ADD_TO_BASKET', () => {
  let newState = reducer(initialState, {
    type: ADD_TO_BASKET,
    product: { purchaseQuantity: 1 }
  });
  expect(newState.cart.length).toBe(4);
  expect(initialState.cart.length).toBe(3);
});

// Add multiple items to basket
test('ADD_MULTIPLE_TO_BASKET', () => {
  let newState = reducer(initialState, {
    type: ADD_MULTIPLE_TO_BASKET,
    products: [{}, {}]
  });
  expect(newState.cart.length).toBe(4);
  expect(initialState.cart.length).toBe(2);
});

// Delete from basket
test('REMOVE_FROM_BASKET', () => {
  let newState1 = reducer(intialState, {
    type: REMOVE_FROM_BASKET,
    _id: '1'
  });

  expect(newState1.cartOpen).toBe(true);

  // Removing the first item makes the second up #1 in the list and the last item #2
  expect(newState1.cart.length).toBe(2);
  expect(newState1.cart[0]._id).toBe('2');

  let newState2 = reducer(newState1, {
    type: REMOVE_FROM_BASKET,
    _id: '2'
  });

  //Removing the current 1st item leaves 1 more item in the basket
  expect(newState2.cart.length).toBe(1);
  expect(newState2.cart[0]._id).toBe('1');

  let newState3 = reducer(newState1, {
    type: REMOVE_FROM_BASKET,
    _id: '3'
  });
  
  //cart is empty and closed
  expect(newState3.cartOpen).toBe(false);
  expect(newState3.cart.length).toBe(0);

  //intitialState
  expect(initialState.cart.length).toBe(3);
});

//update the first items quantity only
test('UPDATE_BASKET_QUANTITY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_BASKET_QUANTITY,   
    _id: '1',
    purchaseQuantity: 3
  });

  expect(newState.cartOpen).toBe(true);
  expect(newState.cart[0].purchaseQuantity).toBe(3);
  expect(newState.cart[1].purcahseQuantity).toBe(1);
  expect(newStae.cart[2].purcahseQuantity).toBe(2);
  expect(initialState.cartOpen).toBe(false);
});

// empty cart test
test('CLEAR_BASKET', () => {
  let newState = reducer(initialState, {
    type: CLEAR_BASKET
  });

  expect(newState.cartOpen).toBe(false);
  expect(newState.cart.length).toBe(0);
  expect(initialState.cart.length).toBe(3);
});

//cart's visibility toggle

test('TOGGLE_CART', () => {
  let newState = reducer(initialState, {
    type: TOGGLE_BASKET
  });

  expect(newState.cartOpen).toBe(true);
  expect(initialState.cartOpen).toBe(false);

  let newState2 = reducer(newState, {
    type: TOGGLE_BASKET
  });

  expect(newState2.cartOpen).toBe(false);
});



