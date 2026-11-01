import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../data/portfolio';

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading title="What I Can Build" subtitle="Things I am interested in building, based on the skills I have today." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ title, text, icon: Icon }, i) => (
          <Reveal key={title} delay={(i % 4) * 60} className="h-full">
            <div className="glass h-full p-5 transition hover:border-accent/40">
              <Icon className="mb-3 text-accent" size={22} />
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-zinc-400">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 text-center"><a href="#contact" className="btn-primary">Let's Build Something <ArrowRight size={16} /></a></div>
    </section>
  );
}
