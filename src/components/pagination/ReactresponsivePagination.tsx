import { useLocation, useNavigate, useSearch } from "@tanstack/react-router";
import ResponsivePagination from "react-responsive-pagination";

interface ListingsPaginationProps {
  total_pages: number;
}

export function ListPagination({ total_pages }: ListingsPaginationProps) {
  const location = useLocation();
  const { globalPage } = useSearch({
    from: "__root__",
  });
  const navigate = useNavigate({
    from: location.pathname,
  });

  return (
    <div className="flex w-full items-center justify-center">
      <ResponsivePagination
        current={globalPage ?? 1}
        total={total_pages}
        onPageChange={(e) => {
          navigate({
            search: {
              // @ts-expect-error
              globalPage: e,
            },
          });
        }}
      />
    </div>
  );
}
