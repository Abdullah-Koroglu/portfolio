import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EducationPage() {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Bursa Uludag University",
      location: "Bursa, Turkey",
      period: "Graduated 03/2023",
      description: "Completed comprehensive studies in computer science fundamentals and programming.",
    },
  ]

  const languages = [
    { name: "Turkish", proficiency: "Native" },
    { name: "English", proficiency: "B2" },
    { name: "Arabic", proficiency: "B2" },
    { name: "Spanish", proficiency: "A1" },
  ]

  // const certifications = [
  //   {
  //     name: "Full Stack Development",
  //     issuer: "Self-paced learning and professional experience",
  //     date: "2019-Present",
  //     description:
  //       "Continuous learning and application of full stack development technologies in professional settings.",
  //   },
  // ]

  return (
    <div className="py-12 w-full mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Education & Languages</h1>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle>{edu.degree}</CardTitle>
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <p className="font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{language.name}</h3>
                <p className="text-muted-foreground">{language.proficiency}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* <section>
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle>{cert.name}</CardTitle>
                  <Badge variant="outline">{cert.date}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">Issued by {cert.issuer}</p>
                <p>{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
    </div>
  )
}
