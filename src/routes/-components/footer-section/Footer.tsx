import ColabsLogo from "@/assets/logo-container.png";
import XIcon from "@/assets/x-icon.png";
import LinkedinIcon from "@/assets/linkedin-icon.png";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="mt-8 pl-4 md:mt-48 lg:mt-96" data-test="Footer">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:justify-around">
        <div className="flex items-center justify-start gap-4">
          {/* Social Icons */}
          <Link to="/">
            <img src={ColabsLogo} alt="Colabs logo" />
          </Link>
          <a href="http://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src={XIcon} alt="X Icon" className="h-6 w-6 object-contain" />{" "}
          </a>
          <a
            href="http://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="h-6 w-6 object-contain"
            />
          </a>
        </div>

        {/* Internal Links */}
        <div className="my-5 flex flex-col gap-2 text-[#feffff] md:flex-row md:items-center md:gap-3 md:pr-4 lg:justify-between lg:gap-6">
          <Link to="/">About</Link>
          <Link to="/dashboard/hackathons">Hackathons</Link>
          <Link to="/dashboard/leaderboards">Leaderboard</Link>
          <Link to="/">Privacy & Terms</Link>
          <Link to="/">Cookies</Link>
        </div>
      </div>

      {/* Footer copyright notice */}
      <p className="mb-8 text-xs font-medium text-[#BEB8B8] md:text-center md:text-sm">
        &copy; 2024 Colabs by SpaceYaTech. All rights reserved.
      </p>
    </footer>
  );
}
