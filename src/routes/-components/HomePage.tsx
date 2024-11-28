import { LandingPageNavbar } from "@/components/navigation/LandingPageNavbar";
import { Link } from "@tanstack/react-router";
import { ToolsSection } from "./tools-section/ToolsSection";

export function HomePage() {
  return (
    <div className="justify-center flex h-full min-h-screen w-full flex-col items-center">
        <LandingPageNavbar />
      <div className="font-ff-poppins justify-center gap-3 flex min-h-screen h-full w-full flex-col items-center">
        {/* landing page goes here  */}
        <p className="text-3xl  border border-primary rounded-2xl p-5">
          Landing page goes here
        </p>
        <Link to="/dashboard" className="btn btn-outline">Go to Dashboard</Link>
      </div>
      <ToolsSection/>
    </div>
  );
}
