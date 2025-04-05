export default function Card({ product, addToCart }) {
  return (
    <section className="card">
      <div className="card-header">
        <img src={`img/${product.image}.png`} alt={product.name}></img>
        <div>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button
            type="button"
            className="add-to-cart"
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      <p>{product.description}</p>
    </section>
  );
}
