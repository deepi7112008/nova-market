import { Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { categories } from "../data/products";

export default function Catalog({ products, wishlist, onWish, onAdd }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [smart, setSmart] = useState(false);

  const visible = useMemo(() => {
    let list = products.filter((p) =>
      (category === "All" || p.category === category) &&
      `${p.name} ${p.category} ${p.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())
    );

    if (smart) list = [...list].sort((a, b) => b.energy - a.energy);
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [products, query, category, sort, smart]);

  return (
    <section className="catalog-page">
      <div className="catalog-head">
        <div>
          <span className="section-kicker">PRODUCT LIBRARY</span>
          <h1>Explore the catalog</h1>
          <p>Search by product, category, or what you actually want to do.</p>
        </div>
        <button className={`smart-toggle ${smart ? "on" : ""}`} onClick={() => setSmart(!smart)}>
          <Sparkles size={17} /> {smart ? "Smart Match ON" : "Smart Match"}
        </button>
      </div>

      <div className="toolbar">
        <label className="search-box">
          <Search size={18} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try “study”, “coding”, “eco”..." />
          {query && <button onClick={() => setQuery("")}><X size={16} /></button>}
        </label>

        <div className="category-row">
          {categories.map((c) => <button className={category === c ? "selected" : ""} key={c} onClick={() => setCategory(c)}>{c}</button>)}
        </div>

        <label className="sort-select">
          <SlidersHorizontal size={16} />
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="rating">Highest rated</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>

      <div className="result-line"><span>{visible.length} products</span>{smart && <span className="smart-note">Sorted by NOVA score</span>}</div>

      <div className="product-grid">
        {visible.map((p) => <ProductCard key={p.id} product={p} wished={wishlist.includes(p.id)} onWish={onWish} onAdd={onAdd} />)}
      </div>

      {!visible.length && (
        <div className="empty-state"><Search size={30} /><h3>No matching products</h3><p>Try another keyword or category.</p></div>
      )}
    </section>
  );
}
