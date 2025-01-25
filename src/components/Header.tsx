import { Link } from "react-router-dom"

import { ThemeToggle } from '@/components/ThemeToggle'

import { Button } from "./ui/button"

export function Header() {

  return (
    <nav className="sticky top-0 h-40 bg-white dark:bg-zinc-950 flex justify-between items-center">
      <div>
        <Button asChild variant="link" size="icon">
          <Link to="/">home</Link>
        </Button>

        <Button asChild variant="link">
          <Link to="/projects">projects</Link>
        </Button>
      </div>

      <ThemeToggle />
    </nav>
  )
}
