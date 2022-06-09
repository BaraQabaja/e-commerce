import { createSlice } from "@reduxjs/toolkit";

export const addItemSlice = createSlice({
  name: "addProduct",
  initialState: {
    data: [],

  },
  reducers: {
    addItem: (state, action) => {
        let isExist=false;
        
      
      state.data.forEach((item, index) => {
    
        if (item.id === action.payload.id) {
          item.quantity++;
          isExist=true;
         
        }     });

         if (!isExist) {
            state.data.push({ ...action.payload, quantity: 1 })
         
        }
       
     

    },
    removeItem: (state, action) => {



      state.data.forEach((item) => {
        const { id } = item;
        if (id === action.payload.id) {
          if (item.quantity > 1) {
            item.quantity--;
          } else if(item.quantity===1) {
            const editedData = state.data.filter((item) => {
              return action.payload.id !== item.id;

            });
              state.data=editedData; 
          }
        }
      });
    },
  },
});

export const { addItem, removeItem } = addItemSlice.actions;
export default addItemSlice.reducer;
