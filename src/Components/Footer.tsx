"use client";

import { useEffect } from "react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const FooterSection = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById("btn-back-to-top");
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      if (!backToTopButton) return;

      let isInHome = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute("id");

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          if (id === "home") {
            isInHome = true;
          }
        }
      });

      backToTopButton.style.display = isInHome ? "none" : "block";
      const footer = document.querySelector("footer");

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top <= windowHeight - 60) {
          backToTopButton.style.position = "absolute";
          backToTopButton.style.bottom = `${
            footerRect.height + 10
          }px`; 
        } else {
          backToTopButton.style.position = "fixed";
          backToTopButton.style.bottom = "20px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-[#2e2a54] text-white py-12 text-center max-w-screen-full mx-auto">
      <h3 className="text-4xl font-bold pt-2 mb-8" data-aos="fade-up">
        Portfolio
      </h3>
      <div
        className="mt-3 flex flex-col md:flex-row justify-center gap-4 mb-5"
        data-aos="fade-up"
      >
        <a href="#home" className="text-lg hover:text-[#fca61f]">
          Home
        </a>
        <a href="#about" className="text-lg hover:text-[#fca61f]">
          About
        </a>
        <a href="#service" className="text-lg hover:text-[#fca61f]">
          Service
        </a>
        <a href="#portfolio" className="text-lg hover:text-[#fca61f]">
          Portfolio
        </a>
        <a href="#blog" className="text-lg hover:text-[#fca61f]">
          Blog
        </a>
        <a href="#contact" className="text-lg hover:text-[#fca61f]">
          Contact
        </a>
      </div>
      <div
        className="mt-3 flex flex-row justify-center gap-3 flex-wrap"
        data-aos="fade-up"
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#333] text-white rounded-full p-3 text-2xl hover:bg-[#fca61f]"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#333] text-white rounded-full p-3 text-2xl hover:bg-[#fca61f]"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#333] text-white rounded-full p-3 text-2xl hover:bg-[#fca61f]"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <hr className="border-t border-white my-4 mx-auto w-[80%]" />
      <p className="text-xs">
        Copyright 2022 Portfolio | All Rights Reserved | Shumaila Waheed
      </p>

      <button
        type="button"
        className="fixed right-4 bg-[#fca61f] text-white p-4 text-lg rounded-full hover:bg-[#6c757d] hidden"
        id="btn-back-to-top"
        aria-label="Back to Top"
      >
        ↑
      </button>
    </footer>
  );
};

export default FooterSection;
