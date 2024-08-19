import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
} from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 ">
      <div className="container">
        <div className="grid md:grid-cols-4 pb-20 pt-5">
          {/* company details  */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              ESHOp
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              error, id deserunt ab libero fugiat facilis expedita.
            </p>
            <p className="text-gray-500 mt-4">Made by Pratham Bagrecha</p>
            <a
              href="#"
              className="inline-block bg-primary/90 py-2 px-4 text-white mt-4 text-sm rounded-full"
            >
              Visit Our Channel
            </a>
          </div>

          {/* Important Links  */}
          <div className="py-8 px-4">
            <h1 className="text-3xl">Important Links </h1>
            <div className="flex flex-col gap-3 mt-3 text-lg text-gray-400">
              <a href="#" className="text-xl hover:text-primary duration-400">
                Home
              </a>
              <a href="#" className="text-xl hover:text-primary duration-400">
                About
              </a>
              <a href="#" className="text-xl hover:text-primary duration-400">
                Contact
              </a>
              <a href="#" className="text-xl hover:text-primary duration-400">
                Blog
              </a>
            </div>
          </div>

          {/* Quick Links  */}
          <div className="py-8 px-4">
            <h1 className="text-3xl">Quick Links</h1>
            <div className="flex flex-col gap-3 mt-3 text-lg text-gray-400">
              <a href="#" className="text-xl hover:text-primary duration-400">
                Home
              </a>
              <a href="#" className="text-xl hover:text-primary duration-400">
                About
              </a>
              <a href="#" className="text-xl hover:text-primary duration-400">
                Contact
              </a>
              <a href="#" className="text-xl hover:text-primary duration-400">
                Blog
              </a>
            </div>
          </div>

          {/* Address  */}
          <div className="py-8 px-4">
            <h1 className="text-3xl">Address </h1>
            <div className="flex flex-col gap-3 mt-3 text-lg text-gray-400">
              <div className=" flex gap-2 items-center">
                <FaLocationArrow />
                <p>Mumbai, Maharashtra</p>
              </div>
              <div className=" flex gap-2 items-center">
                <FaMobileAlt />
                <p>Mumbai, Maharashtra</p>
              </div>
              <div className=" flex gap-3 mt-3 items-center ">
                <a
                  href="#"
                  className="text-3xl hover:text-primary duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-3xl hover:text-primary duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-3xl hover:text-primary duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
