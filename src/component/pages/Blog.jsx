import React from "react";  
export default function Blog() {
  return (
    <div className="flex flex-col items-center min-h-screen px-2 py-12 bg-transparent">
      <div className="w-full max-w-6xl bg-white/95 rounded-3xl shadow-2xl p-12 flex-col flex gap-8">
        {/* Blog Heading */}
        <div>
          <h1 className="text-5xl font-extrabold mb-2">Blog</h1>
          <hr className="border-t-4 border-pink-400 w-56 mb-2" />
        </div>
        {/* Blog Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-50 rounded-2xl shadow-lg min-h-[320px] w-full flex flex-col items-center justify-center" />
            <span className="mt-4 text-xl font-semibold text-gray-600">blog 1</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-50 rounded-2xl shadow-lg min-h-[320px] w-full flex flex-col items-center justify-center" />
            <span className="mt-4 text-xl font-semibold text-gray-600">blog 2</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 rounded-2xl shadow-lg min-h-[320px] w-full flex flex-col items-center justify-center" />
            <span className="mt-4 text-xl font-semibold text-gray-600">blog 3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

