import { Link } from "@tanstack/react-router";
import rocketIcon from "../../assets/rocket.png";
import robot from "../../assets/robot assistant standing and looking.png";
import ellipse from "../../assets/ellipse.png";
export const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:gap-10 lg:relative lg:flex-row lg:p-[100px] lg:pl-[20%]">
      <div className="border-blue-700 lg:flex lg:flex-col lg:gap-6">
        <p className="text-[32px] font-bold text-white lg:text-[55px] lg:leading-[60.5px]">
          Experience counts. Get it on Colabs.
        </p>
        <p className="font-ff-inconsolata text-lg font-bold leading-6 text-[#9f9c9c] lg:text-xl">
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
            className="bg-brand-green-8 outline-brand-green-8 btn px-4 py-2 text-brand-green-7 outline outline-1 md:w-[40%] lg:w-auto lg:text-lg"
          >
            Launch a Hackathon <img src={rocketIcon} alt="Rocket icon" />
          </Link>
        </div>
      </div>

      <img
        src={robot}
        alt="Standing robot"
        className="mt-4 pl-[30%] md:mt-4 md:w-[50%] md:pl-[15%] lg:z-10 lg:w-auto"
      />
      <img
        src={ellipse}
        alt="ellipse background"
        className="hidden lg:absolute lg:bottom-0 lg:top-10 lg:-z-10  lg:translate-y-[30%]"
      />
    </div>
  );
};
