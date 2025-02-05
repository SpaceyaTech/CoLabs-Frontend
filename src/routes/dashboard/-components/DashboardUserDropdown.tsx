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
import { useSidebar } from "@/components/ui/sidebar-extras";
import { useViewer } from "@/lib/tanstack/query/use-viewer";
import { Link } from "@tanstack/react-router";
import { useReturnTo } from "@/lib/tanstack/router/use-location";

interface DashboardUserDropdownProps {
  compact?: boolean;
}

export function DashboardUserDropdown({ compact }: DashboardUserDropdownProps) {
  const { isMobile } = useSidebar();
  const { userQuery, logoutMutation } = useViewer();
  const user = userQuery?.data?.record;
  const { returnToPath } = useReturnTo();

  if (!user) {
    return (
      <div className="flex items-center gap-5">
        <Link
          to="/auth"
          search={{ returnTo: returnToPath }}
          className="btn btn-sm"
        >
          Login
        </Link>
        <Link
          to="/auth"
          search={{ returnTo: returnToPath }}
          className="btn btn-primary btn-sm"
        >
          Sign up
        </Link>
      </div>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild data-test="DashboardUserDropdown">
        <div className="flex gap-2">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={user?.image ?? "/profile.png"} alt={user.name} />
            <AvatarFallback className="rounded-lg">
              {user.name.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div
            className={`flex flex-1 items-center justify-between gap-1 p-1 ${compact ? "hidden" : ""}`}
          >
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-4 w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl border-0 bg-gradient-to-r from-primary/40 via-base-100 to-primary/40 p-2"
        side={isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={user.image ?? "/profile.png"} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name}</span>
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
        {/* <DropdownMenuItem>
        </DropdownMenuItem> */}
        <MutationButton
          className="btn-error max-w-[98%]"
          onClick={() => logoutMutation.mutate()}
          label="Logout"
          mutation={logoutMutation}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
