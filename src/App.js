import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { ProductList } from "./features/productList/productList";
import { ProductDetails } from "./features/productDetails/productDetails";
import { Counter } from "./features/counter";
import { Cart } from "./features/cart";

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/productDetails/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/counter" replace />} />
    </Routes>
  );
}

export default App;
