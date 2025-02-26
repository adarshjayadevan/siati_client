import { createSlice } from '@reduxjs/toolkit';

const initialState = {    
    initialView: true,
};


const folderSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        initialViewToggle: (state, action) => {
            state.initialView = false
        },
    }
})

export const {
    initialViewToggle,
} = folderSlice.actions;

export default folderSlice.reducer;
