// /$${pagename}/index.tsx
export function rootOnePageTemplate(
  pagename: string,
  path: string,
) {
  const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
  return `
import { createFileRoute } from '@tanstack/react-router'
import { One${capitalpagename}Page } from '@/routes/${path}/-components/one${pagename}/One${capitalpagename}Page'

export const Route = createFileRoute('/${path}/$${pagename}/')({
  component: One${capitalpagename}Page
})

  `;
}
// /-components/one${capitalpagename}/one${capitalpagename}Page
export function rootOnePageComponentsTemplate(
  pagename: string
) {
  const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
  return `
import { Suspense } from "react";
import { One${capitalpagename}Details } from "./One${capitalpagename}Details";

interface One${capitalpagename}PageProps {
}

export function One${capitalpagename}Page({}: One${capitalpagename}PageProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Suspense
        fallback={
          <div className=" min-h-screen h-full flex justify-center items-center w-full">
            <div className="bg-base-300 text-2xl skeleton h-56 w-[70%] md:w-[60%] flex justify-center items-center">Loading</div>
          </div>
        }
      >
        <One${capitalpagename}Details />
      </Suspense>
    </div>
  );
}

  `;
}
// /-components/one${capitalpagename}/one${capitalpagename}Details
export function rootOnePageDetailsComponentsTemplate(
  pagename: string,
  path: string,
) {
  const capitalpagename = pagename.charAt(0).toUpperCase() + pagename.slice(1);
  return `
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { one${capitalpagename}QueryOptions } from "@/routes/${path}/-query-options/${pagename}-query-option";
import { PBReturnedUseQueryError } from "@/lib/pb/components/PBReturnedUseQueryError";

interface One${capitalpagename}DetailsProps {
}

export function One${capitalpagename}Details({}: One${capitalpagename}DetailsProps) {
  const { ${pagename} } = useParams({ from: "/${path}/$${pagename}/" });
  const query = useSuspenseQuery(one${capitalpagename}QueryOptions({ ${pagename} }));
  const data = query.data;
  const error = query.error;

  if (error) {
    return (
      <div className="flex h-full min-h-[90vh] w-full flex-col items-center justify-center">
        <PBReturnedUseQueryError error={error} />
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {JSON.stringify(data, null, 2)}
    </div>
  );
}

  `;
}
