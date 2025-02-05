import { useViewer } from "@/lib/tanstack/query/use-viewer";
import { Link } from "@tanstack/react-router";
import { CurrentUser } from "./CurrentUser";

interface LandingPageViewerProps {}

export function LandingPageViewer({}: LandingPageViewerProps) {
  const { viewer } = useViewer();
  if (viewer?.record) {
    return  <CurrentUser/>;
  }
  return (
    <div className="flex items-center gap-5">
      <Link
        to="/auth"
        search={{ returnTo: "/dashboard" }}
        className="btn btn-sm"
      >
        Login
      </Link>
      <Link
        to="/auth"
        search={{ returnTo: "/dashboard" }}
        className="btn btn-primary btn-sm"
      >
        Sign up
      </Link>
    </div>
  );
}
