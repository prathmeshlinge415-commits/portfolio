import { Github, Linkedin, Mail } from 'lucide-react';
import { isReal, LINKS, PROFILE, toHref } from '../data/portfolio';

const links = [['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Learning', '#learning'], ['Certifications', '#certifications'], ['Resume', '#resume'], ['Contact', '#contact']];

export default function Footer() {
  const socials = [
    { label: 'GitHub', icon: Github, href: toHref(LINKS.github), ext: isReal(LINKS.github) },
    { label: 'LinkedIn', icon: Linkedin, href: toHref(LINKS.linkedin), ext: isReal(LINKS.linkedin) },
    { label: 'Email', icon: Mail, href: toHref(LINKS.email, true), ext: isReal(LINKS.email) },
  ];
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between">
        <div><p className="font-semibold text-white">{PROFILE.name}</p><p className="mt-1 text-sm text-zinc-400">Building practical software with Java, Web & AI.</p></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">{links.map(([l, h]) => <li key={l}><a href={h} className="hover:text-white">{l}</a></li>)}</ul></nav>
        <ul className="flex gap-3">{socials.map(({ label, icon: Icon, href, ext }) => (
          <li key={label}>{ext
          ? <a href={href} aria-label={label} {...(label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="text-zinc-400 hover:text-white"><Icon size={20} /></a>
          : <span role="link" aria-disabled="true" aria-label={`${label} (link coming soon)`} className="cursor-not-allowed text-zinc-700"><Icon size={20} /></span>}</li>
        ))}</ul>
      </div>
      <p className="mt-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
    </footer>
  );
}
