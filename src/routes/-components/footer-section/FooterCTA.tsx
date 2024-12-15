import { Link } from "@tanstack/react-router";
import rocketIcon from "@/assets/rocket.png";
import robot from "@/assets/robot-assistant.png";
import ellipse from "@/assets/ellipse.png";


export const FooterCTA = () => {
  return (
    <div
      data-test="FooterCTA"
      className="relative flex min-h-[150vh] items-center gap-4 p-4 md:gap-10 md:p-10 lg:flex lg:flex-row lg:justify-around"
    >
      <div className="absolute left-[5%] top-[2%] md:top-[5%] lg:top-[20%] z-10 p-4 lg:flex lg:w-1/2 lg:flex-col lg:gap-6">
        <h1 className="text-[32px] font-bold text-heading lg:text-[55px] lg:leading-[60.5px]">
          Experience counts. Get it on Colabs.
        </h1>
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
            className="btn bg-brand-green-8 px-4 py-2 text-brand-green-7 outline outline-1 outline-brand-green-8 md:w-[40%] lg:w-auto lg:text-lg"
          >
            Launch a Hackathon <img src={rocketIcon} alt="Rocket icon" />
          </Link>
        </div>
      </div>

      <img
        src={robot}
        alt="Standing robot"
        className="absolute z-10 -right-[15%] sm:right-[5%] md:right-[2%] top-[40%] md:top-[35%] lg:top-[10%]"
      />
      <img
        src={ellipse}
        alt="ellipse background"
        className="right-0 absolute top-[50%] md:top-[50%] w-full md:w-[65%] lg:top-[10%] lg:w-[50%] "
      />
    </div>
  );
};
