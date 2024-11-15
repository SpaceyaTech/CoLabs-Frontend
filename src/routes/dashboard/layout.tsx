import { createFileRoute } from '@tanstack/react-router'
import { DashboardLayout } from './-components/dashoboard-sidebar/DashboardLayout'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})
