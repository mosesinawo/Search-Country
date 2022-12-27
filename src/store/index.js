import {configureStore} from '@reduxjs/toolkit';
import detailSlice from './details-slice';
import modeSlice from './mode-slice';
import searchSlice from './search-slice';

const store = configureStore({
    reducer:{
        countryList:searchSlice.reducer,
       countryDetails: detailSlice.reducer,
       mode: modeSlice.reducer

    }
})

export default store