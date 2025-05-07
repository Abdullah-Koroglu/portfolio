import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Paylisher",
      description: "A mobile application data analytics platform",
      image: "/images/paylisher.png",
      tags: ["React", "Next Js", "Shadcn", "Tailwind", "Redux"],
      liveUrl: "paylisher.com",
    },
    {
      title: "Ad Nouveau",
      description: "A marketing company's portolio website with a custom CMS",
      image: "/images/ad.png",
      tags: ["React", "Next Js", "Node.js", "Strapi", "TailwindCSS"],
      liveUrl: "ad-nouveau.com",
    },
    {
      title: "Tal Psychology",
      description: "A psychology clinic's web application for patients' listening needs with a custom CMS",
      image: "/images/tal.png",
      tags: ["React", "Next Js", "Node.js", "Strapi", "TailwindCSS"],
      liveUrl: "talpsikoloji.com",
    },
    {
      title: "Glorious Gaming",
      description: "Worked in the world's one of the biggest gaming equipment company's e-commerce website",
      image: "/images/gg1.png",
      tags: ["Shopify", "HydrogenJs", "Sanity", "React", "Node.js"],
      liveUrl: "gloriousgaming.com",
    },
    {
      title: "Zahra Sophia",
      description: "Built a website for a clothing brand with shopify",
      image: "/images/zs2.png",
      tags: ["Shopify", 'Liquid', 'CSS'],
      liveUrl: "zahrasophia.com",
    },
    {
      title: "ASPOWER",
      description: "Built a website for one of the biggest power companies in Turkey with a custom CMS",
      image: "/images/asp.png",
      tags: ["React", "Next Js" ,"Node.js", "Strapi", "TailwindCSS"],
      liveUrl: "aspower.com.tr",
    },
  ]

  return (
    <div className="mx-auto w-full py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>

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
    </div>
  )
}
