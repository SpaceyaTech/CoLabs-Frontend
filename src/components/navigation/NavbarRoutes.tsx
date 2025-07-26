import { Link } from "@tanstack/react-router";
import { routes } from "./routes";
import { Home } from "lucide-react";

interface NavbarRoutesProps {}

export function NavbarRoutes({}: NavbarRoutesProps) {
  return (
    <div className="flex h-full w-full items-center justify-center gap-2">
      <Link to="/" className="btn btn-link btn-sm">
        <Home />
      </Link>
      <div className="flex h-full w-full items-center justify-center gap-2">
        {routes.map((route) => (
          <Link
            key={route.name}
            to={route.href}
            className="btn btn-link btn-sm flex items-center justify-center bg-base-300"
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
