import { createFileRoute } from '@tanstack/react-router'
import { DashBoardPage } from './-components/dashboard-page/DashBoardPage'

export const Route = createFileRoute('/dashboard/')({
  component: DashBoardPage,
  meta:({})=>[
    {
      title: 'Dashboard',
      description: 'Dashboard',
    }
  ]
})

