import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 

export default function () {
  const [login, setLogin] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); 

  
    const token = 'fake_token_123'; 

 
    localStorage.setItem('token', token);

    navigate('/');
  };

  return (
    <div>
        <Navbar />
        <div className="pt-14 pb-14 flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign in</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Login</label>
              <input
                type="text"
                placeholder="Ali Tufa..."
                value={login}
                onChange={(e) => setLogin(e.target.value)} 
                className="mt-1 block w-full border-b-2 border-blue-500 focus:outline-none focus:ring-0"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4 border-gray-300" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot
              </a>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Agar siz ro‘yxatdan o‘tmagan bo‘lsangiz{" "}
              <Link 
                to="/register" 
                className="text-blue-600 font-medium hover:underline"
              >
                Register
              </Link>
            </p>

            <button 
              onClick={handleLogin} 
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        </div>
        <Footer />
    </div>
  );
}
