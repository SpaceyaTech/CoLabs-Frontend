import * as React from "react";

export function useSessionStorage<T>(key: string, initialValue: T) {
  const state = React.useState<T>(() => {
    const stored = sessionStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  React.useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state[0]));
  }, [key, state]);

  return state;
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const state = React.useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state[0]));
  }, [key, state]);
}
