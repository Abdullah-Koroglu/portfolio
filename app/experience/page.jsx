import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  const experiences = [
    {
      position: "Frontend Developer",
      company: "Paylisher",
      location: "Istanbul, Turkey",
      period: "06/2024 - Present",
      description:
        "Spearheaded the refactoring of core components in a Next.js application, enhancing both state management efficiency and UI/UX consistency.",
      responsibilities: [
        "Streamlined state management complexity by implementing Redux, ensuring a scalable and maintainable codebase",
        "Leveraged ShadCN UI components to create sleek, reusable, and accessible designs, tailored for diverse use cases",
        "Established a collaborative relationship with cross-functional teams, delivering features that exceeded user expectations",
      ],
      technologies: ["Next.js", "React", "Redux", "ShadCN UI", "TypeScript"],
    },
    {
      position: "Freelancer Web Developer",
      company: "Ad-Nouveau",
      location: "Istanbul, Turkey",
      period: "01/2024 - 06/2024",
      description:
        "Developed and deployed multiple websites and web apps for various clients from different businesses.",
      responsibilities: [
        "Developed websites with their CMS and Admin panel for flexibility",
        "Maintained and updated apps regularly on clients' needs",
        "Worked hand to hand with the business team and proposed and applied technical solutions",
      ],
      technologies: ["React", "Node.js", "CMS", "Admin Panels"],
    },
    {
      position: "Full Stack Web Developer",
      company: "Glorious",
      location: "Texas, United States",
      period: "07/2023 - 01/2024",
      description:
        "Spearheaded Shopify development projects using React, contributing to the seamless operation of an e-commerce website.",
      responsibilities: [
        "Efficiently managed daily tasks through the integration of Sanity, ensuring optimal website performance and user experience",
        "Facilitated the transition to the advanced framework, HydrogenJS, demonstrating adaptability and expertise in implementing cutting-edge technologies",
        "Leveraged Node.js to optimize and develop backend functions, enhancing system efficiency and contributing to the overall scalability",
      ],
      technologies: ["React", "Shopify", "HydrogenJS", "Node.js", "Sanity"],
    },
    {
      position: "Full Stack Web Developer",
      company: "Insivia",
      location: "Ohio, United States",
      period: "04/2022 - 04/2023",
      description:
        "Contributed to diverse projects with various tech stacks, languages, and frameworks, including React, Node.js, PHP and different UI libraries.",
      responsibilities: [
        "Led the development of a 'Subscription-based Marketing Tool' and a 'Building Management Tool' designed for NASA's facilities",
        "Revamped the application's design and functionality, integrating an Admin panel for managing internal videos and courses",
        "Successfully updated the database and backend structure to align with evolving business requirements, transitioning to a micro-service architecture with Docker",
        "Implemented all backend entities and database tables while designing reusable frontend components",
      ],
      technologies: ["React", "Node.js", "Adonis", "Loopback", "PHP", "Laravel/Lumen", "Styled-Components", "Docker"],
    },
    {
      position: "Full Stack Web Developer",
      company: "New Mind Information Management Systems",
      location: "Istanbul, Turkey",
      period: "03/2021 - 06/2022",
      description:
        "Fulfilled the role of a proactive Full Stack Developer and Product Owner, responsible for delivering requested features on both client and server sides.",
      responsibilities: [
        "Used ReactJS and NodeJS, ensuring seamless deployment on the live system",
        "Collaborated with various teams, facilitating the integration of shared databases and services such as Redis, ElasticSearch, Tesseract-ocr",
        "Played a pivotal role in shaping the codebase architecture, database tables, and system functionalities",
        "Prioritized and delegated tasks to developers during sprint-based periods, ensuring effective task management",
      ],
      technologies: ["React", "Node.js", "Redis", "ElasticSearch", "Tesseract-ocr"],
    },
    {
      position: "JavaScript Developer",
      company: "Freelance",
      location: "Remote",
      period: "01/2019 - 02/2021",
      description:
        "Managed multiple end-to-end projects independently, leveraging a diverse range of JavaScript libraries and frameworks.",
      responsibilities: [
        "Worked with React, Next.js, Bootstrap, React Native, Node.js and Electron.js",
        "Transitioned into Full Stack Development during this period",
        "Driven by a passion for actively participating in every phase of a project and gaining comprehensive insights into the architecture",
      ],
      technologies: ["React", "Next.js", "React Native", "Node.js", "Electron.js", "Bootstrap"],
    },
  ]

  return (
    <div className="mx-auto py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Work Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <CardTitle>{exp.position}</CardTitle>
                <Badge variant="outline">{exp.period}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">{exp.company}</p>
                <p className="text-muted-foreground">{exp.location}</p>
              </div>

              <p>{exp.description}</p>

              <div>
                <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
