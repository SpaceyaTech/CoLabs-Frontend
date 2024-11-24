import React, { useState } from "react";
import { GitFork, Bug, Code, Star } from "lucide-react";
import ExampleData from "./ExampleProjectData";
import "./ProjectList.css";

export function ProjectsList() {
  const [visibleProjects, setVisibleProjects] = useState(6); // State to track the number of projects displayed

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, ExampleData.length)); // Increment by 6 or stop at the maximum data length
  };

  return (
    <>
      <div className="OuterDiv">
        <div className="InnerDiv">
          <div className="headerText">All</div>
          <div className="headerText">Private</div>
          <div className="headerText">Public</div>
          <div className="headerText">My Projects</div>
        </div>
        <div>
          <div className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#e8eaed"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              id="searchInput"
            />
            <button onClick={() => console.log("Search clicked!")}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.25 11.9999H8.895M4.534 11.9999H2.75..."
                  stroke="#656767"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="primaryContainer">
        <div className="flex h-full w-full flex-col items-center justify-center p-4">
          <h1 className="text-xl font-bold mb-4">List of Projects</h1>
          {ExampleData.slice(0, visibleProjects).map((project) => (
            <div
              key={project.titile}
              className="mb-4 rounded-lg border border-slate-200 p-4 ProjectCard"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-bold">{project.titile}</h2>
                <button className="issueButton">Issues</button>
              </div>
              <p className="text-slate-600">{project.description}</p>
              <div className="flex justify-between items-center mb-2 m-6">
                <p className="flex items-center">
                  <GitFork className="size-6" />
                  <span className="text-sm ml-2">{project.forks}</span>
                </p>
                <p className="flex items-center">
                  <Star className="size-6" />
                  <span className="text-md ml-2">{project.stars}</span>
                </p>
                <p className="flex items-center">
                  <Code className="size-6" />
                  <span className="text-md ml-2">{project.langs.join(", ")}</span>
                </p>
                <p className="flex items-center">
                  <Bug className="size-6" />
                  <span className="text-md ml-2">{project.issues}</span>
                </p>
                <p className="text-md text-slate-500">
                  Last Commit: {project.lastCommit}
                </p>
              </div>
            </div>
          ))}
          {visibleProjects < ExampleData.length && ( // Show the button only if there are more projects to load
            <button
              className="loadMoreButton issueButton"
              onClick={loadMoreProjects}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
}
