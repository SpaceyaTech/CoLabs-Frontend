import { createFileRoute } from '@tanstack/react-router'
import { SubmitProjectPage } from './-component/SubmitProjectPage'

export const Route = createFileRoute("/dashboard/projects/submit/")({
  component: SubmitProjectPage,
});

