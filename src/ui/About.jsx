import React, { useEffect } from "react";
import { SiReactrouter, SiTailwindcss, SiReact } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const About = () => {
  // Initialize AOS library on component mount
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex-row bg-[#a3c2e2]">
      <div >
        <div className="py-5 p-8 mt-10 flex  text-white">
         
          <div className=" px-7">
            {/* About Developer section */}
            <h1 className="font-semibold text-2xl text-black">About Developer</h1>
            <p className="text-gray-900 font-semibold">Hello I am <span className="font-semibold text-white"> JYOTI PATHAK </span> dedicated Full Stack Web Developer and I made this website. I love paying attention to the little things and enjoy creating smooth and easy-to-use online stores that stand out and make shopping a breeze.</p>

            {/* Frameworks and Technologies Used section */}
            <h1 className="font-semibold text-2xl text-black">Frameworks and Technologies Used</h1>
            <p className=" text-gray-900 font-semibold">When I was developing the Wish WebApp, I've used some powerful tools and technologies to build a modern website that works smoothly and it is Single page Application, and the user can feel seamless experience.</p>
            <div className="flex text-4xl md:text-[60px] justify-evenly  my-8 text-black">
              {/* Icons for React, React Router, and Tailwind CSS */}
              <span data-aos="zoom-in">
                <SiReact className="hover:text-[#149ECA]  transition-all ease duration-300" />
              </span>
              <span data-aos="zoom-in">
                <SiReactrouter className="hover:text-[#F44250] transition-all ease duration-300" />
              </span>
              <span data-aos="zoom-in">
                <SiTailwindcss className="hover:text-[#38BDF8] transition-all ease duration-300" />
              </span>
            </div>

            {/* Exploring the Backend section */}
            <h1 className="font-semibold text-2xl text-black">Exploring the Backend</h1>
            <p className="text-gray-900 font-semibold">Although I focus mainly on designing the front part of websites, I've also made an API for Backend so that we can get data. This helps make sure the API works smoothly and communicates well with the website's front part, making the experience for users really smooth</p>
            <h1 className="font-semibold  text-gray-900"> I look forward to establishing a connection.</h1>
            <p className="font-semibold  text-gray-900" >Feel free to explore the website, discover our offerings, and don’t hesitate to share any questions or suggestions. Your journey through this online shopping experience matters to us, and we’re here to assist. Happy browsing!</p>
            
            {/* Social media icons */}
            <div className="flex  md:text-[50px] text-red justify-evenly my-8 text-black">
              <Link to={"https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BXUsZx%2BkBT06pNownOs8ehQ%3D%3D"} target="_blank" data-aos="zoom-in">
                <FaLinkedin className="hover:text-[#b50030] text-gray-500 transition-all ease duration-300" />
              </Link>
              <Link to={"https://github.com/jyotipatthak"} target="_blank" data-aos="zoom-in">
                <FaGithub className="hover:text-[#b50009]  text-gray-500 transition-all ease duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default About;
