import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TItem = {
    productId: string,
    quantity: number,
    category: string,
    image: string,
    price: number
}

type TInitialSate = {
    items: TItem[]
}

const initialState: TInitialSate = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TItem>) => {
            const isFound = state.items.find((item) => item.productId === action.payload.productId)

            if (isFound) {
                isFound.quantity += action.payload.quantity
            } else {
                state.items.push(action.payload)
            }
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;