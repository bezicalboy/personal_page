import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {2026} Rico Wijaya. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/bezicalboy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/bezicalboy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:bezicalboy@gmail.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-foreground">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
