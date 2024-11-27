import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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
  projects: Project[];
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
    <section className="border-y border-[#294740] px-5 pb-16 pt-5">
      <h2 className="text-center text-[31px]/[37px] font-semibold text-[#B3B8B7]">
        Access the largest directory of open-source projects
      </h2>
      <p className="text-sm/base mt-[10px] text-center text-[#C6C6C6]/80">
        Use advanced filters to find a project you love and make your first
        commit message.
      </p>

      <div className="mx-auto mt-[30px] w-full rounded-[12px] border border-[#294740] bg-[#383C3A]/20 px-5 py-10 lg:max-w-[1256px] lg:px-6 lg:py-[55px]">
        <div className="mx-auto max-w-[1030px]">
          <div className="mx-auto flex w-full max-w-[690px] items-center gap-3 rounded-[12px] border border-[#14A97C]/80 bg-[#8C9E99]/15 px-5 py-4 md:px-6">
            <CustomIcons.search className="size-4 shrink-0" />
            <input
              type="text"
              className="flex-1 bg-transparent text-sm/[18px] text-[#989A9A] focus:outline-none"
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
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={12}
              rewind={false}
              loop={false}
            >
              {filterLanguages.map((lang) => (
                <SwiperSlide key={lang} className="!w-max">
                  <button
                    className={cn(
                      "min-w-[40px] whitespace-nowrap rounded-full border px-2.5 py-1 font-ff-poppins text-sm text-white",
                      lang === selectedLanguage
                        ? "border-[#02FBB0]/80 bg-[#635D5D]"
                        : "border-[#f3faf8]/80",
                    )}
                    onClick={() => {
                      if (lang === selectedLanguage) return;
                      setSelectedLanguage(lang);
                    }}
                  >
                    {lang}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-[30px] grid gap-x-8 gap-y-[30px] md:grid-cols-2 lg:grid-cols-3">
            {searchedProjects.map((project, index) => (
              <div
                key={index}
                className="relative isolate overflow-hidden rounded-[12px] border border-[#294740]/80 bg-[#413535]/[.53] px-4 pb-5 pt-7"
              >
                <CustomIcons.ossIcon className="absolute right-0 top-0 -z-[1]" />
                <div className="flex justify-end">
                  <span className="rounded-full border border-[#f3faf8]/80 px-2.5 py-1 font-ff-poppins text-sm text-white">
                    {project.issuesCount} Issues
                  </span>
                </div>
                <div className="mb-5 mt-[105px] space-y-2">
                  <p className="text-lg/[21px] font-semibold text-[#DED6D6]">
                    {project.repository}
                  </p>
                  <p className="text-sm/4 text-white">{project.description}</p>
                  <p className="text-sm/4 text-[#B4B1B1]">
                    Lang: {project.languages.join(", ")}
                  </p>
                </div>

                <Link
                  to={project.link}
                  className="block w-max rounded-[30px] border border-[#19FDC7] bg-[#144E40] px-4 py-2"
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
