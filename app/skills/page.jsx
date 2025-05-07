import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsPage() {
  // Update skills based on resume
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript & TypeScript", level: 95 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "React Native", level: 80 },
        { name: "Redux", level: 85 },
        { name: "CSS (Styled Components, Module CSS)", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "AdonisJS", level: 80 },
        { name: "Loopback", level: 75 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Elastic Search", level: 70 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Azure DevOps", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "Linux Server Management", level: 75 },
        { name: "Nginx", level: 70 },
      ],
    },
  ]

  return (
    <div className="mx-auto py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Skills</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {skillCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="space-y-6">
            <h2 className="text-2xl font-bold">{category.category}</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        ))}
      </div>
    </div>
  )
}
