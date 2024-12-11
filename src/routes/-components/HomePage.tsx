import { LandingPageNavbar } from "@/components/navigation/LandingPageNavbar";
import RepositoriesSection from "./repositories-section/RepositoriesSection";
import { projects } from "@/data/projects";
import { ToolsSection } from "./tools-section/ToolsSection";
import { FooterCTA } from "./footer-section/FooterCTA";
import Footer from "./footer-section/Footer";
import { HeroSectionPlaceHolder } from "./hero-section/HeroSectionPlaceHolder";

export function HomePage() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <LandingPageNavbar />
      {/* <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-3 font-ff-poppins">
        <p className="rounded-2xl border border-primary p-5 text-3xl">
          Landing page goes here
        </p>
        <Link to="/dashboard" className="btn btn-outline">
          Go to Dashboard
        </Link>
      </div> */}
      <HeroSectionPlaceHolder/>
      <ToolsSection />
      <RepositoriesSection projects={projects} />
      <FooterCTA />
      <Footer />
    </div>
  );
}
