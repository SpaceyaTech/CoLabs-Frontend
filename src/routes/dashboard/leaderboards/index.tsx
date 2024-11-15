import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/leaderboards/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Leaderboards</h1>
      <p className="text-lg">Welcome to the leaderboards page!</p>
    </div>
  )
}
