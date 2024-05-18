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

    const handleLogout = () => {
        setIsLoggedIn(false); // Update isLoggedIn state to false after logout
    };

    return (
        <Provider store={store}> {/* Provide the Redux store to the application */}
            <BrowserRouter>
                {isLoggedIn ? (
                    <AuthNavbar onLogout={handleLogout} />
                ) : (
                    <Navbar />
                )}
                
                <Routes>
                    <Route path='/' element={<HeroHome />} />
                    <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/cart' element={<Cart />} /> {/* Route for the Cart component */}
                    <Route path='/about' element={<About />} />
                </Routes>
                <ToastContainer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
