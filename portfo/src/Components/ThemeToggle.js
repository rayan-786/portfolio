import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-200 text-slate-900 hover:bg-slate-300"
          : "bg-slate-800 text-yellow-300 hover:bg-slate-700"
      }`}
    >
      {theme === "light" ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;