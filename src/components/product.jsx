import React, { useEffect, useState } from "react"; // Importing React and necessary hooks
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from React-Redux to dispatch actions
import { addToCart } from '../redux/actions'; // Importing action creator for adding items to the cart
import APIService from '../utils/services.jsx/ApiService'; // Importing a custom API service for fetching data
import SearchBar from "../ui/Searcgbar"; // Importing SearchBar component
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import Footer from "../ui/Footer"; // Importing Footer component

function Product() {
    const [products, setProducts] = useState([]); // State to store products fetched from the API
    const [categories, setCategories] = useState([]); // State to store product categories
    const [selectedCategory, setSelectedCategory] = useState(null); // State to store selected category
    const [isLoading, setIsLoading] = useState(false); // State to handle loading state
    const dispatch = useDispatch(); // Getting the dispatch function from Redux

    useEffect(() => {
        fetchCategory(); // Fetch categories when the component mounts
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            fetchProducts(selectedCategory); // Fetch products based on selected category
        } else {
            fetchProducts(); // Fetch all products if no category is selected
        }
    }, [selectedCategory]);

    const fetchProducts = (categoryId = null) => {
        setIsLoading(true); // Set loading state to true
        const apiService = new APIService(); // Creating an instance of APIService
        const endpoint = categoryId ? `categories/${categoryId}/products` : `products`; // Determine the endpoint based on category
        apiService.get(endpoint)
            .then(data => {
                setProducts(data); // Updating state with fetched products
                setIsLoading(false); // Set loading state to false
            })
            .catch(error => {
                console.error('Error fetching products:', error); // Logging errors if any
                setIsLoading(false); // Set loading state to false
            });
    };

    const fetchCategory = () => {
        setIsLoading(true); // Set loading state to true
        const apiService = new APIService(); // Creating an instance of APIService
        apiService.get(`categories`)
            .then(data => {
                setCategories(data); // Updating state with fetched categories
                setIsLoading(false); // Set loading state to false
            })
            .catch(error => {
                console.error('Error fetching categories:', error); // Logging errors if any
                setIsLoading(false); // Set loading state to false
            });
    };

    const handleSearch= (title) => {
        setIsLoading(true); // Set loading state to true
        const apiService = new APIService(); // Creating an instance of APIService
        apiService.get(`products/?title=${title}`)
            .then(data => {
                setProducts(data); // Updating state with searched products
                setIsLoading(false); // Set loading state to false
            })
            .catch(error => {
                console.error('Error fetching products:', error); // Logging errors if any
                setIsLoading(false); // Set loading state to false
            });
    };

    const addToCartHandler = (product) => {
        dispatch(addToCart(product)); // Dispatching the addToCart action with the product
    };

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId); // Updating state with selected category
    };

    return (
        <div className="min-h-screen bg-[#a3c2e2] flex flex-col mt-6">
            <div className="flex-1 md:flex m-4">
                <div className="block ms:w-1/5">
                    <div className="text-white bg-[#415569] rounded-xl mt-4 p-4">
                        <nav className="mb-4">
                            <h1 className="text-lg font-bold text-center h-10 py-1 bg-blue-700 mb-4">Categories</h1> {/* Categories title */}
                            <div className="">
                                {categories.map(category => (
                                    <div key={category.id} className="w-full">
                                        <div className="border text-white p-4">
                                            <Link
                                                className="text-lg font-bold mb-2 cursor-pointer"
                                                onClick={() => handleCategoryClick(category.id)}
                                            >
                                                {category.name} {/* Category name */}
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </nav>
                        <SearchBar onSearch={handleSearch} className="mt-4" /> {/* Search bar component */}
                    </div>
                </div>
                {isLoading ? (
                    <div className="text-red mt-20">Loading...</div> // Loading state
                ) : (
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:pr-0 overflow-y-auto">
                        {products.map(product => (
                            <div key={product.id} className="w-full">
                                <div className="border bg-[#526b7d] text-white rounded-lg p-4">
                                    <img className="w-full mb-2 bg-[#2e373e] h-60" src={product.images} alt={product.title} /> {/* Product image */}
                                    <h3 className="text-sm font-cambria text-black mb-2">{product.title}</h3> {/* Product title */}
                                    <p className="text-md font-bold text-black mb-2">
                                        Price: {product.price} {/* Product price */}
                                        <button onClick={() => addToCartHandler(product)} className="hover:bg-black bg-[#35383b] text-white font-serif py-1 px-2 ml-2 rounded-xl">
                                            Add to Cart
                                        </button> {/* Add to Cart button */}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer /> {/* Including Footer component */}
        </div>
    );
}

export default Product; // Exporting Product component as default
