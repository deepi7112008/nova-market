const CART_KEY = "nova-cart";
const WISH_KEY = "nova-wishlist";
const THEME_KEY = "nova-theme";

export function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

export function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const getCart = () => readStorage(CART_KEY, []);
export const setCart = (cart) => saveStorage(CART_KEY, cart);

export const getWishlist = () => readStorage(WISH_KEY, []);
export const setWishlist = (items) => saveStorage(WISH_KEY, items);

export const getTheme = () => localStorage.getItem(THEME_KEY) || "dark";
export const setTheme = (theme) => localStorage.setItem(THEME_KEY, theme);
