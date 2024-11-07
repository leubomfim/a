import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "./type";

interface CounterState {
  products: ProductState[];
  sortType: string
  viewType: string
}

const initialState: CounterState = {
  products: [],
  sortType: "by_rated",
  viewType: 'grid'
};

const profileSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeViewType: (state, action) => {
      state.viewType = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
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

export const { increment, decrement ,addProducts, setSortType, changeViewType } = profileSlice.actions;
export default profileSlice.reducer;
