import React from "react";
import profile from "../../assets/profile.jpg";
import { FaFacebook, FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-transparent">
      <img
        src={profile}
        alt="Prahlad Kumar"
        className="w-[230px] h-[230px] rounded-full shadow-2xl object-cover border-4 border-white mb-10"
        style={{ display: "block" }}
      />
      <h1 className="mt-2 text-5xl font-extrabold mb-3 text-center">Prahlad Kumar</h1>
      <p className="text-2xl text-gray-600 mb-8 font-medium text-center">Front-end Developer</p>

      {/* Socials */}
      <div className="flex space-x-8 mb-10">
        <a
          href="https://www.facebook.com/bittu.kr.14811"
          aria-label="Facebook"
          className="bg-white p-5 rounded-2xl shadow-lg hover:bg-blue-100 text-blue-600 transition text-3xl"
          target="_blank" rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
        href="https://twitter.com"
        aria-label="Twitter (X)"
        className="bg-white p-5 rounded-2xl shadow-lg hover:bg-blue-100 text-black transition text-3xl"
        target="_blank" rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://github.com/prahlad17304"
          aria-label="Github"
          className="bg-white p-5 rounded-2xl shadow-lg hover:bg-gray-300 text-black transition text-3xl"
          target="_blank" rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/prahlad-kumar-50445b229/"
          aria-label="LinkedIn"
          className="bg-white p-5 rounded-2xl shadow-lg hover:bg-blue-100 text-blue-700 transition text-3xl"
          target="_blank" rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <a
        href="/assets/Resume.pdf"
        download
        className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-7 py-4 rounded-2xl flex items-center justify-center gap-3 text-xl font-semibold shadow-lg hover:opacity-90 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v14m0 0l-4-4m4 4l4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 18H4" />
        </svg>
        Download CV
      </a>
    </div>
  );
}

