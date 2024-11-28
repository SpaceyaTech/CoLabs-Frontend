import { Link } from "@tanstack/react-router";
import { DashboardLayoutSearchbar } from "./DashboardLayoutSearchbar";
import { DashboardLayoutActions } from "./DashboardLayoutActions";
import { DashboardUserDropdown } from "../DashboardUserDropdown";
import { DashboardpostProjectButton } from "./DashboardpostProjectButton";

interface DashboardLayoutHeaderProps {}

export function DashboardLayoutHeader({}: DashboardLayoutHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between gap-3 border-b border-b-primary p-1">
      <div className="hidden w-full items-center justify-between gap-3 md:flex">
        <Link to="/" className="p-4">
          <img src="/colabs.png" alt="logo" className="h-[54px] w-[195px]" />
        </Link>
        <DashboardLayoutSearchbar />
        <div className="hidden md:flex">
          <DashboardpostProjectButton />
        </div>
        <DashboardLayoutActions />
        <DashboardUserDropdown compact />
      </div>
      <div className="flex w-full flex-col gap-1 md:hidden">
        <div className="flex gap-3 w-full justify-between">
          <Link to="/" className="p-4">
            <img src="/colabs.png" alt="logo" className="h-[30px] w-[100px]" />
          </Link>
          <DashboardUserDropdown compact />
        </div>
        <div className="flex w-full justify-between gap-3 px-4">
          <DashboardLayoutSearchbar />
          <DashboardpostProjectButton />
        </div>
      </div>
    </div>
  );
}
