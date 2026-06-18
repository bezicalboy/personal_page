'use client';
import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const sections = ['hero', 'about', 'skills', 'projects', 'contact'] as const;

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLinkProps {
    href: string;
    children: ReactNode;
  }

  const NavLink = ({ href, children }: NavLinkProps) => {
    const isActive = activeSection === href.slice(1);
    return (
      <a
        href={href}
        className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
          isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        {isActive && <span className="absolute inset-0 -z-10 rounded-full bg-secondary" />}
        {children}
      </a>
    );
  };

  return (
    <header
      className={`sticky top-0 z-20 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold tracking-tight">
          BEZICAL<span className="text-brand">.</span>
        </a>
        <div className="flex items-center gap-2">
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              <li><NavLink href="#about">About</NavLink></li>
              <li><NavLink href="#skills">Skills</NavLink></li>
              <li><NavLink href="#projects">Projects</NavLink></li>
              <li><NavLink href="#contact">Contact</NavLink></li>
            </ul>
          </nav>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {mounted && (
              <>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </>
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through the portfolio.</SheetDescription>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
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
  );
}
