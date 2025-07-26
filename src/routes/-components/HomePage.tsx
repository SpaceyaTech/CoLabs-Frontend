import { LandingPageNavbar } from "@/components/navigation/LandingPageNavbar";
import { HeroSection } from "./HeroSection";
import RepositoriesSection from "./repos-sections/RepositoriesSection";
import { projects } from "@/data/projects";
import { ToolsSection } from "./tools-section/ToolsSection";
import { FooterCTA } from "./footer-section/FooterCTA";
import Footer from "./footer-section/Footer";

export function HomePage() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <LandingPageNavbar />
      <HeroSection />
      <ToolsSection />
      <RepositoriesSection projects={projects} />
      <FooterCTA />
      <Footer />
    </div>
  );
}
