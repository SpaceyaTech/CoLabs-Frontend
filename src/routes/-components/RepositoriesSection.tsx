import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { cn } from "@/components/lib/utils";
import { CustomIcons } from "@/components/wrappers/custom-icons";

export type Project = {
  repository: string;
  description: string;
  languages: string[];
  issuesCount: number;
  link: string;
};

export const ALL_LANGS = "All";

type Props = {
  projects: Project[]; // get 6 projects
};
export default function RepositoriesSection({ projects }: Props) {
  const [selectedLanguage, setSelectedLanguage] = useState(ALL_LANGS);
  const [searchTerm, setSearchTerm] = useState("");

  const filterLanguages = useMemo(
    () => [ALL_LANGS, ...new Set(projects.flatMap((p) => p.languages))],
    [projects],
  );

  const searchedProjects = useMemo(() => {
    if (selectedLanguage === ALL_LANGS && searchTerm.length < 2) {
      return projects;
    }

    return projects.filter((p) => {
      const matchesSearchTerm =
        p.repository.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());

      if (selectedLanguage === ALL_LANGS) {
        return matchesSearchTerm;
      }

      return matchesSearchTerm && p.languages.includes(selectedLanguage);
    });
  }, [projects, searchTerm, selectedLanguage]);

  return (
    <section className="border-y border-brand-green-5 px-5 pb-16 pt-5">
      <h2 className="text-center text-[28px]/8 font-semibold text-brand-gray-8 md:text-[32px]/[38px]">
        Access the largest directory of open-source projects
      </h2>
      <p className="text-sm/base mt-[10px] text-center text-brand-gray-1/80">
        Use advanced filters to find a project you love and make your first
        commit message.
      </p>

      <div className="mx-auto mt-[30px] w-full rounded-[12px] border border-brand-green-5 bg-brand-1/20 px-5 py-10 lg:max-w-[1256px] lg:px-6 lg:py-[55px]">
        <div className="mx-auto max-w-[1030px]">
          <div className="mx-auto flex w-full max-w-[690px] items-center gap-3 rounded-[12px] border border-brand-green-1/80 bg-brand-gray-3/15 px-5 py-4 md:px-6">
            <CustomIcons.search className="size-4 shrink-0" />
            <input
              type="text"
              name="project-search"
              data-testid="project-search"
              className="flex-1 bg-transparent text-sm/[18px] text-brand-gray-2 focus:outline-none"
              placeholder="Search project"
              onChange={(e) => {
                const value = e.target.value.trim();
                if (value !== searchTerm) {
                  setSearchTerm(value);
                }
              }}
            />
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-3 overflow-x-auto scroll-smooth">
              {filterLanguages.map((lang) => (
                <button
                  key={lang}
                  data-testid={`btn-filter-${lang}`}
                  className={cn(
                    "btn-filter min-w-[40px] shrink-0 whitespace-nowrap rounded-full border px-2.5 py-1 font-ff-poppins text-sm text-white",
                    lang === selectedLanguage
                      ? "border-brand-green-2/80 bg-brand-gray-7"
                      : "border-brand-gray-9/80",
                  )}
                  onClick={() => {
                    if (lang === selectedLanguage) return;
                    setSelectedLanguage(lang);
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-[30px] grid gap-x-8 gap-y-[30px] md:grid-cols-2 lg:grid-cols-3">
            {searchedProjects.map((project, index) => (
              <div
                key={index}
                className="project relative isolate overflow-hidden rounded-[12px] border border-brand-green-5/80 bg-brand-gray-4/[.53] px-4 pb-5 pt-7"
              >
                <CustomIcons.ossIcon className="absolute right-0 top-0 -z-[1]" />
                <div className="flex justify-end">
                  <span className="rounded-full border border-brand-gray-9/80 px-2.5 py-1 font-ff-poppins text-sm text-white">
                    {project.issuesCount} Issues
                  </span>
                </div>
                <div className="mb-5 mt-[105px] space-y-2">
                  <p className="text-lg/[21px] font-semibold text-brand-gray-5">
                    {project.repository}
                  </p>
                  <p className="text-sm/4 text-white">{project.description}</p>
                  <p className="text-sm/4 text-brand-gray-6">
                    Lang: {project.languages.join(", ")}
                  </p>
                </div>

                <Link
                  to={project.link}
                  data-testid={"learn-more-link"}
                  className="block w-max rounded-[30px] border border-brand-green-3 bg-brand-green-4 px-4 py-2"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
