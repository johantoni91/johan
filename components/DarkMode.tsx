import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Fix hydration issue

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-2xl w-full dark:text-white"
    >
      {theme === "dark" ?
        <FaSun className="text-yellow-500 text-lg"/> :
        <FaMoon className="text-blue-500 text-lg"/>
      }
    </button>
  );
}
