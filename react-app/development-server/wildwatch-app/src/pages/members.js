// TeamMembers.js
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import teamMembers from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Members = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto" id="team">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-3xl lg:text-6xl font-medium lg:font-extrabold">
          <span className="relative text-6xl before:content-['Members'] before:text-accent before:opacity-40 before:-top-1 before:hidden before:lg:block z-0"></span>
          <span className="lg:absolute relative w-[300px] z-10 text-2xl  text-[#333333] text-center">
            Member Details
          </span>
        </h2>
        <p className="subtitle lg:mt-14 mt-8 text-center w-[60%] text-[var(--sub-heading)]">
          Explore our members and their contributions. Feel free to connect with
          any member for discussions, collaborations, or any related inquiries.
          Don't hesitate to get in touch!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-0 my-auto mb-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:bg-gray-100 relative"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0 my-auto">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 object-cover "
                />
              </div>
              <div className="p-8 mx-auto text-center">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {member.name}
                </div>
                <div className="text-sm text-gray-500">{member.role}</div>
                <div className="text-sm text-gray-700 mb-4">
                  {member.saying}
                </div>
                <a
                  href={member.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  <FaTwitter className="inline-block mr-2" />
                </a>
                <a
                  href={member.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  <FaLinkedin className="inline-block mr-2" />
                </a>
                <a
                  href={member.socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  <FaGithub className="inline-block mr-2" />
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full text-center bg-gray-200 p-2">
              <p className="text-sm text-gray-700">{member.saying}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
