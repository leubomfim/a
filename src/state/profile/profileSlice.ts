import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "./type";

interface CounterState {
  products: ProductState[];
}

const initialState: CounterState = {
  products: [],
};

const profileSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.products.push(action.payload);
    },
    decrement: (state) => {
      state.products.pop();
    },
    addProducts: (state, action: PayloadAction<ProductState[]>) => {
      state.products = action.payload;
    }
  },
});

export const { increment, decrement ,addProducts } = profileSlice.actions;
export default profileSlice.reducer;
