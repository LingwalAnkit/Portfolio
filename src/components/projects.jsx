import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "NavShiksha",
      description:
        "A platform for improving rural education with personalized learning and community-driven solutions.",
      image: require("../assets/project/NavShiksha.png"),
      tags: ["Next", "Node.js", "Prisma", "MongoDB", "Redux"],
      demoLink: "https://sih-nav-shiksha.vercel.app/",
      githubLink: "https://github.com/LingwalAnkit/SIH-NavShiksha",
    },
    {
      title: "Whiteboard - Interactive Teacher Side",
      description:
        "A tool for teachers to interact with students in real time using a virtual whiteboard.",
      image: require("../assets/project/WhiteBoard.png"),
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "https://wbfe.vercel.app/",
      githubLink: "https://github.com/LingwalAnkit/Whiteboard",
    },
    {
      title: "Solana Token Launchpad",
      description:
        "A Solana-based token launchpad utilizing Solana libraries to create and deploy tokens seamlessly.",
      image: require("../assets/project/TokenLaunchpad.png"),
      tags: ["Solana", "React", "Web3"],
      demoLink: "https://token-launchpad-mocha.vercel.app/",
      githubLink: "https://github.com/LingwalAnkit/Token-Launchpad",
    },
    {
      title: "Chat App",
      description:
        "A real-time messaging app built with React and WebSocket for seamless communication.",
      image: require("../assets/project/Chat.png"),
      tags: ["Next", "WebSocket", "Node.js", "Pusher"],
      demoLink: "https://nav-shiksha-chat-isox.vercel.app/",
      githubLink: "https://github.com/LingwalAnkit/NavShiksha-Chat",
    },
    {
      title: "Solana Web3 App",
      description:
        "A Web3 app that allows users to airdrop SOL, send SOL, and transfer Solana tokens effortlessly.",
      image: require("../assets/project/Solana web3.png"),
      tags: ["Solana", "Web3.js", "React"],
      demoLink: "https://d-app-pied.vercel.app/",
      githubLink: "https://github.com/LingwalAnkit/DApp",
    },
    {
      title: "Sun-Vest",
      description:
        "A platform to invest in and track shared solar energy projects, enabling individuals to contribute to renewable energy.",
      image: require("../assets/project/SunVest.png"),
      tags: ["React", "Web3.Js", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "https://github.com/LingwalAnkit/Sun-Vest",
    },
    {
      title: "Decentralized App (dApp)",
      description:
        "A decentralized application built using Web3 technology for secure and transparent transactions.",
      image: require("../assets/project/Dapp.png"),
      tags: ["React", "Solidity", "Web3"],
      demoLink: "#",
      githubLink: "https://github.com/LingwalAnkit/DApp",
    },
    {
      title: "PolicyBots",
      description:
        "An automated insurance solution with AI-powered form-filling and document management.",
      image: require("../assets/project/PolicyBots.png"),
      tags: ["React", "Python", "AI"],
      demoLink: "https://policy-bots-lttd.vercel.app/",
      githubLink: "https://github.com/LingwalAnkit/Policy_Bots",
    },
    {
      title: "Scatch",
      description:
        "A full-stack Shoes selling E-Com platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.",
      image: require("../assets/project/Scatch.png"), // or import it above
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "https://github.com/LingwalAnkit/Ecom-app",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
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
