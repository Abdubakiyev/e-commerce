import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function MainNav() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); 


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    window.location.reload();
    navigate('/'); 
  };

  return (
    <div className="bg-[#0D263B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <img src="/images/Vector.png" alt="logo" className="w-6 h-7" />
          <span className="font-bold text-lg">Houzing</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/properties" className="hover:underline">Properties</Link>
          <Link to="/contacts" className="hover:underline">Contacts</Link>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="text-white text-xl hover:text-gray-300"
          >
            <FaUser />
          </button>

          {openDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded p-4 space-y-2 z-50">
              <Link to="/profile" className="block hover:underline">My profile</Link>
              <Link to="/myproperties" className="block hover:underline">My Properties</Link>
              <Link to="/favourite" className="block hover:underline">Favourites</Link>
              <Link to="/addproperties" className="block hover:underline">Add Properties</Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left hover:underline"
              >
                Chiqish
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
