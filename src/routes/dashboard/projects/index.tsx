import { Helmet } from '@/components/wrappers/custom-helmet';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <Helmet title="Dashboard - Projects" description="Dashboard - Projects" />
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-lg">Welcome to the projects page!</p>
    </div>
  );
}
