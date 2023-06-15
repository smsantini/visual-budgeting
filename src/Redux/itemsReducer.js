import {createSlice} from "@reduxjs/toolkit";

import {
    findItemsThunk,
    createItemThunk,
    updateItemThunk,
    deleteItemThunk
} from '../Client/thunks/itemsThunk.js';

const initialState = {
    items: [],
    loading: false
}

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: {
        [findItemsThunk.pending]:
            (state) => {
                state.loading = true
                state.items = []
            },
        [findItemsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.items = payload
            },
        [findItemsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.items = action.error
            },
        [deleteItemThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.items = state.items
                    .filter(i => i._id !== payload)
            },
        [createItemThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.items.push(payload)
            },
        [updateItemThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const itemNdx = state.items
                    .findIndex((t) => t._id === payload._id)
                state.items[itemNdx] = {
                    ...state.items[itemNdx],
                    ...payload
                }
            }
    },
    reducers: { }
})

export default itemsSlice.reducer;