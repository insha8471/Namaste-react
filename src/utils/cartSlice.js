import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },

    reducers: {
        addItem: (state, action) => {
            //RTK(Redux ToolKit) uses immers BTS
            state.items.push(action.payload);
        },

        removeItems: (state, action) => {
            state.items.pop();
        },

        clearcart :(state, action) => {
            // RTK either mutate the existing state or return a new state
            // state.items.length = 0;
            
            return {items: []}
        }
    }
})

export const {addItem, removeItems, clearcart} = cartSlice.actions;
export default cartSlice.reducer;