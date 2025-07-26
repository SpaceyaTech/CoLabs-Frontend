import { useSidebar } from "@/components/ui/sidebar-extras";
import { DashboardLayoutActions } from "../dashboard-layout/DashboardLayoutActions";
import { DashboardSidebaruser } from "./DashboardSidebaruser";

interface DashboardSidebarActionsProps {

}

export function DashboardSidebarActions({}:DashboardSidebarActionsProps){
const {state,isMobile} = useSidebar();
return (
  <div className="flex w-full flex-col items-center justify-center">
{(state==="expanded" && isMobile)&&    <DashboardLayoutActions />}
    <DashboardSidebaruser />
  </div>
);
}
