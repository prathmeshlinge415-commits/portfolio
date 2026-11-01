import { Award } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { CERTIFICATIONS } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading title="Certifications" subtitle="Courses and certifications I have completed." />
      {CERTIFICATIONS.length === 0 ? (
        <Reveal className="glass flex items-start gap-4 border-dashed p-6 sm:p-8">
          <Award className="mt-0.5 shrink-0 text-violet" size={24} aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-white">Certifications will be added here</h3>
            <p className="mt-1 text-sm text-zinc-400">I am still building my credentials. Completed certifications will appear in this section as I earn them.</p>
          </div>
        </Reveal>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <li key={`${c.name}-${c.issuer}`} className="h-full">
              <Reveal delay={(i % 3) * 80} className="h-full">
                <article className="glass flex h-full flex-col p-6 transition hover:border-accent/40">
                  <Award className="mb-3 text-accent" size={22} aria-hidden="true" />
                  <h3 className="font-semibold text-white">{c.name}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{c.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-accent">{c.date}</p>
                  {c.description && <p className="mt-3 text-sm text-zinc-300">{c.description}</p>}
                  {c.certificateUrl && (
  <a
    href={c.certificateUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary mt-5 w-fit"
  >
    View Certificate
  </a>
)}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
