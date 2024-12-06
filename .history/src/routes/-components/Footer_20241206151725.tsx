import { Link } from "@tanstack/react-router";
import rocketIcon from "../../assets/rocket.png";
import robot from "../../assets/robot assistant standing and looking.png";
import ellipse from "../../assets/ellipse.png";
export const Footer = () => {
  return (
    <div className="relative flex flex-col gap-4 border border-red-400 p-4">
      <div className="border-blue-700">
        <p className="text-[36px] font-bold text-white">
          Experience counts. Get it on Colabs.
        </p>
        <p className="font-ff-inconsolata text-xl font-bold leading-7 text-[#9f9c9c]">
          Colabs is where you cut your teeth on enterprise projects. We have
          over 100 repositories on all tech tracks, carefully picked for you.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <Link
            to="/auth/signup"
            className="bg-brand-green-6 btn px-4 py-2 text-white"
          >
            Join Colabs for free
          </Link>
          <Link
            to="/dashboard/hackathons"
            className="outline-brand-green-5 text-brand-green-7 btn px-4 py-2 outline outline-1"
          >
            Launch a Hackathon <img src={rocketIcon} alt="Rocket icon" />
          </Link>
        </div>
      </div>

      <img
        src={robot}
        alt="Standing robot"
        className="z-10 mx-auto self-center border border-red-600"
      />
      <img src={ellipse} alt="ellipse background" className="absolute top-10" />
    </div>
  );
};


