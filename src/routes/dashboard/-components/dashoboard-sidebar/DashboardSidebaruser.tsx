"use client";

import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { DashboardUserDropdown } from "../DashboardUserDropdown";
export function DashboardSidebaruser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DashboardUserDropdown/>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
