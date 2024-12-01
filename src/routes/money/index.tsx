
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { MoneyPage } from "@/routes/money/-components/MoneyPage";

const searchparams = z.object({
  page: z.number().optional(),
  sq: z.string().optional(),
});

export const Route = createFileRoute("/money/")({
  validateSearch: (search) => searchparams.parse(search),
  component:MoneyPage
});

