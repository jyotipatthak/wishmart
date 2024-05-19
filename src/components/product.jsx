import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../redux/actions'; 
import APIService from '../utils/services.jsx/ApiService';
import SearchBar from "../ui/Searcgbar"; 
import { Link } from "react-router-dom";
import Footer from "../ui/Footer";

function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch(); 

    useEffect(() => {
        fetchCategory();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            fetchProducts(selectedCategory);
        } else {
            fetchProducts();
        }
    }, [selectedCategory]);

    const fetchProducts = (categoryId = null) => {
        setIsLoading(true);
        const apiService = new APIService();
        const endpoint = categoryId ? `categories/${categoryId}/products` : `products`;
        apiService.get(endpoint)
            .then(data => {
                setProducts(data); 
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setIsLoading(false);
            });
    };

    const fetchCategory = () => {
        setIsLoading(true);
        const apiService = new APIService();
        apiService.get(`categories`)
            .then(data => {
                setCategories(data); 
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setIsLoading(false);
            });
    };

    const handleSearch= (title) => {
        setIsLoading(true);
        const apiService = new APIService();
        apiService.get(`products/?title=${title}`)
            .then(data => {
                setProducts(data); 
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setIsLoading(false);
            });
    };

    const addToCartHandler = (product) => { 
        dispatch(addToCart(product)); 
    };

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <div className="min-h-screen bg-[#a3c2e2] flex flex-col mt-6">
            <div className="flex-1 md:flex m-4">
                <div className="block ms:w-1/5">
                    <div className=" text-white bg-[#415569] rounded-xl mt-4 p-4">
                        <nav className="mb-4">
                            <h1 className="text-lg font-bold text-center h-10 py-1 bg-blue-700 mb-4">Categories</h1>
                            <div className="">
                                {categories.map(category => (
                                    <div key={category.id} className="w-full">
                                        <div className="border  text-white p-4">
                                            <Link
                                                className="text-lg font-bold mb-2 cursor-pointer"
                                                onClick={() => handleCategoryClick(category.id)}
                                            >
                                                {category.name}
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </nav>
                        <SearchBar onSearch={handleSearch} className="mt-4 " />
                    </div>
                </div>
                {isLoading ? (
                    <div className="text-red mt-20">Loading...</div>
                ) : (
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:pr-0 overflow-y-auto">
                        {products.map(product => (
                            <div key={product.id} className="w-full">
                                <div className="border bg-[#526b7d] text-white rounded-lg p-4 ">
                                    <img className="w-full mb-2 bg-[#2e373e] h-60 " src={product.images} alt={product.title} />
                                    <h3 className="text-sm font-cambria  text-black mb-2">{product.title}</h3>
                                    <p className="text-md font-bold text-black mb-2">Price: {product.price} <button onClick={() => addToCartHandler(product)} className="hover:bg-black bg-[#35383b] text-white font-serif py-1 px-2 ml-2 rounded-xl">Add to Cart</button></p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Product;


