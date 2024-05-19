import React, { useState } from 'react'; // Importing React and useState hook
import { toast } from 'react-toastify'; // Importing toast for notifications
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import { Link } from 'react-router-dom'; // Importing Link for navigation
import APIService from '../../utils/services.jsx/ApiService'; // Importing custom API service
import 'react-toastify/dist/ReactToastify.css'; // Importing toast styles

function Login({ setIsLoggedIn }) {
    const navigate = useNavigate(); // Initializing useNavigate for redirection
    const [email, setEmail] = useState(''); // State to store email
    const [password, setPassword] = useState(''); // State to store password

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form default submission

        // Check if password is at least 6 characters long
        if (password.length < 6) {
            toast.error('Password length is at least 6', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return; // Exit the function if password is invalid
        }

        const data = {
            email: email,
            password: password
        };

        try {
            const Api = new APIService(); // Creating an instance of APIService
            const result = await Api.post('auth/login', false, data); // Sending login request
            if (result.access_token) {
                await localStorage.setItem('token', result.access_token); // Storing access token in local storage
                await localStorage.setItem('refreshToken', result.refresh_token); // Storing refresh token in local storage
                setIsLoggedIn(true); // Update isLoggedIn state to true after successful login

                toast.success('User logged in successfully', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "black",
                });
                navigate('/'); // Redirect to home page
            } else {
                toast.error('User credential is not correct', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "black",
                });
            }
        } catch (error) {
            toast.error('User credential is not correct', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "black",
            });
        }
    };

    return (
        <div className="py-16 min-h-screen flex justify-center items-center bg-[#96c4f6] flex-col px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded shadow-md text-black w-full bg-white max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    <svg className='w-10 mx-auto h-12 mb-2' fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4f46e5" d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"/>
                        <path fill="#4f46e5" d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"/>
                    </svg>
                    Login to your account
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 h-10 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-900 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 h-10 px-2 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 rounded-md"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                    </div>
                    <div className="text-sm text-center text-black">
                        New user? <Link to="/signup" className="hover:underline text-blue-500 focus:outline-none">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login; // Exporting Login component as default
