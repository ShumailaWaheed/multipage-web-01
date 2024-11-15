"use client";

import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formError, setFormError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormError(true);
    } else {
      setFormError(false);
      console.log("Form Submitted", formData);
    }
  };
  useEffect(() => {
    const backToTopButton = document.getElementById("btn-back-to-top");

    if (backToTopButton) {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      };

      window.addEventListener("scroll", handleScroll);

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        backToTopButton.removeEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      };
    }
  }, []);

  return (
    <section className="contact py-20 bg-[#eaeaf9]" id="contact">
      <div className="heading text-center mb-10">
        <small className="text-3xl font-bold text-[#2e2a54]">Get in Touch</small>
        <h3 className="text-4xl font-bold text-[#333] mt-2">Any Questions? Feel Free to Contact</h3>
      </div>
      <div className="flex flex-wrap justify-between px-6 lg:px-20">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 contact-details pl-6 lg:pl-12" data-aos="slide-right">
          <div className="flex items-center mb-5">
            <div className="flex-shrink-0 ml-[-10px]">
              <FaMapMarkerAlt size={25} className="text-[#fca61f] ml-[-18px]" />
            </div>
            <div className="ml-1 ">
              <p className="text-lg font-bold text-gray-600 ">Kistan Karachi 10, Pakistan</p>
            </div>
          </div>
          <div className="flex items-center mb-5 ml-[-15px]">
            <div className="flex-shrink-0 ml-[-15px]">
              <FaPhoneAlt size={25} className="text-[#fca61f]" />
            </div>
            <div className="ml-1">
              <p className="text-lg font-bold text-gray-600">+92 3151156286</p>
            </div>
          </div>
          <div className="flex items-center mb-5  ml-[-15px]">
            <div className="flex-shrink-0  ml-[-15px]">
              <FaEnvelope size={25} className="text-[#fca61f]" />
            </div>
            <div className="ml-1">
              <p className="text-lg font-bold text-gray-600">shumailawaheed253@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center mb-5  ml-[-15px]">
            <div className="flex-shrink-0 ml-[-15px]">
              <FaGlobe size={25} className="text-[#fca61f]" />
            </div>
            <div className="ml-1">
              <p className="text-lg font-bold text-gray-600">coding.com</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 contact-form" data-aos="slide-left">
          <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-md mx-auto lg:w-4/5">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control p-4 mb-4 border border-gray-300 rounded-xl w-full"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control p-4 mb-4 border border-gray-300 rounded-xl w-full"
                placeholder="E-mail"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control p-4 mb-4 border border-gray-300 rounded-xl w-full"
                placeholder="Mobile No."
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control p-4 mb-4 border border-gray-300 rounded-xl w-full"
                placeholder="Message"
              ></textarea>
              {formError && (
                <p className="text-red-500 text-sm mb-4">Please fill in all fields before submitting.</p>
              )}
              <button
                type="submit"
                className="w-full bg-[#fca61f] text-white py-3 px-5 font-semibold rounded-full hover:bg-[#2e2a54] transition-colors duration-300 mt-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-floating btn-lg rounded-full absolute bottom-6 right-6 bg-[#fca61f] text-white p-3"
        id="btn-back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </section>
  );
};

export default ContactSection;
