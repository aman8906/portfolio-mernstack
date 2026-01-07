
import React from "react";

const projectData = [
  {
    id: 1,
    name: "E-Commerce Website",
    image: "/ecommerce.png",
    description: "MERN stack e-commerce with user login, cart, and Stripe payment gateway.",
    videoLink: "https://e-commerce-delta-gold.vercel.app/ ",
    codeLink: "https://github.com/aman8906/E-Commerce",
  },
  {
    id: 2,
    name: "Blog CMS",
    image: "/blog.png",
    description: "Full-stack blog platform with admin panel, post editor, and MongoDB storage.",
    videoLink: "https://youtu.be/Wv1Mx3KcQ4M ",
    codeLink: "https://github.com/aman8906/Blog-App",
  },
  {
    id: 3,
    name: "Portfolio Website",
    image: "/portfolio.png",
    description: "Responsive personal portfolio built using React and deployed on Netlify.",
    videoLink: "https://p-ortfolio-personal.netlify.app/ ",
    codeLink: "https://github.com/aman8906/Personal-Portfolio",
  },
  {
    id: 4,
    name: "Todo App",
    image: "/todo.png",
    description: "Simple React + Node.js task manager with create, update, delete features.",
    videoLink: "https://youtu.be/E1E08i2UJGI",
    codeLink: "https://github.com/RedStapler/todo-mern-stack",
  },
  {
    id: 5,
    name: "Chat App",
    image: "/chat.png",
    description: "Real-time chat application using Socket.IO, Node.js, and MongoDB.",
    videoLink: "https://youtu.be/ZWfEzpKfRBg ",
    codeLink: "https://github.com/aman8906/ChatApp",
  },
  {
    id: 6,
    name: "Weather App",
    image: "/weather.png",
    description: "React app using OpenWeatherMap API to show current weather by city.",
    videoLink: "https://weat-her-a-pp.netlify.app/",
    codeLink: "https://github.com/aman8906/Weather-App",
  },
];

function Portfolio() {
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold text-gray-700">Featured Projects</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
          {projectData.map(({ id, image, name, description, videoLink, codeLink }) => (
            <div
              key={id}
              className="bg-white border-2 rounded-xl shadow-lg p-4 hover:scale-105 duration-300"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-40 object-contain rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold mb-1">{name}</h2>
              <p className="text-sm text-gray-600 mb-3">{description}</p>
              <div className="flex justify-between">
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                >
                  Video
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

