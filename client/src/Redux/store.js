import counterSlice from './counterSlice'
import {configureStore} from '@reduxjs/toolkit'
import addItemSlice from './addItemSlice'
import priceTotalSlice from './priceTotalSlice'
import productSlice from './productSlice'
const store=configureStore({
reducer:{
    counter:counterSlice,
    addItem:addItemSlice,
    priceTotal:priceTotalSlice,
   products:productSlice,
}

});


export default store;

