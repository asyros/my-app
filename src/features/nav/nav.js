import { Link } from "react-router-dom";

export const Nav = () => {
  const btnStyle = {
    cursor: "pointer",
    marginRight: "10px",
    padding: "15px 20px",
    backgroundColor: "#007bff",
    border: "none",
    borderColor: "#007bff",
    borderRadius: "3px",
    minWidth: "100px",
    color: "white",
    fontSize: "16px",
  };

  return (
    <nav style={{ margin: "20px 20px" }}>
      <Link to="/counter" style={btnStyle}>
        Counter
      </Link>
      <Link to="/productlist" style={btnStyle}>
        Product List
      </Link>
      <Link to="/cart" style={btnStyle}>
        Cart
      </Link>
    </nav>
  );
};
