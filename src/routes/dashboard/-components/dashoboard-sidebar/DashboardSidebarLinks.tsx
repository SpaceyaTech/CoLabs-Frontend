import { dashboard_routes } from "@/components/navigation/routes";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar-extras";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link, useLocation } from "@tanstack/react-router";
import { Plus } from "lucide-react";

interface DashboardSidebarLinksProps {}

export function DashboardSidebarLinks({}: DashboardSidebarLinksProps) {
  const { state, setOpen, setOpenMobile, isMobile } = useSidebar();
  const { pathname } = useLocation();
  return (
    <SidebarGroup className="h-full bg-base-100">
      <SidebarGroupLabel className="sr-only">Dashboard</SidebarGroupLabel>
      <SidebarMenu className="gap-3">
        {dashboard_routes.map((item) => {
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild>
                <TooltipProvider>
                  <Tooltip
                    defaultOpen={false}
                    delayDuration={10}
                    disableHoverableContent
                  >
                    <TooltipTrigger
                      asChild
                      className={
                        pathname === item.href
                          ? `flex w-full gap-3 rounded-lg bg-primary/30 p-1`
                          : `flex w-full gap-3 rounded-sm p-1 hover:bg-base-300`
                      }
                    >
                      <span className="justify-betweenrounded-sm flex h-full w-full items-center gap-3 p-1">
                        <Link
                          className="flex w-full gap-3 rounded-sm"
                          to={item.href}
                          onClick={() => {
                            if (isMobile) {
                              setOpen(false);
                              setOpenMobile(false);
                            }
                          }}
                        >
                          <button className="size-6 text-primary">
                            {item.icon}
                          </button>
                          {/* {isMobile&&<span className="text-lg">{item.name}</span>} */}
                          {(state === "expanded" || isMobile) && (
                            <span className="text-base">{item.name}</span>
                          )}
                        </Link>
                        {item.href === "/dashboard/os-projects" && <Plus />}
                        {item.href === "/dashboard/teams" && <Plus />}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent
                      className={(state === "expanded" || isMobile)?"hidden":""}
                      side={"right"}
                    >
                      {item.name}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
