import {configureStore} from "@reduxjs/toolkit";
import itemsReducer from './itemsReducer.js';

const Store = configureStore({
    reducer: {
        items: itemsReducer
    },
});

export default Store;