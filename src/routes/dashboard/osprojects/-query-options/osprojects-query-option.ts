 
import { queryOptions } from "@tanstack/react-query";


interface osprojectsQueryOptionPropss {
  keyword: string;
    page?: number;
}
export function osprojectsListQueryOptions({ keyword, page=1 }: osprojectsQueryOptionPropss) {
  return queryOptions({
    queryKey: ["osprojects_list", keyword,page],
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
            id: "osprojects_id_"+i,
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
interface oneOsprojectsQueryOptionPropss {
  osprojects: string;
}
export function oneOsprojectsQueryOptions({ osprojects }: oneOsprojectsQueryOptionPropss) {
  return queryOptions({
    queryKey: ["one_osprojects", osprojects],
    queryFn: () => {
      return new Promise<{ id: string }>((res) => {
        setTimeout(() => {
          res({
            id: osprojects,
          });
        }, 1000);
      });
    },
  });
}
  