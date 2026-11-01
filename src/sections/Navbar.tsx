import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV } from '../data/portfolio';
import { useActiveSection, useScroll } from '../hooks/useScroll';

const IDS = NAV.map((n) => n.id);

export default function Navbar() {
  const { y, progress } = useScroll();
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);
  const compact = y > 40;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${compact ? 'border-line bg-ink/85 py-2 backdrop-blur-md' : 'border-transparent py-4'}`}>
      <div className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-accent to-violet" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="font-mono text-base font-semibold text-white">Prathmesh<span className="text-accent">.dev</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
                className={`rounded-lg px-3 py-1.5 text-sm transition ${active === n.id ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'}`}>{n.label}</a>
            </li>
          ))}
        </ul>
        <button className="rounded-lg p-2 text-zinc-200 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="mx-4 mt-3 space-y-1 rounded-2xl border border-line bg-panel p-3 md:hidden">
          {NAV.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-zinc-200 hover:bg-white/5">{n.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
