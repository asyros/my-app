import { useSelector } from "react-redux";
import { Nav } from "../nav";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <section>
      <Nav />
      <h2>Cart</h2>
      {cart.products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr></tr>
            <th>ID</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Thumbnail</th>
            <tr></tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.quantity}</td>
                <td>£{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    height="100"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};
