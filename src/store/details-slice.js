import { createSlice } from '@reduxjs/toolkit';

const detailSlice = createSlice({
    name: 'details',
    initialState: {
        detailStore: []
    },
    reducers: {
        getDetails(state, action) {
            const details = action.payload;
            state.detailStore = details
        }
    }
})

export default detailSlice;
// export default getDetails  

export const detailActions = detailSlice.actions;