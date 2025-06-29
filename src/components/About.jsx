import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm <strong>Aman Chaurasiya</strong>, a passionate Full-Stack Developer with a BCA degree. I specialize in building dynamic and scalable web applications using the MERN Stack. 
          I love solving real-world problems through code and am always looking for opportunities to grow and innovate.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
           <strong>Bachelor of Computer Applications (BCA)</strong>, CSJMU Kanpur, 2025<br />
          <strong>Full-Stack Web Development</strong>, Self-Learning & Projects, 2023–2025
        
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in <strong>JavaScript, HTML, CSS, React, Node.js</strong><br />
          Experienced with <strong>MongoDB, Express.js, REST APIs, Git, Postman</strong><br />
          Strong grasp of component-based design, responsive layouts, and clean code principles<br />
          Effective communicator and team collaborator
        </span>
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          <strong>Freelance Full-Stack Developer</strong> | Self Projects | 2023–Present<br />
          Worked on multiple full-stack applications including an e-commerce platform, blog CMS, and portfolio site. Developed complete frontend and backend, handled deployment, and database integration using MongoDB Atlas.
        
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          Built and deployed 5+ full-stack projects with real-time functionality<br />
          🌐 Published portfolio and projects on platforms like GitHub, Vercel, and Netlify<br />
          🎓 Completed hands-on practical learning in backend API, authentication, and MongoDB CRUD
        </span>
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to continuously grow as a developer by building innovative solutions that solve real-world problems. I aim to work with collaborative teams and contribute meaningfully to modern web development while learning new technologies and scaling challenges.
        </p>
      </div>
    </div>
  );
}

export default About;

