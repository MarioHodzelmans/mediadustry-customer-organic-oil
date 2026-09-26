'use client';
import {usePathname} from 'next/navigation';
import {useEffect} from 'react';
export default function Reveal({lang}:{lang:string}) {
  const pathname=usePathname();
  useEffect(()=>{
    const selectors=['main > section','.section > .section-heading','.section > .split-detail','.section > .callout','.catalogue-row','.app-card','.trace-grid > div','.docs-grid > div','.fact-list > div','.landscape-footer-content','.landscape-footer-nav'];
    document.querySelectorAll<HTMLElement>(selectors.join(',')).forEach(node=>node.dataset.reveal='');
    const nodes=[...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    if(!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches){nodes.forEach(node=>node.classList.add('is-visible'));return;}
    const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    nodes.forEach(node=>observer.observe(node));
    document.documentElement.classList.add('motion-ready');
    return ()=>observer.disconnect();
  },[pathname,lang]);
  return null;
}
