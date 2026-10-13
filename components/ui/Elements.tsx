'use client';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className="arrow-icon" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}
export function SmallMark({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}
export function Action({ children, onClick, quiet = false, className = '', disabled = false }: { children: ReactNode; onClick: () => void; quiet?: boolean; className?: string; disabled?: boolean }) {
  return <motion.button type="button" className={`cta ${quiet ? 'cta-quiet' : 'cta-primary'} ${className}`} onClick={onClick} disabled={disabled} whileTap={{ scale: 0.985 }}>
    <span>{children}</span><Arrow diagonal={!quiet} />
  </motion.button>;
}
export function CornerFlourish() { return <svg className="corner-flourish" aria-hidden="true" viewBox="0 0 60 60" fill="none"><path d="M1 59V12Q1 1 12 1H59" stroke="currentColor" strokeWidth=".8"/><path d="M9 45V16Q9 9 16 9H45" stroke="currentColor" strokeOpacity=".4" strokeWidth=".8"/><circle cx="9" cy="9" r="2" fill="currentColor"/></svg>; }
export function Stars({ count = 22 }: { count?: number }) {
  return <span className="dust-field" aria-hidden="true">{Array.from({ length: count }, (_, i) => <i className="dust" key={i} style={{ left: `${(i * 47.21 + 9) % 98}%`, top: `${(i * 29.47 + 12) % 96}%`, animationDelay: `${-i * .37}s`, opacity: .15 + (i % 5) * .095 }} />)}</span>;
}
export function SectionRule({ label }: { label: string }) { return <div className="section-rule"><span className="rule-line"/><SmallMark>{label}</SmallMark><span className="rule-line"/></div>; }
