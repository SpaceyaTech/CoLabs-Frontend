// /-components/query-options/#{pagename}-query-option

export function rootPageQeuryOptionsTemplate(
  pagename: string
) {
  const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
  return ` 
import { queryOptions } from "@tanstack/react-query";


interface ${pagename}QueryOptionPropss {
  keyword: string;
    page?: number;
}
export function ${pagename}ListQueryOptions({ keyword, page=1 }: ${pagename}QueryOptionPropss) {
  return queryOptions({
    queryKey: ["${pagename}_list", keyword,page],
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
            id: "${pagename}_id_"+i,
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
interface one${capitalpagename}QueryOptionPropss {
  ${pagename}: string;
}
export function one${capitalpagename}QueryOptions({ ${pagename} }: one${capitalpagename}QueryOptionPropss) {
  return queryOptions({
    queryKey: ["one_${pagename}", ${pagename}],
    queryFn: () => {
      return new Promise<{ id: string }>((res) => {
        setTimeout(() => {
          res({
            id: ${pagename},
          });
        }, 1000);
      });
    },
  });
}
  `;

}
