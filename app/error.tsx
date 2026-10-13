'use client';
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return <main className="error-page"><p className="eyebrow">FOR EMILY. / TECHNICAL NOTE</p><h1>Malá technická prestávka.</h1><p>Niečo sa nepodarilo načítať. Skúsme to ešte raz.</p><button className="cta cta-primary" onClick={reset}>Skúsiť znova <span aria-hidden="true">↗</span></button></main>;
}
