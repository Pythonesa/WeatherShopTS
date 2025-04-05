import Cart from "./Cart";

export default function Header({
  cart,
  removeFromCart,
  addToCart,
  removeAllFromCart,
  emptyCart,
  total,
  isEmpty
}) {

  return (
    <header>
      <a href="index.html">
        <img src="/logo.svg" alt="Weather Shop Logo" />
        <h1>Weather Shop</h1>
      </a>
      <nav>
        <img
          className="cart-icon"
          src = { isEmpty ? "/img/nav/carrito-vacio.png" : "/img/nav/carrito-cargado.png"}
          alt="Carrito de Compras"
        />
        <div id="cart">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            removeAllFromCart={removeAllFromCart}
            emptyCart={emptyCart}
            total={total}
            isEmpty={isEmpty}
          />
        </div>
      </nav>
    </header>
  );
}
