import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { ProductList } from "./features/productList/productList";
import { ProductDetails } from "./features/productDetails/productDetails";
import { Counter } from "./features/counter";
import { Cart } from "./features/cart";
import { UserProfile } from "./features/userProfile";
import { Login } from "./features/login";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/productDetails/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/counter" replace />} />
      <Route
        path={"/login"}
        element={isAuthenticated ? <UserProfile /> : <Login />}
      />
    </Routes>
  );
}

export default App;
