import { ItemNotFound } from "@/components/wrappers/ItemNotFound";
import { ErrorWrapper } from "@/components/wrappers/ErrorWrapper";
import { useSuspenseQuery } from "@tanstack/react-query";
import ResponsivePagination from "react-responsive-pagination";
import { usePageSearchQuery } from "@/hooks/use-page-searchquery";
import { projectsListQueryOptions } from "@/routes/dashboard/projects/-query-options/projects-query-option";
import { ProjectCard } from "./ProjectCard";

interface ProjectsListProps {
  keyword?: string;
}

export function ProjectsList({ keyword = "" }: ProjectsListProps) {
  const { page, updatePage } = usePageSearchQuery("/dashboard/projects");
  const query = useSuspenseQuery(projectsListQueryOptions({ keyword, page }));
  const data = query.data;
  const error = query.error;

  if (error) {
    return (
      <div className="flex h-full min-h-[90vh] w-full flex-col items-center justify-center">
        <ErrorWrapper error={error} />
      </div>
    );
  }
  if (!data || data.items.length === 0) {
    return (
      <div className="flex h-full min-h-[90vh] w-full flex-col items-center justify-center">
        <ItemNotFound label="Projects" />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <ul className="flex ] w-[95%] flex-wrap justify-center gap-2 p-2">
        {data.items.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </ul>
      <div className="flex w-full items-center justify-center">
        <ResponsivePagination
          current={page ?? 1}
          total={data.totalPages}
          onPageChange={(e) => {
            updatePage(e);
          }}
        />
      </div>
    </div>
  );
}

interface ProjectsFallbackListProps {

}

export function ProjectsFallbackList({}:ProjectsFallbackListProps){
return (
  <ul className="flex w-[95%] flex-wrap  gap-2 p-2">
    {Array.from({ length: 14 }).map((_,idx) => {
      return (
        <div key={idx} className="skeleton flex h-28 w-full flex-col rounded-2xl border-[1px] border-[#294740] bg-[#292E2F] px-4 py-3" />
      );

    })}
  </ul>
);
}
