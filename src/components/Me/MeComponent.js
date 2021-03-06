import React, { useState } from "react";
import Bio from "../Biography/bio";
import profilePic from '../../img/profile.jpg';
import { FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const MeComponent = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-sm mx-auto bg-white shadow-2xl rounded-xl p-5">
      <div className = "">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profilePic} alt="profile face" />

                </div>
        <div className="text-center mt-5">
          <p className="text-xl text-5xl font-semibold text-gray-900">
            Alex Perez
          </p>
          <p className="text-sm sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            .Net Developer | Barcelona
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/AlPeFe"
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.instagram.com/kyon94/"
            >
              <FaInstagram />
              <span class="sr-only">Instagram</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.linkedin.com/in/alex-pérez-ferreira-a790b0236/"
            >
              <FaLinkedin />
              <span class="sr-only">Linkedin</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
              href="https://mailto:alexpf.kyon@gmail.com"
            >
              <FaRegEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeComponent;
