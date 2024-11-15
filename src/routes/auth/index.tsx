import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";
const searchparams = z.object({
  returnTo: z.string(),
});
export const Route = createFileRoute("/auth/")({
  component: SigninPage,
  validateSearch: (search) => searchparams.parse(search),
  async beforeLoad(ctx) {
    const viewer = ctx.context?.viewer;
    const returnTo = ctx.search?.returnTo ?? "/";
    if (viewer?.record) {
      throw redirect({ to: returnTo });
    }
  },
});

interface SigninPageProps {}

export function SigninPage({}: SigninPageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
     sign in logic
    </div>
  );
}
