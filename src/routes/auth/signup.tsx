import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

const searchparams = z.object({
  returnTo: z.string(),
});
export const Route = createFileRoute("/auth/signup")({
  component: SignupPage,
  validateSearch: (search) => searchparams.parse(search),
  async beforeLoad(ctx) {
    const viewer = ctx.context?.viewer;
    const returnTo = ctx.search?.returnTo ?? "/";
    if (viewer?.record) {
      throw redirect({ to: returnTo });
    }
  },
});

interface SignupProps {}

export function SignupPage({}: SignupProps) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
signup logic
    </div>
  );
}
