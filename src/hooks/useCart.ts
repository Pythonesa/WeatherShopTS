import { useState, useEffect, useMemo } from "react";
import { products } from "../data/products";

export const useCart = () => {
  const [productsData] = useState(products);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity--;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  }

  function removeAllFromCart(product) {
    setCart(cart.filter((item) => item.id !== product.id));
  }

  function emptyCart() {
    setCart([]);
  }

  const total = useMemo(() => cart.reduce((acc, product) => acc + product.price * product.quantity, 0), [cart]);
  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  return { productsData, cart, addToCart, removeFromCart, removeAllFromCart, emptyCart, total, isEmpty };
};
