import React from 'react';

const Projects = () => {
  const projects = [
    {
        title: "Scatch",
        description:
          "A full-stack Shoes selling E-Com platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.",
        image: require("../assets/project/Scatch.png"), // or import it above
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        demoLink: "#",
        githubLink: "https://github.com/username/ecommerce",
      },
      
    {
      title: "NavShiksha",
      description: "A platform for improving rural education with personalized learning and community-driven solutions.",
      image: require("../assets/project/NavShiksha.png"),
      tags: ["Next", "Node.js", "Prisma", "MongoDB", "Redux"],
      demoLink: "https://navshiksha-demo.com",
      githubLink: "https://github.com/username/navshiksha"
    },
    {
      title: "Chat App",
      description: "A real-time messaging app built with React and WebSocket for seamless communication.",
      image: require("../assets/project/Chat.png"),
      tags: ["Next", "WebSocket", "Node.js", "Pusher"],
      demoLink: "https://chat-app-demo.com",
      githubLink: "https://github.com/username/chat-app"
    },
    {
      title: "Solar Energy Share Sharing Platform",
      description: "A platform to invest in and track shared solar energy projects, enabling individuals to contribute to renewable energy.",
      image: require("../assets/project/Scatch.png"),
      tags: ["React", "Web3.Js", "Node.js", "MongoDB"],
      demoLink: "https://solar-energy-demo.com",
      githubLink: "https://github.com/username/solar-energy"
    },
    {
      title: "Decentralized App (dApp)",
      description: "A decentralized application built using Web3 technology for secure and transparent transactions.",
      image: require("../assets/project/Scatch.png"),
      tags: ["React", "Solidity", "Web3"],
      demoLink: "https://dapp-demo.com",
      githubLink: "https://github.com/username/dapp"
    },
    {
      title: "PolicyBots",
      description: "An automated insurance solution with AI-powered form-filling and document management.",
      image: require("../assets/project/Scatch.png"),
      tags: ["React", "Python", "AI"],
      demoLink: "https://policybots-demo.com",
      githubLink: "https://github.com/username/policybots"
    },
    {
      title: "Alumni Association Page",
      description: "A platform for alumni to connect, share updates, and participate in events. (Currently under development)",
      image: require("../assets/project/Scatch.png"),
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "https://alumni-association-demo.com",
      githubLink: "https://github.com/username/alumni-association"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col">
              <div className="p-4 w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="w-full md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
