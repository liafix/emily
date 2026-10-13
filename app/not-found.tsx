import Link from 'next/link';
export default function NotFound() { return <main className="error-page"><p className="eyebrow">404 / NOT FOUND</p><h1>Tento spis sa nenašiel.</h1><p>Možno je čas vrátiť sa na začiatok.</p><Link className="cta cta-primary" href="/">Späť na úvod ↗</Link></main>; }
