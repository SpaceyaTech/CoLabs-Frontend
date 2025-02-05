import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod';
import { SignupComponent } from './-components/SignupComponent';

const searchparams = z.object({
  returnTo: z.string(),
});
export const Route = createFileRoute("/auth/signup")({
  validateSearch: (search) => searchparams.parse(search),
  component: RouteComponent,
});

function RouteComponent() {
  return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <SignupComponent/>
      </div>
    );
}
