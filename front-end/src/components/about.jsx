export default function About() {
  return (
    <div id="about" className="min-h-screen bg-white p-10 text-black">
      
      {/* Header Section */}
      <div className="flex flex-col items-center mb-10 p-5">
        <h1 className="text-4xl text-center tracking-widest font-bold p-2 m-7">
          ABOUT ME
        </h1>
        <h2 className="w-[90%] md:w-[60%] text-gray-700 text-center">
          Get to know more about me, what I’m passionate about, and the technical skills I bring to the table mostly focused on programming and modern web technologies.
        </h2>
      </div>

    
      <div className="flex flex-col md:flex-row justify-between p-6 gap-6 rounded-xl">
        
        <div className=" p-6 rounded-xl w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Get to know me!</h1>
          <p className="text-gray-800 leading-7">
            I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product.
            <br /><br />
            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to connect or follow me on my LinkedIn and Instagram where I post useful content related to Web Development and Programming.
            <br /><br />
            I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to contact me.
          </p>
        </div>

      
        <div className="p-6 rounded-xl w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-black">My Skills</h1>
          <div className="flex flex-col [&_li]:px-4 [&_li]:py-2 [&_li]:m-2 [&_li]:bg-gray-100 [&_li]:rounded [&_li]:text-sm">
            <ul className="flex flex-wrap">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
            </ul>
            <ul className="flex flex-wrap">
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
            <ul className="flex flex-wrap">
              <li>MySQL</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
