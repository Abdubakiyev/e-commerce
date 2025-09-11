import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";

export default function Profile() {
    const token = localStorage.getItem('token', 'fake_token_123');
    const [login, setRegister] = useState(""); 
    const [password, setPassword] = useState(""); 

    return (
        <div>

        {token ? <MainNav /> : <Navbar />}
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="w-full max-w-md bg-white border border-blue-400 p-8 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-6">Profile</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Login"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <input
                type="text"
                placeholder="First name"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <input
                type="text"
                placeholder="Last name"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <select
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 text-gray-500"
              >
                <option value="">User role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

              <input
                type="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
              />

              <button 
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                <Link to="/" className="w-full text-white block">O'zgartish</Link>
              </button>
            </form>
          </div>
        </div>
            <Footer/>
        </div>
    );
}
