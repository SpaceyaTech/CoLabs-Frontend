
import { SearchBox } from "@/components/search/SearchBox";
import { Suspense } from "react";
import { ListPageHeader } from "@/components/wrappers/ListPageHeader";
import { Helmet } from "@/components/wrappers/custom-helmet";
import { usePageSearchQuery } from "@/hooks/use-page-searchquery";
import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { CreateOsprojectsForm } from "./form/create";
import { OsprojectsList } from "./list/OsprojectsList";

interface OsprojectsPageProps {
}

export function OsprojectsPage({}: OsprojectsPageProps) {
  const { debouncedValue, isDebouncing, keyword, setKeyword } =
    usePageSearchQuery("/dashboard/osprojects");
  return (
    <div className="min-h-screen flex h-full w-full gap-5 flex-col items-center ">
      <Helmet title="Collabs | osprojects" description="The list of Collabs | osprojects" />
      <ListPageHeader
        title="Osprojects"
        formTrigger={<CreateOsprojectsForm />}
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
          <OsprojectsList keyword={keyword} />
        </Suspense>
      </div>
    </div>
  );
}
