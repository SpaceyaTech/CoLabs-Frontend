import { Button } from "@/components/ui/button";
import {  Plus } from "lucide-react";
interface DashboardpostProjectButtonProps {}

export function DashboardpostProjectButton({}: DashboardpostProjectButtonProps) {
  return (
    <Button>
      Post a project <Plus />
    </Button>
  );
}
