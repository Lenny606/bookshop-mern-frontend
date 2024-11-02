import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice.js'
import {booksApi} from "./features/cart/booksApi.js";
import {ordersApi} from "./features/cart/ordersApi.js";

export default configureStore({
    reducer: {
        cart: cartReducer,
        [booksApi.reducerPath]: booksApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware)
    }
})