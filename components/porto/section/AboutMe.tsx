import React from 'react';
import { Headshot } from '@/components/porto/Headshot';

const facts = [
  { label: 'Role', value: 'Full-Stack Web Developer' },
  { label: 'Stack', value: 'Laravel · React · Next.js · PostgreSQL' },
  { label: 'Focus', value: 'Web apps, dashboards & APIs' },
  { label: 'Open to', value: 'Full-time & freelance work' },
];

const AboutMe = () => {
  return (
    <section id="about" className="animate-fade-up scroll-mt-24">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">Get to know me</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
      </div>

      <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-start">
        <div className="mx-auto w-full max-w-[280px]">
          <Headshot />
        </div>

        <div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a full-stack web developer who enjoys turning real business problems into
              clean, reliable software. I work across the whole stack — from designing PostgreSQL
              data models and building APIs, to crafting responsive interfaces with React, Next.js,
              and Laravel.
            </p>
            <p>
              Most of my projects are practical tools that people actually use day to day:
              invoicing platforms, CRMs, and content-driven apps. I care about writing maintainable
              code, shipping features that work, and paying attention to the small details that make
              a product feel polished.
            </p>
            <p>
              I&apos;m currently looking for opportunities where I can keep growing as an engineer and
              contribute to a team building meaningful products. If that sounds like a fit, I&apos;d love
              to talk.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-border bg-secondary/40 px-4 py-3"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-medium text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
