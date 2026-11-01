import type { Project } from '../data/portfolio';

const Bar = ({ w, c = 'bg-accent' }: { w: string; c?: string }) => (
  <div className="h-1.5 w-full rounded bg-white/10"><div className={`h-1.5 rounded ${c}`} style={{ width: w }} /></div>
);

function EduTrack() {
  return (
    <div className="grid grid-cols-2 gap-3 text-xs">
      <div className="glass p-3"><p className="mb-2 text-zinc-400">Attendance</p><Bar w="72%" /><p className="mt-2 font-mono text-zinc-500">sample</p></div>
      <div className="glass p-3"><p className="mb-2 text-zinc-400">Placement Progress</p><Bar w="55%" c="bg-violet" /><p className="mt-2 font-mono text-zinc-500">sample</p></div>
      <div className="glass p-3"><p className="mb-2 text-zinc-400">Company Tracking</p>
        {['Company A', 'Company B'].map((c) => <div key={c} className="mb-1 flex justify-between"><span>{c}</span><span className="text-zinc-500">Applied</span></div>)}</div>
      <div className="glass p-3"><p className="mb-2 text-zinc-400">Round Tracking</p>
        <div className="flex flex-wrap gap-1">{['Aptitude', 'GD', 'Coding', 'HR'].map((r) => <span key={r} className="tag">{r}</span>)}</div></div>
    </div>
  );
}

function Sanjeevani() {
  const modules = ['Patients', 'Appointments', 'Pharmacy', 'Laboratory', 'Inventory', 'Billing'];
  return (
    <div className="grid grid-cols-2 gap-3 text-xs">
      <div className="glass col-span-2 p-3"><p className="mb-2 text-zinc-400">Modules</p>
        <div className="flex flex-wrap gap-1">{modules.map((m) => <span key={m} className="tag">{m}</span>)}</div></div>
      <div className="glass p-3"><p className="mb-2 text-zinc-400">Medicine Expiry Tracking</p><Bar w="40%" c="bg-violet" /><p className="mt-2 font-mono text-zinc-500">sample</p></div>
      <div className="glass p-3"><p className="mb-2 text-zinc-400">Role-based Access</p>
        <div className="flex flex-wrap gap-1">{['Admin', 'Doctor', 'Staff'].map((r) => <span key={r} className="tag">{r}</span>)}</div></div>
    </div>
  );
}

function Healthcare() {
  return (
    <div className="glass space-y-2 p-3 text-xs">
      <div className="max-w-[80%] rounded-lg bg-white/5 p-2 text-zinc-300">Hi! Ask me general health information questions.</div>
      <div className="ml-auto max-w-[70%] rounded-lg bg-accent/20 p-2 text-zinc-200">What is a balanced diet?</div>
      <div className="max-w-[80%] rounded-lg bg-white/5 p-2 text-zinc-300">Educational info only — not medical advice.</div>
      <div className="rounded-lg border border-line px-2 py-1.5 text-zinc-500">Type a message…</div>
    </div>
  );
}

function DesignAgent() {
  return (
    <div className="grid grid-cols-5 gap-3 text-xs">
      <div className="glass col-span-2 space-y-2 p-3"><p className="text-zinc-400">Room</p><div className="tag">4m × 3m</div><p className="text-zinc-400">Furniture</p><div className="flex flex-wrap gap-1"><span className="tag">Bed</span><span className="tag">Desk</span></div></div>
      <svg viewBox="0 0 120 90" className="glass col-span-3 w-full p-2" role="img" aria-label="Conceptual 2D floor plan">
        <rect x="8" y="8" width="104" height="74" fill="none" stroke="#7c8cff" strokeWidth="2" />
        <rect x="14" y="14" width="40" height="28" fill="rgba(167,139,250,.25)" stroke="#a78bfa" />
        <rect x="70" y="52" width="34" height="22" fill="rgba(124,140,255,.25)" stroke="#7c8cff" />
        <path d="M8 60h10" stroke="#0e0f13" strokeWidth="4" />
      </svg>
    </div>
  );
}

export default function ProjectPreview({ id }: { id: Project['id'] }) {
  return (
    <div className="rounded-xl border border-line bg-panel p-3" aria-label="Conceptual project preview, not a screenshot">
      {id === 'edutrack' ? <EduTrack /> : id === 'sanjeevani' ? <Sanjeevani /> : id === 'healthcare' ? <Healthcare /> : <DesignAgent />}
      <p className="mt-2 text-center font-mono text-[10px] text-zinc-600">Conceptual preview — not a real screenshot</p>
    </div>
  );
}
