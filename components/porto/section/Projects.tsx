import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="animate-fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: 'Laravel Movie Info',
            description: 'A Laravel APP, providing real-time access to movie, TV series, and artist information',
            image: '/img/01.png',
            demoLink: 'doesnt have',
            sourceLink: 'https://github.com/bezicalboy/laravel-movie-info',
          },
          {
            title: 'Laravel User Role Management',
            description: 'A Laravel app that lets you change user roles and restricts actions based on those roles.',
            image: '/img/02.png',
            demoLink: 'https://test2.com',
            sourceLink: 'https://github.com/bezicalboy/example2',
          },
          {
            title: 'Example 3',
            description: 'A ssssssssssss',
            image: '/img/03.png',
            demoLink: 'https://test3.com',
            sourceLink: 'https://github.com/bezicalboy/example3',
          },
          {
            title: 'Example 4',
            description: 'Rxz-txzxzs',
            image: '/placeholder.svg?height=200&width=400',
            demoLink: 'https://test4.com',
            sourceLink: 'https://github.com/bezicalboy/example4',
          },
        ].map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-all hover:shadow-lg dark:bg-zinc-800 dark:border-zinc-700">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-0">
              <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
              <p className="p-4 text-zinc-600 dark:text-zinc-400">{project.description}</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 group transition ease-in-out hover:scale-105 hover:bg-zinc-900 hover:text-white border-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
                onClick={() => window.open(project.demoLink, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> Live Demo
              </Button>
              <Button
                variant="outline"
                className="flex-1 group transition ease-in-out hover:scale-105 hover:bg-zinc-900 hover:text-white border-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
                onClick={() => window.open(project.sourceLink, '_blank')}
              >
                <Github className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> Source Code
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
