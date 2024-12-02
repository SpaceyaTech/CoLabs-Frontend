import { Helmet } from '@/components/wrappers/custom-helmet';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/os-projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <Helmet title="Dashboard - OS Projects" description="Dashboard - OS Projects" />
      <h1 className="text-4xl font-bold">OS Projects</h1>
      <p className="text-lg">Welcome to the OS Projects page!</p>
    </div>
  );
}
