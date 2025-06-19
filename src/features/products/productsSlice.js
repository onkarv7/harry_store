import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    editProduct: (state, action) => {
      const index = state.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
