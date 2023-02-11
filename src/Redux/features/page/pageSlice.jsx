import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: null,
    mouse: {
        x: 0,
        y: 0,
    },
};

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        pageChanged(state, action) {
            state.page = action.payload;
        },
        mouseMoved(state, action) {
            state.mouse.x = action.payload.x;
            state.mouse.y = action.payload.y;
        }
    },
});

export const selectPage = (state) => state.page.page;

export const selectMouse = (state) => state.page.mouse;

export const { pageChanged, mouseMoved } = pageSlice.actions;

export default pageSlice.reducer;