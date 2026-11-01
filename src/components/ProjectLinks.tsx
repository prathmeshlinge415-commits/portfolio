import type { ReactNode } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { isReal, type Project } from '../data/portfolio';

/** Real URLs open in a new tab. Placeholders render as clearly disabled buttons instead of dead links. */
function LinkButton({ url, label, ariaLabel, primary, icon }: { url: string; label: string; ariaLabel: string; primary?: boolean; icon: ReactNode }) {
  if (isReal(url)) {
    return <a href={url} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={primary ? 'btn-primary' : 'btn-ghost'}>{icon} {label}</a>;
  }
  return (
    <span role="link" aria-disabled="true" aria-label={`${ariaLabel} (link coming soon)`} title="Link coming soon" className="btn cursor-not-allowed border border-line text-zinc-500">
      {icon} {label} <span className="font-mono text-[10px] uppercase">soon</span>
    </span>
  );
}

export default function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl !== null && (
        <LinkButton url={project.liveUrl} label="Live Demo" ariaLabel={`${project.name} live demo`} primary icon={<ExternalLink size={16} />} />
      )}
      <LinkButton url={project.githubUrl} label="GitHub" ariaLabel={`${project.name} on GitHub`} icon={<Github size={16} />} />
    </div>
  );
}
