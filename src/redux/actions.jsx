// actions.js

// Action creator function to add a product to the cart
export const addToCart = (product) => ({
  type: 'ADD_TO_CART', // Action type
  payload: product, // Data payload (product to be added)
});

// Action creator function to remove a product from the cart
export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART', // Action type
  payload: productId, // Data payload (product ID to be removed)
});

// Action creator function to update the quantity of a product in the cart
export const updateQuantity = (productId, quantity) => ({
  type: 'UPDATE_QUANTITY', // Action type
  payload: { productId, quantity }, // Data payload (product ID and new quantity)
});
