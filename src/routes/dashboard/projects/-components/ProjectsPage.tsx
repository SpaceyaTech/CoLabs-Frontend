
import { SearchBox } from "@/components/search/SearchBox";
import { Suspense } from "react";
import { ListPageHeader } from "@/components/wrappers/ListPageHeader";
import { Helmet } from "@/components/wrappers/custom-helmet";
import { usePageSearchQuery } from "@/hooks/use-page-searchquery";
import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { CreateProjectsForm } from "./form/create";
import { ProjectsFallbackList, ProjectsList } from "./list/ProjectsList";

interface ProjectsPageProps {
}

export function ProjectsPage({}: ProjectsPageProps) {
  const { debouncedValue, isDebouncing, keyword, setKeyword } =
    usePageSearchQuery("/dashboard/projects");
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center gap-5">
      <Helmet
        title="Collabs | projects"
        description="The list of Collabs | projects"
      />
      <ListPageHeader
        title="Projects"
        formTrigger={<CreateProjectsForm />}
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
        <Suspense fallback={<ProjectsFallbackList />}>
          <ProjectsList keyword={keyword} />
        </Suspense>
      </div>
    </div>
  );
}
