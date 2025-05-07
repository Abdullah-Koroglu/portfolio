import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background ">
      <div className="w-2/3 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Abdullah Koroglu. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Abdullah-Koroglu" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/abdullah-javascript/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:abdullah34koroglu@gmail.com">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
