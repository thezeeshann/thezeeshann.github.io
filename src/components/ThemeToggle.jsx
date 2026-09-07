import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../lib/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
      className="flex h-8 w-8 items-center justify-center rounded-full hairline text-muted transition-colors hover:bg-subtle hover:text-fg"
    >
      {theme === "dark" ? <FiSun size={14} /> : <FiMoon size={14} />}
    </button>
  );
};

export default ThemeToggle;
