import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
  },
  reducers: {},
});

export default productListSlice.reducer;
