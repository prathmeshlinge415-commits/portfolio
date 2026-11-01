import { ArrowRight, FileText, Mail } from 'lucide-react';
import Terminal from '../components/Terminal';
import { HERO_BADGES, LINKS, PROFILE } from '../data/portfolio';
import { useResumeAvailable } from '../hooks/useResume';

export default function Hero() {
  const resumeReady = useResumeAvailable();
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-sm text-accent">{PROFILE.name}</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">{PROFILE.headline}</h1>
          <p className="mt-3 font-mono text-sm text-zinc-300">{PROFILE.role}</p>
          <p className="mt-5 max-w-xl text-lg text-zinc-400">{PROFILE.intro}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {HERO_BADGES.map((b) => (
              <li key={b.label} className={b.learning ? 'learning-tag' : 'tag'}>{b.label}{b.learning && ' (learning)'}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View Projects <ArrowRight size={16} /></a>
            {resumeReady
              ? <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FileText size={16} /> Resume</a>
              : <a href="#resume" className="btn-ghost"><FileText size={16} /> Resume</a>}
            <a href="#contact" className="btn-ghost"><Mail size={16} /> Contact Me</a>
          </div>
        </div>
        <div className="space-y-4">
          <Terminal />
          <div className="grid gap-4 sm:grid-cols-2">
            <pre className="glass overflow-x-auto p-4 font-mono text-xs leading-relaxed text-zinc-300" aria-label="Java code snippet"><code>{`public class Developer {
  String focus = "Java + Web + AI";
  void learn() { /* keep going */ }
}`}</code></pre>
            <pre className="glass overflow-x-auto p-4 font-mono text-xs leading-relaxed text-zinc-300" aria-label="SQL query snippet"><code>{`SELECT skill
FROM portfolio
WHERE status = 'learning';`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
