import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
