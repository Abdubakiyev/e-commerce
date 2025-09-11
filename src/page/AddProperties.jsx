import React, { useState } from 'react'
import MainNav from '../components/MainNav';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function AddProperties() {
    const [energyClass, setEnergyClass] = useState('');
    const [energyIndex, setEnergyIndex] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/');  
    };

    const [region, setRegion] = useState("");
    const [friendlyAddress, setFriendlyAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const token = localStorage.getItem('token', 'fake_token_123');

    const [featuredImages, setFeaturedImages] = useState([null, null, null, null]);
    const [galleryFiles, setGalleryFiles] = useState(null);
    const [attachmentFile, setAttachmentFile] = useState(null);
    const [videoLink, setVideoLink] = useState("");
    const [virtualTour, setVirtualTour] = useState("");

    const [amenities, setAmenities] = useState({
        airConditioning: false,
        lawn: false,
        diningRoom: false,
        waterfront: false,
        barbeque: true,
        microwave: true,
        fireplace: true,
        parking: true,
        dryer: true,
        outdoorShower: true,
        petsAllowed: true,
        doorman: true,
        gym: false,
        refrigerator: false,
        unitWasherDryer: false,
        centralHeating: false,
        laundry: false,
        stunningViews: false,
        onsiteParking: false,
        cleaningService: false,
    });
    
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setAmenities((prev) => ({
        ...prev,
        [name]: checked,
      }));
    };
  
    // Handle featured images upload
    const handleFeaturedImageChange = (e, index) => {
      const files = [...featuredImages];
      files[index] = e.target.files[0];
      setFeaturedImages(files);
    };
  
    // Handle gallery upload
    const handleGalleryChange = (e) => {
      setGalleryFiles(e.target.files);
    };
  
    // Handle attachment upload
    const handleAttachmentChange = (e) => {
      setAttachmentFile(e.target.files[0]);
    };
  
  return (
    <div>
        {token ? <MainNav /> : <Navbar />}
        <div className="max-w-5xl mx-auto mt-10 mb-10">
          <h1 className="text-2xl font-semibold text-[#0D263B] mb-6">Add new property</h1>

          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-lg font-semibold text-[#0D263B] mb-4">Contact information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Property Title */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Property title<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  placeholder="Enter property title"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Type
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  placeholder="Enter type"
                />
              </div>
            </div>

            {/* Property Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Property Description<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2 resize-none"
                placeholder="Write short description..."
              ></textarea>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 mt-8">
              <h2 className="text-lg font-semibold text-[#0D263B] mb-4">Additional</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Property ID */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Property ID</label>
                  <input
                    type="text"
                    placeholder="Enter Property ID"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Parent property */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Parent property</label>
                  <select
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2 bg-transparent"
                  >
                    <option value="">Select parent</option>
                    <option>Parent 1</option>
                    <option>Parent 2</option>
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Status</label>
                  <select
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2 bg-transparent"
                  >
                    <option value="">Select status</option>
                    <option>For Sale</option>
                    <option>For Rent</option>
                  </select>
                </div>

                {/* Label */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Label</label>
                  <input
                    type="text"
                    placeholder="Enter Label"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Material */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Material</label>
                  <input
                    type="text"
                    placeholder="Enter Material"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Rooms</label>
                  <input
                    type="number"
                    placeholder="Number of rooms"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Beds */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Beds</label>
                  <input
                    type="number"
                    placeholder="Beds"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Baths */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Baths</label>
                  <input
                    type="number"
                    placeholder="Baths"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Garages */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Garages</label>
                  <input
                    type="number"
                    placeholder="Garages"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Year build */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Year build</label>
                  <input
                    type="number"
                    placeholder="e.g. 2020"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Home area */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Home area (sqft)</label>
                  <input
                    type="number"
                    placeholder="e.g. 1200"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Lot dimensions */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Lot dimensions</label>
                  <input
                    type="text"
                    placeholder="e.g. 30x40"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Lot area */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Lot area (sqft)</label>
                  <input
                    type="number"
                    placeholder="e.g. 5000"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-6 mt-8">
              <h2 className="text-lg font-semibold text-[#0D263B] mb-4">Price</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price ($) */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Price ($)</label>
                  <input
                    type="number"
                    placeholder="Enter price"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Price Prefix */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Price Prefix</label>
                  <input
                    type="text"
                    placeholder="Enter prefix"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Price Suffix */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Price Suffix</label>
                  <input
                    type="text"
                    placeholder="Enter suffix"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Price Custom */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Price Custom</label>
                  <input
                    type="text"
                    placeholder="Enter custom price"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-6 mt-8">
              <h2 className="text-lg font-semibold text-[#0D263B] mb-4">Location</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                {/* Regions Dropdown */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Regions</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  >
                    <option value="">Select region</option>
                    <option value="region1">Region 1</option>
                    <option value="region2">Region 2</option>
                    {/* Add more regions as needed */}
                  </select>
                </div>

                {/* Friendly Address */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Friendly address</label>
                  <input
                    type="text"
                    value={friendlyAddress}
                    onChange={(e) => setFriendlyAddress(e.target.value)}
                    placeholder="Enter friendly address"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                {/* Map Location (readonly) */}
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Map location</label>
                  <input
                    type="text"
                    value={`${latitude}, ${longitude}`}
                    readOnly
                    className="w-full border-b border-gray-300 bg-gray-100 px-1 py-2"
                    placeholder="Map location"
                  />
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="w-full h-64 rounded-md overflow-hidden mb-6">
                <iframe
                  title="map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://maps.google.com/maps?q=${latitude || 27.870399},${longitude || -82.540039}&z=14&output=embed`}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Latitude and Longitude Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Latitude</label>
                  <input
                    type="number"
                    step="any"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Enter latitude"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Longitude</label>
                  <input
                    type="number"
                    step="any"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="Enter longitude"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-6 mt-8">
              <h2 className="text-lg font-semibold text-[#0D263B] mb-4">Media</h2>

              {/* Featured Images */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Featured image</label>
                <div className="flex gap-4 mb-4">
                  {featuredImages.map((img, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 bg-gray-300 rounded-md flex items-center justify-center overflow-hidden"
                    >
                      {img ? (
                        <img
                          src={URL.createObjectURL(img)}
                          alt={`Featured ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-gray-500 text-xs">No Image</span>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFeaturedImageChange(e, index)}
                        className="absolute w-20 h-20 opacity-0 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition"
                  onClick={() => {
                    document.getElementById("featured-upload-0").click();
                  }}
                >
                  Upload
                </button>
              </div>
              
              {/* Gallery */}
              <div className="mt-6">
                <label className="block text-sm text-gray-600 mb-2">Gallery</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryChange}
                  className="border border-gray-300 px-3 py-1 rounded w-32"
                />
              </div>
              
              {/* Attachment */}
              <div className="mt-6">
                <label className="block text-sm text-gray-600 mb-2">Attachment</label>
                {attachmentFile && (
                  <div className="flex items-center gap-2 mb-2 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16v-4m0 0V8m0 4l3-3m-3 3L9 9"
                      ></path>
                    </svg>
                    <span>{attachmentFile.name}</span>
                  </div>
                )}
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleAttachmentChange}
                  className="border border-gray-300 px-3 py-1 rounded w-32"
                />
              </div>
            
              {/* Video Link */}
              <div className="mt-6">
                <label className="block text-sm text-gray-600 mb-1">Video link</label>
                <input
                  type="text"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  placeholder="Enter video URL"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                />
              </div>
            
              {/* Virtual Tour */}
              <div className="mt-6">
                <label className="block text-sm text-gray-600 mb-1">Virtual tour</label>
                <input
                  type="text"
                  value={virtualTour}
                  onChange={(e) => setVirtualTour(e.target.value)}
                  placeholder="Enter virtual tour URL"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                />
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-6 max-w-5xl mx-auto">
              <h2 className="text-lg font-semibold text-[#0D263B] mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700 text-sm">
                {/* Bir nechta checkboxlar */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="airConditioning"
                    checked={amenities.airConditioning}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Air conditioning
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="lawn"
                    checked={amenities.lawn}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Lawn
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="diningRoom"
                    checked={amenities.diningRoom}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Dining Room
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="waterfront"
                    checked={amenities.waterfront}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Waterfront
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="barbeque"
                    checked={amenities.barbeque}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Barbeque
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="microwave"
                    checked={amenities.microwave}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Microwave
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="fireplace"
                    checked={amenities.fireplace}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Fireplace
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="parking"
                    checked={amenities.parking}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Parking
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="dryer"
                    checked={amenities.dryer}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Dryer
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="outdoorShower"
                    checked={amenities.outdoorShower}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Outdoor Shower
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="petsAllowed"
                    checked={amenities.petsAllowed}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Pets Allowed
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="doorman"
                    checked={amenities.doorman}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Doorman
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="gym"
                    checked={amenities.gym}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Gym
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="refrigerator"
                    checked={amenities.refrigerator}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Refrigerator
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="unitWasherDryer"
                    checked={amenities.unitWasherDryer}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Unit Washer/Dryer
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="centralHeating"
                    checked={amenities.centralHeating}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Central Heating
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="laundry"
                    checked={amenities.laundry}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Laundry
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="stunningViews"
                    checked={amenities.stunningViews}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Stunning views
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="onsiteParking"
                    checked={amenities.onsiteParking}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Onsite Parking
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="cleaningService"
                    checked={amenities.cleaningService}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  Cleaning Service
                </label>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 max-w-5xl mx-auto mt-6">
              <h2 className="text-lg font-semibold text-[#0D263B] mb-4">Select Energy Class</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Energy class"
                  value={energyClass}
                  onChange={(e) => setEnergyClass(e.target.value)}
                  className="border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                />

                <input
                  type="text"
                  placeholder="Energy Index in kWh/m2a"
                  value={energyIndex}
                  onChange={(e) => setEnergyIndex(e.target.value)}
                  className="border-b border-gray-300 focus:outline-none focus:border-blue-500 px-1 py-2"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Save
              </button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}
