import { useEffect, useState } from 'react';
import { isReal, LINKS } from '../data/portfolio';

let cache: Promise<boolean> | null = null;

/** Checks once that the configured resume path really serves a PDF (dev servers return index.html for missing files). */
function checkResume(): Promise<boolean> {
  if (!isReal(LINKS.resume)) return Promise.resolve(false);
  if (!cache) {
    cache = fetch(LINKS.resume, { method: 'HEAD' })
      .then((r) => r.ok && (r.headers.get('content-type') ?? '').toLowerCase().includes('pdf'))
      .catch(() => false);
  }
  return cache;
}

/** true = PDF found, false = not found yet, null = still checking. */
export function useResumeAvailable(): boolean | null {
  const [available, setAvailable] = useState<boolean | null>(null);
  useEffect(() => {
    let alive = true;
    checkResume().then((ok) => { if (alive) setAvailable(ok); });
    return () => { alive = false; };
  }, []);
  return available;
}
