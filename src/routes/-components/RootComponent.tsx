import { TailwindIndicator } from "@/components/navigation/tailwind-indicator";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import { TanStackRouterDevtools } from "./RouterDevttols";

export function RootComponent() {
  return (
    <div className="content min-h-screen w-full bg-gradient-to-r from-base-100 via-primary/20 to-base-100 dark:via-primary/20">
      <ScrollRestoration/>
      <Outlet/>
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <TanStackRouterDevtools position="bottom-left" />
      <Toaster reverseOrder />
      <TailwindIndicator/>
    </div>
  );
}
