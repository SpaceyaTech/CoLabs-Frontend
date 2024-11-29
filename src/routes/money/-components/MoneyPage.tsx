
import { SearchBox } from "@/components/search/SearchBox";
import { Suspense } from "react";
import { ListPageHeader } from "@/components/wrappers/ListPageHeader";
import { Helmet } from "@/components/wrappers/custom-helmet";
import { usePageSearchQuery } from "@/hooks/use-page-searchquery";
import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { CreateMoneyForm } from "./form/create";
import { MoneyList } from "./list/MoneyList";

interface MoneyPageProps {
}

export function MoneyPage({}: MoneyPageProps) {
  const { debouncedValue, isDebouncing, keyword, setKeyword } =
    usePageSearchQuery("/money");
  return (
    <div className="min-h-screen flex h-full w-full gap-5 flex-col items-center ">
      <Helmet title="Collabs | money" description="The list of Collabs | money" />
      <ListPageHeader
        title="Money"
        formTrigger={<CreateMoneyForm />}
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
          <MoneyList keyword={keyword} />
        </Suspense>
      </div>
    </div>
  );
}
