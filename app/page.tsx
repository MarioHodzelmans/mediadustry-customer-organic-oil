import Image from 'next/image';
import Link from 'next/link';
import Arrow from './arrow';
import {products} from '../content';
import {productText,t} from '../i18n';
import {getLanguage} from '../i18n-server';
const featuredImages=['/images/peppermint-oil-concept.png','/images/cornmint-oil-concept.png','/images/spearmint-oil-concept.png'];
export default async function Home(){
  const lang=await getLanguage();
  return <>
    <section className="feature-wrap" aria-labelledby="feature-title"><div className="feature-panel" data-reveal>
      <div className="feature-overlay" data-reveal><span className="feature-kicker">{t(lang,'home.kicker')}</span><h1 id="feature-title">{t(lang,'home.title1')}<br/><em>{t(lang,'home.title2')}</em></h1><p>{t(lang,'home.body')}</p><Link className="feature-text-link" href="/products">{t(lang,'home.cta')} <Arrow/></Link></div>
      <div className="feature-corner">01 / {t(lang,'home.corner')}</div>
    </div></section>
    <section className="showcase" aria-labelledby="showcase-title"><div className="showcase-header" data-reveal><div><span className="eyebrow">{t(lang,'home.collection')}</span><h2 id="showcase-title">{t(lang,'home.selected')}</h2></div><Link href="/products" className="showcase-view-all">{t(lang,'home.view')} <Arrow/></Link></div>
      <div className="showcase-grid">{products.slice(0,3).map((product,index)=><Link href={'/products/'+product.slug} className="showcase-product" key={product.slug} data-reveal><div className="showcase-image"><Image src={featuredImages[index]} width={880} height={1100} alt={t(lang,'home.imageAlt')+' '+productText(lang,product.slug,'name')}/></div><h3>{productText(lang,product.slug,'name')}</h3><div className="showcase-latin">{product.latin}</div><p>{productText(lang,product.slug,'note')}</p><span className="showcase-product-bottom"><span>{t(lang,'home.exploreMaterial')} <Arrow/></span><span>0{index+1}</span></span></Link>)}</div>
      <p className="showcase-note">{t(lang,'home.note')}</p>
    </section>
  </>;
}
