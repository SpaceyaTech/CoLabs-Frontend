// /-components/query-options/#{pagename}-query-option

export function rootPageQeuryOptionsTemplate(
  pagename: string
) {
  const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
  return ` 
import { queryOptions } from "@tanstack/react-query";


interface ${pagename}QueryOptionPropss {
  keyword: string;
}
export function ${pagename}ListQueryOptions({ keyword }: ${pagename}QueryOptionPropss) {
  return queryOptions({
    queryKey: ["${pagename}_list", keyword],
    queryFn: () => {
      return new Promise<{
        items: Array<Record<string, any> & { id: string }>;
      }>((res, rej) => {
        setTimeout(() => {
          res({
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
      return new Promise<{ id: string }>((res, rej) => {
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
