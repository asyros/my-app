import { useParams } from "react-router-dom";
import { Nav } from "../nav";
import { useGetProductByIdQuery } from "../../services/products";
import { useTheme } from "../../context/ThemeContext";

export const ProductDetails = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const { productId } = useParams();

  const { data, error, isLoading } = useGetProductByIdQuery(productId);
  const { id, title, description, price, brand, category, thumbnail } =
    data || {};

  if (data) {
    return (
      <section>
        <Nav />
        <h2>Product Details</h2>
        <div
          style={{
            textAlign: "center",
            width: "50%",
            margin: "auto",
            border: darkMode ? "1px solid #555" : "1px solid gray",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "2px 2px 12px #aaa",
            backgroundImage: darkMode
              ? "linear-gradient(to bottom right, #555555, #333333)"
              : "linear-gradient(to bottom right, #ffffff, #e6f7ff)",
            color: darkMode ? "white" : "black",
          }}
        >
          <div>
            <b>ID</b>
            <p>{id}</p>
          </div>
          <div>
            <b>Title</b>
            <p>{title}</p>
          </div>
          <div>
            <b>Description</b>
            <p>{description}</p>
          </div>
          <div>
            <b>Price</b>
            <p>${price}</p>
          </div>
          <div>
            <b>Brand</b>
            <p>{brand}</p>
          </div>
          <div>
            <b>Category</b>
            <p>{category}</p>
          </div>
          <img src={thumbnail} alt={title} />
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};
