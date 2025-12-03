import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../services/products";
import { Nav } from "../nav";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../cart/cartSlice";
import { useTheme } from "../../context/ThemeContext";

export const ProductList = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const { data, error, isLoading } = useGetProductsQuery();

  if (error) return <div>Error occurred: {error.toString()}</div>;

  if (isLoading || !data) return <div>Loading...</div>;

  const textAlignCenter = { textAlign: "center" };

  const itemStyle = { paddingRight: "25px", ...textAlignCenter };

  const tableHeaderStyle = {
    backgroundColor: darkMode ? "grey" : "lightblue",
    color: darkMode ? "white" : "black",
    ...textAlignCenter,
    fontWeight: "bold",
  };

  const buttonStyle = {
    margin: "0px 0px 0px 10px",
    padding: "10px 20px",
    cursor: "pointer",
    color: darkMode ? "white" : "black",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    width: "120px",
  };

  if (data) {
    return (
      <>
        <Nav />
        <h1 style={textAlignCenter}>Products List</h1>
        <table
          border="1"
          cellPadding="5"
          cellSpacing="0"
          style={{ padding: "40px" }}
        >
          <thead>
            <tr>
              <td style={tableHeaderStyle}>ID</td>
              <td style={tableHeaderStyle}>Category</td>
              <td style={tableHeaderStyle}>Brand</td>
              <td style={tableHeaderStyle}>Description</td>
              <td style={tableHeaderStyle}>Price</td>
              <td style={tableHeaderStyle}>Picture</td>
              <td style={tableHeaderStyle}>Actions</td>
            </tr>
          </thead>
          <tbody>
            {data.products.map((product) => {
              const { category, brand, description, thumbnail, price, id } =
                product;
              const productInCart = products?.products.find(
                (p) => p.id === product.id
              );

              return (
                <tr key={id}>
                  <td style={itemStyle}>{id}</td>
                  <td style={itemStyle}>{category}</td>
                  <td style={itemStyle}>{brand}</td>
                  <td style={itemStyle}>{description}</td>
                  <td style={itemStyle}>£{price}</td>
                  <td>
                    <img src={thumbnail} height="200px" />
                  </td>
                  <td style={itemStyle}>
                    <button
                      style={{
                        ...buttonStyle,
                        marginBottom: "20px",
                        backgroundColor: darkMode ? "#1f0eb3ff" : "#007bff",
                      }}
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                    <button
                      style={{
                        ...buttonStyle,
                        marginBottom: "20px",
                        backgroundColor: darkMode ? "#a20303ff" : "red",
                      }}
                      onClick={() => dispatch(removeFromCart(product))}
                      disabled={!productInCart}
                    >
                      Remove from Cart
                    </button>
                    <button
                      style={{
                        ...buttonStyle,
                        marginBottom: "20px",
                        backgroundColor: darkMode ? "#b96703ff" : "orange",
                      }}
                    >
                      <Link
                        to={`/productDetails/${id}`}
                        style={{
                          textDecoration: "none",
                          color: darkMode ? "white" : "black",
                        }}
                      >
                        View Details
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
};
