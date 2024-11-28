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

const ALL_LANGS = "All";

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
    <section className="border-brand-green-5 border-y px-5 pb-16 pt-5">
      <h2 className="text-brand-gray-8 text-center text-[31px]/[37px] font-semibold">
        Access the largest directory of open-source projects
      </h2>
      <p className="text-sm/base text-brand-gray-1/80 mt-[10px] text-center">
        Use advanced filters to find a project you love and make your first
        commit message.
      </p>

      <div className="border-brand-green-5 bg-brand-1/20 mx-auto mt-[30px] w-full rounded-[12px] border px-5 py-10 lg:max-w-[1256px] lg:px-6 lg:py-[55px]">
        <div className="mx-auto max-w-[1030px]">
          <div className="border-brand-green-1/80 bg-brand-gray-3/15 mx-auto flex w-full max-w-[690px] items-center gap-3 rounded-[12px] border px-5 py-4 md:px-6">
            <CustomIcons.search className="size-4 shrink-0" />
            <input
              type="text"
              className="text-brand-gray-2 flex-1 bg-transparent text-sm/[18px] focus:outline-none"
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
            <div className="flex items-center gap-3 overflow-x-scroll">
              {filterLanguages.map((lang) => (
                <button
                  key={lang}
                  className={cn(
                    "min-w-[40px] shrink-0 whitespace-nowrap rounded-full border px-2.5 py-1 font-ff-poppins text-sm text-white",
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
                className="border-brand-green-5/80 bg-brand-gray-4/[.53] relative isolate overflow-hidden rounded-[12px] border px-4 pb-5 pt-7"
              >
                <CustomIcons.ossIcon className="absolute right-0 top-0 -z-[1]" />
                <div className="flex justify-end">
                  <span className="border-brand-gray-9/80 rounded-full border px-2.5 py-1 font-ff-poppins text-sm text-white">
                    {project.issuesCount} Issues
                  </span>
                </div>
                <div className="mb-5 mt-[105px] space-y-2">
                  <p className="text-brand-gray-5 text-lg/[21px] font-semibold">
                    {project.repository}
                  </p>
                  <p className="text-sm/4 text-white">{project.description}</p>
                  <p className="text-brand-gray-6 text-sm/4">
                    Lang: {project.languages.join(", ")}
                  </p>
                </div>

                <Link
                  to={project.link}
                  className="border-brand-green-3 bg-brand-green-4 block w-max rounded-[30px] border px-4 py-2"
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
