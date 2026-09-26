'use client';
import {useRouter} from 'next/navigation';
import {useRef, useTransition} from 'react';
import {languages, type Lang} from '../i18n';

export default function LanguageSwitcher({lang}:{lang:Lang}) {
  const router=useRouter();
  const menu=useRef<HTMLDetailsElement>(null);
  const [pending,startTransition]=useTransition();
  function choose(next:Lang) {
    document.cookie=`organic-oil-language=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    menu.current?.removeAttribute('open');
    if(next!==lang) startTransition(()=>router.refresh());
  }
  return <details className="language-switcher" ref={menu}>
    <summary aria-label="Choose language"><span>{lang.toUpperCase()}</span><svg aria-hidden="true" focusable="false" viewBox="0 0 12 12"><path d="m2 4 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4"/></svg></summary>
    <div className="language-options" role="group" aria-label="Language">
      {languages.map(item=><button type="button" key={item.code} lang={item.code} aria-current={item.code===lang?'true':undefined} onClick={()=>choose(item.code)} disabled={pending}>{item.label}</button>)}
    </div>
  </details>;
}
