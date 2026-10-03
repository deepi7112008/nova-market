# NOVA Market

A portfolio-grade e-commerce catalog built with React, Vite and React Router.

## Why it is different

Instead of making another basic product grid, NOVA includes:

- Smart Match sorting using a transparent NOVA score
- Search by product/category/use case
- Client-side routing
- Product detail pages
- Persistent cart and wishlist with localStorage
- Dark/light mode
- Responsive mobile layout
- Modular component architecture
- Production Vite build
- Deployment-ready structure

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production test

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Open Vercel and import the repository.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

No environment variables are required for this demo.

## Suggested internship submission text

Project: NOVA Market — Smart Commerce Catalog

Description:
"Built a responsive production-style e-commerce experience using React and Vite. Implemented modular components, client-side routing, smart product discovery, persistent cart/wishlist state, responsive UI, optimized production build and deployment-ready architecture."

## Folder architecture

src/
  components/
  data/
  pages/
  utils/
  App.jsx
  main.jsx
  styles.css

The data layer is intentionally isolated, so a future REST/GraphQL API can replace `src/data/products.js` without changing the main UI architecture.
