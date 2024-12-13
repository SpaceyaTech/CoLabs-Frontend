import astronaut from "../../assets/Astronaut-herosection.png";
import rocketIcon from "../../assets/rocket.png";
import { Link } from "@tanstack/react-router";

export const HeroSection = () => {
  return (
    <div
      data-test="HeroSection"
      className="flex flex-col items-center gap-4 p-4 md:gap-1 md:p-4 lg:flex lg:flex-row lg:justify-around"
    >
      <div className="lg:flex-0 p-4 lg:flex lg:w-1/2 lg:flex-col lg:gap-6">
        <h1 className="pb-2 text-[25px] font-bold text-heading md:text-[30px] lg:text-[55px] lg:leading-[60.5px]">
          Making open-source contribution fun again
        </h1>
        <p className="font-ff-inconsolata text-lg font-bold leading-6 text-brand-gray-8 lg:text-xl">
          Open-source is the fastest way to get the job experience you need.
          Colabs is the platform that makes open-source contribution fun and
          competitive.
        </p>
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
        className="mt-4 md:mt-6 lg:h-auto lg:max-w-[30%] lg:flex-1 lg:items-center lg:justify-center lg:object-contain"
      />
    </div>
  );
};
