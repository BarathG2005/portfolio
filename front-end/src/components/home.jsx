import React from 'react';
import Img from '../assets/f2.jpg';
import Typewriter from "react-typewriter-effect";

function Home() {
  return (
    <>
      <div id="home" className="relative w-screen h-screen overflow-hidden">
      <div
  id="home"
  className="relative w-screen h-screen overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${Img})` }}
/>
        <div className="flex absolute top-1/2 left-0 w-full flex-col justify-center items-center transform -translate-y-1/2 px-4 ">
          
          
          <div className='absolute left-2 top-4 hidden sm:block'>
            <ul className='p-2 bg-white rounded-2xl flex sm:flex-col gap-2 sm:gap-0'>
              <li className='transition duration-300 hover:bg-yellow-300 rounded-md p-2'>
                <i className="fa-brands fa-linkedin text-2xl sm:text-3xl"></i>
              </li>
              <li className='transition duration-300 hover:bg-yellow-300 rounded-md p-2'>
                <i className="fa-brands fa-github text-2xl sm:text-3xl"></i>
              </li>
              <li className='transition duration-300 hover:bg-yellow-300 rounded-md p-2'>
                <i className="fa-solid fa-envelope text-2xl sm:text-3xl"></i>
              </li>
            </ul>
          </div>

         
          <h1 className="text-3xl sm:text-4xl md:text-[3rem] p-2 m-2 font-bold text-center text-black drop-shadow-md">
            HEY, I'M BARATH G
          </h1>

          {/* Optional Typewriter (uncomment if needed) */}
          {/* <Typewriter 
            textStyle={{ 
              fontSize: "1.2rem", 
              fontWeight: "600", 
              color: "#fff", 
              marginBottom: "1rem" 
            }}
            startDelay={500}
            cursorColor="white"
            multiText={[
              "Web Developer",
              "Full Stack Developer",
              "MERN Stack Developer",
              "Tech Enthusiast",
            ]}
            multiTextDelay={1000}
            typeSpeed={50}
            deleteSpeed={30}
            multiTextLoop
          /> */}

          {/* Button */}
          <button
  className="w-40 sm:w-48 md:w-52 lg:w-60 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 font-bold text-black text-sm sm:text-base rounded-md tracking-wider transition-transform duration-200 hover:scale-105"
>
  PROJECTS
</button>

        </div>
      </div>
    </>
  );
}

export default Home;
