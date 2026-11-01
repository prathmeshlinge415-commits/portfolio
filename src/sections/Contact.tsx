import { useState, type FormEvent } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { isReal, LINKS, toHref } from '../data/portfolio';

const field = 'w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-white placeholder:text-zinc-600';

export default function Contact() {
  const [note, setNote] = useState('');

  // TODO: replace this mailto flow with a form service (Formspree, EmailJS, etc.) if you want in-page sending.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isReal(LINKS.email)) { setNote('Add your email in src/data/portfolio.ts (LINKS.email) to enable this form.'); return; }
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${d.get('name')}`);
    const body = encodeURIComponent(`${d.get('message')}\n\nFrom: ${d.get('name')} (${d.get('email')})`);
    window.location.href = `mailto:${LINKS.email.replace('mailto:', '')}?subject=${subject}&body=${body}`;
    setNote('Opening your email app…');
  };

  const socials = [
    { label: 'GitHub', icon: Github, href: toHref(LINKS.github), real: isReal(LINKS.github) },
    { label: 'LinkedIn', icon: Linkedin, href: toHref(LINKS.linkedin), real: isReal(LINKS.linkedin) },
    { label: 'Email', icon: Mail, href: toHref(LINKS.email, true), real: isReal(LINKS.email) },
  ];

  return (
    <section id="contact" className="mx-auto max-w-4xl px-5 py-20">
      <SectionHeading title="Let's Connect" subtitle="Interested in collaborating, discussing a project, or connecting about software development?" />
      <Reveal className="glass p-6 sm:p-8">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label htmlFor="contact-name" className="mb-1.5 block text-sm text-zinc-300">Name</label><input id="contact-name" name="name" required className={field} placeholder="Your name" /></div>
            <div><label htmlFor="contact-email" className="mb-1.5 block text-sm text-zinc-300">Email</label><input id="contact-email" name="email" type="email" required className={field} placeholder="you@example.com" /></div>
          </div>
          <div><label htmlFor="contact-message" className="mb-1.5 block text-sm text-zinc-300">Message</label><textarea id="contact-message" name="message" required rows={5} className={field} placeholder="How can I help?" /></div>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="btn-primary"><Send size={16} /> Send Message</button>
            <p role="status" className="text-sm text-zinc-400">{note}</p>
          </div>
        </form>
        <ul className="mt-8 flex gap-3 border-t border-line pt-6">
          {socials.map(({ label, icon: Icon, href, real }) => (
            <li key={label}>
              {real
                ? <a href={href} {...(label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={label} className="btn-ghost !px-3"><Icon size={18} /></a>
                : <span role="link" aria-disabled="true" aria-label={`${label} (link coming soon)`} title={`${label}: add your link in src/data/portfolio.ts`} className="btn cursor-not-allowed border border-line !px-3 text-zinc-600"><Icon size={18} /></span>}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
