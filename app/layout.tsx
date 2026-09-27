import type {Metadata} from 'next';
import Link from 'next/link';
import Arrow from './arrow';
import MobileMenu from './mobile-menu';
import Reveal from './reveal';
import {t} from '../i18n';
import {getLanguage} from '../i18n-server';
import './globals.css';

export async function generateMetadata():Promise<Metadata>{
  const lang=await getLanguage();
  return {title:'Organic Oil EU',description:t(lang,'meta.description'),robots:{index:false,follow:false}};
}
export default async function RootLayout({children}:{children:React.ReactNode}){
  const lang=await getLanguage();
  return <html lang="en"><body><Reveal lang={lang}/>
    <div className="prototype">{t(lang,'global.prototype')} <span>{t(lang,'global.pending')}</span></div>
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Organic Oil EU home"><span className="brand-wordmark">Organic Oil <span>EU</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation"><Link href="/products">{t(lang,'global.products')}</Link><Link href="/applications">{t(lang,'global.applications')}</Link><Link href="/origin">{t(lang,'global.origin')}</Link><Link href="/quality">{t(lang,'global.quality')}</Link><Link href="/company">{t(lang,'global.company')}</Link></nav>
      <div className="header-tools"><Link href="/contact" className="header-cta">{t(lang,'global.enquiry')} <Arrow/></Link><MobileMenu lang={lang}/></div>
    </header>
    <main>{children}</main>
    <footer className="landscape-footer">
      <div className="landscape-footer-content" data-reveal><span className="eyebrow">ORGANIC OIL EU · {t(lang,'global.footerKicker')}</span><h2>{t(lang,'global.footerTitle1')}<br/>{t(lang,'global.footerTitle2')}</h2><p>{t(lang,'global.footerBody')}</p><Link href="/contact" className="footer-main-link">{t(lang,'global.footerCta')} <Arrow/></Link></div>
      <div className="landscape-footer-nav" data-reveal>
        <div className="footer-brand-block"><Link href="/" className="footer-brand">Organic Oil EU</Link><span>{t(lang,'global.tagline')}<br/>Bareilly, India.</span></div>
        <div><b>{t(lang,'global.explore')}</b><Link href="/products">{t(lang,'global.products')}</Link><Link href="/applications">{t(lang,'global.applications')}</Link><Link href="/origin">{t(lang,'global.origin')}</Link></div>
        <div><b>{t(lang,'global.company')}</b><Link href="/company">{t(lang,'global.company')}</Link><Link href="/manufacturing">{t(lang,'global.manufacturing')}</Link><Link href="/quality">{t(lang,'global.qualityDocs')}</Link></div>
        <div><b>{t(lang,'global.connect')}</b><Link href="/resources">{t(lang,'global.resources')}</Link><Link href="/contact">{t(lang,'global.contact')}</Link><Link href="/contact?type=sample">{t(lang,'global.sample')}</Link></div>
      </div>
      <div className="landscape-footer-bottom"><span>© {new Date().getFullYear()} Organic Oil EU · {t(lang,'global.copyright')}</span><span>{t(lang,'global.disclaimer')}</span></div>
    </footer>
  </body></html>;
}
