import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface DashboardLayoutSearchbarProps {}

export function DashboardLayoutSearchbar({}: DashboardLayoutSearchbarProps) {
  return (
    <div className="flex  items-center justify-center">
      <div className="flex items-center gap-2 rounded-[6px] border border-primary px-2">
        <Search />
        <Input
          placeholder="Search Colabs "
          className="w-full border-none "
        />
      </div>
    </div>
  );
}
