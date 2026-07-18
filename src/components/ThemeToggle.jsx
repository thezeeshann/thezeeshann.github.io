import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../lib/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="flex items-center justify-center w-8 h-8 transition-colors border rounded-md border-bgSecondary dark:border-darkBgSecondary text-textSecondary dark:text-darkTextSecondary hover:text-primary"
    >
      {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
};

export default ThemeToggle;
