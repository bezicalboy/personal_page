import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface CaseStudy {
  title: string;
  tagline: string;
  problem: string;
  features: string[];
  image: string;
  tags: string[];
  demoLink?: string;
  sourceLink: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  sourceLink: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Invoice Vault',
    tagline: 'Invoicing & billing platform',
    problem:
      'Small businesses often juggle clients, invoices, and payments across spreadsheets, making it easy to lose track of who owes what. Invoice Vault centralises the entire billing workflow in one clean dashboard.',
    features: [
      'Client management with full contact and billing history',
      'Itemised invoice builder with taxes, discounts and totals',
      'Payment status tracking — paid, pending and overdue',
      'Dashboard with revenue summaries and outstanding balances',
    ],
    image: '/img/03.png',
    tags: ['React', 'Vite', 'PostgreSQL', 'REST API'],
    sourceLink: 'https://github.com/bezicalboy/invoice-vault',
  },
  {
    title: 'LeadFlow CRM',
    tagline: 'Sales pipeline & lead management',
    problem:
      'Sales teams lose deals when leads slip through the cracks. LeadFlow CRM gives them a single place to capture leads, move them through a clear pipeline, and see how the team is performing.',
    features: [
      'Lead capture with stage-based sales pipeline (new → won/lost)',
      'Activity logging and notes on every contact',
      'Conversion and pipeline metrics on a live dashboard',
      'Team views for tracking productivity and follow-ups',
    ],
    image: '/img/04.png',
    tags: ['React', 'Vite', 'PostgreSQL', 'REST API'],
    sourceLink: 'https://github.com/bezicalboy/LeadFlow-CRM',
  },
];

const projects: Project[] = [
  {
    title: 'Laravel Movie Info',
    description:
      'A Laravel app providing real-time access to movie, TV series, and artist information through a clean, searchable interface.',
    image: '/img/01.png',
    tags: ['Laravel', 'API', 'PHP'],
    sourceLink: 'https://github.com/bezicalboy/laravel-movie-info',
  },
  {
    title: 'User Role Management',
    description:
      'A Laravel app that lets admins change user roles and restricts actions based on role-based access control.',
    image: '/img/02.png',
    tags: ['Laravel', 'Auth', 'RBAC'],
    sourceLink: 'https://github.com/bezicalboy/example2',
  },
];

const ProjectLinks = ({ sourceLink, demoLink }: { sourceLink: string; demoLink?: string }) => (
  <div className="flex items-center gap-4">
    <a
      href={sourceLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
    >
      <Github className="h-4 w-4" />
      Source
    </a>
    {demoLink ? (
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-brand"
      >
        <ExternalLink className="h-4 w-4" />
        Live demo
      </a>
    ) : (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground/50">
        <ExternalLink className="h-4 w-4" />
        Demo soon
      </span>
    )}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="animate-fade-up scroll-mt-24">
      <div className="mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">Work</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
      </div>

      {/* Case studies */}
      <div className="space-y-8">
        {caseStudies.map((cs) => (
          <article
            key={cs.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl"
          >
            <div className="relative aspect-video w-full overflow-hidden border-b border-border">
              <Image
                src={cs.image}
                alt={cs.title}
                fill
                sizes="(max-width: 900px) 100vw, 832px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-brand">{cs.tagline}</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">{cs.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cs.problem}</p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {cs.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <ProjectLinks sourceLink={cs.sourceLink} demoLink={cs.demoLink} />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* More projects */}
      <h3 className="mb-6 mt-14 text-xl font-semibold tracking-tight">More projects</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden border-b border-border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <ProjectLinks sourceLink={project.sourceLink} demoLink={project.demoLink} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
