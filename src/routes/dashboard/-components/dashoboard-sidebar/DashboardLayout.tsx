import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Outlet } from "@tanstack/react-router";
import { DashboardSidebarHeader } from "./DashboardSidebarHeader";
import { DashboardSidebarLinks } from "./DashboardSidebarLinks";
import { TSRBreadCrumbs } from "@/lib/tanstack/router/TSRBreadCrumbs";
import { DashboardTheme } from "./DashboardTheme";
import { DashboardLayoutHeader } from "../dashboard-layout/DashboardLayoutHeader";
import { DashboardSidebarActions } from "./DashboardSidebarActions";

interface DashboardLayoutProps {
  sidebar_props: React.ComponentProps<typeof Sidebar>;
}

export function DashboardLayout({ sidebar_props }: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <SidebarInset>
        <div className="h-full " >
        <header className="sticky top-0 z-30 flex w-full flex-col gap-2 bg-base-100">
          <DashboardLayoutHeader />
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <TSRBreadCrumbs />
          </div>
        </header>
        {/* main content */}
        <div className="flex  h-full w-full gap-2 ">
          <Sidebar className="top-[20%]" collapsible="icon" {...sidebar_props}>
            <SidebarHeader>
              <DashboardSidebarHeader />
            </SidebarHeader>
            <SidebarContent>
              <DashboardSidebarLinks />
            </SidebarContent>
            <SidebarFooter>
              {/* <ThemeToggle /> */}
              <DashboardTheme />
              <DashboardSidebarActions />
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          <Outlet />
        </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
