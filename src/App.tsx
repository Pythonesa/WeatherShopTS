import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

import { useCart } from "./hooks/useCart";

function App() {
  const {
    productsData,
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    emptyCart,
    total,
    isEmpty
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        removeAllFromCart={removeAllFromCart}
        emptyCart={emptyCart}
        total={total}
        isEmpty={isEmpty}
      />
      <main>
        <h2>
          ¡Bienvenid@ a la tienda del clima definitiva, 100% real, no fake, un
          link mega!
        </h2>
        <article className="cards">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </article>
      </main>
    </>
  );
}

export default App;
