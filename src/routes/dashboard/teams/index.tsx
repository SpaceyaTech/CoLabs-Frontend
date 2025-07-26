import { Helmet } from '@/components/wrappers/custom-helmet';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/teams/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <Helmet title="Dashboard - Teams" description="Dashboard - Teams" />
      <h1 className="text-4xl font-bold">Teams</h1>
      <p className="text-lg">Welcome to the teams page!</p>
    </div>
  );
}
