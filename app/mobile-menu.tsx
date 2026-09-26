'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useState} from 'react';
import {t,type Lang} from '../i18n';

const items=[['/products','global.products'],['/applications','global.applications'],['/origin','global.origin'],['/quality','global.quality'],['/company','global.company']] as const;

function MenuIcon({close=false}:{close?:boolean}){
  return close?<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>:<svg aria-hidden="true" focusable="false" viewBox="0 0 28 20"><path d="M1 3h26M1 10h26M9 17h18" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg>;
}

export default function MobileMenu({lang}:{lang:Lang}){
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  useEffect(()=>setOpen(false),[pathname]);
  useEffect(()=>{
    if(!open)return;
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return()=>{document.body.style.overflow=previous;};
  },[open]);
  return <>
    <button className="mobile-menu-trigger" type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(true)}><span>Menu</span><MenuIcon/></button>
    <div className={`mobile-menu-panel${open?' is-open':''}`} id="mobile-navigation" aria-hidden={!open}>
      <div className="mobile-menu-top"><Link href="/" className="mobile-menu-brand" onClick={()=>setOpen(false)}>Organic Oil <span>EU</span></Link><button type="button" className="mobile-menu-close" aria-label="Close menu" onClick={()=>setOpen(false)}><MenuIcon close/></button></div>
      <nav aria-label="Mobile navigation">{items.map(([href,key],i)=><Link href={href} key={href} onClick={()=>setOpen(false)}><small>0{i+1}</small><span>{t(lang,key)}</span><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M5 12h13M13 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg></Link>)}</nav>
      <div className="mobile-menu-footer"><span>ORGANIC OIL EU · BAREILLY, INDIA</span><Link href="/contact" onClick={()=>setOpen(false)}>{t(lang,'global.enquiry')}<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24"><path d="M5 12h13M13 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg></Link></div>
    </div>
  </>;
}
