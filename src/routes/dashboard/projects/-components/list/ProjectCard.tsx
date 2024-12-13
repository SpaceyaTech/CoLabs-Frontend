import { Project } from "../../-query-options/dummy-projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex w-full flex-col gap-1 rounded-2xl border-[1px] border-[#294740] bg-[#292E2F] px-4 py-3">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-[#FFFFFF]">
          {project.name}
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
            <li key={lang} className="">
              {lang},
            </li>
          ))}
          ...
        </ul>
        <p>Forks: {project.forksCount}</p>
        <p>Stars: {project.starCount}</p>
        <p>Last Commit: {project.lastCommitDate}</p>
      </div>
    </div>
  );
}


