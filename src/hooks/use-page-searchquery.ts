import { useNavigate, useSearch } from "@tanstack/react-router";
import { useTransition, useState, useEffect } from "react";
import { useDebouncedValue } from "./use-debouncer";
import { ValidRoutes } from "@/lib/tanstack/router/router-types";

  /**
   * Use this hook to generate a debounced search query that can be used in a input search field.
   * @param path the path of the route that the search query will be applied to
   * @returns an object containing the debounced search query, a boolean indicating if the debouncer is running, the current keyword and a function to update the keyword
   * Use this hook in a page component that declares a sq search param in the route 
  */
export function usePageSearchQuery(path: ValidRoutes) {
  // @ts-expect-error : search parm below wwill exist when the compnent is usesd
  const { sq } = useSearch({ from:`${path}/` });
  const navigate = useNavigate({ from:path });
  const [_, startTransition] = useTransition();

  const [keyword, setKeyword] = useState(sq ?? "");
  const { debouncedValue, isDebouncing } = useDebouncedValue(keyword, 2000);
  useEffect(() => {
    if (sq !== debouncedValue) {
      startTransition(() => {
        navigate({
          search: {
            sq: debouncedValue,
          },
        });
      });

    }
  }, [debouncedValue, navigate, sq]);
  return { debouncedValue, isDebouncing, keyword, setKeyword };
}
