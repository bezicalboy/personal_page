import React from 'react';

const skills = [
  'Laravel',
  'PHP',
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'MySQL',
  'MongoDB',
  'Git',
  'Photoshop',
  'After Effects',
];

const Skills = () => {
  return (
    <section id="skills" className="animate-fade-up scroll-mt-24">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">Toolkit</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Skills &amp; Technologies</h2>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-secondary"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
