import {createSlice} from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
    cartItems: []
}
//actions
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if (!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'Item does exist',
                    showCancelButton: true,
                    confirmButtonText: "OK",
                    confirmButtonColor: "#f1c40f",
                })
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id!== action.payload._id)
            Swal.fire({
                position: 'top-end',
                icon:'success',
                title: 'Item removed successfully',
                showConfirmButton: false,
                timer: 1500
            })
        },
        clearCart: (state, action) => {
            state.cartItems = []
            Swal.fire({
                position: 'top-end',
                icon:'success',
                title: 'All items removed successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
})

//export actions
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
