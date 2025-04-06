import { useState, useEffect, useMemo } from "react";
import { products } from "../data/products";
import type { Product } from "../types";

export const useCart = () => {
  const [productsData] = useState(products);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product : Product) {
    const index = cart.findIndex((item : Product) => item.id === product.id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(product : Product) {
    const index = cart.findIndex((item : Product) => item.id === product.id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity--;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  }

  function removeAllFromCart(product : Product) {
    setCart(cart.filter((item : Product) => item.id !== product.id));
  }

  function emptyCart() {
    setCart([]);
  }

  const total = useMemo(() => cart.reduce((acc : number, product : Product) => acc + product.price * product.quantity!, 0), [cart]);
  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  return { productsData, cart, addToCart, removeFromCart, removeAllFromCart, emptyCart, total, isEmpty };
};
