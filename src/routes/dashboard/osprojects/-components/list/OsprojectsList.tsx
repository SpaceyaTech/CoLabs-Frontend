import { ItemNotFound } from "@/components/wrappers/ItemNotFound";
import { ErrorWrapper } from "@/components/wrappers/ErrorWrapper";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import ResponsivePagination from "react-responsive-pagination";
import { usePageSearchQuery } from "@/hooks/use-page-searchquery";
import { UpdateOsprojectsform } from "@/routes/dashboard/osprojects/-components/form/update";
import { osprojectsListQueryOptions } from "@/routes/dashboard/osprojects/-query-options/osprojects-query-option";

interface OsprojectsListProps {
  keyword?: string;
}

export function OsprojectsList({ keyword = "" }: OsprojectsListProps) {
  const { page, updatePage } = usePageSearchQuery("/dashboard/osprojects");
  const query = useSuspenseQuery(osprojectsListQueryOptions({ keyword, page }));
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
        <ItemNotFound label="Osprojects" />
      </div>
    );
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <ul className="flex min-h-[80vh] w-[95%] flex-wrap justify-center gap-2 p-2">
        {data.items.map((item) => {
          return (
            <li
              key={item.id}
              className="flex h-56 w-[95%] items-center justify-center gap-2 rounded-xl bg-base-300 p-4 sm:w-[45%] lg:w-[30%]"
            >
              <div className="flex h-full w-full flex-col justify-between gap-2">
                <div className="flex h-full w-full justify-between gap-2">
                  <h1 className="text-2xl font-bold">{item.id}</h1>
                  <UpdateOsprojectsform item={item} />
                </div>
                <Link
                  to={`/dashboard/osprojects/$osprojects`}
                  params={{ osprojects: item.id }}
                  className="flex w-full justify-between bg-primary p-2 text-primary-foreground"
                >
                  <div>see details</div>
                  ➡️
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex w-full items-center justify-center">
        <ResponsivePagination
          current={page ?? 1}
          total={data.totalPages}
          onPageChange={(e) => {
            updatePage(e);
          }}
        />
      </div>
    </div>
  );
}
