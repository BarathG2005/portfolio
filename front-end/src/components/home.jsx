import React from 'react';
import Img from '../assets/f2.jpg';

function Home() {
  return (
    <>
      <div
        id="home"
        className="relative w-screen h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${Img})` }}
      />

      <div className="flex absolute top-1/2 left-0 w-full flex-col justify-center items-center transform -translate-y-1/2 px-4">
       
        <div className="absolute left-2 top-4 hidden sm:block">
          <ul className="p-2 bg-white rounded-2xl flex sm:flex-col gap-2 sm:gap-0">
            <li className="transition duration-300 hover:bg-yellow-300 rounded-md p-2">
              <a
                href="https://www.linkedin.com/in/barath-g-685388290/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin text-2xl sm:text-3xl" />
              </a>
            </li>
            <li className="transition duration-300 hover:bg-yellow-300 rounded-md p-2">
              <a
                href="https://github.com/BarathG2005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github text-2xl sm:text-3xl" />
              </a>
            </li>
            <li className="transition duration-300 hover:bg-yellow-300 rounded-md p-2">
              <a href="mailto:barathg28@gmail.com">
                <i className="fa-solid fa-envelope text-2xl sm:text-3xl" />
              </a>
            </li>
          </ul>
        </div>

       
        <h1 className="text-3xl sm:text-4xl md:text-[3rem] p-2 m-2 font-bold text-center text-black drop-shadow-md">
          HEY, I'M BARATH G
        </h1>
        <h2 className="m-5 p-4 w-[90%] md:w-[80%] text-lg text-black text-center leading-relaxed">
          A passionate Full Stack Web Developer with strong problem-solving skills and a love for creating efficient, real-world solutions. Currently diving deep into the MERN stack and exploring Machine Learning on the side.
        </h2>

       
        <a key="Projects" href="#projects"><button
          className="w-40 sm:w-48 md:w-52 lg:w-60 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 font-bold text-black text-sm sm:text-base rounded-md tracking-wider transition-transform duration-200 hover:scale-105"
         >
          PROJECTS
        </button>
        </a>
      </div>
    </>
  );
}

export default Home;
