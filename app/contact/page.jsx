"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone, User, Users } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="py-12 w-full">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Me</h1>

      <div className="w-full space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Here are the ways you can reach me directly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">abdullah34koroglu@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+90 551 108 64 83</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Istanbul, Turkey</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium mb-3">Connect with me</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/Abdullah-Koroglu" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/abdullah-javascript/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:abdullah34koroglu@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium">Working Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
              <p className="text-muted-foreground">Weekend: By appointment</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional References</CardTitle>
            <CardDescription>Colleagues who can vouch for my skills and work ethic</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <Users className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Süleyman Aydın</h3>
                <p className="text-muted-foreground">Manager at Paylisher</p>
                <p className="text-muted-foreground">+90 532 693 53 56</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <User className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium">Abdullah Faruk Çiftler</h3>
                <p className="text-muted-foreground">Senior Product Manager at Boyner</p>
                <p className="text-muted-foreground">+90 506 631 68 42</p>
              </div>
            </div>

            {/* You can add more references here as needed */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
