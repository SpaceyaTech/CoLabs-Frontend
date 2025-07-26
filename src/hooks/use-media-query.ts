import { useState, useEffect } from "react";

type CommonmediaQueries =
  | "(min-width: 640px)"
  | "(min-width: 768px)"
  | "(min-width: 1024px)"
  | "(min-width: 1280px)"
  | "(min-width: 1536px)";

export function useMediaQuery(query: CommonmediaQueries | (string & {})) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMediaChange = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener("change", handleMediaChange);

    // Cleanup on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaChange);
    };
  }, [query]);

  return matches;
}
