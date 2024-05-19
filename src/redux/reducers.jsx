// reducers.js

// Initial state for the cart
const initialState = {
  cartItems: [], // Array to store cart items
};

// Reducer function for the cart
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      // Action type to add a product to the cart
      case 'ADD_TO_CART':
          return {
              ...state,
              cartItems: [...state.cartItems, action.payload], // Add the new product to the cart
          };
      // Action type to remove a product from the cart
      case 'REMOVE_FROM_CART':
          return {
              ...state,
              cartItems: state.cartItems.filter(item => item.id !== action.payload), // Remove the product with the given ID from the cart
          };
      // Action type to update the quantity of a product in the cart
      case 'UPDATE_QUANTITY':
          return {
              ...state,
              cartItems: state.cartItems.map(item => {
                  if (item.id === action.payload.productId) {
                      return { ...item, quantity: action.payload.quantity }; // Update the quantity of the product with the given ID
                  }
                  return item;
              }),
          };
      default:
          return state; // Return the current state for any other action type
  }
};

export default cartReducer;
