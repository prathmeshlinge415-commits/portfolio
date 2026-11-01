import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { CURRENT_SKILLS, LEARNING_SKILLS, SKILL_CATEGORIES } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading title="Skills" subtitle="What I work with today, and what I am still learning, kept separate on purpose." />
      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <Reveal className="glass p-6">
          <h3 className="mb-3 font-semibold text-white">Current Skills</h3>
          <ul className="flex flex-wrap gap-2">{CURRENT_SKILLS.map((s) => <li key={s} className="tag">{s}</li>)}</ul>
        </Reveal>
        <Reveal delay={100} className="glass border-violet/30 p-6">
          <h3 className="mb-3 font-semibold text-white">Currently Learning</h3>
          <ul className="flex flex-wrap gap-2">{LEARNING_SKILLS.map((s) => <li key={s} className="learning-tag">{s}</li>)}</ul>
        </Reveal>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 60} className="glass p-6">
            <h3 className="mb-4 font-semibold text-white">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.skills.map(({ name, icon: Icon, learning }) => (
                <li key={name} className="flex items-center gap-3 text-sm">
                  <span className={`rounded-lg p-2 ${learning ? 'bg-violet/15 text-violet' : 'bg-accent/15 text-accent'}`}><Icon size={16} /></span>
                  <span className="text-zinc-200">{name}</span>
                  {learning && <span className="learning-tag ml-auto">Learning</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
