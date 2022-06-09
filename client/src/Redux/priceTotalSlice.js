import { createSlice } from "@reduxjs/toolkit";

export const priceTotalSlice = createSlice({
  name: "counter",
  initialState: {
    totalPrice: 0,
  },
  reducers: {
    increasePrice: (state,action) => {
      state.totalPrice += action.payload.price;
      
    },
    decreasePrice: (state,action) => {
        state.totalPrice -= action.payload.price;
       
      },
    
  },
});

export const { increasePrice,decreasePrice } = priceTotalSlice.actions;

export default priceTotalSlice.reducer;