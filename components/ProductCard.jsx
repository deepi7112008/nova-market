import { Heart, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, wished, onWish, onAdd }) {
  return (
    <article className="product-card">
      <div className={`product-art ${product.accent}`}>
        <span className="badge">{product.badge}</span>
        <button className={`heart ${wished ? "active" : ""}`} onClick={() => onWish(product.id)}>
          <Heart size={17} fill={wished ? "currentColor" : "none"} />
        </button>
        <div className="product-icon">{product.icon.slice(0, 1).toUpperCase()}</div>
        <span className="energy-chip">NOVA score {product.energy}</span>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <div className="rating"><Star size={14} fill="currentColor" /> {product.rating} <span>({product.reviews})</span></div>

        <div className="price-row">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>
        </div>

        <div className="card-actions">
          <Link className="details-btn" to={`/product/${product.id}`}>View details</Link>
          <button className="add-btn" onClick={() => onAdd(product)}>
            <Plus size={17} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
