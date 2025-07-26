import { createFileRoute } from '@tanstack/react-router'
import './challenges.css'
import InfoBox from './-components/InfoBox'
import data from "./ExampleData"; 
import { useState } from 'react';

export const Route = createFileRoute('/dashboard/challenges/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [visibleActivities, setVisibleActivities] = useState(3); // State to track how many activities to display

  const loadMoreActivities = () => {
    // Load 3 more items if available
    setVisibleActivities((prev) => Math.min(prev + 3, data.activities.length));
  };
  const [visibleProjects, setVisibleProjects] = useState(3); // State to track how many projects to display

  const loadMoreProjects = () => {
    // Load 3 more projects if available
    setVisibleProjects((prev) => Math.min(prev + 3, data.projects.length));
  };
  return (
    <div className="w-auto min-h-screen h-full flex flex-col items-center justify-center bg-[#16181D]">
      <div className="headerDiv">
        <h1 className="text-4xl font-bold">Challenges</h1>
        <p className="text-lg">Welcome to the challenges page!</p>
      </div>
      <div className="leaderBoard">
      <div style={{ textAlign: 'center', margin:'10px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <h1>Leader Board</h1>
        </div>
        <div className='leaderBoardInner' style={{ textAlign: 'center', margin:'10px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <div>
            <InfoBox
              title="Achievement"
              width='250px'
            />
          </div>
          <div>
            <InfoBox 
              title="This Month"
            />
          </div>
          <div>
            <InfoBox 
              title="My Streak"
              width='250px'
            />
          </div>
          <div>
            <InfoBox 
            title="Achievement"
            width='300px'
            />
          </div>
        </div>
      </div>
      <div style={{margin:'10px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', height: '30dvw auto', width: '60dvw' }}>
      <div className="bg-[#16181D] text-white min-h-screen p-6 space-y-6 " style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Activity Section */}
      <div
      style={{
        width: "100%",
        height: "auto", // Set height to auto
        flexWrap: "nowrap",
        overflow: "hidden",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-xl font-bold mb-4">Activity</h1>
      <div
        className="space-y-4"
        style={{
          height: "auto", // Set height to auto
          flexWrap: "wrap",
          overflow: "hidden", // Hide scroll
          width: "90%",
          display: "flex",
          flexDirection: "column", // Display items in a column
          alignItems: "center",
        }}
      >
        {/* Display only visibleActivities items */}
        {data.activities.slice(0, visibleActivities).map((activity, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col hover:scale-105 transform transition-transform"
            style={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              border: "1px solid #2D8067",
              margin: "10px",
              borderRadius: "5px",
              width: "70%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <span
              className={`text-sm ${
                activity.type === "pull_request"
                  ? "text-green-400"
                  : "text-purple-400"
              } mb-2`}
            >
              {activity.title}
            </span>
            <p className="text-sm">
              <span className="font-bold">{activity.user} </span>
              {activity.description}
            </p>
            <span className="text-xs text-gray-400 mt-2">{activity.time}</span>
            <button
              className="text-sm text-white rounded-box px-4 py-1 hover:bg-[#2D8067] transition m-5"
              style={{
                borderRadius: "20px",
                width: "70px",
                height: "30px",
                border: "1px solid #2D8067",
              }}
            >
              {activity.actionText}
            </button>
          </div>
        ))}

        {/* "Load More" Button */}
        {visibleActivities < data.activities.length && (
          <button 
            className="bg-[#2D8067] text-sm text-white rounded-box px-4 py-1 hover:bg-[#2D8067] hover:scale-105 transform transition-transform m-5 " 
            style={{borderRadius: '20px', width:'auto', height:'30px', border: '1px solid #2D8067'}}
            onClick={loadMoreActivities}
            
          >
            Load More
          </button>
        )}
      </div>
    </div>

      {/* Recommended Projects Section */}
      <div
      style={{
        width: "90%",
        height: "auto", // Set height to auto
        flexWrap: "wrap",
        overflow: "hidden",
        margin: "20px",
        display: "flex",
        flexDirection: "column", // Adjusted to column for better layout
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-xl font-bold mb-4">Recommended Projects</h1>
      <div
        className="space-y-4"
        style={{
          // border: "1px solid blue",
          flexWrap: "nowrap",
          overflow: "hidden", // Removed scroll for cleaner layout
          width: "90%",
          display: "flex",
          flexDirection: "column", // Adjusted for column layout
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Display only visibleProjects items */}
        {data.projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-4 flex justify-between items-center hover:scale-105 transform transition-transform"
            style={{
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              width: "80%",
              height: "100px",
              display: "flex",
              justifyContent: "space-between",
              margin: "10px",
              borderRadius: "5px",
              border: "1px solid #2D8067",
            }}
          >
            <div>
              <p className="font-bold text-sm flex m-1 ">{project.name}</p>
              <p className="text-sm text-gray-400 m-1">
                lang: {project.languages.join(", ")} | forks: {project.forks} |
                stars: {project.stars}
              </p>
              <p className="text-xs text-gray-400 m-1">
                last commit: {project.lastCommit}
              </p>
            </div>
            <button
              className="text-sm text-white rounded-box px-4 py-1 hover:bg-[#2D8067] transition m-5"
              style={{
                borderRadius: "20px",
                width: "70px",
                height: "30px",
                border: "1px solid #2D8067",
              }}
            >
              {project.issues} Issues
            </button>
          </div>
        ))}

        {/* "Load More" Button */}
        {visibleProjects < data.projects.length && (
          <button
            className="bg-[#2D8067] text-sm text-white rounded-box px-4 py-1 hover:bg-[#2D8067] hover:scale-105 transform transition-transform m-5 " 
            style={{borderRadius: '20px', width:'auto', height:'30px', border: '1px solid #2D8067'}}
            onClick={loadMoreProjects}
            
          >
            Load More
          </button>
        )}
      </div>
    </div>
    </div>
    <div style={{ backgroundColor: "#101317", padding: "20px", color: "#fff", marginTop: '-150px' }}>
      {/* Hackathon Announcement Section */}
      <div
        style={{
          backgroundColor: "#6B5BA3",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {data.hackathon.title}
        </h1>
        <button
          style={{
            backgroundColor: "#fff",
            color: "#6B5BA3",
            borderRadius: "20px",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {data.hackathon.buttonText}
        </button>
      </div>

      {/* Top Contributors Section */}
      <div
        style={{
          backgroundColor: "#161A22",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Top Contributors
          </h2>
          <a href="#" style={{ color: "#00BFA6", textDecoration: "none" }}>
            See all
          </a>
        </div>
        <div>
          {data.contributors.map((contributor) => (
            <div
              key={contributor.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0",
                padding: "10px",
                borderBottom: "1px solid #2D2F34",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#FFD700",
                    marginRight: "10px",
                  }}
                >
                  {contributor.rank}
                </span>
                <p style={{ fontSize: "1rem" }}>{contributor.name}</p>
              </div>
              <div>
                <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
                  {contributor.commits} commits | {contributor.prs} PRs
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges Section */}
      <div
        style={{
          backgroundColor: "#161A22",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Challenges</h2>
          <button
            style={{
              backgroundColor: "#00BFA6",
              color: "#fff",
              borderRadius: "10px",
              padding: "5px 10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            + Create
          </button>
        </div>
        {data.challenges.map((challenge) => (
          <div
            key={challenge.id}
            style={{
              backgroundColor: "#1F232A",
              borderRadius: "10px",
              padding: "15px",
              margin: "10px 0",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {challenge.title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
              Progress: {challenge.progress} ({challenge.issuesClosed} issues
              closed)
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
                <span style={{ color: "#00BFA6" }}>
                  {challenge.issuesLeft} issues left
                </span>{" "}
                |{" "}
                <span style={{ color: "#00BFA6" }}>
                  {challenge.issuesInProgress} in progress
                </span>
              </p>
              <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
                {challenge.daysSinceStart} days ago
              </p>
            </div>
            <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
              Status: {challenge.status}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#9CA3AF" }}>
              Final day of submissions is {challenge.finalDay}
            </p>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  )
}
