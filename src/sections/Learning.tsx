import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { LEARNING_STAGES } from '../data/portfolio';

export default function Learning() {
  return (
    <section id="learning" className="mx-auto max-w-4xl px-5 py-20">
      <SectionHeading title="Learning Journey" subtitle="The path I have followed so far, and where I am heading." />
      <ol className="relative space-y-6 border-l border-line pl-8">
        {LEARNING_STAGES.map((s, i) => (
          <li key={s.title} className="relative">
            <span className={`absolute -left-[2.55rem] top-5 flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-mono ${s.status === 'done' ? 'border-accent bg-accent text-ink' : 'border-violet bg-ink text-violet'}`} aria-hidden="true">{i + 1}</span>
            <Reveal className="glass p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-white">{s.title}</h3>
                <span className={s.status === 'done' ? 'tag' : 'learning-tag'}>{s.status === 'done' ? 'Foundation built' : 'In progress'}</span>
              </div>
              <ul className="flex flex-wrap gap-2">{s.items.map((it) => <li key={it} className="tag">{it}</li>)}</ul>
            </Reveal>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-center font-mono text-lg text-accent">Always Learning. Always Building.</p>
    </section>
  );
}
