 
import { queryOptions } from "@tanstack/react-query";


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
        items: Array<Record<string, any> & { id: string }>;
      }>((res) => {
        setTimeout(() => {
          const resArray = Array.from({ length: 30 }, (_, i) => ({
            id: "projects_id_"+i,
          }));
          res({
            page,
            perPage: 10,
            totaleItems: 30,
            totalPages: 3,
             items: resArray
            .slice((page - 1) * 10, page * 10)
            .filter((item) =>item.id.includes(keyword))
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
      return new Promise<{ id: string }>((res) => {
        setTimeout(() => {
          res({
            id: projects,
          });
        }, 1000);
      });
    },
  });
}
  