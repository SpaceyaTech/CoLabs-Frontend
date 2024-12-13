import { Link, useRouterState } from "@tanstack/react-router";
import Nprogress from "./nprogress/Nprogress";

interface LandingPageNavbarProps {}

export function LandingPageNavbar({}: LandingPageNavbarProps) {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });

  return (
    <header className="bg-base-200/520 sticky top-0 z-30 flex w-full flex-col items-center justify-between">
      <nav className="flex h-full w-full items-center justify-between gap-5 p-2 px-5">
        <Link to="/" className="btn btn-link btn-sm">
          <img src="/colabs.png" alt="logo" className="h-8 w-fit" />
        </Link>
        <div className="flex items-center gap-5">
          <Link
            to="/auth"
            search={{ returnTo: "/dashboard" }}
            className="btn btn-sm"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            search={{ returnTo: "/dashboard" }}
            className="btn btn-primary btn-sm"
          >
            Sign up
          </Link>
        </div>
      </nav>
      <Nprogress isAnimating={isLoading} />
    </header>
  );
}
