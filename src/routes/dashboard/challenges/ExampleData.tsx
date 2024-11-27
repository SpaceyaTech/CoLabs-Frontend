import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/challenges/ExampleData')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /dashboard/challenges/ExampleData!'
}

const data = {
    activities: [
      {
        type: "pull_request", // Type of activity
        title: "New PR is up 🚀",
        user: "@username",
        description:
          "1 new pull request: Updates the navbar to stick at the top when the page is scrolled vertically",
        time: "10:19 AM, 1 Nov, 2024",
        actionText: "Open",
      },
      {
        type: "new_project",
        title: "Woohoo! New Project 🎉",
        user: "The Mzalendo Project/Mzalendo-ETP",
        description: "Injecting transparency into political processes.",
        time: "10:19 AM, 1 Nov, 2024",
        actionText: "Open",
      },
      {
        type: "pull_request", // Type of activity
        title: "New PR is up 🚀",
        user: "@username",
        description:
          "1 new pull request: Updates the navbar to stick at the top when the page is scrolled vertically",
        time: "10:19 AM, 1 Nov, 2024",
        actionText: "Open",
      },
      {
        type: "new_project",
        title: "Woohoo! New Project 🎉",
        user: "The Mzalendo Project/Mzalendo-ETP",
        description: "Injecting transparency into political processes.",
        time: "10:19 AM, 1 Nov, 2024",
        actionText: "Open",
      },
      {
        type: "pull_request", // Type of activity
        title: "New PR is up 🚀",
        user: "@username",
        description:
          "1 new pull request: Updates the navbar to stick at the top when the page is scrolled vertically",
        time: "10:19 AM, 1 Nov, 2024",
        actionText: "Open",
      },
      {
        type: "new_project",
        title: "Woohoo! New Project 🎉",
        user: "The Mzalendo Project/Mzalendo-ETP",
        description: "Injecting transparency into political processes.",
        time: "10:19 AM, 1 Nov, 2024",
        actionText: "Open",
      },
    ],
    projects: [
      {
        name: "The Mzalendo Project",
        languages: ["Typescript", "React", "Python"],
        forks: 44,
        stars: 102,
        lastCommit: "7 hours ago",
        issues: 9,
      },
      {
        name: "Another Project",
        languages: ["JavaScript", "Node.js"],
        forks: 50,
        stars: 200,
        lastCommit: "3 days ago",
        issues: 5,
      },
      {
        name: "The Mzalendo Project",
        languages: ["Typescript", "React", "Python"],
        forks: 44,
        stars: 102,
        lastCommit: "7 hours ago",
        issues: 9,
      },
      {
        name: "Another Project",
        languages: ["JavaScript", "Node.js"],
        forks: 50,
        stars: 200,
        lastCommit: "3 days ago",
        issues: 5,
      },
      {
        name: "The Mzalendo Project",
        languages: ["Typescript", "React", "Python"],
        forks: 44,
        stars: 102,
        lastCommit: "7 hours ago",
        issues: 9,
      },
      {
        name: "Another Project",
        languages: ["JavaScript", "Node.js"],
        forks: 50,
        stars: 200,
        lastCommit: "3 days ago",
        issues: 5,
      },
    ],
    hackathon: {
        title: "Africa's Talking x Nairobi iHub Hackathon",
        buttonText: "Learn more",
        buttonLink: "#",
      },
      contributors: [
        { id: 1, name: "@ndugu_lim", commits: 1423, prs: 43, rank: 1 },
        { id: 2, name: "@codefather", commits: 1145, prs: 29, rank: 2 },
        { id: 3, name: "@s.eth", commits: 1028, prs: 27, rank: 3 },
        { id: 4, name: "@samcina", commits: 934, prs: 18, rank: 4 },
        { id: 5, name: "@samoina", commits: 789, prs: 12, rank: 5 },
      ],
      challenges: [
        {
          id: 1,
          title: "She Code Africa Buldathon",
          progress: "50%",
          issuesClosed: 234,
          issuesLeft: 222,
          issuesInProgress: 34,
          status: "3 days left",
          finalDay: "November 5, 2024",
          daysSinceStart: 7,
        },
        {
          id: 2,
          title: "She Code Africa Buldathon",
          progress: "50%",
          issuesClosed: 234,
          issuesLeft: 222,
          issuesInProgress: 34,
          status: "3 days left",
          finalDay: "November 5, 2024",
          daysSinceStart: 7,
        },
      ],
  };
  
  export default data;