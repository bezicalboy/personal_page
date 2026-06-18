'use client';
import Contact from './porto/section/Contact';
import About from './porto/section/About';
import AboutMe from './porto/section/AboutMe';
import Projects from './porto/section/Projects';
import Header from './porto/Header';
import Skills from './porto/section/Skills';
import Footer from './porto/Footer';

export function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* subtle background grid + glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px] dark:bg-brand/15" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at top, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top, black 30%, transparent 75%)',
          }}
        />
      </div>

      <Header />
      <main className="container mx-auto max-w-4xl px-6 py-20 sm:py-28 space-y-28 sm:space-y-36">
        <About />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
