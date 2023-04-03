import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
		summary: 0,
	},
	reducers: {
		addToCart: (state, action) => {
			const itemInCart = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				state.cart.push({
					...action.payload,
					quantity: 1,
				});
				console.log(action.payload);
			}
		},
		incrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		removeItem: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			const removeItem = state.cart.filter(
				(item) => item.id !== action.payload
			);
			state.summary = state.summary - item.quantity * item.price;
			state.cart = removeItem;
		},
		incrementSummary: (state, action) => {
			state.summary += action.payload;
		},
		decrementSummary: (state, action) => {
			const item = state.cart.find((item) => item.price === action.payload);
			if (item.quantity === 1) {
				state.summary == state.summary;
			} else {
				state.summary -= action.payload;
			}
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const {
	addToCart,
	incrementQuantity,
	decrementQuantity,
	removeItem,
	incrementSummary,
	decrementSummary,
} = cartSlice.actions;
