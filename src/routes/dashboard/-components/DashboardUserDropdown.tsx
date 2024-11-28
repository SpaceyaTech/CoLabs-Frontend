import { BadgeCheck, Bell, ChevronsUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MutationButton } from "@/lib/tanstack/query/MutationButton";
import { useSidebar } from "@/components/ui/sidebar";
import { useViewer } from "@/lib/tanstack/query/use-viewer";

interface DashboardUserDropdownProps {
    compact?: boolean;
}

export function DashboardUserDropdown({compact}: DashboardUserDropdownProps) {
const { isMobile } = useSidebar();
  const { userQuery, logoutMutation } = useViewer();
  const user = userQuery?.data?.record;
  if(!user){
    return null
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="flex p-2 gap-2 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user.avatarUrl} alt={user.username} />
            <AvatarFallback className="rounded-lg">
              {user.username.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className={`flex p-1 flex-1 justify-between items-center gap-1 ${compact ? "hidden" : ""}`}>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{user.username}</span>
            <span className="truncate text-xs">{user.email}</span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.avatarUrl} alt={user.username} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.username}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck />
            Account
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <MutationButton
            className="btn-error max-w-[98%]"
            onClick={() => logoutMutation.mutate()}
            label="Logout"
            mutation={logoutMutation}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
