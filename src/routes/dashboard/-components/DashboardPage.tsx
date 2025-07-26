import { dashboard_routes } from "@/components/navigation/routes";
import { Link } from "@tanstack/react-router";


interface DashboardPageProps {}
dashboard_routes

export function DashboardPage({}: DashboardPageProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <ul className="grid h-full w-full grid-cols-1 justify-center gap-2 p-[5%] md:grid-cols-2 lg:grid-cols-2">
        {dashboard_routes.map((link) => {
          return (
            <Link
              key={link.name}
              to={link.href}
              className="hover:text-accent-text flex h-full items-center justify-center gap-2 rounded-xl bg-base-200 p-[5%] text-4xl hover:bg-base-300"
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
