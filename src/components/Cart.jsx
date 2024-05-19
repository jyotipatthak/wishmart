import React from 'react'; // Importing React to use JSX and React functionalities
import { useSelector, useDispatch } from 'react-redux'; // Importing hooks from React-Redux to access the Redux store and dispatch actions
import { removeFromCart, updateQuantity } from '../redux/actions'; // Importing action creators for removing items from cart and updating quantity
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

function Cart() {
  const cartItems = useSelector(state => state.cartItems); // Accessing cart items from the Redux store
  const dispatch = useDispatch(); // Getting the dispatch function from Redux

  // Function to handle item removal from the cart
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId)); // Dispatching the removeFromCart action with the productId
  };

  // Function to handle quantity changes for cart items
  const handleQuantityChange = (productId, quantity) => {
    if (!isNaN(quantity) && parseInt(quantity) > 0) { // Checking if the quantity is a number and greater than 0
      dispatch(updateQuantity(productId, quantity)); // Dispatching the updateQuantity action with the productId and new quantity
    }
  };

  return (
    <div className="bg-[#bdd2e8] text-white min-h-screen flex flex-col mt-10 p-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-black">Shopping Cart</h2> {/* Cart title */}
      <ul className="w-full space-y-4">
        {cartItems.map(item => ( // Mapping through cart items to display each item
          <li key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 py-4">
            <div className="flex items-center mb-4 md:mb-0 md:ml-0">
              <img src={item.images} alt={item.title} className="w-20 h-28 text-black object-cover mr-4" /> {/* Product image */}
              <div>
                <h3 className="text-lg text-black font-semibold">{item.title}</h3> {/* Product title */}
                <h3 className="text-lg text-black font-semibold">{item.price * (item.quantity ?? 1)}</h3> {/* Product total price */}
                <div className="flex items-center mt-2">
                  <span className="text-black mr-2">Quantity:</span> {/* Quantity label */}
                  <input
                    type="number"
                    value={item.quantity ?? 1} // Displaying current quantity
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)} // Handling quantity change
                    className="w-16 border text-black border-gray-400 rounded px-2 py-1"
                    min="1"
                    max="100"
                  />
                </div>
              </div>
            </div>
            <button onClick={() => handleRemove(item.id)} className="text-black font-semibold mt-2 md:mt-0">Remove</button> {/* Remove button */}
          </li>
        ))}
      </ul>
      <div className="mt-auto text-center">
        <Link to="/signup">
          <button
            type="submit"
            className="hover:bg-pink-500 bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Checkout
          </button> {/* Checkout button */}
        </Link>
      </div>
    </div>
  );
}

export default Cart;
