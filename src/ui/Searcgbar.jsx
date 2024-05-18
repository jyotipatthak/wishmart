import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  return (
    <>
    <div className="flex border-gray-500 h-8 w-full bg-white rounded-full mt-1 items-center">
      <div className="mr-2  ">
        <FaSearch className=" ml-1  h-4 " />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className=" border   rounded-md focus:outline-none w-5/6 focus:border-indigo-500"
      />
      
      <button className="bg-blue-700 text-white h-8 px-4 rounded-full  ">Search</button>
      </div>
     
    </>
  );
}

export default SearchBar;
