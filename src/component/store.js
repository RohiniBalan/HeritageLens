import { configureStore }  from "@reduxjs/toolkit";
import festivalReducer from "./festivalSlice";
import architectureReducer from "./architetureSlice";
import artReducer from "./artSlice";
import handicraftSlice from "./handicraftSlice"
import themeSlice from "./themeSlice"

const store = configureStore({
    reducer:{
        festivals: festivalReducer,
        architectures: architectureReducer,
        arts: artReducer,
        handicrafts: handicraftSlice,
        theme:themeSlice,
    }
});

export default store