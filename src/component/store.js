import { configureStore }  from "@reduxjs/toolkit";
import festivalReducer from "./festivalSlice";
import architectureReducer from "./architetureSlice";
import artReducer from "./artSlice";
import handicraftSlice from "./handicraftSlice"
import themeSlice from "./themeSlice";
import searchSlice fron " /searchSlice

const store = configureStore({
    reducer:{
        festivals: festivalReducer,
        architectures: architectureReducer,
        arts: artReducer,
        handicrafts: handicraftSlice,
        theme:themeSlice,
        search: searchSlice
    }
});

export default store
