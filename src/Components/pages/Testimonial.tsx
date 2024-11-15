'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    text: "This product has changed my life for the better. The service provided was exceptional, and I highly recommend them to anyone looking for quality.",
    name: "Kevin Andrew",
    position: "CEO of Innovative Solutions",
  },
  {
    text: "The team's attention to detail and commitment to excellence exceeded my expectations. I am extremely satisfied with the results.",
    name: "Sarah Johnson",
    position: "Product Manager at TechWave",
  },
  {
    text: "Amazing experience from start to finish! Professional, reliable, and delivered above and beyond what I envisioned. Highly recommended.",
    name: "David Clark",
    position: "Creative Director at DesignHub",
  },
  {
    text: "The project was completed on time and within budget. The quality of work and the dedication shown were truly impressive.",
    name: "Laura Williams",
    position: "Operations Manager at GreenTech",
  },
  {
    text: "Outstanding service! The team was highly skilled, responsive, and a pleasure to work with. I look forward to future projects together.",
    name: "Michael Brown",
    position: "Founder of Startup Sphere",
  },
  {
    text: "A fantastic team to work with! Their creativity, problem-solving abilities, and communication skills made the project a huge success.",
    name: "Emma Davis",
    position: "Marketing Lead at Brandify",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="testimonial mt-10 py-12 bg-gradient-to-r from-[#f2f2ff] to-[#ebf9ff]"
      id="testimonial"
    >
      <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 px-4 md:px-8 pt-10 mb-10">
        <div className="w-full md:w-1/3 text-center md:text-left mt-[-30px] md:ml-8">
          <Image
            src="/images/peoples.png"
            alt="Testimonial"
            width={600}
            height={600}
            className="img-fluid mx-auto md:ml-10 mb-5 md:mb-0"
          />
        </div>

        <div className="md:w-2/3 w-full text-center md:text-left">
          <div className="heading">
            <small className="text-2xl font-semibold text-[#fca61f] block ml-4 md:ml-[30px]">
              Testimonials
            </small>
            <h3 className="text-3xl font-bold text-gray-800 mt-4 ml-4 md:ml-[30px]">
              Happy Clients Feedback
            </h3>
            <div className="testimonial-content mt-5 max-w-3xl mx-auto ml-4 md:ml-[30px]">
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                {testimonials[currentIndex].text}
              </p>
              <h4 className="text-2xl font-semibold text-gray-800 mt-4">
                {testimonials[currentIndex].name}
              </h4>
              <small className="text-lg text-gray-500">
                {testimonials[currentIndex].position}
              </small>
            </div>

            <div className="flex gap-5 mt-6 justify-center md:justify-start ml-4 md:ml-[30px]">
              <button
                className="prev-btn bg-[#fca61f] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className="next-btn bg-[#fca61f] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
