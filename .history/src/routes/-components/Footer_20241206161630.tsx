import { Link } from "@tanstack/react-router";
import rocketIcon from "../../assets/rocket.png";
import robot from "../../assets/robot assistant standing and looking.png";
import ellipse from "../../assets/ellipse.png";
export const Footer = () => {
  return (
    <div className="relative flex flex-col items-center gap-4 p-4 md:gap-10 lg:flex-row lg:p-[100px] lg:pl-[20%]">
      <div className="border-blue-700 lg:flex lg:w-1/2 lg:flex-col lg:gap-6">
        <p className="text-[32px] font-bold text-white lg:text-[55px] lg:leading-[60.5px]">
          Experience counts. Get it on Colabs.
        </p>
        <p className="font-ff-inconsolata text-lg font-bold leading-6 text-[#9f9c9c] lg:text-xl lg:leading-7">
          Colabs is where you cut your teeth on enterprise projects. We have
          over 100 repositories on all tech tracks, carefully picked for you.
        </p>
        <div className="mt-5 flex flex-col gap-2 md:flex-row md:justify-around lg:justify-start lg:gap-4">
          <Link
            to="/auth/signup"
            search={{ returnTo: "/dashboard" }}
            className="btn bg-brand-green-6 px-4 py-2 text-white md:w-[40%] lg:w-auto lg:text-lg"
          >
            Join Colabs for free
          </Link>
          <Link
            to="/dashboard/hackathons"
            className="btn btn-bg-px-4 py-2 text-brand-green-7 outline outline-1 outline-brand-green-5 md:w-[40%] lg:w-auto lg:text-lg"
          >
            Launch a Hackathon <img src={rocketIcon} alt="Rocket icon" />
          </Link>
        </div>
      </div>

      <img
        src={robot}
        alt="Standing robot"
        className="mt-4 pl-[30%] md:mt-4 md:w-[50%] md:pl-[15%]"
      />
      <img
        src={ellipse}
        alt="ellipse background"
        className="absolute top-10 hidden lg:bottom-0 lg:block lg:h-[422px] lg:w-[662px] lg:rounded-full lg:opacity-50 lg:blur-[334px]"
      />
    </div>
  );
};
