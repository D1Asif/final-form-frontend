import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCartItem = {
    productId: string,
    quantity: number,
    price: number
}

type TInitialSate = {
    items: TCartItem[]
}

const initialState: TInitialSate = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TCartItem>) => {
            const isFound = state.items.find((item) => item.productId === action.payload.productId)

            if (isFound) {
                isFound.quantity += action.payload.quantity
            } else {
                state.items.push(action.payload)
            }
        },
        updateQuantity: (state, action: PayloadAction<{productId: string, quantity: number}>) => {
            const product = state.items.find((item) => item.productId === action.payload.productId)

            product!.quantity += action.payload.quantity
        },
        deleteCartItem: (state, action: PayloadAction<{productId: string}>) => {
            state.items = state.items.filter((item) => item.productId !== action.payload.productId)
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addToCart, updateQuantity, deleteCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;