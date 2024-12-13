
import { createFileRoute } from '@tanstack/react-router'
import { OneProjectsPage } from '@/routes/dashboard/projects/-components/oneprojects/OneProjectsPage'

export const Route = createFileRoute('/dashboard/projects/$projects/')({
  component: OneProjectsPage
})

  