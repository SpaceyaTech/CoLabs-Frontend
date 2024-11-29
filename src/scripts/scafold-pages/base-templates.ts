// const pagename = name.split("/").pop();
// const capitalized = pagename.charAt(0).toUpperCase() + pagename.slice(1);
export function rootPageTemplate(pagename:string,path:string) {
// const pagename = name.split("/").pop();
// const capitalized = page.charAt(0).toUpperCase() + page.slice(1);
const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
return `
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ${capitalpagename}Page } from "@/routes/${path}/-components/${capitalpagename}Page";

const searchparams = z.object({
  sq: z.string().optional(),
});

export const Route = createFileRoute("/${path}/")({
  validateSearch: (search) => searchparams.parse(search),
  component:${capitalpagename}Page
});

`;
}

// /-components/${capitalpagename}Page
export function rootPageComponentTemplate(pagename: string, path: string) {
const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
const pageTitle = `Collabs | ${pagename}`;
return `
import { SearchBox } from "@/components/search/SearchBox";
import { Suspense } from "react";
import { ListPageHeader } from "@/components/wrappers/ListPageHeader";
import { Helmet } from "@/components/wrappers/custom-helmet";
import { usePageSearchQuery } from "@/hooks/use-page-searchquery";
import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { Create${capitalpagename}Form } from "./form/create";
import { ${capitalpagename}List } from "./list/${capitalpagename}List";

interface ${capitalpagename}PageProps {
}

export function ${capitalpagename}Page({}: ${capitalpagename}PageProps) {
  const { debouncedValue, isDebouncing, keyword, setKeyword } =
    usePageSearchQuery("/${path}");
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Helmet title="${pageTitle}" description="The list of ${pageTitle}" />
      <ListPageHeader
        title="${capitalpagename}"
        formTrigger={<Create${capitalpagename}Form />}
        searchBox={
          <SearchBox
            inputProps={{
              placeholder: "Search by name",
            }}
            debouncedValue={debouncedValue}
            isDebouncing={isDebouncing}
            setKeyword={setKeyword}
            keyword={keyword}
          />
        }
      />

      <div className="m-3 flex h-full w-full items-center justify-center p-5">
        <Suspense fallback={<CardsListSuspenseFallback />}>
          <${capitalpagename}List keyword={keyword} />
        </Suspense>
      </div>
    </div>
  );
}
`;
}


// /-components/${capitalpagename}List
export function rootPageListComponentsTemplate(pagename: string, path: string) {
const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
return `
import { ItemNotFound } from "@/components/wrappers/ItemNotFound";
import { ErrorWrapper } from "@/components/wrappers/ErrorWrapper";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Update${capitalpagename}form } from "@/routes/${path}/-components/form/update";
import { ${pagename}ListQueryOptions } from "@/routes/${path}/-query-options/${pagename}-query-option";

interface ${capitalpagename}ListProps {
  keyword?: string;
}

export function ${capitalpagename}List({ keyword = "" }: ${capitalpagename}ListProps) {
  const query = useSuspenseQuery(${pagename}ListQueryOptions({ keyword }));
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
        <ItemNotFound label="${capitalpagename}" />
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <ul className="w-[90%] flex flex-wrap justify-center gap-2">
        {data.items.map((item) => {
          return (
            <li
              key={item.id}
              className="h-56 w-[95%] sm:w-[45%] lg:w-[30%] rounded-xl bg-base-300 p-4 flex justify-center items-center gap-2 "
            >
              <div className="flex flex-col gap-2 w-full justify-center">
                {item.id}
                <Link
                  to={\`/${path}/\${item.id}/\`}
                  className="text-primary"
                >
                  see details
                </Link>
              </div>
              <Update${capitalpagename}form item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}


`;
}


