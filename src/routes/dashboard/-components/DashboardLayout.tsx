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
import { DashboardSidebarHeader } from "./dashoboard-sidebar/DashboardSidebarHeader";
import { DashboardSidebarLinks } from "./dashoboard-sidebar/DashboardSidebarLinks";
import { TSRBreadCrumbs } from "@/lib/tanstack/router/TSRBreadCrumbs";
import { DashboardTheme } from "./dashoboard-sidebar/DashboardTheme";
import { DashboardLayoutHeader } from "./dashboard-layout/DashboardLayoutHeader";
import { DashboardSidebarActions } from "./dashoboard-sidebar/DashboardSidebarActions";
import { Helmet } from "@/components/wrappers/custom-helmet";

interface DashboardLayoutProps {
  sidebar_props: React.ComponentProps<typeof Sidebar>;
}

export function DashboardLayout({ sidebar_props }: DashboardLayoutProps) {

  return (
    <SidebarProvider defaultOpen={false}>
      <Helmet title="Dashboard" description="Dashboard" />
      <SidebarInset >
        <div className="h-full " >
        <header className="sticky top-0 z-30 flex w-full flex-col gap-2 bg-base-100">
          <DashboardLayoutHeader />
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" data-test="DashboardLayoutSidebarTrigger"/>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <TSRBreadCrumbs />
          </div>
        </header>
        {/* main content */}
        <div className="flex  h-full w-full gap-2 ">
          <Sidebar 
          data-test="DashboardLayoutSidebar" 
          className="top-[20%]" 
          collapsible="icon" {...sidebar_props}>
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
