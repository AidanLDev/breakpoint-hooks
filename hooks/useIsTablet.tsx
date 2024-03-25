import { useEffect, useState } from "react";

export default function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    setIsTablet(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setIsTablet(event.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return isTablet;
}
