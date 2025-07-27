import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
        let argItem = action.payload;
        state.items = state.items.filter(
            it => it.name !== argItem.name
        );
    },
    updateQuantity: (state, action) => {
        let argItem = action.payload;
        state.items.forEach(it => {
            if(it.name === argItem.name){
                it.quantity = argItem.quantity;
            }
        });
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
