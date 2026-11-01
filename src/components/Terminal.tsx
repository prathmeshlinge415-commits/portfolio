import { useEffect, useState } from 'react';
import { PROFILE } from '../data/portfolio';

const LINES = [
  { cmd: 'whoami', out: PROFILE.name },
  { cmd: 'role', out: 'Aspiring Software Developer' },
  { cmd: 'focus', out: 'Java + Web + AI' },
  { cmd: 'learning', out: 'Spring Boot + React + DSA + AWS' },
  { cmd: 'status', out: 'Building • Learning • Improving' },
];
const FULL = LINES.map((l) => `$ ${l.cmd}\n${l.out}`);

export default function Terminal() {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [typed, setTyped] = useState(reduce ? LINES.length : 0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduce || typed >= LINES.length) return;
    const cmd = LINES[typed].cmd;
    const t = setTimeout(() => {
      if (chars < cmd.length) setChars(chars + 1);
      else { setTyped(typed + 1); setChars(0); }
    }, chars < cmd.length ? 70 : 450);
    return () => clearTimeout(t);
  }, [typed, chars, reduce]);

  return (
    <div className="glass overflow-hidden font-mono text-sm shadow-2xl shadow-black/40" role="img" aria-label={`Terminal: ${FULL.join('; ')}`}>
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-zinc-600" /><span className="h-3 w-3 rounded-full bg-zinc-600" /><span className="h-3 w-3 rounded-full bg-zinc-600" />
        <span className="ml-3 text-xs text-zinc-500">prathmesh@portfolio ~</span>
      </div>
      <div className="min-h-[250px] space-y-3 p-5" aria-hidden="true">
        {LINES.slice(0, typed).map((l) => (
          <div key={l.cmd}><div className="text-accent">$ {l.cmd}</div><div className="text-zinc-200">{l.out}</div></div>
        ))}
        {typed < LINES.length && <div className="text-accent">$ {LINES[typed].cmd.slice(0, chars)}<span className="cursor">▋</span></div>}
        {typed >= LINES.length && <div className="text-accent">$ <span className="cursor">▋</span></div>}
      </div>
    </div>
  );
}
