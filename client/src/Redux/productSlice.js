import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("/api/products");

   
    return await res.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    originalData:[],
    productData: [],
    statusOfFetching: "",
  },
  reducers: {
    filterSize: (state,{payload}) => {

      if (payload.e.target.value === "All") {
        state.productData=state.originalData;
      } else {
        const gumData = [...state.originalData];
        const FilteredDataOnSize = gumData.filter((item) => {
          return item.size.includes(payload.e.target.value);
        });

        state.productData=[...FilteredDataOnSize]
      

      }

    },
    filterPrice: (state,{payload}) => {
      state.productData=
      state.productData.sort((a, b) => {
          if (payload.e.target.value == "Highest") {
            return b.price - a.price;
          }
          if (payload.e.target.value == "Lowest") {
            return a.price - b.price;
          }
          if (payload.e.target.value == "Normal") {
            return a.id < b.id ? 1 : -1;
          }
        })
     
    },
  
  },
  extraReducers: {
    
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.originalData=payload;
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

export const { filterSize,filterPrice } = productSlice.actions;

export default productSlice.reducer;
