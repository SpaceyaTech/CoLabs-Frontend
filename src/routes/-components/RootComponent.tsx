import { TailwindIndicator } from "@/components/navigation/tailwind-indicator";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import { TanStackRouterDevtools } from "./RouterDevttols";

export function RootComponent() {
  return (
    <div className="content min-h-screen bg-gradient-to-r from-base-100 via-primary/20 dark:via-primary/20 to-base-100 w-full">
      <Outlet />
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <TanStackRouterDevtools position="bottom-left" />
      <Toaster reverseOrder />
      <TailwindIndicator/>
    </div>
  );
}
