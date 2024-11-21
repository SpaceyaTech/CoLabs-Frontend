import { GitFork,Bug, Code, Star } from "lucide-react";

interface ProjectsListProps {}

export function ProjectsList({}: ProjectsListProps) {
  type Project = {
    titile: string;
    description: string;
    forks: number;
    stars: number;
    langs: string[];
    issues: number;
    lastCommit: string;
  };
  const projects: Array<Project> = [
    {
      titile: "Project 1",
      description: "This is a project",
      forks: 10,
      stars: 20,
      langs: ["JavaScript", "TypeScript"],
      issues: 5,
      lastCommit: "2021-09-01",
    },
    {
      titile: "Project 2",
      description: "This is another project",
      forks: 5,
      stars: 10,
      langs: ["JavaScript", "TypeScript"],
      issues: 3,
      lastCommit: "2021-08-01",
    },
    {
      titile: "Project 3",
      description: "This is a third project",
      forks: 2,
      stars: 5,
      langs: ["JavaScript", "TypeScript"],
      issues: 1,
      lastCommit: "2021-07-01",
    },
    {
      titile: "Project 4",
      description: "This is a fourth project",
      forks: 1,
      stars: 1,
      langs: ["JavaScript", "TypeScript"],
      issues: 0,
      lastCommit: "2021-06-01",
    },
  ];
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      list the projects here
      {projects.map((project) => {
        return (
          <div key={project.titile} className="mb-4 rounded-lg border border-slate-200 p-4">
            <h1 className="text-2xl font-bold">{project.titile}</h1>
            <p className="text-slate-600">{project.description}</p>
            <p className="flex items-center">
              <GitFork className=" size-4" />
              <span className="text-sm">{project.forks}</span>
            </p>
            <p className="flex items-center">
              <Star className=" size-4" />
              <span className="text-sm">{project.stars}</span>
            </p>
            <p className="flex items-center">
              <Code className=" size-4" />
              <span className="text-sm">{project.langs.join(", ")}</span>
            </p>
            <p className="flex items-center">
              <Bug className=" size-4" />
              <span className="text-sm">{project.issues}</span>
            </p>
            <p className="flex items-center">
              {/* <IconCalendar className=" size-4" /> */}
              <span className="text-sm">{project.lastCommit}</span>
            </p>
          </div>
        );
      })}   
    </div>
  );
}


