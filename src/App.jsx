import { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Toast from "./components/Toast";
import { products } from "./data/products";
import { getCart, getTheme, getWishlist, saveStorage, setCart, setTheme, setWishlist } from "./utils/storage";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";

export default function App() {
  const [cart, setCartState] = useState(getCart);
  const [wishlist, setWishlistState] = useState(getWishlist);
  const [theme, setThemeState] = useState(getTheme);
  const [toast, setToast] = useState("");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    setTheme(theme);
  }, [theme]);

  useEffect(() => setCart(cart), [cart]);
  useEffect(() => setWishlist(wishlist), [wishlist]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);

  function notify(message) {
    setToast(message);
    window.clearTimeout(window.__novaToast);
    window.__novaToast = window.setTimeout(() => setToast(""), 2200);
  }

  function addToCart(product) {
    setCartState((current) => {
      const found = current.find((item) => item.id === product.id);
      return found
        ? current.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
        : [...current, { ...product, qty: 1 }];
    });
    notify(`${product.name} added to cart`);
  }

  function updateQty(id, qty) {
    setCartState((current) => qty < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, qty } : item));
  }

  function removeItem(id) {
    setCartState((current) => current.filter((item) => item.id !== id));
    notify("Item removed");
  }

  function toggleWish(id) {
    setWishlistState((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function toggleTheme() {
    setThemeState((current) => current === "dark" ? "light" : "dark");
  }

  return (
    <Layout cartCount={cartCount} wishCount={wishlist.length} theme={theme} onTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<Home products={products} wishlist={wishlist} onWish={toggleWish} onAdd={addToCart} />} />
        <Route path="/catalog" element={<Catalog products={products} wishlist={wishlist} onWish={toggleWish} onAdd={addToCart} />} />
        <Route path="/product/:id" element={<Product products={products} wishlist={wishlist} onWish={toggleWish} onAdd={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} onUpdate={updateQty} onRemove={removeItem} />} />
        <Route path="/wishlist" element={<Wishlist products={products} wishlist={wishlist} onWish={toggleWish} onAdd={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home products={products} wishlist={wishlist} onWish={toggleWish} onAdd={addToCart} />} />
      </Routes>
      <Toast message={toast} />
    </Layout>
  );
}
