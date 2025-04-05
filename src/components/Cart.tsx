export default function Cart({
  cart,
  removeFromCart,
  addToCart,
  removeAllFromCart,
  emptyCart,
  total,
  isEmpty,
}) {
  if (!isEmpty) {
    return (
      <>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={`img/${product.image}.png`} alt={product.name} />
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    type="button"
                    className="addFromCart"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                  {product.quantity}
                  <button
                    type="button"
                    className="removeFromCart"
                    onClick={() => removeFromCart(product)}
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="removeAllFromCart"
                    onClick={() => removeAllFromCart(product)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="totalCart">Total: ${total}</p>
        <button type="button" className="emptyCart" onClick={() => emptyCart()}>
          Vaciar Carrito
        </button>
      </>
    );
  } else {
    return <p>El carrito esta vacio</p>;
  }
}
