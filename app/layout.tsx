import type { Metadata } from 'next';
import Link from 'next/link';
import Arrow from './arrow';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'B.D. Aromatics | Mint ingredients for your specification', template: '%s | B.D. Aromatics' },
  description: 'Explore mint oils and menthol materials for formulation and supply qualification. European growth website prototype.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <div className="prototype">STRATEGY PROTOTYPE <span>Content and claims pending B.D. Aromatics review</span></div>
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Organic Oil EU home"><span className="brand-wordmark">Organic Oil <span>EU</span></span></Link>
      <nav aria-label="Main navigation"><Link href="/products">Products</Link><Link href="/applications">Applications</Link><Link href="/origin">Origin & traceability</Link><Link href="/quality">Quality</Link><Link href="/company">Our company</Link></nav>
      <Link href="/contact" className="header-cta">Start an enquiry <Arrow /></Link>
    </header>
    <main>{children}</main>
    <footer className="landscape-footer">
      <div className="landscape-footer-content">
        <span className="eyebrow">B.D. AROMATICS · BOTANICAL INGREDIENTS</span>
        <h2>We bring nature<br />into the details.</h2>
        <p>From mint origin to your finished formulation, start with the right material conversation.</p>
        <Link href="/contact" className="footer-main-link">Tell us what you’re making <Arrow /></Link>
      </div>
      <div className="landscape-footer-nav">
        <div className="footer-brand-block"><Link href="/" className="footer-brand">Organic Oil EU</Link><span>Mint materials for careful formulation.<br />Bareilly, India.</span></div>
        <div><b>Explore</b><Link href="/products">Products</Link><Link href="/applications">Applications</Link><Link href="/origin">Origin & traceability</Link></div>
        <div><b>Company</b><Link href="/company">Our company</Link><Link href="/manufacturing">Manufacturing</Link><Link href="/quality">Quality & documents</Link></div>
        <div><b>Connect</b><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link><Link href="/contact?type=sample">Request a sample</Link></div>
      </div>
      <div className="landscape-footer-bottom"><span>© {new Date().getFullYear()} B.D. Aromatics · Concept for review</span><span>No product claim on this prototype is a released specification.</span></div>
    </footer>
  </body></html>;
}
