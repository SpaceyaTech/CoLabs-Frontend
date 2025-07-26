import { useSidebar } from "@/components/ui/sidebar-extras";
import { useTheme } from "@/lib/tanstack/router/use-theme";
import {Sun,Moon} from "lucide-react"
interface DashboardThemeProps {

}

export function DashboardTheme({}:DashboardThemeProps){
  const { theme, updateTheme } = useTheme();
    const { state } = useSidebar();
  function transitionColors() {
    if (typeof window !== "undefined") {
      try {
        document.startViewTransition(() => {
          const newTheme = theme === "light" ? "dark" : "light";
          document.documentElement.dataset.theme = newTheme;
          updateTheme(newTheme);
        });
      } catch (error) {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = newTheme;
        updateTheme(newTheme);
      }
    }
  }
  return (
    <div className="flex w-full items-center justify-between gap-2">
        {(import.meta.env.DEV && state === "expanded") && (
      <div className="hidden md:flex">
          <select
            className="select select-bordered select-sm max-w-xs"
            onChange={(e) =>
              (document.documentElement.dataset.style = e.target.value)
            }
          >
            <option value="default">Default</option>
            <option value="vertical">Vertical</option>
            <option value="wipe">Wipe</option>
            <option value="angled">Angled</option>
            <option value="flip">Flip</option>
            <option value="slides">Slides</option>
          </select>
      </div>
        )}
      <button onClick={() => transitionColors()} className="">
        {theme === "light" ? <Moon className="size-"/> : <Sun className="size-"/>}
      </button>
    </div>
  );
}
