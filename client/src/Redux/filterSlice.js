import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    incomeData: [],
  },
  reducers: {
    filterSize: (state,{payload}) => {
      if (payload.e.target.value === "All") {
        state.incomeData=payload.originalData;
      } else {
        const gumData = [...payload.products];
        const FilteredDataOnSize = gumData.filter((item) => {
          return item.size.includes(payload.e.target.value);
        });

        state.incomeData=[...FilteredDataOnSize]
      

      }

    },
    filterPrice: (state) => {
      state.count -= 1;
    },
  },
});

export const { filterSize } = filterSlice.actions;
export default filterSlice.reducer;
