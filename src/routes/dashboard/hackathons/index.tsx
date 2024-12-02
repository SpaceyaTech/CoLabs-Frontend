import { Helmet } from '@/components/wrappers/custom-helmet';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/hackathons/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <Helmet title="Dashboard - Hackathons" description="Dashboard - Hackathons" />
      <h1 className="text-4xl font-bold">Hackathons</h1>
      <p className="text-lg">Welcome to the hackathons page!</p>
    </div>
  );
}
