import astronaut from "@/assets/Astronaut-herosection.png";
import rocketIcon from "@/assets/rocket.png";
import fred from "@/assets/hero-section/fred.png";
import ian from "@/assets/hero-section/ian.png";
import katrina from "@/assets/hero-section/katrina.png";
import sharon from "@/assets/hero-section/sharon.png";
import { Link } from "@tanstack/react-router";

export const HeroSection = () => {
  //array of collaborators
  const collaborators = [fred, ian, katrina, sharon];
  return (
    //border border-red-500
    <div
      data-test="HeroSection"
      className="flex flex-col min-h-screen items-center gap-4 p-4 md:mt-2 md:p-5 lg:mt-4 lg:flex lg:flex-row lg:justify-around"
    >
      <div className="flex flex-col gap-4 p-4 lg:flex lg:w-1/2 lg:flex-col lg:gap-6">
        <h1 className="pb-2 text-[25px] font-bold text-heading md:text-[30px] lg:text-[55px] lg:leading-[60.5px]">
          Making open-source contribution fun again
        </h1>
        <p className="font-ff-inconsolata text-lg font-bold leading-6 text-brand-gray-8 lg:text-xl">
          Open-source is the fastest way to get the job experience you need.
          Colabs is the platform that makes open-source contribution fun and
          competitive.
        </p>

        {/* collaborators */}
        <div className="mt-2 flex flex-col items-start justify-center gap-2 md:flex-row md:items-center md:justify-center lg:justify-start">
          {/* Loop thru the array of collaborators to display them */}
          <div className="relative flex">
            {collaborators.map((collaborator, index) => (
              <img
                key={index}
                src={collaborator}
                alt="Collaborator"
                className={`h-12 w-12 rounded-full object-cover ${
                  index !== 0 ? "-ml-2" : ""
                }`}
              />
            ))}
          </div>

          <p className="font-text-brand-gray-10 text-sm font-medium">
            500+ contributors and counting
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-2 md:flex-row md:justify-around lg:justify-start lg:gap-4">
          <Link
            to="/auth/signup"
            search={{ returnTo: "/dashboard" }}
            className="btn bg-brand-green-6 px-4 py-2 text-white md:w-[40%] lg:w-auto lg:text-lg"
          >
            Join Colabs
          </Link>
          <Link
            to="/dashboard/hackathons"
            className="btn bg-brand-green-8 px-4 py-2 text-brand-green-7 outline outline-1 outline-brand-green-8 md:w-[40%] lg:w-auto lg:text-lg"
          >
            Launch a Hackathon <img src={rocketIcon} alt="Rocket icon" />
          </Link>
        </div>
      </div>

      <img
        src={astronaut}
        alt="Standing robot"
        className="mt-4 md:h-auto md:max-w-[50%] lg:max-w-[30%] lg:items-center lg:justify-center lg:object-contain"
      />
    </div>
  );
};
