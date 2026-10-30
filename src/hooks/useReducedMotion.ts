import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/** Devuelve true cuando el sistema del usuario pide reducir las animaciones. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia(QUERY).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const onChange = () => setReduced(mediaQuery.matches);

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
