import { Boxes, Gauge, GitBranch, Layers3, Rocket, Route } from "lucide-react";

export default function About() {
  const blocks = [
    ["Presentation", "React components", "Reusable UI blocks such as cards, navigation, product detail and cart."],
    ["Routing", "React Router", "Client-side routes keep navigation smooth without full page reloads."],
    ["State", "Local state + storage", "Cart, wishlist and theme persist in the browser for a realistic demo."],
    ["Performance", "Vite production build", "Code is bundled and minified for deployment with lightweight assets."],
    ["Deployment", "Vercel / Netlify", "The static production bundle can be deployed globally in minutes."],
    ["Scalability", "API-ready data layer", "The product data module can later be replaced by REST/GraphQL without rewriting the UI."]
  ];

  return (
    <section className="architecture">
      <div className="catalog-head">
        <div><span className="section-kicker">PROJECT ARCHITECTURE</span><h1>Built like a real product.</h1><p>NOVA separates presentation, data, routing and persistence so the project is easy to extend.</p></div>
        <div className="arch-score"><Gauge size={20} /><b>Production mindset</b><span>Modular · Responsive · Deployable</span></div>
      </div>

      <div className="arch-grid">
        {blocks.map(([label, title, desc], i) => (
          <div className="arch-card" key={title}>
            <span>0{i + 1}</span>
            <div className="arch-icon">{[Layers3, Route, Boxes, Gauge, Rocket, GitBranch][i]({ size: 20 })}</div>
            <small>{label}</small><h3>{title}</h3><p>{desc}</p>
          </div>
        ))}
      </div>

      <div className="workflow">
        <div><span className="section-kicker">FLOW</span><h2>Discover → Decide → Save → Buy</h2></div>
        <div className="flow-line"><span>Home</span><b>→</b><span>Catalog</span><b>→</b><span>Product</span><b>→</b><span>Cart</span></div>
      </div>
    </section>
  );
}
