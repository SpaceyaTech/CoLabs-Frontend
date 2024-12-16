import { Link } from "@tanstack/react-router";
import { Project } from "../../-query-options/dummy-projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/dashboard/projects/${project.id}`} 
    className="flex w-full h-fit flex-col gap-1 rounded-2xl hover:brightness-125 border-[1px] border-[#294740] bg-[#292E2F] px-4 py-3">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-[#FFFFFF]">
          {project.title}
        </h2>
        <span className="rounded-full border-[1px] border-[#1F7964] px-4 py-3 text-base text-[#FFFFFF]">
          Issues: {project.issuesCount}
        </span>
      </div>
      <p className="text-xl text-[#FFFFFF]">{project.description}</p>
      <div className="flex flex-wrap text-[#D9D9D9] gap-2">
        <ul className="flex gap-2 text-sm font-medium">
          Langs:
          {project.languages.slice(0, 3).map((lang) => (
            <li key={lang.name} style={{ color: lang.color }} className="">
              {lang.name},
            </li>
          ))}
          ...
        </ul>
        <p>Forks: {project.forksCount}</p>
        <p>Stars: {project.starCount}</p>
        <p>Last Commit: {project.lastCommitDate}</p>
      </div>
    </Link>
  );
}


