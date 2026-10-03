import { ArrowRight, Check, Leaf, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home({ products, wishlist, onWish, onAdd }) {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Smart commerce, without the clutter</div>
          <h1>Find the product that fits <span>your life.</span></h1>
          <p>NOVA turns a crowded catalog into a focused shopping experience with smart matching, transparent scores and a fast client-side journey.</p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/catalog">Explore catalog <ArrowRight size={18} /></Link>
            <Link className="secondary-btn" to="/about">See architecture</Link>
          </div>
          <div className="trust-row">
            <span><Check size={15} /> No account required</span>
            <span><Check size={15} /> Local cart memory</span>
            <span><Check size={15} /> Mobile ready</span>
          </div>
        </div>

        <div className="hero-orbit">
          <div className="orbit-ring ring-one"></div>
          <div className="orbit-ring ring-two"></div>
          <div className="orbit-core">
            <span>91</span>
            <small>NOVA MATCH</small>
          </div>
          <div className="floating-card fc-one"><Zap size={16} /> Fast delivery</div>
          <div className="floating-card fc-two"><Leaf size={16} /> Low-waste pick</div>
        </div>
      </section>

      <section className="feature-strip">
        <div><Sparkles /><div><b>Smart Match</b><span>Intent-based discovery</span></div></div>
        <div><ShieldCheck /><div><b>Transparent</b><span>See why a product scores</span></div></div>
        <div><Zap /><div><b>Fast by design</b><span>Lean assets + client routing</span></div></div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><span className="section-kicker">CURATED FOR YOU</span><h2>Featured picks</h2></div>
          <Link to="/catalog">View all <ArrowRight size={16} /></Link>
        </div>
        <div className="product-grid">
          {featured.map((p) => <ProductCard key={p.id} product={p} wished={wishlist.includes(p.id)} onWish={onWish} onAdd={onAdd} />)}
        </div>
      </section>

      <section className="match-banner">
        <div>
          <span className="section-kicker">THE NOVA DIFFERENCE</span>
          <h2>Shopping becomes a decision, not a search marathon.</h2>
          <p>Choose a budget and a goal. NOVA ranks products using transparent signals instead of hiding everything behind a generic “recommended” label.</p>
        </div>
        <Link className="primary-btn" to="/catalog?smart=1">Try Smart Match <Sparkles size={17} /></Link>
      </section>
    </>
  );
}
