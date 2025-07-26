import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/os-projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">OS Projects</h1>
      <p className="text-lg">Welcome to the OS Projects page!</p>
    </div>
  )
}
