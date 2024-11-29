
import { createFileRoute } from '@tanstack/react-router'
import { OneMoneyPage } from '@/routes/money/-components/onemoney/OneMoneyPage'

export const Route = createFileRoute('/money/$money/')({
  component: OneMoneyPage
})

  