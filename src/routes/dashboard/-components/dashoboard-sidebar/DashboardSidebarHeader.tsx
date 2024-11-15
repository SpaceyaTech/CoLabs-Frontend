import { Castle, LayoutDashboard } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";
interface DashboardSidebarHeaderProps {}

export function DashboardSidebarHeader({}: DashboardSidebarHeaderProps) {
  const { state,setOpenMobile } = useSidebar();
    const { pathname } = useLocation();
    return (
      <div className="flex flex-col gap-3" onClick={() => {setOpenMobile(false)}}>
        <Link to="/" className="p-2">
          <img src="/colabs.png" alt="logo" className="h-fit w-fit" />
        </Link>
        <Link
          to="/dashboard"
          className={
            pathname === "/dashboard"
              ? `flex w-full cursor-pointer items-center gap-2 rounded-lg bg-primary/30 p-1 underline-offset-2 hover:underline`
              : `flex w-full cursor-pointer items-center gap-2 rounded-sm p-1 underline-offset-2 hover:bg-base-300 hover:underline`
          }

        >
          <LayoutDashboard className="text-primary"/>
          {state === "expanded" && (
            <h1 className="text-xl font-bold">Dashboard</h1>
          )}
        </Link>
      </div>
    );
}
