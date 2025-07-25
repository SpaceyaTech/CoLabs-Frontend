import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

type FormValues = {
  projectName: string;
  repoLink: string;
  projectBio: string;
  techStack: string[];
  projectType: string;
  license: string;
  monetized: string;
};

const ProjectForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [techStack, setTechStack] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = (data: FormValues) => {
    console.log("Form Data: ", { ...data, techStack });
    reset();
    setTechStack([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && inputValue.trim()) {
      e.preventDefault();
      if (techStack.length < 5) {
        setTechStack([...techStack, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleRemoveTag = (index: number) => {
    setTechStack((prevStack) => prevStack.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-full max-h-screen w-full flex-col xl:flex-row">
      <img
        className="hidden object-cover xl:block xl:h-full xl:w-1/2"
        src="group.png"
        alt="A focused young man working on a laptop next to server equipment"
      />
      <div className="flex w-full flex-col p-6 md:p-8 xl:w-1/2">
        <a
          href="/"
          className="mb-6 flex w-24 items-center rounded-3xl border border-gray-600 bg-green-50 p-2 text-green-600"
        >
          <FaRegArrowAltCircleLeft className="mr-1" /> Home
        </a>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-full max-w-2xl space-y-4"
        >
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Submit your project
          </h2>

          <div className="grid gap-4">
            <div>
              <label
                htmlFor="projectName"
                className="block text-sm font-medium text-gray-700"
              >
                Project name
              </label>
              <input
                {...register("projectName", {
                  required: "Project name is required",
                })}
                id="projectName"
                type="text"
                placeholder="Full name"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
              />
              {errors.projectName && (
                <p className="text-sm text-red-600">
                  {errors.projectName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="repositoryLink"
                className="block text-sm font-medium text-gray-700"
              >
                Repository Link
              </label>
              <input
                {...register("repoLink", {
                  required: "Repository link is required",
                })}
                id="repositoryLink"
                type="url"
                placeholder="https://github.com/username/repo"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
              />
              {errors.repoLink && (
                <p className="text-sm text-red-600">
                  {errors.repoLink.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="projectBio"
                className="block text-sm font-medium text-gray-700"
              >
                Project Bio
              </label>
              <textarea
                {...register("projectBio", { maxLength: 150 })}
                rows={2}
                id="projectBio"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500"
              />
              <span className="float-right text-xs text-gray-500">
                Max 150 words
              </span>
            </div>

            <div>
              <label
                htmlFor="whatIsYourTechStack"
                className="block text-sm font-medium text-gray-700"
              >
                What is your tech stack? (List up to 5)
              </label>
              <div className="mt-1 flex flex-wrap items-center gap-2 rounded-md border border-gray-300 px-2 py-1 focus-within:ring-2 focus-within:ring-green-500">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="capitalize flex items-center space-x-1 rounded-full bg-green-200 px-2 py-1 text-xs text-green-800"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(index)}
                      className="ml-1 text-lg text-green-500"
                    >
                      &times;
                    </button>
                  </span>
                ))}
                <input
                  id="whatIsYourTechStack"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    techStack.length < 5 ? "Separate with spaces" : ""
                  }
                  className="flex-grow border-none outline-none focus:ring-0"
                  disabled={techStack.length >= 5}
                />
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-gray-700">
                My project is
              </p>
              <Controller
                name="projectType"
                control={control}
                defaultValue="Private repository"
                render={({ field }) => (
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        {...field}
                        type="radio"
                        value="Open-source"
                        className="h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm">Open-source</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        {...field}
                        type="radio"
                        value="Private repository"
                        className="h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm">Private repository</span>
                    </label>
                  </div>
                )}
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-gray-700">
                My project is licensed under
              </p>
              <Controller
                name="license"
                control={control}
                defaultValue="Apache-license"
                render={({ field }) => (
                  <div className="flex flex-col space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        {...field}
                        type="radio"
                        value="Apache-license"
                        className="h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm">Apache License 2.0</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        {...field}
                        type="radio"
                        value="Eclipse-Public-License"
                        className="h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm">
                        Eclipse Public License 1.0 (EPL 1.0)
                      </span>
                    </label>
                  </div>
                )}
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-gray-700">
                My project is monetized
              </p>
              <Controller
                name="monetized"
                control={control}
                defaultValue="Yes"
                render={({ field }) => (
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        {...field}
                        type="radio"
                        value="Yes"
                        className="h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        {...field}
                        type="radio"
                        value="No"
                        className="h-4 w-4 text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-sm">No</span>
                    </label>
                  </div>
                )}
              />
            </div>
          </div>

          <button className="mt-6 w-full rounded-md bg-gradient-to-r from-green-700 to-green-600 px-6 py-3 text-sm font-medium text-white hover:from-green-800 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
