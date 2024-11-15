"use client";

import { useState } from "react";
import Image from "next/image";

export default function Blog() {
  const [modal1, setModal1] = useState(false);

  return (
    <section className="blog mt-20 pb-20" id="blog">
      <div className="heading text-center pt-20">
        <small className="block text-3xl text-[#3f396d] font-semibold mt-[-80px]">Latest News</small>
        <h3 className="text-4xl mt-2 font-bold mb-[-50px]">Blog &amp; Articles</h3>
      </div>
      <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-16" data-aos="fade-up">
        <div className="blogpost col-md-4 col-10 mt-2 mt-md-0 game all">
          <div className="card border-none shadow-lg rounded-lg overflow-hidden">
            <Image src="/images/food-web.png" width={500} height={300} className="w-full h-auto border-b-2 border-gray-300" alt="Food Web" />
            <div className="card-body p-6 text-center">
              <small className="text-xl text-gray-600">By Shumaila Waheed</small>
              <span className="ms-3 text-gray-500">Mar 8, 2022</span>
              <h4 className="card-title text-2xl mt-4">
                <a href="#">Exploring Innovative Food Trends in 2024</a>
              </h4>
              <p className="text-muted text-lg text-gray-600 mt-4">
                Discover the latest advancements in culinary arts, from sustainable ingredients to fusion dishes that blend cultural flavors.
              </p>
              <button className="read-more-btn text-[#e67e22] border-none py-2 px-4 mt-6 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 website all">
          <div className="card border-none shadow-lg rounded-lg overflow-hidden">
            <Image src="/images/convertor-app.png" width={500} height={300} className="w-full h-auto border-b-2 border-gray-300" alt="Currency Converter App" />
            <div className="card-body p-6 text-center">
              <small className="text-xl text-gray-600">By Shumaila Waheed</small>
              <span className="ms-3 text-gray-500">Mar 8, 2024</span>
              <h4 className="card-title text-2xl mt-4 text-bold">
                <a href="#">Digital Transformation in Finance 2024</a>
              </h4>
              <p className="text-muted text-lg text-gray-600 mt-4">
                Learn how digital solutions like currency converters are revolutionizing financial processes for users worldwide.
              </p>
              <button className="read-more-btn text-[#e67e22] border-none py-2 px-4 mt-6 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="blogpost col-md-4 col-10 mt-5 mt-md-0 webapp all">
          <div className="card border-none shadow-lg rounded-lg overflow-hidden">
            <Image src="/images/games.png" width={500} height={300} className="w-full h-auto border-b-2 border-gray-300" alt="Mobile Games" />
            <div className="card-body p-6 text-center">
              <small className="text-xl text-gray-600">By Shumaila Waheed</small>
              <span className="ms-3 text-gray-500">Mar 8, 2024</span>
              <h4 className="card-title text-2xl mt-4">
                <a href="#">Trends in Mobile Gaming for 2024</a>
              </h4>
              <p className="text-muted text-lg text-gray-600 mt-4 ">
                Delve into the emerging trends in mobile gaming, highlighting new technologies and user engagement tactics in the industry.
              </p>
              <button className="read-more-btn text-[#e67e22] border-none py-2 px-4 mt-6 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
        {modal1 && (
          <div className="modal fade show d-block" id="exampleModal1" aria-hidden="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-c rounded-full" onClick={() => setModal1(false)}>
                  <i className="bi bi-x-circle-fill"></i>
                </button>
                <div className="modal-body px-6">
                  <div className="img">
                    <Image src="/images/games.png" width={500} height={300} className="img-fluid" alt="Game Modal" />
                  </div>
                  <div className="content mt-6">
                    <small className="text-xl text-gray-600">By Shumaila Waheed</small>
                    <span className="text-muted ms-2 text-gray-500">Mar 8, 2022</span>
                    <h4 className="card-title mt-6 text-2xl text-bold">Exploring Innovative Food Trends in 2022</h4>
                    <p className="text-muted mt-6 text-gray-600">
                      A deeper look at the top culinary trends that are reshaping how we experience food in today&apos;s dynamic world.
                    </p>
                  </div>
                </div>
                <div className="contact-form ms-3 mt-6 pb-4 px-2">
                  <div className="mb-6">
                    <input type="text" className="form-control p-4" placeholder="Name" />
                  </div>
                  <div className="mb-6">
                    <input type="email" className="form-control p-4" placeholder="E-mail" />
                  </div>
                  <div className="mb-6">
                    <input type="text" className="form-control p-4" placeholder="Mobile No." />
                  </div>
                  <div className="mb-6">
                    <textarea className="form-control p-4" placeholder="Message"></textarea>
                  </div>
                  <button className="c-btn h-btn mt-6 py-2 px-6 rounded-full">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
