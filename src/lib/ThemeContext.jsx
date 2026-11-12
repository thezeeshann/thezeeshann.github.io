import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export const ThemeContext = createContext(null);

const TRANSITION_MS = 400;

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const busy = useRef(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /**
   * Flips the theme. When `originEl` is given and the browser supports the
   * View Transitions API, the new theme is revealed as a circle growing out
   * of that element; otherwise the swap is instant.
   */
  const toggleTheme = useCallback(
    (originEl) => {
      if (busy.current) return;
      const next = theme === "dark" ? "light" : "dark";

      const apply = () => {
        // Toggle the class synchronously so the "after" snapshot is the new
        // theme, then let React catch its state up.
        document.documentElement.classList.toggle("dark", next === "dark");
        flushSync(() => setTheme(next));
      };

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (
        !originEl ||
        reduceMotion ||
        typeof document.startViewTransition !== "function"
      ) {
        setTheme(next);
        return;
      }

      busy.current = true;

      const { left, top, width, height } = originEl.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(apply);

      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${radius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: TRANSITION_MS,
              easing: "ease-in-out",
              fill: "forwards",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        })
        .catch(() => {
          // Transition was skipped or aborted; the theme still switched.
        });

      transition.finished
        .catch(() => {})
        .finally(() => {
          busy.current = false;
        });
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
