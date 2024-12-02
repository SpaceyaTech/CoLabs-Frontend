import { Helmet } from '@/components/wrappers/custom-helmet';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/inbox/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <Helmet title="Dashboard - Inbox" description="Dashboard - Inbox" />
      <h1 className="text-4xl font-bold">Inbox</h1>
      <p className="text-lg">Welcome to the inbox page!</p>
    </div>
  );
}
