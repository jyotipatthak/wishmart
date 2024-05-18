import { useState } from 'react';

import { Link,  useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import APIService from '../../utils/services.jsx/ApiService';

function SignUp() {
    const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    

    const handleSignUp = async (e) => {
        e.preventDefault();
        
        const data={
            name: name,
            email: email,
            password:password,
            avatar: "https://picsum.photos/800"
              }

              if (password.length < 6) {
                toast.error('password length is at least 6 ', {
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
            const Api= new APIService();
            Api.post('users/',false,data
            )
           
               
            
            toast.success('User registeration  successfull', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
            setEmail('');
            setPassword('');
            setName('');
            
            
               navigate('/') ;

        } catch (error) {
            toast.error('user credencial is not correct', {
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
    }

    return (
        <div className=" w-full min-h-screen flex bg-[#96c4f6] justify-center items-center ">
            <div className="p-8 rounded bg-white shadow-lg w-96 mt-16 ">
           

                <h2 className="text-2xl font-bold text-black text-center mb-4">  <svg className='w-10 justify-center items-center ml-28 h-12' fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
  <path fill="#4f46e5" d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"/>
  <path fill="#4f46e5" d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"/>
</svg>Register to your account</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium  text-black sup">Name</label>
                        <input
                            type="text"
                            placeholder="firstname"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 h-6 focus:ring-indigo-500 pl-2 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 border rounded-md"
                            required
                        />
                    </div>
                   
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
                    <div className="flex justify-between items-center mb-4">
                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 justify-self-auto focus:ring-indigo-500">Sign Up</button>
                    </div>

                    <div className="text-sm text-black">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline focus:outline-none">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
