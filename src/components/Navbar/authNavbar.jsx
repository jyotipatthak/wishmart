import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoPersonSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import APIService from "../../utils/services.jsx/ApiService";
import { useSelector } from "react-redux";

function AuthNavbar({ onLogout }) {
  const [user, setUser] = useState({}); // State to hold user data
  const cartItems = useSelector((state) => state.cartItems); // Access cart items from Redux store
  const [showMenu, setShowMenu] = useState(false); // State to manage mobile menu visibility

  // Calculate the total number of unique items in the cart
  const cartItemCount = cartItems.length;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchProfile(token); // Fetch user profile data when component mounts
    }
  }, []);

  const fetchProfile = (token) => {
    // Fetch user profile data from API and set user state
    const Apis = new APIService();
    Apis.get(`auth/profile`)
      .then((data) => {
        setUser(data); // Assuming the API response contains the user's name
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleLogout = async () => {
    // Handle logout functionality
    // Clear user data from localStorage or perform any additional cleanup
    await localStorage.removeItem("token");
    await localStorage.removeItem("refreshToken");
    setUser({});
    onLogout(); // Call the provided onLogout function
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 py-1 bg-[#0071dc] fixed top-0 w-full z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* Logo and brand name */}
        <Link to="/" className="flex items-center">
          <img src="./img.png" alt="Logo" className="h-8 w-10 mr-2" />
          <span className="text-xl font-bold tracking-tight underline">Wishmart</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        {/* Mobile menu button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              fillRule="evenodd"
              d="M3 3h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm0 6h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V10a1 1 0 011-1zm0 6h14a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${showMenu ? "block" : "hidden"} lg:block mt-4 lg:mt-0`}>
        <div className="text-sm lg:flex-grow">
          {/* Navigation links */}
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-pink-500 mr-4">
            Home
          </Link>
          <Link to="/product" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-pink-500 mr-4">
            Products
          </Link>
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-pink-500 mr-4">
            About
          </Link>
        </div>
        <div className="flex items-center mt-4 lg:mt-0 lg:ml-auto">
          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="bg-blue-700 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full mr-4"
          >
            Logout
          </button>
          {/* User's name */}
          <div className="text-white font-serif uppercase mr-4">
            <u>{user.name}</u> {/* Display user's name */}
          </div>
          {/* Link to user profile */}
          <Link to="/profile" className="mr-4">
            <IoPersonSharp className="w-8 h-8 rounded-full text-pink-500" />
          </Link>
          {/* Cart icon */}
          <Link to="/cart" className="relative text-white">
            <FaCartPlus className="w-8 h-8" />
            {/* Display cart item count badge */}
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full h-4 w-4 flex justify-center items-center text-sm">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AuthNavbar;
