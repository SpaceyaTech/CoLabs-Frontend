 
import { queryOptions } from "@tanstack/react-query";


interface moneyQueryOptionPropss {
  keyword: string;
    page?: number;
}
export function moneyListQueryOptions({ keyword, page=1 }: moneyQueryOptionPropss) {
  return queryOptions({
    queryKey: ["money_list", keyword,page],
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
            id: "money_id_"+i,
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
interface oneMoneyQueryOptionPropss {
  money: string;
}
export function oneMoneyQueryOptions({ money }: oneMoneyQueryOptionPropss) {
  return queryOptions({
    queryKey: ["one_money", money],
    queryFn: () => {
      return new Promise<{ id: string }>((res) => {
        setTimeout(() => {
          res({
            id: money,
          });
        }, 1000);
      });
    },
  });
}
  