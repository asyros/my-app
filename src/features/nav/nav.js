import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export const Nav = () => {
  const { theme, toggleTheme } = useTheme();

  const darkMode = theme === "dark";

  const btnStyle = {
    cursor: "pointer",
    marginRight: "10px",
    padding: "15px 20px",
    backgroundColor: darkMode ? "#333" : "#007bff",
    border: "none",
    borderColor: darkMode ? "#333" : "#007bff",
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
      <Link to="/login" style={btnStyle}>
        User Profile
      </Link>
      <button
        style={btnStyle}
        onClick={() => {
          toggleTheme();
        }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Theme
      </button>
    </nav>
  );
};
