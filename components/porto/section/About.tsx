import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <section id="hero" className="flex flex-col items-center text-center">
      <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for new projects
      </div>

      <h1 className="animate-fade-up delay-100 mt-8 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Hi, I&apos;m Rico Wijaya
      </h1>

      <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
        Full-stack web developer specializing in{' '}
        <span className="font-medium text-foreground">Laravel</span>, skilled in{' '}
        <span className="font-medium text-foreground">Next.js</span> and{' '}
        <span className="font-medium text-foreground">React</span>. I build dynamic, user-friendly
        applications focused on performance and scalability.
      </p>

      <div className="animate-fade-up delay-300 mt-9 flex flex-col items-center gap-4 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="group h-11 rounded-full px-6 text-base shadow-sm"
        >
          <a href="#projects">
            View my work
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="group h-11 rounded-full px-6 text-base"
        >
          <a href="/rico.pdf" download>
            <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Download CV
          </a>
        </Button>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full transition-transform hover:-translate-y-0.5"
          >
            <a href="https://github.com/bezicalboy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full transition-transform hover:-translate-y-0.5"
          >
            <a href="https://linkedin.com/in/bezicalboy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full transition-transform hover:-translate-y-0.5"
          >
            <a href="mailto:bezicalboy@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
