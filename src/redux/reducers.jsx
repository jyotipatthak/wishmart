// reducers.js

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map(item => {
            if (item.id === action.payload.productId) {
              return { ...item, quantity: action.payload.quantity };
            }
            return item;
          }),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  