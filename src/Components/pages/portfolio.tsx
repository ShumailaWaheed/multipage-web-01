"use client";

import React, { useState } from "react";
import Image from "next/image"; 

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (category: string) => {
    setFilter(category);
  };

  return (
    <section className="bg-gray-100 pt-16" id="portfolio">
      <div className="text-center pt-20 mb-10 mt-[-90px]">
        <small className="text-3xl font-bold text-[#3f396d] ">Creative Work</small>
        <h3 className="text-4xl font-bold text-[#333]">Check My Portfolio</h3>
      </div>

      <div id="myBtnContainer" className="text-center mt-4">
        <button
          className="bg-transparent border-2 border-[#ff5722] text-[#ff5722] px-5 py-2 text-lg font-semibold hover:bg-[#3f396d] hover:text-white transition-all duration-300"
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className="bg-transparent border-2 border-[#ff5722] text-[#ff5722] px-5 py-2 text-lg font-semibold hover:bg-[#3f396d] hover:text-white transition-all duration-300"
          onClick={() => handleFilterClick("game")}
        >
          Game
        </button>
        <button
          className="bg-transparent border-2 border-[#ff5722] text-[#ff5722] px-5 py-2 text-lg font-semibold hover:bg-[#3f396d] hover:text-white transition-all duration-300"
          onClick={() => handleFilterClick("app")}
        >
          App
        </button>
        <button
          className="bg-transparent border-2 border-[#ff5722] text-[#ff5722] px-5 py-2 text-lg font-semibold hover:bg-[#3f396d] hover:text-white transition-all duration-300"
          onClick={() => handleFilterClick("website")}
        >
          Website
        </button>
      </div>

      <div className="portfolio-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-6">
        <div
          className={`post ${filter === "all" || filter === "game" ? "show" : "hide"} game all col-10`}
          data-aos="fade-up"
        >
          <div className="card w-full border-none rounded-lg overflow-hidden shadow-lg mt-6">
            <Image src="/images/web-design.png" width={500} height={300} className="w-full h-auto object-cover border-b-2 border-[#3f396d]" alt="2048 Game" />
            <div className="card-body text-center p-5 bg-white">
              <h4 className="text-xl font-semibold text-[#333] mb-2">Ecommerce Web</h4>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">HTML&CSS</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">JavaScript</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mb-2">Website</span>
              <br />
              <a href="#" className="inline-block mt-2 text-[#ff5722] font-semibold hover:text-[#3f396d] hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div
          className={`post ${filter === "all" || filter === "website" ? "show" : "hide"} website all col-10`}
          data-aos="fade-up"
        >
          <div className="card w-full border-none rounded-lg overflow-hidden shadow-lg mt-6">
            <Image src="/images/convertor-app.png" width={500} height={300} className="w-full h-auto object-cover border-b-2 border-[#3f396d]" alt="Currency Converter App" />
            <div className="card-body text-center p-5 bg-white">
              <h4 className="text-xl font-semibold text-[#333] mb-2">Converter App</h4>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">NextJs</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">CustomCss</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mb-2">App</span>
              <br />
              <a href="#" className="inline-block mt-2 text-[#ff5722] font-semibold hover:text-[#3f396d] hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div
          className={`post ${filter === "all" || filter === "webapp" ? "show" : "hide"} webapp all col-10`}
          data-aos="fade-up"
        >
          <div className="card w-full border-none rounded-lg overflow-hidden shadow-lg mt-6">
            <Image src="/images/food-web.png" width={500} height={300} className="w-full h-auto object-cover border-b-2 border-[#3f396d]" alt="Dictionary App" />
            <div className="card-body text-center p-5 bg-white">
              <h4 className="text-xl font-semibold text-[#333] mb-2">Food Web</h4>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">HTML&CSS</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">JavaScript</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mb-2">Website</span>
              <br />
              <a href="#" className="inline-block mt-2 text-[#ff5722] font-semibold hover:text-[#3f396d] hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div
          className={`post ${filter === "all" || filter === "game" ? "show" : "hide"} game all col-10`}
          data-aos="fade-up"
        >
          <div className="card w-full border-none rounded-lg overflow-hidden shadow-lg mt-6">
            <Image src="/images/games.png" width={500} height={300} className="w-full h-auto object-cover border-b-2 border-[#3f396d]" alt="2048 Game" />
            <div className="card-body text-center p-5 bg-white">
              <h4 className="text-xl font-semibold text-[#333] mb-2">Games App</h4>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">HTML&CSS</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">JavaScript</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mb-2">Game</span>
              <br />
              <a href="#" className="inline-block mt-2 text-[#ff5722] font-semibold hover:text-[#3f396d] hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div
          className={`post ${filter === "all" || filter === "app" ? "show" : "hide"} app all col-10`}
          data-aos="fade-up"
        >
          <div className="card w-full border-none rounded-lg overflow-hidden shadow-lg mt-6">
            <Image src="/images/to-dp-list.jpg" width={500} height={300} className="w-full h-auto object-cover border-b-2 border-[#3f396d]" alt="Currency Converter App" />
            <div className="card-body text-center p-5 bg-white">
              <h4 className="text-xl font-semibold text-[#333] mb-2">To DO List</h4>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">React</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">JavaScript</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mb-2">App</span>
              <br />
              <a href="#" className="inline-block mt-2 text-[#ff5722] font-semibold hover:text-[#3f396d] hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div
          className={`post ${filter === "all" || filter === "website" ? "show" : "hide"} website all col-10`}
          data-aos="fade-up"
        >
          <div className="card w-full border-none rounded-lg overflow-hidden shadow-lg mt-6">
            <Image src="/images/learning-app.png" width={500} height={300} className="w-full h-auto object-cover border-b-2 border-[#3f396d]" alt="Food Web" />
            <div className="card-body text-center p-5 bg-white">
              <h4 className="text-xl font-semibold text-[#333] mb-2">Learning App</h4>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">Vue</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mr-2">CSS</span>
              <span className="bg-gray-600 text-white px-3 py-1 text-sm rounded-full mb-2">Website</span>
              <br />
              <a href="#" className="inline-block mt-2 text-[#ff5722] font-semibold hover:text-[#3f396d] hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
