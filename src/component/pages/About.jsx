import React from "react";
import profile from "../../assets/profile2.jpg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsCamera, BsCodeSlash } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

export default function About() {
  return (
    <div className="flex flex-wrap flex-col items-center min-h-screen px-2 py-12 bg-transparent">
      <div className="w-full max-w-6xl bg-white/95 rounded-3xl shadow-2xl p-12 flex flex-col gap-12">
        {/* About Me section with image */}
        <div className="flex flex-wrap flex-col md:flex-row gap-12 items-start">
          {/* Profile image at its real, not cropped, size */}
          <div className="rounded-3xl shadow-xl overflow-visible flex flex-wrap items-center justify-center bg-white">
            <img
              src={profile}
              alt="Prahlad Kumar"
              className="rounded-3xl"
              style={{
                display: "block",
                maxWidth: "340px",
                width: "100%",
                height: "auto"
              }}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold mb-6">About Me</h1>
            <hr className="border-t-4 border-pink-400 w-32 mb-8" />
            <h2 className="text-4xl font-bold mb-4">Who am I?</h2>
            <p className="text-gray-700 mb-8 text-xl leading-relaxed">
              I am Prahlad Kumar, a passionate developer aiming to innovate and solve real-world problems. Always willing to learn and execute new things efficiently.
            </p>
            {/* Personal Info Grid */}
            <div className="grid grid-cols-2 gap-8 text-lg">
              <div className="flex items-center gap-4">
                <span className="bg-pink-100 p-4 rounded-2xl">
                  <FaPhoneAlt className="text-pink-500 text-2xl" />
                </span>
                <div>
                  <div className="text-base text-gray-500">Phone</div>
                  <div className="font-semibold text-xl">7050829300</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-orange-100 p-4 rounded-2xl">
                  <FaMapMarkerAlt className="text-orange-500 text-2xl" />
                </span>
                <div>
                  <div className="text-base text-gray-500">Location</div>
                  <div className="font-semibold text-xl">Lakhisarai , Bihar</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-green-100 p-4 rounded-2xl">
                  <FaEnvelope className="text-green-500 text-2xl" />
                </span>
                <div>
                  <div className="text-base text-gray-500">Email</div>
                  <div className="font-semibold text-xl">prahladkumar@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-purple-100 p-4 rounded-2xl">
                  <FaBirthdayCake className="text-purple-500 text-2xl" />
                </span>
                <div>
                  <div className="text-base text-gray-500">Birthday</div>
                  <div className="font-semibold text-xl">March 17, 2004</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* What I do section */}
        <div>
          <h2 className="text-4xl font-extrabold mb-10">What I do!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-purple-50 rounded-2xl shadow-lg flex flex-col items-start p-8">
              <MdDesignServices className="text-purple-500 text-5xl mb-6" />
              <div className="font-bold text-2xl mb-3">UI/UX Design</div>
              <div className="text-gray-500 text-lg">
                Crafting beautiful and intuitive interfaces for web & mobile apps.
              </div>
            </div>
            <div className="bg-yellow-50 rounded-2xl shadow-lg flex flex-col items-start p-8">
              <AiOutlineAppstore className="text-yellow-500 text-5xl mb-6" />
              <div className="font-bold text-2xl mb-3">App Development</div>
              <div className="text-gray-500 text-lg">
                Building performant apps using React, Node.js, and modern technologies.
              </div>
            </div>
            <div className="bg-purple-50 rounded-2xl shadow-lg flex flex-col items-start p-8">
              <BsCamera className="text-purple-500 text-5xl mb-6" />
              <div className="font-bold text-2xl mb-3">Photography</div>
              <div className="text-gray-500 text-lg">
                Capturing moments and telling stories through the lens.
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl shadow-lg flex flex-col items-start p-8">
              <BsCodeSlash className="text-blue-500 text-5xl mb-6" />
              <div className="font-bold text-2xl mb-3">Web Development</div>
              <div className="text-gray-500 text-lg">
                Creating responsive and dynamic websites and web apps.
              </div>
            </div>
            <div className="bg-pink-50 rounded-2xl shadow-lg flex flex-col items-start p-8">
              <FiSettings className="text-pink-400 text-5xl mb-6" />
              <div className="font-bold text-2xl mb-3">Management</div>
              <div className="text-gray-500 text-lg">
                Leading projects and teams with a focus on strategy and results.
              </div>
            </div>
            <div className="bg-red-50 rounded-2xl shadow-lg flex flex-col items-start p-8">
              <BsCamera className="text-pink-400 text-5xl mb-6" />
              <div className="font-bold text-2xl mb-3">Photography</div>
              <div className="text-gray-500 text-lg">
                Passionate about visual storytelling across platforms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

