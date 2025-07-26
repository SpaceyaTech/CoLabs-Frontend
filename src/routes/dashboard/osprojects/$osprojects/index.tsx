
import { createFileRoute } from '@tanstack/react-router'
import { OneOsprojectsPage } from '@/routes/dashboard/osprojects/-components/oneosprojects/OneOsprojectsPage'

export const Route = createFileRoute('/dashboard/osprojects/$osprojects/')({
  component: OneOsprojectsPage
})

  