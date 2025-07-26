import ColabsLogo from "@/assets/logo-container.png";
import XIcon from "@/assets/x-icon.png";
import LinkedinIcon from "@/assets/linkedin-icon.png";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="" data-test="Footer">
      <div className="mb-[200px] flex flex-col md:flex-row md:items-center md:justify-between lg:justify-around">
        <div className="flex md:w-[25%] w-full items-center justify-center gap-4">
          {/* Social Icons */}
          <Link to="/" className="z-10">
            <img src={ColabsLogo} alt="Colabs logo" />
          </Link>
          <a
            href="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10"
          >
            <img
              src={XIcon}
              alt="X Icon"
              className="z-10 h-6 w-6 object-contain"
            />{" "}
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10"
          >
            <img
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="h-6 w-6 object-contain"
            />
          </a>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          {/* Internal Links */}
          <div className="my-5 flex flex-col gap-2 text-[#feffff] md:flex-row md:items-center md:gap-3 md:pr-4 lg:justify-between lg:gap-6">
            <Link to="/">About</Link>
            <Link to="/dashboard/hackathons">Hackathons</Link>
            <Link to="/dashboard/leaderboards">Leaderboard</Link>
            <Link to="/">Privacy & Terms</Link>
            <Link to="/">Cookies</Link>
          </div>
          {/* Footer copyright notice */}
          <p data-test="FooterCopyright" className="text-xs font-medium text-[#BEB8B8] md:text-center md:text-sm">
            &copy; {new Date().getFullYear()} Colabs by SpaceYaTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
