import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
        <Navbar/>
        <div className="pt-14 pb-14 flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign in</h2>

            {/* Login input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Login</label>
              <input
                type="text"
                placeholder="Ali Tufa..."
                className="mt-1 block w-full border-b-2 border-blue-500 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Password input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Remember me + Forgot */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4 border-gray-300" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot
              </a>
            </div>

            {/* Register link */}
            <p className="text-sm text-gray-600 mb-4">
              Agar siz ro‘yxatdan o‘tmagan bo‘lsangiz{" "}
              <Link 
                to="/register" 
                className="text-blue-600 font-medium hover:underline"
              >
                Register
              </Link>
            </p>

            {/* Login button */}
            <Link to="/">
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
