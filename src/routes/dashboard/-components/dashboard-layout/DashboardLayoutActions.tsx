
import { BellIcon,Settings, UserPlus } from "lucide-react";


interface DashboardLayoutActionsProps {

}

export function DashboardLayoutActions({}:DashboardLayoutActionsProps){
return (
  <div className="flex items-center justify-evenly gap-3">

    <div className="flex gap-5">
      <UserPlus />
      <Settings />
      <BellIcon/>
    </div>
  </div>
);
}
