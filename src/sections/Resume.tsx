import { Download, Eye, FileText } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { LINKS } from '../data/portfolio';
import { useResumeAvailable } from '../hooks/useResume';

export default function Resume() {
  const available = useResumeAvailable();
  return (
    <section id="resume" className="mx-auto max-w-4xl px-5 py-20">
      <SectionHeading title="Resume" />
      <Reveal className="glass bg-gradient-to-br from-accent/10 to-violet/10 p-8 text-center sm:p-12">
        <FileText className="mx-auto mb-4 text-accent" size={32} aria-hidden="true" />
        <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Want to know more about my education, skills and projects?</h3>
        {available ? (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn-primary"><Eye size={16} /> View Resume</a>
            <a href={LINKS.resume} download="Prathmesh_Ravindra_Linge_Resume.pdf" className="btn-ghost"><Download size={16} /> Download Resume</a>
          </div>
        ) : (
          <div className="mt-6">
            <div className="flex flex-wrap justify-center gap-3">
              <span role="link" aria-disabled="true" className="btn cursor-not-allowed border border-line text-zinc-500"><Eye size={16} /> View Resume</span>
              <span role="link" aria-disabled="true" className="btn cursor-not-allowed border border-line text-zinc-500"><Download size={16} /> Download Resume</span>
            </div>
            {available === false && (
              <p role="status" className="mt-4 text-sm text-zinc-400">
                Resume PDF not added yet. Place it at <code className="font-mono text-accent">public{LINKS.resume}</code> and it will appear here automatically.
              </p>
            )}
          </div>
        )}
      </Reveal>
    </section>
  );
}
