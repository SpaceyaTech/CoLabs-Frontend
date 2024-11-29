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
    queryKey: ["${pagename}_list", keyword],
    queryFn: () => {
      return new Promise<{
          page: number;
          perPage: number;
          totaleItems: number;
          totalPages: number;
        items: Array<Record<string, any> & { id: string }>;
      }>((res) => {
        setTimeout(() => {
          res({
            page,
            perPage: 10,
            totaleItems: 30,
            totalPages: 3,
            items: [{ id: "id_1" }, { id: "id_2" }, { id: "id_3" }],
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
