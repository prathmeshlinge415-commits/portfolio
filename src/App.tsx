import { ArrowUp } from 'lucide-react';
import About from './sections/About';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Learning from './sections/Learning';
import Navbar from './sections/Navbar';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Services from './sections/Services';
import Skills from './sections/Skills';
import { useScroll } from './hooks/useScroll';

export default function App() {
  const { y } = useScroll();
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Learning /><Certifications /><Services /><Resume /><Contact />
      </main>
      <Footer />
      {y > 600 && (
        <a href="#home" aria-label="Back to top" className="fixed bottom-5 right-5 z-40 rounded-full border border-line bg-panel p-3 text-zinc-200 shadow-lg hover:border-accent/60"><ArrowUp size={18} /></a>
      )}
    </>
  );
}
