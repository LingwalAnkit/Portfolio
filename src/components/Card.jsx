import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Card = () => {
  const [projects, setProjects] = useState([]); // State to hold project data

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects"); // Replace with your backend API endpoint
        const data = await response.json();
        setProjects(data); // Assuming `data` is an array of projects
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={"hidden"}
            whileInView={"visible"}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={project.link || "#"}> {/* Project link from backend */}
              <img
                className="rounded-t-lg w-full"
                src={project.image || "https://via.placeholder.com/300"} // Default image if not provided
                alt={project.title || "Project"}
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title || "Untitled Project"}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description || "No description available."}
              </p>
              <a
                href={project.link || "#"}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
