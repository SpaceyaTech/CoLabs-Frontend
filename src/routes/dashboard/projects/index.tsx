
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ProjectsPage } from "@routes/dashboard/projects/-components/ProjectsPage";

const searchparams = z.object({
  page: z.number().optional(),
  sq: z.string().optional(),
});

export const Route = createFileRoute("/dashboard/projects/")({
  validateSearch: (search) => searchparams.parse(search),
  component:ProjectsPage
});

