import Image from 'next/image';
import Link from 'next/link';
import Arrow from './arrow';
import { products } from '../content';

const featuredImages = [
  '/images/peppermint-oil-concept.png',
  '/images/cornmint-oil-concept.png',
  '/images/spearmint-oil-concept.png',
];

export default function Home() {
  return <>
    <section className="feature-wrap" aria-labelledby="feature-title">
      <div className="feature-panel">
        <div className="feature-overlay">
          <span className="feature-kicker">B.D. AROMATICS · INDIA</span>
          <Link className="feature-round-link" href="/origin" aria-label="Explore our origin story"><Arrow /></Link>
          <h1 id="feature-title">The nature of<br /><em>mint, refined.</em></h1>
          <p>Botanical ingredients selected for the people who make what comes next.</p>
          <Link className="feature-text-link" href="/origin">Explore our story <Arrow /></Link>
        </div>
        <div className="feature-corner">FROM FIELD TO FORMULATION</div>
      </div>
    </section>

    <section className="showcase" aria-labelledby="showcase-title">
      <div className="showcase-header"><div><span className="eyebrow">THE MINT COLLECTION</span><h2 id="showcase-title">Selected materials</h2></div><Link href="/products" className="showcase-view-all">View the collection <Arrow /></Link></div>
      <div className="showcase-grid">{products.slice(0, 3).map((product, index) => <Link href={'/products/' + product.slug} className="showcase-product" key={product.slug}>
        <div className="showcase-image"><Image src={featuredImages[index]} width={880} height={1100} alt={'Illustrative bottle concept for ' + product.name} /></div>
        <h3>{product.name}</h3>
        <div className="showcase-latin">{product.latin}</div>
        <p>{product.note}</p>
        <span className="showcase-product-bottom"><span>Explore material <Arrow /></span><span>0{index + 1}</span></span>
      </Link>)}</div>
      <p className="showcase-note">Packaging imagery is illustrative. Material grades and specifications are confirmed during enquiry.</p>
    </section>
  </>;
}
