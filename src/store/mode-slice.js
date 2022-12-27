import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
    name: 'mode',
    initialState: { mode: false },
    reduces: {
        changeMode(state) {
            state.mode = !state.mode
        }
    }
})

export default modeSlice;

export const modeActions = modeSlice.actions;