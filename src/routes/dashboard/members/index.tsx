import { Helmet } from '@/components/wrappers/custom-helmet';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/members/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <Helmet title="Dashboard - Members" description="Dashboard - Members" />
      <h1 className="text-4xl font-bold">Members</h1>
      <p className="text-lg">Welcome to the members page!</p>
    </div>
  );
}
