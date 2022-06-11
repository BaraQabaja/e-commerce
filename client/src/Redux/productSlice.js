import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("/api/products");

    console.log(res.data);
    return await res.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productData: [],
    statusOfFetching: "",
  },
  reducers: {
    //   fetchProducts:(state)=>{
    //     state.productData= fetch('/api/products').then(res=>res.json())

    //     console.log(state.productData)

    // }

   
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.productData = payload;
      state.statusOfFetching = "success";
    },
    [fetchProducts.pending]: (state) => {
      state.statusOfFetching = "pending";
    },
    [fetchProducts.rejected]: (state) => {
      state.statusOfFetching = "rejected";
    },
  },
});

// export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;
