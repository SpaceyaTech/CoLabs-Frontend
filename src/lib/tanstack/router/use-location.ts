import { useLocation } from "@tanstack/react-router";

export function useReturnTo() {
  const location = useLocation();
  const returnToPath = location.pathname + location.searchStr;
  return {location,returnToPath}
}
