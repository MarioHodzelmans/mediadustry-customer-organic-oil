import Link from 'next/link';
import Arrow from '../arrow';
import {t} from '../../i18n';
import {getLanguage} from '../../i18n-server';

export const metadata={title:'Our company'};

function LocationMap({label,place,region,mapLabel}:{label:string;place:string;region:string;mapLabel:string}){
  return <a className="location-map" href="https://www.openstreetmap.org/?mlat=28.4884&mlon=79.4457#map=10/28.4884/79.4457" target="_blank" rel="noreferrer" aria-label={`${mapLabel}: ${place}, ${region}`}>
    <svg className="location-map-art" viewBox="0 0 780 650" aria-hidden="true" focusable="false">
      <defs><pattern id="map-grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M52 0H0V52" fill="none" stroke="currentColor" strokeOpacity=".11"/></pattern><filter id="map-shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#173628" floodOpacity=".16"/></filter></defs>
      <rect width="780" height="650" fill="url(#map-grid)"/>
      <g className="map-contours" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".22"><path d="M-35 145c129-78 202 24 313-32S471 9 582 73s164 42 235-4"/><path d="M-18 177c123-64 210 29 315-24S475 53 584 111s170 37 224-3"/><path d="M-40 514c145-78 223 25 349-18s223-112 340-55 131 63 181 41"/><path d="M-28 553c146-68 229 30 355-12s214-103 328-50 132 62 173 49"/></g>
      <g filter="url(#map-shadow)"><path className="india-shape" d="M333 75l41 18 31-14 42 26 47 5 10 32 47 31-10 42 20 28-23 31-4 49-28 29-14 66-42 41-22 66-25 52-17-58-39-33-17-53-35-38-20-56-34-43 3-50-35-31 16-36-4-38 39-13 20-42 40-12 18-39z"/><path className="india-river" d="M438 148c-47 42-76 70-67 111 8 36 50 31 33 89-14 45 2 83 25 116"/></g>
      <g className="map-marker" transform="translate(423 171)"><circle className="map-pulse" r="42"/><circle className="map-halo" r="22"/><path d="M0-18c-12 0-21 9-21 21 0 16 21 39 21 39S21 19 21 3C21-9 12-18 0-18Zm0 29a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"/></g>
      <path className="map-leader" d="M445 171h117"/><circle className="map-city" cx="387" cy="235" r="4"/><circle className="map-city" cx="320" cy="196" r="3"/><circle className="map-city" cx="466" cy="265" r="3"/>
    </svg>
    <span className="map-north" aria-hidden="true">N <i/></span><span className="map-coordinate" aria-hidden="true">28.49° N&nbsp;&nbsp; 79.45° E</span>
    <span className="map-card"><small>{label}</small><strong>{place}</strong><span>{region}</span><b>{mapLabel} <Arrow/></b></span>
  </a>;
}

export default async function Company(){
  const lang=await getLanguage();
  return <><section className="page-hero" data-reveal><span className="eyebrow">{t(lang,'company.eyebrow')}</span><h1>{t(lang,'company.title1')}<br/><em>{t(lang,'company.title2')}</em></h1><p>{t(lang,'company.intro')}</p></section><section className="location-section"><div className="location-copy" data-reveal><span className="eyebrow">{t(lang,'company.locationEyebrow')}</span><h2>{t(lang,'company.locationTitle1')}<br/><em>{t(lang,'company.locationTitle2')}</em></h2><p>{t(lang,'company.locationBody')}</p><span className="location-index">28°29&apos; N <i/> 79°27&apos; E</span></div><LocationMap label={t(lang,'company.locationLabel')} place={t(lang,'company.locationPlace')} region={t(lang,'company.locationRegion')} mapLabel={t(lang,'company.locationMap')}/></section><section className="section split-detail"><div><span className="eyebrow">{t(lang,'company.story')}</span><h2>{t(lang,'company.sub1')}<br/><em>{t(lang,'company.sub2')}</em></h2></div><div><p>{t(lang,'company.body')}</p><Link className="text-link" href="/origin">{t(lang,'company.cta')} <Arrow/></Link></div></section></>;
}
