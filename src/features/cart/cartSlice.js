import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      const product = state.products.find((p) => p.id === actions.payload.id);
      if (product) {
        product.quantity += 1;
        return;
      } else {
        const { id, title, description, price, brand, category, thumbnail } =
          actions.payload;
        state.products.push({
          id,
          title,
          description,
          price,
          brand,
          category,
          thumbnail,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, actions) => {
      const product = state.products.find((p) => p.id === actions.payload.id);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.products = state.products.filter(
            (p) => p.id !== actions.payload.id
          );
        }
      }
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state) => {
  return state.cart.products;
};

export const selectCartTotalQuantity = (state) => {
  return state.cart.products.reduce(
    (total, product) => total + product.quantity,
    0
  );
};

export const selectCartTotalPrice = (state) => {
  return state.cart.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};
