import cv from '../assets/Barath_G_resume.pdf';

export default function About() {
  return (
    <div id="about" className="min-h-screen bg-white p-10 text-black">
      <div className="flex flex-col items-center mb-10 p-5">
        <h1 className="text-4xl text-center tracking-widest font-bold p-2 m-7">
          ABOUT ME
          <hr className="w-[20%] mt-3 border-t-6 rounded-4xl border-yellow-400 mx-auto" />
        </h1>
        <h2 className="w-[90%] md:w-[60%] text-lg text-gray-500 text-center">
          Get to know more about me, what I’m passionate about, and the technical skills I bring to the table mostly focused on programming and modern web technologies.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-6 gap-6 rounded-xl">
        
        <div className="p-6 rounded-xl w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Get to know me!</h1>
          <p className="text-gray-500 md:text-lg font-normal">
            I'm a passionate Web Developer and Computer Science Engineering student at Chennai Institute of Technology (2023–2027), currently maintaining a <b>CGPA of 9.3</b>. I enjoy building and managing <b>full-stack web applications</b>. Check out some of my work in the <b>Projects section</b>.
            <br /><br />
            Along with web development, I have a growing interest in Machine Learning and love experimenting with intelligent, data-driven solutions. I’ve worked on various personal and academic projects that showcase my problem-solving skills, and I’ve solved over <b>650 problems</b> on platforms like LeetCode. 
            <br /><br />
            I’m open to <b>job and internship</b> opportunities where I can contribute, learn, and grow. If you think there's a role that aligns with my skills and interests, feel free to connect with me on <a href="https://www.linkedin.com/in/barath-g-685388290/" className="text-yellow-500 underline">LinkedIn</a>.
          </p>
          <button
            className="m-4 w-40 sm:w-48 md:w-52 lg:w-60 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 font-bold text-black text-sm sm:text-base rounded-md tracking-wider transition-transform duration-200 hover:scale-105"
          >
            <a
              href={cv}  
              download="Barath_G_CV.pdf" 
            >
              Download CV
            </a>
          </button>
        </div>

        <div className="p-6 ml-10 rounded-xl w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-black">My Skills</h1>
          <div className="flex flex-col [&_li]:px-4 [&_li]:py-2 [&_li]:m-2 [&_li]:bg-gray-100 [&_li]:rounded [&_li]:text-sm [&_li]:font-medium [&_li]:text-gray-500">
            <ul className="flex flex-wrap">
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
            <ul className="flex flex-wrap">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>

            <ul className="flex flex-wrap">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>

            <ul className="flex flex-wrap">
              <li>Redux</li>
              <li>Axios</li>
              <li>JWT</li>
              <li>Mongoose</li>
            </ul>

            <ul className="flex flex-wrap">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>npm</li>
            </ul>

            <ul className="flex flex-wrap">
              <li>NumPy</li>
              <li>Pandas</li>
              <li>scikit-learn</li>
              <li>Matplotlib</li>
            </ul>

            <ul className="flex flex-wrap">
              <li>REST APIs</li>
              <li>Authentication</li>
              <li>Authorization</li>
              <li>Responsive Design</li>
              <li>Deployment (Render, Vercel)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
