import { createSlice } from '@reduxjs/toolkit';


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        countryList: [],
        filteredContent: [],
    },
    reducers: {
        searchStore(state, action) {
            const country = action.payload
            state.countryList = country

        },
        getRegion(state, action) {
            const regions = action.payload
           state.countryList = regions
        },
        getCountry(state, action) {
            const input = action.payload
            const filtered = state.countryList.filter((item) => {
                return item.name.toLowerCase().includes(input.toLowerCase())
            })
            state.filteredContent = filtered

        },
    },
})

export default searchSlice;
export const searchActions = searchSlice.actions
