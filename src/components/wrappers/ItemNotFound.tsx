import { ScanSearch } from "lucide-react";

interface ItemNotFoundProps {
label?: string;
icon?: React.ReactNode;    

}

export function ItemNotFound({label,icon}:ItemNotFoundProps){
return (
  <div className="flex flex-col items-center justify-center space-y-4 rounded-2xl  bg-base-300 p-8 text-center shadow-sm">
    {icon ?? <ScanSearch className="h-16 w-16 text-muted-foreground" />}
    <h2 className="text-2xl font-bold tracking-tight">
      No {label || "items"} found
    </h2>
    <p className="max-w-sm text-muted-foreground">
      We couldn't find any {label || "items"} matching your search. Try
      adjusting your filters or search terms.
    </p>
  </div>
);
}
