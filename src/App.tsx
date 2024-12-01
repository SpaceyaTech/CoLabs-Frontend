import { RouterProvider } from "@tanstack/react-router";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useViewer } from "./lib/tanstack/query/use-viewer";
import { queryClient, router } from "./main";

export function App() {
  useEffect(() => {
    // other view transition styles include "angled", "wipe", "slides", "flip", "vertical"
    // currently doesn't work in firefox
    document.documentElement.dataset.style = "vertical";
    themeChange(false);
  }, []);

  const viewer = useViewer();
  return (
    <>
      <RouterProvider
        router={router}
        defaultPreload="intent"
        context={{
          queryClient,
          viewer: viewer.userQuery.data,
        }}
      />
    </>
  );
}
