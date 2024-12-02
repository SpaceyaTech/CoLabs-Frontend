import { Helmet } from '@/components/wrappers/custom-helmet';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/challenges/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <Helmet title="Dashboard - Challenges" description="Dashboard - Challenges" />
      <h1 className="text-4xl font-bold">Challenges</h1>
      <p className="text-lg">Welcome to the challenges page!</p>
    </div>
  );
}
