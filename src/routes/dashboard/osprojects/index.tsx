
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { OsprojectsPage } from "@/routes/dashboard/osprojects/-components/OsprojectsPage";

const searchparams = z.object({
  page: z.number().optional(),
  sq: z.string().optional(),
});

export const Route = createFileRoute("/dashboard/osprojects/")({
  validateSearch: (search) => searchparams.parse(search),
  component:OsprojectsPage
});

