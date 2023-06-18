import { useAtom } from "jotai";
import darkModeAtom from "@/atoms/darkModeAtom";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";

function ThemeChanger() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="absolute top-4 right-4 md:right-8 text-xl ring-1 p-1.5 rounded-full ring-slate-500"
    >
      {darkMode ? <BsMoonStars /> : <FiSun />}
    </button>
  );
}

export default ThemeChanger;
