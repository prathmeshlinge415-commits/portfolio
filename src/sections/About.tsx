import { GraduationCap, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { PROFILE } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading title="About Me" />
      <div className="grid gap-8 lg:grid-cols-3">
        <Reveal className="space-y-4 text-zinc-300 lg:col-span-2">
          <p>I am a final-year Computer Science and Engineering student at {PROFILE.college}.</p>
          <p>My focus is on Java, web development and AI. I enjoy building practical applications and solving real-world problems, and I am interested in full-stack development, databases, AI/ML and cloud technologies.</p>
          <p>Currently, I am strengthening my Java, DSA, SQL and web development skills, while learning Spring Boot, React, Python, AI/ML and AWS / cloud. I am looking for opportunities as a Software Developer, Java Developer, Full Stack Developer or Software Engineer.</p>
        </Reveal>
        <Reveal delay={100} className="glass space-y-4 p-6">
          <div className="flex gap-3"><GraduationCap className="mt-0.5 shrink-0 text-accent" size={20} /><div><p className="font-semibold text-white">B.Tech/B.E. in CSE</p><p className="text-sm text-zinc-400">Final year · Expected {PROFILE.graduation}</p></div></div>
          <div className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-accent" size={20} /><div><p className="font-semibold text-white">{PROFILE.college}</p><p className="text-sm text-zinc-400">{PROFILE.location}</p></div></div>
        </Reveal>
      </div>
    </section>
  );
}
