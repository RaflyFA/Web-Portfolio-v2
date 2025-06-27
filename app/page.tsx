"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Sun,
  Moon,
  Code,
  Palette,
  Monitor,
  Smartphone,
  Figma,
  Chrome,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Dashboard admin untuk toko online dengan fitur manajemen produk dan analitik penjualan",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan drag & drop dan kolaborasi tim",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Restaurant Website",
      description: "Website restoran dengan sistem reservasi dan menu digital interaktif",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Portfolio Design System",
      description: "Design system komprehensif untuk aplikasi portfolio dengan komponen reusable",
      tech: ["Figma", "React", "Storybook"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const developmentSkills = [
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Palette },
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "React", icon: Code },
    { name: "Next.js", icon: Code },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Node.js", icon: Code },
  ]

  const designSkills = [
    { name: "Figma", icon: Figma },
    { name: "Adobe XD", icon: Monitor },
    { name: "Photoshop", icon: Palette },
    { name: "Illustrator", icon: Palette },
    { name: "Prototyping", icon: Smartphone },
    { name: "UI Design", icon: Monitor },
    { name: "UX Research", icon: Chrome },
    { name: "Wireframing", icon: Monitor },
  ]

  const certificates = [
    {
      title: "Frontend Web Development",
      institution: "Dicoding Indonesia",
      year: "2023",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "UI/UX Design Fundamentals",
      institution: "Google UX Design Certificate",
      year: "2023",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "React Developer Certification",
      institution: "Meta Front-End Developer",
      year: "2024",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      title: "JavaScript Algorithms",
      institution: "freeCodeCamp",
      year: "2023",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const testimonials = [
    {
      quote: "Rafly sangat detail dalam mengerjakan proyek UI/UX. Hasil kerjanya selalu memuaskan dan tepat waktu.",
      name: "Sarah Johnson",
      position: "Product Manager, TechCorp",
    },
    {
      quote: "Kemampuan coding Rafly sangat baik, terutama dalam React dan TypeScript. Sangat recommended!",
      name: "Ahmad Rizki",
      position: "Senior Developer, StartupXYZ",
    },
    {
      quote: "Desain yang dibuat Rafly selalu user-friendly dan modern. Sangat memahami kebutuhan pengguna.",
      name: "Lisa Chen",
      position: "Design Lead, CreativeStudio",
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Rafly FA</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                Tentang
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
                Proyek
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-primary transition-colors">
                Keahlian
              </button>
              <button onClick={() => scrollToSection("certificates")} className="hover:text-primary transition-colors">
                Sertifikat
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="hover:text-primary transition-colors">
                Testimoni
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                Kontak
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block px-3 py-2 hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 hover:text-primary transition-colors"
                >
                  Tentang
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block px-3 py-2 hover:text-primary transition-colors"
                >
                  Proyek
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block px-3 py-2 hover:text-primary transition-colors"
                >
                  Keahlian
                </button>
                <button
                  onClick={() => scrollToSection("certificates")}
                  className="block px-3 py-2 hover:text-primary transition-colors"
                >
                  Sertifikat
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block px-3 py-2 hover:text-primary transition-colors"
                >
                  Testimoni
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 hover:text-primary transition-colors"
                >
                  Kontak
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Rafly FA"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-8"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Rafly FA</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Crafting clean UIs with solid code</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download CV
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")}>
                Lihat Proyek
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Tentang Saya</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Saya adalah seorang Junior Front-End Web Developer dan UI/UX Designer yang passionate dalam menciptakan
                pengalaman digital yang menarik dan fungsional. Dengan pengalaman lebih dari 2 tahun di bidang web
                development dan design, saya selalu berusaha menghadirkan solusi yang tidak hanya indah secara visual,
                tetapi juga user-friendly dan performant.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Saya memiliki keahlian dalam berbagai teknologi modern seperti React, Next.js, TypeScript, dan tools
                design seperti Figma. Saya percaya bahwa kolaborasi yang baik antara design dan development adalah kunci
                untuk menciptakan produk digital yang luar biasa.
              </p>
              <Button className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download CV
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Rafly FA - About"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proyek Terbaru</h2>
            <p className="text-lg text-muted-foreground">
              Beberapa proyek yang telah saya kerjakan dengan passion dan dedikasi tinggi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Kunjungi Proyek
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Keahlian</h2>
            <p className="text-lg text-muted-foreground">
              Tools dan teknologi yang saya kuasai untuk menciptakan solusi digital terbaik
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Development Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Development</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {developmentSkills.map((skill, index) => (
                  <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <skill.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Design</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {designSkills.map((skill, index) => (
                  <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <skill.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                    <p className="font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sertifikat</h2>
            <p className="text-lg text-muted-foreground">
              Sertifikasi dan pencapaian yang mendukung keahlian profesional saya
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-[4/3] relative mb-4">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>{cert.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Testimoni</h2>
            <p className="text-lg text-muted-foreground">
              Apa kata klien dan rekan kerja tentang kolaborasi dengan saya
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <blockquote className="text-lg mb-6 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mari Berkolaborasi</h2>
            <p className="text-lg text-muted-foreground">
              Punya proyek menarik? Mari diskusikan bagaimana saya bisa membantu mewujudkannya
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>Isi form di bawah ini dan saya akan merespons dalam 24 jam</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nama Lengkap
                    </label>
                    <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="nama@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Ceritakan tentang proyek atau kolaborasi yang Anda inginkan..."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">rafly.fa@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Telepon</p>
                      <p className="text-muted-foreground">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Lokasi</p>
                      <p className="text-muted-foreground">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Media Sosial</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">© {new Date().getFullYear()} Rafly FA. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
