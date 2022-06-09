import counterSlice from './counterSlice'
import {configureStore} from '@reduxjs/toolkit'
import addItemSlice from './addItemSlice'
import priceTotalSlice from './priceTotalSlice'

const store=configureStore({
reducer:{
    counter:counterSlice,
    addItem:addItemSlice,
    priceTotal:priceTotalSlice,
   
}

});


export default store;

