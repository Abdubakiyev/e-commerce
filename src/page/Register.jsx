import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white border border-blue-400 p-8 rounded-md shadow">
        <h2 className="text-xl font-semibold mb-6">Registration</h2>

        <form className="space-y-4">
          {/* Login */}
          <input
            type="text"
            placeholder="Login"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
          />

          {/* First name */}
          <input
            type="text"
            placeholder="First name"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
          />

          {/* Last name */}
          <input
            type="text"
            placeholder="Last name"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
          />

          {/* User role */}
          <select
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 text-gray-500"
          >
            <option value="">User role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
          />

          {/* Re-enter password */}
          <input
            type="password"
            placeholder="Re-enter password"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
          />

          {/* Button */}
          <Link to="/">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
            >
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
        <Footer/>
    </div>
  );
}
