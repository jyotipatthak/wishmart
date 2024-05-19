import { useState } from 'react'; // Importing useState hook
import { Link, useNavigate } from 'react-router-dom'; // Importing Link and useNavigate for navigation
import { toast } from 'react-toastify'; // Importing toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Importing toast styles
import APIService from '../../utils/services.jsx/ApiService'; // Importing custom API service

function SignUp() {
    const navigate = useNavigate(); // Initializing useNavigate for redirection

    const [email, setEmail] = useState(''); // State to store email
    const [password, setPassword] = useState(''); // State to store password
    const [name, setName] = useState(''); // State to store name

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent form default submission

        // Creating data object to be sent in the request
        const data = {
            name: name,
            email: email,
            password: password,
            avatar: "https://picsum.photos/800"
        };

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

        try {
            const Api = new APIService(); // Creating an instance of APIService
            // Sending sign-up request
            Api.post('users/', false, data);

            // Display success message
            toast.success('User registration successful', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            // Clearing input fields after successful registration
            setEmail('');
            setPassword('');
            setName('');

            // Redirecting to login page after successful registration
            navigate('/');
        } catch (error) {
            // Display error message if registration fails
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
        <div className="w-full min-h-screen flex bg-[#96c4f6] justify-center items-center">
            <div className="p-8 rounded bg-white shadow-lg w-96 mt-12">
                {/* Registration title */}
                <h2 className="text-2xl font-bold text-black text-center mb-4">
                    {/* Logo */}
                    <svg className='w-10 justify-center items-center ml-28 h-12' fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
                        {/* Logo paths */}
                    </svg>
                    Register to your account
                </h2>
                {/* Registration form */}
                <form onSubmit={handleSignUp}>
                    {/* Name input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-black sup">Name</label>
                        <input
                            type="text"
                            placeholder="firstname"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 h-6 focus:ring-indigo-500 pl-2 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 border rounded-md"
                            required
                        />
                    </div>
                    {/* Email input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            placeholder='email'
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 h-6 focus:ring-indigo-500 p-2 focus:border-indigo-500 pl-2 block w-full shadow-sm sm:text-sm border border-gray-900 rounded-md"
                            required
                        />
                    </div>
                    {/* Password input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='password'
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 h-6 focus:ring-indigo-500 pl-2 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-900 rounded-md"
                            required
                        />
                    </div>
                    {/* Sign-up button */}
                    <div className="flex justify-between items-center mb-4">
                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 justify-self-auto focus:ring-indigo-500">Sign Up</button>
                    </div>
                    {/* Login link */}
                    <div className="text-sm text-black">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline focus:outline-none">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
