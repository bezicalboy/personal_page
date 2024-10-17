/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Menu, Moon, Sun } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLinkProps {
    href: string;
    children: ReactNode;
  }

  const NavLink = ({ href, children }: NavLinkProps) => (
    <a href={href} className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${activeSection === href.slice(1) ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
      {children}
    </a>
  );
  return (
    <header className="sticky top-0 z-10 w-full backdrop-blur-sm bg-white/90 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold --font-poppins">BEZICAL</h1>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <NavLink href="#about">About</NavLink>
              </li>
              <li>
                <NavLink href="#skills">Skills</NavLink>
              </li>
              <li>
                <NavLink href="#projects">Projects</NavLink>
              </li>
              <li>
                <NavLink href="#contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="border-zinc-200 dark:border-zinc-800">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden border-zinc-200 dark:border-zinc-800">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through the portfolio sections</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
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
