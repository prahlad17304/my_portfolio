import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  

  return (
    <div className="flex flex-col items-center min-h-screen px-2 py-12 bg-transparent">
      <div className="w-full max-w-6xl bg-white/95 rounded-3xl shadow-2xl p-12 flex flex-col gap-8">
        {/* Heading */}
        <div>
          <h1 className="text-5xl font-extrabold mb-2">Contact</h1>
          <hr className="border-t-4 border-pink-400 w-56 mb-2" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col gap-6">
            {/* Phone Card */}
            <div className="bg-purple-50 rounded-2xl shadow-lg p-6 flex items-center gap-5">
              <FaPhoneAlt className="text-5xl text-blue-500" />
              <div>
                <div className="text-2xl font-bold mb-1">Phone:</div>
                <div className="text-lg font-medium text-gray-700">+91 7050829300</div>
              </div>
            </div>
            {/* Email Card */}
            <div className="bg-yellow-50 rounded-2xl shadow-lg p-6 flex items-center gap-5">
              <FaEnvelope className="text-5xl text-yellow-400" />
              <div>
                <div className="text-2xl font-bold mb-1">Email:</div>
                <div className="text-lg font-medium text-gray-700 break-all">prahlad17304@gmail.com</div>
              </div>
            </div>
            {/* Address Card */}
            <div className="bg-pink-100 rounded-2xl shadow-lg p-6 flex items-center gap-5">
              <FaMapMarkerAlt className="text-5xl text-pink-500" />
              <div>
                <div className="text-2xl font-bold mb-1">Address:</div>
                <div className="text-lg font-medium text-gray-700">Mahsaura , R Mahsaura , Lakhisarai , Bihar , India 811107</div>
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className="md:col-span-2 bg-blue-50 rounded-2xl shadow-md p-10 flex flex-col justify-center min-h-[360px]">
            <div className="text-2xl md:text-3xl text-gray-500 font-semibold mb-6">
              I am always open to discussing <span className="font-bold text-black">product design work or partnerships.</span>
            </div>
            <form className="flex flex-col gap-6" >
              <div>
                <label className="block text-xl font-medium mb-1" htmlFor="name">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 text-lg rounded-xl border border-gray-300 focus:border-pink-400 outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-xl font-medium mb-1" htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 text-lg rounded-xl border border-gray-300 focus:border-pink-400 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-xl font-medium mb-1" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 text-lg rounded-xl border border-gray-300 focus:border-pink-400 outline-none resize-none"
                  placeholder="Type your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-fit px-8 py-3 rounded-xl bg-gradient-to-r from-red-400 to-pink-500 text-white text-lg font-semibold mt-2 hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

