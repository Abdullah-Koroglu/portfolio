import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Paylisher",
    description: "A mobile application data analytics platform",
    image: "images/paylisher.png",
    tags: ["React", "Next Js", "Shadcn", "Tailwind", "Redux"],
    liveUrl: "https://paylisher.com",
  },
  {
    title: "Ad Nouveau",
    description: "A marketing company's portolio website with a custom CMS",
    image: "images/ad.png",
    tags: ["React", "Next Js", "Node.js", "Strapi", "TailwindCSS"],
    liveUrl: "https://ad-nouveau.com",
  },
  {
    title: "Tal Psychology",
    description: "A psychology clinic's web application for patients' listening needs with a custom CMS",
    image: "images/tal.png",
    tags: ["React", "Next Js", "Node.js", "Strapi", "TailwindCSS"],
    liveUrl: "https://talpsikoloji.com",
  },
  {
    title: "Glorious Gaming",
    description: "Worked in the world's one of the biggest gaming equipment company's e-commerce website",
    image: "images/gg1.png",
    tags: ["Shopify", "HydrogenJs", "Sanity", "React", "Node.js"],
    liveUrl: "https://gloriousgaming.com",
  },
  {
    title: "Zahra Sophia",
    description: "Built a website for a clothing brand with shopify",
    image: "images/zs2.png",
    tags: ["Shopify", 'Liquid', 'CSS'],
    liveUrl: "https://zahrasophia.com",
  },
  {
    title: "ASPOWER",
    description: "Built a website for one of the biggest power companies in Turkey with a custom CMS",
    image: "images/asp.png",
    tags: ["React", "Next Js" ,"Node.js", "Strapi", "TailwindCSS"],
    liveUrl: "https://aspower.com.tr",
  },
]

export default function Home() {
  return (
    <div className="py-12 md:py-20 w-full mx-auto">
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 mb-20">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-primary">Abdullah Koroglu</span>
          </h1>
          <h2 className="text-2xl font-medium text-muted-foreground">Full Stack Web Developer</h2>
          <p className="text-lg text-muted-foreground">
            Experienced software developer with 4+ years in corporate web application development and 1 year of
            successful freelancing. Skilled in JavaScript/TypeScript, React, Node.js, and frameworks like Express.js and
            Next.js. Proficient in building and deploying robust backends, web services, and databases.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild>
              <Link href="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/Abdullah Koroglu.pdf" target="_blank">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link href="https://github.com/Abdullah-Koroglu" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/abdullah-javascript/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:abdullah34koroglu@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
            <Image
              src="images/pp.jpeg"
              alt="Profile"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative w-full flex items-center h-full bg-slate-100 dark:bg-slate-800 shadow">
              <Image width={500} height={300} src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover object-top w-full" />
            </div>
            <CardHeader className={''}>
              <CardTitle className={'uppercase'}>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Full Stack Solutions",
              description:
                "Developing end-to-end applications with database integration using MongoDB, PostgreSQL, and MySQL.",
            },
            {
              title: "Frontend Development",
              description:
                "Building responsive and interactive user interfaces with React, Next.js, and other modern frameworks.",
            },
            {
              title: "Backend Development",
              description: "Creating robust server-side applications with Node.js, Express.js",
            },
          ].map((item, i) => (
            <Card key={i} className="p-6">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
