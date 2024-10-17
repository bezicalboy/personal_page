import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Linkedin } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center text-center gap-8 animate-fade-up">
      <Avatar className="w-48 h-48">
        <AvatarImage src="/img/avatar.jpg" alt="rico" />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Hi, I&apos;m Rico Wijaya</h2>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
          Full-stack web developer specializing in Laravel, skilled in Next.js and React. I build dynamic, user-friendly applications focused on performance and scalability.
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
  );
};

export default About;
