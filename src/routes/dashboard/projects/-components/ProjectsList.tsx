import React, { useState } from "react";
import { GitFork, Bug, Code, Star } from "lucide-react";
import ExampleData from "./ExampleProjectData";

export function ProjectsList() {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, ExampleData.length));
  };

  return (
    <>
      <div className="flex justify-between items-center border border-green-700 bg-gray-900 rounded-lg px-4 py-2 w-1/2 mx-auto mt-4">
        <div className="flex space-x-4">
          <div className="text-center text-lg py-1 px-3 rounded hover:bg-green-700 hover:text-white cursor-pointer">
            All
          </div>
          <div className="text-center text-lg py-1 px-3 rounded hover:bg-green-700 hover:text-white cursor-pointer">
            Private
          </div>
          <div className="text-center text-lg py-1 px-3 rounded hover:bg-green-700 hover:text-white cursor-pointer">
            Public
          </div>
          <div className="text-center text-lg py-1 px-3 rounded hover:bg-green-700 hover:text-white cursor-pointer">
            My Projects
          </div>
        </div>
        <div className="flex items-center bg-gray-800 rounded-lg px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-400"
            viewBox="0 -960 960 960"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <input
            type="text"
            placeholder="Search projects..."
            className="bg-transparent outline-none text-white px-2"
          />
          <button className="p-1 ml-2 text-gray-400 hover:text-green-500">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.25 11.9999H8.895M4.534 11.9999H2.75..."
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-6">
        <h1 className="text-2xl font-bold mb-6">List of Projects</h1>
        {ExampleData.slice(0, visibleProjects).map((project) => (
          <div
            key={project.titile}
            className="w-1/2 bg-gray-800 rounded-lg border border-gray-700 p-4 mb-4 shadow hover:shadow-lg hover:border-green-700"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-white">{project.titile}</h2>
              <button className="bg-gray-900 border border-green-700 text-white rounded-full px-4 py-1 hover:bg-green-700 hover:text-black">
                Issues
              </button>
            </div>
            <p className="text-gray-400">{project.description}</p>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <p className="flex items-center">
                <GitFork className="w-5 h-5 mr-2" />
                {project.forks}
              </p>
              <p className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                {project.stars}
              </p>
              <p className="flex items-center">
                <Code className="w-5 h-5 mr-2" />
                {project.langs.join(", ")}
              </p>
              <p className="flex items-center">
                <Bug className="w-5 h-5 mr-2" />
                {project.issues}
              </p>
              <p>Last Commit: {project.lastCommit}</p>
            </div>
          </div>
        ))}
        {visibleProjects < ExampleData.length && (
          <button
            className="bg-green-700 text-white rounded-lg px-6 py-2 mt-4 hover:bg-green-800"
            onClick={loadMoreProjects}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}
