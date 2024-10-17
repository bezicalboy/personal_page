import { Badge } from '@/components/ui/badge';
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="text-center animate-fade-up">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {['Laravel', 'PHP', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'Next.js', 'MySQL', 'MongoDB', 'Git', 'Photoshop', 'After Effects'].map((skill) => (
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
  );
};

export default Skills;
