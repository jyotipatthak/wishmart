import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({onSearch}) {
        const [text,setText]=useState('');

        const handleSearch = () => { 
          onSearch(text) ;
      };
  
     
  return (
    <>
    <div className="flex border-gray-500 h-8 w-full bg-white rounded-full mt-1 items-center">
      <div className="mr-2  ">
        <FaSearch className=" ml-1  text-black h-4 " />
      </div>
      <input
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Search..."
        className=" border text-black  rounded-md focus:outline-none w-5/6 focus:border-indigo-500"
      />
      
      <button onClick={handleSearch} className="bg-blue-700 text-black  h-8 px-4 rounded-full  ">Search</button>
      </div>
     
    </>
  );
}

export default SearchBar;
