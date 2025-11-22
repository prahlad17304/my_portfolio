import React from "react";
import { FaUserGraduate, FaBriefcase, FaAward } from "react-icons/fa";

export default function Resume() {
  const cardClasses = "rounded-2xl shadow-lg p-6 flex flex-wrap flex-col justify-between h-[200px]";

  return (
    <div className="flex flex-wrap flex-col items-center min-h-screen px-2 py-12 bg-transparent">
      <div className="w-full max-w-6xl bg-white/95 rounded-3xl shadow-2xl p-12 flex-col flex gap-10">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">Resume</h1>
          <hr className="border-t-4 border-pink-400 w-44 mb-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {/* Education */}
          <div>
            <div className="flex items-center mb-4 gap-3">
              <FaUserGraduate className="text-3xl text-pink-500" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="flex flex-col gap-6">
              {/* Education Cards */}
              <div className={`bg-pink-50 ${cardClasses}`}>
                <div>
                  <div className="text-lg text-gray-500 mb-1 font-semibold">2018 - 2019</div>
                  <div className="text-2xl font-bold mb-1">10th - K V Maithon Dam</div>
                  <div className="text-lg text-gray-700 mb-1">Percentage: <span className="font-bold">91%</span></div>
                  <div className="text-md text-gray-500 italic">Kendriya Vidyalaya, Maithon Dam, Dhanbad, Jharkhand</div>
                </div>
              </div>
              <div className={`bg-pink-50 ${cardClasses}`}>
                <div>
                  <div className="text-lg text-gray-500 mb-1 font-semibold">2020 - 2021</div>
                  <div className="text-2xl font-bold mb-1">12th - Sri Bijo Janki High School</div>
                  <div className="text-lg text-gray-700 mb-1">Percentage: <span className="font-bold">78%</span></div>
                  <div className="text-md text-gray-500 italic">Ekarha, Sheikhpura, Bihar</div>
                </div>
              </div>
              <div className={`bg-pink-50 ${cardClasses}`}>
                <div>
                  <div className="text-lg text-gray-500 mb-1 font-semibold">2021 - 2025</div>
                  <div className="text-2xl font-bold mb-1">BTech in Computer Science & Engineering</div>
                  <div className="text-md text-gray-700 mb-1">RGIPT</div>
                  <div className="text-md text-gray-500 italic">Jais, Amethi, Uttar Pradesh</div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div>
            <div className="flex items-center mb-4 gap-3">
              <FaBriefcase className="text-3xl text-cyan-600" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className={`bg-blue-50 ${cardClasses}`}>
                <div>
                  <div className="text-lg text-gray-500 mb-1 font-semibold">2022</div>
                  <div className="text-2xl font-bold mb-1">App Development Training Intern</div>
                  <div className="text-md text-gray-700 mb-1">Bulwark Systems, Vadodara, Gujarat</div>
                </div>
              </div>
              <div className={`bg-blue-50 ${cardClasses}`}>
                <div>
                  <div className="text-lg text-gray-500 mb-1 font-semibold">2024</div>
                  <div className="text-2xl font-bold mb-1">Fullstack Development Intern</div>
                  <div className="text-md text-gray-700 mb-1">Centum Electronics Private Limited</div>
                </div>
              </div>
              <div className={`bg-blue-50 ${cardClasses}`}>
                <div>
                  <div className="text-lg text-green-700 mb-1 font-semibold">2025 - Present</div>
                  <div className="text-2xl font-bold mb-1">Fullstack Developer Intern</div>
                  <div className="text-md text-gray-700 mb-1">Naturenest Ai</div>
                  <div className="text-md text-green-600 font-semibold">Currently Working</div>
                </div>
              </div>
            </div>
          </div>
          {/* Awards */}
          <div>
            <div className="flex items-center mb-4 gap-3">
              <FaAward className="text-3xl text-yellow-500" />
              <h2 className="text-3xl font-bold">Awards</h2>
            </div>
            <div className="flex flex-col gap-6">
              {/*Award cards */}
              <div className={`bg-yellow-50 ${cardClasses}`}></div>
              <div className={`bg-yellow-50 ${cardClasses}`}></div>
              <div className={`bg-yellow-50 ${cardClasses}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

