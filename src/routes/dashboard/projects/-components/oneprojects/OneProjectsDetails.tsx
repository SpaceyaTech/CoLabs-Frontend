
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { oneProjectsQueryOptions } from "@/routes/dashboard/projects/-query-options/projects-query-option";
import { ErrorWrapper } from "@/components/wrappers/ErrorWrapper";
import { GitFork, Stars } from "lucide-react";

interface OneProjectsDetailsProps {
}

export function OneProjectsDetails({}: OneProjectsDetailsProps) {
  const { projects } = useParams({ from: "/dashboard/projects/$projects/" });
  const query = useSuspenseQuery(oneProjectsQueryOptions({ projects }));
  const project = query.data;
  const error = query.error;

  if (error) {
    return (
      <div className="flex h-full min-h-[90vh] w-full flex-col items-center justify-center">
           <ErrorWrapper error={error} />
      </div>
    );
  }
  return (
    <div className="flex h-full w-full flex-col gap-3 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-bold tracking-tight text-[#FFFFFF]">
          {project.title}
        </h2>
        <span className="rounded-full border-[1px] border-[#1F7964] px-4 py-3 text-base text-[#FFFFFF]">
          Issues: {project.issuesCount}
        </span>
      </div>
      <p className="text-xl text-[#FFFFFF]">{project.description}</p>
      <div className="flex flex-col gap-2 text-[#D9D9D9]">
        <ul className="flex gap-2">
          Langs:
          {project.languages.slice(0, 3).map((lang) => (
            <li key={lang.name} style={{ color: lang.color }} className="badge badge-primary badge-outline">
              {lang.name},
            </li>
          ))}
        </ul>
        <div className="gap-2 flex items-center">
          <GitFork className="h-4 w-4" />
          Forks: {project.forksCount}
        </div>
        <div className="gap-2 flex items-center">
          <Stars className="h-4 w-4" />
          Stars: {project.starCount}
        </div>
        <div className="gap-2 flex items-center">
          Last Commit: {project.lastCommitDate}
        </div>
      </div>
    </div>
  );
}

  