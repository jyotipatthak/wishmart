import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store
import Navbar from './components/Navbar/navbar';
import AuthNavbar from './components/Navbar/authNavbar';
import Login from './components/Userauthentication/login';
import HeroHome from './components/HeroHome';
import Product from './components/product';
import Cart from './components/Cart'; // Import the Cart component
import About from './ui/About';
import SignUp from './components/Userauthentication/signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle logout
    const handleLogout = () => {
        setIsLoggedIn(false); // Update isLoggedIn state to false after logout
    };

    return (
        <Provider store={store}> {/* Provide the Redux store to the application */}
            <BrowserRouter>
                {/* Conditional rendering of Navbar based on user authentication */}
                {isLoggedIn ? (
                    <AuthNavbar onLogout={handleLogout} /> 
                ) : (
                    <Navbar />
                )}
                {/* Main content of the application */}
                <div className='p-8 bg-[#a3c2e2]'> {/* Styling for the main content */}
                    <Routes>
                        {/* Define routes for different components */}
                        <Route path='/' element={<HeroHome />} /> {/* Default route */}
                        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} /> {/* Route for Login component */}
                        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} /> {/* Route for SignUp component */}
                        <Route path='/product' element={<Product />} /> {/* Route for Product component */}
                        <Route path='/cart' element={<Cart />} /> {/* Route for Cart component */}
                        <Route path='/about' element={<About />} /> {/* Route for About component */}
                    </Routes>
                </div>
                {/* Container for displaying toasts */}
                <ToastContainer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
