import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart({ cart, onUpdate, onRemove }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <section className="cart-page">
      <Link className="back-link" to="/catalog"><ArrowLeft size={16} /> Continue shopping</Link>
      <div className="section-heading"><div><span className="section-kicker">YOUR BAG</span><h1>Cart</h1></div></div>

      {!cart.length ? (
        <div className="empty-state"><ShoppingBag size={35} /><h2>Your cart is empty</h2><p>Start with a product that matches your routine.</p><Link className="primary-btn" to="/catalog">Explore products</Link></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className={`mini-art ${item.accent}`}>{item.icon.slice(0, 1).toUpperCase()}</div>
                <div className="cart-main"><Link to={`/product/${item.id}`}>{item.name}</Link><span>₹{item.price.toLocaleString("en-IN")}</span></div>
                <div className="qty">
                  <button onClick={() => onUpdate(item.id, item.qty - 1)}><Minus size={14} /></button>
                  <b>{item.qty}</b>
                  <button onClick={() => onUpdate(item.id, item.qty + 1)}><Plus size={14} /></button>
                </div>
                <strong>₹{(item.price * item.qty).toLocaleString("en-IN")}</strong>
                <button className="remove" onClick={() => onRemove(item.id)}><Trash2 size={16} /></button>
              </div>
            ))}
          </div>

          <aside className="summary">
            <h3>Order summary</h3>
            <div><span>Subtotal</span><b>₹{subtotal.toLocaleString("en-IN")}</b></div>
            <div><span>Shipping</span><b>{shipping ? "₹99" : "FREE"}</b></div>
            <hr />
            <div className="total"><span>Total</span><b>₹{total.toLocaleString("en-IN")}</b></div>
            <button className="primary-btn checkout">Demo checkout</button>
            <small>This portfolio project uses a simulated checkout flow.</small>
          </aside>
        </div>
      )}
    </section>
  );
}
