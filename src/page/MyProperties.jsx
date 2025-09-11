import React from 'react';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import Navbar from '../components/Navbar';

const properties = [
  {
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    price: '$7,500/mo',
    oldPrice: '$2,800/mo',
    datePublished: '30 December 2022',
    status: 'Pending',
    views: 5933,
  },
  {
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    price: '$7,500/mo',
    oldPrice: '$2,800/mo',
    datePublished: '30 December 2022',
    status: 'Pending',
    views: 5933,
  },
  {
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    price: '$7,500/mo',
    oldPrice: '$2,800/mo',
    datePublished: '30 December 2022',
    status: 'Pending',
    views: 5933,
  },
];

export default function MyProperties() {
  const token = localStorage.getItem('token', 'fake_token_123');

  return (
    <div>
      {token ? <MainNav /> : <Navbar />}
      <div className="container mx-auto px-20 py-20"> {/* Kengroq padding */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">My properties</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-white">
              <tr>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Listing Title</th>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Date Published</th>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Status</th>
                <th className="py-3 px-6 text-left font-medium text-gray-600">View</th>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-5 px-6">
                    <div className="flex gap-4 items-start">
                      {/* Image block */}
                      <div className="relative w-[100px] h-[100px] bg-gray-300 rounded-md shadow-md shrink-0">
                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded">
                          FEATURED
                        </span>
                      </div>
  
                      {/* Text Info */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <h2 className="text-base font-semibold text-[#0D263B]">
                            {property.title}
                          </h2>
                          <span className="bg-[#0D263B] text-white text-xs px-2 py-1 rounded">
                            FOR SALE
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{property.location}</p>
                        <p className="text-sm text-gray-400 line-through mt-2">
                          {property.oldPrice}
                        </p>
                        <p className="text-lg font-bold text-[#0D263B]">
                          {property.price}
                        </p>
                      </div>
                    </div>
                  </td>
  
                  <td className="py-5 px-6 text-sm text-gray-600">{property.datePublished}</td>
                  <td className="py-5 px-6 text-sm text-gray-600">{property.status}</td>
                  <td className="py-5 px-6 text-sm text-gray-600">{property.views}</td>
  
                  {/* Rounded buttons */}
                  <td className="py-5 px-6 text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      {/* Edit button */}
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition duration-200">
                        <img src="./public/images/Group (1).png" alt="Edit" className="w-5 h-5" />
                      </button>
                              
                      {/* Delete button */}
                      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition duration-200">
                        <img src="./public/images/Group.png" alt="Delete" className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
  
}
