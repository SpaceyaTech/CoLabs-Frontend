import { Link } from "@tanstack/react-router";
import { DashboardLayoutSearchbar } from "./DashboardLayoutSearchbar";
import { DashboardLayoutActions } from "./DashboardLayoutActions";
import { DashboardUserDropdown } from "../DashboardUserDropdown";
import { DashboardpostProjectButton } from "./DashboardpostProjectButton";

interface DashboardLayoutHeaderProps {}

export function DashboardLayoutHeader({}: DashboardLayoutHeaderProps) {
  return (
    <div
      data-test="DashboardLayoutHeader"
      className="flex w-full items-center justify-between gap-3 border-b border-b-primary p-1"
    >
      {/* Desktop layout */}
      <div
        data-test="DashboardLayoutHeaderDesktop"
        className="hidden w-full items-center justify-between gap-3 md:flex"
      >
        <Link data-test="DashboardLayoutHeaderLogo" to="/" className="p-4">
          <img src="/colabs.png" alt="logo" className="h-[54px] w-[195px]" />
        </Link>
        <DashboardLayoutSearchbar />
        <div className="hidden md:flex">
          <DashboardpostProjectButton />
        </div>
        <DashboardLayoutActions />
        <DashboardUserDropdown compact />
      </div>
      {/* Movile layout */}
      <div
        data-test="DashboardLayoutHeaderMobile"
         className="flex w-full flex-col gap-1 md:hidden"
      >
        <div className="flex w-full justify-between gap-3">
          <Link to="/" className="p-4">
            <img src="/colabs.png" alt="logo" className="h-[30px] w-[100px]" />
          </Link>
          <DashboardUserDropdown compact />
        </div>
        <div className="flex w-full justify-between gap-3 px-4">
          <DashboardLayoutSearchbar data-test="DashboardLayoutSearchbarMobile" />
          <DashboardpostProjectButton data-test="DashboardpostProjectButtonMobile" />
        </div>
      </div>
    </div>
  );
}
