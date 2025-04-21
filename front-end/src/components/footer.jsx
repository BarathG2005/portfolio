import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineNewspaper } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
 
        <div>
          <h2 className="text-xl font-bold uppercase">Barath G</h2>
          <p className="mt-2 text-gray-400 max-w-md">
            A Computer Science student passionate about AI, Web Development and building intelligent, user-centric web apps that solve real-world problems.
          </p>
        </div>

    
        <div>
          <h2 className="text-xl font-bold uppercase">Social</h2>
          <div className="flex items-center gap-4 mt-4 text-2xl">
            <a href="https://www.linkedin.com/in/barath-g-685388290/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-yellow-500 transition" />
            </a>
            <a href="https://github.com/BarathG2005" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-yellow-500 transition" />
            </a>
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-yellow-500 transition" />
            </a>
            
            
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center text-gray-500">
        © Copyright 2025. Made by <span className="font-semibold text-white">Barath G</span>
      </div>
    </footer>
  );
};

export default Footer;
