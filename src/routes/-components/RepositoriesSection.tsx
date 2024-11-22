import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { cn } from "@/components/lib/utils";

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
            <svg
              className="size-4 shrink-0"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4531 15.5L10.7865 10.8333M12.342 6.94444C12.342 9.95133 9.90445 12.3889 6.89757 12.3889C3.89069 12.3889 1.45312 9.95133 1.45312 6.94444C1.45312 3.93756 3.89069 1.5 6.89757 1.5C9.90445 1.5 12.342 3.93756 12.342 6.94444Z"
                stroke="#989A9A"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

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
            {searchedProjects.map((project) => (
              <div className="relative isolate overflow-hidden rounded-[12px] border border-[#294740]/80 bg-[#413535]/[.53] px-4 pb-5 pt-7">
                <svg
                  className="absolute right-0 top-0 -z-[1]"
                  width="221"
                  height="191"
                  viewBox="0 0 221 191"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M80.8434 168.376C78.861 172.325 74.0387 173.939 70.2112 171.731C43.1576 156.131 22.1002 131.785 10.5934 102.584C-1.8936 70.8959 -2.25625 35.7155 9.57494 3.77632C21.4062 -28.1628 44.6001 -54.6172 74.7177 -70.5237C104.835 -86.4302 139.761 -90.6715 172.81 -82.4358C205.86 -74.2001 234.711 -54.066 253.843 -25.8869C272.975 2.2922 281.043 36.5369 276.503 70.2931C271.964 104.049 255.135 134.946 229.239 157.069C205.375 177.456 175.356 189.074 144.145 190.155C139.729 190.308 136.228 186.62 136.33 182.203L137.996 110.24C138.098 105.823 141.783 102.39 146.161 101.793C155.684 100.494 164.698 96.4891 172.09 90.1739C181.522 82.1156 187.652 70.8618 189.306 58.5664C190.959 46.271 188.02 33.7977 181.052 23.5337C174.083 13.2697 163.574 5.93603 151.536 2.93625C139.498 -0.063522 126.777 1.48133 115.807 7.27513C104.837 13.0689 96.3886 22.7047 92.0792 34.3383C87.7698 45.9718 87.9018 58.786 92.4501 70.3283C96.0145 79.3737 102.095 87.1401 109.895 92.756C113.481 95.3375 115.124 100.098 113.141 104.046L80.8434 168.376Z"
                    fill="#37947C"
                    fillOpacity="0.29"
                  />
                </svg>

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
