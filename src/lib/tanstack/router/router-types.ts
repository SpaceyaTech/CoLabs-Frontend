import { routeTree } from "@/routeTree.gen";
import { ParseRoute } from "@tanstack/react-router";

export type ValidRoutes = ParseRoute<typeof routeTree>['fullPath'];
