import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../redux/actions'; 
import APIService from '../utils/services.jsx/ApiService';
import Footer from "../ui/Footer";

function HeroHome() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch(); 
    const containerRef = useRef(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        const apiService = new APIService();
        apiService.get(`products`)
            .then(data => {
                setProducts(data); 
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    const addToCartHandler = (product) => { 
        dispatch(addToCart(product)); 
    };

    return (
        <div className=" overflow-hidden  bg-[#a3c2e2]">
            <div className="items-center justify-center">
                <div className="text-center"> 
                
                </div>
                    <div className="mt-4 gap-4 overflow-hidden rounded-lg p-4">
                        <h1 className="text-black font-serif rounded-lg text-3xl underline mb-2">Trending products</h1>
                        <div ref={containerRef} className="flex gap-4 rounded-lg overflow-x-auto scroll-smooth">
                            {products.map(product => (
                                <div key={product.id} className="flex-none w-60">
                                    <div className="border bg-[#2e3439] text-white rounded-lg p-4">
                                        <img className="w-full touch-pan-x mb-2 h-40 object-cover" src={product.images} alt={product.title} />
                                        <h3 className="text-sm font-cambria mb-2">{product.title}</h3>
                                        <p className="text-lg font-bold mb-2">
                                            Price: {product.price} 
                                            <button onClick={() => addToCartHandler(product)} className="hover:bg-[#294c70] bg-blue-700 ml-2 text-sm text-white font-seriif py-1 px-2 rounded-full">
                                                Add to Cart
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                
            </div>

            {/* Description Section */}
            <div className="container mx-auto p-8 py-12">
                <h2 className="text-3xl text-black font-bold text-center mb-4 animate-fade-in-delay">Why Choose Us?</h2>
                <p className="text-lg text-center text-black mb-8 animate-fade-in-delay">We handpick our products to ensure they meet the highest quality standards. Whether you’re looking for electronics, fashion, home goods, or more, you can trust that our items are built to last and perform to your expectations.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Description Cards */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <img src="/thhh.jpg" alt="Quality Products" className="mx-auto mb-4" />
                        <h3 className="text-xl text-white font-bold mb-2">Quality Products</h3>
                        <p className="text-gray-300">We offer only the best quality products from top brands.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <img src="/fast-shipping.jpeg" alt="Fast Shipping" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">Fast Shipping</h3>
                        <p className="text-gray-300">Enjoy fast and reliable shipping to your doorstep.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <img src="/shop.webp" alt="Excellent Customer Service" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">Excellent Customer Service</h3>
                        <p className="text-gray-300">Our dedicated customer service team is here to assist you 24/7.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default HeroHome;
