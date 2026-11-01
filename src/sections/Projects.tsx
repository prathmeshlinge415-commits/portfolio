import { Star } from 'lucide-react';
import ProjectLinks from '../components/ProjectLinks';
import ProjectPreview from '../components/ProjectPreview';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { PROJECTS } from '../data/portfolio';

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading title="Projects" subtitle="Academic and personal projects. Previews below are conceptual UI mockups, not screenshots of deployed systems." />

      <div className="space-y-6">
        {featured.map((p, i) => (
          <Reveal key={p.id}>
            <article className="glass grid gap-8 border-accent/30 p-6 sm:p-8 lg:grid-cols-2" aria-labelledby={`project-${p.id}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="mb-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"><Star size={14} /> Featured Project</p>
                <h3 id={`project-${p.id}`} className="text-2xl font-extrabold text-white sm:text-3xl">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.fullName} · {p.category}</p>
                <p className="mt-4 text-zinc-300">{p.description}</p>
                <ul className="mt-4 grid list-disc gap-x-6 gap-y-1.5 pl-5 text-sm text-zinc-300 marker:text-accent sm:grid-cols-2">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                {p.note && <p className="mt-4 rounded-lg border border-violet/30 bg-violet/10 px-3 py-2 text-sm text-violet">{p.note}</p>}
                <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
                <div className="mt-6"><ProjectLinks project={p} /></div>
              </div>
              <div className="self-center"><ProjectPreview id={p.id} /></div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {others.map((p, i) => (
          <Reveal key={p.id} delay={i * 100} className="h-full">
            <article className="glass flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40" aria-labelledby={`project-${p.id}`}>
              <ProjectPreview id={p.id} />
              <h3 id={`project-${p.id}`} className="mt-5 text-xl font-bold text-white">{p.name}</h3>
              <p className="text-sm text-zinc-400">{p.fullName} · {p.category}</p>
              <p className="mt-3 text-sm text-zinc-300">{p.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300 marker:text-accent">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              {p.note && <p className="mt-3 rounded-lg border border-violet/30 bg-violet/10 px-3 py-2 text-sm text-violet">{p.note}</p>}
              <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
              <div className="mt-auto pt-6"><ProjectLinks project={p} /></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
