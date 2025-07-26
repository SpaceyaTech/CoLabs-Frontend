import { useState } from "react";

export function useTheme() {
  const [theme, seTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return (
      document.documentElement.dataset.theme ?? ("light" as "light" | "dark")
    );
  });

  function updateTheme(newTheme: typeof theme) {
    if (typeof window !== "undefined") {
      document.documentElement.dataset.theme = newTheme;
      localStorage.setItem("theme", newTheme);
      seTheme(newTheme);
    }
  }
  return {
    theme,
    updateTheme,
  };
}
