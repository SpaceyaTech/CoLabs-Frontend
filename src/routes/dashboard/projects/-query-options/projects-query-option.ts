import { queryOptions } from "@tanstack/react-query";
import { Project, projectsArray } from "./dummy-projects";

interface projectsQueryOptionPropss {
  keyword: string;
  page?: number;
}

function filterProjects(projects: Project[], keyword: string) {
  return projects
    .filter((item) =>
      item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()),
    )
}

export function projectsListQueryOptions({
  keyword,
  page = 1,
}: projectsQueryOptionPropss) {
  return queryOptions({
    queryKey: ["projects_list", keyword, page],
    queryFn: () => {
      return new Promise<{
        page: number;
        perPage: number;
        totalItems: number;
        totalPages: number;
        items: Array<Project>;
      }>((res) => {
        setTimeout(() => {
          const projectsList = filterProjects(projectsArray, keyword);
          const totalItems = projectsList.length;
          const perPage = 10;
          const totalPages = Math.ceil(totalItems / perPage);
          res({
            page,
            perPage,
            totalItems,
            totalPages,
            items: projectsList.slice((page - 1) * perPage, page * perPage),
          });
        }, 1000);
      });
    },
  });
}
interface oneProjectsQueryOptionPropss {
  projects: string;
}
export function oneProjectsQueryOptions({
  projects,
}: oneProjectsQueryOptionPropss) {
  return queryOptions({
    queryKey: ["one_projects", projects],
    queryFn: () => {
      return new Promise<Project>((res, rej) => {
        setTimeout(() => {
          const oneProject = projectsArray.find((item) => item.id === projects);
          if (oneProject) {
            res(oneProject);
          }
          rej(new Error("Project not found"));
        }, 1000);
      });
    },
  });
}
