import { useTheme } from "@/lib/tanstack/router/use-theme";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {}

export function ThemeToggle({}: ThemeToggleProps) {
  const { theme, updateTheme } = useTheme();
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
    <div className="flex items-center justify-between gap-2 w-full">
      <div className="hidden md:flex">
        {import.meta.env.DEV && (
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
        )}
      </div>
      <button onClick={() => transitionColors()} className="btn">
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}
