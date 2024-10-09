'use client';
import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Menu, Moon, Sun } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export function Portofolio() {
  const [activeSection, setActiveSection] = useState('about');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLinkProps {
    href: string;
    children: ReactNode;
  }

  const NavLink = ({ href, children }: NavLinkProps) => (
    <a href={href} className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${activeSection === href.slice(1) ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 flex flex-col items-center">
      <header className="sticky top-0 z-10 w-full backdrop-blur-sm bg-white/90 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold --font-poppins">BEZICAL</h1>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <NavLink href="#about">About</NavLink>
                </li>
                <li>
                  <NavLink href="#skills">Skills</NavLink>
                </li>
                <li>
                  <NavLink href="#projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink href="#contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="border-zinc-200 dark:border-zinc-800">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden border-zinc-200 dark:border-zinc-800">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Navigate through the portfolio sections</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6">
                  <NavLink href="#about">About</NavLink>
                  <NavLink href="#skills">Skills</NavLink>
                  <NavLink href="#projects">Projects</NavLink>
                  <NavLink href="#contact">Contact</NavLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-24 max-w-4xl">
        <section id="about" className="flex flex-col items-center text-center gap-8 animate-fade-up">
          <Avatar className="w-48 h-48">
            <AvatarImage src="/img/avatar.jpg" alt="rico" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-4xl font-bold mb-4">Hi, I&apos;m Rico Wijaya</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
            Passionate web developer specializing in Laravel, with proficiency in Next.js and React. I create dynamic, user-friendly applications, ensuring high performance and scalability. Committed to continuous learning and eager to contribute to innovative projects.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" className="border-zinc-200  dark:border-zinc-800">
                <a href="https://github.com/bezicalboy" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" className="border-zinc-200 dark:border-zinc-800">
                <a href="https://linkedin.com/in/bezicalboy" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="text-center animate-fade-up">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Laravel', 'PHP', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'Next.js', 'MySQL', 'Tailwind CSS', 'MongoDB', 'shadcn/ui', 'Git', 'Figma'].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-md py-2 px-4 duration-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-900 hover:text-white  hover:scale-110 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-all"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section id="projects" className="animate-fade-up">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: 'Laravel Movie Info', description: 'A Laravel api app using livewire to see movie,series and artist info using AMDB API', image: '/img/01.png', link: 'https://test1.com' },
              { title: 'Example 2', description: 'A productivity app created using Next.js and GraphQL', image: '/img/02.png', link: 'https://test2.com' },
              { title: 'Example 3', description: 'A customizable portfolio template for developers', image: '/img/03.png', link: 'https://test3.com' },
              { title: 'Weather Dashboard', description: 'Real-time weather app with geolocation and forecasts', image: '/placeholder.svg?height=200&width=400', link: 'https://test4.com' },
            ].map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden transition-all hover:shadow-lg dark:bg-zinc-800 dark:border-zinc-700">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0">
                  <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
                  <p className="p-4 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full group transition ease-in-out hover:scale-110 hover:bg-zinc-900 hover:text-white border-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 " /> View Project
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="text-center animate-fade-up">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <Card className="max-w-md mx-auto dark:bg-zinc-800 dark:border-zinc-700">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription className="dark:text-zinc-400">Feel free to reach out for collaborations or just a friendly hello</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start border-zinc-200 dark:border-zinc-700">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:bezicalboy@gmail.com" className="hover:underline">
                  bezicalboy@gmail.com
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start border-zinc-200 dark:border-zinc-700">
                <Linkedin className="mr-2 h-4 w-4" />
                <a href="https://id.linkedin.com/in/bezicalboy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/bezicalboy
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="w-full bg-zinc-100 dark:bg-zinc-800 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-zinc-600 dark:text-zinc-400">
          <p>&copy; 2024 Bezicalboy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
