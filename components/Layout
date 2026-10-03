import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingBag, Sparkles, Sun, Moon } from "lucide-react";

export default function Layout({ children, cartCount, wishCount, theme, onTheme }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          <span>NOVA<span className="brand-soft">MARKET</span></span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Discover</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/about">Architecture</NavLink>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" onClick={onTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link className="icon-btn with-count" to="/wishlist" aria-label="Wishlist">
            <Heart size={18} />
            {wishCount > 0 && <span>{wishCount}</span>}
          </Link>
          <Link className="bag-btn" to="/cart">
            <ShoppingBag size={18} />
            Cart
            {cartCount > 0 && <b>{cartCount}</b>}
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div>
          <strong>NOVA MARKET</strong>
          <p>A portfolio-grade commerce experience built for speed, clarity and discovery.</p>
        </div>
        <div className="footer-meta">
          <span><Sparkles size={15} /> Smart Match</span>
          <span>React + Vite</span>
          <span>Responsive UI</span>
        </div>
      </footer>
    </div>
  );
}
