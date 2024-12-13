import { LandingPageNavbar } from "@/components/navigation/LandingPageNavbar";
import { Link } from "@tanstack/react-router";
import RepositoriesSection from "./RepositoriesSection";

import { projects } from "@/data/projects";
import { ToolsSection } from "./tools-section/ToolsSection";
import { FooterCTA } from "./FooterCTA";
import Footer from "./Footer";

export function HomePage() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <LandingPageNavbar />
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-3 font-ff-poppins">
        {/* landing page goes here  */}
        <p className="rounded-2xl border border-primary p-5 text-3xl">
          Landing page goes here
        </p>
        <Link to="/dashboard" className="btn btn-outline">
          Go to Dashboard
        </Link>
      </div>
      <ToolsSection />
      <RepositoriesSection projects={projects} />
      <FooterCTA />
      <Footer />
    </div>
  );
}
