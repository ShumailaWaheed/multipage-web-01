'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#f2f2ff] to-[#ebf9ff] py-10" id="skills">
      <div className="flex flex-wrap justify-between max-w-7xl mx-auto">
        <div className="flex flex-wrap w-full md:w-1/2">
          <div
            className="bg-white rounded-2xl shadow-lg p-3 m-2 flex flex-col items-center w-full sm:w-5/12"
            data-aos="fade-right"
          >
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center relative"
              style={{
                background: `conic-gradient(#ff8c00 80%, #ededed 0deg)`,
              }}
            >
              <div className="w-36 h-36 rounded-full bg-gray-100"></div>
              <span className="absolute text-orange-500 text-xl font-semibold">80%</span>
            </div>
            <h4 className="mt-4 text-md font-bold text-gray-700">HTML & CSS</h4>
          </div>

          <div
            className="bg-white rounded-2xl shadow-lg p-3 m-2 flex flex-col items-center w-full sm:w-5/12"
            data-aos="fade-right"
          >
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center relative"
              style={{
                background: `conic-gradient(#0a5516 75%, #ededed 0deg)`,
              }}
            >
              <div className="w-36 h-36 rounded-full bg-gray-100"></div>
              <span className="absolute text-green-500 text-xl font-semibold">75%</span>
            </div>
            <h4 className="mt-4 text-md font-bold text-gray-700">JavaScript</h4>
          </div>

          <div
            className="bg-white rounded-2xl shadow-lg p-3 m-2 flex flex-col items-center w-full sm:w-5/12"
            data-aos="fade-right"
          >
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center relative"
              style={{
                background: `conic-gradient(#3f396d 70%, #ededed 0deg)`,
              }}
            >
              <div className="w-36 h-36 rounded-full bg-gray-100"></div>
              <span className="absolute text-purple-600 text-xl font-semibold">70%</span>
            </div>
            <h4 className="mt-4 text-md font-bold text-gray-700">Next.js</h4>
          </div>
          
          <div
            className="bg-white rounded-2xl shadow-lg p-3 m-2 flex flex-col items-center w-full sm:w-5/12"
            data-aos="fade-right"
          >
            <div
              className="w-40 h-40 rounded-full flex items-center justify-center relative"
              style={{
                background: `conic-gradient(#c1eb2b 40%, #ededed 0deg)`,
              }}
            >
              <div className="w-36 h-36 rounded-full bg-gray-100"></div>
              <span className="absolute text-yellow-500 text-xl font-semibold">40%</span>
            </div>
            <h4 className="mt-4 text-md font-bold text-gray-700">Python</h4>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 flex flex-col justify-center"
          data-aos="slide-left"
        >
          <div className="text-left px-4 mt-[30px]">
            <small className="text-3xl font-bold text-indigo-900">My Skills</small>
            <h3 className="text-4xl font-bold text-gray-800 mt-2 leading-tight">
              Beautiful & Unique Digital Experiences
            </h3>
            <p className="text-gray-600 text-lg mt-4">
              I strive to create beautiful and intuitive digital experiences that connect users to the content they need.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              Through my expertise in web development, I bring together creativity and technical skills to deliver seamless, user-friendly solutions.
            </p>
            <button
              className="mt-10 bg-[#ff8c00] text-white py-3 px-5 rounded-full hover:bg-[#2e2a54] transition-colors duration-300"
            >
              <a
                href="Cv.pdf"
                download="Entry_Level_Web_Developer_Resume"
                className="no-underline text-white"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
