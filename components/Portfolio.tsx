/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState, useEffect, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Menu, Moon, Sun } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Footer from './porto/Footer';
import Contact from './porto/section/Contact';
import About from './porto/section/About';
import Projects from './porto/section/Projects';
import Header from './porto/Header';
import Skills from './porto/section/Skills';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 flex flex-col items-center">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-24 max-w-4xl">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
