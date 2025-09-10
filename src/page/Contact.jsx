import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <SearchBar/>
        <section className="px-6 md:px-16 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Savollaringiz bo’lsa murojaat qiling
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold">Telefon</h3>
              <p className="text-gray-600">+998 (97) 866 50 50</p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold">Elektron Pochta</h3>
              <p className="text-gray-600">e-commerce2025@gmail.com</p>
            </div>

            <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold">Manzil</h3>
              <p className="text-gray-600">
                Sirdaryo vil, Guliston sh, 1-mavze
              </p>
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
              Murojaatlarni shu yerdan jo’nating!
            </h2>

            <form className="space-y-5 max-w-2xl mx-auto">
              <div>
                <label className="block text-gray-700 mb-2">
                  To‘liq ismingizni kiriting
                </label>
                <div className="flex items-center border rounded-lg px-3">
                  <span className="text-gray-400 mr-2">👤</span>
                  <input
                    type="text"
                    placeholder="F.I.Sh"
                    className="w-full p-2 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Telefon</label>
                <div className="flex items-center border rounded-lg px-3">
                  <span className="text-gray-400 mr-2">📱</span>
                  <input
                    type="tel"
                    placeholder="+998"
                    className="w-full p-2 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Xabar</label>
                <textarea
                  placeholder="Matn"
                  className="w-full border rounded-lg p-3 outline-none"
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
        </section>
        <Footer/>
    </div>
  )
}
