 
import { queryOptions } from "@tanstack/react-query";
import { Project, projectsArray } from "./dummy-projects";


interface projectsQueryOptionPropss {
  keyword: string;
    page?: number;
}
export function projectsListQueryOptions({ keyword, page=1 }: projectsQueryOptionPropss) {
  return queryOptions({
    queryKey: ["projects_list", keyword,page],
    queryFn: () => {
      return new Promise<{
          page: number;
          perPage: number;
          totaleItems: number;
          totalPages: number;
        items: Array<Project>;
      }>((res) => {
        setTimeout(() => {
          res({
            page,
            perPage: 10,
            totaleItems: 30,
            totalPages: 3,
            items: projectsArray
              .slice((page - 1) * 10, page * 10)
              .filter((item) => item.id.includes(keyword)),
          });
        }, 1000);
      });
    },
  });
}
interface oneProjectsQueryOptionPropss {
  projects: string;
}
export function oneProjectsQueryOptions({ projects }: oneProjectsQueryOptionPropss) {
  return queryOptions({
    queryKey: ["one_projects", projects],
    queryFn: () => {
      return new Promise<{ id: string }>((res, rej) => {
        setTimeout(() => {
          const oneProject = projectsArray.find((item) => item.id === projects);
          if(oneProject){
            res(oneProject);
          }
          rej(new Error("Project not found"))
        }, 1000);
      });
    },
  });
}
  