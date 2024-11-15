import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/inbox/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Inbox</h1>
      <p className="text-lg">Welcome to the inbox page!</p>
    </div>
  )
}
