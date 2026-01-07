/*import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
*/
import React from "react";

const projectData = [
  {
    id: 1,
    name: "E-Commerce Website",
    image: "/ecommerce.png",
    description: "MERN stack e-commerce with user login, cart, and Stripe payment gateway.",
    videoLink: "https://youtu.be/2-JQ1aLCL70 ",
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
    videoLink: "https://scintillating-seahorse-5ca99e.netlify.app/ ",
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
    videoLink: "https://youtu.be/MIYQR-Ybrn4",
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

