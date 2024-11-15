'use client';

import React, { useEffect } from 'react';
import { FaPaintBrush, FaUserAlt, FaMobileAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Expertise = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="pt-20 pb-20 bg-[#f9f9f9]" id="service">
      <div className="text-center mt-[-30px]">
        <small className="text-[#2e2a54] text-3xl font-bold ">My Expertise</small>
        <h3 className="text-[#333] text-4xl font-bold mt-2">
          Providing a Wide Range of <br />
          Digital Services
        </h3>
      </div>
      <div className="flex flex-wrap justify-evenly gap-5 mt-12">
        <div
          className="service-card w-full md:w-[30%] bg-transparent p-0 text-center opacity-100 transform transition-all duration-300 ease-out"
          data-aos="fade-up"
        >
          <div className="icon-circle w-[150px] h-[150px] bg-[#fca61f] rounded-full flex items-center justify-center mx-auto mb-4">
            <FaPaintBrush size={60} color="#fff" />
          </div>
          <div className="content">
            <h4 className="text-[#333] text-2xl font-bold mb-2">Web Design</h4>
            <p className="text-[#777] text-xl my-4">
              Creating visually engaging and user-friendly websites that align with modern design principles and aesthetics.
            </p>
            <a href="#" className="text-[#ff5722] underline text-xl mt-4">Read More</a>
          </div>
        </div>

        <div
          className="service-card w-full md:w-[30%] bg-transparent p-0 text-center opacity-100 transform transition-all duration-300 ease-out"
          data-aos="fade-up"
        >
          <div className="icon-circle w-[150px] h-[150px] bg-[#fca61f] rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUserAlt size={60} color="#fff" />
          </div>
          <div className="content">
            <h4 className="text-[#333] text-2xl font-bold mb-2">UI/UX Design</h4>
            <p className="text-[#777] text-xl my-4">
              Designing intuitive user interfaces and experiences to ensure user satisfaction and seamless interaction.
            </p>
            <a href="#" className="text-[#ff5722] underline text-xl mt-4">Read More</a>
          </div>
        </div>

        <div
          className="service-card w-full md:w-[30%] bg-transparent p-0 text-center opacity-100 transform transition-all duration-300 ease-out"
          data-aos="fade-up"
        >
          <div className="icon-circle w-[150px] h-[150px] bg-[#fca61f] rounded-full flex items-center justify-center mx-auto mb-4">
            <FaMobileAlt size={60} color="#fff" />
          </div>
          <div className="content">
            <h4 className="text-[#333] text-2xl font-bold mb-2">Responsive Design</h4>
            <p className="text-[#777] text-xl my-4">
              Optimizing layouts to be mobile-friendly, ensuring consistent usability across all device types.
            </p>
            <a href="#" className="text-[#ff5722] underline text-xl mt-4">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
