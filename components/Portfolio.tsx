/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Contact from './porto/section/Contact';
import About from './porto/section/About';
import Projects from './porto/section/Projects';
import Header from './porto/Header';
import Skills from './porto/section/Skills';
import Footer from './porto/Footer';

export function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col items-center">
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
