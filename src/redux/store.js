import { configureStore } from '@reduxjs/toolkit'
import {itemReducer} from './slices/items'

const store = configureStore({
    reducer:{
        items:itemReducer,
    }
})
export default store