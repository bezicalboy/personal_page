import React from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const links = [
  {
    label: 'Email',
    value: 'bezicalboy@gmail.com',
    href: 'mailto:bezicalboy@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bezicalboy',
    href: 'https://id.linkedin.com/in/bezicalboy',
    icon: Linkedin,
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="animate-fade-up scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 w-40 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />
        <p className="text-sm font-medium uppercase tracking-widest text-brand">Contact</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s work together</h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <div className="mx-auto mt-10 grid max-w-md gap-3">
          {links.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-4 rounded-xl border border-border bg-secondary/40 px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:bg-secondary"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-foreground shadow-sm">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {label}
                </span>
                <span className="block truncate font-medium">{value}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
