import React from "react";
import Captcha from '../assets/captcha.png';
import Vehcile from '../assets/vehcile.jpg';
import Portfolio from '../assets/portfolio.png';
import Travel from '../assets/Tavel.png';
import key from '../assets/key.png';
import flight from '../assets/flight.jpg';

const projects = [
  {
    title: "Vehicle Rental Web Application",
    description:
      "A complete vehicle booking and rental platform allowing users to search, rent, and manage vehicles with real-time tracking.",
    image: Vehcile,
    link: "#",
  },
  {
    title: "Flight Booking App",
    description:
      "A user-friendly flight booking app with live seat selection, booking history, and payment gateway integration.",
    image: flight,
    link: "#",
  },
  {
    title: "Refined CAPTCHA ML Model",
    description:
      "An adaptive CAPTCHA system using machine learning to evaluate user behavior and adjust difficulty accordingly.",
    image: Captcha,
    link: "https://github.com/BarathG2005/ML-Model-for-reCAPTCHA-",
  },
  {
    title: "Keystroke Dynamics Tracker",
    description:
      "A behavioral biometrics tool that captures human keystroke patterns such as dwell time and flight time to identify users or bots.",
    image: key,
    link: "https://keystokes-collection-odlg.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my web and ML projects with a clean, responsive UI and contact functionality.",
    image: Portfolio,
    link: "#",
  },
  {
    title: "Travel Blog Website",
    description:
      "A visually appealing blog site to share travel experiences, stories, and tips with an interactive comment system.",
    image: Travel,
    link: "https://github.com/BarathG2005/travelyBlog",
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold uppercase">Projects</h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto my-4 rounded-full" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here you will find some of the personal and client projects I've created, each with its own case study.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
            />
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.link} 
              target="_blank"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Case Study
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
