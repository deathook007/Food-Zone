import cartSlice from './slices/cartSlice';
import restaurantSlice from './slices/restaurantSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		restaurant: restaurantSlice,
	},
});
