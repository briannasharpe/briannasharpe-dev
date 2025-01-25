import { useTheme } from "@/components/theme-provider"

import { Button } from "@/components/ui/button"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="">
      {/* <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> */}
      <FontAwesomeIcon icon={faSun} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
      <FontAwesomeIcon icon={faMoon} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
