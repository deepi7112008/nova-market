import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Wishlist({ products, wishlist, onWish, onAdd }) {
  const saved = products.filter((p) => wishlist.includes(p.id));

  return (
    <section className="catalog-page">
      <div className="catalog-head">
        <div><span className="section-kicker">SAVED FOR LATER</span><h1>Your wishlist</h1><p>Keep the products you want to compare before buying.</p></div>
      </div>
      {!saved.length ? (
        <div className="empty-state"><Heart size={35} /><h2>No saved products yet</h2><p>Tap the heart on any product to save it here.</p><Link className="primary-btn" to="/catalog"><ShoppingBag size={17} /> Browse catalog</Link></div>
      ) : (
        <div className="product-grid">{saved.map((p) => <ProductCard key={p.id} product={p} wished onWish={onWish} onAdd={onAdd} />)}</div>
      )}
    </section>
  );
}
