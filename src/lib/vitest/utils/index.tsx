import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { render } from "@testing-library/react";
import React from "react";

/**
 * Utility function for rendering a React component with routing context using `@tanstack/react-router`.
 * Useful for testing components that rely on routing or are part of a routed application.
 */
export const renderWithRouter = (Comp: React.ComponentType) => {
  const rootRoute = createRootRoute();

  const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Comp />,
  });

  const router = createRouter({
    routeTree: rootRoute.addChildren([indexRoute]),
  });

  return render(
    <RouterProvider
      router={
        // suppress router type mismatch
        router as unknown as Parameters<typeof RouterProvider>[0]["router"]
      }
    />,
  );
};
