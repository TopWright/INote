import { configureStore } from "@reduxjs/toolkit";

import noteSlice from "./noteSlice";
import UiSlice from "./UISlice";

const store = configureStore({
    reducer: { note: noteSlice.reducer, UI: UiSlice.reducer },
});

export default store;