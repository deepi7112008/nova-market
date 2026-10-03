import { ArrowLeft, Check, Heart, ShieldCheck, Star, Truck } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function Product({ products, wishlist, onWish, onAdd }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="empty-state page-empty"><h2>Product not found</h2><Link to="/catalog">Back to catalog</Link></div>;
  }

  const wished = wishlist.includes(product.id);

  return (
    <section className="product-page">
      <Link className="back-link" to="/catalog"><ArrowLeft size={16} /> Back to catalog</Link>

      <div className="product-detail">
        <div className={`detail-art ${product.accent}`}>
          <span className="badge">{product.badge}</span>
          <div className="detail-letter">{product.icon.slice(0, 1).toUpperCase()}</div>
          <div className="detail-score"><b>{product.energy}</b><span>NOVA score</span></div>
        </div>

        <div className="detail-copy">
          <span className="section-kicker">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="rating big"><Star size={17} fill="currentColor" /> {product.rating} <span>{product.reviews} verified reviews</span></div>
          <p className="detail-description">{product.description}</p>

          <div className="detail-price"><strong>₹{product.price.toLocaleString("en-IN")}</strong><del>₹{product.oldPrice.toLocaleString("en-IN")}</del></div>

          <div className="spec-grid">
            {product.specs.map((s) => <div key={s}><Check size={15} /> {s}</div>)}
          </div>

          <div className="detail-actions">
            <button className="primary-btn" onClick={() => onAdd(product)}>Add to cart</button>
            <button className={`secondary-btn wish-detail ${wished ? "selected" : ""}`} onClick={() => onWish(product.id)}>
              <Heart size={17} fill={wished ? "currentColor" : "none"} /> {wished ? "Saved" : "Save"}
            </button>
          </div>

          <div className="delivery-box">
            <div><Truck size={18} /><span><b>Delivery</b><small>{product.delivery} · Free standard shipping</small></span></div>
            <div><ShieldCheck size={18} /><span><b>Secure checkout</b><small>Protected payment flow</small></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
